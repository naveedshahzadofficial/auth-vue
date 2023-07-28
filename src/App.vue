<script setup>
import { ref } from "vue";
import { useAuthStore } from "./stores/auth";
const authStore = useAuthStore();
const form = ref({ email: "", password: "" });
</script>

<template>
  <section>
    <h1>Hello World: {{ authStore.count }}</h1>
    <button @click.prevent="authStore.increment">+</button>&nbsp;
    <button @click.prevent="authStore.decrement">-</button>
    <div
      style="
        padding: 5px;
        background-color: rgb(239, 141, 141);
        color: rgb(83, 5, 5);
      "
      v-if="authStore.authErrorMsg"
    >
      {{ authStore.authErrorMsg }}
    </div>
    <form @submit.prevent="authStore.handleLogin(form)">
      <div>
        <label for="email">Email: </label>
        <input
          id="email"
          type="text"
          v-model="form.email"
        />
        <div
          style="color: red"
          v-if="authStore.authErrors.email"
        >
          {{ authStore.authErrors.email[0] }}
        </div>
      </div>
      <div>
        <label for="password">Password: </label>
        <input
          id="password"
          type="text"
          v-model="form.password"
        />
        <div
          style="color: red"
          v-if="authStore.authErrors.password"
        >
          {{ authStore.authErrors.password[0] }}
        </div>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </section>
</template>

<style scoped></style>
