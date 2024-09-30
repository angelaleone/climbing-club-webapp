<script></script>
<template>
  <div class="page-title-container">
    <v-row>
      <!-- I can't get icons to work rn -->
      <!-- <div>
        <v-icon icon="mdi-arrow">mdi-arrow</v-icon>
      </div> -->
      <span class="page-title">Roster</span>
    </v-row>
  </div>
  <div class="content-container">
    <v-col>
      <v-row>
        <!-- member card (I still can't get icons to work)  -->
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
.page-title {
  font-size: xx-large;
}
.page-title-container {
  padding-top: 5vh;
}
</style>
