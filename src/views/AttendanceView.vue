<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import AttendanceSheetCard from '@/components/AttendanceSheetCard.vue'

export default defineComponent({
  name: 'Attendance-Sheets',
  components: {
    AttendanceSheetCard
  },
  setup() {
    // const rideEvent = ref<RideEvent[]>([])
    const attendance = {
      attendanceSheetID: 0,
      adminID: 1,
      // accountIDs: Account[],
      date: '11/29/20224' //TODO make this a Date object
    }

    //fetch ride events

    // onMounted(fetchRideEvents)

    return {
      attendance
    }
  }
})
</script>
<template>
  <div>
    <v-row class="title-row">
      <h1>Attendance Sheets</h1>
      <v-spacer></v-spacer>
      <v-btn
        variant="outlined"
        prepend-icon="mdi-plus"
        @click="$router.push('/createattendancesheet')"
        >Create and start</v-btn
      >
    </v-row>
    <v-col>
      <v-row class="title-row">
        <attendance-sheet-card :attendance-sheet="attendance"></attendance-sheet-card>
      </v-row>
    </v-col>
  </div>
</template>

<style>
.title-row {
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 5vh;
  padding-left: 15vh;
  padding-right: 15vh;
}
</style>
