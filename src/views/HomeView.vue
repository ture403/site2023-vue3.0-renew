<script setup>
  import IntroSection from "@/components/section/IntroSection.vue";
  import SliderSection from "@/components/section/SliderSection.vue";
  import PortSection from "@/components/section/PortSection.vue";
  import UnspalshSection from "@/components/section/UnspalshSection.vue";
  import YoutubeSection from "@/components/section/YoutubeSection.vue";
  import MovieSection from "@/components/section/MovieSection.vue";

</script>

<template>
  <main>
    <SliderSection attr="slider__wrap nexon" />
    <IntroSection attr="intro__wrap section nexon" />
    <PortSection attr="port__wrap section center bg-blue nexon" />
    <UnspalshSection attr="youtube__wrap section nexon" />
    <YoutubeSection attr="unsplash__wrap nexon" />
    <MovieSection attr="movie__wrap nexon" />
  </main>
</template>
