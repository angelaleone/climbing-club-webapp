<template>
  <v-card class="event-card">
    <v-card-title>
      <v-row class="title-row">
        Attendance For {{ formattedDate }}
        <v-spacer></v-spacer>
        <v-icon size="x-small" @click="deleteattendanceSheet" class="delete-icon"
          >mdi-delete</v-icon
        >
        <v-icon size="x-small" @click="editattendanceSheet" class="edit-icon">mdi-download</v-icon>
      </v-row>
    </v-card-title>
    <v-card-body>
      <v-col class="card-body">
        <v-row><v-icon class="account-icon">mdi-account</v-icon> Admin: Jenna Germano</v-row>
      </v-col>
    </v-card-body>
  </v-card>
</template>

<script setup lang="ts">
import type { AttendanceSheet } from '@/api/types/AttendanceSheet'
import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

const props = defineProps<{ attendanceSheet: AttendanceSheet }>()
const attendanceSheet = props.attendanceSheet

const editattendanceSheet = () => {
  console.log('Edit sheet', attendanceSheet)
}

const deleteattendanceSheet = () => {
  console.log('Delete sheet', attendanceSheet)
}

const utcDate = new Date(attendanceSheet.date)
const chicagoDate = toZonedTime(utcDate, 'America/Chicago')
const formattedDate = format(chicagoDate, 'MMMM dd, yyyy')

console.log(formattedDate)
</script>

<style scoped>
.event-card {
  margin: 1vh;
  width: 110vh;
  height: 11.5vh;
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
  padding: 1vh;
}
.card-body {
  margin-left: 2vh;
  margin-top: 1.5vh;
}
.account-icon {
  margin-right: 1vh;
}
</style>
