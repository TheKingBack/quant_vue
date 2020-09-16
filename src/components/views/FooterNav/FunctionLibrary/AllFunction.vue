<template>
   <div>
      <!-- 函数库首页 -->
      <div class="AFContent contain">
         <!-- 左边内容部分 -->
         <div class="AFCLeft">
            <!-- 上边搜索部分 -->
            <div class="AFCLSeach">
               <!-- 搜索框 -->
               <input type="text" @keyup.enter="SearchFunction" v-model="searchKeyWord" placeholder="搜索你想要的函数">
               <!-- 搜索图标 -->
               <div class="AFCLSeachLogo" @click="SearchFunction"></div>
            </div>
            <!-- 下侧内容部分 -->
            <div class="AFCLAllFunction">
               <!-- 下侧内容头部 -->
               <div class="AFCLAFTop">{{aboutSomethings}}</div>
               <!-- 下侧内容展示数据 -->
               <div class="AFCLAFContentBox">
                  <div class="AFCLAFContent" @click="GoFunctionDetails(item.id)" v-for="item in AllFunctionData" :key="item.id">
                     <!-- 被多少人查看排名 -->
                     <div class="AFCLAFCRanking">
                        <img v-show="item.ViewedRanking === 1" src="/static/FooterNav/FunctionLibrary/icon_jinpai.png" alt="">
                        <img v-show="item.ViewedRanking === 2" src="/static/FooterNav/FunctionLibrary/icon_yinpai.png" alt="">
                        <img v-show="item.ViewedRanking === 3" src="/static/FooterNav/FunctionLibrary/icon_tongpai.png" alt="">
                        <div v-show="item.ViewedRanking > 3" class="RankingNumber">{{item.ViewedRanking}}</div>
                     </div>
                     <!-- 函数信息 -->
                     <div class="AFCLAFCI">
                        <!-- 函数名称 -->
                        <div class="AFCLAFCName">{{item.functionName}}</div>  
                        <!-- 函数介绍 -->
                        <div class="AFCLAFCExplain">{{item.functionExplain}}</div>
                        <!-- 函数作者信息 -->
                        <div class="AFCLAFCUser">
                           <div class="AFCLAFCUW">开发者：</div>
                           <img class="AFCLAFCUPhoto" :src="item.AuthorPhoto" alt="">
                           <div class="AFCLAFCUName">{{item.functionAuthor}}</div>
                           <div class="AFCLAFCUTime">{{item.createTime}}天前</div>
                        </div>
                     </div>
                     <!-- 被多少人查看 -->
                     <div class="AFCLAFCBVBox">
                        <div class="AFCLAFCBVBTop">已被</div>
                        <div class="AFCLAFCBVBConter">{{item.beViewed}}</div>
                        <div class="AFCLAFCBVBBottom">用户查看</div>
                     </div>
                  </div>
               </div>
               <!-- 下部的分页 -->
               <div class="paging">
                  <el-pagination 
                  background layout="prev, pager, next" 
                  :total="AllFunctionTotal" 
                  :page-size="pageSize"
                  :current-page="AllFunctionCP"
                  @current-change="AllFunctionCPChange">
                  </el-pagination>
               </div>
            </div>
         </div>
         <!-- 右边内容部分 -->
         <div class="AFCRight">
            <!-- 右边内容顶部 -->
            <div class="AFCRTop">
               <!-- 右边内容顶部左侧 -->
               <div class="AFCRTContent">
                  <div class="AFCRTLNumber">510</div>
                  <div class="AFCRTLWord">开发者</div>
               </div>
               <!-- 右边内容顶部中间横线 -->
               <div class="AFCRTC"></div>
               <!-- 右边内容顶部右侧 -->
               <div class="AFCRTContent">
                  <div class="AFCRTLNumber">742</div>
                  <div class="AFCRTLWord">函数</div>
               </div>
            </div>
            <!-- 右边内容下部 -->
            <div class="AFCRContent">
               <!-- 右边内容下部的头部 -->
               <div class="AFCRCTop">30日分享最多的开发者</div>
               <!-- 右边内容下部的中心部分 -->
               <div class="AFCRCConter">
                  <div class="AFCRCCI" @click="GoAuthorFunction(item.id,item.UserName)" v-for="item in ShareMostData" :key="item.id">
                     <div class="AFCRCCIRanking">
                        <img v-show="item.ShareRanking === 1" src="/static/FooterNav/FunctionLibrary/icon_touxiang_jinpai.png" alt="">
                        <img v-show="item.ShareRanking === 2" src="/static/FooterNav/FunctionLibrary/icon_touxiang_yinpai_05.png" alt="">
                        <img v-show="item.ShareRanking === 3" src="/static/FooterNav/FunctionLibrary/icon_paiming_tongpai.png" alt="">
                        <div v-show="item.ShareRanking > 3" class="RankingNumber">{{item.ShareRanking}}</div>
                     </div>
                     <img class="AFCRCCIUserPhoto" :src="item.UserPhoto" alt="">
                     <div class="AFCRCCIUserName">{{item.UserName}}</div>
                     <div class="AFCRCCINumber">{{item.ShareNumber}}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Global from "@/components/layout/Global";

