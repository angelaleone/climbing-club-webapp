<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import router from '@/router'

export default defineComponent({
  name: 'HomeView',
  setup() {
    function register() {
      router.push('/register')
    }

    function attendance() {
      router.push('/createattendancesheet')
    }

    function rideEvent() {
      router.push('/createrideevent')
    }

    return {
      register,
      attendance,
      rideEvent
    }
  }
})
</script>

<template>
  <div class="home">
    <v-row class="welcome">
      <h1 class="welcome-text">Welcome to RockRoster</h1>
    </v-row>
    <v-row class="home-row">
      <div class="card-container">
        <v-card class="card elevation-6">
          <v-col>
            <div class="card-title">
              <span>Register Accounts</span>
            </div>
            <div class="card-icon">
              <v-icon large>mdi-account-group</v-icon>
            </div>

            <v-row>
              <div class="add-btn">
                <v-btn icon="mdi-plus" @click="register()"></v-btn>
              </div>
            </v-row>
          </v-col>
        </v-card>
      </div>
      <div class="card-container">
        <v-card class="card elevation-6">
          <v-col>
            <div class="card-title">
              <span>Create Ride Event</span>
            </div>
            <div class="card-icon">
              <v-icon large>mdi-car-hatchback</v-icon>
            </div>
            <v-row>
              <div class="add-btn">
                <v-btn icon="mdi-plus" @click="rideEvent()"></v-btn>
              </div>
            </v-row>
          </v-col>
        </v-card>
      </div>
      <div class="card-container">
        <v-card class="card elevation-6">
          <v-col>
            <div class="card-title">
              <span>Take Attendance</span>
            </div>
            <div class="card-icon">
              <v-icon large>mdi-account-check</v-icon>
            </div>
            <v-row>
              <div class="add-btn">
                <v-btn icon="mdi-plus" @click="attendance()"></v-btn>
              </div>
            </v-row>
          </v-col>
        </v-card>
      </div>
    </v-row>
  </div>
</template>
<style scoped>
.home {
  padding: 5vh;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.home-row {
  display: flex;
  gap: 2vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.card-container {
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.card {
  width: 40vh;
  height: 25vh;
  background-color: #9cafb7;
  border-radius: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Distributes items vertically */
}

.card-title {
  margin-top: 5vh;
  font-size: 1.5rem; /* Adjust font size for text */
  color: #f8f6f0;
  text-align: center; /* Center-align text */
}

.card-icon {
  color: #fffff0;
  font-size: 2rem; /* Make the icon larger */
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add spacing above the icon */
}
.add-btn {
  position: absolute;
  bottom: 2vh;
  right: 2vh;
}
.welcome {
  justify-content: center;
  padding-top: 10vh;
  padding-bottom: 8vh;
  letter-spacing: 3.5px;
  font-size: large;
  font-weight: bold;
}
.welcome-text {
  color: #212121;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
