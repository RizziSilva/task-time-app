import { useState } from 'react'
import { ClosedEye, OpenedEye } from '@statics'
import { LoginFormErrorType, LoginFormType, LoginInputsType } from '@types'
import { LOGIN_INITIAL_ERRORS, LOGIN_INITIAL_FORM } from '../constants'

export function useLogin() {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  const [form, setForm] = useState<LoginFormType>(LOGIN_INITIAL_FORM)
  const [formErrors, setFormErrors] = useState<LoginFormErrorType>(LOGIN_INITIAL_ERRORS)

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
  }
}
