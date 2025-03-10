<script setup lang="ts">
const props = defineProps<{
  data: any
  isLoading: boolean
}>()

const extensions = computed(() => props.data?.data?.[0].extensions || [])
</script>

<template>
  <!-- 搜索结果展示区域 -->
  <div v-if="extensions.length" mt-8 max-w-4xl w-full>
    <div mb-4 flex>
      <span flex-1 text-xl font-medium>Query Results</span>
      <button icon-btn size-8 hover:color-active>
        <div i-ph-list-duotone />
      </button>
    </div>
    <div grid="~ cols-1 md:cols-2 lg:cols-3 gap-4">
      <UiExtensionCard
        v-for="extension in extensions"
        :key="extension.extensionId"
        :extension="extension"
      />
    </div>
  </div>

  <div v-else-if="data?.value && !isLoading" mt-8 op75>
    <div mb-4 text-xl font-medium>
      No results found
    </div>
    <div text-sm>
      Please try again with a different keyword.
    </div>
  </div>
</template>

<style scoped>
</style>
