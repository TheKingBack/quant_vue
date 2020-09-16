<template>
   <div>
    <!-- 下部内容部分(我的策略) -->
    <div class="SCCenter">
      <!-- 左边内容部分 -->
      <div class="SCCenterL">
        <!-- 左边内容头部 -->
        <div class="SCCenterLHead">
          <div class="MyShare SCCLHeadActive" @click="HandPage(1)">我的分享</div>
          <div class="MySubscriptions" @click="HandPage(2)">我的订阅</div>
          <div class="ScoringRules" @click="OpenScoringRulesC">评分规则</div>
          <div class="ScoringRulesC">
            <div class="TheCententHead">策略评分规则</div>
            <div class="TheCententC">1.系统根据每个策略的累计收益、今日收益、最大回测、Sharpe、持仓数量计算策略评分；</div>
            <div class="TheCententC">2.每个交易日的17：00更新策略评分和策略排名；</div>
            <div class="TheCententC">3.第一次分享的策略获得1600的初始分，但没有排名，需要经历任意一个交易日的17：00才会获得排名。</div>
            <div class="TheCententC">4.可以在往期排名中查看某个阶段（周、月、季、年）的排名情况。</div>
            <div class="IKnow" @click="CloseScoringRulesC">我知道了</div>
          </div>
        </div>
        <!-- 左边内容中心内容部分(我的分享) -->
        <div class="SCCenterLCentent" @click="GoRingDetails" v-show="SCentent" v-for="item in StrategicScoreData" :key="item.id">
          <!-- 左边内容中心内容部分上部 -->
          <div class="SCCLCTop">
            <img class="RankingsImg" :src="item.rankingsImg" alt="">
            <div class="StrategicName">{{item.strategicName}}</div>
            <div class="PleaseSubscribe" v-show="item.subscribe==1">允许订阅</div>
            <div class="SubscribeFull" v-show="item.subscribe==0">订阅已满</div>
            <div class="Subscribed">已订阅：{{item.subscribed}}</div>
            <img class="UserImg" :src="item.userImg" alt="">
            <div class="UserName">{{item.userName}}</div>
          </div>
          <!-- 左边内容中心内容部分下部 -->
          <ul class="SCCLCArticle">
            <li>
                <div class="DataCentent">{{item.strategicScore}}</div>
                <div class="DataNav">策略评分</div>
            </li>
            <li>
                <div class="DataCentent">{{item.rankingsChange}}</div>
                <div class="DataNav">排名变化</div>
            </li>
            <li>
                <div class="DataCentent">{{item.cumulativeIncome}}</div>
                <div class="DataNav">累计收益</div>
            </li>
            <li>
                <div class="DataCentent">{{item.todayIncome}}</div>
                <div class="DataNav">今日收益</div>
            </li>
            <li>
                <div class="DataCentent">{{item.maximumRetest}}</div>
                <div class="DataNav">最大回测</div>
            </li>
            <li>
                <div class="DataCentent">{{item.initialFunds}}</div>
                <div class="DataNav">初始资金</div>
            </li>
            <li>
                <div class="DataCentent">{{item.startTime}}</div>
                <div class="DataNav">起始时间</div>
            </li>
          </ul>
        </div>
        <!-- 左边内容中心内容部分(我的分享空) -->
        <div class="Empty" v-show="SCententK">
          <div class="Ecenter">
            <div class="BackGroundImg"></div>
            <div class="Ecentent">你尽然还没有上擂台，赶紧去和他们PK吧</div>
            <router-link class="GoShare" to="#" onclick="return false">分享策略</router-link>
          </div>
        </div>

        <!-- 左边内容中心内容部分(我的订阅) -->
        <div class="SCCenterLCentent" @click="GoRingDetails" v-show="DCentent" v-for="item in StrategicScoreData" :key="item.id">
          <!-- 左边内容中心内容部分上部 -->
          <div class="SCCLCTop">
            <img class="RankingsImg" :src="item.rankingsImg" alt="">
            <div class="StrategicName">{{item.strategicName}}</div>
            <div class="PleaseSubscribe" v-show="item.subscribe==1">允许订阅</div>
            <div class="SubscribeFull" v-show="item.subscribe==0">订阅已满</div>
            <div class="Subscribed">已订阅：{{item.subscribed}}</div>
            <img class="UserImg" :src="item.userImg" alt="">
            <div class="UserName">{{item.userName}}</div>
          </div>
          <!-- 左边内容中心内容部分下部 -->
          <ul class="SCCLCArticle">
            <li>
                <div class="DataCentent">{{item.strategicScore}}</div>
                <div class="DataNav">策略评分</div>
            </li>
            <li>
                <div class="DataCentent">{{item.rankingsChange}}</div>
                <div class="DataNav">排名变化</div>
            </li>
            <li>
                <div class="DataCentent">{{item.cumulativeIncome}}</div>
                <div class="DataNav">累计收益</div>
            </li>
            <li>
                <div class="DataCentent">{{item.todayIncome}}</div>
                <div class="DataNav">今日收益</div>
            </li>
            <li>
                <div class="DataCentent">{{item.maximumRetest}}</div>
                <div class="DataNav">最大回测</div>
            </li>
            <li>
                <div class="DataCentent">{{item.initialFunds}}</div>
                <div class="DataNav">初始资金</div>
            </li>
            <li>
                <div class="DataCentent">{{item.startTime}}</div>
                <div class="DataNav">起始时间</div>
            </li>
          </ul>
        </div>
        <!-- 左边内容中心内容部分(我的订阅空) -->
        <div class="Empty" v-show="DCententK">
          <div class="Ecenter">
            <div class="BackGroundImg"></div>
            <div class="Ecentent">你还没有订阅策略哦，赶紧去订阅吧</div>
            <router-link class="GoShare" to="javascript:;">去订阅</router-link>
          </div>
        </div>

        <!-- 下部的分页 -->
        <div class="paging" v-show="Paging">
          <el-pagination
          background layout="prev, pager, next" 
          :total="rankingsTotal" 
          :page-size="pageSize"
          :current-page="rankingsCP"
          @current-change="RankingsCPChange">
          </el-pagination>
        </div>

        
      </div>
      <!-- 右边内容部分 -->
      <div class="SCCenterR">
        <!-- 右边内容的nav部分 -->
        <div class="SCCenterRHead">
          <div class="PersonalRankings">个人排行榜</div>
          <div class="RankingRules" @click="OpenRankingRules">排名规则</div>
          <!-- 点击排名规则出现的内容 -->
          <div class="RankingRulesC">
            <!-- 点击排名规则出现的内容上部 -->
            <div class="TheCententHead">排名规则</div>
            <!-- 点击排名规则出现的内容下部 -->
            <div class="TheCententC">1.系统取每个人分享的所有策略的最高分作为个人的评分；</div>
            <div class="TheCententC">2.每个交易日的17：00更新个人评分和个人排名；</div>
            <div class="TheCententC">3.第一次分享策略的用户，可以获得1600的初试分数，但没有排名，需要经历任意一个交易日的17：00才会获得排名。</div>
            <!-- 点击排名规则出现的内容按钮 -->
            <div class="IKnow" @click="CloseRankingRulesC">我知道了</div>
          </div>
        </div>
        <!-- 右边内容的中心部分 -->
        <div class="SCCenterRCentent">
          <!-- 我的排名（已经分享并登陆了） -->
          <div class="MyRankings" v-show="false" v-for="item in MyRankingsData" :key="item.id">
            <img class="MRNumber" :src="item.MRNumber" alt="">
            <img class="MRUserImage" :src="item.MRUserImage" alt="">
            <div class="MRIntroduce">自己的排名</div>
            <div class="MRFraction">{{item.MRFraction}}分</div>
          </div>
          <!-- 我的排名（已经登陆了还没有分享） -->
          <div class="MyRankings1" v-show="false">
            <div class="NoSharing">你尽然还没有上擂台赶紧去和他们PK吧</div>
            <div class="SharingStrategy">分享策略</div>
          </div>
          <!-- 我的排名（还没有登录） -->
          <div class="MyRankings2" v-show="true">
            <div class="NoLogin">您未登录</div>
            <div class="NoRankings">无法查看排名呦</div>
            <router-link class="GoLogin" to="/Login/SignalPK">立即登录</router-link>
          </div>
          <!-- 别人排名 -->
          <div class="OtherRankings" v-for="item in PersonalRankingsData" :key="item.id">
            <img class="ORNumber" :src="item.ORNumber" alt="">
            <img class="ORUserImage" :src="item.ORUserImage" alt="">
            <div class="ORUserName">{{item.ORUserName}}</div>
            <div class="ORFraction">{{item.ORFraction}}分</div>
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
    Global
  },
  mounted() {},
  data() {
    return {
      //Tab切换栏用的东西
      SCentent:false,
      SCententK:true,
      DCentent:false,
      DCententK:false,
      Paging:false,



      AIadvisorMenu: Global.getPageMenu("SignalRing"),
      // 每页显示个数
      pageSize:5,
      // 参加排名的总数
      rankingsTotal:20,
      // 当前页数
      rankingsCP:1,

      //策略评分的数据
      StrategicScoreData:[
        {
          rankingsImg:"/static/SignalRing/SignalPK/icon_jinpai.png",
          strategicName:"招行伊利配对轮动",
          subscribe:1,
          subscribed:"6",
          userImg:"/static/SignalRing/SignalPK/dm.png",
          userName:"永恒的鑫光",
          strategicScore:"2637.35",
          rankingsChange:"=",
          cumulativeIncome:"118.35%",
          todayIncome:"1.73%",
          maximumRetest:"8.88%",
          initialFunds:"20000",
          startTime:"16-08-01",
        },{
          rankingsImg:"/static/SignalRing/SignalPK/icon_yinpai.png",
          strategicName:"招行伊利配对轮动",
          subscribe:0,
          subscribed:"6",
          userImg:"/static/SignalRing/SignalPK/dm.png",
          userName:"永恒的鑫光",
          strategicScore:"2637.35",
          rankingsChange:"=",
          cumulativeIncome:"118.35%",
          todayIncome:"1.73%",
          maximumRetest:"8.88%",
          initialFunds:"20000",
          startTime:"16-08-01",
        },{
          rankingsImg:"/static/SignalRing/SignalPK/icon_tongpai.png",
          strategicName:"招行伊利配对轮动",
          subscribe:1,
          subscribed:"6",
          userImg:"/static/SignalRing/SignalPK/dm.png",
          userName:"永恒的鑫光",
          strategicScore:"2637.35",
          rankingsChange:"=",
          cumulativeIncome:"118.35%",
          todayIncome:"1.73%",
          maximumRetest:"8.88%",
          initialFunds:"20000",
          startTime:"16-08-01",
        },{
          rankingsImg:"/static/SignalRing/SignalPK/rankings_04.png",
          strategicName:"招行伊利配对轮动",
          subscribe:0,
          subscribed:"6",
          userImg:"/static/SignalRing/SignalPK/dm.png",
          userName:"永恒的鑫光",
          strategicScore:"2637.35",
          rankingsChange:"=",
          cumulativeIncome:"118.35%",
          todayIncome:"1.73%",
          maximumRetest:"8.88%",
          initialFunds:"20000",
          startTime:"16-08-01",
        },{
          rankingsImg:"/static/SignalRing/SignalPK/rankings_05.png",
          strategicName:"招行伊利配对轮动",
          subscribe:1,
          subscribed:"6",
          userImg:"/static/SignalRing/SignalPK/dm.png",
          userName:"永恒的鑫光",
          strategicScore:"2637.35",
          rankingsChange:"=",
          cumulativeIncome:"118.35%",
          todayIncome:"1.73%",
          maximumRetest:"8.88%",
          initialFunds:"20000",
          startTime:"16-08-01",
        },
      ],

      //个人排行榜的数据
      // 我的策略排行数据
      MyRankingsData:[
        {
          MRNumber:"/static/SignalRing/SignalPK/icon_touxiang_jinpai.png",
          MRUserImage:"/static/SignalRing/SignalPK/dm.png",
          MRFraction:"2563.08",
        },
      ],
      // 策略排名
      PersonalRankingsData:[
        {
          ORNumber:"/static/SignalRing/SignalPK/icon_touxiang_jinpai.png",
          ORUserImage:"/static/SignalRing/SignalPK/dm.png",
          ORUserName:"永恒的鑫光",
          ORFraction:"2563.08",
        },{
          ORNumber:"/static/SignalRing/SignalPK/icon_touxiang_yinpai_05.png",
          ORUserImage:"/static/SignalRing/SignalPK/dm.png",
          ORUserName:"永恒的鑫光",
          ORFraction:"2563.08",
        },{
          ORNumber:"/static/SignalRing/SignalPK/icon_paiming_tongpai.png",
          ORUserImage:"/static/SignalRing/SignalPK/dm.png",
          ORUserName:"永恒的鑫光",
          ORFraction:"2563.08",
        },{
          ORNumber:"/static/SignalRing/SignalPK/04.png",
          ORUserImage:"/static/SignalRing/SignalPK/dm.png",
          ORUserName:"永恒的鑫光",
          ORFraction:"2563.08",
        },{
          ORNumber:"/static/SignalRing/SignalPK/05.png",
          ORUserImage:"/static/SignalRing/SignalPK/dm.png",
          ORUserName:"永恒的鑫光",
          ORFraction:"2563.08",
        },{
          ORNumber:"/static/SignalRing/SignalPK/06.png",
          ORUserImage:"/static/SignalRing/SignalPK/dm.png",
          ORUserName:"永恒的鑫光",
          ORFraction:"2563.08",
        },{
          ORNumber:"/static/SignalRing/SignalPK/07.png",
          ORUserImage:"/static/SignalRing/SignalPK/dm.png",
          ORUserName:"永恒的鑫光",
          ORFraction:"2563.08",
        },{
          ORNumber:"/static/SignalRing/SignalPK/08.png",
          ORUserImage:"/static/SignalRing/SignalPK/dm.png",
          ORUserName:"永恒的鑫光",
          ORFraction:"2563.08",
        },
      ],
    };
  },
  mounted(){
    this.$nextTick(function() {
			this.GetSignalPKData(this.signalCitySCP,this.pageSize);
		});
  },
  methods: {
    //前往擂台详情页面
    GoRingDetails(){
      this.$router.push("/RingDetails");
    },

   //点击切换Tab栏
   HandPage(type){
      if(type=="1"){
        this.SCentent = false;
        this.SCententK = true;
        this.DCentent = false;
        this.DCententK = false;
        this.Paging = false;
        $(".MyShare").addClass("SCCLHeadActive");
        $(".MySubscriptions").removeClass("SCCLHeadActive");
      }else{
        this.SCentent = false;
        this.SCententK = false;
        this.DCentent = true;
        this.DCententK = false;
        this.Paging = true;
        $(".MySubscriptions").addClass("SCCLHeadActive");
        $(".MyShare").removeClass("SCCLHeadActive");
      }
   },


    //排名规则提示显示
    OpenRankingRules(){
      $(".RankingRulesC").fadeIn("slow");
    },
    //关闭排名规则提示显示
    CloseRankingRulesC(){
      $(".RankingRulesC").fadeOut("slow");
    },

    //评分规则提示显示
    OpenScoringRulesC(){
      $(".ScoringRulesC").fadeIn("slow");
    },
    //关闭评分规则提示显示
    CloseScoringRulesC(){
      $(".ScoringRulesC").fadeOut("slow");
    },


    // 获取分页中每一页的数据（信号擂台）
    RankingsCPChange: function(curPage) {
      var self = this;
      self.rankingsCP = curPage;
      //Get current page data from back end
      self.GetSignalPKData(self.SignalRingCP,self.pageSize);
    },

    // 页面刷新发送请求
    GetSignalPKData: function(Cpage,CpageSize) {
      this.$http.get(Global.getRequestUrl() + "/favor/list",
				{
					params: {
						'page': Cpage,
						'pageSize':CpageSize
					},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				var resp = resp.body;
				if(resp.success) {
						this.rankingsTotal = resp.data.pagination.total;
						console.log("获取我的策略排名列表成功，结果为：");
						this.StrategicScoreData = resp.data.results;
				}else {
					console.error("获取我的策略排名列表失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
			}, function(error) {
				console.error("获取我的策略排名列表请求失败！");
				console.error(error);
			});
   },
  },
};
</script>

<style lang="less" scoped>
// 下部内容部分(我的策略)
.SCCenter{
  width: 100% ;
  overflow: hidden;
  //左边内容
  .SCCenterL{
    width: 838px;
    float: left;
    padding:0 0 80px 8px;
    box-sizing: border-box;
    position: relative;
    //左边内容头部
    .SCCenterLHead{
      width: 100% ;
      height: 14px;
      padding: 0px 4px;
      box-sizing: border-box;
      margin: 22px 0 12px;
      position: relative;
      //左边内容导航栏
      .MyShare,
      .MySubscriptions,{
        float: left;
        margin-right: 20px;
        color: #333;
        font-size: 14px;
        cursor: pointer;
      }
      //点击内容头部后的样式
      .SCCLHeadActive{
        color: #00aefc;
      }
      //策略评分规则
      .ScoringRules{
        float: right;
        color: #00aefc;
        font-size: 14px;
        cursor: pointer;
      }
      //点击评分规则后出现的内容
      .ScoringRulesC{
        position: absolute;
        top: 22px;
        right: -66px;
        display: none;
        width: 256px;
        height: 340px;
        background-color: #fff;
        border-radius: 14px;
        box-shadow: 0 0 16px rgba(0,0,0,0.4);
        z-index: 9999;
        padding: 22px;
        box-sizing: border-box;
        .TheCententHead{
          width: 100% ;
          font-size: 16px;
          text-align: center;
          margin: 0 auto 14px;
          color: #333;
        }
        .TheCententC{
          width: 100% ;
          font-size: 14px;
          margin-bottom: 2px;
          color: #666;
          line-height: 1.3em;
        }
        .IKnow{
          width: 114px;
          height: 30px;
          margin: 26px auto 0;
          background-color: #00aefc;
          color: #fff;
          font-size: 14px;
          border-radius: 8px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
        }
      }
    }

    //左边内容中心(我的分享+我的订阅)
    .SCCenterLCentent{
      width: 100% ;
      height: 156px;
      box-shadow: 0 0 2px rgba(0,0,0,0.4);
      border-radius: 8px;
      margin-bottom: 14px;
      cursor: pointer;
      overflow: hidden;
      box-sizing: border-box;
      //左边内容中心内容部分上部
      .SCCLCTop{
        width: 100% ;
        height: 24px;
        margin: 22px 0 ;
        line-height: 24px;
        position: relative;
        //排名图片
        .RankingsImg{
          position: absolute;
          left: 50px;
          top: -8px;
          width: 30px;
        }
        //策略名字
        .StrategicName{
          float: left;
          margin-left: 96px;
          height: 24px;
          line-height: 24px;
          color: #333;
          font-size: 18px;
        }
        //订阅
        .PleaseSubscribe{
          float: left;
          margin-left: 254px;
          width: 80px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          color: #00aefc;
          border: 1px solid #00aefc;
          border-radius: 12px;
          font-size: 14px;
        }
        //订阅满了
        .SubscribeFull{
          float: left;
          margin-left: 254px;
          width: 80px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          color: #b4b4b4;
          border: 1px solid #b4b4b4;
          border-radius: 12px;
          font-size: 14px;
        }
        //已订阅多少人
        .Subscribed{
          float: left;
          margin-left: 16px;
          height: 24px;
          line-height: 24px;
          color: #333;
          font-size: 14px;
        }
        //用户头像
        .UserImg{
          position: absolute;
          right: 120px ;
          top: -6px;
          width: 34px;
          height: 34px;
          border-radius: 50% ;
        }
        //用户名字
        .UserName{
          float: left;
          margin-left: 68px;
          width: 80px;
          height: 24px;
          line-height: 24px;
          color: #333;
          font-size: 14px;
          position: relative;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
      //左边内容中心内容部分下部
      .SCCLCArticle{
        width: 100% ;
        display: flex;
        padding: 0 10px;
        li{
          flex: 1 ;
          float: left;
          //nav所对应的值
          .DataCentent{
            width: 100% ;
            font-size: 18px;
            text-align: center;
            color: #333;
            margin: 8px 0 10px;
          }
          //nav部分
          .DataNav{
            width: 100% ;
            font-size: 14px;
            text-align: center;
            color: #999;
          }
        }
      }
    }
    //左边内容中心(我的分享空+我的订阅空)
    .Empty{
      width: 828px;
      height: 680px;
      background-color: #fff;
      border-radius: 14px;
      box-shadow: 0 0 2px rgba(0,0,0,0.4);
      position: relative;
      .Ecenter{
        width: 260px;
        height: 228px;
        position: absolute;
        top: 50% ;
        left: 50% ;
        transform: translate(-50%,-50%);
        .BackGroundImg{
          width: 88px;
          height: 84px;
          margin: 0 0 22px 96px;
          background:  url("/static/SignalRing/SignalPK/icon_xinhaoweikong.png") no-repeat center;
        }
        .Ecentent{
          width: 100% ;
          font-size: 14px;
          color: #666;
          text-align: center;
        }
        .GoShare{
          display: block;
          width: 100px;
          height: 30px;
          margin: 16px auto 0;
          background-color: #00aefc;
          color: #fff;
          font-size: 14px;
          border-radius: 8px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
        }
      }
    }
    //分页
    .paging{
      position: absolute;
      bottom: 40px;
      right: 60px;
    }
  }
  //右边内容
  .SCCenterR{
    width: 348px;
    float: right;
    margin-right: 1px;
    //右边内容的nav部分
    .SCCenterRHead{
      width: 100% ;
      height: 16px;
      padding: 0px 4px;
      box-sizing: border-box;
      margin: 20px 0 14px;
      position: relative;
      //个人排行榜
      .PersonalRankings{
        float: left;
        margin-right: 20px;
        color: #333;
        font-size: 16px;
      }
      //排名规则
      .RankingRules{
        float: right;
        color: #00aefc;
        font-size: 14px;
        margin-top: 2px;
        cursor: pointer;
      }
      //点击排名规则出现的内容
      .RankingRulesC{
        position: absolute;
        top: 24px;
        right: 4px;
        display: none;
        width: 234px;
        height: 270px;
        background-color: #fff;
        border-radius: 14px;
        box-shadow: 0 0 16px rgba(0,0,0,0.4);
        z-index: 9999;
        padding: 22px;
        box-sizing: border-box;
        //点击排名规则出现的内容上部
        .TheCententHead{
          width: 100% ;
          font-size: 16px;
          text-align: center;
          margin: 0 auto 14px;
          color: #333;
        }
        //点击排名规则出现的内容下部
        .TheCententC{
          width: 100% ;
          font-size: 14px;
          margin-bottom: 2px;
          color: #666;
          line-height: 1.3em;
        }
        //点击排名规则出现的内容按钮
        .IKnow{
          width: 114px;
          height: 30px;
          margin: 16px auto 0;
          background-color: #00aefc;
          color: #fff;
          font-size: 14px;
          border-radius: 8px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
        }
      }
    }
    // 右边内容的中心部分
    .SCCenterRCentent{
      width: 100% ;
      box-shadow: 0 0 2px rgba(0,0,0,0.4);
      border-radius: 8px;
      overflow: hidden;
      // 我的排名
      .MyRankings{
        width: 100% ;
        height: 120px;
        background:  url("/static/SignalRing/SignalPK/icon_paiming_beijing.png") no-repeat center;
        position: relative;
        box-sizing: border-box;
        //我的名次
        .MRNumber{
          width: 24px;
          height: 28px;
          position: absolute;
          left: 20px;
          top: 47px;
        }
        //我的头像
        .MRUserImage{
          width: 52px;
          height: 52px;
          border-radius: 50% ;
          overflow: hidden;
          position: absolute;
          left: 54px;
          top: 35px;
        }
        //排名类型（自己的排名）
        .MRIntroduce{
          height: 16px;
          font-size: 16px;
          color: #333;
          float: left;
          margin: 52px 0 42px 118px;
        }
        //评分
        .MRFraction{
          height: 16px;
          font-size: 16px;
          color: #333;
          float: right;
          margin: 52px 24px 42px 0;
        }
      }
      //我的排名（已经登陆了还没有分享）
      .MyRankings1{
        width: 100% ;
        height: 120px;
        background:  url("/static/SignalRing/SignalPK/icon_paiming_beijing.png") no-repeat center;
        padding-top: 22px;
        box-sizing: border-box;
        .NoSharing{
          font-size: 14px;
          color: #666;
          width: 130px;
          text-align: center;
          line-height: 1.5em;
          margin: 0 auto;
        }
        .SharingStrategy{
          width: 102px;
          height: 30px;
          margin: 6px auto 0;
          background-color: #00aefc;
          color: #fff;
          font-size: 14px;
          border-radius: 15px;
          text-align: center;
          line-height: 30px;
          cursor: pointer;
        }
      }
      //我的排名（还没有登录）
      .MyRankings2{
        width: 100% ;
        height: 120px;
        background:  url("/static/SignalRing/SignalPK/icon_paiming_beijing.png") no-repeat center;
        padding-top: 22px;
        box-sizing: border-box;
        .NoLogin{
          font-size: 14px;
          color: #666;
          text-align: center;
          line-height: 1.5em;
          margin: 0 auto;
        }
        .NoRankings{
          font-size: 14px;
          color: #666;
          text-align: center;
          line-height: 1.5em;
          margin: 0 auto;
        }
        .GoLogin{
          display: block;
          width: 102px;
          height: 30px;
          margin: 6px auto 0;
          background-color: #00aefc;
          color: #fff;
          font-size: 14px;
          border-radius: 15px;
          text-align: center;
          line-height: 30px;
        }
      }
      // 下部别人排名
      .OtherRankings{
        width: 100% ;
        height: 70px;
        position: relative;
        border-top: 1px solid #ccc;
        box-sizing: border-box;
        //名次
        .ORNumber{
          width: 24px;
          height: 28px;
          position: absolute;
          left: 20px;
          top: 21px;
        }
        //头像
        .ORUserImage{
          width: 40px;
          height: 40px;
          border-radius: 50% ;
          overflow: hidden;
          position: absolute;
          left: 62px;
          top: 15px;
        }
        //昵称
        .ORUserName{
          height: 16px;
          font-size: 16px;
          color: #333;
          float: left;
          margin: 27px 0 27px 111px;
        }
        //评分
        .ORFraction{
          height: 16px;
          font-size: 16px;
          color: #333;
          float: right;
          margin: 27px 22px 27px 0;
        }
      }
    }
  }
}

</style>


