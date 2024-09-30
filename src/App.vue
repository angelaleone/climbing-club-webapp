<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <v-btn text="true">
          <RouterLink to="/" exact>ClimbingClub RockRoster</RouterLink>
        </v-btn></v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn>
        <RouterLink to="/about" exact>Roster</RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/about">Ride Events</RouterLink>
      </v-btn>
      <v-btn>
        <RouterLink to="/about">Attendance</RouterLink>
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
