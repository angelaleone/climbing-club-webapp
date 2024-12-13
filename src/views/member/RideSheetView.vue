<!-- this file was not finished functionally -->
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
      <v-row class="row-container">
        <div class="card-div">
          <v-card class="card-styles">
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
              <v-btn @click="submit">submit</v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="card-div">
          <carpool-card></carpool-card>
        </div>
        <div class="card-div">
          <carpool-card></carpool-card>
        </div>
        <div class="card-div">
          <carpool-card></carpool-card>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import router from '@/router'
import CarpoolCard from '@/components/CarpoolCard.vue'
import { useRideEventStore } from '@/stores/rideEventStore'
import { toZonedTime } from 'date-fns-tz'
import { format } from 'date-fns'

export default defineComponent({
  name: 'RiderSheet',
  components: {
    CarpoolCard
  },
  setup() {
    const firstName = ref('')
    const lastName = ref('')
    const phone = ref('')
    const ilstuEmail = ref('')
    const password = ref('')

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

    //should update carpool in db, but no api endpoint was created
    function submit() {
      router.push('/confirm')
    }

    const selected = ref([])

    return {
      firstName,
      lastName,
      phone,
      ilstuEmail,
      password,
      submit,
      selected,
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

.row-container {
  display: flex;
  align-items: center;
  width: 95%;
  padding-left: 25vh;
  padding-top: -8vh;
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
  margin-bottom: 4vh;
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
.card-styles {
  border-radius: 10px;
  border-width: 2px;
  border-color: #c5d1d8;
}
</style>
