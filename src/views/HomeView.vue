<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <v-row>
      <div class="card-container">
        <v-card class="card">
          <v-col>
            <div class="card-title">
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
  align-items: center;
}
.card-container {
  padding: 2vh;
}
.card {
  width: 40vh;
  height: 25vh;
  background-color: #d3d3d3;
  align-items: center;
  border-radius: 3vh;
}
.card-title {
  padding-top: 7vh;
  padding-left: 7vh;
  margin-left: 2vh;
  font-size: x-large;
  justify-self: center;
}
.add-btn {
  align-self: last baseline;
  margin-left: 33vh;
  margin-top: 6.5vh;
}
</style>
