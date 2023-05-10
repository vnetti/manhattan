/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_SRC: string,
  readonly VITE_JSON_PLACEHOLDER: string,
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
