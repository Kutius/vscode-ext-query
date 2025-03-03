<script setup lang="ts">
definePageMeta({
  layout: false,
})

const keyword = ref('')

const { data, execute, status } = useFetch('/api/ext', {
  query: { keyword, pageSize: 9 },
  immediate: false,
  watch: false,
})

const isLoading = computed(() => status.value === 'pending')
const extensions = computed(() => data.value?.data?.[0].extensions || [])
</script>

<template>
  <div flex="~ col" items-center p10>
    <div min-h-120 flex="~ col gap-2 items-center" flex-auto>
      <UiTitle />

      <label
        border="~ base rounded-full" relative p1 shadow
        flex="~ items-center" transition-all bg-glass
        focus-within="shadow-xl ring-4 ring-primary:10"
        :class="{ op75: isLoading }"
      >
        <input
          v-model.trim="keyword"
          type="text"
          placeholder="Enter extension name"
          class="w-120 bg-transparent px-4 py-3 pr-12 outline-none"
          :disabled="isLoading"
          @keyup.enter="execute()"
        >
        <button
          absolute right-4 size-10 rounded-full hover:bg-active text-primary
          transition-colors hover:text-primary-400
          flex="~ items-center justify-center"
          :disabled="isLoading"
          @click="execute()"
        >
          <div v-if="isLoading" i-carbon-circle-dash text-xl class="animate-spin" />
          <div v-else i-carbon-search text-xl />
        </button>
      </label>

      <!-- 搜索结果展示区域 -->
      <div v-if="extensions.length" mt-8 max-w-4xl w-full>
        <div mb-4 text-xl font-medium>
          Query Results
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
    </div>
  </div>
</template>
