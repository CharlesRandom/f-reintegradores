import React from 'react'
import { Select } from 'antd';
import Navbar from '../general/Navbar';
import './ObjectiveDetail.css'
import ProyectoCard from './ProyectoCard';

const Option = Select.Option;

const obj = '14. VIDA SUBMARINA'
const desc = 'Conservar y utilizar en forma sostenible los océanos, los mares y los recursos' +
' marinos para el desarrollo sostenibleLa gestión prudente de este recurso esencial es una ' +
' característica clave del futuro sostenible. Sin embargo, en la actualidad, existe un continuo ' +
' deterioro de las aguas costeras, debido a la contaminación y la acidificación de los océanos, ' +
'que está teniendo un efecto adverso sobre el funcionamiento de los ecosistemas ' +
'y la biodiversidad, y que también está afectando negativamente a la pesca de pequeña escala.' + 
'Las áreas marinas protegidas deben ser administradas de manera efectiva, contar con recursos ' +
'suficientes y regulaciones que ayuden a reducir la sobrepesca, la contaminación marina y la ' +
'acidificación de los océanos.'
const img = 'https://www.nationalgeographic.com.es/medio/2018/02/27/tortuga__1280x720.jpg'

const onSelectChange = (value,field) => {
  console.log(value,field)
  // const {user} = this.state
  // user[field] = value
  // console.log(user)
  // this.setState({user})
}

const ObjectiveDetail = () => {
  return (
    <div className="objective-detail">
      <Navbar />
      <div className="objective-top">
      <h3>{obj}</h3>
      <div className="objective-desc">
        <div className="objective-desc-left">
          <p>{desc}</p>
          <div className="objective-filters">
            <Select
              onChange={value=>onSelectChange(value,"objective")}
              showSearch
              style={{ width: 400 }}
              placeholder="Objetivo 2030"
              optionFilterProp="children"
              filterOption={(input, option) => 
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="obj1">1. Fin de la pobreza</Option>
              <Option value="obj2">2. Hambre cero</Option>
              <Option value="obj3">3. Salud y bienestar</Option>
              <Option value="obj4">4. Educación de calidad</Option>
              <Option value="obj5">5. Igualdad de género</Option>
              <Option value="obj6">6. Agua limpia y saneamiento</Option>
              <Option value="obj7">7. Energía asequible y no contaminante</Option>
              <Option value="obj8">8. Trabajo decente y crecimiento económico</Option>
              <Option value="obj9">9. Industria, innovación e infraestructura</Option>
              <Option value="obj10">10. Educación de calidad</Option>
              <Option value="obj11">11. Reducción de las desigualdades</Option>
              <Option value="obj12">12. Producción y consumo responsable</Option>
              <Option value="obj13">13. Acción por el clima</Option>
              <Option value="obj14">14. Vida submarina</Option>
              <Option value="obj15">15. Vida de Ecosistemas terrestres</Option>
              <Option value="obj16">16. Paz, justicia e instituciones sólidas</Option>
              <Option value="obj17">17. Alianzas para lograr los objetivos</Option>
            </Select>
            <Select
              onChange={value=>onSelectChange(value,"country")}
              showSearch
              style={{ width: 400 }}
              placeholder="País"
              optionFilterProp="children"
              filterOption={(input, option) => 
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="MEX">México</Option>
              <Option value="USA">Estados Unidos</Option>
              <Option value="CAN">Canadá</Option>
            </Select>
            <Select
              onChange={value=>onSelectChange(value,"state")}
              showSearch
              style={{ width: 400 }}
              placeholder="Estado"
              optionFilterProp="children"
              filterOption={(input, option) => 
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="CDMX">Ciudad de México</Option>
              <Option value="NL">Nuevo León</Option>
              <Option value="JAL">Jalisco</Option>
            </Select>
          </div>
        </div>
        <img src={img} alt="Objetivo"/>
      </div>
      </div>
      <div className="objective-projects">
        <ProyectoCard title="PROMARINO"
          img={img}
          desc="Conservar y utilizar en forma sostenible
          los océanos, los mares y los recursos marinos para el desarrollo sostenibleLa
          gestión..."/>
        <ProyectoCard title="TORTUSHARK"
          img={img}
          desc="Conservar y utilizar en forma sostenible
          los océanos, los mares y los recursos marinos para el desarrollo sostenibleLa
          gestión..."/>
        <ProyectoCard title="ALGAS Y CORALES"
          img={img}
          desc="Conservar y utilizar en forma sostenible
          los océanos, los mares y los recursos marinos para el desarrollo sostenibleLa
          gestión..."/>
        <ProyectoCard title="AGUA PURA"
          img={img}
          desc="Conservar y utilizar en forma sostenible
          los océanos, los mares y los recursos marinos para el desarrollo sostenibleLa
          gestión..."/>
        <ProyectoCard title="PROMARINO"
          img={img}
          desc="Conservar y utilizar en forma sostenible
          los océanos, los mares y los recursos marinos para el desarrollo sostenibleLa
          gestión..."/>
        <ProyectoCard title="TORTUSHARK"
          img={img}
          desc="Conservar y utilizar en forma sostenible
          los océanos, los mares y los recursos marinos para el desarrollo sostenibleLa
          gestión..."/>
        <ProyectoCard title="ALGAS Y CORALES"
          img={img}
          desc="Conservar y utilizar en forma sostenible
          los océanos, los mares y los recursos marinos para el desarrollo sostenibleLa
          gestión..."/>
        <ProyectoCard title="AGUA PURA"
          img={img}
          desc="Conservar y utilizar en forma sostenible
          los océanos, los mares y los recursos marinos para el desarrollo sostenibleLa
          gestión..."/>
      </div>
    </div>
  )
}

export default ObjectiveDetail