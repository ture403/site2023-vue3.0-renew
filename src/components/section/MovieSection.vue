<template>
  <section id="moviesSection" :class="attr">
    <div class="movie__inner">
      <div class="movie__inner container">
        <div class="movie__text">
          <h3>그림 영화</h3>
          <p>
            Netflix와 Youtube등 다양한 경로에서
            <br />
            그림 관련 영화를 시청할 수 있습니다.
          </p>
          <a to="/" class="button-green"> 자세히 보기 </a>
        </div>
        <div class="movie__item">
          <div>
            <img src="@/assets/images/movie/movie01.png" alt="유튜브" />
          </div>
          <div>
            <img src="@/assets/images/movie/movie02.png" alt="유튜브" />
          </div>
          <div>
            <img src="@/assets/images/movie/movie03.png" alt="유튜브" />
          </div>
          <div>
            <img src="@/assets/images/movie/movie04.png" alt="유튜브" />
          </div>
          <div>
            <img src="@/assets/images/movie/movie05.png" alt="유튜브" />
          </div>
          <div>
            <img src="@/assets/images/movie/movie06.png" alt="유튜브" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    attr: String,
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/setting/mixins";
.movie__wrap {
  overflow: hidden;
}
.movie__inner {
  height: 1000px;
  margin-top: 100px;
  margin-bottom: 100px;
  .movie__text {
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

  .movie__item {
    @include flex-between;
    position: absolute;
    margin-top: 70px;

    > div {
      margin-right: 10px;
      width: 400px;
      @include border(20px);
    }
    > div img {
      width: 100%;
    }
  }
}

//movie__cont
.movie__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 23.333%;
      margin-bottom: 2%;
      margin-bottom: 10px;
      position: relative;
      .title {
        font-size: 20px;
        display: inline-block;
        padding: 3px 0;
        &:hover {
          text-decoration: underline;
          text-underline-position: under;
        }
      }
      .star {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background-color: #fff;
        text-align: center;
        border-radius: 50%;
        font-size: 12px;
      }
    }
  }
}

//movie__search
.movie__search {
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

.movie__tag {
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
