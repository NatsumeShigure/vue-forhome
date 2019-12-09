<template>
  <div class="index-join" :style="{width:innerWidth+'px',height:innerHeight+'px'}">
    <div class="index-join-wrap">
      <div class="index-join-title">
        <h2>招商<em>&nbsp;</em>流程</h2>
        <router-link to="">了解更多</router-link>
      </div>
      <ul class="index-join-list">
        <li v-for="(v,i) of joinList" :key="i">
          <div><img :src="v.src"></div>
          <div>
            <div>
              <p v-for="(item,i) of v.p" :key="i">{{item}}</p>
            </div>
          </div>
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
      joinList: [
        {
          src: "/img/index/join/index9.png",
          p: ["→ 加盟申请", "→ 沟通洽谈", "→ 市场考察"]
        }, {
          src: "/img/index/join/index10.png",
          p: ["→ 店面评估", "→ 合同签订", "→ 缴纳保证金"]
        }, {
          src: "/img/index/join/index11.png",
          p: ["→ 店面设计", "→ 店面装修", "→ 货款下单"]
        }, {
          src: "/img/index/join/index12.png",
          p: ["→ 人员培训", "→ 驻店指导", "→ 开业促销"]
        }
      ]
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
.index-join {
  background: url(/img/index/20190809172625_176.jpg) center no-repeat;
  background-size: cover !important;
  padding-top: 18vh;
  /* box-sizing: border-box; */
}
.index-join-wrap {
  width: 1148px;
  margin: 0 auto;
}
.index-join-title {
  text-align: center;
  color: #fff;
}
.index-join-title > h2 {
  margin: 0;
  letter-spacing: 4px;
  font-size: 44px;
  font-weight: normal;
  line-height: normal;
}
.index-join-title > h2 > em {
  display: inline-block;
  margin: 0 8px 0 4px;
  width: 12px;
  height: 30px;
  background: url(/img/index/index13.png) center no-repeat;
  background-size: contain;
}
.index-join-title > a {
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
.index-join-title > a:hover {
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
  border-color: transparent;
  color: #000;
}
.index-join-list {
  list-style: none;
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 15vh;
  padding: 0;
}
.index-join-list {
  justify-content: space-between;
  margin: 9vh -20px 0;
}
.index-join-list > li {
  padding: 0 20px;
  width: 25%;
}
.index-join-list > li > div:first-child {
  height: 180px;
}
.index-join-list > li > div:last-child {
  margin-top: 20px;
  font-size: 18px;
  line-height: 36px;
  color: #f6efdf;
}
.index-join-list > li > div:last-child > div {
  display: inline-block;
  text-align: left;
  max-width: 180px;
}
.index-join-list > li > div:last-child > div > p {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
</style>