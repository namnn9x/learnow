import { verifyToken } from "../libs/auth"

export const auth = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.Authorization

  if (token) {
    verifyToken(token).then((r) => {
      const { status, decode, message } = r

      if(status) {
        req.decode = decode
        next()
      }

      return res.status(401).json({"error": true, message });
    })
  }
}
