import axios from 'axios'

const host = 'http://localhost:3000/auth'
// const host = 'https://reintegradoresdev.herokuapp.com/auth'

//signup
export const signup = user => {
  return axios.post(host + '/signup', user, {})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//login
export const login = user => {
  return axios.post(host + '/login', user, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//logout
export const logout = () => {
  console.log("closing session from auth")
  return axios.get(host + '/logout')
    .then(r => r.data)
    .catch(e => e.response)
}

//email confirmation
export const confirmation = token => {
  return axios.get(host + token, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}

//profile
export const getProfile = user => {
  return axios.get(host + '/profile/' + user, {withCredentials:true})
    .then(r=>r.data)
    .catch(e=>e.response)
}