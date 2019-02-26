import React from 'react'
import { Modal, Button } from 'antd';
// import './NewsCard.css'

const NewsCard = ({ title, img, desc, setModal2Visible, modal2Visible}) => {
  return (
    <div>
      <div className="newscard">
        <h3>{title}</h3>
        <img src={img} alt="News pic"/>
        <p>{desc}</p>
        <Button type="primary" onClick={() => setModal2Visible(true)}>Ver más</Button>
      </div>
      <Modal
          title={title}
          centered
          visible={modal2Visible}
          onOk={() => setModal2Visible(false)}
          okText="Cerrar"
          onCancel={() => setModal2Visible(false)}
          cancelText="Cancelar"
        >
          <p>{desc}</p>
        </Modal>
    </div>
  )
}

export default NewsCard
