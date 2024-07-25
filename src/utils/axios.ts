import axios from 'axios';
// config
import { API_BASE_URL, TOKEN } from '../config'

const http = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: { 
    'Authorization': `Bearer ${TOKEN}`,
    Accept: 'application/json',
    'Content-Type': 'application/json', 
}
});

http.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(
        (error?.response?.status === 401 || error?.response?.status === 403 )
        ? "شما به این اطلاعات دسترسی ندارید"
        : (error?.response?.data)
        ? error?.response?.data
        : "مشکلی پیش آمده"
    )
)

export default http;
