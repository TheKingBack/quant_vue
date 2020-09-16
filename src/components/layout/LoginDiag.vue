<template>
    <div>
        <div style="width: 300px; margin: 0 auto; padding: 30px 0px;backgroundColor:#fff;">
            <!-- login area -->
            <div id="login">
                <div>
                    <div>手机号</div>
                    <div style="margin-top: 10px;"><el-input v-model="login.phone" placeholder="请输入手机号"></el-input></div>
                </div>
                <div style="margin-top: 28px;">
                    <div>密码</div>
                    <div style="margin-top: 10px;"><el-input v-model="login.password" @keyup.enter.native="loginHandler()" type="password" placeholder="请输入密码"></el-input></div>
                </div>
                <div style="margin-top: 40px;">
                    <el-button type="primary" size="large" style="width: 300px;" @click="loginHandler()">登陆</el-button>
                </div>
                <div style="margin-top: 14px; position: relative; color: #14AAFF;">
                    <el-button type="text" @click="showResetPwd()">忘记密码</el-button>
                    <el-button type="text" style="position: absolute; right: 0px;" @click="showSignUp()">立即注册</el-button>
                </div>
                <div style="margin-top: 34px; color: #666666; text-align: center;">
                    <div>
                        <hr class="login-separator" />
                        使用第三方登陆
                        <hr class="login-separator" />
                    </div>
                    <div @click="OpenDimensional" style="margin-top: 24px;">
                        <img src="/static/Login/wechat.png">
                    </div>
                </div>
            </div>
            <!-- password reset area -->
            <div id="resetPwd" style="display: none;">
                <div>
                    <div>手机号</div>
                    <div style="margin-top: 10px;"><el-input v-model="resetPwd.phone" placeholder="请输入手机号"></el-input></div>
                </div>
                <div style="margin-top: 28px;">
                    <div>验证码</div>
                    <div style="margin-top: 10px;">
                      <el-input v-model="resetPwd.verifCode" placeholder="请输入验证码" style="width: 190px;"></el-input>
                      <el-button type="primary" style="display: inline-block;" @click="getVerifCode('reset')">获取验证码</el-button>
                    </div>
                </div>
                <div style="margin-top: 28px;">
                    <div>新密码</div>
                    <div style="margin-top: 10px;"><el-input v-model="resetPwd.password" type="password" placeholder="请输入新密码"></el-input></div>
                </div>
                <div style="margin-top: 40px;">
                    <el-button type="primary" size="large" style="width: 300px;" @click="resetPwdHandler()">重置</el-button>
                </div>
                <div style="margin-top: 16px;">
                    <el-button size="large" style="width: 300px;" @click="showLogin()">立即登陆</el-button>
                </div>
            </div>
            <!-- new account signup area -->
            <div id="signup" style="display: none;">
                <div>
                    <div>手机号</div>
                    <div style="margin-top: 10px;"><el-input v-model="signup.phone" placeholder="请输入手机号"></el-input></div>
                </div>
                <div style="margin-top: 28px;">
                    <div>验证码</div>
                    <div style="margin-top: 10px;">
                      <el-input v-model="signup.verifCode" placeholder="请输入验证码" style="width: 190px;"></el-input>
                      <el-button type="primary" style="display: inline-block;" @click="getVerifCode('signup')">获取验证码</el-button>
                    </div>
                </div>
                <div style="margin-top: 28px;">
                    <div>密码</div>
                    <div style="margin-top: 10px;"><el-input v-model="signup.password" type="password" placeholder="请输入密码"></el-input></div>
                </div>
                <div style="margin-top: 28px;">
                    <div>确认密码</div>
                    <div style="margin-top: 10px;"><el-input v-model="signup.password2" type="password" placeholder="请再次输入密码"></el-input></div>
                </div>
                <div style="margin-top: 40px;">
                    <el-button type="primary" size="large" style="width: 300px;" @click="registerHandler()">注册</el-button>
                </div>
                <div style="margin-top: 16px;">
                    <el-button size="large" style="width: 300px;" type="text" @click="showLogin()">已有账号，立即登陆</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Global from "@/components/layout/Global"

