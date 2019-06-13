import React, { Component } from 'react'
import './Proyectos.css'
import { Form, Icon, Input, Select, Button, 
  Upload, DatePicker, message } from 'antd';
import moment from 'moment';
import isotipo from '../../images/Isotipo.png'
import {uploadFile, addProject} from '../../services/projects'

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const dateFormat = 'YYYY/MM/DD';

class NewProject extends Component {

  state = {
    user:{},
    project:{}
  }

  authError = e => {
    message.error(e);
    // this.setState({loading:false})
  };

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user || !user.name) this.props.history.push('/login')
    else this.setState({user})
    this.setState({user})
  }

  addProject = e => {
    e.preventDefault()
    const {project} = this.state
    console.log("Proyecto", project)
    addProject(project)
      .then(r=>{
        if(r._id){
          // this.setState({loading:false})
          this.props.history.push('/proyectos')
        }
        else {
          console.log('Something went wrong, try adding project again')
          this.authError('Algo salió mal, intente agregar proyecto nuevamente')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Algo salió mal, intente agregar proyecto nuevamente')
      })
  }
  
  handleText = e => {
    const {project} = this.state
    const field = e.target.name
    const value = e.target.value
    project[field] = value
    console.log(project)
    this.setState({project})
  }

  onSelectChange = (value,field) => {
    const {project} = this.state
    project[field] = value
    console.log(project)
    this.setState({project})
  }

  onChange = (info,field) => {
    const {project} = this.state
    const file = info.file.originFileObj
    uploadFile(file)
      .then(link=>{
        info.file.status = "done"
        project[field] = link
        this.setState({project})
        // console.log(user)
      }).catch(e=>{
        console.log('Something went wrong D: try adding the file again')
        console.log(e)
      })
  }

  onDateChange = (date, field) => {
    const {project} = this.state
    const value = date
    project[field] = value
    console.log(project)
    this.setState({project})
  }

  render() {
    const { addProject, handleText, onSelectChange, onChange, onDateChange } = this
    return (
      <div className="project-form">
        <img className="isotipo" src={isotipo} alt="Reintegradores isotipo"/>
        <div style={{display:"flex",justifyContent:"center"}}>
          <h2 style={{fontFamily:"Brandon Bold"}}>ADMINISTRACIÓN DE PROYECTOS</h2>
          <h2>&nbsp;|&nbsp;</h2>
          <h2>Agregar Proyectos</h2>
        </div>
        <div className="form">
          <Form layout="vertical" method="POST" onSubmit={addProject}>
            <div className="project-basic">
              <FormItem>
                <Input name="name" onChange={handleText} prefix={<Icon type="project" 
                  style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre del proyecto" />
              </FormItem>
              <FormItem>
                <Select
                  onChange={value=>onSelectChange(value,"objective")}
                  showSearch
                  style={{ width: 400 }}
                  placeholder="Objetivo 2030"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
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
              </FormItem>
              <FormItem>
                <Select
                  onChange={value=>onSelectChange(value,"country")}
                  showSearch
                  style={{ width: 400 }}
                  placeholder="País"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="MEX">México</Option>
                  <Option value="USA">Estados Unidos</Option>
                  <Option value="CAN">Canadá</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Select
                  onChange={value=>onSelectChange(value,"state")}
                  showSearch
                  style={{ width: 400 }}
                  placeholder="Estado"
                  optionFilterProp="children"
                  filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  <Option value="CDMX">CDMX</Option>
                  <Option value="OAX">Oaxaca</Option>
                  <Option value="CHS">Chiapas</Option>
                </Select>
              </FormItem>
            </div>
            <div className="project-desc">
              <FormItem>
                <TextArea name="slogan" onChange={handleText} style={{width:"60%"}} rows={2} 
                placeholder="Escribe algún slogan o descripción breve del proyecto (Máximo 140 caracteres)"/>
              </FormItem>
              <FormItem>
                <TextArea name="typeDescription" onChange={handleText} style={{width:"30%"}} rows={2} 
                placeholder="Describe brevemente en qué consiste el proyecto. Ej. Becas de estudio"/>
              </FormItem>
              <FormItem>
                <Upload onChange={(info)=>onChange(info,"logo")}>
                  <Button>
                    <Icon type="upload" /> Logotipo
                  </Button>
                </Upload>
              </FormItem>
            </div>
            <div className="project-detail">
              <FormItem>
                <Input name="universe" onChange={handleText} prefix={<Icon type="team" 
                  style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Universo en el que impacta (Ej. 10 becas, 10,000 personas, etc.)" />
              </FormItem>
              <FormItem>
                <Input name="totalCost" onChange={handleText} prefix={<Icon type="dollar" 
                  style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="Costo total" />
              </FormItem>
              <FormItem>
                <Input name="phase" onChange={handleText} prefix={<Icon type="schedule" 
                  style={{ color: 'rgba(0,0,0,.25)' }} />} 
                  placeholder="En qué etapa se encuentra (Trimestre o semestre según el proyecto)" />
              </FormItem>
            </div>
            <div className="project-context">
              <div className="project-dates">
                <FormItem>
                  <DatePicker placeholder="Inicio"
                    onChange={(date, dateString) => onDateChange(date,"startDate")} 
                    style={{width:"400px"}} 
                    defaultPickerValue={moment('2020/01/01', dateFormat)} />
                </FormItem>
                <FormItem>
                  <DatePicker placeholder="Fin"
                    onChange={(date, dateString) => onDateChange(date,"endDate")} 
                    style={{width:"400px"}} 
                    defaultPickerValue={moment('2020/12/01', dateFormat)} />
                </FormItem>
              </div>
              <FormItem>
                <TextArea name="context" onChange={handleText} style={{width:"60%"}} rows={2} 
                placeholder="Describe el contexto en el cual surge el proyecto, qué busca resolver y cómo plantea hacerlo."/>
              </FormItem>
            </div>
            <div className="project-docs">
              <FormItem>
                <Upload onChange={(info)=>onChange(info,"video")}>
                  <Button>
                    <Icon type="upload" /> Video
                  </Button>
                </Upload>
              </FormItem>
              <FormItem>
                <Upload onChange={(info)=>onChange(info,"workplan")}>
                  <Button>
                    <Icon type="upload" /> Plan de trabajo
                  </Button>
                </Upload>
              </FormItem>
              <FormItem>
                <Upload onChange={(info)=>onChange(info,"agreement")}>
                  <Button>
                    <Icon type="upload" /> Convenio de colaboración
                  </Button>
                </Upload>
              </FormItem>
            </div>
            <FormItem>
              <div className="d-flex jcc aic">
                <Button style={{width:"100px"}} type="primary" htmlType="submit">Registrar</Button>
              </div>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

export default NewProject
