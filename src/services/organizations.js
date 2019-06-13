import axios from 'axios'

const host = 'http://localhost:3000/organizations'
// const host = 'https://reintegradoresdev.herokuapp.com/organizations'

//add Organization Data (Acta Constitutiva, CV, Organigrama, etc) URLs
export const addOrgData = orgData => {
  return axios.put(host + '/data', orgData, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}