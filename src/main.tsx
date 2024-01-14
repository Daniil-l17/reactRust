
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import Router from './router/Router'
import { Provider } from 'react-redux'
import { store } from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
  </Provider>
)
