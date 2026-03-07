import { StyleSheet, Text, View, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { Stack } from 'expo-router'
import { layout_styles } from '../styles/pages/layout'
import { ui_elements_styles } from '../styles/ui_elements'

const _layout = () => {
    return (
        <View style={layout_styles.background}>
            <SafeAreaView style={layout_styles.headerContainer} edges={['top']}>
                <Text>SecondChance</Text>
                <Pressable style={({ pressed }) => [ui_elements_styles.infoButton, ui_elements_styles.button, pressed && ui_elements_styles.buttonPressed]}>
                    <Text style={ui_elements_styles.infoText}>More Info</Text>
                </Pressable>
            </SafeAreaView>
            <View style={layout_styles.contentContainer}>
                <Stack screenOptions={{ contentStyle: { backgroundColor: 'transparent' } }}>
                    <Stack.Screen name="index" options={{ headerShown: false }} />
                    <Stack.Screen name="map" options={{ headerShown: false }} />
                    <Stack.Screen name="info" options={{ headerShown: false }} />
                    <Stack.Screen name="slides" options={{ headerShown: false }} />
                    <Stack.Screen name="chat" options={{ headerShown: false }} />
                </Stack>
            </View>
        </View>
    )
}

export default _layout