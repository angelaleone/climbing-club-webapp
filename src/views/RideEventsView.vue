<script lang="ts"></script>
<template>
  <div>
    <v-row class="title-row">
      <h1>Ride Events</h1>
      <v-spacer></v-spacer>
      <v-btn variant="outlined" prepend-icon="mdi-plus" @click="$router.push('/createrideevent')"
        >Create</v-btn
      >
    </v-row>
  </div>
</template>

<style scoped>
.title-row {
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 5vh;
  padding-left: 15vh;
  padding-right: 15vh;
}
</style>
