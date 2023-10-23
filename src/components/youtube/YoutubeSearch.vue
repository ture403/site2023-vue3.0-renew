<template>
  <div className="youtube__search container">
    <input v-model="text" type="text" placeholder="유튜브 검색하기" />
    <button>검색</button>
  </div>
</template>
<script setup>
  import {ref} from "vue";

  const text = ref()
  console.log(text);
</script>
<style lang="scss" scoped>
@import "@/assets/scss/setting/mixins";
.youtube__search {
  margin-bottom: 50px;
  text-align: center;
  input {
    border: 1px solid #e8ecf2;
    font-size: 16px;
    padding: 10px 20px;
    @include border(50px);
    min-width: 300px;
    margin-right: 10px;
  }
  button {
    @include button(#f7100d, #fff);
    @include border(50px);
  }
}
</style>
