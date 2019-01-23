import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import AuthPage from './components/auth/AuthPage';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
  </Switch>
)

export default Routes