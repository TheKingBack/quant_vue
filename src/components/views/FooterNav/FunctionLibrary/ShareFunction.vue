<template>
   <div>
      <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>
      <div class="ShareFunctionBox">
         <!-- 上边公司LOGO部分 -->
         <div class="IThinkLogo"> <span class="LogoName">IThink</span> 函数库</div>           
         <!-- 上边导航栏部分 -->
         <div class="SFNav contain">
            <div class="SFHomePage" @click="AllFunctionEvent">函数库首页</div>
            <div class="SFMyFunction" @click="MyFunctionEvent">我的函数</div>
            <div class="SFSharingFunction">
               <div class="ShareBtn">+</div>
               <div class="ShareWord" @click="ShareFunctionEvent">分享函数</div>
            </div>
         </div>
         <!-- 下边内容部分 -->
         <div class="SFContent">
            <div class="SFCTitle">分享函数</div>
            <div class="SFCFunctionName">函数名称：</div>
            <input v-model="functionName" placeholder="给函数起一个5-30字的名字吧" type="text" class="SFCFN">
            <div class="SFCFunctionExplain">函数说明：</div>
            <textarea v-model="functionExplain" placeholder="介绍一下你的函数吧" class="SFCFE" wrap="soft" name="" id="" cols="30" rows="10"></textarea>
            <div class="SFCPrompt">函数思路的说明和注释，800字以内</div>
            <div class="SFCFunctionCode">函数代码：</div>
            <textarea v-model="functionCode" placeholder="def function(params):
      #这里包含函数实现代码，至少3行
      pass" spellcheck="false" class="SFCFC" wrap="soft" name="" id="" cols="30" rows="10"></textarea>
            <div class="SFCPrompt">函数代码，必须包括函数体定义，3行代码以上</div>
            <div class="SFButton">
               <div class="SFBLeft">测试</div>
               <div class="SFBRight" @click="ShareItNow">确认分享</div>
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
      Global,
   },
   mounted() {
      this.$nextTick(function() {
            this.GetShareFunctionData();
      });
   },
   data() {
      return {
         AIadvisorMenu: Global.getPageMenu(""),
            //函数名称
            functionName:"",
            //函数说明
            functionExplain:"",
            //函数代码
            functionCode:"",
      }
   },
   methods: {
      //点击函数库首页发生的事件
      AllFunctionEvent(){
         this.$router.push("/FooterNav/FunctionLibrary")
      },

      //点击我的函数发生的事件
      MyFunctionEvent(){
         this.$router.push("/FooterNav/FunctionLibrary?type=1")
      },

      //点击分享函数的事件
      ShareFunctionEvent(){
         this.$router.push("/FooterNav/FunctionLibrary/ShareFunction");
      },

      //页面生成时候发送的请求
      GetShareFunctionData(FID){
            
            if(!FID){
                  var ID = window.location.href;
                  var FID = ID.substring(ID.lastIndexOf('=')+1,ID.length);
                  console.log(FID);
                  this.$http.get(Global.getRequestUrl() + "/favor/list",
                        {
                              params: {
                              'id':FID,
                              },
                              headers: Global.getRequestHeader()
                        }
                        ).then(function(resp) {
                              var resp = resp.data;
                              if(resp.success) {
                                    this.FunctionTotal = resp.data.pagination.total;
                                    this.itemId = resp.data.results.id;
                                    console.log("获取分享页面数据成功！");
                                    this.AllFunctionData = resp.data.results;
                              }else {
                                    console.error("获取分享页面数据失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
                              }
                        }, function(error) {
                              console.error("获取分享页面数据请求失败！");
                              console.error(error);
                        }
                  );
            }
      },

      //分享函数
      ShareItNow(){
            this.$http.get(Global.getRequestUrl() + "/favor/list",
                  
                  {
                        'functionName':this.functionName,
                        'functionExplain':this.functionExplain,
                        'SFCFunctionCode':this.SFCFunctionCode,
                  },
                  {
                        headers: Global.getRequestHeader()
                  }
                  ).then(function(resp) {
                        var resp = resp.data;
                        if(resp.success) {
                              this.$router.push("/FooterNav/FunctionLibrary/FunctionDetails?id=" + resp.data.results.id)
                              this.FunctionTotal = resp.data.pagination.total;
                              this.itemId = resp.data.results.id;
                              console.log("分享函数成功");
                              this.AllFunctionData = resp.data.results;
                        }else {
                              console.error("分享函数失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
                        }
                  }, function(error) {
                        console.error("分享函数请求失败！");
                        console.error(error);
                  }
            );
      }
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
.ShareFunctionBox{
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
   .SFNav{
      height: 60px;
      background-color: #fff;
      border-radius: 8px;
      margin-top: 20px;
      .active{
         color: #00aefc;
         border-bottom: 4px solid #00aefc;
      }
      .SFHomePage{
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
      .SFMyFunction{
         width: 80px;
         height: 60px;
         text-align: center;
         line-height: 60px ;
         box-sizing: border-box;
         font-size: 16px;
         float: left;
         cursor: pointer;
      }
      .SFSharingFunction{
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
            height: 40px;
            line-height: 40px;
            font-size: 28px;
            margin: 0 6px 0 14px;
            font-weight: bold;
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
   //下部表单
   .SFContent{
      width: 1200px;
      margin: 20px auto 0;
      background-color: #fff;
      border-radius: 8px;
      padding: 20px 50px 50px;
      box-sizing: border-box;
      .SFCPrompt{
         font-size: 12px;
         color: #333;
      }
      .SFCTitle{
            font-size: 20px;
            text-align: center;
            color: #333;
            margin-top: 10px;
            font-weight: bold; 
      }
      .SFCFunctionName{
         height: 40px;
         line-height: 40px;
         font-size: 16px;
         color: #333;
         margin-top: 20px;
         font-weight: bold;
      }
      .SFCFN{
         width: 100% ;
         height: 40px;
         line-height: 40px;
         border-radius: 8px;
         padding:0 8px;
         font-size: 14px;
         color: #666;
         outline-style: none;
         border: none;
         border: 1px solid #cecece;
         box-sizing: border-box;
      }
      .SFCFunctionExplain{
         height: 40px;
         line-height: 40px;
         font-size: 16px;
         color: #333;
         margin-top: 20px;
         font-weight: bold;
      }
      .SFCFE{
         width: 100% ;
         height: 240px;
         border-radius: 8px;
         padding:8px;
         font-size: 14px;
         color: #666;
         outline-style: none;
         border: none;
         border: 1px solid #cecece;
         box-sizing: border-box;
      }
      .SFCFunctionCode{
         height: 40px;
         line-height: 40px;
         font-size: 16px;
         color: #333;
         margin-top: 20px;
         font-weight: bold;
      }
      .SFCFC{
         width: 100% ;
         height: 240px;
         // border-radius: 8px;
         padding:8px;
         font-size: 14px;
         color: #666;
         outline-style: none;
         border: none;
         border: 1px solid #cecece;
         box-sizing: border-box;
      }
      .SFButton{
         width: 300px;
         height: 40px;
         margin: 60px auto 0;
         box-sizing: border-box;
         .SFBLeft{
            width: 120px;
            height: 40px;
            float: left;
            border: 1px solid #cecece;
            border-radius: 8px;
            font-size: 16px;
            color: #333;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
         }
         .SFBRight{
            width: 120px;
            height: 40px;
            float: right;
            background-color: #00aefc;
            border-radius: 8px;
            font-size: 16px;
            color: #fff;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
         }
      }
   }
}

   

</style>


