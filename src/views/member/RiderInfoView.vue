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
          </div>
          <div class="name-input">
            <v-text-field v-model="lastName" label="Last Name"></v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field v-model="phone" label="Phone Number"></v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field v-model="ilstuEmail" label="ilstu email (@ilstu.edu)"></v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field
              v-model="password"
              label="Password (optional)"
              type="password"
            ></v-text-field>
          </div>
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn class="btn" @click="cancel">cancel</v-btn>
          </div>
          <div>
            <v-btn class="submit-btn btn" @click="submit">submit</v-btn>
          </div>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'RiderInfo',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const phone = ref('')
    const ilstuEmail = ref('')
    const password = ref('')

    const submit = async () => {
      try {
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
      } catch (error) {
        console.error('Error creating account:', error)
      }
    }

    const cancel = () => {
      //clear all fields and navigate back
    }

    return {
      firstName,
      lastName,
      phone,
      ilstuEmail,
      password,
      submit,
      cancel
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
  background-color: #ead2ac;
}
</style>
