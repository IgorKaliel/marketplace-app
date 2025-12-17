import { AppModal } from "@/shared/components/molecules/AppModal"
import { useUserStore } from "@/shared/store/user-store"
import "@/styles/global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Stack } from "expo-router"

import ToastManager from "toastify-react-native"

const queryClient = new QueryClient()

export default function RootLayout() {
  const { token } = useUserStore()
  console.log(`token: ${token}`)
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(public)" />
        <Stack.Screen name="(private)" />
      </Stack>
      <AppModal />
      <ToastManager useModal={false} />
    </QueryClientProvider>
  )
}
