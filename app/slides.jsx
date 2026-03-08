import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { slides_styles } from '../styles/pages/slides.js'
import { ui_elements_styles } from '../styles/ui_elements.js'
import { useLocalSearchParams } from 'expo-router';

const Slides = () => {
    const [isMuted, setIsMuted] = useState(false);
    const { slides } = useLocalSearchParams();
    return (
        <View style={slides_styles.contentContainer}>
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
            <View style={slides_styles.SlidesContainer}>
                <Image
                    source={slides.image}
                    style={slides_styles.slideImage}
                />
                <Text style={slides_styles.slideText}>{slides.text}</Text>
            </View>
            <View style={slides_styles.userInteractionContainer}>
                <View style={ui_elements_styles.responseChoiceContainer}>
                    <Pressable style={({ pressed }) => [ui_elements_styles.responseChoiceButton,
                    pressed && ui_elements_styles.buttonPressed]}>
                        <Text style={ui_elements_styles.responseChoiceText}>{"<"}</Text>
                    </Pressable>
                    <View style={[ui_elements_styles.suggestedQuestionContainer, ui_elements_styles.button, { borderWidth: 0 }]}>
                        <Text style={ui_elements_styles.suggestedQuestionText}>Slide 1 / 10</Text>
                    </View>
                    <Pressable style={({ pressed }) => [ui_elements_styles.responseChoiceButton,
                    pressed && ui_elements_styles.buttonPressed]}>
                        <Text style={ui_elements_styles.responseChoiceText}>{">"}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Slides