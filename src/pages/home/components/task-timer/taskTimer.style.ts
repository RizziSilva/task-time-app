import { StyleSheet } from 'react-native'
import { COLORS } from '@styles'

export const styles = StyleSheet.create({
  containerTimer: {
    height: 70,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: COLORS.MINE_SHAFT,
    borderBottomWidth: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  timerInput: {
    color: COLORS.WHITE,
    fontSize: 16,
  },
  arrowDown: {
    position: 'absolute',
    bottom: 0,
  },
})
