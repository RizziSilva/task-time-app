import { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={styles.containerSafeArea} edges={['top', 'bottom']}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
  },
})
