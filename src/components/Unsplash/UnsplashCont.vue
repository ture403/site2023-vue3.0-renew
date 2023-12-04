<template>
  <div className="unsplash__cont container">
    <ul>
      <li v-for="(splash, index) in unsplashs" :key="index" >
        <a href="#">
          <img v-if="splash && splash.urls && splash.urls.regular" :src="splash.urls.regular" />
          <span>{{splash.description}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';

const props = defineProps(['unsplash']);

// Ref를 사용하여 상태 정의
let unsplashs = ref(props.unsplash.data);

watch(() => props.unsplash, (newVal) => {
  // unsplashs를 새로운 객체로 교체하여 Vue의 반응성 유지
  unsplashs = ref([...newVal.data]);
}, { deep: true });
</script>
<style lang="scss">
.unsplash__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;

    li {
      width: 24.3333%;
      margin-bottom: 4%;

      span {
        display: block;
        margin: 4px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>