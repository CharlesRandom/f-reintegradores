import React, { Component } from 'react'
import { Spin, message } from 'antd';
import {confirmation} from '../../services/auth'
import './Confirmation.css'
// import { withRouter } from 'react-router-dom'

class ConfirmationPage extends Component {
  state={
    user:{},
    current:{},
    loading:false
  }
  
  authError = e => {
    message.error(e);
    this.setState({loading:false})
  };

  componentWillMount(){
    this.setState({loading:true})
    const token = this.props.location.pathname
    console.log(token)
    confirmation(token)
    .then(r => {
      console.log(r)
      if(r._id){
        this.setState({loading:false})
        this.props.history.push('/login')
      }
      else {
        console.log('Something went wrong, try opening link again')
        this.authError('Something went wrong, try opening link again')
      }
    }).catch(e=>{
      console.log(e)
      this.authError('Something went wrong, opening link again')
    })
  }

  render() {
    const {loading} = this.state
    return (
      <div className="confirmation">
        {!loading ? 
          <h1>Correo confirmado, bienvenido a Reintegradores!</h1> 
          : 
          <Spin tip="Loading...">
            <h1>Confirmando...</h1>
          </Spin>}
      </div>
    )
  }
}

// export default withRouter(ConfirmationPage)
export default ConfirmationPage