import { StyleSheet } from "react-native";

export const slides_styles = StyleSheet.create({
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
    SlidesContainer: {
        width: "auto",
        flex: 1,
        borderWidth: 5,
        borderColor: "#1E5E65",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 5,
    }
});