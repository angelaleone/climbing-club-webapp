<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'
import type { Account } from '@/stores/accountStore'

export default defineComponent({
  name: 'Login-Screen',
  setup() {
    const username = ref('')
    const password = ref('')
    const error = ref('')
    const userStore = useUserStore()
    const uniqueKey = ref(0)
    const account = ref<Account>()
    const isSubmitting = ref(false)

    // Validation states
    const usernameError = ref('')
    const passwordError = ref('')

    onMounted(() => {
      userStore.clearSelectedUser()
      forceRerender()
    })

    const forceRerender = () => {
      uniqueKey.value++
    }

    const validateForm = (): boolean => {
      let isValid = true

      // Reset errors
      usernameError.value = ''
      passwordError.value = ''

      // Username validation
      if (!username.value) {
        usernameError.value = 'Username is required'
        isValid = false
      } else if (username.value.length < 3) {
        usernameError.value = 'Username must be at least 3 characters'
        isValid = false
      }

      // Password validation
      if (!password.value) {
        passwordError.value = 'Password is required'
        isValid = false
      }

      return isValid
    }

    const login = async () => {
      if (!validateForm()) {
        return
      }

      try {
        isSubmitting.value = true
        error.value = ''
        const response = await axios.get<Account>(
          'http://localhost:3001/api/accounts/username_ilstu',
          {
            params: {
              username_ilstu: username.value
            }
          }
        )
        account.value = response.data
        if (password.value !== account.value.password) {
          error.value = 'Invalid username or password'
          return
        }

        // If we get here, login was successful
        userStore.setAdminStatus(true)
        router.push('/home')
      } catch (err) {
        error.value = 'Invalid username or password'
        console.error('Login error:', err)
      } finally {
        isSubmitting.value = false
      }
    }

    const usernameRules = computed(() => [
      (v: string) => !!v || 'Username is required'
      // (v: string) => v.length >= 3 || 'Username must be at least 3 characters'
    ])

    const passwordRules = computed(() => [(v: string) => !!v || 'Password is required'])

    return {
      username,
      password,
      error,
      login,
      uniqueKey,
      usernameRules,
      passwordRules,
      isSubmitting
    }
  }
})
</script>

<template>
  <div :key="uniqueKey">
    <div>
      <v-row class="title-row">
        <h2>Login to Account</h2>
      </v-row>
    </div>

    <div class="content-container">
      <v-col>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field
              v-model="username"
              label="Username"
              outlined
              :rules="usernameRules"
              :disabled="isSubmitting"
              @keyup.enter="login"
            ></v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              outlined
              :rules="passwordRules"
              :disabled="isSubmitting"
              @keyup.enter="login"
            ></v-text-field>
          </div>
        </v-row>
        <v-row v-if="error" class="row-error">
          <span class="error">{{ error }}</span>
        </v-row>
        <v-row class="row-styles">
          <span class="register-text">
            Don't have an account?
            <v-btn variant="text" size="small" @click="$router.push('/register')">register</v-btn>
          </span>
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn class="btn" @click="login" :loading="isSubmitting" :disabled="isSubmitting">
              Login
            </v-btn>
          </div>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  padding-top: 10vh;
}
.name-input {
  padding: 1vh;
  width: 40vh;
}
.long-input {
  padding: 1vh;
  width: 80vh;
}
.btn-group-container {
  justify-content: center;
}
.btn {
  min-width: 10vh;
  margin: 5vh;
}
.title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 15vh;
  padding-bottom: 2.5vh;
}
.row-styles {
  justify-content: center;
  align-items: center;
}
.register-text {
  margin-top: -2vh;
}
.error {
  font-size: x-small;
  color: red;
  text-align: center;
  margin-top: -5vh;
}
.row-error {
  justify-content: center;
  align-items: center;
}
</style>
