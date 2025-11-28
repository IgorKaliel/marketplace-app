import { TouchableOpacity, View, Text } from "react-native"
import { AuthFormHeader } from "@/shared/components/AppFormHeader"
import { AppInput } from "@/shared/components/AppInput"
import { router } from "expo-router"

export const LoginView = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <AuthFormHeader
        title="Acesse sua conta"
        subTitle="Informe seu E-mail e senha para entrar"
      />

      <AppInput />

      <TouchableOpacity onPress={() => router.push("/register")}>
        <Text>Registro</Text>
      </TouchableOpacity>
    </View>
  )
}
