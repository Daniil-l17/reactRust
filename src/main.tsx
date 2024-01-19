
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import Router from './router/Router'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
    <Router />
          </PersistGate>
  </Provider>
)
