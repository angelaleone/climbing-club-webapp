<script lang="ts"></script>
<template>
  <div class="center">
    <v-row class="title-row">
      <h1>Roster</h1>
      <v-spacer></v-spacer>
      <v-btn
        variant="outlined"
        prepend-icon="mdi-plus"
        style="margin-right: 8px"
        @click="$router.push('/register')"
        >register account</v-btn
      >
      <v-btn variant="outlined" prepend-icon="mdi-download">download csv</v-btn>
    </v-row>
    <div class="content-container">
      <v-col>
        <v-row class="center">
          <!-- member card  -->
          <v-card class="member-card">
            <v-card-title>Angela Leone</v-card-title>
            <v-card-body>
              <v-col>
                <div>Phone: (999)999-9999</div>
                <div>ajleon5@ilstu.edu</div>
              </v-col>
            </v-card-body>
          </v-card>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<style>
.content-container {
  padding-top: 10vh;
}
.member-card {
  width: 90vh;
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
  padding-left: 15vh;
  padding-right: 15vh;
}
.page-title-container {
  padding-top: 5vh;
}
.center {
  justify-content: center;
  align-items: center;
}
</style>
