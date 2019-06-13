import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Modal } from 'antd';
import { addProject } from '../../services/projects'

import logo from '../../images/logo/Logo_reintegradores_horizontal.png'
import SocialFooter from '../general/SocialFooter';

import './Proyectos.css'
import ProjectForm from '../auth/forms/ProjectForm';
import FormItem from 'antd/lib/form/FormItem';

const newImage = 'https://res.cloudinary.com/gerard0jr/image/upload/v1559932974/Neobase/Reintegradores/register/Registros_fotos_Mesa_de_trabajo_1_copia_5.png'
const createdImg = 'https://res.cloudinary.com/gerard0jr/image/upload/v1559932974/Neobase/Reintegradores/register/Registros_fotos_Mesa_de_trabajo_1_copia_6.png'

<<<<<<< HEAD
  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('loggedUser'))
    if(!user || !user.name) this.props.history.push('/login')
    else this.setState({user})
    this.setState({user})
  }
=======
const NewProject = (props) => {
>>>>>>> c8c52723ca62bc9c85553c0effbe30290b5e60e4

  const [data, setData] = useState(null)
  const [created, setCreated] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const info = () => {
    Modal.info({
      title: 'No hemos podido completar el registro',
      content: (
        <div>
          <p>Hay un error con el servidor :(</p>
        </div>
      ),
      okText: 'Pues ya que',
      onOk() {},
    });
  }

  const createAgain = () => {
    setData(null)
    setCreated(false)
  }

  const postProyect = (e) => {
    e.preventDefault()
    addProject(data)
    .then(res => {setCreated(true); console.log(res)})
    .catch(err => info())
  }

  return (
    <div className="donante">
      <Link to="/"><img src={logo} className="logo" alt="Reintegradores logo"/></Link>
      <div className="donante-container">
        {created ? null : <h2>Inicia el registro de tu proyecto</h2>}
        <img src={created ? createdImg : newImage} alt="imagenes"/>
      </div>
      <div className="donante-form-container">
        <div className='blue form-title'>
          <h3>{created ? 'Registro de proyecto' : 'Registra tu proyecto'}</h3>
        </div>
        {created ? <div className="project-created">
          <h2>¡Muchas gracias por tu registro!</h2>
          <p>Revisaremos y validaremos los documentos en un plazo menor a 48 horas</p>
          <p>Se le enviará la aprobación cía correo electrónico</p>
          <p onClick={createAgain} className="create-again">Dar de alta otro proyecto</p>
        </div>: 
        <Form layout="vertical" method="POST" onSubmit={postProyect}>
          <ProjectForm setDisabled={setDisabled} data={data} setData={setData}/>
          <FormItem >
            <Button disabled={disabled} className='blue' type="primary" htmlType="submit">Siguiente</Button>
          </FormItem>
        </Form>}
      </div>
      <SocialFooter />
    </div>
  )
}

export default NewProject