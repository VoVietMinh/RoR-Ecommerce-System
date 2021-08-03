import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Preferences from './components/Preferences/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm';
import useToken from './components/App/useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <LoginForm setToken={setToken} />
  }
  
  return (
    <div className="wrapper">
      <h1>Client App v1.0</h1>
      <BrowserRouter>
      <Switch>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/preferences">
          <Preferences></Preferences>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
