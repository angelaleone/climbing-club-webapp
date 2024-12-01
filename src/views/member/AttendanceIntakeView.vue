<script>
import { defineComponent, onMounted, ref } from 'vue'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'
import { useAttendanceStore } from '@/stores/attendanceStore'
import axios from 'axios'

export default defineComponent({
  name: 'AttendanceIntake',
  setup() {
    onMounted(() => {
      const userStore = useUserStore()
      userStore.setAdminStatus(false)
      forceRerender()
    })
    const uniqueKey = ref(0)
    const forceRerender = () => {
      uniqueKey.value++
    }

    const showThanks = ref(false)
    const loading = ref(false)
    const input = ref('')

    //using attendance store
    const attendanceStore = useAttendanceStore()
    const attendanceID = attendanceStore.getAttendanceID
    const currentAttendanceSheet = attendanceStore.getCurrentAttendanceSheet
    const attendanceName = currentAttendanceSheet.date
    //this only works if we update the selected attendence sheet in the attendance sheet store in the create attendance screen
    const attendees = ref([])

    function clearAndAdd() {
      showThanks.value = true
      attendees.value.push(input.value)
      console.log('attendees list ', attendees.value)
      setTimeout(() => {
        showThanks.value = false
      }, 1500)
      input.value = ''
    }

    const exitAttendanceMode = async () => {
      loading.value = true
      //this put doesnt really work
      try {
        const response = await axios.put(`/api/attendance/${attendanceID}`, {
          attendees: attendees.value
        })
        loading.value = false
        router.push('/confirmadmin')
        console.log('made it to the exit screen')
        return response.data
      } catch (error) {
        router.push('/confirmadmin')
        console.error('Error updating:', error)
        loading.value = false
        throw error
      }
    }

    return {
      clearAndAdd,
      input,
      exitAttendanceMode,
      loading,
      showThanks,
      attendees,
      attendanceName
    }
  }
})
</script>
<template>
  <div>
    <v-col class="content-container">
      <v-row class="title-row">
        <span class="text-h4"> {{ attendanceName }} Attendance </span>
      </v-row>
      <v-row class="row-styles">
        <div class="long-input">
          <v-text-field label="ULID" v-model="input"> </v-text-field>
        </div>
        <div>
          <v-btn
            outlined
            class="submit-btn btn"
            rounded="xl"
            :loading="loading"
            @click="clearAndAdd()"
            >I'm Here!</v-btn
          >
        </div>
      </v-row>
      <v-row class="row-styles">
        <div class="thanks-message" :class="{ 'show-thanks': showThanks }">Thanks!</div>
      </v-row>
      <v-row class="bottom-row">
        <div class="exit-btn">
          <v-btn variant="plain" density="compact" size="x-small" @click="exitAttendanceMode()">
            exit attendance mode</v-btn
          >
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<style scoped>
.content-container {
  padding-top: 40vh;
  height: 100%;
}
.name-input {
  padding: 1vh;
  width: 40vh;
}
.long-input {
  padding: 1vh;
  width: 80vh;
}
.btn-group-container {
  justify-content: center;
}
.btn {
  min-width: 10vh;
  margin: 5vh;
}

.title-row {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: -30vh;
  margin-bottom: 20vh;
}
.row-styles {
  justify-content: center;
  align-items: center;
}
.back-btn {
  margin-top: 0.3vh;
  padding-right: 2vh;
}
.submit-btn {
  background-color: #ead2ac;
}
.exit-btn {
  align-content: center;
}
.bottom-row {
  justify-content: center;
  padding-top: 30vh;
}

.thanks-message {
  /*might change this to not animate so much*/
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: all 0.5s ease;
  color: black;
  font-size: 1em;
  pointer-events: none;
}

.show-thanks {
  bottom: 45vh;
  opacity: 1;
}
</style>
