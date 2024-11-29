import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// store for the current user's information

type User = {
  id: number
  adminUser: boolean
  first_name: string
  last_name: string
  phone: string
  email: string
  username: string
}
const initial: User = {
  id: 0,
  adminUser: false, // Default to false
  first_name: '',
  last_name: '',
  phone: '',
  email: '',
  username: ''
}

export const useUserStore = defineStore('user', {
  state: (): { selectedUser: User } => ({
    selectedUser: {
      id: 0,
      adminUser: false, // Default to false
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      username: ''
    }
  }),
  getters: {
    isAdmin: (state) => state.selectedUser?.adminUser === true
  },
  actions: {
    setSelectedUser(user: User) {
      this.selectedUser = user
    },
    clearSelectedUser() {
      this.selectedUser = initial
    },
    setAdminStatus(status: boolean) {
      this.selectedUser.adminUser = status
    }
  }
})
