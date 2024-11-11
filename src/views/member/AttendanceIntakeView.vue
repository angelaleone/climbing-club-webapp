<script></script>
<template>
  <div>
    <div class="content-container">
      <v-row class="row-styles">
        <div class="long-input">
          <v-text-field label="ULID"> </v-text-field>
        </div>
        <div>
          <v-btn outlined class="submit-btn btn">I'm Here!</v-btn>
        </div>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.content-container {
  padding-top: 40vh;
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
</style>
