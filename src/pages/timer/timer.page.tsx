import { Pressable, Text, View } from 'react-native'
import { getUserInfoAction } from 'src/slices/auth/auth.action'
import { logoutAction, useAppDispatch, useAppSelector } from '@slices'

export function Timer() {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()

  function handleLogout() {
    dispatch(logoutAction())
  }

  function handleGetUSerInfoTry() {
    dispatch(getUserInfoAction())
  }

  return (
    <View>
      <Text style={{ color: 'white' }}>Timer screen for user {user?.email}</Text>
      <Pressable style={{ backgroundColor: 'white' }} onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
      <Pressable style={{ backgroundColor: 'white' }} onPress={handleGetUSerInfoTry}>
        <Text>Try to get user</Text>
      </Pressable>
    </View>
  )
}
