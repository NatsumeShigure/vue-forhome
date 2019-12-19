import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
