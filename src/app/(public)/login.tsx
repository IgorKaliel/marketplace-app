import { LoginView } from "@/viewModels/Login/Login.view"
import { useLoginViewModel } from "@/viewModels/Login/useLogin.viewModel"

export default function Login() {
  const propsUseLoginViewModel = useLoginViewModel()

  return <LoginView {...propsUseLoginViewModel} />
}
