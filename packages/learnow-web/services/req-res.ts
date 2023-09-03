import axios from "axios";
import Router from 'next/router';
import { getAccessToken, getRefreshToken } from "../utils/auth";
import { refreshAccessToken } from "./auth";

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
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
  return response;
}, async function (error) {
  const originalRequest = error.config

  if (error.response.status === 403 && !originalRequest._retry) {
    const refreshToken = getRefreshToken()
    if (!refreshToken) {
      Router.push('/sign-in')
      return
    }

    const accessToken = await refreshAccessToken(refreshToken);
    const { token } = accessToken?.data
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    return instance(originalRequest);
  }

  return Promise.reject(error)
});


export const req = instance
export const GET = req.get
export const POST = req.post
export const PUT = req.put
export const DELETE = req.delete
