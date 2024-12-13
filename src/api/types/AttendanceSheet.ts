import type { Account } from '@/stores/accountStore'
export type AttendanceSheet = {
  attendancesheetid?: number
  adminID: number
  attendees?: string[]
  date: string //TODO make this a Date object?
}
