import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RosterView from '@/views/RosterView.vue'
import RideEventsView from '@/views/RideEventsView.vue'
import AttendanceView from '@/views/AttendanceView.vue'
import CreateAttendanceSheetView from '@/views/CreateAttendanceSheetView.vue'
import CreateRideEventView from '@/views/CreateRideEventView.vue'
import ResgisterAccountView from '@/views/ResgisterAccountView.vue'
import LoginScreen from '@/views/LoginScreen.vue'
import AttendanceIntakeView from '@/views/member/AttendanceIntakeView.vue'
import ConfirmAdmin from '@/views/ConfirmAdmin.vue'
import { useUserStore } from '@/stores/userStore'
import RideSheetInitialView from '@/views/member/RideSheetInitialView.vue'
import DriverInfoView from '@/views/member/DriverInfoView.vue'
import RiderInfoView from '@/views/member/RiderInfoView.vue'
import RideSheetView from '@/views/member/RideSheetView.vue'
import ConfirmationScreen from '@/views/member/ConfirmationScreen.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginScreen
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/roster',
      name: 'roster',
      component: RosterView
    },
    {
      path: '/rideevents',
      name: 'rideEvents',
      component: RideEventsView
    },
    {
      path: '/attendancesheets',
      name: 'attendanceSheets',
      component: AttendanceView
    },
    {
      path: '/register',
      name: 'register',
      component: ResgisterAccountView
    },
    {
      path: '/createrideevent',
      name: 'createRideEvent',
      component: CreateRideEventView
    },
    {
      path: '/createattendancesheet',
      name: 'createAttemdanceSheet',
      component: CreateAttendanceSheetView
    },
    {
      path: '/attendance',
      name: 'AttendanceIntake',
      component: AttendanceIntakeView
    },
    {
      path: '/confirmadmin',
      name: 'confirmAdmin',
      component: ConfirmAdmin
    },
    {
      path: '/ridesheetselection',
      name: 'rideSheetSelection',
      component: RideSheetInitialView
    },
    {
      path: '/riderinfo',
      name: 'riderInfo',
      component: RiderInfoView
    },
    {
      path: '/driverinfo',
      name: 'driverInfo',
      component: DriverInfoView
    },
    // this will work differently for unique ride sheets
    {
      path: '/ridesheet/:uniqueToken',
      name: 'rideSheet',
      component: RideSheetView,
      props: true
    },
    {
      path: '/confirm',
      name: 'confirmationScreen',
      component: ConfirmationScreen
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.path === '/') {
    userStore.clearSelectedUser()
    console.log('user store reset on login')
  }
  next()
})

export default router
