<script>
import { defineComponent, onMounted, ref } from 'vue'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'
import { useAttendanceStore } from '@/stores/attendanceStore'
import { useRideEventStore } from '@/stores/rideEventStore'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'
import { useSessionStore } from '@/stores/sessionStore'

export default defineComponent({
  name: 'RideSheetInitialView',
  setup() {
    onMounted(() => {
      const userStore = useUserStore()
      userStore.setAdminStatus(false)
      forceRerender()
    })
    const uniqueKey = ref(0)
    const forceRerender = () => {
      uniqueKey.value++
    }
    const rideStore = useRideEventStore()
    const currentRideEvent = rideStore.getCurrentRideEvent
    const eventName = currentRideEvent.name
    const eventLocation = currentRideEvent.location
    const eventDate = currentRideEvent.date

    const sessionStore = useSessionStore()
    sessionStore.setAdminStatus(false)

    const utcDate = new Date(eventDate)
    const chicagoDate = toZonedTime(utcDate, 'America/Chicago')
    const formattedDate = format(chicagoDate, 'MMMM dd, yyyy, hh:mm a')

    function navigateToDriverInfo() {
      //router push
      router.push('/driverinfo')
      //set store vairables?
    }

    function navigateToRiderInfo() {
      //router push
      router.push('/riderinfo')
      //set store variables
    }

    function seeRideSheet() {
      router.push('/ridesheet')
    }

    return {
      navigateToDriverInfo,
      navigateToRiderInfo,
      seeRideSheet,
      eventName,
      formattedDate,
      eventLocation
    }
  }
})
</script>
<template>
  <div>
    <v-col class="content-container">
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
      <v-row class="center-row">
        <div>
          <v-card class="card" @click="navigateToDriverInfo()">
            <v-col class="card-content">
              <div class="card-title">
                <span class="text-h5">I am a driver</span>
              </div>
              <div class="icon-container">
                <v-icon size="x-large">mdi-car</v-icon>
              </div>
            </v-col>
          </v-card>
        </div>
        <div>
          <v-card class="card" @click="navigateToRiderInfo()">
            <v-col class="card-content">
              <div class="card-title">
                <span class="text-h5">I need a ride</span>
              </div>
              <div class="icon-container">
                <v-icon size="x-large">mdi-account</v-icon>
              </div>
            </v-col>
          </v-card>
        </div>
      </v-row>
      <v-row>
        <v-col class="bottom-row">
          <div class="icon-container">
            <span>OR</span>
          </div>
          <div class="icon-container">
            <v-btn variant="plain" @click="seeRideSheet()">see ride sheet</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<style scoped>
.content-container {
  padding-top: 40vh;
  height: 100%;
}

.center-row {
  justify-content: center;
  margin-top: -10vh;
}

.card {
  width: 35vh;
  height: 20vh;
  border-radius: 15px;
  margin-right: 5vh;
  cursor: pointer;
  margin-top: 2vh;
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-title {
  margin-bottom: 2vh;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom-row {
  justify-content: center;
  padding-top: 20vh;
}
.title-row {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -40vh;
  margin-bottom: 30vh;
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
.spacing-styles {
  padding-left: 1vh;
  margin-top: -0.15vh;
}
</style>
