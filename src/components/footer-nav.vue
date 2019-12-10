<template>
  <div class="index-footer">
    <section class="footer">
      <div class="footer-wrap">
        <div class="footer-nav">
          <dl v-for="(v,i) of navList" :key="i">
            <dt>
              <router-link to="">{{v.dt}}</router-link>
            </dt>
            <dd v-for="(v,i) of v.dd" :key="i">
              <router-link to="">{{v}}</router-link>
            </dd>
          </dl>
        </div>
        <div class="footer-contect">
          <router-link to="" class="footer-logo">
            <img src="/img/footer/logo2.png">
          </router-link>
          <div>400-653-8038</div>
          <p>全国免费咨询热线</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          dt: "关于唯家",
          dd: ["品牌故事", "品牌介绍", "品牌愿景", "品牌定位", "品牌主张", "品牌设计理念", "品牌价值"]
        }, {
          dt: "新闻中心",
          dd: ["品牌资讯", "促销活动", "媒介报道", "经销商专区"]
        }, {
          dt: "产品中心",
          dd: ["产品价值", "ADMON阿德蒙系列", "BURANO布拉诺系列"]
        }, {
          dt: "品牌服务",
          dd: ["服务理念", "空间设计师服务", "五包守护家服务", "爱家服务承诺"]
        }, {
          dt: "招商加盟",
          dd: ["招商政策", "加盟细则", "招商区域", "门店形象"]
        }, {
          dt: "联系我们",
          dd: ["门店查询", "加入我们", "意见反馈"]
        }
      ]
    }
  }
}
</script>
<style scoped>
.index-footer {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 350px;
  padding-top: 0;
  background: #2a2929;
}
.footer {
  padding: 58px 0 38px;
  background-color: #2a2929;
}
.footer-wrap {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
.footer-nav {
  -webkit-box-flex: 1;
  flex: 1;
  display: flex;
  margin-right: 40px;
}
.footer-nav dl {
  padding: 0 8px;
  min-width: 140px;
  text-align: center;
  border-right: 1px solid #353434;
  box-sizing: border-box;
  font-weight: normal;
  margin: 0;
}
.footer-nav dl:first-child {
  border-left: 1px solid #353434;
}
.footer-nav dt {
  padding-bottom: 8px;
  line-height: 16px;
  margin: 0px;
  text-align: center;
}
.footer-nav dt a {
  font-size: 16px;
  color: #c8c2b6;
  text-decoration: none;
}
.footer-nav dd {
  margin: 14px auto 0;
  font-weight: normal;
  padding: 0px;
}
.footer-nav dd a {
  font-size: 13px;
  color: #928f8b;
  text-decoration: none;
}
.footer-nav dd a:hover {
  color: #f6efdf;
}
.footer-contect {
  width: 252px;
  text-align: center;
}
.footer-logo {
  display: block;
  padding-bottom: 20px;
  margin-bottom: 18px;
  border-bottom: 1px solid #353434;
  height: 57px;
}
.footer-logo img {
  max-width: 100%;
}
.footer-contect > div {
  font-size: 37px;
  color: #dcd9d2;
}
.footer-contect > p {
  margin: 4px -20px 0 0;
  font-size: 14px;
  color: #696969;
  letter-spacing: 20px;
}
</style>