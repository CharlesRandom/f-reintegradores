import React from 'react'
import { Form, Input, Select, Radio } from 'antd';

import '../DonanteForm.css'

const { Option, OptGroup } = Select
const {Group} = Radio
const FormItem = Form.Item

const ProjectForm = ({data, setData, setDisabled}) => {

    const handleObjectives = objective => setData({...data, 'objective':objective})
    const handleCountry = country => setData({...data, 'country':country})
    const handleDeductible = deductible => {setData({...data, 'deductible':deductible.target.value}); setDisabled(false)}

    return (
        <>
        <FormItem>
            <Select placeholder="Selecciona 1 de los 17 objetivos ONU" style={{ textAlign:"center" }} onChange={handleObjectives}>
              <Option value="Fin de la pobreza">1. Fin de la pobreza</Option> 
              <Option value="Hambre cero">2. Hambre cero</Option> 
              <Option value="Salud y bienestar">3. Salud y bienestar</Option> 
              <Option value="Educación de calidad">4. Educación de calidad</Option> 
              <Option value="Igualdad de género">5. Igualdad de género</Option> 
              <Option value="Agua limpia y saneamiento">6. Agua limpia y saneamiento</Option> 
              <Option value="Energía asequible y no contaminante">7. Energía asequible y no contaminante</Option> 
              <Option value="Trabajo decente y crecimiento económico">8. Trabajo decente y crecimiento económico</Option> 
              <Option value="Industria, innovación e infraestructura">9. Industria, innovación e infraestructura</Option> 
              <Option value="Reducción de las desigualdades">10. Reducción de las desigualdades</Option> 
              <Option value="Ciudades y comunidades sostenibles">11. Ciudades y comunidades sostenibles</Option> 
              <Option value="Producción y consumo responsable">12. Producción y consumo responsable</Option> 
              <Option value="Acción por el clima">13. Acción por el clima</Option> 
              <Option value="Vida submarina">14. Vida submarina</Option> 
              <Option value="Vida de ecosistemas terrestres">15. Vida de ecosistemas terrestres</Option> 
              <Option value="Paz, justicia e instituciones sólidas">16. Paz, justicia e instituciones sólidas</Option> 
              <Option value="Alianzar para lograr los objetivos">17. Alianzar para lograr los objetivos</Option> 
            </Select>
        </FormItem>
        <FormItem>
          <Input name="name" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
            placeholder="Nombre del proyecto" />
        </FormItem>
        <FormItem>
          <Input name="population" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
            placeholder="Población a la que atiende" />
        </FormItem>
        <FormItem>
            <Select placeholder="Región donde aplica el proyecto" onChange={handleCountry}>
                <OptGroup label="Norte América">
                    <Option value="Mexico">Mexico</Option>
                    <Option value="USA">USA</Option>
                </OptGroup>
                <OptGroup label="Centroamérica">
                    <Option value="Belice">Belice</Option>
                    <Option value="Guatemala">Guatemala</Option>
                </OptGroup>
                <OptGroup label="América del Sur">
                    <Option value="Argentina">Argentina</Option>
                    <Option value="Colombia">Colombia</Option>
                    <Option value="Venezuela">Venezuela</Option>
                </OptGroup>
            </Select>
        </FormItem>
        <FormItem>
          <Input name="responsible" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
            placeholder="Nombre completo del responsable y cargo" />
        </FormItem>
        <FormItem>
          <Input name="description" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
            placeholder="Descripción del proyecto" />
        </FormItem>
        <div className="form-names">
            <p className="form-names-p">¿Está autorizado para emitir recibos deducibles de impuestos?</p>
            <FormItem className="form-names-div">
                <Group name="deductible" onChange={handleDeductible}>
                    <Radio value={true}>Si</Radio>
                    <Radio value={false}>No</Radio>
                </Group>
            </FormItem>
        </div>
    </>
    )
}

export default ProjectForm
