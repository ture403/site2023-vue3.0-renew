<template>
  <section id="unsplashSection" :class="attr">
    <div class="unsplash__inner container">
      <div class="unsplash__text">
        <h3>수묵화 이미지 다운로드</h3>
        <p>
          수묵화를 다운받을 수 있습니다. <br />
          png 파일로 다운받을수 있습니다.
        </p>
        <a href="/" class="button-blue"> 자세히 보기 </a>
      </div>
      <div class="unsplash__item">
        <div>
          <img src="@/assets/images/unsplash/image01.png" alt="사진" />
        </div>
        <div>
          <img src="@/assets/images/unsplash/image02.png" alt="사진" />
        </div>
        <div>
          <img src="@/assets/images/unsplash/image03.png" alt="사진" />
        </div>
        <div>
          <img src="@/assets/images/unsplash/image04.png" alt="사진" />
        </div>
        <div>
          <img src="@/assets/images/unsplash/image05.png" alt="사진" />
        </div>
        <div>
          <img src="@/assets/images/unsplash/image01.png" alt="사진" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>

defineProps({
  attr: String
})
</script >
<style lang="scss">
@import "@/assets/scss/setting/mixins";
.unsplash__wrap {
  overflow: hidden;
}
.unsplash__inner {
  height: 600px;

  .unsplash__text {
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

  .unsplash__item {
    @include flex-between;
    margin-top: 70px;
    position: absolute;

    > div {
      width: 400px;
      margin-right: 10px;
    }
    > div img {
      width: 100%;
      @include border(20px);
    }
  }
}

//unsplash__page
.Unsplash__cont {
  ul {
    column-count: 3;

    li {
      margin-bottom: 10px;
    }
  }
}

// unsplash__search
.unsplash__search {
  margin-bottom: 50px;
  text-align: center;
  input {
    border: 1px solid #e8ecf2;
    font-size: 16px;
    padding: 10px 20px;
    @include border(50px);
    min-width: 300px;
    margin-right: 10px;
    font-family: "aria";
  }
  button {
    @include button(#f7100d, #fff);
    @include border(50px);
  }
}

.unsplash__tag {
  ul {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 50px;
    li {
      a {
        border: 1px solid #e8ecf2;
        padding: 10px 20px;
        margin: 0 10px;
        color: #f7100d;
      }
    }
  }
}
</style>
