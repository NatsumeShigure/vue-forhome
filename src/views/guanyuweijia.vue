<template>
  <div class="about">
    <div class="about-banner"></div>
    <div class="about-menu" :class="fixedChange">
      <div class="swiper-wrapper">
        <router-link to="" :class="{on:index==i}" v-for="(v,i) of swiperList" :key="i" @click.native="point(i)">
          {{v}}
        </router-link>
      </div>
    </div>
    <div class="about-menu-block" :class="blockChange">&nbsp;</div>
    <header-sidebar :fixedChange="fixedChange"></header-sidebar>
    <div class="about-article">
      <div class="about-story">
        <div class="wp1400">
          <div class="about-story-box">
            <div class="info-box">
              <h3 class="about-title">品牌故事<span><img src="/img/guanyuweijia/tag1.png"></span>
              </h3>
              <div class="p">
                <p>FORHOME唯家承袭20世纪欧洲（德国）的现代设计精髓，将艺术与匠心结合，秉承“少即是多”的黄金设计法则，在海外与国内顶级工匠的精心打磨下，通过不同形态与材质的碰撞，以设计、材质、颜色和功能的完美结合，创造具有想象力的生活空间，更使艺术全面而整体地介入当代家居生活。让身处居室空间的每一个时刻，都感觉简单舒适、优雅安宁、和谐自然。</p>
                <p>唯心之栖息，为家之所处。FORHOME唯家，让爱回家。</p>
              </div>
            </div>
            <div class="img-box">
              <img src="/img/guanyuweijia/about1.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-article">
      <div class="about-introduct">
        <div class="wp1400">
          <div class="about-introduct-box">
            <div class="info-box">
              <h3 class="about-title">品牌介绍<span><img src="/img/guanyuweijia/tag1.png"></span></h3>
              <div class="p">
                <p>FORHOME唯家，是香江集团基于30余年家具品牌运营经验及家居美学研究沉淀，以“极简主义”家居设计和生活方式为导向，创立的空间家居品牌。唯家品牌以极简主义设计为切入点，专注空间整体风格及配套，专业为用户打造品质、舒适的居家空间。向用户传达极简主义的设计理念，倡导化繁为简、回归自然的生活方式。</p>
              </div>
            </div>
            <div class="img-box">
              <img src="/img/guanyuweijia/about2.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-article">
      <div class="about-vision">
        <div class="wp1400">
          <h3>品牌愿景</h3>
          <div class="vision-text">
            成为国内空间家居一线品牌
          </div>
        </div>
      </div>
    </div>
    <div class="about-article">
      <div class="about-position">
        <div class="wp1400">
          <div class="about-position-box">
            <h3 class="title">品牌定位</h3>
            <div class="title-bottom">
              <span>极简主义空间家居</span>
            </div>
            <ul class="product-value-list">
              <li>
                <div class="img">
                  <img src="/img/guanyuweijia/pro1.jpg">
                </div>
                <div class="info">
                  <div>
                    <h3>极简主义</h3>
                    <div class="p">
                      以极简主义设计语言，赋予家居简单的美感，给家居空间留白、给自我更多空间
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="img">
                  <img src="/img/guanyuweijia/pro2.jpg">
                </div>
                <div class="info">
                  <div>
                    <h3>空间家居</h3>
                    <div class="p">
                      思考如何通过家居的设计及搭配，在有限的家居空间中，让生活、设计与爱无限延伸
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="about-article">
      <div class="about-assertion">
        <div class="wp1400">
          <div class="about-story-box">
            <div class="info-box">
              <h3 class="about-title">品牌主张<span><img src="/img/guanyuweijia/tag1.png"></span></h3>
              <div class="p">
                <div class="about-h4">让爱回家</div>
                <p>以极简的设计语言，赋予家具简单质朴的灵魂，让家具作为家庭的一部分，为家庭带来舒适与平和——让爱回家。</p>
              </div>
            </div>
            <div class="img-box">
              <img src="/img/guanyuweijia/about4.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-article">
      <div class="about-design">
        <div class="wp1400">
          <div class="about-introduct-box">
            <div class="info-box">
              <h3 class="about-title">品牌设计理念<span><img src="/img/guanyuweijia/tag1.png"></span>
              </h3>
              <div class="p">
                <div class="about-h4">极简主义风尚</div>
                <p>遵循少即是多（less is more）的黄金设计法则，用最少的表达赋予空间更多的想象，满足当代人居对于家居设计自我、自由、极简风格的追求。</p>
                <div class="about-h4">独创空间美学体系</div>
                <p>依托专业的空间设计师团队，利用唯家的家具产品和配饰，为消费者提供涵盖近百款主题产品、5000多种国际家居流行配色的四大空间体系（客厅、餐厅、卧室、书房）产品搭配设计方案。</p>
              </div>
            </div>
            <div class="img-box">
              <img src="/img/guanyuweijia/about5.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-article">
      <div class="about-value">
        <div class="wp1400">
          <div class="service-title">
            <h3>品牌价值</h3>
            <div class="tag">
              <img src="/img/guanyuweijia/tag1.png">
            </div>
          </div>
          <ul class="about-value-list">
            <li v-for="(v,i) of valueList" :key="i">
              <div class="box">
                <div class="img">
                  <img :src="v.src" alt="">
                </div>
                <div class="info">
                  <div class="info-box">
                    <div class="title">{{v.title}}</div>
                    <div>{{v.p}}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer-nav></footer-nav>
    <ul class="fixed-right">
      <li class="handle-box" :class="{showPupop:active==0}" @click="show(0)">
        <div class="iconfont icon-gongzhonghao"></div>
        <p>微信公众号</p>
        <div class="handle-box-pupop">
          <img src="/img/guanyuweijia/qrcode.jpg">
        </div>
      </li>
      <li class="handle-box" :class="{showPupop:active==1}" @click="show(1)">
        <div class="iconfont icon-xiaochengxu"></div>
        <p>微信小程序</p>
        <div class="handle-box-pupop">
          <img src="/img/guanyuweijia/xiaochenxu.png">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperList: ["品牌故事", "品牌介绍", "品牌愿景", "品牌定位", "品牌主张", "品牌设计理念", "品牌价值"],
      body: window.document.querySelector("body"),
      valueList: [
        {
          src: "/img/guanyuweijia/about6.jpg",
          title: "极简主义的设计价值",
          p: "以化繁为简的家居美学为设计核心，承袭经典意式经典设计美学，专注于极简主义的产品及空间设计。"
        }, {
          src: "/img/guanyuweijia/about7.jpg",
          title: "追求极致的产品价值",
          p: "关注产品品质及细节，对产品选材及工艺进行严格把关，将艺术与技术完美结合。"
        }, {
          src: "/img/guanyuweijia/about8.jpg",
          title: "专业全面的服务价值",
          p: "在满足家居设计、送货、安装、售后一站式配套服务需求的同时，为消费者提供一对一专业家居设计指导的增值服务。"
        }, {
          src: "/img/guanyuweijia/about9.jpg",
          title: "关注情感的精神价值",
          p: "关注现代人居生活状态，以极简设计，倡导极简主义的生活方式，引导消费者关注自身、关注家居及家庭。"
        }
      ],
      fixedChange: {
        menuFixed: false,
      },
      blockChange: {
        menuBlock: false
      },
      index: 0,
      active: null
    }
  },
  methods: {
    point(i) {
      switch (i) {
        case 0:
          window.scrollTo(0, 1031)
          break;
        case 1:
          window.scrollTo(0, 1651)
          break;
        case 2:
          window.scrollTo(0, 2271)
          break;
        case 3:
          window.scrollTo(0, 2651)
          break;
        case 4:
          window.scrollTo(0, 3391)
          break;
        case 5:
          window.scrollTo(0, 4011)
          break;
        case 6:
          window.scrollTo(0, 4631)
          break;
      }
      this.index = i
    },
    show(i) {
      this.active = this.active == i ? null : i
    },
    roll() {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  },
  created() {
    this.body.style.overflow = "visible";
    this.body.style.background = "#f1f1f1";
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop
      this.fixedChange.menuFixed = scrollTop >= 970 ? true : false
      this.blockChange.menuBlock = scrollTop >= 970 ? true : false
    });
  }
}
</script>
<style scoped>
.about {
  position: relative;
}
.about-banner {
  position: relative;
  width: 100%;
  height: 0;
  background: url(/img/guanyuweijia/20190806200341_362.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  padding-bottom: 51%;
}
.about-menu {
  position: relative;
  padding: 11px 40px 12px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.02);
  border-top: 2px solid #f0efed;
  border-bottom: 1px solid #f0efed;
  box-sizing: border-box;
  overflow: hidden;
}
.about-menu.menuFixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.about-menu-block {
  display: none;
  height: 60px;
}
.about-menu-block.menuBlock {
  display: block;
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
.about-article {
  font-size: 16px;
  line-height: 36px;
  color: #727272;
}
.about-story {
  background: #fff;
  padding: 100px 0;
  overflow: hidden;
}
.wp1400 {
  max-width: 1400px;
  margin: 0 auto;
}
.about-story-box {
  display: flex;
  height: 420px;
}
.about-story-box .info-box {
  height: 378px;
  padding-right: 70px;
  padding-top: 42px;
  flex: 1;
}
.about-title {
  margin: 0 0 26px 0;
  font-size: 34px;
  color: #000;
  padding: 0;
  font-weight: normal;
  line-height: normal;
}
.about-title span {
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  margin: -4px 0 0 13px;
  width: 50px;
  height: 26px;
  text-align: center;
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
  border-radius: 4px;
}
.img-box {
  width: 700px;
  height: 420px;
}
.img-box img {
  width: 100%;
  height: auto;
}
.p {
  color: #666;
}
.p p {
  font-weight: normal;
  margin: 0;
}
.about-introduct {
  padding: 100px 0;
  overflow: hidden;
  background: #f1f1f1;
}
.about-introduct-box {
  display: flex;
}
.about-introduct-box .info-box {
  order: 2;
  padding-left: 70px;
  padding-top: 42px;
  height: 378px;
  flex: 1;
}
.about-vision {
  padding: 90px 0 160px;
  min-height: 130px;
  text-align: center;
  background: url(/img/guanyuweijia/about3.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
}
.wp1400 > h3 {
  font-size: 34px;
  color: #fff;
  font-weight: 300;
  margin: 0;
  padding: 0;
  line-height: normal;
}
.wp1400 .vision-text {
  margin-top: 20px;
  font-size: 40px;
  color: #d9b765;
  font-weight: 300;
}
.about-position {
  background: #fff;
  height: 740px;
}
.about-position-box {
  padding: 50px 48px 0;
  transform: translateY(-100px);
  background: #fff;
}
.about-position-box .title {
  text-align: center;
  font-size: 38px;
  color: #000;
  margin: 0;
  padding: 0;
  font-weight: normal;
  line-height: normal;
}
.title-bottom {
  margin-top: 15px;
  text-align: center;
  font-size: 20px;
  color: #412d2d;
}
.title-bottom span {
  position: relative;
  display: inline-block;
  vertical-align: top;
  padding: 0 40px;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
  letter-spacing: 2px;
  border-radius: 40px;
}
.title-bottom span::after,
.title-bottom span::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  width: 5px;
  height: 1px;
  background: #412d2d;
}
.title-bottom span::after {
  margin-left: 15px;
}
.title-bottom span::before {
  margin-right: 15px;
}
.product-value-list {
  margin-top: 55px;
  list-style: none;
  padding: 0;
}
.product-value-list li {
  display: flex;
  background: #f0efed;
}
.product-value-list li:first-child {
  margin-bottom: 30px;
}
.product-value-list li .img {
  width: 50%;
  overflow: hidden;
}
.img img {
  width: auto;
  height: 100% !important;
  vertical-align: top;
  border: 0;
}
.product-value-list li .info {
  display: flex;
  align-items: center;
  padding: 30px 70px;
  width: 50%;
  box-sizing: border-box;
}
.product-value-list li .info > div {
  height: 111px;
}
.product-value-list li div h3 {
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #333;
  padding: 0;
  font-weight: normal;
  line-height: normal;
}
.product-value-list li .p {
  color: #727272;
}
.about-assertion {
  padding: 100px 0;
  overflow: hidden;
  background: #f1f1f1;
}
.about-h4 {
  margin-bottom: 6px;
  font-size: 24px;
  color: #333;
}
.p > div:nth-child(3) {
  margin-top: 25px;
}
.about-design {
  background: #fff;
  padding: 100px 0;
  overflow: hidden;
  height: 420px;
}
.about-design .about-introduct-box .info-box {
  padding-top: 24px;
}
.about-value {
  padding: 65px 0 100px;
  height: 609px;
}
.service-title {
  margin-bottom: 30px;
  text-align: center;
}
.service-title h3 {
  font-size: 34px;
  color: #000;
  margin: 0;
  padding: 0;
  font-weight: normal;
  line-height: normal;
}
.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px auto 0;
  width: 50px;
  height: 26px;
  background: linear-gradient(90deg, #dab866 10%, #aa8f4c 100%);
  border-radius: 4px;
}
.tag img {
  height: 16px;
  max-width: 100%;
}
.about-value-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
.about-value-list li {
  position: relative;
  width: 25%;
  height: 0;
  padding-bottom: 500px;
}
.about-value-list li:nth-child(2n) {
  background: #fdf9f6;
}
.about-value-list li:not(:nth-child(2n)) {
  background: #fff;
}
.about-value-list li:not(:nth-child(2n)) .img {
  order: 2;
}
.about-value-list .img {
  flex: 0 0 50%;
}
.about-value-list .img img {
  width: 100%;
  height: 100%;
}
.box {
  position: absolute;
  top: 0%;
  left: 0%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.about-value-list .info {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 32px 40px;
  overflow: hidden;
}
.about-value-list .info-box {
  width: 100%;
  max-height: 100%;
  overflow: hidden;
}
.about-value-list .title {
  margin-bottom: 14px;
  line-height: 28px;
  font-size: 20px;
  color: #333;
}
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