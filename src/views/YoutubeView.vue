<template>
  <div>
    <ContTitle title="youtube" />
<!--    <YoutubeSlider :youtubes="youtubes" />-->
    <YoutubeSearch />
    <YoutubeTag @tag="handleChannelClick" />
    <YoutubeCont :youtubes="youtubes" />
  </div>
</template>

<script>
import ContTitle from "@/components/layout/ContTitle.vue";
import YoutubeSlider from "@/components/youtube/YoutubeSlider.vue";
import YoutubeSearch from "@/components/youtube/YoutubeSearch.vue";
import YoutubeTag from "@/components/youtube/YoutubeTag.vue";
import YoutubeCont from "@/components/youtube/YoutubeCont.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: {
    ContTitle,
    YoutubeSlider,
    YoutubeSearch,
    YoutubeTag,
    YoutubeCont,
  },

  setup() {
    function handleChannelClick(channel) {
        TopYoutube(channel);
    }
    const youtubes = ref([]);

    const TopYoutube = async (channel) => {
      let fetchURl;
      if(channel) {
        fetchURl= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${channel}&type=video&key=AIzaSyBYGD5tKWbM__Pz15UzP1uWIOwde8gTV_M`;
      } else { fetchURl =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=조코딩&type=video&key=AIzaSyBYGD5tKWbM__Pz15UzP1uWIOwde8gTV_M`}

      await fetch(fetchURl)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            youtubes.value = result.items;
          })
          .catch((error) => console.log("error", error));
    };
    TopYoutube();
    return {
      youtubes,
      TopYoutube,
      handleChannelClick
    };
  },
};
</script>
