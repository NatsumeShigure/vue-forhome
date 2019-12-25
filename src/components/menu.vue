<template>
  <div class="menu" :class="{menuFixed}">
    <div class="swiper-wrapper">
      <router-link to="" :class="{on:index==i}" v-for="(v,i) of swiperList" :key="i" @click.native="point(i)">{{v}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    point(i) {
      this.$emit("point", i)
    }
  },
  props: ["menuFixed", "swiperList", "index"]
}
</script>
<style scoped>
.menu {
  position: relative;
  padding: 11px 40px 12px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.02);
  border-top: 2px solid #f0efed;
  border-bottom: 1px solid #f0efed;
  box-sizing: border-box;
  overflow: hidden;
}
.menu.menuFixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.swiper-wrapper {
  width: 100%;
  display: block;
  text-align: center;
}
.swiper-wrapper a {
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin: 0 10px;
  width: auto;
  min-width: 100px;
  height: 34px;
  line-height: 34px;
  padding: 0 18px;
  text-align: center;
  font-size: 16px;
  color: #333;
  border-radius: 34px;
  box-sizing: border-box;
  transition: all 0.3s;
}
.swiper-wrapper a.on {
  color: #000;
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
}
.swiper-wrapper a:hover {
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
  border-color: transparent;
  color: #000;
}
</style>