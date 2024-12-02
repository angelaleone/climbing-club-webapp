export interface UserSession {
  id?: string
  email: string
  isAdmin: boolean
  token?: string
}
