import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { AttendanceSheet } from '@/api/types/AttendanceSheet'

const initial: AttendanceSheet = {
  attendanceSheetID: 0,
  adminID: 0,
  accountIDs: [],
  date: ''
}

export const useAttendanceStore = defineStore('account', {
  state: (): { selectedAttendanceSheet: AttendanceSheet } => ({
    selectedAttendanceSheet: initial
  }),

  actions: {
    setSelectedAccount(attendanceSheet: AttendanceSheet) {
      this.selectedAttendanceSheet = attendanceSheet
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
    getAttendanceID: (state) => state.selectedAttendanceSheet.attendanceSheetID
  }
})
