import { getRefreshToken } from "../utils/auth"

export const refreshAccessToken = () => {
  try {
    const refreshToken = getRefreshToken()

    if (!refreshToken) {

    }
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return null;
  }
}
