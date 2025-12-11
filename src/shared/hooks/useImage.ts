import { ImagePickerOptions } from "expo-image-picker"
import { useAppModal } from "./useAppModal"
import { useCamera } from "./useCamera"
import { useGallery } from "./useGallery"
import { useModalStore } from "../store/modal-store"

interface UseImageParamsProps extends ImagePickerOptions {
  callback: (uri: string | null) => void
}
export const useImage = ({
  callback,
  ...pickerOptions
}: UseImageParamsProps) => {
  const { openCamera, isLoading: cameraLoading } = useCamera(pickerOptions)
  const { openGallery, isLoading: galleryLoading } = useGallery(pickerOptions)
  const modals = useAppModal()

  const loading = Boolean(cameraLoading || galleryLoading)

  const { close } = useModalStore()

  const handleCallback = (uri: string | null) => {
    close()
    callback(uri)
  }

  const handleSelectImage = () => {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma opção:",
      options: [
        {
          text: "Galeria",
          icon: "images",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openGallery()
            handleCallback(imageUri)
          },
        },
        {
          text: "Câmera",
          icon: "camera",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openCamera()
            handleCallback(imageUri)
          },
        },
      ],
    })
  }

  return { handleSelectImage, loading }
}
