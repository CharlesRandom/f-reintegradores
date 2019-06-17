import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../general/Navbar';
import ProyectoCard from './ProyectoCard';
import './ProjectDetail.css'

const title = 'PROMARINO'
const desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt tenetur eligendi illo nostrum praesentium cum explicabo nobis rerum maiores! Excepturi maxime, dolorem maiores consequatur nulla impedit sequi mollitia quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt tenetur eligendi illo nostrum praesentium cum explicabo nobis rerum maiores! Excepturi maxime, dolorem maiores consequatur nulla impedit sequi mollitia quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt tenetur eligendi illo nostrum praesentium cum explicabo nobis rerum maiores! Excepturi maxime, dolorem maiores consequatur nulla impedit sequi mollitia quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt tenetur eligendi illo nostrum praesentium cum explicabo nobis rerum maiores! Excepturi maxime, dolorem maiores consequatur nulla impedit sequi mollitia quasi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt tenetur eligendi illo nostrum praesentium cum explicabo nobis rerum maiores! Excepturi maxime, dolorem maiores consequatur nulla impedit sequi mollitia quasi.'
const img = 'https://www.nationalgeographic.com.es/medio/2018/02/27/tortuga__1280x720.jpg'
const img1 = 'https://www.nationalgeographic.com.es/medio/2018/02/27/tortuga__1280x720.jpg'
const img2 = 'https://www.nationalgeographic.com.es/medio/2018/02/27/tortuga__1280x720.jpg'
const logo = 'https://http2.mlstatic.com/frag-de-coral-seriatopora-sour-apple-promarino-D_NQ_NP_217705-MLM25063788233_092016-F.jpg'
const obj = 14
const target = 'Vida Marina'
const responsable = 'José Martín'
const region = 'Baja California'
const avance = '20%'

// const ProjectDetail = ({ title, desc, img, img1, img2, logo, obj}) => {
const ProjectDetail = () => {
  return (
    <div>
      <Navbar />
      <div className="project-top">
        <div className="project-left">
          <h3>{title}</h3>
          <p>{desc}</p>
          <div className="project-images">
            <img src={img1} alt="project pic"/>
            <img src={img2} alt="project pic"/>
          </div>
        </div>
        <div className="project-right">
          <img src={logo} alt="project logo"/>
          <div className="project-btn-donar">
            <Link to='/donar'><span>DONAR</span></Link>
          </div>
          <div className="project-data">
            <div><span className="project-data-label">Objetivo ONU:&nbsp;</span><span>{obj}</span></div>
            <div><span className="project-data-label">Target:&nbsp;</span><span>{target}</span></div>
            <div><span className="project-data-label">Responsable:&nbsp;</span><span>{responsable}</span></div>
            <div><span className="project-data-label">Región:&nbsp;</span><span>{region}</span></div>
            <div><span className="project-data-label">Avance:&nbsp;</span><span>{avance}</span></div>
          </div>
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
      </div>
    </div>
  )
}

export default ProjectDetail
