<script setup lang="ts">
</script>

<template>
  <h1 p5 flex="~ col gap-3 items-center">
    <div>
      <UiLogo h-20 />
    </div>
    <div flex="~ gap-2" mt-5 text-4xl leading-none>
      <span text-primary font-700 transition-all duration-300>VSCode</span>
      <span text-primary-300 font-700 transition-all duration-300>Extension</span>
      <span op75>Query</span>
      <span flex="~ col items-center" mr--14 text-sm font-mono>
        <div badge-color-lime rounded px2 py0.5 text-xs>.vsix</div>
      </span>
    </div>
    <div text-center op50>
      Query your VSCode extension and download .vsix in seconds.
    </div>
  </h1>
</template>
