<script></script>
<template>
  <div class="page-title-container">
    <v-row>
      <!-- I can't get icons to work rn -->
      <!-- <div>
        <v-icon icon="mdi-arrow">mdi-arrow</v-icon>
      </div> -->
      <span class="page-title">Register Account</span>
    </v-row>
  </div>

  <div class="content-container">
    <v-col>
      <v-row>
        <div class="name-input">
          <v-text-field label="First Name"> </v-text-field>
        </div>
        <div class="name-input">
          <v-text-field label="Last Name"> </v-text-field>
        </div>
      </v-row>
      <v-row>
        <div class="long-input">
          <v-text-field label="Phone Number"> </v-text-field>
        </div>
      </v-row>
      <v-row>
        <div class="long-input">
          <v-text-field label="ilstu email (@ilstu.edu)"> </v-text-field>
        </div>
      </v-row>
      <v-row>
        <div class="long-input">
          <v-text-field label="Password (optional)"> </v-text-field>
        </div>
      </v-row>
      <v-row class="btn-group-container">
        <div>
          <v-btn class="btn"> cancel </v-btn>
        </div>
        <div>
          <v-btn class="btn"> submit </v-btn>
        </div>
      </v-row>
    </v-col>
  </div>
</template>

<style>
.content-container {
  padding-top: 10vh;
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
.page-title {
  font-size: x-large;
}
.page-title-container {
  padding-top: 5vh;
  margin-left: -25vh;
}
</style>
