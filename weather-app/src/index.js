import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <div>
      <h1>Weather App</h1>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider >,
  document.getElementById('root')
);


