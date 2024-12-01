<template>
  <v-card class="event-card">
    <v-card-title>
      <v-row class="title-row">
        <div>{{ rideEvent.name }}</div>
        <v-alert v-if="copied" class="copied-alert" type="success"> copied to clipboard </v-alert>
        <v-spacer></v-spacer>
        <v-icon size="x-small" @click="deleterideEvent" class="delete-icon">mdi-delete</v-icon>
        <v-icon size="x-small" @click="copyRideSheetLink()" class="edit-icon">mdi-share</v-icon>
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
import { ref } from 'vue'

const props = defineProps<{ rideEvent: RideEvent }>()
const rideEvent = props.rideEvent
const utcDate = new Date(rideEvent.date)
const chicagoDate = toZonedTime(utcDate, 'America/Chicago')
const formattedDate = format(chicagoDate, 'MMMM dd, yyyy, hh:mm a')

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    console.log('Text copied to clipboard:', text)
  } catch (err) {
    console.error('Failed to copy text:', err)
  }
}

// function generateRandomToken(length: number) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   let result = ''
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * characters.length))
//   }
//   return result
// }

// function copyRideSheetLink() {
//   rideStore.setselectedRideEvent(rideEvent)
//   const uniqueToken = generateRandomToken(32)
//   const uniqueUrl = `http://localhost:5173/ridesheetselection/ridesheetselection/${uniqueToken}`
//   copyToClipboard(uniqueUrl)
// }

const rideStore = useRideEventStore()

let copied = ref(false) // Flag for displaying copy success message

const copyRideSheetLink = async () => {
  try {
    rideStore.setselectedRideEvent(rideEvent)
    await navigator.clipboard.writeText('http://localhost:5173/ridesheetselection')
    console.log('Text copied to clipboard')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000) // Reset copied flag after 2 seconds
  } catch (err) {
    console.error('Failed to copy text:', err)
  }
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
.copied-alert {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4caf50; /* Success green */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-size: 0.875rem;
  animation: fadeOut 2s forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
  }
}
</style>
