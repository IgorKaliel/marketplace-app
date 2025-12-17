import { baseURL, marketPlaceApiClient } from "../api/market-place"
import { AuthResponseProps } from "@/shared/interface/http/auth-response"
import { LoginHttpParams } from "@/shared/interface/http/login"
import { RegisterHttpParams } from "@/shared/interface/http/register"
import { uploadAvatarResponseProps } from "@/shared/interface/http/upload-avatar"

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

export const uploadAvatar = async (avatarUri: string) => {
  const formData = new FormData()

  formData.append("avatar", {
    uri: avatarUri,
    type: "image/jpeg",
    name: "avatar.jpeg",
  } as any)

  const { data } = await marketPlaceApiClient.post<uploadAvatarResponseProps>(
    "/user/avatar",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )

  data.url = `DataURL: ${baseURL}${data.url}`
  console.log(data.url)

  return data
}
