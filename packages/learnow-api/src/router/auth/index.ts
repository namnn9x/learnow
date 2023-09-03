import { Router } from 'express';
import {
  comparePassword,
  decodeToken,
  getAccessToken,
  getRefreshToken,
} from '../../libs/auth';
import { auth } from '../../middleware/auth';
import { User } from '@prisma/client';
import { getUserByEmail } from '../../services/user';

const router = Router();

router.use([auth]);

router.get('/learnow/refresh-token/:token', async (req, res) => {
  try {
    const token = req.query.token as string;
    const decode = decodeToken(token);

    if (decode) {
      const accessToken = getAccessToken(decode);
      res.json({
        status: 200,
        token: accessToken,
      });
    }
  } catch (error) {
    res.json({ status: 500, error });
  }
});

router.post('/learnow/sign-out', async (req, res) => {
  try {
    const user = req.body as User;
    res.json({ status: 200, data: user });
  } catch (error) {}
});

router.post('/learnow/sign-in', async (req, res) => {
  try {
    const { email, password } = req.body as User;
    const user = await getUserByEmail(email);
    const payload = {
      email: user.email,
      name: user.name,
      roles: user.roles,
    };

    const checkPassword = comparePassword(password, user.password);
    if (checkPassword) {
      const accessToken = getAccessToken(payload);
      const refreshToken = getRefreshToken(payload);

      res.header('Authorization', `Bearer ${accessToken}`);
      res.json({ status: 200, refreshToken: refreshToken });
    } else {
      res.json({ status: 403, refreshToken: null });
    }
  } catch (error) {
    res.json({ status: 500, error });
  }
});

export default router;
