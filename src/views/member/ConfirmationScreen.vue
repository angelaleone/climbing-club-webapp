<template>
  <div class="confirmation-container">
    <v-container class="text-center">
      <v-icon size="48" color="success">mdi-check-circle-outline</v-icon>
      <h2>Thank you for your submission!</h2>
      <div class="ride-details">
        <p>Your ride: Angela Leone</p>
        <p>(555)555-5555</p>
        <p>ajleon5@ilstu.edu</p>
      </div>
      <v-divider class="divider"></v-divider>
    </v-container>
    <div class="title-row">
      <v-col>
        <v-row>
          <!-- this will be interpolated from store variables  -->
          <h1>Upper Limits Trip 10/9/2024</h1>
        </v-row>
        <v-row class="event-subtitle">
          <v-icon>mdi-clock-outline</v-icon>
          <span text-subtitle-1 class="spacing-styles">5:00pm</span>
        </v-row>
        <v-row class="event-subtitle">
          <v-icon>mdi-map-marker-outline</v-icon>
          <span text-subtitle-1 class="spacing-styles"
            >1304 W Washington St, Bloomington, IL 61701</span
          >
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConfirmationScreen'
})
</script>

<style scoped>
.confirmation-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -5vh;
}

.text-center {
  text-align: center;
  color: #333;
}

h2 {
  font-weight: 500;
  margin: 16px 0;
}

.ride-details {
  font-size: 16px;
  color: #666;
  margin-top: 8px;
}
.title-row {
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 2vh;
  margin-left: 100vh;
}
.event-subtitle {
  padding-top: 1vh;
  padding-left: 1vh;
}
.spacing-styles {
  padding-left: 1vh;
}
.divider {
  margin-top: 3vh;
}
</style>
