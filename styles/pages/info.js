import { StyleSheet } from "react-native";

export const info_styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    buttonsContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        paddingHorizontal: 20,
    },
    floatingButtonContainer: {
        width: "100%",
        height: "auto",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    }
});