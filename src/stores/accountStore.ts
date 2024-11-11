import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Account {
  id: number
  name: string
  email?: string
}

export const useAccountStore = defineStore('account', {
  state: (): { selectedAccount: Account | null } => ({
    selectedAccount: null
  }),
  actions: {
    setSelectedAccount(account: Account) {
      this.selectedAccount = account
    },
    clearSelectedAccount() {
      this.selectedAccount = null
    }
  }
})
