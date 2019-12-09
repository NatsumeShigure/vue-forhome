<template>
  <header class="header" :class="isHover">
    <div class="header-wrap">
      <div class="logo">
        <router-link to="">
          <img src="/img/header/logo.png">
        </router-link>
      </div>
      <nav class="header-nav">
        <ul>
          <li @mouseenter="hoverChange" @mouseleave="hoverChange">
            <router-link to="/">首页</router-link>
          </li>
          <li v-for="(v,i) of navList" :key="i" @mouseenter="hoverChange" @mouseleave="hoverChange">
            <router-link :to="v.to">{{v.title}}</router-link>
            <div class="nav-sub">
              <router-link to="" v-for="(v,i) of v.sub" :key="i">{{v}}</router-link>
            </div>
          </li>
        </ul>
        <div class="header-search">
          <div class="search-icon iconfont icon-sousuo"></div>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isHover: {
        liHover: false
      },
      navList: [
        {
          to: "/guanyuweijia",
          title: "关于唯家",
          sub: ["品牌故事", "品牌介绍", "品牌愿景", "品牌定位", "品牌主张", "品牌设计理念", "品牌价值"]
        }, {
          to: "",
          title: "新闻中心",
          sub: ["品牌资讯", "促销活动", "媒介报道", "经销商专区"]
        }, {
          to: "",
          title: "产品中心",
          sub: ["产品价值", "ADMON阿德蒙系列", "BURANO布拉诺系列"]
        }, {
          to: "",
          title: "品牌服务",
          sub: ["服务理念", "空间设计师服务", "五包守护家服务", "爱家服务承诺"]
        }, {
          to: "",
          title: "招商加盟",
          sub: ["招商政策", "加盟细则", "招商区域", "门店形象"]
        }, {
          to: "",
          title: "联系我们",
          sub: ["门店查询", "加入我们", "意见反馈"]
        }
      ]
    }
  },
  methods: {
    hoverChange() {
      this.isHover.liHover = this.isHover.liHover ? false : true
    }
  },
}
</script>
<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  z-index: 1000;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
}
.header-wrap {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.header.liHover {
  border-bottom-color: rgba(255, 250, 242, 0.15);
}
.logo {
  margin: 0;
  padding: 0;
}
.logo a {
  text-decoration: none;
  color: #333;
}
.logo a img {
  width: auto;
  height: 29px;
  vertical-align: top;
  border: 0;
}
.header-nav {
  display: flex;
  justify-content: space-between;
  margin: auto 0;
}
.header-nav ul {
  list-style: none;
  font-weight: normal;
  margin: 0%;
  padding: 0%;
}
.header-nav ul li {
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-right: 45px;
}
.header-nav ul li::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -1px;
  width: 0;
  height: 2px;
  background-color: #d9b765;
  transition: width 0.3s;
}
.header-nav li:hover::after {
  width: 100%;
}
.header-nav li:hover .nav-sub {
  display: flex;
  transform: translate(-50%, 0);
}
.header-nav ul li > a {
  line-height: 110px;
  color: #fff;
  display: block;
  padding: 0 4px;
  font-size: 16px;
  transition: all 0.3s;
  text-decoration: none;
}
.on {
  color: #d9b765 !important;
}
.nav-sub {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 20px);
  flex-direction: column;
  align-items: center;
  padding: 15px 15px 30px;
  background: rgba(0, 0, 0, 0.4);
  transition: transform 0.5s, -webkit-transform 0.5s, -moz-transform 0.5s;
}
.nav-sub a {
  display: block;
  margin-top: 16px;
  padding: 0 15px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  white-space: nowrap;
  border-radius: 24px;
  transition: all 0.3s;
  text-decoration: none;
}
.nav-sub a:hover {
  color: #000;
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
}
.header-search {
  cursor: pointer;
  margin: auto 0;
}
.search-icon {
  width: 28px;
  height: 28px;
  line-height: 28px;
  background: #e8e8ea;
  border-radius: 50%;
  text-align: center;
  font-size: 20px;
}
.search-icon:hover {
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
}
</style>