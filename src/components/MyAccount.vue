<template>
	<div>
	 	<nav-bar :navMenuItems="myAccountMenu"></nav-bar>
		<div class="big-box">
      <!-- 点击提现弹出的模态框 -->
      <div class="withdrawals">
        <!-- 中间白色内容部分 -->
        <div class="withdrawals-center">
          <!-- 提现模态框的顶部 -->
          <div class="withdrawals-top">
            提现
            <span class="dianjiguanbi" @click="CloseWithdrawals">×</span>
          </div>
          <!-- 模态框中部的提现提示部分 -->
          <div class="withdrawals-words">
            <div class="words-title">提现须知</div>
            <p class="words-article">1.提现时微信会收取0.01%的手续费，需要个人承担。</p>
            <p class="words-article">2.体现申请后，工作人员会进行审核，提现金额会在1-3工作日内到账。</p>
            <p class="words-article">3.提现暂时只能提现到微信账号中（请确保微信账号输入正确），其他渠道正在开发中。</p>
          </div>
          <!-- 提现金额 -->
          <div class="withdrawals-amount">
            <div class="amount-title">提现金额</div>
            <input class="amount-number" placeholder="最多可提现10000元" type="text">
            <div class="withdrawals-all">全部提现</div>
          </div>
          <!-- 输入微信号 -->
          <div class="withdrawals-weixin">
            <div class="weixin-title">微信号</div>
            <input class="amount-number" placeholder="请输入微信号" type="text">
          </div>
          <!-- 取消和提交按钮 -->
          <div class="withdrawals-button">
            <div class="button-left" @click="CloseWithdrawals">取消</div>
            <div class="button-right">提交</div>
          </div>
        </div>
      </div>
      <!-- 页面版心显示内容 -->
      <div class="content contain">
        <!-- 页面TOP显示内容 -->
        <div class="userNav-userTop">
          <!-- TOP的左边 -->
          <div class="userNav-left">
            <!-- 用户头像 -->
            <div class="userNav-touxiang">
              <img class="userNav-Head" :src="image" alt="">
            </div>
            <!-- 用户信息 -->
            <div class="userNav-user">
              <div class="userNav-username" v-text="username"></div>
              <div class="userNav-userautograph" v-text="PersonalitySignature"></div>
              <!-- <input type="text" disabled placeholder="个性签名空空的，快来写点什么吧~"> -->
              <div class="userNav-level">
                账户等级：<span v-text="userLevel"></span>
                <!-- 用户等级条（高） -->
                <div class="rankBar-high" style="display:block">
                  <span class="userNav-level-l"></span>
                  <span class="userNav-level-l"></span>
                  <span class="userNav-level-l"></span>
                </div>
                <!-- 用户等级条（中） -->
                <div class="rankBar-middle" style="display:none">
                  <span class="userNav-level-m"></span>
                  <span class="userNav-level-m"></span>
                </div>
                <!-- 用户等级条（低） -->
                <div class="rankBar-small" style="display:none">
                  <span class="userNav-level-s"></span>
                </div>
              </div>
              <button @click = 'bianjiziliao'>编辑资料</button>
            </div>
            <!-- 选择感兴趣的页面 -->
            <div class="userNav-item">
              <a class="userNav-item-a" href="javaScript:;">
                <span class="userNav-item-s"></span>
                投资研究
              </a>
              <a class="userNav-item-a" href="javaScript:;">
                <span class="userNav-item-s"></span>
                策略
              </a>
              <a class="userNav-item-a" href="javaScript:;">
                <span class="userNav-item-s"></span>
                模拟交易
              </a>
              <div class="userNav-item-a toNewsCenter" @click='NewsCenter' v-bind:class="{active:newscenter}">
                <span class="userNav-item-s"></span>
                信息中心
              </div>
            </div>
          </div>
          <!-- TOP的右边 -->
          <div class="userNav-right">
            <!-- 右边上部信息 -->
            <div class="userNav-one">
              <div class="userNav-a">账户余额</div>
              <div class="userNav-b">显示金额</div>
              <!-- 点击提现提示部分 -->
              <div class="MyPrompt" @click='openPrompt'></div>
              <div class="MyPrompt-center">
                  温馨提示：提现时微信会收取0.01%的手续费，需要个人承担
                  <div class="closeIt" @click='closePrompt'>我知道了</div>
                </div>
            </div>
            <!-- 账户余额 -->
            <div class="userNav-two"> <span v-text="manney"></span> 元</div>
            <!-- 体现按钮 -->
            <button @click='Withdrawals'>提现</button>
          </div>
        </div>
        <!-- 导航栏部分 -->
        <div class="userNave">
          <div class="userNav-banner">
            <div class="banner-div " @click='MyForm' v-bind:class="{active:myform}">我的订单</div>
            <div class="banner-div " @click='MyCollection' v-bind:class="{active:mycollection}">我的收藏</div>
            <div class="banner-div " @click='ShopCar' v-bind:class="{active:shopcar}">购物车</div>
            <div class="banner-div " @click='NewsCenter' v-bind:class="{active:newscenter}">信息中心</div>
            <div class="banner-div " @click='MyAPI' v-bind:class="{active:myapi}">我的API</div>
          </div>
          <!-- 我的订单 -->
          <div class="MyForm" v-if="myForm">
            <My-Form></My-Form>
          </div>
          <!-- 我的收藏 -->
          <div class="MyCollection" v-if="mycollection">
            <My-Collection></My-Collection>
          </div>
          <!-- 购物车 -->
          <div class="ShopCar" v-if="shopCar">
            <Shop-Car></Shop-Car>
          </div>
          <!-- 信息中心 -->
          <div class="NewsCenter" v-if="newsCenter">
            <News-Center></News-Center>
          </div>
          <!-- 我的API -->
          <div class="MyAPI" v-if="myAPI">
            <My-API></My-API>
          </div>
        </div>
      </div>
		</div>
	 	<footer-bar></footer-bar>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import FooterBar from "@/components/layout/FooterBar";
