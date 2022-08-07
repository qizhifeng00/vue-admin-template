<template>
  <n-button @click="theme = darkTheme">深色</n-button>
  <n-button @click="theme = null">浅色</n-button>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { darkTheme } from "naive-ui";

export default defineComponent({
  setup() {
    return {
      darkTheme,
      theme: ref<any>(null),
    };
  },
});
</script>
