import { StyleSheet } from "react-native";

export const layout_styles = StyleSheet.create({
    background: {
        flex: 1
    },
    headerContainer: {
        width: '100%',
        height: "auto",
        display: 'flex',
        paddingTop: 10,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
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
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: "#D8FFEB",
    }
})