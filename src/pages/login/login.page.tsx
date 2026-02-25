import { StyleSheet, Text, View } from 'react-native'

export function Login() {
  return (
    <View style={styles.container}>
      <Text>Login page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 344,
    backgroundColor: 'red',
  },
})
