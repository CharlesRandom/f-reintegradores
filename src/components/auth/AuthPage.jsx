import React, { Component } from 'react'
import { Spin, message } from 'antd';
import './Auth.css'
import LoginForm from './LoginForm'
import SignupDon from './SignupDon'
import {signup, login, getProfile} from '../../services/auth'
import {uploadFile} from '../../services/users'
import SignupUser from './SignupUser';
import SignupOrg from './SignupOrg';
import SignupVisit from './SignupVisit';
import SignupAngel from './SignupAngel';
import SignupFormacion from './SignupFormacion';

class AuthPage extends Component {
  state={
    user:{},
    current:{},
    userType:"none",
    loading:false
  }
  
  authError = e => {
    message.error(e);
    this.setState({loading:false})
  };

  signupUser = e => {
    const {user} = this.state
    e.preventDefault()
    console.log(user)
    this.setState({userType:user.userType})
    console.log(this.state)
  }

  signup = e => {
    this.setState({loading:true})
    const {user} = this.state
    e.preventDefault()
    signup(user)
      .then(r=>{
        if(r._id){
          this.setState({loading:false})
          this.props.history.push('/login')
        }
        else {
          console.log('Something went wrong, try sign up again')
          this.authError('Algo salió mal, intente registrarse nuevamente')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Algo salió mal, intente registrarse nuevamente')
      })
  }

  login = e => {
    this.setState({loading:true})
    const {user} = this.state
    e.preventDefault()
    login(user)
      .then(r=>{
        if(r._id){
          console.log('logged')
          getProfile(r._id)
          .then(r=>{
            localStorage.setItem('loggedUser',JSON.stringify(r))
            this.props.history.push('/objetivos')
          })
        }
        else {
          console.log('Something went wrong, please check console')
          this.authError('Algo salió mal, por favor revise sus credenciales')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Algo salió mal, por favor revise sus credenciales')
      })
  }

  onDateChange = (date, field) => {
    const {user} = this.state
    const value = date
    user[field] = value
    console.log(user)
    this.setState({user})
  }

  handleText = e => {
    const {user} = this.state
    const field = e.target.name
    const value = e.target.value
    user[field] = value
    console.log(user)
    this.setState({user})
  }

  onSelectChange = (value,field) => {
    const {user} = this.state
    user[field] = value
    console.log(user)
    this.setState({user})
  }

  onChange = (info,field) => {
    const {user} = this.state
    const file = info.file.originFileObj
    uploadFile(file)
      .then(link=>{
        info.file.status = "done"
        user[field] = link
        this.setState({user})
        // console.log(user)
      }).catch(e=>{
        console.log('Something went wrong D: try adding the image again')
        console.log(e)
      })
  }

  render() {
      const {pathname} = this.props.location
      const { signupUser, signup, login, handleText, onChange, onDateChange, onSelectChange } = this
      const {loading, user, userType} = this.state
    return (
      <div className="auth">
        <div className="auth-container">
          {pathname==='/login'?
          <div>
            {!loading ? 
            <LoginForm login={login} handleText={handleText}/> 
            : 
            <Spin tip="Loading...">
              <LoginForm login={login} handleText={handleText}/>
            </Spin>}
          </div>
          :
          <div>
            {!loading ? 
            
              {
                "none": <SignupUser signupUser={signupUser} handleText={handleText}/>,
                "Donatario": <SignupDon signup={signup} handleText={handleText} onChange={onChange} onDateChange={onDateChange} onSelectChange={onSelectChange} current={user} />,
                "Organización": <SignupOrg signup={signup} handleText={handleText} onChange={onChange} onDateChange={onDateChange}/>,
                "Visitante": <SignupVisit signup={signup} handleText={handleText} onChange={onChange} onDateChange={onDateChange} onSelectChange={onSelectChange}/>,
                "ProyectoÁngel":<SignupAngel />,
                "FormaciónAyuda":<SignupFormacion />
              }[userType]
            
            : 
            <Spin tip="Loading...">
              <SignupDon signup={signup} handleText={handleText} onChange={onChange}/>
            </Spin>}
          </div>
          }
        </div>
      </div>
    )
  }
}

export default AuthPage