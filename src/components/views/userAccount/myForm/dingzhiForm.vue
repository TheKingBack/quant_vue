<template>
  <div>

	<nav-bar :navMenuItems="myAccountMenu"></nav-bar>

		<!-- <div style="height: 300px; border: 1px solid red;">个人账户</div> -->

		<div class="big-box">
      <div class="content contain">

        <userAccount-nav></userAccount-nav>

        <!-- 信息展示 -->
			<div class="prodect contain">
				<div class="prodectTop">
					<a class="myForm1" href="/MyAccount">我的订单</a>
					<a class="myForm2" href="javaScript:;">私人订制订单</a>
				</div>
				<ul class="chanpin contain">
					<li>
						<img src="../../../../assets/img/icon_zanwuxiaoxi.png" alt="">
						<div class="wenzi">暂时没有订单，赶紧去商城看看吧</div>
						<a href="javaScript:;">去信号商城</a>
					</li>
				</ul>
			</div>
			 
		</div>

     

		<footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import FooterBar from "@/components/layout/FooterBar";
import Global from "@/components/layout/Global";
import userAccountNav from "@/components/views/userAccount/userAccountNav";

export default {
  components: {
    NavBar,
    FooterBar,
    userAccountNav
  },
  data() {
    return {
      myAccountMenu: Global.getPageMenu("MyAccount")
    };
  },
  mounted: function() {},
  methods: {}
};
</script>

<style lang="less">
.big-box {
  // height: 600px;
  background-color: #f0f0f0;
}

.contain {
  width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 10px;
  // background-color: #f6f6f6;
}

.content {
  .banner .banner-one {
    color: #00aefc;
  }
  .banner .banner-two,
  .banner .banner-three,
  .banner .banner-four{
    color: #333;
  }

  //产品展示
  .prodect {
    overflow: hidden;
    height: 820px;
    overflow: hidden;
    .prodectTop {
      font-size: 16px;
      overflow: hidden;
      margin: 20px 5px;
      .myForm1,
      .myForm2 {
        display: block;
        color: #333;
        float: left;
        margin-right: 30px;
      }
      // .myNews1,.myNews2,.myNews3,.myNews4:hover{
      // 	color: #00aefc;
      // }
      .myForm1 {
        // display: block;
        color: #00aefc;
      }
    }
    .chanpin {
      width: 100%;
      height: 645px;
      // padding: 40px 60px;
      background-color: #fff;
      overflow: hidden;
      position: relative;
      li {
        position: relative;
        width: 270px;
        height: 188px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .wenzi {
          margin: 16px 0;
          font-size: 12px;
          color: #999;
        }
        a {
          display: block;
          width: 130px;
          height: 32px;
          border-radius: 6px;
          background-color: #00aefc;
          color: #fff;
          margin: 0 auto;
          text-align: center;
          line-height: 32px;
        }
      }
    }
  }
}
</style>

