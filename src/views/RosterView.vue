<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import type { Account } from '@/stores/accountStore'
import RosterCard from '@/components/RosterCard.vue'

export default defineComponent({
  name: 'Roster-View',
  components: {
    RosterCard
  },
  setup() {
    const accounts = ref<Account[]>([])

    const fetchAccounts = async () => {
      try {
        const response = await axios.get<Account[]>('http://localhost:3001/api/accounts')
        accounts.value = response.data
        console.log(accounts.value, 'response', response.data)
      } catch (error) {
        console.error('Error fetching accounts:')
      }
    }

    onMounted(fetchAccounts)

    return {
      accounts
    }
  }
})
</script>
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
        <v-row class="center"> </v-row>
        <li v-for="account in accounts" :key="account.accountID" class="listing-data">
          <roster-card :account="account"></roster-card>
        </li>
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
.listing-data {
  list-style-type: none;
  justify-content: center;
  align-items: center;
  padding: 1vh;
  padding-left: 20vh;
}
</style>
