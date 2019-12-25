<template>
  <ul class="fixed-right">
    <li class="handle-box" :class="{showPupop:active==0}" @click="show(0)">
      <div class="iconfont icon-gongzhonghao"></div>
      <p>微信公众号</p>
      <div class="handle-box-pupop">
        <img :src="require('@/assets/img/guanyuweijia/qrcode.jpg')">
      </div>
    </li>
    <li class="handle-box" :class="{showPupop:active==1}" @click="show(1)">
      <div class="iconfont icon-xiaochengxu"></div>
      <p>微信小程序</p>
      <div class="handle-box-pupop">
        <img :src="require('@/assets/img/guanyuweijia/xiaochenxu.png')">
      </div>
    </li>
    <li class="handle-box">
      <router-link to="" class="handle-box">
        <div class="iconfont icon-icon"></div>
        <p>联系我们</p>
      </router-link>
    </li>
    <li class="handle-box" @click="roll">
      <div class="iconfont icon-huidingbu"></div>
      <p>回到顶部</p>
    </li>
  </ul>
</template>
<script>
export default {
  methods: {
    show(i) {
      this.$emit("show", i)
    },
    roll() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  },
  props: ["active"]
}
</script>
<style scoped>
.fixed-right {
  position: fixed;
  bottom: 8%;
  right: 0;
  width: 80px;
  z-index: 1000;
  list-style: none;
  margin: 0;
}
.fixed-right li {
  margin-bottom: 1px;
}
.fixed-right .handle-box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: #fff;
  cursor: pointer;
  width: 100%;
}
.fixed-right p {
  margin: 4px 0 0 0;
  font-size: 12px;
  color: #666;
  padding: 0;
  font-weight: normal;
}
.fixed-right .handle-box-pupop {
  position: absolute;
  right: 90px;
  top: 50%;
  background: #fff;
  padding: 10px;
  width: 120px;
  transform: translateY(-50%) scale(0);
  transform-origin: right center;
  transition: all 0.5s;
}
.fixed-right .handle-box-pupop::after {
  content: "";
  position: absolute;
  right: -4%;
  top: 50%;
  margin-top: -6px;
  margin-left: -1px;
  border-left: 6px solid #fff;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
}
.fixed-right .handle-box:hover,
.fixed-right .handle-box.showPupop {
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
}
.fixed-right .handle-box.showPupop .handle-box-pupop {
  transform: translateY(-50%) scale(1);
}
.fixed-right .handle-box-pupop img {
  width: 100%;
  height: auto;
  vertical-align: top;
  border: 0;
}
.iconfont.icon-huidingbu,
.iconfont.icon-icon,
.iconfont.icon-xiaochengxu,
.iconfont.icon-gongzhonghao {
  font-size: 30px;
  color: #262525;
}
</style>