import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { useRegisterMutation } from "@/shared/queries/auth/user-register.mutation"
import { useUserStore } from "@/shared/store/user-store"

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()
  const { setSession } = useUserStore()

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
    await userRegisterMutation.mutateAsync(registerData)
  })

  return { control, errors, onSubmit }
}
