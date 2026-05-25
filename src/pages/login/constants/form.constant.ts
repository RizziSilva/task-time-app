import { LoginFormErrorType } from 'src/types/login'
import { validatePassword } from 'src/utils'
import { validateEmail } from 'src/utils/validation/email.util'
import { LoginFormType } from '@types'

export const LOGIN_INPUTS = {
  EMAIL: {
    label: 'Email',
    isPassword: false,
    name: 'email',
    missingErrorMessage: 'Please enter an email',
    invalidErrorMessage: 'Please enter a valid email',
    validate: (value: string) => validateEmail(value),
  },
  PASSWORD: {
    label: 'Password',
    isPassword: true,
    name: 'password',
    missingErrorMessage: 'Please enter a password',
    invalidErrorMessage: 'Please enter a password',
    validate: (value: string) => validatePassword(value),
  },
}

export const LOGIN_INITIAL_FORM: LoginFormType = {
  email: '',
  password: '',
}

export const LOGIN_INITIAL_ERRORS: LoginFormErrorType = {
  email: '',
  password: '',
}
