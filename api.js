import axios from 'axios'

const Api = axios.create({
    baseURL: 'https://tpecflowersbackend.onrender.com/api'
})

export default Api
