<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
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
                <v-btn icon="mdi-plus"><RouterLink to="/register">+</RouterLink></v-btn>
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
                <v-btn icon="mdi-plus"><RouterLink to="/createrideevent">+</RouterLink></v-btn>
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
                <v-btn icon="mdi-plus"
                  ><RouterLink to="/createattendancesheet">+</RouterLink></v-btn
                >
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
  padding-top: 28vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.home-row {
  display: flex;
  gap: 2vh;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

.card-container {
  display: flex;
  justify-content: center;
}

.card {
  width: 40vh;
  height: 25vh;
  background-color: #d3d3d3;
  border-radius: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card-title {
  /* margin: auto; */
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
</style>
