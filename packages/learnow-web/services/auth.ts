import { getAccessToken } from "../app/api/token"

export const refreshAccessToken = async (refreshToken: string) => {
  try {

    const accessToken = await getAccessToken(refreshToken)
    return accessToken
  } catch (error) {
    console.error('Error refreshing access token:', error);
    return null;
  }
}
