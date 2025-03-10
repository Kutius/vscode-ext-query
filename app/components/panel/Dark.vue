<script setup lang="ts">
import { toggleDark } from '~/composables/dark'
</script>

<template>
  <div
    flex="~ items-center"
    fixed right-4 top-4 z-panel-nav border border-base rounded-full shadow bg-glass
  >
    <a
      icon-btn h-10 w-10
      href="https://github.com/kutius" target="_blank"
    >
      <div i-ri-github-fill text-xl />
    </a>
    <button
      icon-btn h-10 w-10
      title="Toggle Dark Mode"
      @click="toggleDark()"
    >
      <div i-ph-sun-duotone dark:i-ph-moon-duotone text-xl />
    </button>
  </div>
</template>
