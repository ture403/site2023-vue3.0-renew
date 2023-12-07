<template>
  <div class="movie__cont container">
    <ul>
      <li v-for="(movie, index) in movies" :key="index" >
        <a href="#">
          <img v-if="movie.poster_path !=null" :src="'https://image.tmdb.org/t/p/original/' + movie.poster_path" @click="moveTmdb(movie.id)" />
          <span class="gmarket" v-if="movie.poster_path !=null">{{movie.title}}</span>
          <em>{{movie.vote_average}}</em>
        </a>
      </li>
    </ul>
  </div>
</template>
<script setup>
import {ref, watch} from "vue";

const moviesProp = defineProps(['moveData']);

let movies = ref(moviesProp.moveData);

watch(() => moviesProp.moveData, (newVal) => {
  movies = ref([...newVal]);
  // console.log(movies)
}, { deep: true });

function moveTmdb(id){
  const tmdbUrl = `https://www.themoviedb.org/movie/${id}?language=ko`;
  window.open(tmdbUrl, '_blank');
}
</script>

<style lang="scss" scoped>
.remove{
  display: none;
}
.movie__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 100px;
    column-count: 3;
    li {
      width: 32.3333%;
      margin-bottom: 4%;
      a {
        position: relative;
        span {
          display: block;
          margin: 4px 0;
          white-space: nowrap;
          overflow: hidden;
          text-align: center;
          font-size: 1.3vw;
          text-overflow: ellipsis;
        }
      }

      em{
        position: absolute;
        right: 5px;
        top: 3px;
        background: #f01;
        width: 50px;
        height: 50px;
        display: block;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        color: #fff;
      }
    }
  }
}

</style>