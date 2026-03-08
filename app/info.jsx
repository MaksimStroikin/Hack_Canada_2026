import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import { useRouter } from 'expo-router'
import { info_styles } from '../styles/pages/info.js'
import { ui_elements_styles } from '../styles/ui_elements.js'

export default function Info() {
    const router = useRouter();
    return (
        <View style={info_styles.container}>
            <View style={info_styles.buttonsContainer}>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoListButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]} onPress={() => router.push('/slides')} >
                    <Text style={ui_elements_styles.infoListText}>Spot an Overdose</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoListButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]} onPress={() => router.push({ pathname: '/map', params: { apiEndpoint: '/map/narcan-sites' } })}>
                    <Text style={ui_elements_styles.infoListText}>NALOXONE Help</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoListButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]} onPress={() => router.push({ pathname: '/map', params: { apiEndpoint: '/map/therapy-sites' } })}>
                    <Text style={ui_elements_styles.infoListText}>Therapy Centers</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoListButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]} onPress={() => router.push({ pathname: '/map', params: { apiEndpoint: '/map/safe-injection-sites' } })}>
                    <Text style={ui_elements_styles.infoListText} >Safe Injection Sites</Text>
                </Pressable>
            </View>
            <View style={info_styles.floatingButtonContainer}>
                <Pressable
                    onPress={() => router.push('/chat')}
                    style={({ pressed }) => [ui_elements_styles.floatingButton, pressed && ui_elements_styles.buttonPressed]}
                >
                    <Image
                        source={require('../assets/textbubble.png')}
                        style={ui_elements_styles.floatingButtonImage}
                    />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})