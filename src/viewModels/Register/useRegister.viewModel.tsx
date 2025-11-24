import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { RegisterFormData, registerScheme } from "./register.scheme"
import { useRegisterMutation } from "@/shared/queries/auth/user-register.mutation"

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: "onChange",
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "Karol",
      email: "karol@gmail.com",
      password: "12345678",
      confirmPassword: "12345678",
      phone: "11989781234",
    },
  })

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData
    await userRegisterMutation.mutateAsync(registerData)
  })

  return { control, errors, onSubmit }
}
