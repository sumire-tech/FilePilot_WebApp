<template>
  <div>
    <h1>Home</h1>

    <div v-if="files.length">
      <h2>Imported Files</h2>
      <ul>
        <li v-for="(file, index) in files" :key="index" class="file-item">
          <p>{{ file.name }}</p>

          <!-- 画像プレビュー -->
          <img v-if="isImage(file)" :src="file.preview" alt="preview" />

          <!-- テキストプレビュー -->
          <pre v-if="isText(file)">{{ file.preview }}</pre>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No files imported yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFileStore } from "~/stores/fileStore";

const fileStore = useFileStore();
const files = fileStore.files;

// ファイルのプレビュー用 URL / 内容を生成
files.forEach((file) => {
  if (!("preview" in file)) {
    if (file.type.startsWith("image/")) {
      (file as any).preview = URL.createObjectURL(file);
    } else if (file.type.startsWith("text/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        (file as any).preview = e.target?.result;
      };
      reader.readAsText(file);
    } else {
      (file as any).preview = "Preview not available";
    }
  }
});

// 画像かどうか判定
const isImage = (file: File) => file.type.startsWith("image/");

// テキストかどうか判定
const isText = (file: File) => file.type.startsWith("text/");
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.file-item {
  margin-bottom: 20px;
}

img {
  max-width: 300px;
  max-height: 200px;
  display: block;
  margin-top: 5px;
}

pre {
  background-color: #f4f4f4;
  padding: 10px;
  max-width: 500px;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
