import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { ClosedEye, FullLogo, OpenedEye } from '@statics'
import { styles } from './login.style'

export function Login() {
  function getPasswordIcon() {
    const isPressed = false

    return isPressed ? ClosedEye : OpenedEye
  }

  function renderPasswordExtraContent(isPassword: boolean) {
    if (!isPassword) return null

    return (
      <>
        <Text style={styles.resetPasswordText}>Reset password</Text>
        <Pressable style={styles.passwordReveal}>
          <Image style={styles.passwordImage} source={getPasswordIcon()} />
        </Pressable>
      </>
    )
  }

  function renderInput(label: string, isPassword: boolean) {
    const passwordStyle = isPassword ? styles.passwordInput : null
    return (
      <View style={styles.containerInput}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput style={[styles.input, passwordStyle]} />
        {renderPasswordExtraContent(isPassword)}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={FullLogo} />
      <Text style={styles.title}>Log in and start Working</Text>
      {renderInput('Email', false)}
      {renderInput('Password', true)}
      <Pressable style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </Pressable>
      <Pressable style={styles.signUpButton}>
        <Text style={styles.loginButtonText}>Sign up for an account</Text>
      </Pressable>
    </View>
  )
}
