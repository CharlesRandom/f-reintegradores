import React from 'react'
import { Form, Input, Select, Tooltip, Icon, Upload, Button } from 'antd';
import { uploadFile } from '../../services/users'
import { addOrgData } from '../../services/organizations'
import './EditProject.css'

const { TextArea } = Input;
const Option = Select.Option;

const title = 'PROMARINO'
const logo = 'https://http2.mlstatic.com/frag-de-coral-seriatopora-sour-apple-promarino-D_NQ_NP_217705-MLM25063788233_092016-F.jpg'

const onSelectChange = (value,field) => {
  console.log(value,field)
}

const dummyRequest = ({ file, onSuccess }) => {
  setTimeout(() => {
    onSuccess("ok");
  }, 0);
};

const onChange = (info,field) => {
  const {orgData} = this.state
  const file = info.file.originFileObj
  uploadFile(file)
    .then(link=>{
      info.file.status = "done"
      orgData[field] = link
      this.setState({orgData})
      // console.log(orgData)
    }).catch(e=>{
      console.log('Something went wrong D: try adding the file again')
      console.log(e)
    })
}

const EditProject = () => {
  return (
    <div className="edit-project">
      <Form layout="vertical" method="POST" onSubmit={addOrgData}>
        <div className="edit-project-desc">
          <div>
            <h3>{title}</h3>
            <TextArea
              placeholder="Descripción"
              autosize={{ minRows: 6, maxRows: 16 }}
            />
          </div>
          <img src={logo} alt="logo pic"/>
        </div>
        <div className="edit-project-data">
          <div className="data-row">
          <Select
            onChange={value=>onSelectChange(value,"objective")}
            showSearch
            style={{ width: 250 }}
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
            onChange={value=>onSelectChange(value,"state")}
            showSearch
            style={{ width: 250 }}
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
          <div className="data-row">
          <Input
            placeholder="Responsable"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            // suffix={
            //   <Tooltip title="Nombre del responsable del proyecto">
            //     <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            //   </Tooltip>
            // }
          />
          <Input
            placeholder="Target"
            prefix={<Icon type="compass" style={{ color: 'rgba(0,0,0,.25)' }} />}
            // suffix={
            //   <Tooltip title="A qué va dirigido el proyecto">
            //     <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            //   </Tooltip>
            // }
          />
          </div>
          <div className="data-row">
          <Input
            placeholder="Avance"
            prefix={<Icon type="pie-chart" style={{ color: 'rgba(0,0,0,.25)' }} />}
            // suffix={
            //   <Tooltip title="Porcentaje de avance del proyecto">
            //     <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            //   </Tooltip>
            // }
          />
          <Input
            placeholder="Página Organización"
            prefix={<Icon type="global" style={{ color: 'rgba(0,0,0,.25)' }} />}
            // suffix={
            //   <Tooltip title="URL del sitio web de la organización">
            //     <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            //   </Tooltip>
            // }
          />
          </div>
        </div>
        <div className="upload-files">
          <p>Copia de Acta Constitutiva</p>
          <Upload onChange={(info)=>onChange(info,"media")}
            customRequest={dummyRequest}>
            <Button>
              <Icon type="upload" /> Subir archivo
            </Button>
          </Upload>
        </div>
      </Form>
    </div>
  )
}

export default EditProject