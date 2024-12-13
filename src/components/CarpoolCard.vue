<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CarpoolCard',
  onSetup() {
    //props should be passed for the individual carpool information from the carpool store
  }
})
</script>
<template>
  <v-card class="card-styles">
    <v-card-title> Driver: Angela Leone </v-card-title>
    <v-card-subtitle class="subtitle">
      <v-row>
        <span>phone: (555)555-5555</span>
      </v-row>
      <v-row>
        <span>email: ajleon5@ilstu.edu</span>
      </v-row>
      <v-divider class="divider"></v-divider>
    </v-card-subtitle>
    <v-card-body>
      <div class="body">
        <v-radio-group>
          <v-radio label="Seat 1" value="one" class="radio-right"></v-radio>
          <v-radio label="Seat 2" value="two" class="radio-right"></v-radio>
          <v-radio label="Seat 3" value="three" class="radio-right"></v-radio>
        </v-radio-group>
      </div>
    </v-card-body>
    <v-card-actions>
      <v-btn>submit</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.event-subtitle {
  padding-top: 1vh;
  padding-left: 8vh;
}

.card-div {
  width: 30vh;
  height: auto;
  margin: 1vh;
  margin-bottom: 2vh;
}
.subtitle {
  height: 10vh;
  padding-top: 2vh;
  margin-left: 1vh;
}
.body {
  height: auto;
  margin-bottom: 1vh;
  margin-left: 3vh;
  margin-right: 3vh;
}
.divider {
  margin-top: 2.5vh;
}
.seat-styles {
  margin-bottom: 1.5vh;
}
.radio-right {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
}
.card-styles {
  border-radius: 10px;
  border-width: 2px;
  border-color: #c5d1d8;
}
</style>
