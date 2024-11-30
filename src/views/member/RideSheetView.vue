<template>
  <div>
    <div class="title-row">
      <v-col>
        <v-row>
          <div class="back-btn">
            <v-btn icon="mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
          </div>
          <!-- this will be interpolated from store variables  -->
          <h1>Upper Limits Trip 10/9/2024</h1>
        </v-row>
        <v-row class="event-subtitle">
          <v-icon>mdi-clock-outline</v-icon>
          <span text-subtitle-1 class="spacing-styles">5:00pm</span>
        </v-row>
        <v-row class="event-subtitle">
          <v-icon>mdi-map-marker-outline</v-icon>
          <span text-subtitle-1 class="spacing-styles"
            >1304 W Washington St, Bloomington, IL 61701</span
          >
        </v-row>
      </v-col>
    </div>

    <div class="content-container"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import router from '@/router'

export default defineComponent({
  name: 'RiderSheet',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const phone = ref('')
    const ilstuEmail = ref('')
    const password = ref('')

    const submit = async () => {
      //router.push()
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

    return {
      firstName,
      lastName,
      phone,
      ilstuEmail,
      password,
      submit
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
.event-subtitle {
  padding-top: 1vh;
  padding-left: 8vh;
}
.spacing-styles {
  padding-left: 1vh;
}
.title-description {
  padding-bottom: 2vh;
}
</style>
