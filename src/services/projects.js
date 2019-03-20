import axios from 'axios'
import firebase from './firebase'

// const host = 'http://localhost:3000/users'
const host = 'https://reintegradoresdev.herokuapp.com/projects'

//upload file (Constancia Situación Fiscal, Acta Constitutiva, Curriculum, etc)
export const uploadFile=(file)=>{
  console.log('uploading file')
  const task = firebase.storage().ref('reintegradores').child(file.name).put(file)

  return task
      .then(snap=>snap.ref.getDownloadURL())
      .then(link=>link)
}

//add Project
export const addProject = project => {
  return axios.post(host + '/new', project, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}