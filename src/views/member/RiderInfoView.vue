<script>
import { defineComponent, onMounted, ref } from 'vue'
import router from '@/router'
import { useUserStore } from '@/stores/userStore'
import { useAttendanceStore } from '@/stores/attendanceStore'

export default defineComponent({
  name: 'RiderInfoView',
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

    return {}
  }
})
</script>
<template>
  <div>
    <v-col class="content-container"> </v-col>
  </div>
</template>

<style scoped>
.content-container {
  padding-top: 40vh;
  height: 100%;
}
</style>
