<script>
import { defineComponent, onMounted, ref } from 'vue'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'
import { useAttendanceStore } from '@/stores/attendanceStore'

export default defineComponent({
  name: 'RideSheetInitialView',
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

    function navigateToDriverInfo() {
      //router push
      router.push('/driverinfo')
      //set store vairables?
    }

    function navigateToRiderInfo() {
      //router push
      router.push('/riderinfo')
      //set store variables
    }

    return {
      navigateToDriverInfo,
      navigateToRiderInfo
    }
  }
})
</script>
<template>
  <div>
    <v-col class="content-container">
      <v-row class="center-row">
        <div>
          <v-card class="card" @click="navigateToDriverInfo()">
            <v-col class="card-content">
              <div class="card-title">
                <span class="text-h5">I am a driver</span>
              </div>
              <div class="icon-container">
                <v-icon size="x-large">mdi-car</v-icon>
              </div>
            </v-col>
          </v-card>
        </div>
        <div>
          <v-card class="card" @click="navigateToRiderInfo()">
            <v-col class="card-content">
              <div class="card-title">
                <span class="text-h5">I need a ride</span>
              </div>
              <div class="icon-container">
                <v-icon size="x-large">mdi-account</v-icon>
              </div>
            </v-col>
          </v-card>
        </div>
      </v-row>
      <v-row>
        <v-col class="bottom-row">
          <div class="icon-container">
            <span>OR</span>
          </div>
          <div class="icon-container"><v-btn variant="plain">see ride sheet</v-btn></div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<style scoped>
.content-container {
  padding-top: 40vh;
  height: 100%;
}

.center-row {
  justify-content: center;
  margin-top: -10vh;
}

.card {
  width: 35vh;
  height: 20vh;
  border-radius: 15px;
  margin-right: 5vh;
  cursor: pointer;
  margin-top: 2vh;
}

.card-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.card-title {
  margin-bottom: 2vh;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom-row {
  justify-content: center;
  padding-top: 20vh;
}
</style>
