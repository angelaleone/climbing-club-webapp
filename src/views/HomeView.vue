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
      <h1>Welcome to RockRoster</h1>
    </v-row>
    <v-row class="home-row">
      <div class="card-container">
        <v-card class="card">
          <v-col>
            <div class="card-title">
              <!-- <v-icon large class="card-icon">mdi-account</v-icon> -->
              <span>Register Accounts</span>
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
        <v-card class="card">
          <v-col>
            <div class="card-title">
              <span>Create Ride Event</span>
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
        <v-card class="card">
          <v-col>
            <div class="card-title">
              <span>Take Attendance</span>
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
}
.card {
  width: 40vh;
  height: 25vh;
  background-color: #9cafb7;
  border-radius: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card-title {
  margin: auto;
  padding-top: 7.5vh;
  padding-left: 7vh;
  margin-left: 1vh;
  font-size: x-large;
  justify-self: center;
}
.card-icon {
  color: #4a4a4a;
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
  letter-spacing: 4.5px;
  font-size: large;
  font-weight: bold;
}
</style>
