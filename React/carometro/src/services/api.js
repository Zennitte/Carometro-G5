import axios from "axios";

const api = axios.create({
    baseURL: "",
    headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
    }
})

export default api;