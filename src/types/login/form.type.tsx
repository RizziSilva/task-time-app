export type LoginInputsType = {
  label: string
  isPassword: boolean
  name: string
  missingErrorMessage: string
  invalidErrorMessage: string
  validate: (value: string) => boolean
}

export type LoginFormType = {
  email: string
  password: string
}

export type LoginFormErrorType = {
  email: string
  password: string
}
