import { Router } from "express";
import { decodeToken, getAccessToken } from "../../libs/auth";

const router = Router()

router.get('/learnow/token/:token', async (req, res) => {
  try {
    const token = req.query.token as string
    const decode = decodeToken(token)
    const accessToken = getAccessToken(decode)

    res.json({ status: 200, token: accessToken })
  } catch (error) {
    res.json({ status: 500, error })
  }
})

export default router
