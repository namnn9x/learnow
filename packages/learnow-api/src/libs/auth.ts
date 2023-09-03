import { sign, verify, decode, JwtPayload } from 'jsonwebtoken';
import { hash, compare} from 'bcryptjs'

const SECRET_TOKEN = process.env.SECRET_TOKEN
const REFRESH_TOKEN = process.env.REFRESH_TOKEN
const EXPIRES_IN = 3600
const SALT_ROUNDS = 10

type VerifyToken = {
  status: boolean,
  message?: string,
  decode: JwtPayload | string
}

export const decodeToken = ( token: string ) => {
  return decode(token)
}

export const getAccessToken = ( payload ) => {
  return sign(payload, REFRESH_TOKEN, {
    algorithm: 'ES256',
    expiresIn: EXPIRES_IN
  })
}

export const getRefreshToken = ( payload ) => {
  return sign(payload, SECRET_TOKEN, {
    algorithm: 'ES256',
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

export const hashPassword = async (password) => {
  try {
    const hashPassword = await hash(password, SALT_ROUNDS)
    return hashPassword
  } catch (error) {
    console.log('hash password + ', error)
  }
}

export const comparePassword = async (plainPassword: string, hashedPassword: string) => {
  try {
    const same = compare(plainPassword, hashedPassword)
    return same
  } catch (error) {
    return null
  }
}
