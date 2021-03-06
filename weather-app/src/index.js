import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import Locations from './components/Locations'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import './App.css'
import { Title }  from './components/Title'

const App = () => {
  return (
    <div className='container'>
      <Title/>
      <Container className='weather--card'>
        <Locations/>
      </Container>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store} >
    <App/>
  </Provider >,
  document.getElementById('root')
);


