<template>
  <div>
    <div class="title-row">
      <v-col>
        <v-row>
          <div class="back-btn">
            <v-btn icon="mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
          </div>
          <!-- this will be interpolated from store variables  -->
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
          <span class="text-h6">Review Ride Sheet Information (Rider) </span>
        </v-row>

        <v-row class="row-styles">
          <div class="name-input">
            <!-- the placeholders will all have interpolated values from userStore  -->
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

        <v-row class="btn-group-container">
          <div>
            <v-btn class="submit-btn btn" rounded="xl" @click="submit" :loading="loading"
              >confirm</v-btn
            >
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
import { useUserStore } from '@/stores/userStore'

export default defineComponent({
  name: 'RiderInfo',
  setup() {
    //user values
    const userStore = useUserStore()
    const firstName = userStore.selectedUser.first_name
    const lastName = userStore.selectedUser.last_name
    const phone = userStore.selectedUser.phone
    const ilstuEmail = userStore.selectedUser.email

    const loading = ref(false)

    //using ride store
    const rideStore = useRideEventStore()
    const currentRideEvent = rideStore.getCurrentRideEvent
    const eventName = currentRideEvent.name
    const eventLocation = currentRideEvent.location
    const eventDate = currentRideEvent.date

    //date conversion
    const utcDate = new Date(eventDate)
    const chicagoDate = toZonedTime(utcDate, 'America/Chicago')
    const formattedDate = format(chicagoDate, 'MMMM dd, yyyy, hh:mm a')

    //this should contain an api call to update the carpool but it was never created
    function submit() {
      router.push('/ridesheet')
    }

    return {
      firstName,
      lastName,
      phone,
      ilstuEmail,
      submit,
      loading,
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
</style>
