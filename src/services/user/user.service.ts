import { apiInstance } from '../instance/instance.service'

export function UserService() {
  async function getUserInfo(): Promise<any> {
    return apiInstance.get('/user')
  }

  return { getUserInfo }
}
