import React from 'react'

import { Form, Input } from 'antd';
import '../DonanteForm.css'

const FormItem = Form.Item;

const Organization = ({data, setData}) => {
    return (
        <>
            <FormItem>
            <Input name="userame" onChange={e => setData({...data, [e.target.name]:e.target.value})}  
                placeholder="Nombre de la organización" />
            </FormItem>
            <FormItem>
            <Input name="rfc" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
                placeholder="RFC" />
            </FormItem>
            <div className="form-names">
              <FormItem>
                <Input name="country" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
                  placeholder="País de origen" />
              </FormItem>
              <FormItem>
                <Input name="region" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
                  placeholder="Región (comunidad, poblado o municipio)" />
              </FormItem>
            </div>
            <FormItem>
                <Input name="email" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
                placeholder="Correo organizacional" />
            </FormItem>
            <FormItem>
                <Input name="password" onChange={e => setData({...data, [e.target.name]:e.target.value})} 
                type="password" placeholder="Contraseña" />
            </FormItem>
        </>
    )
}

export default Organization
