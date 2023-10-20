<template>
  <section id="sliderSection" :class="attr">
    <div class="slider__inner">
      <h2 class="blind">배너 슬라이드</h2>
      <div class="slider__img">
            <div class="slider s1 container">
              <div class="text">
                <h3 v-html="slider[0].title"></h3>
                <p v-html="slider[0].desc"></p>
                <a href="#" class="more button-red">더 알아보기</a>
              </div>
              <div class="img" aria-label="hidden">
                <img :src="slider[0].img1"  alt="이미지1" />
                <img :src="slider[0].img2"  alt="이미지2" />
                <img :src="slider[0].img3"  alt="이미지3" />
              </div>
              <div class="circle" aria-label="hidden">
                <span class="circle c1"></span>
                <span class="circle c2"></span>
                <span class="circle c3"></span>
                <span class="circle c4"></span>
                <span class="circle c5"></span>
              </div>
            </div>
        <div class="slider s2 container">
          <div class="text">
            <h3 v-html="slider[1].title"></h3>
            <p v-html="slider[1].desc"></p>
            <a href="#" class="more button-red">더 알아보기</a>
          </div>
          <div class="img" aria-label="hidden">
            <img :src="slider[1].img1"  alt="이미지1" />
            <img :src="slider[1].img2"  alt="이미지2" />
            <img :src="slider[1].img3"  alt="이미지3" />
          </div>
          <div class="circle" aria-label="hidden">
            <span class="circle c1"></span>
            <span class="circle c2"></span>
            <span class="circle c3"></span>
            <span class="circle c4"></span>
            <span class="circle c5"></span>
          </div>
        </div>
        <div class="slider s3 container">
          <div class="text">
            <h3 v-html="slider[1].title"></h3>
            <p v-html="slider[1].desc"></p>
            <a href="#" class="more button-red">더 알아보기</a>
          </div>
          <div class="img" aria-label="hidden">
            <img :src="slider[1].img1"  alt="이미지1" />
            <img :src="slider[1].img2"  alt="이미지2" />
            <img :src="slider[1].img3"  alt="이미지3" />
          </div>
          <div class="circle" aria-label="hidden">
            <span class="circle c1"></span>
            <span class="circle c2"></span>
            <span class="circle c3"></span>
            <span class="circle c4"></span>
            <span class="circle c5"></span>
          </div>
        </div>
      </div>
      <!-- <div class="slider s2">
                    <h3>New<br>portfolio</h3>
                    <p>재능은아마ㅏ다바다 </p>
                    <a href="#">더 알아보기</a>
                </div>
                <div class="slider s3">
                    <h3>New<br>portfolio</h3>
                    <p>재능은아마ㅏ다바다 </p>
                    <a href="#">더 알아보기</a>
                </div> -->
      <!-- <div class="slider__btn">
        <a href="#" class="left"><span class="ir">이전이미지</span></a>
        <a href="#" class="right"><span class="ir">다음이미지</span></a>
      </div>
      <div class="slider__dot">
        <a href="#" class="dot active"><span class="ir">1번 이미지</span></a>
        <a href="#" class="dot"><span class="ir">2번 이미지</span></a>
        <a href="#" class="dot"><span class="ir">3번 이미지</span></a>
      </div> -->
    </div>
  </section>
</template>
<script setup>
  defineProps({
    attr: String
  })

  const slider = [
    {
      title: "<h3>MY<br />portfolio</h3>",
      desc: "포트폴리오는 나의 의지와 열정의 흔적이 담긴 작품집입니다.<br />그안에 내 끈기와 결연함을 보여줄 터전이 되어주세요.",
      img1: "./images/slider/slidericon5.png",
      img2: "./images/slider/slidericon7.png",
      img3: "./images/slider/slidericon6.png",
    },
    {
      title: "<h3>MY<br />portfolio</h3>",
      desc: "포트폴리오는 나의 의지와 열정의 흔적이 담긴 작품집입니다.<br />그안에 내 끈기와 결연함을 보여줄 터전이 되어주세요.",
      img1: "./images/slider/slidericon1.png",
      img2: "./images/slider/slidericon2.png",
      img3: "./images/slider/slidericon3.png",
    },
    {
      title: "<h3>MY<br />portfolio</h3>",
      desc: "포트폴리오는 나의 의지와 열정의 흔적이 담긴 작품집입니다.<br />그안에 내 끈기와 결연함을 보여줄 터전이 되어주세요.",
      img1: "./images/slider/slidericon7.png",
      img2: "./images/slider/slidericon8.png",
      img3: "./images/slider/slidericon9.png",
    },
  ]
</script>
<style lang="scss">
// slider__wrap
.slider__wrap {
  background-color: #d5a7e7;
}
.slider__inner {
  position: relative;
  padding: 30px 0;
  .slider__img {
    height: 700px;
    overflow: hidden;
    .slider {
      .text {
        h3 {
          font-size: 110px;
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1;
          margin-bottom: 40px;
          padding-top: 100px;
        }
        p {
          font-size: 24px;
          line-height: 1.2;
          margin-bottom: 50px;
        }
        .more {
          font-size: 18px;
          margin-bottom: 100px;
        }
      }
      .img {
        position: absolute;
        right: 0;
        top: -10px;
        width: 600px;
        height: 600px;
        background-image: url(../../assets/images/slider/bigcircle.png);
        background-size: cover;

        img {
          &:nth-child(1) {
            position: absolute;
            width: 300px;
          }
          &:nth-child(2) {
            position: absolute;
            width: 300px;
            right: 0;
            bottom: 140px;
          }
          &:nth-child(3) {
            position: absolute;
            width: 300px;
            bottom: 10px;
            left: 30px;
          }
        }
      }
      .circle {
        span {
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        span:nth-child(1) {
          background-color: var(--button_blue);
          left: 50%;
          width: 10px;
          height: 10px;
        }
        span:nth-child(2) {
          background-color: var(--button_red);
          top: 20%;
          left: -10%;
          width: 40px;
          height: 40px;
        }
        span:nth-child(3) {
          background-color: var(--button_green);
          left: 100%;
          top: 10%;
        }
        span:nth-child(4) {
          background-color: var(--button_red);
          left: 17%;
          top: 0%;
          width: 10px;
          height: 10px;
        }
        span:nth-child(5) {
          background-color: var(--button_blue);
          left: 90%;
          top: 90%;
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  .slider__btn {
    > a {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 22px;
      height: 40px;
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.5;
      }
    }
    .left {
      left: 20px;
      background-image: url(../../assets/images/slider/slider_left.png);
    }
    .right {
      right: 20px;
      background-image: url(../../assets/images/slider/slider_right.png);
    }
  }

  .slider__dot {
    position: absolute;
    left: 50%;
    // bottom: -80px;
    transform: translateX(-50%);
    a {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin: 0 5px;
      border: 4px solid #ff3344;
      background-color: #ff3344;
      box-shadow: 0 0 0 3px transparent;
      &.active {
        box-shadow: 0 0 0 3px #ff3344;
        border-width: 4px;
        background-color: #fff;
      }
    }
  }
}
</style>
