import "@/styles/global.css"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { Stack } from "expo-router"

const queryClient = new QueryClient()

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(public)" options={{ headerShown: false }} />
        <Stack.Screen name="(private)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  )
}
