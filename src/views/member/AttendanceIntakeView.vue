<script>
import { defineComponent, onMounted, ref } from 'vue'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'
import { useAttendanceStore } from '@/stores/attendanceStore'

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

    const loading = ref(false)
    const input = ref('')
    const attendanceStore = useAttendanceStore()
    const attendanceID = attendanceStore.getAttendanceID
    //this only works if we update the selected attendence sheet in the attendance sheet store in the create attendance screen

    const clearAndAdd = async () => {
      loading.value = true
      try {
        const response = await axios.put(`/api/attendance/${attendanceID}`, {
          accountIDs: accountIDs.value
        })
        input.value = ''
        loading.value = false
        return response.data
      } catch (error) {
        console.error('Error updating:', error)
        input.value = ''
        loading.value = false
        throw error
      }
    }

    function exitAttendanceMode() {
      router.push('/confirmadmin')
      console.log('made it to the exit screen')
    }

    return {
      clearAndAdd,
      input,
      exitAttendanceMode,
      loading
    }
  }
})
</script>
<template>
  <div>
    <v-col class="content-container">
      <v-row class="row-styles">
        <div class="long-input">
          <v-text-field label="ULID" v-model="input"> </v-text-field>
        </div>
        <div>
          <v-btn outlined class="submit-btn btn" :loading="loading" @click="clearAndAdd()"
            >I'm Here!</v-btn
          >
        </div>
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
  padding-top: 5vh;
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
</style>
