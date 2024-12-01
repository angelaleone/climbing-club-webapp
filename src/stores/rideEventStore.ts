import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { RideEvent } from '@/api/types/RideEvent'

const initial: RideEvent = {
  location: '',
  date: '',
  time: '',
  name: ''
}

export const useRideEventStore = defineStore('rideEvent', {
  state: (): { selectedRideEvent: RideEvent } => ({
    selectedRideEvent: initial
  }),

  actions: {
    setselectedRideEvent(rideEvent: RideEvent) {
      this.selectedRideEvent = rideEvent
      console.log('setting selected ride event', this.selectedRideEvent)
    },
    setDate(date: string) {
      this.selectedRideEvent.date = date
    },
    createAttendanceSheet() {},
    clearSelectedAccount() {
      this.selectedRideEvent = initial
    }
  },
  getters: {
    // getAttendanceID: (state) => state.selectedRideEvent.attendanceSheetID,
    getCurrentRideEvent: (state) => state.selectedRideEvent
  }
})
