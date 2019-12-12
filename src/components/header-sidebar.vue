<template>
  <div>
    <div class="header-btn btn-overmenu" v-show="fixedChange.menuFixed" @click="showMask">
      <i class="iconfont icon-caidan"></i>
    </div>
    <div class="header-sidebar-mask" v-show="mask" @click="showMask">&nbsp;</div>
    <div class="header-sidebar" :class="{show:mask}">
      <div class="header-sidebar-wp">
        <div class="header-sidebar-nav">
          <ul>
            <li>
              <router-link to="/" class="nav-a">首页</router-link>
            </li>
            <li v-for="(v,i) of List" :key="i">
              <router-link :to="v.to" class="nav-a">{{v.nav}}</router-link>
              <div class="nav-sub">
                <router-link to="" v-for="(v,i) of v.sub" :key="i">{{v}}</router-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="header-sidebar-close iconfont icon-guanbi" @click="showMask"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mask: false,
      List: [
        {
          to: "/guanyuweijia",
          nav: "关于唯家",
          sub: ["品牌故事", "品牌介绍", "品牌愿景", "品牌定位", "品牌主张", "品牌设计理念", "品牌价值"]
        }, {
          to: "",
          nav: "新闻中心",
          sub: ["品牌资讯", "促销活动", "媒介报道", "经销商专区"]
        }, {
          to: "",
          nav: "产品中心",
          sub: ["产品价值", "ADMON阿德蒙系列", "BURANO布拉诺系列"]
        }, {
          to: "",
          nav: "品牌服务",
          sub: ["服务理念", "空间设计师服务", "五包守护家服务", "爱家服务承诺"]
        }, {
          to: "",
          nav: "招商加盟",
          sub: ["招商政策", "加盟细则", "招商区域", "门店形象"]
        }, {
          to: "",
          nav: "联系我们",
          sub: ["门店查询", "加入我们", "意见反馈"]
        }
      ]
    }
  },
  methods: {
    showMask() {
      this.mask = !this.mask
    }
  },
  props: [
    "fixedChange"
  ]
}
</script>
<style scoped>
.header-btn {
  position: fixed;
  right: calc((100% - 1400px) / 2);
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #333;
  background: #e8e8ea;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s;
}
.header-btn:hover {
  color: #000;
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
}
.header-btn.btn-overmenu {
  top: 11px;
}
.header-btn i {
  display: inline-block;
  vertical-align: middle;
  font-size: 22px;
}
.header-sidebar-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 10010;
}
.header-sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  background: #e1dede;
  z-index: 10020;
  transition: all 1s;
  width: 1170px;
}
.header-sidebar.show {
  transform: translateX(0%);
}
.header-sidebar-wp {
  display: flex;
  padding: 6px 60px 0 80px;
  border-bottom: 1px solid #cccaca;
}
.header-sidebar-nav ul {
  display: flex;
  list-style: none;
  margin: 0%;
  padding: 0%;
}
.header-sidebar-nav li {
  position: relative;
  margin-right: 76px;
}
.header-sidebar-nav li::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -1px;
  width: 0px;
  height: 2px;
  background: #ad924d;
  transition: width 0.3s;
}
.header-sidebar-nav li:hover .nav-a {
  color: #ad924d;
}
.header-sidebar-nav li:hover:after {
  width: 100%;
}
.header-sidebar-nav .nav-a {
  height: 100%;
  line-height: 100px;
  font-size: 18px;
  color: #170a0a;
  transition: all 0.3s;
}
.header-sidebar-close {
  line-height: 100px;
  font-size: 28px;
  color: #000;
  cursor: pointer;
  transition: all 0.3s;
}
.header-sidebar-nav .nav-sub {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  transition: transform 0.5s, -webkit-transform 0.5s, -moz-transform 0.5s;
}
.header-sidebar-nav .nav-sub a {
  display: block;
  margin-top: 16px;
  padding: 0 15px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 14px;
  color: #170a0a;
  white-space: nowrap;
  border-radius: 24px;
  transition: all 0.3s;
}
.header-sidebar-nav .nav-sub a:hover {
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
}
</style>