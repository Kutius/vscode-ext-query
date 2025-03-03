<script setup lang="ts">
import { appName } from '~/constants'

import './styles/global.css'

useHead({
  title: appName,
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <PanelDark />
</template>
