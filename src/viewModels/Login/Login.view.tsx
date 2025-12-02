import { TouchableOpacity, View, Text } from "react-native"
import { AuthFormHeader } from "@/shared/components/AppFormHeader"
import { router } from "expo-router"
import { KeyboardContainer } from "@/shared/components/KeyboardContainer"
import { FC } from "react"
import { useLoginViewModel } from "./useLogin.viewModel"
import { AppInputController } from "@/shared/components/AppInputController"

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="flex-1 items-center justify-center px-[40px]">
        <AuthFormHeader
          title="Acesse sua conta"
          subTitle="Informe seu E-mail e senha para entrar"
        />

        <AppInputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          label="E-MAIL"
          placeholder="email@exemplo.com"
        />

        <AppInputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          placeholder="Digite a sua senha:"
          secureTextEntry
        />

        <TouchableOpacity onPress={onSubmit}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    </KeyboardContainer>
  )
}
