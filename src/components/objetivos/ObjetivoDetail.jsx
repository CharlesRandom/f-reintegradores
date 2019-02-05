import React, { Component } from 'react'

class ObjetivoDetail extends Component {

  state={
    objetivo:""
  }

  componentWillMount(){
    console.log("Objetivo Detail will mount")
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user) this.props.history.push('/login')
    else {
      const id = this.props.match.params.id
      this.setState({objetivo:id})
      console.log(this.state)
    }
  }

  render() {
    const {objetivo} = this.state
    return (
      <div>
        <h1>Objetivo {objetivo}</h1>
      </div>
    )
  }
}

export default ObjetivoDetail