<template>
  <div>
    <ContTitle title="unsplash" />
    <UnsplashSearch @click="handleChannel" />
    <UnsplashTag @click="handleChannel"/>
    <UnsplashCont :unsplash="unsplash" />
  </div>
</template>

<script setup>
import ContTitle from "@/components/layout/ContTitle.vue";
import UnsplashCont from "@/components/unsplash/UnsplashCont.vue";
import UnsplashSearch from "@/components/unsplash/UnsplashSearch.vue";
import UnsplashTag from "@/components/unsplash/UnsplashTag.vue";

import { ref } from "vue";

const unsplash = ref([]);

const handleChannel = async (query) => {
    await search(query)
}

const search = async (query) => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const url = query ? `https://api.unsplash.com/search/photos?client_id=3fLduMDzaR7Vq59dINrEif7nOY0l0PjeyPwMkrn3Roc&per_page=30&order_by=popular&query=${query}`
       : `https://api.unsplash.com/search/photos?client_id=3fLduMDzaR7Vq59dINrEif7nOY0l0PjeyPwMkrn3Roc&per_page=30&order_by=popular&query=apple`

  await fetch(
      url,requestOptions
  )
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        unsplash.value = result
      })
      .catch((error) => console.log("error", error));
};
</script>
