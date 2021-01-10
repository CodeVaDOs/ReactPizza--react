import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './_redux/_reducers'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="">
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
