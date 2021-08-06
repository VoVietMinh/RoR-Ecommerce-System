import React, { useState } from 'react'
import './App.css';
import buildPages from './components/App/buildPages';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm';
import useToken from './components/App/useToken';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <LoginForm setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter forceRefresh={true}>
        <Switch>
          {buildPages().map((route) => <Route {...route} />)}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