import Global from "@/components/layout/Global";

import MyForm from '@/components/views/userAccount/MyForm'
import MyCollection from '@/components/views/userAccount/MyCollection'
import ShopCar from '@/components/views/userAccount/ShopCar'
import NewsCenter from '@/components/views/userAccount/NewsCenter'
import MyAPI from '@/components/views/userAccount/MyAPI'

export default {
  components: {
    NavBar,
    FooterBar,
    MyForm,
    MyCollection,
    ShopCar,
    NewsCenter,
    MyAPI
  },
  data() {
    return {
      myAccountMenu: Global.getPageMenu("MyAccount"),

      //页面TOP需要的信息
      username:'不二咚',
      PersonalitySignature:"个性签名空空的，快来写点什么吧~",
      userLevel:'高',
      manney:'1000.00',
      image:'/static/MyAccount/MyAccount/default.png',


      // tab切换栏部分
      myForm:true,
      myCollection:false,
      shopCar:false,
      newsCenter:false,
      myAPI:false,

      myform:true,
      mycollection:false,
      shopcar:false,
      newscenter:false,
      myapi:false,
    };
  },
  mounted: function() {
    this.$nextTick(function() {
			this.GetMyAccountData();
		});
  },
  methods: {
    //点击编辑资料去往编辑资料页面
    bianjiziliao() {
      this.$router.push("/bianji");
    },

    // tab切换栏部分
    MyForm:function(){
      this.myForm = this.myform= true,
      this.myCollection = this.mycollection= false,
      this.shopCar = this.shopcar= false,
      this.newsCenter = this.newscenter= false,
      this.myAPI = this.myapi= false,
      $(this).addClass('active').siblings('div').removeClass('active');
		},
		MyCollection:function(){
      this.myForm = this.myform= false,
      this.myCollection = this.mycollection= true,
      this.shopCar = this.shopcar= false,
      this.newsCenter = this.newscenter= false,
      this.myAPI = this.myapi= false,
      $(this).addClass('active').siblings('div').removeClass('active');
		},
    ShopCar:function(){
      this.myForm = this.myform= false,
      this.myCollection = this.mycollection= false,
      this.shopCar = this.shopcar= true,
      this.newsCenter = this.newscenter= false,
      this.myAPI = this.myapi= false,
      $(this).addClass('active').siblings('div').removeClass('active');
		},
		NewsCenter:function(){
      this.myForm = this.myform= false,
      this.myCollection = this.mycollection= false,
      this.shopCar = this.shopcar= false,
      this.newsCenter = this.newscenter= true,
      this.myAPI = this.myapi= false,
      $(this).addClass('active').siblings('div').removeClass('active');
		},
    MyAPI(){
      this.myForm = this.myform= false,
      this.myCollection = this.mycollection= false,
      this.shopCar = this.shopcar= false,
      this.newsCenter = this.newscenter= false,
      this.myAPI = this.myapi= true,
      $(this).addClass('active').siblings('div').removeClass('active');
    },

    // 弹出提现提示部分
    openPrompt:function() {
      $('.prompt-center').fadeIn('1000');
    },
    closePrompt:function() {
      $('.prompt-center').fadeOut('1000');
    },

    // 打开提现功能
    Withdrawals: function () {
      var Height = $(window).height();
      var Width = $(window).width();
      $('.withdrawals').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
    },

    // 关闭提现
    CloseWithdrawals:function() {
      $('.withdrawals').fadeOut('1000');
    },

    // 发送请求获取数据
    GetMyAccountData: function() {
      this.$http.get(Global.getRequestUrl() + "/user/info",
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				resp = resp.body;
				if(resp.success) {
          if(resp.data.user.name){
            this.username = resp.data.user.name;
          }
          this.manney = resp.data.amount;
          this.image = resp.data.user.avatar;
          console.log("获取用户信息成功！");
          console.log(resp.data);
				}else {
					console.error("获取用户信息失败！");
				}
			}, function(error) {
				console.error("获取用户信息请求失败！");
				console.error(error);
			});
    },
  }
}
</script>

