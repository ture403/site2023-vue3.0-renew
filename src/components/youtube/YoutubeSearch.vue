<template>
  <div className="youtube__search container">
    <input v-model="text" type="text" placeholder="유튜브 검색하기" @keyup.enter="search" />
    <button @click.prevent="search">검색</button>
  </div>
</template>
<script setup>
  import {ref, defineEmits} from "vue";

  let text = ref("");

  const props = defineProps(["search"]); // 이벤트명 미리 정의
  const emits = defineEmits();

  const search = () => {
    emits('search',text.value)
  }
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
