<template>
  <v-card class="member-card">
    <v-card-title>
      <v-row class="title-row">
        <div>{{ account.first_name }} {{ account.last_name }}</div>
        <v-spacer></v-spacer>
        <v-icon size="x-small" @click="editAccount" class="edit-icon">mdi-pencil</v-icon>
        <v-icon size="x-small" @click="deleteAccount" class="delete-icon">mdi-delete</v-icon>
      </v-row>
    </v-card-title>
    <v-card-body>
      <v-col>
        <div>Phone: {{ account.phone }}</div>
        <div>{{ account.ilstu_email }}</div>
      </v-col>
    </v-card-body>
  </v-card>
</template>

<script setup lang="ts">
import type { Account } from '@/stores/accountStore'

const props = defineProps<{ account: Account }>()
const account = props.account

const editAccount = () => {
  console.log('Edit account', account)
}

const deleteAccount = () => {
  console.log('Delete account', account)
}
</script>

<style scoped>
.member-card {
  margin: 1vh;
  width: 90%;
  height: 13vh;
}
.edit-icon {
  margin-left: 8px;
  color: #555;
  transition: color 0.2s;
}
.delete-icon {
  margin-left: 8px;
  margin-right: -2.5vh;
  color: #555;
  transition: color 0.2s;
}
.edit-icon:hover,
.delete-icon:hover {
  color: #1976d2;
}
.title-row {
  padding: 0.5vh;
}
</style>
