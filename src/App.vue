<template>
  <div>

<Dashboard/>
<RouterView/>

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Dashboard from './components/Dashboard.vue';

</script>

<style lang="scss" scoped>

</style>