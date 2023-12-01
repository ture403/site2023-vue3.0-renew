<template>
  <div className="unsplash__cont container">
    <ul>
      <li>
        <a href="#">
          <img />
          <span>{{}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
  const props = defineProps(['unsplash']);
  console.log(props.unsplash)
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