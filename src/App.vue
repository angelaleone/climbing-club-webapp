<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from './stores/userStore'
import { useSessionStore } from './stores/sessionStore'
const userStore = useUserStore()
const sessionStore = useSessionStore()
const isAdmin = computed(() => sessionStore.isAdmin)
</script>

<template>
  <v-app class="background">
    <v-app-bar app v-if="isAdmin" color="#eeeeee">
      <!-- Use the computed property here for navbar/Admin permissions -->
      <v-toolbar-title>
        <v-btn text="true">
          <RouterLink to="/home" exact>ClimbingClub RockRoster</RouterLink>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <RouterLink to="/roster" exact>Roster</RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/rideevents">Ride Events</RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/attendancesheets">Attendance</RouterLink>
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav a.router-link-exact-active {
  color: #4281a4;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #fff0;
}

nav a:first-of-type {
  border: 0;
}
.background {
  background-color: #fff0;
  min-height: 100vh;
}
.navbar-color {
  color: #eacebc;
}
</style>
