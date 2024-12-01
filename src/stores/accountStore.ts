import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

// store for account uses (roster)
export type Account = {
  accountid: string
  admin_user: string
  first_name: string
  last_name: string
  phone: string
  ilstu_email: string
  username_ilstu: string
  password: string
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
