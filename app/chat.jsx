import { StyleSheet, TextInput, View, Pressable, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { chat_styles } from '../styles/pages/chat'
import { ui_elements_styles } from '../styles/ui_elements'

const Chat = () => {
    const [isMuted, setIsMuted] = useState(false);

    return (
        <View style={chat_styles.contentContainer}>
            <View style={ui_elements_styles.speakerContainer}>
                <Pressable
                    onPress={() => setIsMuted(!isMuted)}
                    style={({ pressed }) => [ui_elements_styles.speakerWrapper, pressed && ui_elements_styles.buttonPressed]}
                >
                    <Image
                        source={isMuted ? require('../assets/muted.png') : require('../assets/speaker.png')}
                        style={ui_elements_styles.speaker}
                    />
                </Pressable>
            </View>
            <View style={chat_styles.responseContainer}></View>
            <View style={chat_styles.userInteractionContainer}>
                <View style={ui_elements_styles.responseChoiceContainer}>
                    <Pressable style={({ pressed }) => [ui_elements_styles.responseChoiceButton,
                    pressed && ui_elements_styles.buttonPressed]}>
                        <Text style={ui_elements_styles.responseChoiceText}>{"<"}</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [ui_elements_styles.suggestedQuestionContainer, ui_elements_styles.button,
                    pressed && ui_elements_styles.buttonPressed]}>
                        <Text style={ui_elements_styles.suggestedQuestionText}>What is overdoese?</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [ui_elements_styles.responseChoiceButton,
                    pressed && ui_elements_styles.buttonPressed]}>
                        <Text style={ui_elements_styles.responseChoiceText}>{">"}</Text>
                    </Pressable>
                </View>
                <View style={ui_elements_styles.textInputContainer}>
                    <TextInput style={ui_elements_styles.textInput} placeholder='Enter the question' />
                    <Pressable style={({ pressed }) => [ui_elements_styles.sendMessageButton,
                    pressed && ui_elements_styles.buttonPressed]}><Text style={ui_elements_styles.sendMessageText}>Send</Text></Pressable>
                </View>
            </View>
        </View>
    )
}

export default Chat