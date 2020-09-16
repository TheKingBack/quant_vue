<template>
  <div>
  <nav-bar :navMenuItems="IntelligentTransactionMenu"></nav-bar>
  
   <!-- 外部的大壳子 -->
   <div class="InformationDetailsBox">
      <div class="InformationDetails contain">
         <!-- 左边部分 -->
         <div class="IDLeft" v-cloak v-html="GetHtml">
           <!-- <template>{{GetHtml}}</template> -->
          </div>
         <!-- 右边部分 -->
         <div class="IDRight">
            <!-- 右边头部标题 -->
            <div class="IDRTitle">推荐股票</div>
            <!-- 展示信息名称 -->
            <div class="IDRNav">
               <div class="IDRNLWord">名称代码</div>
                <div class="IDRNWord" @click.stop="RFSortChange(RiseOrFall)">涨跌幅
                  <img v-show="RiseOrFall==0" src="/static/AICommunity/MyQuotation/默认状态.png" alt="" class="IDRNImg">
                  <img v-show="RiseOrFall==1" src="/static/AICommunity/MyQuotation/升序.png" alt="" class="IDRNImg">
                  <img v-show="RiseOrFall==-1" src="/static/AICommunity/MyQuotation/降序.png" alt="" class="IDRNImg">
                </div>
                <div class="IDRNWordOne" @click.stop="LPSortChange(LatestPrice)">最新价
                  <img v-show="LatestPrice==0" src="/static/AICommunity/MyQuotation/默认状态.png" alt="" class="IDRNImg">
                  <img v-show="LatestPrice==1" src="/static/AICommunity/MyQuotation/升序.png" alt="" class="IDRNImg">
                  <img v-show="LatestPrice==-1" src="/static/AICommunity/MyQuotation/降序.png" alt="" class="IDRNImg">
                </div>
            </div>
            <!-- 自选股数展示信息 -->
            <div class="IDRBanner" @click="GoShareDetails(item.id)" v-for="item in RecommendedStockData" :key="item.id">
               <div class="IDRBLeft">
                  <div class="IDRBLName">{{item.SSSName}}</div>
                  <div class="IDRBLCode">{{item.SSSCode}}</div>
               </div>
               <div class="IDRBRight">{{item.RiseAndFall}}%</div>
               <div class="IDRBCenter">{{item.LatestPrice}}</div>
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
  created(){

  },
  mounted: function() {
    this.$nextTick(function() {
      this.GetHtmlCode()
      this.GetIDData(this.RiseOrFall,this.LatestPrice);
    });
  },
  components: {
    NavBar,
    FooterBar,
  },
  data() {
    return {
      IntelligentTransactionMenu: Global.getPageMenu("IntelligentTransaction"),
      //收到的html
      GetHtml:"",

      //涨跌排序所需参数
      RiseOrFall:0,
      //最新价排序所需参数
      LatestPrice:0,

      //自选股信息
      RecommendedStockData: [
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55",
          id:123123,
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        }
      ],
    };
  },
  methods: {
    //接收到html
    GetHtmlCode(){
      var Key = this.$route.query.id
      this.GetHtml = JSON.parse(window.sessionStorage[Key])
    },

    //按涨跌幅排序
    RFSortChange(RF){
      if(RF==0){
        this.RiseOrFall = 1;
      }else if(RF==1){
        this.RiseOrFall = -1;
      }else if(RF==-1){
        this.RiseOrFall = 0;
      }
      // console.log(this.RiseOrFall)
      this.GetIDData(this.RiseOrFall,this.LatestPrice);
    },

    //按最新价排序
    LPSortChange(LP){
      if(LP==0){
        this.LatestPrice = 1;
      }else if(LP==1){
        this.LatestPrice = -1;
      }else if(LP==-1){
        this.LatestPrice = 0;
      }
      // console.log(this.LatestPrice);
      this.GetIDData(this.RiseOrFall,this.LatestPrice);
    },

    //获取推荐股票数据
    GetIDData(RF,LP) {
        this.$http.get(Global.getRequestUrl() + "/dev/signal/test/result",
        {
          params:{
              "RF":RF,
              "LP":LP,
          },
          headers: Global.getRequestHeader()
        }
        ).then(
        function(resp) {
          var resp = resp.body;
          console.log(resp);
          console.log("111111111111111111111111111111111111111111111");
          if (resp.success) {
                this.RecommendedStockData = resp.data;
              console.log("获取推荐股票数据成功！");
          } else {
              console.log("获取推荐股票数据失败！");
          }
        },
        function(error) {
          console.log("获取推荐股票数据请求失败！");
        }
        );
    },

    //点击跳转到股票详情页
    GoShareDetails(id){
      this.$router.push("/MyQuotation/ShareDetails?id=" + id)
    },
  }
};
</script>

<style lang="less">
//版心设定
.contain {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
//外部的大壳子(用来设置大背景)
.InformationDetailsBox {
   width: 100% ;
   height: 100% ;
   padding: 80px 0 30px 0;
   box-sizing: border-box;
   background-color: #fff;
   //版心为位置
   .InformationDetails {
      overflow: hidden;
      //左边部分
      [v-cloak] {
      display: none;
      } 
      .IDLeft {
         width: 870px;
         float: left;
         overflow: hidden;
      }
      //右边部分
      .IDRight {
         width: 308px;
         float: right;
         border-radius: 4px;
         padding: 10px 18px 30px;
         border: 1px solid rgba(0, 0, 0, 0.1);
         box-sizing: border-box;

         //右边头部标题
         .IDRTitle {
            width: 100%;
            height: 40px;
            font-size: 18px;
            color: #333;
            line-height: 40px;
         }

         //展示信息名称
         .IDRNav {
            width: 100%;
            height: 24px;
            font-size: 14px;
            color: #999;
            line-height: 24px;
            .IDRNLWord{
               width: 60px;
               float: left;
               text-align: left;
            }
            .IDRNWord {
               width: 60px;
               float: right;
               position: relative;
               text-align: center;
               cursor: pointer;
               .IDRNImg {
                  width: 7px;
                  height: 9px;
                  position: absolute;
                  top: 7px;
                  right: 0px;
               }
            }
            .IDRNWordOne{
              width: 60px;
              float: right;
              position: relative;
              text-align: center;
              cursor: pointer;
              .IDRNImg {
                width: 7px;
                height: 9px;
                position: absolute;
                top: 7px;
                right: 0px;
              }
            }
         }
         //展示信息
         .IDRBanner {
            width: 100%;
            height: 44px;
            cursor: pointer;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            .IDRBLeft {
               width: 112px;
               height: 44px;
               float: left;
               overflow: hidden;
               .IDRBLName {
                  margin-top: 8px;
                  font-size: 14px;
                  color: #666;
               }
               .IDRBLCode {
                  font-size: 12px;
                  color: #666;
               }
            }
            .IDRBCenter,
            .IDRBRight {
               float: right;
               width: 60px;
               text-align: center;
               height: 44px;
               line-height: 44px;
               font-size: 16px;
               color: #ec4343;
            }
         }
      }
   }
}
</style>