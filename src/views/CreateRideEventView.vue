<script></script>
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
</style>
