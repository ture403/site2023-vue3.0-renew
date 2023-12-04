<template>
  <div className="tag container">
    <ul>
      <li v-for="(channel, index) in channels" :key="index">
        <a href="/" @click.prevent="sendSearch(channel)"> {{channel}} </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import {ref} from "vue";

  const channels = ref(["apple","water","sky","red","blue"])

  const emit = defineEmits();

  function sendSearch(channel) {
    emit('response',[channel])
  }
</script>
<style></style>