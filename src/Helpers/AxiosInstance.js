import axios, { Axios } from "axios";

let axiosInstance=axios.create({
    baseURL:"http://localhost:8082"
})
export default axiosInstance