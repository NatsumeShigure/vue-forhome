<template>
  <div class="brand-service" :style="{width:innerWidth+'px',height:innerHeight+'px'}">
    <div class="brand-service-wrap">
      <div class="brand-service-title">
        <h2>品牌<em>&nbsp;</em>服务</h2>
        <router-link to="">了解更多</router-link>
      </div>
      <ul class="brand-service-list">
        <li v-for="(v,i) of serviceList" :key="i">
          <div><img :src="v.src"></div>
          <div>{{v.msg}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      serviceList: [
        {
          src: "/img/index/service/index5.png",
          msg: "服务理念"
        }, {
          src: "/img/index/service/index8.png",
          msg: "空间设计师服务"
        }, {
          src: "/img/index/service/index6.png",
          msg: "五包守护家服务",
        }, {
          src: "/img/index/service/index7.png",
          msg: "爱家服务承诺"
        }
      ],
    }
  },
  created() {
    window.addEventListener("resize", () => {
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
    })
  }
}
</script>
<style scoped>
.brand-service {
  background: url(/img/index/20190809171847_661.jpg) center no-repeat;
  background-size: cover !important;
  padding-top: 18vh;
  /* box-sizing: border-box; */
}
.brand-service-wrap {
  width: 1148px;
  margin: 0 auto;
}
.brand-service-title {
  text-align: center;
  color: #fff;
}
.brand-service-title > h2 {
  margin: 0;
  letter-spacing: 4px;
  font-size: 44px;
  font-weight: normal;
  line-height: normal;
}
.brand-service-title > h2 > em {
  display: inline-block;
  margin: 0 8px 0 4px;
  width: 12px;
  height: 30px;
  background: url(/img/index/index13.png) center no-repeat;
  background-size: contain;
}
.brand-service-title > a {
  display: block;
  margin: 15px auto 0;
  width: 80px;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  border: 1px solid #fff;
  border-radius: 30px;
  box-sizing: border-box;
  text-decoration: none;
  transition: all 0.3s;
  color: #fff;
}
.brand-service-title > a:hover {
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
  border-color: transparent;
  color: #000;
}
.brand-service-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 15vh;
  padding: 0;
}
.brand-service-list > li {
  width: 180px;
}
.brand-service-list > li > div:first-child {
  height: 180px;
}
.brand-service-list > li > div:first-child > img {
  width: 100%;
  height: 100%;
}
.brand-service-list > li > div:last-child {
  margin-top: 35px;
  height: 31px;
  font-size: 24px;
  color: #fff;
}
</style>