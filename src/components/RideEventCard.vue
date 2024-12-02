<template>
  <v-card class="event-card">
    <v-card-title>
      <v-row class="title-row">
        <div>{{ rideEvent.name }}</div>
        <v-spacer></v-spacer>
        <!-- <v-icon size="x-small" @click="deleterideEvent" class="delete-icon">mdi-delete</v-icon> -->
        <v-icon size="x-small" @click="shareRideEvent" class="edit-icon">mdi-share</v-icon>
      </v-row>
    </v-card-title>
    <v-card-body>
      <v-col class="card-body">
        <v-row
          ><v-icon class="icon">mdi-calendar-range</v-icon>{{ formattedDate }}
          {{ rideEvent.time }}</v-row
        >
        <v-row
          ><v-icon class="icon">mdi-map-marker</v-icon>Location: {{ rideEvent.location }}</v-row
        >
      </v-col>
    </v-card-body>
  </v-card>
</template>

<script setup lang="ts">
import type { RideEvent } from '@/api/types/RideEvent'
import router from '@/router'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import { useRideEventStore } from '@/stores/rideEventStore'

const props = defineProps<{ rideEvent: RideEvent }>()
const rideEvent = props.rideEvent
const utcDate = new Date(rideEvent.date)
const chicagoDate = toZonedTime(utcDate, 'America/Chicago')
const formattedDate = format(chicagoDate, 'MMMM dd, yyyy, hh:mm a')

const rideStore = useRideEventStore()

const shareRideEvent = () => {
  console.log('share event', rideEvent)
  rideStore.setselectedRideEvent(rideEvent)
  router.push('/ridesheetselection')
}

const deleterideEvent = () => {
  console.log('Delete ride event', rideEvent)
}
</script>

<style scoped>
.event-card {
  margin: 1vh;
  width: 110vh;
  height: 13vh;
  border-radius: 10px;
  border-width: 2px;
  border-color: #c5d1d8;
}
.edit-icon {
  margin-left: 8px;
  color: #555;
  transition: color 0.2s;
  margin-right: -2.5vh;
}
.delete-icon {
  margin-left: 8px;

  color: #555;
  transition: color 0.2s;
}
.edit-icon:hover,
.delete-icon:hover {
  color: #1976d2;
}
.title-row {
  padding: 0.5vh;
}
.card-body {
  margin-left: 2vh;
  margin-top: 1.5vh;
}
.icon {
  margin-right: 1vh;
}
</style>
