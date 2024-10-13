<script></script>
<template>
  <div class="page-container">
    <div class="page-title-container">
      <v-row>
        <div class="back-btn">
          <v-btn icon="mdi-arrow-left" variant="text" @click="$router.go(-1)"></v-btn>
        </div>
        <span class="page-title">Register Account</span>
      </v-row>
    </div>

    <div class="content-container">
      <v-col>
        <v-row class="row-styles">
          <div class="name-input">
            <v-text-field label="First Name"> </v-text-field>
          </div>
          <div class="name-input">
            <v-text-field label="Last Name"> </v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field label="Phone Number"> </v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field label="ilstu email (@ilstu.edu)"> </v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
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
  padding-left: 15vh;
}
.row-styles {
  justify-content: center;
  align-items: center;
}
.back-btn {
  margin-top: -0.35vh;
  padding-right: 2vh;
}
</style>
