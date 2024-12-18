<template>
  <div>
    <div class="title-row">
      <v-row>
        <div class="back-btn">
          <v-btn icon="mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
        </div>
        <h1>Register Account</h1>
      </v-row>
    </div>

    <div class="content-container">
      <v-col>
        <v-row class="row-styles">
          <div class="name-input">
            <v-text-field v-model="firstName" label="First Name"></v-text-field>
            <span v-if="firstNameError" class="error">{{ firstNameError }}</span>
          </div>
          <div class="name-input">
            <v-text-field v-model="lastName" label="Last Name"></v-text-field>
            <span v-if="lastNameError" class="error">{{ lastNameError }}</span>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field v-model="phone" label="Phone Number"></v-text-field>
            <span v-if="phoneError" class="error">{{ phoneError }}</span>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field v-model="ilstuEmail" label="ilstu email (@ilstu.edu)"></v-text-field>
            <span v-if="ilstuEmailError" class="error">{{ ilstuEmailError }}</span>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field v-model="password" label="Password" type="password"></v-text-field>
            <span v-if="passwordError" class="error">{{ passwordError }}</span>
          </div>
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn class="btn" @click="cancel" rounded="xl">cancel</v-btn>
          </div>
          <div>
            <v-btn class="submit-btn btn" @click="submit" :loading="loading" rounded="xl"
              >submit</v-btn
            >
          </div>
        </v-row>
        <div v-if="success" class="error">
          <span>Account Created!</span>
        </div>
        <div v-if="errorMsg" class="error">
          <span>Error creating account.</span>
        </div>
      </v-col>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import router from '@/router'

export default defineComponent({
  name: 'RegisterAccount',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const phone = ref('')
    const ilstuEmail = ref('')
    const password = ref('')
    const success = ref(false)
    const loading = ref(false)
    const errorMsg = ref(false)
    const firstNameError = ref('')
    const lastNameError = ref('')
    const phoneError = ref('')
    const ilstuEmailError = ref('')
    const passwordError = ref('')

    const validateFirstName = () => {
      if (!firstName.value.trim()) {
        firstNameError.value = 'First Name is required.'
        return false
      } else {
        firstNameError.value = ''
        return true
      }
    }

    const validateLastName = () => {
      if (!lastName.value.trim()) {
        lastNameError.value = 'Last Name is required.'
        return false
      } else {
        lastNameError.value = ''
        return true
      }
    }

    const validatePhone = () => {
      if (!phone.value.trim()) {
        phoneError.value = 'Phone Number is required.'
        return false
      } else {
        phoneError.value = ''
        return true
      }
    }

    const validateEmail = () => {
      const emailPattern = /@ilstu\.edu$/
      if (!emailPattern.test(ilstuEmail.value)) {
        ilstuEmailError.value = 'Email must end with @ilstu.edu.'
        return false
      } else {
        ilstuEmailError.value = ''
        return true
      }
    }

    const validatePassword = () => {
      if (password.value.length < 12) {
        passwordError.value = 'Password must be at least 12 characters.'
        return false
      } else {
        passwordError.value = ''
        return true
      }
    }

    const submit = async () => {
      const isFirstNameValid = validateFirstName()
      const isLastNameValid = validateLastName()
      const isPhoneValid = validatePhone()
      const isEmailValid = validateEmail()
      const isPasswordValid = validatePassword()

      if (
        !isFirstNameValid ||
        !isLastNameValid ||
        !isPhoneValid ||
        !isEmailValid ||
        !isPasswordValid
      ) {
        return
      }

      try {
        loading.value = true
        const response = await axios.post('http://localhost:3001/api/accounts/post', {
          admin_user: false,
          first_name: firstName.value,
          last_name: lastName.value,
          phone: phone.value,
          ilstu_email: ilstuEmail.value,
          username_ilstu: ilstuEmail.value.split('@')[0],
          password: password.value
        })
        console.log('Account created:', response.data)
        loading.value = false
        success.value = true
      } catch (error) {
        console.error('Error creating account:', error)
        errorMsg.value = true
        loading.value = false
      }
    }

    const cancel = () => {
      firstName.value = ''
      lastName.value = ''
      phone.value = ''
      ilstuEmail.value = ''
      password.value = ''
      firstNameError.value = ''
      lastNameError.value = ''
      phoneError.value = ''
      ilstuEmailError.value = ''
      passwordError.value = ''
      router.push('/')
    }

    function routeToLogin() {
      router.push('/')
    }

    return {
      firstName,
      lastName,
      phone,
      ilstuEmail,
      password,
      firstNameError,
      lastNameError,
      phoneError,
      ilstuEmailError,
      passwordError,
      validateFirstName,
      validateLastName,
      validatePhone,
      validateEmail,
      validatePassword,
      submit,
      cancel,
      success,
      routeToLogin,
      loading,
      errorMsg
    }
  }
})
</script>

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
  width: 100%;
  padding-top: 5vh;
}
.row-styles {
  justify-content: center;
  align-items: center;
}
.back-btn {
  margin-top: 0.3vh;
  padding-right: 2vh;
}
.submit-btn {
  background-color: #e6b89c;
}
.success {
  justify-content: center;
  align-items: center;
  margin-left: -33vh;
  margin-bottom: 3vh;
  margin-top: -2vh;
}

.error {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
