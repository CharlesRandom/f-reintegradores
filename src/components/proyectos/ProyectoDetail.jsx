import React, { Component } from 'react'
import Laboratoria from '../../images/proyectos/Logo_Laboratoria_173x30px-01.png'
import Navbar from '../general/Navbar';

class ProyectoDetail extends Component {
  render() {
    return (
      <div className="proyecto-detail">
        <Navbar />
        <h1>Detalle</h1>
        <div className="proyecto-detail-container">
          <div className="basic-info">
            <div>
              <p className="bold">Nombre del proyecto</p>
              <p>Laboratoria</p>
            </div>
            <div>
              <p className="bold">Objetivo</p>
              <p>8. Trabajo decente y crecimiento económico</p>
            </div>
            <div>
              <p className="bold">Región (País)</p>
              <p>México</p>
            </div>
            <div>
              <p className="bold">Estado o Provincia</p>
              <p>Ciudad de México</p>
            </div>
          </div>
          <div className="detail-info">
            <div className="detail-info-data">
              <div className="detail-info-data-col">
                <div>
                  <p className="bold">Slogan</p>
                  <p>Talento tech femenino de latinamérica para el mundo</p>
                </div>
                <div>
                  <p className="bold">Cantidad</p>
                  <p>10</p>
                </div>
                <div>
                  <p className="bold">Número de personas beneficiadas</p>
                  <p>10</p>
                </div>
              </div>
              <div className="detail-info-data-col">
                <div>
                  <p className="bold">Tipo</p>
                  <p>Becas de estudio</p>
                </div>
                <div>
                  <p className="bold">Duración</p>
                  <p>12 meses</p>
                </div>
                <div>
                  <p className="bold">Costo Total</p>
                  <p>$800,000.00</p>
                </div>
              </div>
            </div>
            <div className="detail-info-logo">
              <div>
                <img src={Laboratoria} alt="Proyecto Logo"/>
              </div>
              <div>
                <p className="bold">Inicio</p>
                <p>22/04/2018</p>
              </div>
              <div>
                <p className="bold">Fin</p>
                <p>22/04/2019</p>
              </div>
            </div>
          </div>
          <div className="description">
            <p className="bold">Descripción</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aspernatur? Odit, nisi! Fugiat ipsum explicabo nemo impedit, illo odio ab pariatur hic qui repellendus expedita facilis eius, consequuntur nihil modi.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProyectoDetail