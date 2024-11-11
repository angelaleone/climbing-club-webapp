<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import RideEventCard from '@/components/RideEventCard.vue'

export default defineComponent({
  name: 'Ride-Events',
  components: {
    RideEventCard
  },
  setup() {
    // const rideEvent = ref<RideEvent[]>([])
    const rideEvent = {
      rideEventID: 20,
      location: '1500 Main St., Normal, IL',
      date: '11/23/2024',
      time: '5:00pm',
      name: 'Upper Limits: Pink Out'
    }

    //fetch ride events

    // onMounted(fetchRideEvents)

    return {
      rideEvent
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
        <ride-event-card :ride-event="rideEvent"></ride-event-card>
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
</style>
