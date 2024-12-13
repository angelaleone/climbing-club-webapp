import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { UserSession } from '@/api/types/UserSession'

//the session store is not implemented completely, the current implementation is for the navbar/Admin accessability ONLY
export const useSessionStore = defineStore('session', () => {
  const user = ref<UserSession | null>(null)

  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.isAdmin ?? false)

  function initializeFromStorage() {
    const stored = sessionStorage.getItem('user')
    if (stored) {
      try {
        user.value = JSON.parse(stored)
      } catch (e) {
        console.error('Failed to parse stored session:', e)
        sessionStorage.removeItem('user')
      }
    }
  }
  function setUser(sessionData: UserSession) {
    user.value = sessionData
    sessionStorage.setItem('user', JSON.stringify(sessionData))
  }
  function setAdminStatus(isAdmin: boolean) {
    if (!user.value) {
      throw new Error('Cannot set admin status: No user is logged in')
    }

    const updatedUser = {
      ...user.value,
      isAdmin
    }

    user.value = updatedUser
    sessionStorage.setItem('user', JSON.stringify(updatedUser))
  }

  function clearSession() {
    user.value = null
    sessionStorage.removeItem('user')
  }

  initializeFromStorage()

  return {
    user,
    isAuthenticated,
    isAdmin,
    setUser,
    clearSession,
    setAdminStatus
  }
})
