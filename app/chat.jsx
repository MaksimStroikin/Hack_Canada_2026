import { StyleSheet, TextInput, View, Pressable, Text, Image, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useRef } from 'react'
import { chat_styles } from '../styles/pages/chat'
import { ui_elements_styles } from '../styles/ui_elements'
import { WebView } from 'react-native-webview'
import { questionsAndResponces } from '../context/responces'

const Chat = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // We use a hidden WebView to play audio, avoiding native module requirements in Expo Go
    const webViewRef = useRef(null);


    const handleHardcodedMessage = (message) => {
        const hardcodedResponse = questionsAndResponces.find((question) => question.question === message);
        if (hardcodedResponse) {
            const textToSend = message;
            if (!textToSend.trim() || isLoading) return;
            setChatHistory(prev => [...prev, { role: 'user', text: textToSend }]);
            setChatHistory(prev => [...prev, { role: 'ai', text: hardcodedResponse.responce }]);
            setIsLoading(false);
        }
    };

    function handleNextMessage() {
        if (currentMessage < questionsAndResponces.length - 1)
            setCurrentMessage(currentMessage + 1);
    }
    function handlePreviousMessage() {
        if (currentMessage > 0)
            setCurrentMessage(currentMessage - 1);
    }

    const sendMessage = async (messageOverride) => {
        const textToSend = messageOverride || inputText;
        if (!textToSend.trim() || isLoading) return;

        // Add user message to history
        setChatHistory(prev => [...prev, { role: 'user', text: textToSend }]);
        setInputText('');
        setIsLoading(true);


        try {
            const response = await fetch('https://hack-canada-2026.onrender.com/api/qna/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: textToSend })
            });

            const data = await response.json();

            // Add AI response to history
            setChatHistory(prev => [...prev, { role: 'ai', text: data.responseMessage }]);


        } catch (error) {
            console.error("Error:", error);
            setChatHistory(prev => [...prev, { role: 'ai', text: "Error connecting to backend (make sure it's running). If it's a CORS error, we need to add @CrossOrigin to the Controller!" }]);
        } finally {
            setIsLoading(false);
        }
    };

    const scrollViewRef = useRef(null);

    return (
        <View style={chat_styles.contentContainer}>
            {/* Hidden WebView solely for audio playback */}
            <View style={{ height: 0, width: 0, opacity: 0 }}>
                <WebView
                    ref={webViewRef}
                    source={{ html: '<html><body></body></html>' }}
                    mediaPlaybackRequiresUserAction={false}
                />
            </View>
            <ScrollView
                ref={scrollViewRef}
                style={chat_styles.responseContainer}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
                {chatHistory.length === 0 && !isLoading && (
                    <Text style={{ textAlign: 'center', marginTop: 20, color: '#666' }}>Ask me anything...</Text>
                )}
                {chatHistory.map((message, index) => (
                    <View key={index} style={{
                        alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                        backgroundColor: message.role === 'user' ? '#1E5E65' : '#e9ecef',
                        padding: 10,
                        borderRadius: 10,
                        marginVertical: 5,
                        maxWidth: '80%'
                    }}>
                        <Text style={{
                            color: message.role === 'user' ? 'white' : 'black',
                            fontWeight: '500'
                        }}>
                            {message.role === 'ai' ? '🤖 ' : ''}{message.text}
                        </Text>
                    </View>
                ))}
                {isLoading && (
                    <View style={{ alignSelf: 'flex-start', backgroundColor: '#e9ecef', padding: 10, borderRadius: 10, marginVertical: 5 }}>
                        <ActivityIndicator size="small" color="#1E5E65" />
                    </View>
                )}
            </ScrollView>
            <View style={chat_styles.userInteractionContainer}>
                <View style={ui_elements_styles.responseChoiceContainer}>
                    <Pressable style={({ pressed }) => [ui_elements_styles.responseChoiceButton,
                    pressed && ui_elements_styles.buttonPressed]} onPress={handlePreviousMessage} disabled={currentMessage === 0}>
                        <Text style={ui_elements_styles.responseChoiceText}>{"<"}</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => handleHardcodedMessage(questionsAndResponces[currentMessage].question)}
                        style={({ pressed }) => [ui_elements_styles.suggestedQuestionContainer, ui_elements_styles.button,
                        pressed && ui_elements_styles.buttonPressed]}>
                        <Text style={ui_elements_styles.suggestedQuestionText}>{questionsAndResponces[currentMessage].question}</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [ui_elements_styles.responseChoiceButton,
                    pressed && ui_elements_styles.buttonPressed]} onPress={handleNextMessage} disabled={currentMessage === questionsAndResponces.length - 1}>
                        <Text style={ui_elements_styles.responseChoiceText}>{">"}</Text>
                    </Pressable>
                </View>
                <View style={ui_elements_styles.textInputContainer}>
                    <TextInput
                        style={[ui_elements_styles.textInput, { paddingHorizontal: 10 }]}
                        placeholder='Enter the question'
                        value={inputText}
                        onChangeText={setInputText}
                        onSubmitEditing={() => sendMessage()}
                    />
                    <Pressable
                        onPress={() => sendMessage()}
                        style={({ pressed }) => [ui_elements_styles.sendMessageButton,
                        pressed && ui_elements_styles.buttonPressed]}>
                        <Text style={ui_elements_styles.sendMessageText}>Send</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Chat