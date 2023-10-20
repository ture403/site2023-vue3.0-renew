<template>
  <section id="portSection" :class="attr">
    <h3>작품 소개</h3>
    <p>동양화 작품을 소개합니다.</p>
    <div class="port__inner container">
      <div class="port__btn">
        <ul>
          <li>
            <a href="#">1910년대</a>
          </li>
          <li>
            <a href="#">1920년대</a>
          </li>
          <li>
            <a href="#">1930년대</a>
          </li>
          <li>
            <a href="#">1940년대</a>
          </li>
        </ul>
      </div>
      <div class="port__cont">
        <div class="port" v-for="text in texts" :key="text.title">
          <figure class="port__header">
            <img :src="text.img" alt="포트폴리오 이미지" />
          </figure>
          <div class="port__body">
            <div class="pic">
              <img :src="text.icon" alt="멤버 이미지" />
            </div>
            <div>
              <h4>{{ text.title }}</h4>
              <p>{{ text.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
defineProps({
  attr: String
})
const texts = [
    {
      img: "./images/port/memberView01.png",
      title: "신윤복",
      desc: "단오풍경",
      icon: "./images/port/memberIcon01.png",
    },
    {
      img: "./images/port/memberView02.png",
      title: "김홍도",
      desc: "자화상",
      icon: "./images/port/memberIcon01.png",
    },
    {
      img: "./images/port/memberView03.png",
      title: "장승업",
      desc: "미산이곡",
      icon: "./images/port/memberIcon01.png",
    },
    {
      img: "./images/port/memberView04.png",
      title: "신윤복",
      desc: "혜원전신첩",
      icon: "./images/port/memberIcon01.png",
    },
    {
      img: "./images/port/memberView05.png",
      title: "김홍도",
      desc: "성하부전도",
      icon: "./images/port/memberIcon01.png",
    },
    {
      img: "./images/port/memberView06.png",
      title: "장승업",
      desc: "군마도",
      icon: "./images/port/memberIcon01.png",
    },
]


</script>
<style lang="scss">
.port__inner {
  .port__btn {
    ul {
      display: flex;
      justify-content: center;
      margin-bottom: 50px;
      li {
        margin-right: 10px;
        a {
          border: 1px solid #000;
          display: inline-block;
          padding: 5px 20px;
          border-radius: 40px;
        }
      }
    }
  }

  .port__cont {
    display: flex;
    flex-wrap: wrap;

    .port {
      width: 33.333%;

      .port__header {
        margin-right: 30px;
      }

      .port__body {
        display: flex;
        align-items: center;
        margin: 30px 30px 30px 0;
      }
      .port__body .pic {
        margin-right: 20px;
      }

      img {
        width: 100%;
      }
      h4 {
        text-align: left;
        font-size: 20px;
        font-weight: bold;
      }
      p {
        text-align: left;
      }
    }
  }
}
</style>
