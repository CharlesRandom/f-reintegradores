import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Select } from 'antd';
import './Proyectos.css'
import Navbar from '../general/Navbar';
import Laboratoria from '../../images/proyectos/Logo_Laboratoria_173x30px-01.png'
import TrabajoDigno from '../../images/proyectos/Logo_ProyectoTrabajoDigno_173x71px-01.png'
import ProyectoCard from './ProyectoCard';
import isotipo from '../../images/Isotipo.png'

const Option = Select.Option;

class Proyectos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="proyectos">
          <img className="isotipo" src={isotipo} alt="Reintegradores isotipo"/>
          <h1>Proyectos</h1>
          <div className="filtros">
            <Select
              // onChange={value=>onSelectChange(value,"country")}
              showSearch
              style={{ width: 200, margin: 10 }}
              placeholder="Región (País)"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="MEX">México</Option>
              <Option value="USA">Estados Unidos</Option>
              <Option value="CAN">Canadá</Option>
            </Select>
            <Select
              // onChange={value=>onSelectChange(value,"country")}
              showSearch
              style={{ width: 200, margin: 10 }}
              placeholder="Estado o provincia"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="CDMX">Ciudad de México</Option>
              <Option value="OAX">Oaxaca</Option>
              <Option value="CHS">Chiapas</Option>
            </Select>
            <Select
              // onChange={value=>onSelectChange(value,"country")}
              showSearch
              style={{ width: 200, margin: 10 }}
              placeholder="Otros"
              optionFilterProp="children"
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="F1">Filtro 1</Option>
              <Option value="F2">Filtro 2</Option>
              <Option value="F3">Filtro 3</Option>
            </Select>
          </div>
          <div className="proyectos-container">
            {/* <Link to='/proyectos/detail'> */}
              <ProyectoCard 
                title="Proyecto A"
                desc="Descripción proyecto A" />
            {/* </Link> */}
            <ProyectoCard 
              title="Proyecto B"
              desc="Descripción proyecto B" />
            <ProyectoCard 
              title="Proyecto C"
              desc="Descripción proyecto C" />
            <ProyectoCard 
              title="Proyecto D"
              desc="Descripción proyecto D" />
            <ProyectoCard 
              title="Proyecto E"
              desc="Descripción proyecto E" />
            <ProyectoCard 
              title="Proyecto F"
              desc="Descripción proyecto F" />
            <ProyectoCard 
              title="Proyecto G"
              desc="Descripción proyecto G" />
          </div>
        </div>
      </div>
    )
  }
}

export default Proyectos