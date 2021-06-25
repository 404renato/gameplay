import { StyleSheet } from 'react-native'
import { theme } from './../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  user: {
    flexDirection: 'row',
  },

  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },

  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },

  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },

  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary80,
  },

  decision: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },

  decisionContainer: {
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  decisionButton: {
    height: 60,
    width: 175,
    backgroundColor: theme.colors.primary,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.highlight,
  },
})