export default {
  components: {
    Global,
  },
  mounted() {
    this.$nextTick(function() {
      this.GetAllFunctionData(this.AllFunctionCP,this.pageSize);
    });
  },
  data() {
    return {
        AIadvisorMenu: Global.getPageMenu(""),
      //搜索函数的关键词
      searchKeyWord:"",
      //显示关于什么的函数
      aboutSomethings:"所有函数",


      //每页显示的个数
      pageSize:5,
      //函数的总数
      AllFunctionTotal:20,
      //当前页数
      AllFunctionCP:1,

      //页面生成获取的所有函数的数据
      AllFunctionData:[
        {  
            ViewedRanking:1,
            functionName:"止损",
            functionExplain:"10%止损",
            AuthorPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            functionAuthor:"永恒的鑫光",
            createTime:"1",
            beViewed:321,
            id:"1",
        },
        {
            ViewedRanking:2,
            functionName:"计算交易日函数",
            functionExplain:"10%计算交易日函数，计算两个日期之间有几个交易日，注意：使用这个函数要达到天人合一的境界",
            AuthorPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            functionAuthor:"永恒鑫光",
            createTime:"1",
            beViewed:320,
            id:"2",
        },
        {
            ViewedRanking:3,
            functionName:"最大回测",
            functionExplain:"10%最大回测",
            AuthorPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            functionAuthor:"偷看的牛郎",
            createTime:"1",
            beViewed:319,
            id:"3",
        },
        {
            ViewedRanking:4,
            functionName:"过滤涨停",
            functionExplain:"过滤涨停",
            AuthorPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            functionAuthor:"洗澡的织女",
            createTime:"1",
            beViewed:318,
            id:"4",
        },
        {
            ViewedRanking:5,
            functionName:"收盘时卖掉所有股票",
            functionExplain:"收盘时卖掉所有股票",
            AuthorPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            functionAuthor:"竹杖芒鞋",
            createTime:"1",
            beViewed:317,
            id:"5",
        },
      ],

      //页面生成获取的30日分享最多的数据
      ShareMostData:[
        {
            ShareRanking:1,
            UserPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            UserName:"永恒的鑫光",
            ShareNumber:26,
            id:"1",
        },
        {
            ShareRanking:2,
            UserPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            UserName:"永恒鑫光",
            ShareNumber:25,
            id:"2",
        },
        {
            ShareRanking:3,
            UserPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            UserName:"猥琐的牛郎",
            ShareNumber:24,
            id:"3",
        },
        {
            ShareRanking:4,
            UserPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            UserName:"貌美的织女",
            ShareNumber:23,
            id:"4",
        },
        {
            ShareRanking:5,
            UserPhoto:"/static/FooterNav/FunctionLibrary/qe.jpg",
            UserName:"作妖的老牛",
            ShareNumber:22,
            id:"5",
        },
      ],
    }
  },
  methods: {
    //页面生成时发送的请求
    GetAllFunctionData: function(Cpage,CpageSize) {
        this.$http.get(Global.getRequestUrl() + "/favor/list",
        {
          params: {
            'page': Cpage,
            'pageSize':CpageSize
          },
          headers: Global.getRequestHeader()
        }
      ).then(function(resp) {
        var resp = resp.data;
        if(resp.success) {
              this.FunctionTotal = resp.data.pagination.total;
              this.itemId = resp.data.results.id;
              console.log("获取函数库列表列表成功！");
              this.AllFunctionData = resp.data.results;
        }else {
          console.error("获取函数库列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
        }
      }, function(error) {
        console.error("获取函数库列表请求失败！");
        console.error(error);
      });
    },
    //获取分页中每一项的数据
    AllFunctionCPChange(curPage){
        var self = this;
        self.AllFunctionCP = curPage;
        //Get current page data from back end
        self.GetAllFunctionData(self.AllFunctionCP,self.pageSize);
    },
    //跳转到函数详情页面
    GoFunctionDetails(id){
      this.$router.push("/FooterNav/FunctionLibrary/FunctionDetails?id=" + id)
    },
    //点击右侧作者获取作者所有函数
    GoAuthorFunction(id,name){
      this.aboutSomethings = "关于 " + name + " 的所有函数";
      this.$http.get(Global.getRequestUrl() + "/favor/list",
        {
          params: {
            'id': id,
          },
          headers: Global.getRequestHeader()
        }
      ).then(function(resp) {
        var resp = resp.data;
        if(resp.success) {
              this.FunctionTotal = resp.data.pagination.total;
              this.itemId = resp.data.results.id;
              console.log("获取某个作者函数库列表列表成功!");
              this.AllFunctionData = resp.data.results;
        }else {
          console.error("获取某个作者函数库列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
        }
      }, function(error) {
        console.error("获取某个作者函数库列表请求失败！");
        console.error(error);
      });
    },
    //搜索函数
    SearchFunction(){
      this.aboutSomethings = "关于 " + this.searchKeyWord + " 的所有函数";
      if(this.searchKeyWord==""){
        alert("搜索的内容不能为空！");
      }else{
        this.$http.post(Global.getRequestUrl() + "/favor/list",
          {
            'KeyWord': this.searchKeyWord,
          },
          {
          headers: Global.getRequestHeader()
          }
        ).then(function(resp) {
          var resp = resp.data;
          if(resp.success) {
                this.FunctionTotal = resp.data.pagination.total;
                this.itemId = resp.data.results.id;
                console.log("获取特定函数列表列表成功！");
                this.AllFunctionData = resp.data.results;
          }else {
            console.error("获取特定函数列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
          }
        }, function(error) {
          console.error("获取特定函数列表请求失败！");
          console.error(error);
        });
      }
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

//函数库首页
.AFContent{
   margin-top: 10px;
   //左边内容部分
   .AFCLeft{
      width: 840px;
      float: left;
      box-sizing: border-box;
      //上边搜索部分
      .AFCLSeach{
         width: 840px;
         height: 50px;
         background-color: #fff;
         border-radius: 8px;
         padding: 10px 50px 10px 10px;
         position: relative;
         box-sizing: border-box;
         //搜索框
         input{
            width: 100% ;
            height: 30px;
            border-radius: 8px;
            padding-left: 6px;
            font-size: 14px;
            outline: none;
            border: none;
         }
         .AFCLSeachLogo{
           width: 50px;
           height: 50px;
           background: url("/static/FooterNav/FunctionLibrary/sousuotubiao_05.png") no-repeat center;
           position: absolute;
           right: 0px;
           top: 0px;
           cursor: pointer;
         }
      }
      //下侧内容部分
      .AFCLAllFunction{
         width: 840px;
         margin-top: 10px;
         background-color: #fff;
         border-radius: 8px;
         padding: 0 0 82px 0;
         box-sizing: border-box;
         position: relative;
         //下部的分页
         .paging{
            position: absolute;
            bottom: 30px;
            right: 32px;
         }
         //下侧内容头部
         .AFCLAFTop{
            width: 100% ;
            height: 50px;
            padding: 0 16px;
            font-size: 16px;
            line-height: 50px;
            color: #333;
            border-bottom: 1px solid #ececee;
            box-sizing: border-box;
         }
         //下侧内容展示数据
         .AFCLAFContentBox{
            width: 100% ;
            padding: 0 20px;
            .AFCLAFContent{
               width: 100% ;
               height: 140px;
               margin-top: 20px;
               border: 1px solid #ececee;
               border-radius: 14px;
               box-sizing: border-box;
               overflow: hidden;
               cursor: pointer;
               //被多少人查看排名
               .AFCLAFCRanking{
                  width: 140px;
                  height: 140px;
                  text-align: center;
                  line-height: 140px;
                  font-size: 24px;
                  color: #333;
                  float: left;
                  position: relative;
                  img{
                     position: absolute;
                     top: 50%;
                     left: 50%;
                     transform: translate(-50%,-50%);
                  }
                  .RankingNumber{
                     font-size: 32px;
                     color: #333;
                     text-align: center;
                     line-height: 30px;
                     position: absolute;
                     top: 50%;
                     left: 50%;
                     transform: translate(-50%,-50%);
                  }
               }
               //函数信息
               .AFCLAFCI{
                  width: 470px;
                  height: 140px;
                  padding: 30px 0 ;
                  float: left;
                  box-sizing: border-box;
                  //函数名称
                  .AFCLAFCName{
                     width: 100% ;
                     font-size: 18px;
                     color: #00aefc;
                  }
                  //函数介绍
                  .AFCLAFCExplain{
                     width: 100% ;
                     font-size: 16px;
                     color: #999;
                     overflow: hidden;
                     text-overflow:ellipsis;
                     white-space: nowrap;
                     margin-top: 12px;
                  }
                  //函数作者信息
                  .AFCLAFCUser{
                     width: 100% ;
                     // overflow: hidden;
                     margin-top: 16px;
                     .AFCLAFCUW{
                        font-size: 16px;
                        color: #333;
                        float: left;
                     }
                     .AFCLAFCUPhoto{
                        width: 36px;
                        height: 36px;
                        margin-top: -10px;
                        border-radius: 50% ;
                        float: left;
                     }
                     .AFCLAFCUName{
                        float: left;
                        font-size: 16px;
                        color: #00aefc;
                        margin-left: 16px;
                     }
                     .AFCLAFCUTime{
                        float: left;
                        font-size: 16px;
                        color: #999;
                        margin-left: 20px;
                     }
                  }
               }
               //被多少人查看
               .AFCLAFCBVBox{
                  width: 140px;
                  height: 140px;
                  float: right;
                  text-align: center;
                  .AFCLAFCBVBTop{
                     font-size: 14px;
                     color: #999;
                     margin: 18px auto 0;
                  }
                  .AFCLAFCBVBConter{
                     font-size: 32px;
                     color: #333;
                     margin: 18px auto 0;
                  }
                  .AFCLAFCBVBBottom{
                     font-size: 14px;
                     color: #999;
                     margin: 18px auto 0;
                  }
               }
            }
         }
      }
   }
   //右边内容部分
   .AFCRight{
      width: 321px;
      float: right ;
      //右边内容顶部
      .AFCRTop{
         width: 100% ;
         height: 160px;
         background-color: #fff;
         border-radius: 14px;
         //右边内容顶部左右侧
         .AFCRTContent{
            width: 160px;
            height: 160px;
            float: left;
            text-align: center;
            color: #333;
            .AFCRTLNumber{
               font-size: 28px;
               font-weight: bold;
               margin-top: 59px;
            }
            .AFCRTLWord{
               font-size: 14px;
            }
         }
         //右边内容顶部中间横线
         .AFCRTC{
            width: 1px;
            height: 100px;
            background-color: #cecece;
            float: left;
            margin-top: 30px;
         }
      }
      //右边内容下部
      .AFCRContent{
         width: 100% ;
         background-color: #fff;
         border-radius: 14px;
         //右边内容下部的头部
         .AFCRCTop{
            width: 100% ;
            height: 50px;
            border-bottom: 1px solid #cecece;
            line-height: 50px;
            margin-top: 10px;
            font-size: 14px;
            padding: 0 22px;
            color: #333;
            box-sizing: border-box;
         }
         //右边内容下部的中心部分
         .AFCRCConter{
            width: 100% ;
            padding: 0 16px 30px 16px;
            .AFCRCCI{
               width: 100% ;
               height: 60px;
               line-height: 60px;
               border: 1px solid #cecece;
               border-radius: 8px;
               margin-top: 8px;
               cursor: pointer;
               .AFCRCCIRanking{
                  width: 60px;
                  height: 60px;
                  float: left;
                  margin-left: 8px;
                  position: relative;
                  box-sizing: border-box;
                  img{
                     position: absolute;
                     top: 50%;
                     left: 50%;
                     transform: translate(-50%,-50%);
                  }
                  .RankingNumber{
                     width: 30px;
                     height: 30px;
                     font-size: 22px;
                     text-align: center;
                     line-height: 30px;
                     color: #333;
                     position: absolute;
                     top: 50%;
                     left: 50%;
                     transform: translate(-50%,-50%);
                  }
               }
               .AFCRCCIUserPhoto{
                  width: 36px;
                  height: 36px;
                  margin: 12px 0 ;
                  float: left;
               }
               .AFCRCCIUserName{
                  font-size: 14px;
                  color: #333;
                  margin-left: 4px;
                  float: left;
               }
               .AFCRCCINumber{
                  font-size: 16px;
                  color: #333;
                  float: right;
                  margin-right: 14px;
               }
            }
         }
      }
   }
}
  
</style>


