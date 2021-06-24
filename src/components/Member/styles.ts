import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    title: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },

    status: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9
    },

    nameStatus: {
        color: theme.colors.highlight,
        fontFamily: theme.fonts.text400,
        fontSize: 13
    }
})