import { StyleSheet } from "react-native";

export const map_styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box"
    },
    mapContainer: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    locationInfoContainer: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 10,
        zIndex: 999,
        height: "auto",
        borderWidth: 5,
        borderColor: "#1E5E65",
        borderRadius: 10,
        padding: 10,
        backgroundColor: "white"
    }
});