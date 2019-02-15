import React, { Component } from 'react'
import { Spin, message } from 'antd';
import {confirmation} from '../../services/auth'
import isotipo from '../../images/Isotipo.png'
import './Confirmation.css'

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
        this.props.history.push('/confirmation')
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
          <div>
            <img className="isotipo" src={isotipo} alt="Reintegradores isotipo"/>
            <h1>Algo salió mal, revise el link en su correo e intente nuevamente</h1>
          </div> 
          : 
          <Spin tip="Loading...">
            <h1>Confirmando...</h1>
          </Spin>}
      </div>
    )
  }
}

export default ConfirmationPage