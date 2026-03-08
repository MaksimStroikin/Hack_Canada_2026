import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { index_styles } from '../styles/pages/index.js'
import { ui_elements_styles } from '../styles/ui_elements.js'
import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import { externalHelpSlides } from '../context/external_help_info.js';

export default function Home() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(null);
    const countdownIntervalRef = useRef(null);

    useEffect(() => {
        if (countdown === 0) {
            clearInterval(countdownIntervalRef.current);
            setCountdown(null);
            triggerSos();
        }
    }, [countdown]);

    const handleSosPress = () => {
        if (countdown !== null) {
            // Cancel the countdown
            clearInterval(countdownIntervalRef.current);
            setCountdown(null);
            Alert.alert("SOS Cancelled", "Emergency call has been cancelled.");
        } else {
            // Start the countdown
            setCountdown(5);
            countdownIntervalRef.current = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }
    };

    const triggerSos = async () => {
        Alert.alert("SOS triggered", "Acquiring your live GPS coordinates...");

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert("Permission Denied", "🚨 Failed to get location! Make sure you clicked 'Allow' in the permissions popup!");
            return;
        }

        try {
            let location = await Location.getCurrentPositionAsync({});
            const payload = {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            };

            Alert.alert("Location Found", `Dialing out via Twilio...`);

            const response = await fetch('https://hack-canada-2026.onrender.com/api/sos/emergency-call', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                Alert.alert("✅ Success!", `${data.status}\n\nYour teammate's phone should be ringing right now!`);
            } else {
                Alert.alert("Failed", `Server returned ${response.status}. Check your logs!`);
            }

        } catch (error) {
            console.error("Error:", error);
            Alert.alert("Error", "🚨 Error connecting to backend! Is your server running?");
        }
    };

    return (
        <View style={index_styles.buttonsContainer}>
            <Pressable
                onPress={handleSosPress}
                style={({ pressed }) => [ui_elements_styles.primaryEmergencyButton, pressed && ui_elements_styles.buttonPressed,
                ui_elements_styles.button]}>
                <Text style={ui_elements_styles.primaryEmergencyText}>
                    {countdown !== null ? `CANCEL (${countdown})` : 'SOS'}
                </Text>
            </Pressable>
            <Pressable style={({ pressed }) => [ui_elements_styles.secondaryEmergencyButton, pressed && ui_elements_styles.buttonPressed,
            ui_elements_styles.button]} onPress={() => router.push({ pathname: '/slides', params: { slides: JSON.stringify(externalHelpSlides) } })}>
                <Text style={ui_elements_styles.secondaryEmergencyText}>HELP SOMEONE</Text>
            </Pressable>
        </View>
    )
}