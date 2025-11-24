import {
  RegisterHttpParams,
  RegisterHttpResponse,
} from "../interface/http/register"
import { marketPlaceApiClient } from "@/shared/api/market-place"
export const register = async (userData: RegisterHttpParams) => {
  const { data } = await marketPlaceApiClient.post<RegisterHttpResponse>(
    "/auth/register",
    userData
  )

  return data
}
