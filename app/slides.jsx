import { StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { slides_styles } from '../styles/pages/slides.js'
import { ui_elements_styles } from '../styles/ui_elements.js'
import { useLocalSearchParams } from 'expo-router';

const Slides = () => {
    const { slides } = useLocalSearchParams();
    const parsedSlides = JSON.parse(slides);
    const [currentSlide, setCurrentSlide] = useState(0);
    function handleNextSlide() {
        if (currentSlide < parsedSlides.length - 1)
            setCurrentSlide(currentSlide + 1);
    }
    function handlePreviousSlide() {
        if (currentSlide > 0)
            setCurrentSlide(currentSlide - 1);
    }
    return (
        <View style={slides_styles.contentContainer}>
            <View style={slides_styles.SlidesContainer}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Image
                        source={parsedSlides[currentSlide].image}
                        style={ui_elements_styles.slideImage}
                    />
                    <Text style={ui_elements_styles.slideText}>{parsedSlides[currentSlide].text}</Text>
                </ScrollView>
            </View>
            <View style={slides_styles.userInteractionContainer}>
                <View style={ui_elements_styles.responseChoiceContainer}>
                    <Pressable
                        style={({ pressed }) => [ui_elements_styles.responseChoiceButton,
                        pressed && ui_elements_styles.buttonPressed]}
                        onPress={() => handlePreviousSlide()}
                        disabled={currentSlide === 0}>
                        <Text style={ui_elements_styles.responseChoiceText}>{"<"}</Text>
                    </Pressable>
                    <View style={[ui_elements_styles.suggestedQuestionContainer, ui_elements_styles.button, { borderWidth: 0 }]}>
                        <Text style={ui_elements_styles.suggestedQuestionText}>{currentSlide + 1} / {parsedSlides.length}</Text>
                    </View>
                    <Pressable
                        style={({ pressed }) => [ui_elements_styles.responseChoiceButton,
                        pressed && ui_elements_styles.buttonPressed]}
                        onPress={() => handleNextSlide()}
                        disabled={currentSlide === slides.length - 1}>
                        <Text style={ui_elements_styles.responseChoiceText}>{">"}</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Slides