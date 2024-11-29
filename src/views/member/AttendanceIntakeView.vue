<script>
import { defineComponent, onMounted, ref } from 'vue'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'

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

    function exitAttendanceMode() {
      router.push('/confirmadmin')
      console.log('made it to the exit screen')
    }

    return {
      exitAttendanceMode
    }
  }
})
</script>
<template>
  <div>
    <v-col class="content-container">
      <v-row class="row-styles">
        <div class="long-input">
          <v-text-field label="ULID"> </v-text-field>
        </div>
        <div>
          <v-btn outlined class="submit-btn btn">I'm Here!</v-btn>
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
