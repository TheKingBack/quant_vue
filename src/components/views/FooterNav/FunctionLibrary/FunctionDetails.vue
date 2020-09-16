<template>
   <div>
      <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

      <div class="FDBox">
         <!-- 上边公司LOGO部分 -->
         <div class="FDLogo"> <span class="LogoName">IThink</span> 函数库</div>           
         <!-- 上边导航栏部分 -->
         <div class="FDNav contain">
            <div class="FDHomePage" @click="AllFunctionEvent">函数库首页</div>
            <div class="FDMyFunction" @click="MyFunctionEvent">我的函数</div>
            <div class="FDSharingFunction">
               <div class="ShareBtn">+</div>
               <div class="ShareWord" @click="ShareFunctionEvent">分享函数</div>
            </div>
         </div>
         <!-- 下边内容部分 -->
         <div class="FDContent contain">
           <div class="FDCLift">
             <div class="FDCLFunctionName">{{FunctionDetailsData.functionName}}</div>
             <div class="FDUserInformation">
               <img class="FDUHeadPortrait" :src="FunctionDetailsData.userPhoto" alt="">
               <div class="FDUName">{{FunctionDetailsData.userName}}</div>
               <div class="FDUCreateTime">发布于{{FunctionDetailsData.createTime}}</div>
               <div class="FDViewed">{{FunctionDetailsData.beViewed}}查看</div>
             </div>
             <div class="FDFunctionOutline">
               <div class="FDFunctionExplain">{{FunctionDetailsData.functionExplain}}</div>
              <div class="FDFunctionCode">{{FunctionDetailsData.functionCode}}</div>
              <!-- <div class="FDCopyCode">复制代码</div> -->
             </div>
           </div>
           <div class="FDCRight">
             <div class="FDCRHot">30日热门函数</div>
             <div class="FDCRFunction" @click="GetHotDetailsData(item.id)" v-for="item in HotFunctionData" :key="item.id">{{item.functionName}}</div>
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
        this.GetFunctionDetailsData();
      });
   },
  data() {
    return {
        AIadvisorMenu: Global.getPageMenu(""),
        //函数详情数据
        FunctionDetailsData:{
          functionName:"计算交易日函数",
          userPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
          userName:"永恒的鑫光",
          createTime:"2018-05-16",
          beViewed:"320",
          functionExplain:"10%计算交易日函数，计算两个日期之间有几个交易日，注意：使用这个函数要达到天人合一的境界,我看一下超出会不会换行",
          functionCode:"",
        },
        //30日热门函数
        HotFunctionData:[
          {
            functionName:"计算交易日函数",
            id:1,
          },
          {
            functionName:"计算交易日函数",
            id:2,
          },
          {
            functionName:"计算交易日函数",
            id:3,
          },
          {
            functionName:"计算交易日函数",
            id:4,
          },
          {
            functionName:"计算交易日函数",
            id:5,
          },
          {
            functionName:"计算交易日函数",
            id:6,
          },
          {
            functionName:"计算交易日函数",
            id:7,
          },
          {
            functionName:"计算交易日函数",
            id:8,
          },
        ],
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

      //页面生成时发送的请求
      GetFunctionDetailsData(FID){
        if(FID == ""){
          var ID = window.location.href;
          var FID = ID.substring(ID.lastIndexOf('=')+1,ID.length);
          console.log(FID);
        }
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
                console.log("获取函数库列表列表成功，结果为：");
                // console.log(resp.data.results);
                this.AllFunctionData = resp.data.results;
                // console.log(this.MyFormData);
          }else {
            console.error("获取函数库列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
          }
        }, function(error) {
          console.error("获取函数库列表请求失败！");
          console.error(error);
        });
      },

      //点击30日热门函数发送请求
      GetHotDetailsData(FID){
        this.GetFunctionDetailsData(FID);
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

.FDBox{
   width: 100% ;
   background-color: #f0f0f0;
   padding-bottom: 30px;
   overflow: hidden;
   box-sizing: border-box;
  //上边公司LOGO部分
  .FDLogo{
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
  .FDNav{
    height: 60px;
    background-color: #fff;
    border-radius: 14px;
    margin-top: 20px;
    .active{
        color: #00aefc;
        border-bottom: 4px solid #00aefc;
    }
    .FDHomePage{
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
    .FDMyFunction{
        width: 80px;
        height: 60px;
        text-align: center;
        line-height: 60px ;
        box-sizing: border-box;
        font-size: 16px;
        float: left;
        cursor: pointer;
    }
    .FDSharingFunction{
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
  //下边内容部分
  .FDContent{
    margin-top: 10px;
    padding: 40px 40px 60px;
    border-radius: 14px;
    background-color: #fff;
    box-sizing: border-box;
    overflow: hidden;
    .FDCLift{
      width: 800px;
      float: left;
      overflow: hidden;
      .FDCLFunctionName{
        font-size: 26px;
        color: #00aefc;
      }
      .FDUserInformation{
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #cecece;
        overflow: hidden;
        .FDUHeadPortrait{
          width: 36px;
          height: 36px;
          float: left;
          margin: 22px 0;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 50% ;
        }
        .FDUName{
          font-size: 16px;
          color: #333;
          float: left;
          margin-left: 20px;
        }
        .FDUCreateTime{
          font-size: 14px;
          color: #999;
          float: left;
          margin-left: 20px;
        }
        .FDViewed{
          font-size: 14px;
          color: #999;
          float: left;
          margin-left: 20px;
        }
      }
      .FDFunctionExplain{
        font-size: 16px;
        color: #333;
        margin: 30px 0;
      }
      .FDFunctionCode{
        height: 300px;
        background-color: #eff1f0;
        padding:8px;
        font-size: 16px;
        color: #999;
        border: 1px solid #cecece;
        overflow-y:auto;
        overflow-x:hidden;
        // white-space:wrap;
        word-wrap:break-word; 
        box-sizing: border-box;
      }
      // .FDCopyCode{
      //   width: 100px;
      //   height: 30px;
      //   background-color: #00aefc;
      //   line-height: 30px;
      //   text-align: center;
      //   color: #fff;
      //   font-size: 16px;
      //   border-radius: 4px;
      //   margin: 30px 0;
      //   float: right;
      // }
    }
    .FDCRight{
      width: 280px;
      float: right;
      overflow: hidden;
      .FDCRHot{
        font-size: 18px;
        color: #333;
      }
      .FDCRFunction{
        font-size:14px;
        color: #00aefc;
        margin-top: 28px;
        position: relative;
        padding-left: 30px;
        box-sizing: border-box;
        cursor: pointer;
        &::before{
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #00aefc;
          position: absolute;
          top: 5px;
          left: 16px;
        }
      }
    }
  }
}
</style>


