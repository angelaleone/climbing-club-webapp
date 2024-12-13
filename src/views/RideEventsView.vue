<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import RideEventCard from '@/components/RideEventCard.vue'
import type { RideEvent } from '@/api/types/RideEvent'

export default defineComponent({
  name: 'Ride-Events',
  components: {
    RideEventCard
  },
  setup() {
    //im not using this anymore but was used for initial testing
    const rideEvent = {
      rideEventID: 20,
      location: '1500 Main St., Normal, IL',
      date: '11/23/2024',
      time: '5:00pm',
      name: 'Upper Limits: Pink Out'
    }

    //fetch all ride events
    const rideEvents = ref()

    const fetchRideEvents = async () => {
      try {
        const response = await axios.get<RideEvent[]>('http://localhost:3001/api/rideevent')
        rideEvents.value = response.data
        console.log(rideEvents.value, 'response', response.data)
      } catch (error) {
        console.error('Error fetching ride events')
      }
    }

    onMounted(fetchRideEvents)

    return {
      rideEvent,
      rideEvents
    }
  }
})
</script>
<template>
  <div>
    <v-row class="title-row">
      <h1>Ride Events</h1>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" prepend-icon="mdi-plus" @click="$router.push('/createrideevent')"
        >Create</v-btn
      >
    </v-row>
    <v-col>
      <v-row class="title-row">
        <!-- <ride-event-card :ride-event="rideEvent"></ride-event-card> -->
        <li v-for="event in rideEvents" :key="event.rideEventID" class="listing-data">
          <ride-event-card :ride-event="event"></ride-event-card>
        </li>
      </v-row>
    </v-col>
  </div>
</template>

<style scoped>
.title-row {
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 5vh;
  padding-left: 15vh;
  padding-right: 15vh;
}
.listing-data {
  list-style-type: none;
  justify-content: center;
  align-items: center;
  padding: 1vh;
  padding-left: 20vh;
}
</style>
