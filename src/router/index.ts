import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RosterView from '@/views/RosterView.vue'
import RideEventsView from '@/views/RideEventsView.vue'
import AttendanceView from '@/views/AttendanceView.vue'
import CreateAttendanceSheetView from '@/views/CreateAttendanceSheetView.vue'
import CreateRideEventView from '@/views/CreateRideEventView.vue'
import ResgisterAccountView from '@/views/ResgisterAccountView.vue'
import LoginScreen from '@/views/LoginScreen.vue'

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
    }
  ]
})

export default router
