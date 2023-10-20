<template>
  <section id="youtubeSection" :class="attr">
    <div class="youtube__inner container">
      <div class="youtube__text">
        <h3>글쓴이 추천 유튜브 소개</h3>
        <p>
          시대별 그림 설명을 들을수 있습니다. <br />
          시대적 풍경을 대략적으로 알수있습니다.
        </p>
        <a href="/" class="button-red"> 자세히 보기 </a>
      </div>
      <div class="youtube__item">
        <div>
          <img src="@/assets/images/youtube/youtube01.png" alt="유튜브" />
        </div>
        <div>
          <img src="@/assets/images/youtube/youtube02.png" alt="유튜브" />
        </div>
        <div>
          <img src="@/assets/images/youtube/youtube03.png" alt="유튜브" />
        </div>
        <div>
          <img src="@/assets/images/youtube/youtube04.png" alt="유튜브" />
        </div>
        <div>
          <img src="@/assets/images/youtube/youtube01.png" alt="유튜브" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  attr:String
})
</script>
<style lang="scss">
@import "@/assets/scss/setting/mixins";
//youtube__wrap
.youtube__wrap {
  overflow: hidden;
}
.youtube__inner {
  height: 600px;
  .youtube__text {
    h3 {
      font-size: 50px;
      margin-bottom: 40px;
    }
    p {
      font-size: 22px;
      font-weight: 300;
      margin-bottom: 60px;
    }
    a {
      @include border(50px);
    }
  }

  .youtube__item {
    @include flex-between;
    position: absolute;
    margin-top: 70px;

    > div {
      margin-right: 10px;
      width: 400px;
      @include border(20px);
    }
  }
}
</style>
