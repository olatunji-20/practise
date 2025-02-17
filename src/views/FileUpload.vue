<template>
  <div class="mb-64">
    <h1 class="text-center text-6xl font-semibold py-8">file uploader</h1>
    <UploadZone
      class="drop-area"
      @files-dropped="addFiles"
      #default="{ dropZoneActive }"
    >
      <label for="file-input">
        <span v-if="dropZoneActive">
          <span>Drop Them Here</span>
          <span class="smaller">to add them</span>
        </span>
        <span v-else>
          <span>Drag and Drop Your Files Here</span>
          <span class="smaller">
            or <strong><em>click here</em></strong> to select files
          </span>
        </span>
        <input
          type="file"
          accept="image/*"
          id="file-input"
          multiple
          @change="onInputChange"
          class="hidden"
        />
      </label>
      <ul v-show="files.length" class="absolute flex">
        <FilePreview
          v-for="file of files"
          :key="file.id"
          :file="file"
          tag="li"
          @remove="removeFile"
          class="flex-1"
        />
      </ul>
    </UploadZone>
    <button @click.prevent="uploadFiles(files)" class="upload-button">
      Upload
    </button>
  </div>
</template>

<script setup>
import useFile from "@/composables/useFile";
import UploadZone from "@/components/UploadZone.vue";
import FilePreview from "@/components/FilePreview.vue";
import useUploader from "@/composables/useUploader";

const { files, addFiles, removeFile } = useFile();
const { uploadFile, uploadFiles } = useUploader("URL");

const onInputChange = (e) => {
  addFiles(e.target.files);
  e.target.value = null;
};
</script>

<style></style>
