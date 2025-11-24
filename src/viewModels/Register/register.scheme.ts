import * as Yup from "yup"

export const registerScheme = Yup.object().shape({
  name: Yup.string()
    .required("Nome é obrigatório")
    .min(4, "Nome deve ter no mínimo 4 caracteres"),
  email: Yup.string()
    .email("E-mail é invalido")
    .required("E-mail é obrigatório"),
  password: Yup.string()
    .required("Senha é obrigatória")
    .min(6, "Senha deve ter no mínimo 6 caracteres"),
  confirmPassword: Yup.string()
    .required("Senha é obrigatória")
    .oneOf([Yup.ref("password")], "As senhas devem ser iguais"),
  phone: Yup.string()
    .required("Telefone é obrigatório")
    .matches(/^\d{11}$/, "Telefone deve ter 11 digitos ( DDD + Número )"),
})