export default {
  data () {
      return {
        CLocation:"",

        login: {
            phone: "",
            password: ""
        },
        resetPwd: {
            phone: "",
            verifCode: "",
            password: ""
        },
        signup: {
            phone: "",
            verifCode: "",
            password: "",
            password2: ""
        }
      
      }
  },
//   created:function(){
//       this.Getlocation();
//   },

  methods: {

    // 弹出模态框
	OpenDimensional: function() {
        this.$http.get(Global.getRequestUrl() + "/user/login/wechat")
        .then(function(resp){
            console.log(resp);
            var resp = resp.body;
            console.log(resp);
            if(resp.success){
                console.log("获取二维码成功！");
                window.location.href = resp.data;
            }else {
                console.log("获取二维码失败！");
                console.log("失败状态码是：" + resp.code + "原因：" + resp.msg);
            }
            this.DimensionalCode = resp.data;
        },function(error){
            console.log("获取二维码请求失败！");
            console.log("失败状态码是：" + error.code + "原因：" + error.msg);
        });
	},

      Getlocation:function(CL){
          this.CLocation = CL;
        //   console.log(this.CLocation);
      },
      showLogin: function() {
          document.getElementById("login").style.display = "block";
          document.getElementById("resetPwd").style.display = "none";
          document.getElementById("signup").style.display = "none";
      },
      showResetPwd: function() {
          document.getElementById("login").style.display = "none";
          document.getElementById("resetPwd").style.display = "block";
          document.getElementById("signup").style.display = "none";
      },
      showSignUp: function() {
          document.getElementById("login").style.display = "none";
          document.getElementById("resetPwd").style.display = "none";
          document.getElementById("signup").style.display = "block";
      },
      loginHandler: function() {
          var _phone = this.login.phone;
          var _pwd = this.login.password;
          var isValid = this.verifyUserInputs(_phone, _pwd, _pwd, null);
          if(!isValid) {
            return;
          }
          //send request to back end
          this.$http.post(Global.getRequestUrl() + "/user/login", 
            {
              mobile: _phone,
              password: _pwd
            },
            {
              emulateJSON: true
            }
          ).then(function(resp) {
            // console.log(resp);
            console.log("---------------------------------------------")
            resp = resp.data;
            if(resp.success) {

            // 李庚鑫在这里做了修改
            //   this.loginSuccss(_phone, _pwd, resp.data);
              this.loginSuccss(resp.data);
              if(this.CLocation != ":Location"){
                console.log("/" + this.CLocation);
                this.$router.push("/" + this.CLocation);
              }else {
                  this.$router.push("/");
              }
              
            //   console.log(resp);
            }else {
              console.error("登陆失败！");
              console.error(resp);
              alert(JSON.stringify(resp));
            }
          }, function(error) {
            console.error("登陆请求失败！");
            console.error(error);
            alert(JSON.stringify(error));
          });
      },
      resetPwdHandler: function() {
          var _phone = this.resetPwd.phone;
          var _pwd = this.resetPwd.password;
          var _verifCode = this.resetPwd.verifCode;
          var isValid = this.verifyUserInputs(_phone, _pwd, _pwd, _verifCode);
          if(!isValid) {
              return;
          }
          //TO DO: send request to back end to update password
          this.$http.post(Global.getRequestUrl() + "/user/reset", 
            {
              mobile: _phone,
              password: _pwd,
              verifycode: _verifCode,
              imagecode: "imagecode"
            },
            {
              emulateJSON: true
            }
          ).then(function(resp) {
            resp = resp.data;
            if(resp.success) {
            //   this.loginSuccss(_phone, _pwd, resp.param);
              this.loginSuccss(resp.param);
            }else {
              console.error("重置密码失败！");
              console.error(resp);
              alert(JSON.stringify(resp));
            }
          }, function(error) {
            console.error("重置密码请求失败！");
            console.error(error);
            alert(JSON.stringify(error));
          });
      },
      getVerifCode: function(type) {
          var _mobile;
          if(type === "signup") {
              _mobile = this.signup.phone;
          }else if(type === "reset") {
              _mobile = this.resetPwd.phone
          }
          this.$http.post(Global.getRequestUrl() + "/user/verifycode", 
            {
              mobile: _mobile
            },
            {
              emulateJSON: true
            }
          ).then(function(resp) {
            resp = resp.data;
            if(resp.success) {
              console.log("获取验证码成功!");
            }else {
              console.error("获取验证码失败！");
              console.error(resp);
              alert(JSON.stringify(resp));
            }
          }, function(error) {
            console.error("获取验证码请求失败!");
            console.error(error);
            alert(JSON.stringify(error));
          });
      },
      registerHandler: function() {
          var _phone = this.signup.phone;
          var _verifCode = this.signup.verifCode;
          var _pwd = this.signup.password;
          var _pwd2 = this.signup.password2;
          var isValid = this.verifyUserInputs(_phone, _pwd, _pwd2, _verifCode);
          if(!isValid) {
            return;
          }
          //send request to back end
          this.$http.post(Global.getRequestUrl() + "/user/register", 
            {
              mobile: _phone,
              password: _pwd,
              verifycode: _verifCode
            },
            {
              emulateJSON: true
            }
          ).then(function(resp) {
            resp = resp.data;
            console.log(resp);
            if(resp.success) {
            //   this.loginSuccss(_phone, _pwd, resp.param);
              this.loginSuccss(resp.param);
            }else {
              console.error("注册失败！");
              console.error(resp);
              alert(JSON.stringify(resp));
            }
          }, function(error) {
            console.error("注册请求失败！");
            console.error(error);
            alert(JSON.stringify(error));
          });
      },
      verifyUserInputs: function(phone, pwd, pwd2, verifCode) {
          if(!phone) {
              alert("请输入手机号！");
              return false;
          }
          if(!pwd) {
              alert("请输入密码！");
              return false;
          }
          if(pwd !== pwd2) {
              alert("两次输入密码不一致！");
              return false;
          }
          return true;
      },
    //   loginSuccss: function(phone, password, token) {
      loginSuccss: function(token) {
        //   Global.setCookie("userphone", phone);
        //   Global.setCookie("password", password);

        // 李庚鑫修改了这里
          Global.setCookie("token", token);
        //   Global.setCookie("token", token);
          var index = window.location.href.indexOf("Login");
          if(window.lastUrl) {
              this.$router.push(window.lastUrl);
          }else if(index < 0) {
              window.location.reload();
          }else {
              window.location = window.location.href.slice(0, index);
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    .login-separator {
        display: inline-block;
        vertical-align: middle;
        width: 45px;
        margin: 0px 20px;
    }
</style>
