<template>
  <div class="carousel">
    <ul class="list" :style="{width:innerWidth+'px',height:innerHeight+'px'}">
      <li class="item" :class="{active:index==i}" v-for="(img,i) of imgs" :key="i">
        <router-link to="">
          <div :style="{width:innerWidth+'px',height:innerHeight+'px',background:img.src}" class="img">
          </div>
        </router-link>
      </li>
    </ul>
    <div class="iconfont icon-zuojiantou" @click="goPre"></div>
    <div class="iconfont icon-youjiantou1" @click="goNext"></div>
    <div class="pagination" v-for="(v,i) of paginations" :key="i" v-show="index==i">
      <span>{{v.num}}</span>
      <span>{{v.word}}</span>
    </div>
    <div class="index-banner" v-show="index!=imgs.length-1">
      <router-link to="">
        <div class="index-circle"></div>
        <div class="index-box">
          <img :src="require('../../assets/img/index/index2.png')">
          <h2>
            <span>极</span>
            <span>简</span>
            <span>主</span>
            <span>义</span>
            <span>空</span>
            <span>间</span>
            <span>家</span>
            <span>居</span>
          </h2>
          <p>
            <span>
              <span>M</span>
              <span>I</span>
              <span>N</span>
              <span>I</span>
              <span>M</span>
              <span>A</span>
              <span>L</span>
              <span>I</span>
              <span>S</span>
              <span>T</span>
            </span>
            <span>
              <span>S</span>
              <span>P</span>
              <span>A</span>
              <span>C</span>
              <span>E</span>
            </span>
            <span>
              <span>H</span>
              <span>O</span>
              <span>M</span>
              <span>E</span>
            </span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      index: 0,
      imgs: [
        { src: `url(${require('../../assets/img/index/20190809164920_154.jpg')})` },
        { src: `url(${require('../../assets/img/index/20190810114643_443.jpg')})` }
      ],
      paginations: [
        {
          num: "1/2",
          word: "极简主义家居"
        }, {
          num: "2/2",
          word: "极简主义空间家居"
        }
      ],
      time: 0,
      canClick: true
    }
  },
  methods: {
    goPre() {
      if (this.canClick) {
        this.canClick = false
        if (this.index == 0) {
          this.index = this.imgs.length - 1
        } else {
          this.index--
        }
        this.time = 0;
        setTimeout(() => {
          this.canClick = true
        }, 1050)
      }
    },
    goNext() {
      if (this.canClick) {
        this.canClick = false
        if (this.index >= this.imgs.length - 1) {
          this.index = 0
        } else {
          this.index++
        }
        this.time = 0;
        setTimeout(() => {
          this.canClick = true
        }, 1050)
      }
    },
    start() {
      setInterval(() => {
        this.time++
        if (this.time == 50) {
          this.goNext();
          this.time = 0
        }
      }, 100)
    }
  },
  created() {
    window.addEventListener("resize", () => {
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
    })
    this.start();
  }
}
</script>
<style scoped>
@keyframes poster {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.01);
  }
  40% {
    transform: scale(1.02);
  }
  60% {
    transform: scale(1.03);
  }
  80% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1.05);
  }
}
@keyframes word {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes logo {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
.carousel {
  position: relative;
  margin: 0 auto;
}
.list {
  list-style: none;
  margin: 0 auto;
  padding: 0;
}
.item {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 1s;
}
.item > a {
  display: block;
  width: 100%;
  height: 100%;
}
.item.active {
  z-index: 10;
  opacity: 1;
  animation: poster 6s linear 1;
}
.img {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
}
.iconfont {
  font-size: 55px;
  position: absolute;
  top: 437px;
  z-index: 100;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}
.iconfont:hover {
  color: #d9b765;
}
.icon-zuojiantou {
  left: 45px;
}
.icon-youjiantou1 {
  right: 45px;
}
.pagination {
  position: absolute;
  bottom: 40px;
  left: 0px;
  padding-left: 60px;
  color: #fff;
  z-index: 1000;
  box-sizing: border-box;
}
.pagination span:first-child {
  font-size: 18px;
  font-family: "Microsoft YaHei";
}
.pagination span:last-child {
  margin-left: 20px;
  font-size: 15px;
}
.index-banner {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 140px 0 100px;
  width: 598px;
  z-index: 1000;
  transform: translate(-50%, -50%);
}
.index-banner a {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
}
.index-circle {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: url(../../assets/img/index/index3.png) top center no-repeat;
  background: 100% auto;
  opacity: 0;
  animation: word 1s 1s forwards;
}
.index-box {
  position: relative;
  text-align: center;
  color: #fff;
  font-family: "Microsoft YaHei";
}
.index-box img {
  max-width: 60%;
  height: auto;
  border: 0;
  vertical-align: top;
  opacity: 0;
  animation: logo 1s 1s forwards;
}
.index-box h2 {
  margin: 16px 0 0 0;
  font-size: 48px;
  letter-spacing: 7px;
  font-weight: 200;
}
.index-box > h2 > span {
  opacity: 0;
}
.index-box > h2 > span:nth-child(2n) {
  animation: word 1s 0.6s forwards;
}
.index-box > h2 > span:not(:nth-child(2n)) {
  animation: word 1s 0.8s forwards;
}
.index-box p {
  margin: 10px 0 0 0;
  font-size: 22px;
  letter-spacing: 9px;
  font-weight: 200;
  display: flex;
  justify-content: space-around;
  padding: 0 65px;
}
.index-box > p > span > span {
  opacity: 0;
}
.index-box > p > span > span:nth-child(2n) {
  animation: word 1s 0.8s forwards;
}
.index-box > p > span > span:not(:nth-child(2n)) {
  animation: word 1s 0.6s forwards;
}
</style>