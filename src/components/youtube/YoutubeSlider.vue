<!--<template>-->
<!--  <div className="movie__slider">-->
<!--    <Swiper-->
<!--        class="Swiper"-->
<!--        :modules="modules"-->
<!--        effect="coverflow"-->
<!--        :slides-per-view="5"-->
<!--        :space-between="50"-->
<!--        navigation-->
<!--        :pagination="{ clickable: true }"-->
<!--        :autoplay="{-->
<!--        delay: 5000,-->
<!--        disableOnInteraction: false,-->
<!--      }"-->
<!--        :loop="true"-->
<!--        :coverflowEffect="{-->
<!--        rotate: 50,-->
<!--        stretch: 0,-->
<!--        depth: 100,-->
<!--        modifier: 1,-->
<!--        slideShadows: true,-->
<!--      }"-->
<!--    >-->
<!--      <SwiperSlide v-for="(youtube, index) in youtubes" :key="index">-->
<!--        <a-->
<!--            :href="`https://www.youtube.com/watch?v=${youtube.id.videoId}`"-->
<!--            target="_blank"-->
<!--            rel="noreferrer"-->
<!--        >-->
<!--          <img-->
<!--              :src="youtube.snippet.thumbnails.medium.url"-->
<!--              :alt="youtube.snippet.title"-->
<!--          />-->
<!--        </a>-->
<!--      </SwiperSlide>-->
<!--      <div class="swiper-pagination"></div>-->
<!--      <div class="swiper-button-next"></div>-->
<!--      <div class="swiper-button-prev"></div>-->
<!--    </Swiper>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--import {-->
<!--  Navigation,-->
<!--  Pagination,-->
<!--  Scrollbar,-->
<!--  A11y,-->
<!--  Autoplay,-->
<!--  EffectCoverflow,-->
<!--} from "swiper";-->
<!--import { Swiper, SwiperSlide } from "swiper/vue";-->
<!--// Import Swiper styles-->
<!--import "swiper/css";-->
<!--import "swiper/css/effect-coverflow";-->
<!--import "swiper/css/navigation";-->
<!--import "swiper/css/pagination";-->
<!--import "swiper/css/scrollbar";-->
<!--export default {-->
<!--  props: {-->
<!--    youtubes: {-->
<!--      type: Array,-->
<!--      require: true,-->
<!--    },-->
<!--  },-->
<!--  components: {-->
<!--    Swiper,-->
<!--    SwiperSlide,-->
<!--  },-->
<!--  setup() {-->
<!--    const onSwiper = (swiper) => {-->
<!--      console.log(swiper);-->
<!--    };-->
<!--    const onSlideChange = () => {-->
<!--      console.log('slide change');-->
<!--    };-->
<!--    return {-->
<!--      modules: [-->
<!--        Navigation,-->
<!--        Pagination,-->
<!--        Scrollbar,-->
<!--        A11y,-->
<!--        Autoplay,-->
<!--        EffectCoverflow,-->
<!--      ],-->
<!--    };-->
<!--  },-->
<!--};-->
<!--</script>-->
<!--<style lang="scss">-->
<!--.youtube__slider {-->
<!--  width: 100%;-->
<!--  height: 300px;-->
<!--  margin-bottom: 100px;-->
<!--  .Swiper {-->
<!--    width: 100%;-->
<!--    height: 100%; /* 높이를 100%로 설정하여 화면에 맞게 조정합니다 */-->
<!--    padding: 20px 0 50px;-->
<!--    margin: auto;-->
<!--    .swiper-button-next,-->
<!--    .swiper-button-prev {-->
<!--      display: none;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
<template>
tet
</template>

<script>

</script>