import { useState } from 'react'
import { AuthService } from '@services'
import { ClosedEye, OpenedEye } from '@statics'
import { LoginFormErrorType, LoginFormType, LoginInputsType } from '@types'
import { LOGIN_ERROR_MESSAGE, LOGIN_INITIAL_ERRORS, LOGIN_INITIAL_FORM, UNAUTHORIZED_ERROR_MESSAGE } from '../constants'

export function useLogin() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [form, setForm] = useState<LoginFormType>(LOGIN_INITIAL_FORM)
  const [formErrors, setFormErrors] = useState<LoginFormErrorType>(LOGIN_INITIAL_ERRORS)
  const [loginErrorMessage, setLoginErrorMessage] = useState('')
  const { login } = AuthService()

  async function handleLoginClick() {
    try {
      await login(form.email, form.password)
    } catch (error) {
      console.error(JSON.stringify(error))
      const isUnauthorized = error.response?.status === 401
      if (isUnauthorized) setLoginErrorMessage(UNAUTHORIZED_ERROR_MESSAGE)
      else setLoginErrorMessage(LOGIN_ERROR_MESSAGE)
    }
  }

  function onInputChange(name: string, value: string) {
    setForm({ ...form, [name]: value })
  }

  function handleCheckForErrors(input: LoginInputsType) {
    const name: keyof LoginFormType = input.name as keyof LoginFormType
    const { invalidErrorMessage, missingErrorMessage, validate } = input
    let errorMessage: string = ''
    const value: string = form[name]
    const isValid: boolean = validate(value)

    if (!value) errorMessage = missingErrorMessage
    else if (!isValid) errorMessage = invalidErrorMessage

    setFormErrors((oldValue) => ({ ...oldValue, [name]: errorMessage }))
  }

  function handleShowPasswordClick() {
    setIsPasswordHidden(!isPasswordHidden)
  }

  function getPasswordIcon() {
    return isPasswordHidden ? OpenedEye : ClosedEye
  }

  function getErrorMessage(name: string) {
    const nameAsLoginType = name as keyof LoginFormType

    return formErrors[nameAsLoginType]
  }

  function getInputHasError(name: string): boolean {
    const nameAsLoginType = name as keyof LoginFormType

    return !!formErrors[nameAsLoginType]
  }

  return {
    isPasswordHidden,
    handleShowPasswordClick,
    getPasswordIcon,
    onInputChange,
    getErrorMessage,
    handleCheckForErrors,
    getInputHasError,
    handleLoginClick,
    loginErrorMessage,
  }
}
