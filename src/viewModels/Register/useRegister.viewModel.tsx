import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { useRegisterMutation } from "@/shared/queries/auth/user-register.mutation"
import { useUserStore } from "@/shared/store/user-store"
import { useImage } from "@/shared/hooks/useImage"
import { useState } from "react"
import { CameraType } from "expo-image-picker"

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()
  const { setSession, user } = useUserStore()
  const [avatarUri, setAvatarUri] = useState<string | null>(null)
  const { handleSelectImage } = useImage({
    callback: setAvatarUri,
    cameraType: CameraType.front,
  })
  const handleSelectAvatar = async () => {
    await handleSelectImage()
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onChange",
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData
    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    )
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      user: mutationResponse.user,
    })
  })

  return { control, errors, onSubmit, handleSelectAvatar, avatarUri }
}
