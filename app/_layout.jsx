import { StyleSheet, Text, View, KeyboardAvoidingView, Pressable, Platform, Image } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { layout_styles } from '../styles/pages/layout'
import { ui_elements_styles } from '../styles/ui_elements'

const _layout = () => {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <KeyboardAvoidingView
            behaviour={"height"}
            keyboardVerticalOffset={30}
            style={layout_styles.background}>
            <SafeAreaView style={layout_styles.headerContainer} edges={['top']}>
                <View style={layout_styles.logoContainer}>
                    <Image
                        source={require('../assets/logo_hackathon.png')}
                        style={layout_styles.logoWrapper}
                    />
                    <View style={layout_styles.logoTextContainer}>
                        <Text style={layout_styles.logoText}>Second Chance</Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => router.push('/info')}
                    style={({ pressed }) => [ui_elements_styles.infoButton, ui_elements_styles.button, pressed && ui_elements_styles.buttonPressed]}
                >
                    <Text style={ui_elements_styles.infoText}>More Info</Text>
                </Pressable>
            </SafeAreaView>
            <SafeAreaView style={[layout_styles.contentContainer, { paddingTop: insets.top + 70 }]} edges={['bottom', 'left', 'right']}>
                <Stack screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
                    <Stack.Screen name="index" options={{ headerShown: false, animation: 'none' }} />
                    <Stack.Screen name="map" options={{ headerShown: false, animation: 'none' }} />
                    <Stack.Screen name="info" options={{ headerShown: false, animation: 'none' }} />
                    <Stack.Screen name="slides" options={{ headerShown: false, animation: 'none' }} />
                    <Stack.Screen name="chat" options={{ headerShown: false, animation: 'none' }} />
                </Stack>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default _layout