<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  type: string;
}>();
</script>

<template>
  <div class="blue-text inline-block fr-m-1w">
    <span v-if="type === 'HOUSE'" class="material-icons md-36">home</span>
    <span v-else-if="type === 'APARTMENT'" class="material-icons md-36">apartment</span>
    <span v-else class="material-icons md-36">domain</span>
  </div>
</template>