<style lang="less">
.big-box {
  background-color: #f0f0f0;
  // 提现功能的模态框
  .withdrawals{
    display: none;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99999;
    //中间白色内容部分
    .withdrawals-center{
      position: absolute;
      left: 50% ;
      top: 50% ;
      transform: translate(-50%,-50%);
      background-color: #fff;
      border-radius: 18px;
      width: 470px;
      height: 500px;
      //提现模态框的的顶部
      .withdrawals-top{
        width: 100% ;
        height: 60px;
        padding: 0 36px;
        border-bottom: 1px solid #dcdcdc;
        box-sizing: border-box;
        font-size: 18px;
        line-height: 60px;
        color: #333;
        //右上角的小×号
        .dianjiguanbi{
          color: #a1a1a1;
          font-size: 32px;
          position: absolute;
          top: 0px;
          right: 36px;
          cursor: pointer;
        }
      }
      //模态框中间体现提示部分
      .withdrawals-words{
        width: 100% ;
        height: 170px;
        padding: 0 50px;
        box-sizing: border-box;
        .words-title{
          text-align: center;
          margin:24px 0 12px 0;
          font-size: 18px;
          color: #14aaff;
        }
        .words-article{
          font-size: 15px;
          color: #b9b9b9;
          line-height: 1.5em;
        }
      }
      //提现金额
      .withdrawals-amount{
        width: 100% ;
        height: 58px;
        padding: 0 50px;
        box-sizing: border-box;
        position: relative;
        .amount-title{
          font-size: 16px;
          color: #333;
        }
        .amount-number{
          width: 100% ;
          border: none;
          border-bottom: 1px solid #dcdcdc;
          font-size: 14px;
          height: 42px;
        }
        .withdrawals-all{
          font-size: 14px;
          color: #14aaff ;
          position: absolute;
          top: 32px;
          right: 50px;
        }
      }
      //输入微信号
      .withdrawals-weixin{
        width: 100% ;
        height: 58px;
        padding: 0 50px;
        margin-top:24px;
        box-sizing: border-box;
        position: relative;
        .weixin-title{
          font-size: 16px;
          color: #333;
        }
        .amount-number{
          width: 100% ;
          border: none;
          border-bottom: 1px solid #dcdcdc;
          font-size: 14px;
          height: 42px;
        }
      }
      // 取消和提交按钮
      .withdrawals-button{
        width: 100% ;
        padding: 0 82px ;
        margin-top: 30px;
        box-sizing: border-box;
        .button-left,
        .button-right{
          cursor: pointer;
          width: 110px;
          height: 40px;
          font-size: 16px;
          text-align: center;
          line-height: 40px;
          border-radius: 8px;
        }
        .button-left{
          float: left;
          border: 1px solid #dcdcdc;
          color: #333;
        }
        .button-right{
          float: right;
          background: #14aaff;
          color: #fff;
        }
      }
    }
  }
}
//给需要的元素添加的类
.active{
  color: #00aefc;
}
//版心
.contain {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 20px;
}
//页面内容
.content {
  //页面TOP显示内容
  .userNav-userTop {
    width: 100%;
    height: 240px;
    padding: 0 46px 0 0;
    background-color: #fff;
    //TOP的左边
    .userNav-left {
      width: 874px;
      height: 100%;
      padding-left: 228px;
      float: left;
      position: relative;
      box-sizing: border-box;
      background-image: url("/static/MyAccount/MyAccount/icon_jinbenxinxi_beijing.png");
      background-repeat: no-repeat;
      //用户头像
      .userNav-touxiang {
        width: 122px;
        height: 122px;
        border-radius: 50%;
        background-color: #00aefc;
        position: absolute;
        left: 140px;
        top: 26px;
        overflow: hidden;
      }
      .userNav-Head {
        width: 122px;
        height: 122px;
      }
      //用户信息
      .userNav-user {
        width: 290px;
        height: 100%;
        padding: 42px 50px;
        float: left;
        box-sizing: border-box;
        .userNav-username {
          font-size: 18px;
          font-weight: bold;
          box-sizing: border-box;
        }
        .userNav-userautograph {
          // border: none;
          // outline: medium;
          width: 100% ;
          font-size: 12px;
          height: 42px;
          line-height: 42px;
          box-sizing: border-box;
          background-color: #fff;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        //用户等级
        .userNav-level {
          font-size: 14px;
          height: 50px;
          line-height: 50px;
          font-weight: bold;
          box-sizing: border-box;
          overflow: hidden;
          .rankBar-high,
          .rankBar-middle,
          .rankBar-small{
            float: right;
            padding-right: 22px;
            box-sizing: border-box;
            text-align: left;
            //用户等级条（高）
            .userNav-level-l {
              width: 19px;
              height: 6px;
              display: inline-block;
              background-color: yellowgreen;
              margin-left: 3px;
            }
            //用户等级条（中）
            .userNav-level-m {
              width: 19px;
              height: 6px;
              display: inline-block;
              background-color: #f5b55b;
              margin-left: 3px;
            }
            //用户等级条（低）
            .userNav-level-s {
              width: 19px;
              height: 6px;
              display: inline-block;
              background-color: #ec4343;
              margin-left: 3px;
            }
          }
          
        }
        button {
          width: 90px;
          height: 32px;
          border-radius: 10px;
          border: none;
          outline: medium;
          background-color: #00aefc;
          color: #f5faff;
          font-weight: bold;
          font-size: 12px;
        }
      }
      //选择感兴趣的页面
      .userNav-item {
        width: 320px;
        height: 100%;
        border-left: 1px dashed #ececec;
        float: right;
        box-sizing: border-box;
        padding: 40px 40px;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #f0f0f0;
          position: absolute;
          left: -10px;
          top: -10px;
        }
        &::after {
          content: "";
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: #f0f0f0;
          position: absolute;
          left: -10px;
          bottom: -10px;
        }
        .userNav-item-a {

          width: 118px;
          height: 80px;

          text-align: center;
          float: left;
          color: #333;
          cursor: pointer;
          font-size: 12px;
          &:nth-child(1) span {
            background-image: url("/static/MyAccount/MyAccount/icon_touziyamjiusuo.png");
            background-repeat: no-repeat;
          }
          &:nth-child(2) span {
            background-image: url("/static/MyAccount/MyAccount/icon_celv.png");
            background-repeat: no-repeat;
          }
          &:nth-child(3) span {
            background-image: url("/static/MyAccount/MyAccount/icon_monijiaoyi.png");
            background-repeat: no-repeat;
          }
          &:nth-child(4) span {
            background-image: url("/static/MyAccount/MyAccount/icon_xiaoxizhongxin.png");
            background-repeat: no-repeat;
          }
          .userNav-item-s {
            margin: 10px auto;
            display: block;
            width: 34px;
            height: 34px;
          }
        }
      }
    }
    //TOP的右边
    .userNav-right {
      width: 280px;
      height: 192px;
      margin-top: 24px;
      border-radius: 10px;
      border: 1px solid #eef3f5;
      box-sizing: border-box;
      float: left;
      background-image: url("/static/MyAccount/MyAccount/icon_yuer_beijing.png");
      background-repeat: no-repeat;
      padding: 38px 28px;
      //右边上部信息
      .userNav-one {
        width: 224px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        position: relative;
        div {
          float: left;
        }
        .userNav-a {
          font-size: 18px;
        }
        .userNav-b {
          font-size: 12px;
          margin-left: 18px;
          color: #00aefc;
        }
        // 点击提现提示部分
        .MyPrompt {
          cursor: pointer;
          width: 15px;
          height: 15px;
          float: right;
          background-image: url("/static/MyAccount/MyAccount/icon_jiner_gantanhao.png");
          background-repeat: no-repeat;
        }
        .MyPrompt-center{
          display: none;
          width: 196px;
          height: 136px;
          padding: 18px;
          text-align: left;
          line-height: 1.6em;
          color: #666666;
          font-size: 14px;
          background-color: #fff;
          box-shadow: 0 0 20px rgba(0,0,0,0.6);
          border-radius: 8px;
          box-sizing: border-box;
          position: absolute;
          top: 28px;
          right: -74px;
          &::before{
            content: '';
            display: block;
            position: absolute;
            top: -12px;
            right: 70px;
            border-left: 12px solid transparent;  
            border-right: 12px solid transparent;
            border-bottom: 12px solid #fff;
          }
          .closeIt{
            cursor: pointer;
            width: 100%;
            text-align: center;
            margin-top: 10px;
            margin-bottom: 6px;
            font-size: 12px;
            color: #00aefc;
          }
        }
      }
      //账户余额
      .userNav-two {
        width: 224px;
        height: 20px;
        margin: 20px 0;
        line-height: 20px;
        font-size: 18px;
      }
      //提现按钮
      button {
        width: 66px;
        height: 28px;
        border-radius: 10px;
        border: 1px solid #b4b4b4;
      }
    }
  }
  // 导航栏部分
  .userNav-banner {
    width: 632px;
    height: 48px;
    margin: 20px auto 0;
    border-radius: 24px;
    background-color: #fff;
    overflow: hidden;
    .banner-div{
      display: block;
      float: left;
      width: 126px;
      height: 100%;
      line-height: 48px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>

