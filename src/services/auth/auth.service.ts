import { apiInstance } from '../instance/instance.service'

export function AuthService() {
  async function login(email: string, password: string): Promise<any> {
    return apiInstance.post('/auth/login', { email, password })
  }

  return { login }
}
