<script setup lang="ts">
import { appName } from '~/constants'

import './styles/global.css'

useHead({
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <PanelDark />
</template>
