<template>

</template>
<script>
  export default {
    props: ['isShowForm'],

    methods: {
      close () {
        this.$emit('closeForm')
      }
    }
  };
</script>
<style lang="scss" scoped>

</style>
