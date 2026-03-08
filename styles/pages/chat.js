import { StyleSheet } from "react-native";

export const chat_styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        boxSizing: "border-box",
        gap: 10
    },
    userInteractionContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
    },
    responseContainer: {
        width: "auto",
        flex: 1,
        borderWidth: 5,
        borderColor: "#1E5E65",
        borderRadius: 10,
        padding: 5,
    }
});