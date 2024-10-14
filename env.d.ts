/// <reference types="vite/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    PG_DATABASE: string
    PG_USER: string
    PG_PASSWORD: string
    PG_HOST: string
    PG_PORT: number
  }
}
