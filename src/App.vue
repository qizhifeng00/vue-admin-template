<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <DialogContent />
        <n-notification-provider>
          <n-message-provider>
            <MessageContent />
            <router-view />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </NConfigProvider>
</template>
<script setup lang="ts">
import { darkTheme } from "naive-ui";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
</script>
