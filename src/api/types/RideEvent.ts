import type { TimeObj } from '@vuepic/vue-datepicker'

export type RideEvent = {
  rideEventID?: number
  location: string
  date: string //TODO change this to date?
  time: string
  name: string
}
