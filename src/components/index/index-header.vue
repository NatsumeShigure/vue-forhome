<template>
  <header class="index-header" :class="isHover">
    <div class="header-wrap">
      <div class="header-logo">
        <div>
          <router-link to="">
            <img :src="require('@/assets/img/header/logo.png')">
          </router-link>
        </div>
      </div>
      <div class="header-right">
        <nav class="header-nav">
          <ul>
            <li @mouseenter="hoverChange" @mouseleave="hoverChange">
              <router-link to="/" class="on">首页</router-link>
            </li>
            <li v-for="(v,i) of navList" :key="i" @mouseenter="hoverChange" @mouseleave="hoverChange">
              <router-link :to="v.to">{{v.title}}</router-link>
              <div class="nav-sub">
                <router-link to="" v-for="(v,i) of v.sub" :key="i">{{v}}</router-link>
              </div>
            </li>
          </ul>
        </nav>
        <div class="header-search">
          <div class="search-icon iconfont icon-sousuo"></div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isHover: {
        liHover: false
      }
    }
  },
  methods: {
    hoverChange() {
      this.isHover.liHover = this.isHover.liHover ? false : true
    }
  },
  computed: {
    ...mapState([
      "navList"
    ])
  }
}
</script>
<style scoped>
.index-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 98px;
  z-index: 10000;
  padding-top: 14px;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
}
.index-header.liHover {
  border-bottom-color: rgba(255, 250, 242, 0.15);
}
.header-wrap {
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 60px;
}
.header-logo {
  margin: auto 0;
}
.header-logo div {
  width: 259px;
  height: 29px;
}
.header-logo div a {
  display: block;
  width: 100%;
  height: 100%;
}
.header-right {
  margin: auto 0;
  display: flex;
  justify-content: flex-end;
}
.header-nav {
  display: inline-block;
}
.header-nav ul {
  list-style: none;
  margin: auto 0;
  padding: 0;
}
.header-nav ul li {
  position: relative;
  display: inline-block;
  margin-right: 45px;
}
.header-nav li::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -1px;
  width: 0px;
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
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  line-height: 98px;
  padding: 0 4px;
  display: inline-block;
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