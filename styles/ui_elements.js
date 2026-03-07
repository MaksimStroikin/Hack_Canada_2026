import { StyleSheet } from "react-native";

export const ui_elements_styles = StyleSheet.create({
    button: {
        padding: 10,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    buttonPressed: {
        opacity: 0.7
    },
    primaryEmergencyButton: {
        backgroundColor: "#FF0000",
        width: "100%",
        aspectRatio: "1/1"
    },
    secondaryEmergencyButton: {
        backgroundColor: "#FFCE1B",
        width: "100%",
        height: "auto",
        paddingTop: 20,
        paddingBottom: 20,
    },
    slidesButton: {
        backgroundColor: "#FFFFFF",
    },
    infoButton: {
        backgroundColor: "#F3F4EF",
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    primaryEmergencyText: {
        color: "white",
        fontSize: 100,
        fontWeight: "bold",
    },
    secondaryEmergencyText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
    infoText: {
        color: "#1E5E65",
        fontSize: 20,
        fontWeight: "bold",
    }

    /* Building Blocks/Button group/Connected segments/Large */
})


