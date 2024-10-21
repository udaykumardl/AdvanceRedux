import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Counter from './Components/Counter';
import { Fragment } from 'react';
import Header from './Components/Header'
import Auth from './Components/Auth'

function App() {
  const isAuth = useSelector(state => state.Auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {!isAuth &&<Auth />}
      {isAuth && <useSelector/>}
      <Counter/>
    </Fragment>
    
  )
}

export default App;
