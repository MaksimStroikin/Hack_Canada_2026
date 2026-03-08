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
    },
    textInputContainer: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        boxSizing: "border-box",
        gap: 10
    },
    textInput: {
        flex: 1,
        fontSize: 20,
        borderWidth: 5,
        borderColor: "#1E5E65",
        borderRadius: 10
    },
    responseChoiceContainer: {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 5,
        borderColor: "#1E5E65",
        borderRadius: 10,
        padding: 10
    },
    responseChoiceButton: {
        width: 50,
        aspectRatio: "1/1",
        borderWidth: 5,
        borderColor: "#1E5E65",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    responseChoiceText: {
        color: "#1E5E65",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center",
    },
    sendMessageButton: {
        alignSelf: "stretch",
        aspectRatio: "1/1",
        padding: 5,
        borderWidth: 5,
        borderColor: "#1E5E65",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    sendMessageText: {
        color: "#1E5E65",
        fontWeight: "bold",
        fontSize: 16,
    },
    suggestedQuestionContainer: {
        flex: 1,
        width: "auto",
        height: "auto",
        borderWidth: 5,
        borderColor: "#1E5E65",
        borderRadius: 10,
    },
    suggestedQuestionText: {
        color: "#1E5E65",
        fontWeight: "bold",
        fontSize: 20,
    },
    speakerContainer: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
    },
    speakerWrapper: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderWidth: 5,
        borderColor: "#1E5E65",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    speaker: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    }
});


