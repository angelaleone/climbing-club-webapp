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

    <div class="content-container">
      <v-row class="row-container">
        <div class="card-div">
          <v-card>
            <v-card-title> Driver: Angela Leone </v-card-title>
            <v-card-subtitle class="subtitle">
              <v-row>
                <span>phone: (555)555-5555</span>
              </v-row>
              <v-row>
                <span>email: ajleon5@ilstu.edu</span>
              </v-row>
              <v-divider class="divider"></v-divider>
            </v-card-subtitle>
            <v-card-body>
              <div class="body">
                <v-radio-group>
                  <v-radio label="Seat 1" value="one" class="radio-right"></v-radio>
                  <v-radio label="Seat 2" value="two" class="radio-right"></v-radio>
                  <v-radio label="Seat 3" value="three" class="radio-right"></v-radio>
                </v-radio-group>
              </div>
            </v-card-body>
            <v-card-actions>
              <v-btn>submit</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="card-div">
          <v-card>
            <v-card-title> Driver: Angela Leone </v-card-title>
            <v-card-subtitle class="subtitle">
              <v-row>
                <span>phone: (555)555-5555</span>
              </v-row>
              <v-row>
                <span>email: ajleon5@ilstu.edu</span>
              </v-row>
              <v-divider class="divider"></v-divider>
            </v-card-subtitle>
            <v-card-body>
              <div class="body">
                <v-radio-group>
                  <v-radio label="Seat 1" value="one" class="radio-right"></v-radio>
                  <v-radio label="Seat 2" value="two" class="radio-right"></v-radio>
                  <v-radio label="Seat 3" value="three" class="radio-right"></v-radio>
                </v-radio-group>
              </div>
            </v-card-body>
            <v-card-actions>
              <v-btn>submit</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="card-div">
          <v-card>
            <v-card-title> Driver: Angela Leone </v-card-title>
            <v-card-subtitle class="subtitle">
              <v-row>
                <span>phone: (555)555-5555</span>
              </v-row>
              <v-row>
                <span>email: ajleon5@ilstu.edu</span>
              </v-row>
              <v-divider class="divider"></v-divider>
            </v-card-subtitle>
            <v-card-body>
              <div class="body">
                <v-radio-group>
                  <v-radio label="Seat 1" value="one" class="radio-right"></v-radio>
                  <v-radio label="Seat 2" value="two" class="radio-right"></v-radio>
                  <v-radio label="Seat 3" value="three" class="radio-right"></v-radio>
                </v-radio-group>
              </div>
            </v-card-body>
            <v-card-actions>
              <v-btn>submit</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="card-div">
          <v-card>
            <v-card-title> Driver: Angela Leone </v-card-title>
            <v-card-subtitle class="subtitle">
              <v-row>
                <span>phone: (555)555-5555</span>
              </v-row>
              <v-row>
                <span>email: ajleon5@ilstu.edu</span>
              </v-row>
              <v-divider class="divider"></v-divider>
            </v-card-subtitle>
            <v-card-body>
              <div class="body">
                <v-radio-group>
                  <v-radio label="Seat 1" value="one" class="radio-right"></v-radio>
                  <v-radio label="Seat 2" value="two" class="radio-right"></v-radio>
                  <v-radio label="Seat 3" value="three" class="radio-right"></v-radio>
                </v-radio-group>
              </div>
            </v-card-body>
            <v-card-actions>
              <v-btn>submit</v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-row>
    </div>
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

    const selected = ref([])

    return {
      firstName,
      lastName,
      phone,
      ilstuEmail,
      password,
      submit,
      selected
    }
  }
})
</script>

<style scoped>
.content-container {
  padding-top: 10vh;
}

.row-container {
  display: flex;
  align-items: center;
  width: 90%;
  padding-left: 25vh;
  padding-top: 5vh;
  padding-right: 25vh;
  height: 100%;
  margin: 0;
  justify-content: space-between;
}
.row-styles {
  justify-content: center;
  align-items: center;
}
.back-btn {
  margin-top: 0.3vh;
  padding-right: 2vh;
}

.event-subtitle {
  padding-top: 1vh;
  padding-left: 8vh;
}

.card-div {
  width: 30vh;
  height: auto;
  margin: 1vh;
  margin-bottom: 2vh;
}
.subtitle {
  height: 10vh;
  padding-top: 2vh;
  margin-left: 1vh;
}
.body {
  height: auto;
  margin-bottom: 1vh;
  margin-left: 3vh;
  margin-right: 3vh;
}
.divider {
  margin-top: 2.5vh;
}
.seat-styles {
  margin-bottom: 1.5vh;
}
.radio-right {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
</style>
