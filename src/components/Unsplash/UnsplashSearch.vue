<template>
  <div className="unsplash__search container">
    <input type="text" placeholder="사진 검색하기" v-model="text" />
    <button @click="sendSearch" @keyup.enter="sendSearch">검색</button>
  </div>
</template>
<script setup>
  import {ref} from "vue";

  const emit = defineEmits();
  let text = ref("");

  function sendSearch() {
    emit('response',[text.value])
  }

</script>
<style>

</style>