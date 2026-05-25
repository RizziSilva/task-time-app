import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '@styles'

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={styles.containerSafeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
