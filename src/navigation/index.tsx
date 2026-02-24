import { NavigationContainer } from '@react-navigation/native'
import { AuthStack } from './auth.stack'

export function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}
