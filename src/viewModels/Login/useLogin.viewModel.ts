import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginFormData, loginScheme } from "./login.scheme"
import { useLoginMutation } from "@/shared/queries/auth/user-login.mutation"
import { useUserStore } from "@/shared/store/user-store"

export const useLoginViewModel = () => {
  const { user } = useUserStore()
  console.log(user)

  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: yupResolver(loginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const loginMutation = useLoginMutation()

  const onSubmit = handleSubmit(async (useFormData) => {
    const userData = await loginMutation.mutateAsync(useFormData)
    console.log(userData)
  })
  return { control, onSubmit }
}
