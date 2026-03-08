import { StyleSheet, TextInput, View, Pressable, Text } from 'react-native'
import React from 'react'
import { chat_styles } from '../styles/pages/chat'
import { ui_elements_styles } from '../styles/ui_elements'

const Chat = () => {
    return (
        <View style={chat_styles.contentContainer}>
            <View style={chat_styles.responseContainer}></View>
            <View style={chat_styles.userInteractionContainer}>
                <View style={ui_elements_styles.responseChoiceContainer}>
                    <Pressable style={({ pressed }) => [ui_elements_styles.responseChoiceButton, ui_elements_styles.button,
                    pressed && ui_elements_styles.buttonPressed]}>
                        <Text>{"<"}</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [ui_elements_styles.suggestedQuestionContainer, ui_elements_styles.button,
                    pressed && ui_elements_styles.buttonPressed]}>
                        <Text>What is overdoese?</Text>
                    </Pressable>
                    <Pressable style={({ pressed }) => [ui_elements_styles.responseChoiceButton, ui_elements_styles.button,
                    pressed && ui_elements_styles.buttonPressed]}>
                        <Text>{">"}</Text>
                    </Pressable>
                </View>
                <View style={ui_elements_styles.textInputContainer}>
                    <TextInput style={ui_elements_styles.textInput} placeholder='Enter the question' />
                    <Pressable style={({ pressed }) => [ui_elements_styles.sendMessageButton, ui_elements_styles.button,
                    pressed && ui_elements_styles.buttonPressed]}><Text>Send</Text></Pressable>
                </View>
            </View>
        </View>
    )
}

export default Chat