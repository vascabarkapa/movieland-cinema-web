import axios from "axios";

const API_URL = process.env.API_URL;

const axiosInstance = axios.create({
    baseURL: `${API_URL}`,
});

axiosInstance.interceptors.request.use((confiq) => {
    const token = localStorage.getItem('access_token');

    token ? confiq.headers = {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    } : confiq.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

    return confiq;
}, function (error) {

    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    //ako ne valja

    return Promise.reject(error);
});


export default axiosInstance;