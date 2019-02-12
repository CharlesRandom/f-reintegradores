import React from 'react'
import { Form, Radio, Button, } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const ProyectosRegion = ({handleText, selectRegion}) => {
  return (
    <div>
      <Form layout="vertical" method="POST" onSubmit={selectRegion}>
        <FormItem>
          <RadioGroup name="region" onChange={handleText}>
            <Radio value="region">Región</Radio>
            <Radio value="todos">Todos</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem>
          <div className="d-flex jcc aic">
            <Button style={{width:"100px"}} type="primary" htmlType="submit">Siguiente</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  )
}

export default ProyectosRegion
