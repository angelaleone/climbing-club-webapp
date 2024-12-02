<template>
  <v-card class="event-card">
    <v-card-title>
      <v-row class="title-row">
        Attendance For {{ attendanceSheet.date }}
        <v-spacer></v-spacer>
        <!-- <v-icon size="x-small" @click="deleteattendanceSheet" class="delete-icon"
          >mdi-delete</v-icon
        > -->
        <v-icon size="x-small" @click="downloadCSV" class="edit-icon">mdi-download</v-icon>
      </v-row>
    </v-card-title>
    <v-card-body>
      <v-col class="card-body">
        <v-row><v-icon class="account-icon">mdi-account</v-icon> Admin: Angela Leone</v-row>
      </v-col>
    </v-card-body>
  </v-card>
</template>

<script setup lang="ts">
import type { AttendanceSheet } from '@/api/types/AttendanceSheet'
import { useUserStore } from '@/stores/userStore'
import { ref } from 'vue'

const props = defineProps<{ attendanceSheet: AttendanceSheet }>()
const attendanceSheet = props.attendanceSheet
const attendanceDate = attendanceSheet.date
const attendeesULIDs = attendanceSheet.attendees
const attendeesEmails = ref()
if (attendeesULIDs) {
  attendeesEmails.value = attendeesULIDs.map((ulid: string) => `${ulid}@ilstu.edu`)
}
console.log('emails ', attendeesEmails.value)

const downloadCSV = () => {
  console.log('inside the function')
  const csvContent = 'data:text/csv;charset=utf-8,' + 'Emails\n' + attendeesEmails.value.join('\n')

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', 'attendance_sheet' + attendanceDate + '.csv')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const editattendanceSheet = () => {
  console.log('Edit sheet', attendanceSheet)
}

const deleteattendanceSheet = () => {
  console.log('Delete sheet', attendanceSheet)
}
</script>

<style scoped>
.event-card {
  margin: 1vh;
  width: 110vh;
  height: 11.5vh;
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
