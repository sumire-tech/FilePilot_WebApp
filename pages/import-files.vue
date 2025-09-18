<template>
  <div>
    <h1>Import Files</h1>
    <input type="file" multiple @change="handleFiles" />
    <div v-if="localFiles.length">
      <h2>Selected Files</h2>
      <ul>
        <li v-for="(file, index) in localFiles" :key="index">
          {{ file.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFileStore } from "~/stores/fileStore";

const fileStore = useFileStore();
const localFiles = ref<File[]>([]);

function handleFiles(event: Event) {
  const target = event.target as HTMLInputElement;
  if (!target.files) return;

  const selected = Array.from(target.files);
  localFiles.value = selected;
  fileStore.addFiles(selected); // グローバルストアに追加
}
</script>
