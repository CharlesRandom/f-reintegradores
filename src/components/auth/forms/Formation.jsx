import React from 'react'

import { Form, Input } from 'antd';
import '../DonanteForm.css'

const FormItem = Form.Item;

const Formation = ({data, setData}) => {
    return (
        <>
        <div className="form-names">
          <FormItem>
            <Input name="username" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
              placeholder="Nombre" />
          </FormItem>
          <FormItem>
            <Input name="lastname" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
              placeholder="Apellido" />
          </FormItem>
        </div>
        <FormItem>
          <Input name="phone" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
            placeholder="Teléfono" />
        </FormItem>
        <FormItem>
          <Input name="email" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
            placeholder="Correo electrónico" />
        </FormItem>
        <FormItem>
          <Input name="password" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
            type="password" placeholder="Contraseña" />
        </FormItem>
        <div className="upload-files">
            <p>Adjuntar currículum</p>
            <button>Subir archivo</button>
        </div>
    </>
    )
}

export default Formation
