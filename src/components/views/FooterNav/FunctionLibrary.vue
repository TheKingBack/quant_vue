<template>
   <div>
      <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

      <div class="FunctionLibraryBox">
         <!-- 上边公司LOGO部分 -->
         <div class="IThinkLogo"> <span class="LogoName">IThink</span> 函数库</div>           
         <!-- 上边导航栏部分 -->
         <div class="FLNav contain">
            <div class="FLNHomePage active" @click="AllFunctionEvent">函数库首页</div>
            <div class="FLNMyFunction" @click="MyFunctionEvent">我的函数</div>
            <div class="FLNSharingFunction">
               <div class="ShareBtn">+</div>
               <div class="ShareWord" @click="ShareFunctionEvent">分享函数</div>
            </div>
         </div>
         <!-- 下边内容部分 -->
         <All-Function v-if="PageMounted"></All-Function>
         <My-Function v-if="!PageMounted"></My-Function>
      </div>
      
      <footer-bar></footer-bar>
   </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import FooterBar from "@/components/layout/FooterBar";
import Global from "@/components/layout/Global";
import AllFunction from "@/components/views/FooterNav/FunctionLibrary/AllFunction";
import MyFunction from "@/components/views/FooterNav/FunctionLibrary/MyFunction";
import FunctionDetails from "@/components/views/FooterNav/FunctionLibrary/FunctionDetails";

export default {
   components: {
      NavBar,
      FooterBar,
      Global,
      AllFunction,
      MyFunction,
      FunctionDetails,
   },
   mounted() {
      this.$nextTick(function() {

      });
      var Href = window.location.href;
      var Type = Href.substring(Href.lastIndexOf('=')+1,Href.length);
      // console.log(Type);
      if(Type==""){
         this.AllFunctionEvent();
      }else if(Type==1){
         this.MyFunctionEvent();
      }
   },
   data() {
      return {
         AIadvisorMenu: Global.getPageMenu(""),
         //页面生成显示全部函数
         PageMounted:true,
      }
   },
   methods: {
      //点击函数库首页发生的事件
      AllFunctionEvent(){
         this.PageMounted = true;
         $(".FLHomePage").addClass("active").siblings().removeClass("active");
      },

      //点击我的函数发生的事件
      MyFunctionEvent(){
         this.PageMounted = false;
         $(".FLMyFunction").addClass("active").siblings().removeClass("active");
      },

      //点击分享函数的事件
      ShareFunctionEvent(){
         this.$router.push("/FooterNav/FunctionLibrary/ShareFunction");
      },
   },
};
</script>

<style lang="less" scoped>
//版心设定
.contain{
   width: 1200px;
   margin: 0 auto;
   overflow: hidden;
   box-sizing: border-box;
}

.FunctionLibraryBox{
   width: 100% ;
   background-color: #f0f0f0;
   padding-bottom: 30px;
   overflow: hidden;
   box-sizing: border-box;
   //上边公司LOGO部分
   .IThinkLogo{
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 32px;
      font-weight: normal;
      color: #333;
      margin: 0 auto;
      background-color: #fff;
      .LogoName{
         color: #00aefc;
      }
   }
   //上边导航栏部分
   .FLNav{
      height: 60px;
      background-color: #fff;
      border-radius: 14px;
      margin-top: 20px;
      .active{
         color: #00aefc;
         border-bottom: 4px solid #00aefc;
      }
      .FLNHomePage{
         width: 80px;
         height: 60px;
         text-align: center;
         line-height: 60px ;
         box-sizing: border-box;
         font-size: 16px;
         float: left;
         margin: 0 40px;
         cursor: pointer;
      }
      .FLNMyFunction{
         width: 80px;
         height: 60px;
         text-align: center;
         line-height: 60px ;
         box-sizing: border-box;
         font-size: 16px;
         float: left;
         cursor: pointer;
      }
      .FLNSharingFunction{
         width: 120px;
         height: 40px;
         line-height: 40px;
         box-sizing: border-box;
         float: right;
         color: #fff;
         margin: 10px 40px;
         cursor: pointer;
         background-color: #00aefc;
         border-radius: 8px;
         .ShareBtn{
            font-size: 28px;
            margin: 0 4px 0 14px;
            font-weight: bold;
            height: 40px;
            line-height: 40px;
            float: left;
         }
         .ShareWord{
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            float: left;
         }
      }
   }
}
</style>


