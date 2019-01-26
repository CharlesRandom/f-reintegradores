import React, { Component } from 'react'
import { Spin, message } from 'antd';
import './Auth.css'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {signup, login, getProfile} from '../../services/auth'
import {uploadFile} from '../../services/users'

class AuthPage extends Component {
  state={
    user:{},
    current:{},
    loading:false
  }
  
  authError = e => {
    message.error(e);
    this.setState({loading:false})
  };

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
          this.authError('Something went wrong, try sign up again')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Something went wrong, try sign up again')
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
          console.log('Something went wrong, please check credentials')
          this.authError('Something went wrong, please check credentials')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Something went wrong, please check console')
      })
  }

  handleText = e => {
    const {user} = this.state
    const field = e.target.name
    const value = e.target.value
    user[field] = value
    // console.log(user)
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
      const { signup, login, handleText, onChange } = this
      const {loading, user} = this.state
    return (
      <div className="auth">
        <div className="auth-container">
          <div>
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
              <SignupForm signup={signup} handleText={handleText} onChange={onChange} current={user}/> 
              : 
              <Spin tip="Loading...">
                <SignupForm signup={signup} handleText={handleText} onChange={onChange}/>
              </Spin>}
            </div>
            }
          </div>          
        </div>
      </div>
    )
  }
}

export default AuthPage