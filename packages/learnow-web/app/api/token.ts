import { GET } from "packages/learnow-web/services/req-res"

export const getAccessToken = (token: string) => {
  return GET(`/learnow/refresh-token/:token=${token}`)
}
