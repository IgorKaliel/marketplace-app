import { FC } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { useRegisterViewModel } from "./useRegister.viewModel"
import { AppInputController } from "@/shared/components/molecules/AppInputController"
import { AuthFormHeader } from "@/shared/components/molecules/AppFormHeader"
import { router } from "expo-router"
import { KeyboardContainer } from "@/shared/components/organisms/KeyboardContainer"
import { AppButton } from "@/shared/components/atoms/AppButton"
import { Ionicons } from "@expo/vector-icons"

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
  handleSelectAvatar,
  avatarUri,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subTitle="Informe seus dados pessoais e de acesso"
        />

        <TouchableOpacity
          className="w-[120px] h-[120px] rounded-[12px] items-center justify-center bg-shape self-center mb-8"
          onPress={handleSelectAvatar}
        >
          {avatarUri ? (
            <Image
              className="w-full h-full rounded-[12px]"
              source={{ uri: avatarUri }}
              resizeMode="cover"
            />
          ) : (
            <Ionicons name="cloud-upload-outline" size={32} />
          )}
        </TouchableOpacity>

        <AppInputController
          leftIcon="person-outline"
          label="NOME"
          control={control}
          name="name"
          placeholder="Digite seu nome:"
        />

        <AppInputController
          leftIcon="phone-portrait-outline"
          label="CELULAR"
          control={control}
          name="phone"
          placeholder="(00) 99999-9999"
        />

        <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

        <AppInputController
          leftIcon="mail-outline"
          label="E-MAIL"
          control={control}
          name="email"
          placeholder="email@exemplo.com"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="SENHA"
          control={control}
          name="password"
          secureTextEntry
          placeholder="Digite a sua senha:"
        />

        <AppInputController
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          control={control}
          name="confirmPassword"
          secureTextEntry
          placeholder="Confirme a sua senha:"
        />

        <AppButton
          className="mt-6"
          rightIcon="arrow-forward"
          onPress={onSubmit}
        >
          Registrar
        </AppButton>

        <View className="mt-16">
          <Text className="text-base text-gray-300 mb-6">
            Já tem uma conta?
          </Text>
          <AppButton
            variant="outlined"
            onPress={() => router.push("/(public)/login")}
          >
            Entrar
          </AppButton>
        </View>
      </ScrollView>
    </KeyboardContainer>
  )
}
