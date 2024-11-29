<script lang="ts">
import { defineComponent, ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import router from '@/router'
import axios from 'axios'
import { useUserStore } from '@/stores/userStore'

export default defineComponent({
  name: 'CreateAttendanceSheet',
  setup() {
    const date = ref()
    const formattedDate = ref()
    console.log('date', date)
    const loading = ref(false)

    //using the user store
    const userStore = useUserStore()
    const adminID = userStore.getAdminID
    console.log('adminID', adminID)

    //formatting date from date object to string
    function formatDate() {
      formattedDate.value = date.value.toLocaleDateString()
      console.log('formatted date', date.value)
    }

    const createAndNavigate = async () => {
      loading.value = true
      formatDate()
      try {
        const response = await axios.post('http://localhost:3001/api/attendance/post', {
          // attendanceSheetID: 11,
          adminID: adminID,
          accountIDs: [],
          date: formattedDate.value
        })
        console.log('attendance sheet created:', response.data)
      } catch (error) {
        console.error('Error creating attendance sheet:', error)
      }
      router.push({
        path: '/attendance',
        force: true
      })
    }

    return {
      date,
      createAndNavigate,
      loading
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
        <h1>Create Attendance Sheet</h1>
      </v-row>
    </div>
    <div class="content-container">
      <v-col>
        <v-row class="date-row">
          <div class="date-label">Select date:</div>
          <div>
            <VueDatePicker :enable-time-picker="false" v-model="date"></VueDatePicker>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field label="Admin Name"> </v-text-field>
          </div>
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn class="btn" @click="createAndNavigate()" :loading="loading">
              create and start
            </v-btn>
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
  padding-top: 20vh;
}
.long-input {
  padding: 1vh;
  width: 80vh;
}
.date-row {
  display: flex;
  width: 30%;
  justify-content: center;
  padding: 1vh;
  margin-left: 60vh;
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
