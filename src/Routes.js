import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import AuthPage from './components/auth/AuthPage';
import Objetivos from './components/objetivos/Objetivos';
import ConfirmationPage from './components/confirmation/ConfirmationPage';
// import ObjetivoDetail from './components/objetivos/ObjetivoDetail';
import Proyectos from './components/proyectos/Proyectos';
import ProyectoDetail from './components/proyectos/ProyectoDetail';
import ProyectosRegion from './components/proyectos/ProyectosRegion';
import ConfirmationSuccess from './components/confirmation/ConfirmationSuccess';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    <Route path='/objetivos/detail/:id' component={ProyectosRegion}/>
    <Route path='/objetivos' component={Objetivos}/>
    <Route path='/confirmation' component={ConfirmationSuccess}/>
    <Route path='/confirm/:confirmationCode' component={ConfirmationPage}/>
    <Route path='/proyectos/detail' component={ProyectoDetail}/>
    <Route path='/proyectos' component={Proyectos}/>
  </Switch>
)

export default Routes