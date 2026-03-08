import { StyleSheet } from "react-native";

export const ui_elements_styles = StyleSheet.create({
    button: {
        padding: 10,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
    },
    buttonPressed: {
        opacity: 0.7
    },
    primaryEmergencyButton: {
        backgroundColor: "#FF0000",
        width: "100%",
        aspectRatio: "1/1",
        borderRadius: 3,
        color: "#000000ff",
    },
    secondaryEmergencyButton: {
        backgroundColor: "#FFCE1B",
        width: "100%",
        height: "auto",
        paddingTop: 20,
        paddingBottom: 20,
        color: "#000000ff",
        borderRadius: 3,
    },
    infoButton: {
        backgroundColor: "#F3F4EF",
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 10,
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
    },
    infoListButton: {
        width: "100%",
        height: 120,
        backgroundColor: "#F3F4EF",
        paddingHorizontal: 12,
        borderColor: "#1E5E65",
        borderWidth: 3,
        borderRadius: 10,
        justifyContent: "center",
    },
    infoListText: {
        color: "#1E5E65",
        fontSize: 36,
        fontWeight: "bold",
        textAlign: "center",
    },
    floatingButtonContainer: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        zIndex: 100,
        elevation: 5,
    },
    floatingButton: {
        width: 80,
        height: 80,
        backgroundColor: '#F3F4EF',
        borderColor: '#1E5E65',
        borderWidth: 5,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    floatingButtonImage: {
        width: 45,
        height: 45,
        resizeMode: 'contain',
    }
})
