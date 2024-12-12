<template>
  <div class="confirmation-container">
    <v-container class="text-center">
      <v-icon size="48" color="success">mdi-check-circle-outline</v-icon>
      <h2>Thank you for your submission!</h2>
      <div class="ride-details">
        <p>{{ firtName }} {{ lastName }}</p>
        <p>{{ phone }}</p>
        <p>{{ email }}</p>
      </div>
      <v-divider class="divider"></v-divider>
    </v-container>
    <div class="title-row">
      <v-col>
        <v-row>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRideEventStore } from '@/stores/rideEventStore'
import { toZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'
import { useUserStore } from '@/stores/userStore'

export default defineComponent({
  name: 'ConfirmationScreen',
  setup() {
    //using ride store and assigning values
    const rideStore = useRideEventStore()
    const currentRideEvent = rideStore.getCurrentRideEvent
    const eventName = currentRideEvent.name
    const eventLocation = currentRideEvent.location
    const eventDate = currentRideEvent.date

    //date conversion
    const utcDate = new Date(eventDate)
    const chicagoDate = toZonedTime(utcDate, 'America/Chicago')
    const formattedDate = format(chicagoDate, 'MMMM dd, yyyy, hh:mm a')

    //using user store and assigning values
    const userStore = useUserStore()
    const user = userStore.getCurrentUser
    const firtName = user.first_name
    const lastName = user.last_name
    const phone = user.phone
    const email = user.email

    return {
      eventName,
      eventLocation,
      formattedDate,
      firtName,
      lastName,
      phone,
      email
    }
  }
})
</script>

<style scoped>
.confirmation-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -5vh;
}

.text-center {
  text-align: center;
  color: #333;
}

h2 {
  font-weight: 500;
  margin: 16px 0;
}

.ride-details {
  font-size: 16px;
  color: #666;
  margin-top: 8px;
}
.title-row {
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 2vh;
  margin-left: 100vh;
}
.event-subtitle {
  padding-top: 1vh;
  padding-left: 1vh;
}
.spacing-styles {
  padding-left: 1vh;
}
.divider {
  margin-top: 3vh;
}
</style>
