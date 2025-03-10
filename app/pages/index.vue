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

      <UiResultList :data :is-loading />
    </div>
  </div>
</template>
