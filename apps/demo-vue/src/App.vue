<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { Bar } from 'ui-vue';
</script>

<template>
  <div>
    <Bar>
      <template #icon>测试测试</template>
    </Bar>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
