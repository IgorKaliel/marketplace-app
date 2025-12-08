import { createElement } from "react"
import { useModalStore } from "@/shared/store/modal-store"
import { Ionicons } from "@expo/vector-icons"
import {
  SelectionModal,
  SelectionModalProps,
} from "@/shared/components/organisms/Modals/SelectionModal"

export type SelectionVariant = "primary" | "secundary" | "danger"

export interface SelectionOptionProps {
  text: string
  onPress: () => void
  icon?: keyof typeof Ionicons.glyphMap
  variant?: SelectionVariant
}

export const useAppModal = () => {
  const { open, close } = useModalStore()

  const showSelection = ({
    title,
    message,
    options,
  }: {
    title: string
    message?: string
    options: SelectionOptionProps[]
  }) => {
    open(
      createElement(SelectionModal, {
        title,
        message,
        options,
      } as SelectionModalProps)
    )
  }

  return { showSelection }
}
