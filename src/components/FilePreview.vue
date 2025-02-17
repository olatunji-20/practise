<template>
  <component :is="tag" class="file-preview">
    <button @click="$emit('remove', file)" class="close-icon border">X</button>
    <div class="border-2 border-red-400 p-2">
      <img :src="file.url" :alt="file.file.name" :title="file.file.name" />
    </div>
    <span
      class="status-indicator loading-indicator"
      v-show="file.status == 'loading'"
      >In Progress</span
    >
    <span
      class="status-indicator success-indicator"
      v-show="file.status == true"
      >Uploaded</span
    >
    <span
      class="status-indicator failure-indicator"
      v-show="file.status == false"
      >Error</span
    >
    <button @click.prevent="uploadFiles(files)" class="upload-button">
      Upload
    </button>
  </component>
</template>

<script setup>
defineEmits(["remove"]);
defineProps({
  file: { type: Object, required: true },
  tag: { type: String, default: "li" },
});
</script>
