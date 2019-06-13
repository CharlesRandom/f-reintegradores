import axios from 'axios'
import firebase from './firebase'

const host = 'http://localhost:3000/projects'
// const host = 'https://reintegradoresdev.herokuapp.com/projects'

//upload file (Constancia Situación Fiscal, Acta Constitutiva, Curriculum, etc)
export const uploadFile=(file)=>{
  console.log('uploading file')
  const task = firebase.storage().ref('reintegradores').child(file.name).put(file)

  return task
      .then(snap=>snap.ref.getDownloadURL())
      .then(link=>link)
}

//add Project
export const addProject = project => 
  axios.post(host + '/new', project, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)

//remove Project
export const removeProject = id => 
  axios.delete(host + `/${id}`, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)

//update Project
export const updateProject = (id, data) => 
  axios.delete(host + `/${id}`, {data}, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)

//get a project
export const getProject = id => 
  axios.post(host + `/${id}`)
    .then(r=>r.data)
    .catch(e=>e.response)

//get all projects
export const getAllProjects = () => 
  axios.post(host + '/')
    .then(r=>r.data)
    .catch(e=>e.response)