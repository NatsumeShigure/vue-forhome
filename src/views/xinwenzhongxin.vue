<template>
  <div class="news">
    <div class="news-banner"></div>
    <Menu :menuFixed="menuFixed" :swiperList="swiperList" :index="index"></Menu>
    <div class="news-menu-block" :menuBlock="menuBlock">&nbsp;</div>
    <header-sidebar :menuFixed="menuFixed"></header-sidebar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperList: ["品牌资讯", "促销活动", "媒介报道", "经销商专区"],
      menuFixed: false,
      menuBlock: false,
      index: 0
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop
      this.menuFixed = scrollTop >= 970 ? true : false
      this.menuBlock = scrollTop >= 970 ? true : false
    });
  }
}
</script>
<style scoped>
.news {
  position: relative;
}
.news .news-banner {
  background: url(../assets/img/xinwenzhongxin/20190806202411_196.jpg) no-repeat;
  position: relative;
  width: 100%;
  height: 0;
  margin-top: 111px;
  padding-bottom: 26%;
  background-position: center center;
  background-size: cover;
}
.news .news-menu-block {
  display: none;
  height: 60px;
}
.news .news-menu-block.menuBlock {
  display: block;
}
</style>
