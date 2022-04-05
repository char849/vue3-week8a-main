<template>
  <RouterView />
</template>
<script>
import emitter from '@/methods/mitt'
export default {
  provide () {
    return {
      emitter
    }
  }
}
</script>
<style lang="scss">
// ./當前資料 assets
@import "./assets/all";
</style>
