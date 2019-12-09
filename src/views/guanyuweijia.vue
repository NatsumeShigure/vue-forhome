<template>
  <div class="about">
    <header-nav></header-nav>
    <div class="about-banner"></div>
    <div class="about-menu">
      <div class="swiper-wrapper">
        <router-link to="" v-for="(v,i) of swiperList" :key="i">{{v}}</router-link>
      </div>
    </div>
    <div class="about-article" id="0">
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
    <div class="about-article" id="1">
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
    <div class="about-article" id="2">
      <div class="about-vision">
        <div class="wp1400">
          <h3>品牌愿景</h3>
          <div class="vision-text">
            成为国内空间家居一线品牌
          </div>
        </div>
      </div>
    </div>
    <div class="about-article" id="3">
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
    <div class="about-article" id="4">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperList: ["品牌故事", "品牌介绍", "品牌愿景", "品牌定位", "品牌主张", "品牌设计理念", "品牌价值"]
    }
  },
  created() {
    let body = window.document.querySelector("body")
    body.style.overflow = "visible"
    body.style.background = "#f1f1f1"
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
  box-shadow: 0 0.02rem 0.1rem rgba(0, 0, 0, 0.02);
  border-top: 2px solid #f0efed;
  border-bottom: 1px solid #f0efed;
  box-sizing: border-box;
  overflow: hidden;
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
.title {
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
.img {
  width: 50%;
  overflow: hidden;
}
.img img {
  width: auto;
  height: 100% !important;
  vertical-align: top;
  border: 0;
}
.info {
  display: flex;
  align-items: center;
  padding: 30px 70px;
  width: 50%;
  box-sizing: border-box;
}
.info > div {
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
</style>