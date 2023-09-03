import axios from "axios";
import { getAccessToken } from "../utils/auth";
import { refreshAccessToken } from "./sign-in";

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 300000,
  headers: {
      'Content-Type': 'application/json',
  },
})

axios.interceptors.request.use(function (config) {

  const accessToken =  getAccessToken()

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  return config
}, function (error) {
  return Promise.reject(error)
});

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, async function (error) {
  const originalRequest = error.config

  if (error.response.status === 403 && !originalRequest._retry) {
    const accessToken = await refreshAccessToken();
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
    return instance(originalRequest);
  }

  return Promise.reject(error)
});


export const req = instance
export const GET = req.get
export const POST = req.post
export const PUT = req.put
export const DELETE = req.delete
