<template>
  <div className="movie__search container">
    <input type="text" placeholder="영화 검색하기" v-model="text" @keyup.enter="sendSearch" />
    <button @click="sendSearch" >검색</button>
  </div>
</template>

<script setup>
  import {ref} from "vue";

  const emit = defineEmits();
  let text = ref("");

  function sendSearch() {
    if(text.value){
      emit('response',[text.value])
    }
  }
</script>

<style scoped>

</style>