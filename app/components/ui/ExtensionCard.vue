<script setup lang="ts">
interface Extension {
  publisher: {
    publisherName: string
    displayName: string
    flags: string
  }
  extensionName: string
  displayName: string
  shortDescription: string
  versions: Array<{
    version: string
    assetUri: string
    files: Array<{
      assetType: string
      source: string
    }>
  }>
}

const props = defineProps<{
  extension: Extension
}>()

// 获取图标URL
const iconUrl = computed(() => {
  const iconFile = props.extension.versions[0]?.files.find(
    file => file.assetType === 'Microsoft.VisualStudio.Services.Icons.Default',
  )
  return iconFile?.source || ''
})

// 获取VSIX下载链接
const vsixUrl = computed(() => {
  const vsixFile = props.extension.versions[0]?.files.find(
    file => file.assetType === 'Microsoft.VisualStudio.Services.VSIXPackage',
  )
  return vsixFile?.source || ''
})

// 获取最新版本
const version = computed(() => props.extension.versions[0]?.version || '')

// 下载VSIX文件
function downloadVsix() {
  if (vsixUrl.value) {
    window.open(vsixUrl.value, '_blank')
  }
}
</script>

<template>
  <div
    border="~ base rounded-lg"
    flex="~ col"
    p-4 transition-all bg-glass
    hover="shadow-lg transform bg-active"
    class="group"
  >
    <div flex="~ col 1">
      <!-- 头部：图标和名称 -->
      <div flex="~ gap-3" items-start>
        <img
          :src="iconUrl"
          alt="Extension icon"
          border="~ base"
          h-12 w-12 rounded-md bg-secondary
        >
        <div flex="~ col" flex-1>
          <div line-clamp-1 text-lg font-medium color-base>
            {{ extension.displayName }}
          </div>
          <div flex="~ gap-1" items-center text-sm op60>
            <span line-clamp-1>{{ extension.publisher.displayName }}</span>
            <div
              v-if="extension.publisher.flags.includes('verified')"
              i-carbon-checkmark-filled text-xs text-primary-400
            />
          </div>
        </div>
      </div>

      <!-- 描述 -->
      <div line-clamp-2 mt-3 text-sm op75>
        {{ extension.shortDescription }}
      </div>
    </div>

    <!-- 底部：版本和下载按钮 -->
    <div mt-4 flex items-center justify-between>
      <div text-xs op60>
        v{{ version }}
      </div>
      <button
        rounded-md bg-primary px-3 py-1.5 text-sm text-white font-medium transition-colors
        hover="bg-primary-600"
        @click="downloadVsix"
      >
        Download
      </button>
    </div>
  </div>
</template>
