<template>
  <div className="unsplash__cont container">
    <ul>
      <li v-for="(splash, index) in unsplashs" :key="index" >
        <a href="#">
          <img v-if="splash && splash.urls && splash.urls.regular" :src="splash.urls.regular" @click="openModal(splash)" />
          <span>{{splash.description}}</span>
        </a>
      </li>
    </ul>
  </div>

  <div v-if="isOpen" class="popOpen">
    <span @click="closeModal">X</span>
    <div class="wrap">
      <img :src="selected.urls.full" />
    </div>
  </div>
</template>
<script setup>
import {ref, watch} from 'vue';

const props = defineProps(['unsplash']);
const isOpen = ref(false);
const selected = ref([])

const openModal = (splash) => {
  isOpen.value = true
  selected.value = splash
}
const closeModal = () => {
  isOpen.value = false
}

let unsplashs = ref(props.unsplash.data);

watch(() => props.unsplash, (newVal) => {
  unsplashs = ref([...newVal.data]);
}, { deep: true });



</script>
<style lang="scss">
.remove{
  display: none;
}
.unsplash__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;
    column-count: 3;
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
.popOpen {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 500px;
  box-shadow: 5px 3px 3px #000;
  span{
    display: block;
    text-align: right;
    position: fixed;
    top: 0;
    right: 10px;
    z-index: 998;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
  }
  .wrap {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>