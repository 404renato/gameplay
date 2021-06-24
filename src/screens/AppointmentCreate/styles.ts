import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    label: {
        color: theme.colors.heading,
        fontFamily: theme.fonts.title700,
        fontSize: 18
    },

    form: {
        paddingHorizontal: 24,
        marginTop: 32
    },

    select: {
        width: '100%',
        height: 68,
        flexDirection: 'row',
        borderColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        paddingRight: 25,
        overflow: 'hidden'
    },

    imageHolder: {
        width: 64,
        height: 68,
        backgroundColor: theme.colors.secondary50,
        borderWidth: 1,
        borderRadius: 8,
        left: -0.7
    },

    selectBody: {
        flex: 1,
        alignItems: 'center'
    },

    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },

    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    divider: {
        marginRight: 4,
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.highlight
    },

    charactersLimit: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight
    },

    footer: {
        marginVertical: 20,
        marginBottom: 56
    }
})