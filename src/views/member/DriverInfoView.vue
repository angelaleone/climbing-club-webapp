<template>
  <div>
    <div class="title-row">
      <v-col>
        <v-row>
          <div class="back-btn">
            <v-btn icon="mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
          </div>
          <h1>{{ eventName }}</h1>
        </v-row>
        <v-row class="event-subtitle">
          <v-icon>mdi-clock-outline</v-icon>
          <span text-subtitle-1 class="spacing-styles">{{ formattedDate }}</span>
        </v-row>
        <v-row class="event-subtitle">
          <v-icon>mdi-map-marker-outline</v-icon>
          <span text-subtitle-1 class="spacing-styles">{{ eventLocation }}</span>
        </v-row>
      </v-col>
    </div>

    <div class="content-container">
      <v-col>
        <v-row class="row-styles title-description">
          <span class="text-h6">Ride Sheet Information (Driver)</span>
        </v-row>

        <v-row class="row-styles">
          <div class="name-input">
            <v-text-field variant="outlined" readonly placeholder="Angela"></v-text-field>
          </div>
          <div class="name-input">
            <v-text-field variant="outlined" readonly placeholder="Leone"></v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field variant="outlined" readonly placeholder="(555)555-5555"></v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field
              variant="outlined"
              readonly
              placeholder="ajleon5@ilstu.edu"
            ></v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="name-input">
            <v-select
              v-model="selectedSeats"
              :items="numbers"
              density="comfortable"
              label="Number of Seats"
            ></v-select>
            <span v-if="seatError" class="error">{{ seatError }}</span>
          </div>
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn class="submit-btn btn" rounded="xl" :loading="loading" @click="submit">
              submit
            </v-btn>
          </div>
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn variant="plain" density="compact" size="x-small" text
              >This is not my information
            </v-btn>
          </div>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useRideEventStore } from '@/stores/rideEventStore'
import { toZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'

export default defineComponent({
  name: 'DriverInfo',
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const phone = ref('')
    const ilstuEmail = ref('')
    const password = ref('')
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const selectedSeats = ref<number | null>(null)
    const seatError = ref('')
    const loading = ref(false)

    const rideStore = useRideEventStore()
    const currentRideEvent = rideStore.getCurrentRideEvent
    const eventName = currentRideEvent.name
    const eventLocation = currentRideEvent.location
    const eventDate = currentRideEvent.date

    const utcDate = new Date(eventDate)
    const chicagoDate = toZonedTime(utcDate, 'America/Chicago')
    const formattedDate = format(chicagoDate, 'MMMM dd, yyyy, hh:mm a')

    const validateSeats = () => {
      if (!selectedSeats.value) {
        seatError.value = 'Please select the number of seats.'
        return false
      } else {
        seatError.value = ''
        return true
      }
    }

    const submit = async () => {
      if (!validateSeats()) {
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
        loading.value = false
        console.log('Account created:', response.data)
      } catch (error) {
        console.error('Error creating account:', error)
        loading.value = false
      }
      router.push('/confirm')
    }

    return {
      firstName,
      lastName,
      phone,
      ilstuEmail,
      password,
      submit,
      loading,
      numbers,
      selectedSeats,
      seatError,
      eventName,
      eventLocation,
      formattedDate
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
.error {
  color: red;
  font-size: 0.9em;
  margin-top: 0.5em;
}
</style>
