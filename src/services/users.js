import axios from 'axios'
import firebase from './firebase'

// const host = 'http://localhost:3000/users'
const host = 'https://reintegradoresdev.herokuapp.com/users'

//upload Constancia Situación Fiscal, Acta Constitutiva, Curriculum, etc
export const uploadFile=(file)=>{
  console.log('uploading file')
  const task = firebase.storage().ref('reintegradores').child(file.name).put(file)

  return task
      .then(snap=>snap.ref.getDownloadURL())
      .then(link=>link)
}