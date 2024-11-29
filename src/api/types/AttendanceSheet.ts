import type { Account } from '@/stores/accountStore'
export type AttendanceSheet = {
  attendanceSheetID: number
  adminID: number
  accountIDs?: string[]
  date: string //TODO make this a Date object?
}
