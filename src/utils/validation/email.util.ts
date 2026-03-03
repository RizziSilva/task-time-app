import { EMAIL_REGEX } from '@constants'

export function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email)
}
