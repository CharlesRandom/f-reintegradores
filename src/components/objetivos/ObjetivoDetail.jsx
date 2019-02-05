import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Objetivos.css' 
import obj1 from '../../images/objetivos/Botones_Objetivos_172x115px_1.png'
import obj2 from '../../images/objetivos/Botones_Objetivos_172x115px_2.png'
import obj3 from '../../images/objetivos/Botones_Objetivos_172x115px_3.png'
import obj4 from '../../images/objetivos/Botones_Objetivos_172x115px_4.png'
import obj5 from '../../images/objetivos/Botones_Objetivos_172x115px_5.png'
import obj6 from '../../images/objetivos/Botones_Objetivos_172x115px_6.png'
import obj7 from '../../images/objetivos/Botones_Objetivos_172x115px_7.png'
import obj8 from '../../images/objetivos/Botones_Objetivos_172x115px_8.png'
import obj9 from '../../images/objetivos/Botones_Objetivos_172x115px_9.png'
import obj10 from '../../images/objetivos/Botones_Objetivos_172x115px_10.png'
import obj11 from '../../images/objetivos/Botones_Objetivos_172x115px_11.png'
import obj12 from '../../images/objetivos/Botones_Objetivos_172x115px_12.png'
import obj13 from '../../images/objetivos/Botones_Objetivos_172x115px_13.png'
import obj14 from '../../images/objetivos/Botones_Objetivos_172x115px_14.png'
import obj15 from '../../images/objetivos/Botones_Objetivos_172x115px_15.png'
import obj16 from '../../images/objetivos/Botones_Objetivos_172x115px_16.png'
import obj17 from '../../images/objetivos/Botones_Objetivos_172x115px_17.png'
import Navbar from '../general/Navbar';

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
      <div className="objetivo-detail">
        <Navbar />
        <h1>Objetivo {objetivo}</h1>
        {
          {
            "obj1":<Link to="/proyectos"><img src={obj1} alt="objetivo pic"/></Link>,
            "obj2":<Link to="/proyectos"><img src={obj2} alt="objetivo pic"/></Link>,
            "obj3":<Link to="/proyectos"><img src={obj3} alt="objetivo pic"/></Link>,
            "obj4":<Link to="/proyectos"><img src={obj4} alt="objetivo pic"/></Link>,
            "obj5":<Link to="/proyectos"><img src={obj5} alt="objetivo pic"/></Link>,
            "obj6":<Link to="/proyectos"><img src={obj6} alt="objetivo pic"/></Link>,
            "obj7":<Link to="/proyectos"><img src={obj7} alt="objetivo pic"/></Link>,
            "obj8":<Link to="/proyectos"><img src={obj8} alt="objetivo pic"/></Link>,
            "obj9":<Link to="/proyectos"><img src={obj9} alt="objetivo pic"/></Link>,
            "obj10":<Link to="/proyectos"><img src={obj10} alt="objetivo pic"/></Link>,
            "obj11":<Link to="/proyectos"><img src={obj11} alt="objetivo pic"/></Link>,
            "obj12":<Link to="/proyectos"><img src={obj12} alt="objetivo pic"/></Link>,
            "obj13":<Link to="/proyectos"><img src={obj13} alt="objetivo pic"/></Link>,
            "obj14":<Link to="/proyectos"><img src={obj14} alt="objetivo pic"/></Link>,
            "obj15":<Link to="/proyectos"><img src={obj15} alt="objetivo pic"/></Link>,
            "obj16":<Link to="/proyectos"><img src={obj16} alt="objetivo pic"/></Link>,
            "obj17":<Link to="/proyectos"><img src={obj17} alt="objetivo pic"/></Link>,
          }[objetivo]
        }
      </div>
    )
  }
}

export default ObjetivoDetail