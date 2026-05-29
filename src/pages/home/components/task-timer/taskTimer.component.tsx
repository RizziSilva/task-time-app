import { Image, Pressable, TextInput, View } from 'react-native'
import { ArrowDown } from '@statics'
import { COLORS } from '@styles'
import { TASK_TITLE_INPUT } from '../../constants'
import { useTaskTimer } from './hook/useTaskTimer.hook'
import { styles } from './taskTimer.style'

export function TaskTimer() {
  const { handleInputChange } = useTaskTimer()

  return (
    <View style={styles.containerTimer}>
      <Pressable style={styles.arrowDown}>
        <Image source={ArrowDown} />
      </Pressable>
      <TextInput
        placeholder={TASK_TITLE_INPUT.placeholder}
        placeholderTextColor={COLORS.DELTA}
        onBlur={() => {}}
        onChangeText={(text) => {
          handleInputChange(text, TASK_TITLE_INPUT.name)
        }}
        style={styles.timerInput}
      />
    </View>
  )
}
