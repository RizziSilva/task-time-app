import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AuthStack } from 'src/navigation/auth.stack'
import { NavigationContainer } from '@react-navigation/native'
import { checkUserAction, useAppDispatch, useAppSelector } from '@slices'
import { AppStack } from './app.stack'

// TODO silva.william 28/05/2026: Utilizar o isLoading para manter o usuário na splashscreen enquanto carrega.
export function Navigation() {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.auth)

  useEffect(() => {
    dispatch(checkUserAction())
  }, [])

  function renderStack() {
    if (user) return <AppStack />

    return <AuthStack />
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>{renderStack()}</NavigationContainer>
    </SafeAreaProvider>
  )
}
