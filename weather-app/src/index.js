import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Locations from './components/Locations/Locations'

const App = () => {
  return (
    <div>
      <h1>Weather App</h1>
      <Locations/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider >,
  document.getElementById('root')
);


