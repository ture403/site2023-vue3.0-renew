<template>
  <div class="cont__title">
    <h2>{{ title }}</h2>
  </div>
</template>
<script setup>
defineProps({
  title: String
})
</script>
<style lang="scss" scoped>
.cont__title > h2 {
  text-align: center;
  font-size: 5vw;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5%;
}
</style>
