<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const adminView = ref(true) //add this to the store
</script>

<template>
  <v-app>
    <v-app-bar app v-if="adminView">
      <v-toolbar-title>
        <v-btn text="true">
          <RouterLink to="/home" exact>ClimbingClub RockRoster</RouterLink>
        </v-btn></v-toolbar-title
      >
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
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
