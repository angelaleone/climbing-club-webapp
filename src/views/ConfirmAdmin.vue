<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/userStore'
import router from '@/router'

export default defineComponent({
  name: 'ConfirmAdmin',
  setup() {
    onMounted(() => {
      userStore.clearSelectedUser()
      forceRerender()
    })
    const username = ref('')
    const password = ref('')
    const error = ref('')
    const userStore = useUserStore()

    const uniqueKey = ref(0)
    const forceRerender = () => {
      uniqueKey.value++
    }

    const login = async () => {
      try {
        //assuming successful login logic
        userStore.setAdminStatus(true) // Set admin status
        //TODO change this to check if they are an admin, not just if they have an account
        console.log('setting admin status to true')
        console.log('username', username.value)
        console.log('password', password.value)

        router.push('/attendancesheets')
      } catch (err) {
        error.value = 'Invalid username or password.'
        console.error('Login error:', err)
      }
    }

    //const login = async () => {

    // try {
    //   const response = await axios.post('/api/user', {
    //     username: username.value,
    //     password: password.value
    //   })

    //   const { token } = response.data
    //   //save the JWT token (not sure if localStorage is SAFE per se)
    //   localStorage.setItem('jwt', token)
    //   // redirect user after login
    //   window.location.href = '/home'
    // } catch (err) {
    //   error.value = 'Invalid username or password.'
    //   console.error('Login error:', err)
    // }
    // }

    return { username, password, error, login, uniqueKey }
  }
})
</script>

<template>
  <div :key="uniqueKey">
    <div>
      <v-row class="title-row">
        <h2>Confirm Admin Account</h2>
      </v-row>
    </div>

    <div class="content-container">
      <v-col>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field v-model="username" label="Username" outlined></v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
              outlined
            ></v-text-field>
          </div>
        </v-row>
        <v-row v-if="error" class="row-styles">
          <span class="error">{{ error }}</span>
        </v-row>
        <v-row class="row-styles">
          <!-- <span class="register-text">
            Don't have an account?
            <v-btn variant="text" size="small" @click="$router.push('/register')">register</v-btn>
          </span> -->
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn class="btn" @click="login">Confirm</v-btn>
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
  color: red;
  text-align: center;
}
</style>
