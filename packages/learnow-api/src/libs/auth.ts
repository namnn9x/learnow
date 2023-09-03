import { sign, verify, decode, JwtPayload } from 'jsonwebtoken';

const SECRET_TOKEN = process.env.SECRET_TOKEN
const EXPIRES_IN = 3600
type VerifyToken = {
  status: boolean,
  message?: string,
  decode: JwtPayload | string
}

export const decodeToken = ( token: string ) => {
  return decode(token)
}

export const getAccessToken = ( payload ) => {
  return sign(payload, SECRET_TOKEN, {
    algorithm: 'ES256',
    expiresIn: EXPIRES_IN
  })
}

export const verifyToken = ( token: string ): Promise<VerifyToken> => {
  return new Promise((resolve, reject) => {
    verify(token, SECRET_TOKEN, (err, decode) => {
      if (err) {
        reject({
          status: false,
          message: err,
          decode: null,
        })
      } else {
        resolve({
          status: true,
          decode,
        })
      }
    })
  })
}
