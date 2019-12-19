<template>
  <div class="index-news" :style="{width:innerWidth+'px',height:innerHeight+'px'}">
    <div class="index-news-wrap">
      <div class="index-news-title">
        <h2>新闻<em>&nbsp;</em>资讯</h2>
        <router-link to="">了解更多</router-link>
      </div>
      <div class="index-news-box">
        <div class="index-news-swiper">
          <ul class="index-news-list" :class="tranSwitch" :style="ulStyle">
            <li class="index-news-item" v-for="(v,i) of newsList" :key="i">
              <router-link to="">
                <div class="news-img">
                  <img :src="v.src">
                </div>
                <div class="info">
                  <h3>{{v.h3}}</h3>
                  <div>{{v.div}}</div>
                  <div>
                    <span>{{v.span}}</span>
                    <span class="iconfont icon-youjiantou"></span>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="iconfont icon-zuojiantou icon-left" @click="goLeft(396)"></div>
        <div class="iconfont icon-youjiantou1 icon-right" @click="goRight(-396)"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      newsList: [
        {
          src: require("@/assets/img/index/news/20190819171706_805.png"),
          h3: "FORHOME唯家 打造新居家模式",
          div: "FORHOME唯家推出以“家”为核心的整合十大品类组建泛家居全新业态的商业模式。在此基础之上，金海马商业推出唯家生活馆的概念以及唯家客厅睡眠的系列产品。",
          span: "2018-02-26"
        }, {
          src: require("@/assets/img/index/news/20190813090432_684.png"),
          h3: "《2019唯家运筹帷幄 决胜终端精英训练营》成功举办！",
          div: "4月22日至4月24日期间，FORHOME唯家运营中心组织了一场别开生面的集训活动。",
          span: "2019-04-24"
        }, {
          src: require("@/assets/img/index/news/20190806203952_301.jpg"),
          h3: "FORHOME唯家广州展厅星耀开幕 ——用极简主义引领未来生活",
          div: "3月16日，国内首个以“极简主义”家居设计和生活方式为导向的空间家居品牌——FORHOME唯家广州旗舰展厅盛大启幕",
          span: "2019-08-06"
        }, {
          src: require("@/assets/img/index/news/20190819181028_223.jpg"),
          h3: "4月27日 FORHOME唯家天河香江店盛大开业，诚邀品鉴！",
          div: "4月27日，FORHOME唯家天河香江店迎来盛大开业！全新开业的天河香江店将继续透过ADMON（阿德蒙）系列家具诠释唯家主打的意式极简风格，创造具有想象力的生活空间，更使艺术全面而整体地介入当代家居生活。",
          span: "2019-04-29"
        }, {
          src: require("@/assets/img/index/news/20190819180729_147.png"),
          h3: "3月9日 FORHOME唯家丹东店盛大开业，诚邀品鉴！",
          div: "",
          span: "2019-03-09"
        }, {
          src: require("@/assets/img/index/news/20190819175513_468.jpg"),
          h3: "9月8日 FORHOME唯家客厅&睡眠长春香江店盛大开业",
          div: "",
          span: "2018-09-08"
        }, {
          src: require("@/assets/img/index/news/20190819175301_788.jpg"),
          h3: "9月1日 FORHOME唯家客厅&睡眠深圳欧洲城店盛大开业",
          div: "9月1日，香江集团全资打造的现代轻奢家具品牌FORHOME唯家深圳欧洲城店盛大开业",
          span: "2018-09-01"
        }, {
          src: require("@/assets/img/index/news/20190819175144_686.jpg"),
          h3: "8月18日 FORHOME唯家广州首家睡眠店盛大试营",
          div: "8月18日，香江集团全资打造的现代轻奢家具品牌FORHOME唯家广州首家睡眠店，在广州海珠区香江家居盛大试营业。",
          span: "2018-08-18"
        }, {
          src: require("@/assets/img/index/news/20190819175019_646.jpg"),
          h3: "FORHOME唯家沈阳新品发布暨经销商推介会成功举办",
          div: "8月6日，FORHOME唯家在沈阳香江家居成功举办 “遇见未来——FORHOME唯家新品发布暨经销商推介会”。",
          span: "2018-08-06"
        }
      ],
      i: 1188,
      count: 3,
      tranSwitch: {
        newsListTran: true
      },
      canClick: true
    }
  },
  methods: {
    goLeft(i) {
      if (this.canClick) {
        this.canClick = false
        this.i += i;
        this.count++
        if (this.count == 6) {
          setTimeout(() => {
            this.tranSwitch.newsListTran = false
            let arr = this.newsList.splice(0, 3)
            this.newsList.push(...arr)
            this.count = 3
            this.i = 1188
            setTimeout(() => {
              this.tranSwitch.newsListTran = true
            }, 30)
          }, 410)
        }
        setTimeout(() => {
          this.canClick = true
        }, 450)
      }
    },
    goRight(i) {
      if (this.canClick) {
        this.canClick = false
        this.i += i;
        this.count--
        if (this.count == 0) {
          setTimeout(() => {
            this.tranSwitch.newsListTran = false
            let arr = this.newsList.splice(-3)
            this.newsList.unshift(...arr)
            this.count = 3
            this.i = 1188
            setTimeout(() => {
              this.tranSwitch.newsListTran = true
            }, 30)
          }, 410)
        }
        setTimeout(() => {
          this.canClick = true
        }, 450)
      }
    }
  },
  computed: {
    ulStyle() {
      let width = 396 * (this.newsList.length) + 'px'
      let marginLeft = -this.i + 'px'
      return { width, marginLeft }
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
.index-news {
  background: url(../../assets/img/index/20190809173018_829.jpg) center
    no-repeat;
  background-size: cover !important;
  padding-top: 18vh;
}
.index-news-wrap {
  width: 1148px;
  margin: 0 auto;
}
.index-news-title {
  text-align: center;
  color: #fff;
}
.index-news-title > h2 {
  margin: 0;
  letter-spacing: 4px;
  font-size: 44px;
  font-weight: normal;
  line-height: normal;
}
.index-news-title > h2 > em {
  display: inline-block;
  margin: 0 8px 0 4px;
  width: 12px;
  height: 30px;
  background: url(../../assets/img/index/index13.png) center no-repeat;
  background-size: contain;
}
.index-news-title > a {
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
.index-news-title > a:hover {
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
  border-color: transparent;
  color: #000;
}
.index-news-box {
  position: relative;
  margin-top: 5vh;
}
.index-news-swiper {
  overflow: hidden;
}
.index-news-swiper li a:hover h3,
.index-news-swiper li a:hover .icon-youjiantou {
  color: #ad924d;
}
.index-news-list {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  box-sizing: content-box;
  list-style: none;
  margin: 0;
  padding: 0;
}
.newsListTran {
  transition: all 0.4s linear;
}
.index-news-item {
  width: 356px;
  margin-right: 40px;
  overflow: hidden;
  height: 100%;
  position: relative;
}
.index-news-item > a {
  display: block;
  text-decoration: none;
  color: #333;
}
.news-img {
  position: relative;
  width: 100%;
  padding-bottom: 61%;
}
.news-img > img {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  border: 0;
}
.info {
  padding-top: 24px;
  color: #fff;
}
.info > h3 {
  height: 21px;
  line-height: 21px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
  font-weight: normal;
  transition: all 0.3s;
}
.info > div:nth-child(2) {
  margin-top: 20px;
  max-height: 84px;
  line-height: 28px;
  font-size: 14px;
  overflow: hidden;
  opacity: 0.8;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
}
.info > div:last-child {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.info > div:last-child > span:first-child {
  font-size: 12px;
  color: #f9f5ed;
  opacity: 0.7;
}
.iconfont.icon-youjiantou {
  color: #f9f5ed;
  position: static;
  font-size: 30px;
}
.iconfont.icon-zuojiantou.icon-left,
.iconfont.icon-youjiantou1.icon-right {
  position: absolute;
  font-size: 30px;
  top: calc((100% - 80px) * (226 / 370) / 2);
  color: #c8c7c7;
}
.iconfont.icon-zuojiantou.icon-left:hover,
.iconfont.icon-youjiantou1.icon-right:hover {
  color: #d9b765;
}
.iconfont.icon-zuojiantou.icon-left {
  left: -36px;
}
.iconfont.icon-youjiantou1.icon-right {
  right: -36px;
}
</style>