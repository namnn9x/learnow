const KEY = {
  USER_ID: '@user_id',
  ACCESS_TOKEN: '@access_token',
  REFRESH_TOKEN: '@refresh_token,'
}

export const getUserId = () => {
  return localStorage.getItem(KEY.USER_ID)
}

export const setUserId = ( name: string ) => {
  return localStorage.setItem(KEY.USER_ID, name)
}

export const setAccessToken = ( token: string ) => {
  return localStorage.setItem(KEY.ACCESS_TOKEN, token)
}

export const getAccessToken = () => {
  return localStorage.getItem(KEY.ACCESS_TOKEN)
}


export const getRefreshToken = () => {
  return localStorage.getItem(KEY.REFRESH_TOKEN)
}
