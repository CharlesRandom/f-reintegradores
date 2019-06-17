import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home';
import AuthPage from './components/auth/AuthPage';
import ConfirmationPage from './components/confirmation/ConfirmationPage';
// import ObjetivoDetail from './components/objetivos/ObjetivoDetail';
import Proyectos from './components/proyectos/Proyectos';
import ConfirmationSuccess from './components/confirmation/ConfirmationSuccess';
import NewProject from './components/proyectos/NewProject';
import HomeNewsletter from './components/home/HomeNewsletter';
import DonanteForm from './components/auth/DonanteForm';
import OrgForm from './components/auth/OrgForm';
import OrganizationData from './components/auth/forms/OrganizationData';
import OrganizationFiscalData from './components/auth/forms/OrganizationFiscalData';
import ObjectiveDetail from './components/proyectos/ObjectiveDetail';
import ProjectDetail from './components/proyectos/ProjectDetail';
import EditProject from './components/proyectos/EditProject';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/donar' component={DonanteForm}/>
    <Route path='/org' component={OrganizationData}/>
    <Route path='/fiscal' component={OrganizationFiscalData}/>
    <Route path='/new/org' component={OrgForm}/>
    <Route path='/signup' component={AuthPage}/>
    <Route path='/login' component={AuthPage}/>
    <Route path='/confirmation' component={ConfirmationSuccess}/>
    <Route path='/confirm/:confirmationCode' component={ConfirmationPage}/>
    <Route path='/proyectos/obj' component={ObjectiveDetail}/>
    <Route path='/proyectos/detail' component={ProjectDetail}/>
    <Route path='/proyectos/edit' component={EditProject}/>
    <Route path='/proyectos/new' component={NewProject}/>
    <Route path='/proyectos' component={Proyectos}/>
    <Route path='/news' component={HomeNewsletter}/>
  </Switch>
)

export default Routes