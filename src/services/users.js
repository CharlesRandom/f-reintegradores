import firebase from './firebase'

//upload Constancia Situación Fiscal, Acta Constitutiva, Curriculum, etc
export const uploadFile=(file)=>{
  console.log('uploading file')
  const task = firebase.storage().ref('reintegradores').child(file.name).put(file)

  return task
      .then(snap=>snap.ref.getDownloadURL())
      .then(link=>link)
}