<template>
  <div>
    <ContTitle title="Movie" />
    <MovieSearch @response="movieDatas" />
    <MovieTag  />
    <MovieCont :moveData="movies" />
  </div>
</template>

<script setup>
  import ContTitle from "@/components/layout/ContTitle.vue"
  import MovieCont from "@/components/Movie/MovieCont.vue";
  import MovieSearch from "@/components/Movie/MovieSearch.vue";
  import MovieTag from "@/components/Movie/MovieTag.vue";
  import {onMounted, ref} from "vue";

  const api_key = 'c563584131c37102f737050cd71e3fa6'

  let movies = ref([]);

  const movieDatas = async (query) => {
    const defaultUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=ko-KR&region=KR&sort_by=popularity.desc&page=1&append_to_response=videos`
    const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${api_key}&language=ko-KR&region=KR&sort_by=popularity.desc&page=1&append_to_response=videos`
    const finalUrl = query ? searchUrl : defaultUrl
     try {
       const response = await fetch(finalUrl)
       if (!response.ok) {
         throw new Error(`Error fetching data: ${response.status}`);
       }
       const data = await response.json();
       console.log(data)
       movies.value = data.results;
    } catch (error){
      console.log("error fetching data:", error)
    }
  }

  onMounted(()=>{
    movieDatas()
  })
</script>