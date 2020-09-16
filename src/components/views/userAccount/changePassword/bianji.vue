<template>

	<div>
	 	<nav-bar :navMenuItems="myAccountMenu"></nav-bar>
		<div class="big-box">
      <!-- 中间版心部分 -->
      <div class="bianji-content contain">
        <!-- 上部导航栏部分 -->
        <div class="bianji-top">
          <router-link class="bianji-BJ" to = '/bianji'>编辑资料</router-link>
          <router-link class="bianji-GM" to = '/xiugaimima'>修改密码</router-link>
        </div>
        <!-- 中部内容部分 -->
        <div class="bianji-banner">
          <!-- 左侧部分 -->
          <div class="bianji-left">
            <!-- 用户昵称 -->
            <div class="nikename">
              <span>用户昵称</span><br>
              <input type="text" name="" placeholder="请输入要修改的昵称" v-model="userName"><br> 
            </div>
            <!-- 用户手机号 -->
            <div class="phoneNumber">
              <div class="errorWord">请输入正确的手机号</div>
              <div class="errorPrompt">×</div>
              <div class="XuGaiPhone" v-show="XuGaiPhone">修改</div>
              <span>手机号</span><br>
              <input type="phone" name="" placeholder="请输入要修改的手机号" v-model="userPhone"><br>
            </div>
            <!-- 发送验证码 -->
            <div class="phoneVerificationCode" v-show="PhoneVerificationCode">
              <span>验证码</span><br>
              <input type="text" name="" placeholder="请输入验证码" v-model="PhoneCode">
              <div class="bianji-yanzheng" v-show="show" @click="getVerifycode">获取验证码</div>
              <div class="bianji-yanzheng1" v-show="!show">{{count}} s</div>
              <br> 
            </div>
            <!-- 个人简介 -->
            <div class="PersonalProfile">
              个人简介(少于50字符)<br>
              <textarea name="" id="textarea" maxlength="50" cols="60" rows="5" placeholder="这个人很懒~啥也不想写" v-model="PersonalProfile"></textarea><br>
            </div>
            <!-- 是否绑定微信 -->
            <div class="wechat" v-show="Wechat">
              <div class="wechatLogo"></div>
              <div class="binding">已绑定微信</div>
            </div>
            <div class="wechat1" v-show="Wechat1">
              <div class="wechatLogo1"></div>
              <div class="Unbound">绑定微信</div>
            </div>
            <!-- 修改完毕提交按钮 -->
            <button @click = "Save">保存</button>
          </div>
          <!-- 右侧部分 -->
          <div class="bianji-right">
            <p>头像</p>
            <div class="bianji-bottom">
              <!-- 用户头像 -->
              <div class="bianji-touxiang">
                <img class="Image" :src="imageUrl" alt="">
              </div>
              <!-- 建议头像尺寸 -->
              <div class="bianji-quest">
                <p class="quest-one">建议：</s> 
                <p class="quest-one">尺寸：200*200px</p>
                <p class="quest-one">大小：小于10M</p>
                <p class="quest-one">格式：jpg/peg</p> 
              </div>
              <button>
                点击上传 
                <input
                ref="upfile"
                name="file"
                @change="upFile"
                type="file" id="upfile">
              </button>
            </div>			
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

