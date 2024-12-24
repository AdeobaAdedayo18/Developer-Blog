import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import dayjs from 'dayjs';
import useAuth from '../context/useAuth';

interface decodedToken {
  exp: number;

}

// const token = useAuth()
let access_token = localStorage.getItem("token");

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
    accept: "application/json",
  },
  withCredentials: true, // Include cookies in all requests
});


axiosInstance.interceptors.request.use(async req => {
  if(!access_token){
    access_token = localStorage.getItem("token")
    req.headers.Authorization = `Bearer ${access_token}`
  }

  const decoded:decodedToken = jwtDecode(access_token)
  const isExpired = dayjs.unix(decoded.exp).diff(dayjs()) < 1;
  console.log("Is expired", isExpired);
  
  if(!isExpired) return req;

  const response = await axios.post("http://127.0.0.1:8000/auth/user/refresh-token", {
    refresh: localStorage.getItem("reftoken")
  })

  localStorage.setItem("token", JSON.stringify(response.data.access_token))
  req.headers.Authorization = `Bearer ${response.data.access_token}`
  return req
  
})




export default axiosInstance;
