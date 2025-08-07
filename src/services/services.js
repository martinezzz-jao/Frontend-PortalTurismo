import axios from "axios";
 
const api = axios.create({

    baseURL: 'https://backend-portalturismo-qoo2.onrender.com/api'

})
 
export default api;
 