<template>
  <Head>
    <title>{{ cookiecutter.project_name }}</title>
  </Head>
  <v-app>
    <v-layout>
      <v-app-bar density="compact" class="app-bar elevation-1">
        <v-app-bar-title
          class="text-white d-none d-md-flex"
          text="{{ cookiecutter.project_name }}"
        />
        <template v-slot:append>
          <v-toolbar-items> </v-toolbar-items>
          <v-btn
            icon="mdi-menu"
            class="d-flex d-sm-none"
            @click="() => (mobileDrawer = !mobileDrawer)"
          />
        </template>
      </v-app-bar>
      <slot />
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";

const mobileDrawer = ref(false);
</script>
