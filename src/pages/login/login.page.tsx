import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { useAppSelector } from '@slices'
import { FullLogo } from '@statics'
import { LoginInputsType } from '@types'
import { LOGIN_INPUTS } from './constants'
import { useLogin } from './hook'
import { styles } from './login.style'

export function Login() {
  const { isPasswordHidden, handleShowPasswordClick, getPasswordIcon, onInputChange, handleCheckForErrors, getErrorMessage, getInputHasError, handleLoginClick } = useLogin()
  const { error } = useAppSelector((state) => state.auth)

  function renderLoginErrorMessage() {
    if (!error) return null

    return <Text style={styles.loginError}>{error}</Text>
  }

  function renderErrorMessage(name: string) {
    const message: string = getErrorMessage(name)

    if (!message) return null

    return <Text style={styles.errorMessage}>{message}</Text>
  }

  function renderPasswordExtraContent(isPassword: boolean) {
    if (!isPassword) return null

    return (
      <>
        <Text style={styles.resetPasswordText}>Reset password</Text>
        <Pressable style={styles.passwordReveal} onPress={handleShowPasswordClick}>
          <Image style={styles.passwordImage} source={getPasswordIcon()} />
        </Pressable>
      </>
    )
  }

  function renderInput(input: LoginInputsType) {
    const { label, isPassword, name } = input
    const passwordStyle = isPassword ? styles.passwordInput : null
    const hideContent: boolean = isPassword && isPasswordHidden
    const hasError: boolean = getInputHasError(name)
    const errorStyle = hasError ? styles.inputError : null

    return (
      <View style={styles.containerInput}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput onBlur={() => handleCheckForErrors(input)} onChangeText={(text) => onInputChange(name, text)} secureTextEntry={hideContent} style={[styles.input, passwordStyle, errorStyle]} />
        {renderErrorMessage(name)}
        {renderPasswordExtraContent(isPassword)}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={FullLogo} />
      <Text style={styles.title}>Log in and start Working</Text>
      {renderLoginErrorMessage()}
      {renderInput(LOGIN_INPUTS.EMAIL)}
      {renderInput(LOGIN_INPUTS.PASSWORD)}
      <Pressable onPress={handleLoginClick} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </Pressable>
      <Pressable style={styles.signUpButton}>
        <Text style={styles.loginButtonText}>Sign up for an account</Text>
      </Pressable>
    </View>
  )
}
