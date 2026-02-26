import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FullLogo } from '@statics'

export function Login() {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={FullLogo} />
      <Text style={styles.title}>Log in and start Working</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 344,
    width: 344,
    maxHeight: 576,
    backgroundColor: '#1b1b1b',
    borderRadius: 8,
    padding: 32,
    alignItems: 'center',
  },
  logoImage: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#b1b1b1',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#D65C56',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 36,
    justifyContent: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
  },
})
