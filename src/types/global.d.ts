// src/types/global.d.ts
export {}

declare global {
  // tipo explícito para o objeto que o RN aceita
  interface UploadImageProps {
    uri: string
    type: string
    name: string
  }

  // adiciona uma overload dedicada para React Native,
  // e preserva as assinaturas já conhecidas (string | Blob).
  interface FormData {
    // RN: aceitar objeto { uri, type, name }
    append(name: string, value: UploadImageProps): void

    // assinaturas padrão (mantidas)
    append(name: string, value: string | Blob): void
    append(name: string, value: Blob, filename?: string): void
  }
}
