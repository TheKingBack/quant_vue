<template>

	<div>
	 	<nav-bar :navMenuItems="myAccountMenu"></nav-bar>
	 	<!-- <div style="height: 300px; border: 1px solid red;">个人账户</div> -->
		<div class="big-box">
      <!-- 中间版心部分 -->
      <div class="gaimima-content contain">
        <!-- 上部导航栏部分 -->
        <div class="gaimima-top">
            <router-link class="gaimima-BJ" to = '/bianji'>编辑资料</router-link>
            <router-link class="gaimima-GM" to = '/xiugaimima'>修改密码</router-link>
        </div>
        <!-- 中部内容部分 -->
        <div class="gaimima-banner">
          <!-- logo图片 -->
          <img class="gaimima-minLogo" src="/static/MyAccount/ChagePassword/minLogo.png" alt="">
          <br>
          <!-- 用户手机号 -->
          <span>手机号</span>
          <br>
          <input type="phone" name="" placeholder="请输入绑定的手机号" v-model="userPhone">
          <!-- 当手机号错误时 -->
          <div class="errorWord">请输入正确的手机号</div>
          <div class="errorPrompt">×</div>
          <br>
          <!-- 填写验证码 -->
          <span>验证码</span>
          <br>
          <input type="text" name="" placeholder="请输入验证码" v-model="PhoneCode">
          <!-- 验证码倒计时 -->
          <div class="gaimima-yanzheng" @click="GetVerificationCode" v-show="VerificationCode">获取验证码</div>
          <div class="gaimima-yanzheng1" v-show="!VerificationCode">{{CountDown}}s</div>
          <br>
          <!-- 填写新密码 -->
          <span>新密码</span>
          <br>
          <input type="password" name="" placeholder="请输入新密码" v-model="newPassWord">
          <br>
          <!-- 点击提交 -->
          <button @click = "Save">保　存</button>
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


export default {
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      myAccountMenu: Global.getPageMenu("MyAccount"),

      // 修改密码的信息
      ID:'',
      userPhone:"",
      PhoneCode:"",
      newPassWord:"",
      userData:[],

      // 获取验证码倒计时
      VerificationCode:true,
      CountDown:"",
      timer: null,

    };
  },
  mounted: function() {
    // 页面生成调用
    this.$nextTick(function() {
      // this.GetGaiMiMaData();
    });
  },
  methods: {
    // 获取验证码
    GetVerificationCode:function(){
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.CountDown = TIME_COUNT;
        this.VerificationCode = false;
        this.timer = setInterval(() => {
        if (this.CountDown > 0 && this.CountDown <= TIME_COUNT) {
          this.CountDown--;
          } else {
          this.VerificationCode = true;
          clearInterval(this.timer);
          this.timer = null;
          }
        }, 1000)
      };
      var that = this;
      this.$http.post(Global.getRequestUrl() + "/user/verifycode",
        {
          "mobile":that.userPhone,
        },
        {
          headers: Global.getRequestHeader()
        }
        ).then(function(resp){
          resp = resp.data;
          if(resp.success) {
            console.log("验证码发送成功！")
          }else{
            console.error("验证码发送失败！");
            console.error(resp);
            // alert(JSON.stringify(resp));
          }
        },function(error) {
            console.error("验证码发送请求失败！");
            console.error(error);
            // alert(JSON.stringify(error));
      });
    },

    // 保存要更改的数据
    Save:function () {
      var that = this;
      this.$http.post(Global.getRequestUrl() + "/user/reset",
        {
          "verifycode":that.PhoneCode,
          "password":that.newPassWord,
        },
        {
          headers: Global.getRequestHeader()
        }
        ).then(function(resp){
          resp = resp.body;
          if(resp.success) {
            console.error("更改用户密码成功！");
          }else{
            console.error("更改用户密码失败！");
            console.error(resp);
            // alert(JSON.stringify(resp));
          }
        },function(error) {
            console.error("更改用户密码请求失败！");
            console.error(error);
            // alert(JSON.stringify(error))
      });
    },

    // 获取用户信息
    GetGaiMiMaData:function() {
      var that = this;
      this.$http.get(Global.getRequestUrl() + "/user/reset",
        {
          params:{
            "id":that.ID
          },
          headers: Global.getRequestHeader()
        }
        ).then(function(resp){
          resp = resp.body;
          if(resp.success) {
            
          }else{
            console.error("获取用户信息失败！");
            console.error(resp);
            // alert(JSON.stringify(resp));
          }
        },function(error) {
            console.error("获取用户信息请求失败！");
            console.error(error);
            // alert(JSON.stringify(error));
        });
    },
  }

}
</script>

<style lang="less" scoped>
.big-box {
  background-color: #f0f0f0;
}
//中间版心统一设置
.contain {
  width: 1200px;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 10px;
}

//中间版心部分
.gaimima-content{
  padding: 0 46px;
  margin:20px auto;
  background-color: #fff;
  //上部导航栏部分
  .gaimima-top{
    border-bottom: 1px solid #e6e6e6;
    height: 58px;
    overflow: hidden;
    .gaimima-BJ{
      width: 100px;
      height: 58px;
      line-height: 58px;
      float: left;
      font-size: 16px;
      color: #333;
    }
    .gaimima-GM{
      float: left;
      width: 100px;
      height: 58px;
      line-height: 58px;
      font-size: 16px;
      color: #00aefc;
    }
  }
  //中部内容部分
  .gaimima-banner{
    width: 496px;
    margin: 62px auto;
    position: relative;
    //错误文字提示（当手机号错误时）
    .errorWord{
      display: none;
      width: 160px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 6px;
      font-size: 14px;
      color: rgba(255, 0, 0, 1);
      position: absolute;
      top: 60px ;
      right: 48px;
      background-color: rgba(255,0,0,0.2);
    }
    //错误提示（当手机号错误时）
    .errorPrompt{
      display: none;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      border-radius: 6px;
      font-size: 32px;
      color: rgba(255,0,0,1);
      position: absolute;
      top: 60px ;
      right: 210px;
      background-color: rgba(255,0,0,0.2);          
    }
    //logo图片
    .gaimima-minLogo{
        display: block;
        margin: 0 auto;
    }
    //验证码倒计时
    .gaimima-yanzheng{
      width: 86px;
      height: 28px;
      border-radius: 10px;
      background-color: #00aefc;
      color: #f5faff;
      border:none;
      font-weight: bold;
      font-size: 12px;
      text-align: center;
      line-height: 28px;
      position: absolute;
      right: 0;
      top: 140px;
      cursor: pointer;
    }
    .gaimima-yanzheng1{
      width: 86px;
      height: 28px;
      border-radius: 10px;
      background-color: #c8c8c8;
      color: #f5faff;
      border:none;
      font-weight: bold;
      font-size: 12px;
      text-align: center;
      line-height: 28px;
      position: absolute;
      right: 0;
      top: 140px;
    }
    //所有输入框
    input{
      margin-bottom: 30px;
      border: none;
      outline: medium;
      width: 100%;
      height: 40px;
      font-size: 14px;
      line-height: 40px;
      border-bottom: 1px solid #dcdcdc;
    }
    //提交按钮
    button{
      width: 144px;
      height: 40px;
      background-color: #00aefc;
      color: #f5faff;
      border-radius: 10px;
      border:none;
      font-weight: bold;
      font-size: 16px;
      display: block;
      margin: 0 auto;
    }
    span{
      font-size: 16px;
      font-weight: bold;
    }
  }
}


</style>
