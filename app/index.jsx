import { StyleSheet, Text, View, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { index_styles } from '../styles/pages/index.js'
import { ui_elements_styles } from '../styles/ui_elements.js'

export default function Home() {
    return (
        <View style={index_styles.buttonsContainer}>
            <Pressable style={({ pressed }) => [ui_elements_styles.primaryEmergencyButton, pressed && ui_elements_styles.buttonPressed,
            ui_elements_styles.button]}>
                <Text style={ui_elements_styles.primaryEmergencyText}>SOS</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [ui_elements_styles.secondaryEmergencyButton, pressed && ui_elements_styles.buttonPressed,
            ui_elements_styles.button]}>
                <Text style={ui_elements_styles.secondaryEmergencyText}>HELP SOMEONE</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({})