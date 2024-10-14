<script></script>
<template>
  <div>
    <div>
      <v-row class="title-row">
        <h2>Login to Account</h2>
      </v-row>
    </div>

    <div class="content-container">
      <v-col>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field label="ULID"> </v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <div class="long-input">
            <v-text-field label="Password"> </v-text-field>
          </div>
        </v-row>
        <v-row class="row-styles">
          <span class="register-text"
            >Don't have an account?
            <v-btn variant="text" size="small" @click="$router.push('/register')"
              >register</v-btn
            ></span
          >
        </v-row>
        <v-row class="btn-group-container">
          <div>
            <v-btn class="btn" @click="$router.push('/home')"> login </v-btn>
          </div>
        </v-row>
      </v-col>
    </div>
  </div>
</template>

<style scoped>
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

.title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 15vh;
  padding-bottom: 2.5vh;
}
.row-styles {
  justify-content: center;
  align-items: center;
}
.register-text {
  margin-top: -2vh;
}
</style>
