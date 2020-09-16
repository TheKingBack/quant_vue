<template>
  <div>
     <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

      <div class="SPKBigBox">
         <!-- 上边图片部分 -->
         <div class="SignalPK-top">
            <div class="topArticle contain">
               <div class="ArticleImage"></div>
            </div>
            <div class="ToDescription">
               <router-link class="ToDescriptionBtn" to="/Description">参加量化金融大赛</router-link>
            </div>
         </div>

         <!-- 中间部分 -->
         <div class="SignalPKBig">
            <div class="SignalPKCentent contain">
               <!-- 上部的tab导航栏部分 -->
               <div class="SCententTab">
                  <div class="SCententTabOne SignalPKActive" @click="HandoffPage(1)">信号擂台</div>
                  <div class="SCententTabTwo" @click="HandoffPage(2)">我的策略</div>
               </div>

               <!-- 下部内容部分 -->
               <Signal-Ring v-show="BottomCentent"></Signal-Ring>
               <My-Strategy v-show="!BottomCentent"></My-Strategy>
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
import MyStrategy from "@/components/views/SignalRing/SignalPK/MyStrategy"
import SignalRing from "@/components/views/SignalRing/SignalPK/SignalRing"

export default {
  components: {
    NavBar,
    FooterBar,
    Global,
    MyStrategy,
    SignalRing
  },
  mounted() {},
  data() {
    return {
      AIadvisorMenu: Global.getPageMenu("SignalRing"),
      //用于Tab栏切换
      BottomCentent:true,
    };
  },
  mounted(){
    this.$nextTick(function() {

		});
  },
  methods: {
    //Tab栏切换事件
    HandoffPage(type){
      if(type=="1"){
        this.BottomCentent = true;
        $(".SCententTabOne").addClass("SignalPKActive").siblings().removeClass("SignalPKActive");
      }else{
        this.BottomCentent = false;
        $(".SCententTabTwo").addClass("SignalPKActive").siblings().removeClass("SignalPKActive");
      }
    },
  },
};
</script>

<style lang="less" scoped>

.SPKBigBox {
  background-color: #f0f0f0;
  padding-bottom: 20px;
}
.contain {
  width: 1206px;
  margin: 0 auto;
  box-sizing: border-box;
}

// 最上边图片部分
.SignalPK-top {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  background: url("/static/SignalRing/SignalPK/1844153257.jpg") no-repeat center;
  .topArticle {
    text-align: center;
    height: 230px;
    padding-top: 110px;
    .ArticleImage {
      width: 664px ;
      height: 78px;
      margin: 0 auto;
      background:  url("/static/SignalRing/SignalPK/icon_biaoti.png") no-repeat center;
    }
  }

  //跳转按钮
  .ToDescription {
    width: 100%;
    height: 46px;
    overflow: hidden;
    .ToDescriptionBtn{
      display: block;
      margin: 0 auto;
      width: 196px;
      height: 46px;
      color: #fff;
      font-size: 18px;
      border-radius: 23px;
      text-align: center;
      line-height: 46px;
      background-color: #00aefc;
    }
  }
}

// 中间部分
.SignalPKBig{
   width: 100% ;
   padding-top: 20px ;
   box-sizing: border-box;
   background-color: #fff;
   // 上部的tab导航栏部分
   .SCententTab{
      width: 100% ;
      height: 30px;
      .SCententTabOne,
      .SCententTabTwo{
         width: 100px;
         height: 30px;
         border: 1px solid #b4b4b4;
         box-sizing: border-box;
         text-align: center;
         line-height: 30px ;
         font-size: 16px;
         color: #666;
         border-radius: 4px;
         float: left;
         margin-right: 20px;
         cursor: pointer;
      }
      //点击后的效果
      .SignalPKActive{
         border: none;
         background-color: #00aefc;
         color: #fff;
         line-height: 32px ;
      }
   }
}

</style>


