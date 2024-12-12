<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import AttendanceSheetCard from '@/components/AttendanceSheetCard.vue'
import type { AttendanceSheet } from '@/api/types/AttendanceSheet'
import { useSessionStore } from '@/stores/sessionStore'

export default defineComponent({
  name: 'Attendance-Sheets',
  components: {
    AttendanceSheetCard
  },
  setup() {
    const attendanceSheets = ref()
    //using session store for navbar admin status accessability
    const sessionStore = useSessionStore()
    sessionStore.setAdminStatus(true)

    //api call to get all attendance sheets
    const fetchAttendanceSheets = async () => {
      try {
        const response = await axios.get<AttendanceSheet[]>('http://localhost:3001/api/attendance')
        attendanceSheets.value = response.data
        console.log(attendanceSheets.value, 'response', response.data)
      } catch (error) {
        console.error('Error fetching attendance sheets')
      }
    }

    //call function on mounted hook
    onMounted(fetchAttendanceSheets)

    const attendance = {
      attendanceSheetID: 0,
      adminID: 1,
      accountIDs: [],
      date: '11/29/20224'
    }

    return {
      attendance,
      attendanceSheets
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
        <!-- <attendance-sheet-card :attendance-sheet="attendance"></attendance-sheet-card> -->
        <li
          v-for="attendance in attendanceSheets"
          :key="attendance.attendanceSheetID"
          class="listing-data"
        >
          <attendance-sheet-card :attendance-sheet="attendance"></attendance-sheet-card>
        </li>
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
.listing-data {
  list-style-type: none;
  justify-content: center;
  align-items: center;
  padding: 1vh;
  padding-left: 20vh;
}
</style>
