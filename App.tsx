import { Provider } from 'react-redux'
import { Navigation } from '@navigation'
import { store } from '@slices'

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}
