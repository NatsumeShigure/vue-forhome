<template>
  <div class="index-swiper">
    <div class="index-wrapper" :style="{transform:`translateY(${transY}px)`}">
      <index-header></index-header>
      <carousel></carousel>
      <index-video></index-video>
      <brand-service></brand-service>
      <index-join></index-join>
      <index-news></index-news>
      <footer-nav></footer-nav>
    </div>
    <div class="index-pagination">
      <div class="index-pagination-bullet" :class="{active:index==i}" v-for="(v,i) of bullets" :key="i" @click="bullet(i)">
        <span class="text">{{v.text}}</span>
        <span class="disc"></span>
      </div>
      <div class="index-pagination-bullet" :class="{active:index==bullets.length}" @click="bullet(bullets.length)">
        <span class="disc"></span>
      </div>
    </div>
    <div class="scroll-btn" @click="scrollBtn" v-show="transY!=-4600">
      <img :src="require('@/assets/img/index/index4.png')">
    </div>
  </div>
</template>
<script>
import indexHeader from '../components/index/index-header'
import carousel from '../components/index/carousel'
import indexVideo from '../components/index/index-video'
import brandService from '../components/index/brand-service'
import indexJoin from '../components/index/index-join'
import indexNews from '../components/index/index-news'
export default {
  data() {
    return {
      transY: 0,
      index: 0,
      canClick: true,
      bullets: [
        { text: "品牌形象" },
        { text: "产品形象" },
        { text: "品牌服务" },
        { text: "招商流程" },
        { text: "新闻资讯" }
      ],
      body: window.document.querySelector("body")
    }
  },
  methods: {
    bullet(i) {
      switch (i) {
        case 0:
          this.transY = 0;
          break;
        case 1:
          this.transY = -937;
          break;
        case 2:
          this.transY = -1874;
          break;
        case 3:
          this.transY = -2979;
          break;
        case 4:
          this.transY = -4084;
          break;
        case 5:
          this.transY = -4600;
          break;
      }
      this.index = i;
    },
    scrollBtn() {
      if (this.canClick) {
        this.canClick = false
        this.scrollDown()
        this.sync()
        setTimeout(() => {
          this.canClick = true
        }, 900)
      }
    },
    scrollDown() {
      if (this.transY <= 0 && this.transY > -1873) {
        this.transY += -937; // 0~-937~-1874
      } else if (this.transY <= -1874 && this.transY > -4083) {
        this.transY += -1105; // -1874~-2979-4084
      } else if (this.transY <= -4084 && this.transY > -4659) {
        this.transY = -4600; // -4084~-4600
      }
    },
    scrollOn() {
      if (this.transY >= -4600 && this.transY < -4085) {
        this.transY = -4084; // -4600~-4084
      } else if (this.transY >= -4084 && this.transY < -1875) {
        this.transY -= -1105; // -4084~-2979~-1874
      } else if (this.transY >= -1874 && this.transY < -1) {
        this.transY -= -937; // -1874~0
      }
    },
    sync() {
      this.transY == 0 && (this.index = 0)
      this.transY == -937 && (this.index = 1)
      this.transY == -1874 && (this.index = 2)
      this.transY == -2979 && (this.index = 3)
      this.transY == -4084 && (this.index = 4)
      this.transY == -4600 && (this.index = 5)
    }
  },
  created() {
    window.scrollTo(0, 0);
    this.body.style.overflow = "hidden";
    this.body.style.background = "#fff";
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0)
    })
    window.addEventListener("mousewheel",
      e => {
        if (this.canClick) {
          this.canClick = false
          e.wheelDelta < 0 ? this.scrollDown() : this.scrollOn()
          this.sync()
          setTimeout(() => {
            this.canClick = true
          }, 900)
        }
      }
    )
  },
  components: {
    indexHeader,
    carousel,
    indexVideo,
    brandService,
    indexJoin,
    indexNews
  }
}
</script>
<style scoped>
@keyframes downFade {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
    bottom: 83.5%;
  }
}
.index-swiper {
  position: relative;
  width: 100%;
  height: 100%;
}
.index-wrapper {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition-duration: 1000ms;
}
.index-pagination {
  position: absolute;
  right: 10px;
  top: 370px;
  z-index: 1000;
}
.index-pagination-bullet {
  width: auto;
  height: auto;
  opacity: 1;
  margin: 6px 0;
  background: none;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: relative;
}
.index-pagination-bullet.active .disc {
  background-color: #e2c697;
  border-color: #e2c697;
}
.index-pagination-bullet.active .text {
  transform: scale(1);
}
.disc {
  display: block;
  padding: 7px;
  width: 26px;
  height: 26px;
  background-color: #fff;
  background-clip: content-box;
  border: 1px solid transparent;
  border-radius: 50%;
  box-sizing: border-box;
}
.text {
  position: absolute;
  top: 0px;
  right: 40px;
  width: 95px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  font-size: 14px;
  color: #000;
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
  border-radius: 27px;
  transform: scale(0);
  transition: all 0.5s;
  transform-origin: right center;
}
.text::after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  margin-top: -5px;
  margin-left: -1px;
  border-left: 5px solid #ab904c;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.scroll-btn {
  position: absolute;
  bottom: 84%;
  left: 50%;
  margin-left: -10.5px;
  width: 21px;
  height: 77px;
  animation: downFade 2s infinite;
  cursor: pointer;
  z-index: 1000;
}
.scroll-btn img {
  width: 100%;
  height: auto;
}
</style>