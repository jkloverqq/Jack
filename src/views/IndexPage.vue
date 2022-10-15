<template>
  <el-input   @focus="focus" @blur="blur" />
</template>

<script>
export default {
    computed: {
   isSearch() {
      return this.isFocus;
    }
  }

}
</script>

<style>

</style>