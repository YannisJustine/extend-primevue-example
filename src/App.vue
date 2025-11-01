<script setup lang="ts">
import DoubleButton from './components/doublebutton/DoubleButton.vue';
</script>

<template>
  <div>
    <DoubleButton :firstButton="{ label: 'First' }" :secondButton="{ label: 'Second' }"
      @first-click="() => console.log('First button clicked!')"
      @second-click="() => console.log('Second button clicked!')" />
  </div>
</template>

<style scoped></style>
