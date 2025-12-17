import { FlatList, TouchableOpacity, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { HomeHeader } from "./components/Header"
import { useUserStore } from "@/shared/store/user-store"

export const HomeView = () => {
  const { logout } = useUserStore()
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <View>
        <TouchableOpacity onPress={logout}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={<HomeHeader />}
        contentContainerClassName="px-4 pb-[120px]"
      />
    </SafeAreaView>
  )
}
