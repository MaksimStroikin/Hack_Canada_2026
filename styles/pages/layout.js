import { StyleSheet } from "react-native";

export const layout_styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        height: "auto",
        display: 'flex',
        paddingTop: 5,
        paddingBottom: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#99B4A6",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    contentContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: "#D8FFEB",
    },
    logoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    logoWrapper: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: "#1E5E65",
        borderRadius: 30,
        backgroundColor: "#D8FFEB",
        resizeMode: 'contain',
    },
    logoText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#1E5E65",
    },
    logoTextContainer: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    }
})