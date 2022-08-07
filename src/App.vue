<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { darkTheme } from "naive-ui";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
export default defineComponent({
  components: {
    NConfigProvider,
  },
  setup() {
    return {
      darkTheme,
      zhCN,
      dateZhCN,
    };
  },
});
</script>
