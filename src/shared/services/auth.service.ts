import { RegisterHttpParams } from "@/shared/interface/http/register"
import { marketPlaceApiClient } from "@/shared/api/market-place"
import { AuthResponseProps } from "../interface/http/auth-response"
import { LoginHttpParams } from "../interface/http/login"
export const register = async (userData: RegisterHttpParams) => {
  const { data } = await marketPlaceApiClient.post<AuthResponseProps>(
    "/auth/register",
    userData
  )

  return data
}

export const login = async (userData: LoginHttpParams) => {
  const { data } = await marketPlaceApiClient.post<AuthResponseProps>(
    "/auth/login",
    userData
  )
  return data
}
