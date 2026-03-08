import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { Link } from 'expo-router'
import { info_styles } from '../styles/pages/info.js'
import { ui_elements_styles } from '../styles/ui_elements.js'

export default function Info() {
    return (
        <View style={info_styles.container}>
            <View style={info_styles.buttonsContainer}>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoListButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]}>
                    <Text style={ui_elements_styles.infoListText}>Spot an Overdose</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoListButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]}>
                    <Text style={ui_elements_styles.infoListText}>NALOXONE Help</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoListButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]}>
                    <Text style={ui_elements_styles.infoListText}>Talk to Someone</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoListButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]}>
                    <Text style={ui_elements_styles.infoListText}>Opioid Resource Map</Text>
                </Pressable>
            </View>
            <View style={ui_elements_styles.floatingButtonContainer}>
                <Link href="/chat" asChild>
                    <Pressable>
                        {({ pressed }) => (
                            <View style={[ui_elements_styles.floatingButton, pressed && ui_elements_styles.buttonPressed]}>
                                <Image
                                    source={require('../assets/textbubble.png')}
                                    style={ui_elements_styles.floatingButtonImage}
                                />
                            </View>
                        )}
                    </Pressable>
                </Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})