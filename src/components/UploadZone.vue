<template>
  <div
    :data-active="active"
    @dragenter.prevent="setActive"
    @dragover.prevent="setActive"
    @dragleave.prevent="setInactive"
    @drop.prevent="onDrop"
    class="border-4 border-red-500 h-[350px] rounded-lg mx-32 p-4 flex justify-center items-center relative overflow-hidden"
  >
    <slot :dropZoneActive="active"></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const emit = defineEmits(["files-dropped"]);

let active = ref(false);
let inActiveTimeout = ref(null);

const setActive = () => {
  active.value = true;
  clearTimeout(inActiveTimeout);
};
const setInactive = () => {
  // wrap it in a `setTimeout`
  inActiveTimeout = setTimeout(() => {
    active.value = false;
  }, 50);
};

function onDrop(e) {
  setInactive();
  emit("files-dropped", [...e.dataTransfer.files]);
}

function preventDefaults(e) {
  e.preventDefault();
}

const events = ["dragenter", "dragover", "dragleave", "drop"];

onMounted(() => {
  events.forEach((eventName) => {
    document.body.addEventListener(eventName, preventDefaults);
  });
});

onUnmounted(() => {
  events.forEach((eventName) => {
    document.body.removeEventListener(eventName, preventDefaults);
  });
});
</script>

<style></style>
