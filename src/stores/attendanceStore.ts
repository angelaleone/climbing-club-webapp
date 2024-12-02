import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { AttendanceSheet } from '@/api/types/AttendanceSheet'

const initial: AttendanceSheet = {
  attendancesheetid: 6,
  adminID: 1,
  attendees: [],
  date: ''
}

export const useAttendanceStore = defineStore('account', {
  state: (): { selectedAttendanceSheet: AttendanceSheet } => ({
    selectedAttendanceSheet: initial
  }),

  actions: {
    setSelectedAttendanceSheet(attendanceSheet: AttendanceSheet) {
      this.selectedAttendanceSheet = attendanceSheet
      console.log('setting selected attendance sheet', this.selectedAttendanceSheet)
    },
    setDate(date: string) {
      this.selectedAttendanceSheet.date = date
    },
    createAttendanceSheet() {},
    clearSelectedAccount() {
      this.selectedAttendanceSheet = initial
    }
  },
  getters: {
    getAttendanceID: (state) => state.selectedAttendanceSheet.attendancesheetid,
    getCurrentAttendanceSheet: (state) => state.selectedAttendanceSheet
  }
})
