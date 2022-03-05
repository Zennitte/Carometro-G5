import axios from "axios";

const api = axios.create({
<<<<<<< HEAD
    baseURL: "http://localhost:5000/api",
=======
    baseURL: "http://localhost:5000/api/",
    headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
    }
>>>>>>> abe2f2ec3a55a6f524ddb0e36cbac09bc3a8d9a9
})

export default api;