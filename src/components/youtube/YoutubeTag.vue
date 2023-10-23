<template>
  <div className="youtube__tag container">
    <ul>
      <li v-for="(channel, index) in channels" key="index">
        <a href="/" @click.prevent="sendChannelName(channel)">{{channel}}</a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.youtube__tag {
  ul {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 50px;
    li {
      a {
        border: 1px solid #e8ecf2;
        padding: 10px 20px;
        margin: 0 10px;
        color: #f7100d;
      }
    }
  }
}
</style>
<script setup>
import {ref, defineEmits } from "vue";

const channels = ref(["코딩 애플","조코딩","노마드 코딩","코딩알려주는 누나","드림코딩"]);

const emit = defineEmits(['channel-clicked']);

function sendChannelName(channel){
  emit('tag', channel);
}
</script>
