import { defineStore } from "pinia";
import { ref } from "vue";

export const useFileStore = defineStore("fileStore", () => {
  const files = ref<File[]>([]); // 選択したファイルを保持

  const addFiles = (newFiles: File[]) => {
    files.value.push(...newFiles);
  };

  return { files, addFiles };
});
