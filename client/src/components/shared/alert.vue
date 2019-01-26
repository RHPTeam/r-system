/* CONFIG ALERT FILE VUE */
<template>
  <div class="alert mt_3" :class="type" v-if="message != ''">{{ message }}</div>
</template>

<script>
export default {
  props: ["message", "type"]
};
</script>

<style scoped>
</style>
