<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import router from '@/router'
import axios from 'axios'

export default defineComponent({
  name: 'CreateRideEvent',
  setup() {
    const loading = ref(false)
    const date = ref<Date | null>(null)
    const location = ref()
    const name = ref()

    const createAndNavigate = async () => {
      loading.value = true
      try {
        const response = await axios.post('http://localhost:3001/api/rideevent/post', {
          location: location.value,
          date: date.value,
          name: name.value
        })
        console.log('ride event created:', response.data)
      } catch (error) {
        console.error('Error creating ride event:', error)
      }
      router.push({
        path: '/rideevents'
      })
    }

    return {
      date,
      location,
      name,
      createAndNavigate
    }
  }
})
</script>
<template>
  <div>
    <div class="title-row">
      <v-row>
        <div class="back-btn">
          <v-btn icon="mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
        </div>
        <h1>Create Ride Event</h1>
      </v-row>
    </div>

    <div class="content-container">
      <v-col>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field label="Event Name" v-model="name"> </v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field label="Event Location" v-model="location"> </v-text-field>
          </div>
        </v-row>
        <v-row class="date-row">
          <div class="date-label">Select date and time:</div>
          <div>
            <VueDatePicker v-model="date" :is-24="false"></VueDatePicker>
          </div>
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn class="btn" @click="createAndNavigate()"> submit </v-btn>
          </div>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<style scoped>
.title-row {
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 5vh;
}
.back-btn {
  margin-top: 0.3vh;
  padding-right: 2vh;
}
.row-styles {
  justify-content: center;
  align-items: center;
}
.content-container {
  padding-top: 15vh;
}
.long-input {
  padding: 1vh;
  width: 80vh;
  margin-bottom: -1vh;
}
.date-row {
  display: flex;
  width: 30%;
  justify-content: center;
  padding: 1vh;
  margin-left: 60vh;
  margin-top: -4vh;
}
.btn {
  min-width: 10vh;
  margin-top: 2vh;
  background-color: #ead2ac;
}
.btn-group-container {
  justify-content: center;
}
.date-label {
  padding-right: 2vh;
  margin-top: 0.75vh;
}
</style>
