<template>
  <div class="body">
    <div class="main-wrapper">
      <!-- Header -->
      <App-header />
      <!-- Sidebar -->
      <app-sidebar />
      <!-- Page Content -->
      <slot></slot>
      <!-- Footer -->
      <App-footer />
    </div>
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppSidebar from '~/components/AppSidebar.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>
