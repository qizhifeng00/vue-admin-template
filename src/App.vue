<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <router-view />
  </NConfigProvider>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'
import { darkTheme } from 'naive-ui'
import { NConfigProvider } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'
</script>
