import { useState } from "react"

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: "Igor",
  })

  return { userData, setUserData }
}