export default {
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      myAccountMenu: Global.getPageMenu("MyAccount"),

      // 图片上传
      imageUrl: '/static/MyAccount/ChagePassword/default.png',

      // 修改的信息
      ID:'',
      userName:"",
      userPhone:"",
      PhoneCode:"",
      PersonalProfile:"",
      userData:[],

      //根据请求查看是否展示
      Wechat:true,
      Wechat1:false,
      PhoneVerificationCode:false,
      XuGaiPhone:true,


      // 验证码
      show: true,
      count: '',
      timer: null,
    };
  },
  mounted: function() {
    // 获取用户信息页面生成调用
    this.$nextTick(function() {
      this.GetBianJiData();
    });
  },
  methods: {
    // 点击获取验证码
    getVerifycode:function() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
          } else {
          this.show = true;
          clearInterval(this.timer);
          this.timer = null;
          }
        }, 1000)
      }
    },



    // 选择头像后触发的事件方法
    upFile () {
      // 1.得到要上传的文件
      const file = this.$refs.upfile.files[0]
      // 转换文件格式
      const avatarImage = new FormData();
      avatarImage.append('avatar', file);
      console.log(avatarImage);
      this.$http.post(Global.getRequestUrl() + "/user/update/avatar",
      avatarImage,
      {
        headers: Global.getRequestHeader()
      }
      ).then(function (resp) {
        resp = resp.body;
        console.log(resp);
        if(resp.success){
          this.imageUrl = resp.data;
        }else{
          console.error("更改用户头像失败！");
        }
      },function (error) {
        console.error("更改用户头像请求失败！");
      })
    },

    // 保存更改的信息
    Save:function() {
      var that = this;
      this.$http.post(Global.getRequestUrl() + "/user/reset",
        {
          "id":that.ID,
          "userName":that.userName,
          "userPhone":that.userPhone,
          "PhoneCode":that.PhoneCode,
          "PersonalProfile":that.PersonalProfile,
        },
        {
          emulateJSON: true
        }
        ).then(function(resp){
          resp = resp.data;
          if(resp.success) {

          }else{
            console.error("更改用户信息失败！");
            console.error(resp);
            alert(JSON.stringify(resp));
          }
        },function(error) {
            console.error("更改用户信息请求失败！");
            console.error(error);
            alert(JSON.stringify(error));
        });
    },

    // 获取用户信息
    GetBianJiData:function() {
      var that = this;
      this.$http.get(Global.getRequestUrl() + "/user/info",
        {
          emulateJSON: true
        }
        ).then(function(resp){
          resp = resp.body;
          if(resp.success) {
            if(code=="weixin"){

              if(photoNumber){
                this.userPhone = photoNumber;
              }
            }
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
//版心统一设置
.contain {
  width: 1200px;
  overflow: hidden;
  margin: 20px auto;
  box-sizing: border-box;
  padding-top: 10px;
}

//中间版心部分
.bianji-content{
  padding: 0 46px;
  background-color: #fff;
  //上部导航栏部分
  .bianji-top{
    border-bottom: 1px solid #e6e6e6;
    height: 58px;
    overflow: hidden;
    .bianji-BJ{
      width: 100px;
      height: 58px;
      line-height: 58px;
      float: left;
      font-size: 16px;
      color: #00aefc;
    }
    .bianji-GM{
      float: left;
      width: 100px;
      height: 58px;
      line-height: 58px;
      font-size: 16px;
      color: #333;
    }
  }
  //中部内容部分
  .bianji-banner{
    width: 100%;
    padding:25px 34px;
    //左侧部分
    .bianji-left{
      width: 50%;
      height: 530px;
      float: left;
      position: relative;
      .XuGaiPhone{
        font-size: 14px;
        color: #00aefc;
        cursor: pointer;
        position: absolute;
        top: 122px ;
        right: 20px;
      }
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
        top: 108px ;
        right: 48px;
        background-color: rgba(255,0,0,0.2);
      }
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
        top: 108px ;
        right: 210px;
        background-color: rgba(255,0,0,0.2);          
      }
      .bianji-yanzheng{
        cursor: pointer;
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
        top: 202px;
      }
      .bianji-yanzheng1{
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
        top: 202px;
      }
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
      #textarea{
        margin: 12px 0;
        border-radius: 8px;
        padding: 12px;
        box-sizing: border-box;
        background-color: #f5f5f5;
        color: #bdbdbd;
        font-size: 14px;
      }
      .wechat{
        height: 16px;
        margin: 10px 0 28px;
        .wechatLogo{
          width: 20px;
          height: 16px;
          background: url("/static/MyAccount/ChagePassword/icon_weixuanzhongweixindixiaxuanzhong.png") no-repeat;
          background-size: 100%;
          float: left;
        }
        .binding{
          float: left;
          margin-left: 12px;
          height: 16px;
          font-size: 14px;
          line-height: 16px;
          color: #999999;
        }
      }
      .wechat1{
        height: 16px;
        margin: 10px 0 28px;
        .wechatLogo1{
          width: 20px;
          height: 16px;
          background: url("/static/MyAccount/ChagePassword/icon_weixuanzhongweixindixia.png") no-repeat;
          background-size: 100%;
          float: left;
        }
        .Unbound{
          float: left;
          margin-left: 12px;
          height: 16px;
          font-size: 14px;
          line-height: 16px;
          color: #00aefc;
        }
      }
      
      button{
        width: 108px;
        height: 40px;
        cursor: pointer;
        background-color: #00aefc;
        color: #f5faff;
        border-radius: 10px;
        border:none;
        font-weight: bold;
        font-size: 16px;
      }
      span{
        font-size: 16px;
        font-weight: bold;
      }
    }
    .bianji-right{
      width: 50%;
      height: 530px;
      padding:0 106px;
      float: left;
      p{
        font-size: 16px;
        font-weight: bold;
      }
      .bianji-bottom{
        margin-top: 22px;
        .bianji-touxiang{
          width: 99px;
          height: 99px;
          margin-right: 26px;
          border-radius: 50%;
          border: 1px solid #00aefc;
          float: left;
          overflow: hidden;
          position: relative;
          .Image{
            width: 99px;
            height: 99px;
            border-radius: 50%;
            z-index: 999999;
          }
        }
      }
      .bianji-quest{
        padding-top: 8px;
        box-sizing: border-box;
        .quest-one{
          line-height: 1.5em;
          font-weight: normal;
          font-size: 14px;
          color: #333;
        }
      }
      button{
        margin-top: 20px;
        width: 108px;
        height: 40px;
        cursor: pointer;
        background-color: #00aefc;
        color: #f5faff;
        border-radius: 10px;
        border:none;
        font-weight: bold;
        font-size: 16px;
        position: relative;
        #upfile{
          width: 106px;
          height: 38px;
          cursor: pointer;
          border-radius: 10px;
          border:none;
          text-decoration: none;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }

}


</style>
