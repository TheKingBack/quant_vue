<template>
  <div>
     <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

      <div class="CRBigBox">

        <!-- 上边部分 -->
        <div class="CompetitionRankings-top">
          <div class="top-article contain">
            <div class="article-Image"></div>
          </div>
        </div>

        <!-- 中间部分 -->
        <div class="color">


          
          <div class="CompetitionRankings-center contain">

            <!-- 排行规则内容部分（点击出现） -->
            <div class="rule-specific" style="display:none;cursor:pointer">
              <div class="rule-title">策略评分规则</div>
              <div class="rule-center">
                <p>1.系统根据每个策略的具体收益、今日收益、最大回测、Sharpe、持仓数量计算策略评分;</p>
                <p>2.每个交易日的17:00更新2策略评分和策略排名;</p>
                <p>3.第一次分享的策略获得1600的初始分，但没有排名，需要经历任意一个交易日的17:00才会获得排名。</p>
              </div>
              <div class="close" @click='closeRule'>我知道了</div>
            </div>


            <!-- 头部 -->
            <div class="center-top">
              <div class="center-topTitle"></div>
            </div>

            <!-- 小的导航栏 -->
            <div class="center-nav">
              <div class="nav-left">排行榜每天五点更新</div>
              <div class="nav-right">
                <img @click="MyStrategy" v-show="Hidden" class="Choice" src="/static/SignalRing/CompetitionRankings/icon_weidianjiduihao.png" alt="">
                <img @click="MyStrategy1" v-show="Show" class="Choice" src="/static/SignalRing/CompetitionRankings/icon_duihao.png" alt="">
                <div class="mine">查看我的策略</div>
                <div class="rule" @click='openRule' style="cursor:pointer">排行规则</div>
              </div>
            </div>

            <!-- 中间展示 -->

            <!-- 我的策略 -->
            <div class="MyStrategy" v-show="myStrategy">

              <div class="center-center" v-for="item in MyStrategyData" :key="item.id">
                <div class="rankingImage">
                  <img class="photo" :src="item.RankingImage" alt="">
                </div>
                <div class="ranking">
                  <div class="strategyName">{{item.StrategyName}}</div>
                  <div class="teamName">团队名称：{{item.TeamName}}</div>
                  <div class="school">学校名称：{{item.School}}</div>

                </div>
                <ul class="teamData">
                  <li>
                    <div class="teamData-name">年化收益</div>

                    <div class="teamData-number red">{{item.AnnualIncome}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">年华波动率</div>
                    <div class="teamData-number">{{item.AnnualVolatility}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">最大回测</div>
                    <div class="teamData-number">{{item.MaximumRetest}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">夏普比例</div>
                    <div class="teamData-number">{{item.SHARPratio}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">模拟交易评分</div>
                    <div class="teamData-number">{{item.TransactionScore}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">回测评分</div>
                    <div class="teamData-number">{{item.BackTestScore}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">论文评分</div>
                    <div class="teamData-number">{{item.PaperScoring}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">综合评分</div>
                    <div class="teamData-number">{{item.ComprehensiveScore}}</div>

                  </li>
                </ul>
              </div>
            </div>

            <!-- 我的策略空空如也 -->
            <div class="blank" v-show="Blank">
              <div class="blank-photo">
                <img src="/static/SignalRing/CompetitionRankings/icon_meiyoucanjiadasai.png" alt="">
                <div class="blank-actial">你还没有参加大赛，赶快参加吧</div>
              </div>
              <div class="signUp">立即报名</div>
            </div>

            <!-- 排名部分 -->
            <div class="population" v-show="Population">

              <div class="center-center" v-for="item in TotalRankingData" :key="item.id">
                <div class="rankingImage">
                  <img class="photo" :src="item.RankingImage" alt="">
                </div>
                <div class="ranking">
                  <div class="strategyName">{{item.StrategyName}}</div>
                  <div class="teamName">团队名称：{{item.TeamName}}</div>
                  <div class="school">学校名称：{{item.School}}</div>

                </div>
                <ul class="teamData">
                  <li>
                    <div class="teamData-name">年化收益</div>

                    <div class="teamData-number red">{{item.AnnualIncome}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">年华波动率</div>
                    <div class="teamData-number">{{item.AnnualVolatility}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">最大回测</div>
                    <div class="teamData-number">{{item.MaximumRetest}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">夏普比例</div>
                    <div class="teamData-number">{{item.SHARPratio}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">模拟交易评分</div>
                    <div class="teamData-number">{{item.TransactionScore}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">回测评分</div>
                    <div class="teamData-number">{{item.BackTestScore}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">论文评分</div>
                    <div class="teamData-number">{{item.PaperScoring}}</div>
                  </li>
                  <li>
                    <div class="teamData-name">综合评分</div>
                    <div class="teamData-number">{{item.ComprehensiveScore}}</div>

                  </li>
                </ul>
              </div>

              <!-- 底部加载 -->
              <div class="center-bottom" style="cursor:pointer;">加载更多</div>
              </div>
            
            </div>
        </div>
        
      </div>

   <footer-bar></footer-bar>
  </div>
</template>

<script>

import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"
import Global from "@/components/layout/Global"

export default {
  components: {
      NavBar,
      FooterBar,
      Global
  },
  mounted() {
    // 点击跳转到大赛详情页面
    this.ToCompetitionDetails();

    //当页面生成时就发送请求获取总排行榜页面
    this.GetTotalRankingData();

    //当页面生成时就发送请求获取我的策略排行榜页面
    this.GetMyStrategyData();
  },
  data() {
    return {
      AIadvisorMenu: Global.getPageMenu("SignalRing"),
      myStrategy: false,
      Blank: false,
      Population:true,
      Hidden:true,
      Show:false,

      ID:"",

      //我的策略数据排名
      MyStrategyData:[
        {
          id:"1",
          RankingImage:"/static/SignalRing/CompetitionRankings/icon_jinpai.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
        {
          id:"2",
          RankingImage:"/static/SignalRing/CompetitionRankings/icon_yinpai.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
        {
          id:"3",
          RankingImage:"/static/SignalRing/CompetitionRankings/icon_tongpai.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
      ],

      //总的策略排名数据
      TotalRankingData:[
        {
          id:"1",
          RankingImage:"/static/SignalRing/CompetitionRankings/icon_jinpai.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
        {
          id:"2",
          RankingImage:"/static/SignalRing/CompetitionRankings/icon_yinpai.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
        {
          id:"3",
          RankingImage:"/static/SignalRing/CompetitionRankings/icon_tongpai.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
        {
          id:"4",
          RankingImage:"/static/SignalRing/CompetitionRankings/rankings_04.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
        {
          id:"5",
          RankingImage:"/static/SignalRing/CompetitionRankings/rankings_05.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
        {
          id:"6",
          RankingImage:"/static/SignalRing/CompetitionRankings/rankings_06.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
        {
          id:"7",
          RankingImage:"/static/SignalRing/CompetitionRankings/rankings_07.png",
          StrategyName:"招行伊利配对轮动",
          TeamName:"新闻1+1",
          School:"清华大学",
          AnnualIncome:"240.2%",
          AnnualVolatility:"20.2%",
          MaximumRetest:"8.35%",
          SHARPratio:"123.73%",
          TransactionScore:"8.88",
          BackTestScore:"2.03",
          PaperScoring:"=",
          ComprehensiveScore:"82",
        },
      ],
    }
  },
  methods:{

    //点击我的策略发送请求获取我的策略数据
    GetMyStrategyData: function(CType,Cpage,CpageSize) {
      this.$http.get(Global.getRequestUrl() + "/favor/list",
				{
					params: {
						'id': this.ID,
					},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				var resp = resp.data;
				if(resp.success) {
          this.ID = resp.results.id;
          console.log("获取我的策略排行榜列表成功，结果为：");
          console.log(resp.results);
          //返回的信号类型格式应为：
          //{id: 1, name: "小市值策略1", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1}
          this.MyStrategyData = resp.MyStrategyData;
          //To remove
          // this.signalListData = [
          // 	{id: 1, name: "小市值策略1", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1},
          // 	{id: 2, name: "小市值策略2", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1}];

          console.log(this.MyStrategyData);
				}else {
					console.error("获取我的策略排行榜列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {
				console.error("获取我的策略排行榜列表请求失败！");
				console.error(error);
			});
    },

    //进入排行榜就发送请求获取总排行榜
    GetTotalRankingData: function(CType,Cpage,CpageSize) {
      this.$http.get(Global.getRequestUrl() + "/favor/list",
				{
					params: {
						'id': this.ID,
					},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				var resp = resp.data;
				if(resp.success) {
          this.ID = resp.results.id;
          console.log("获取总排行榜列表成功，结果为：");
          console.log(resp.results);
          //返回的信号类型格式应为：
          //{id: 1, name: "小市值策略1", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1}
          this.MyStrategyData = resp.MyStrategyData;
          //To remove
          // this.signalListData = [
          // 	{id: 1, name: "小市值策略1", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1},
          // 	{id: 2, name: "小市值策略2", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1}];

          console.log(this.MyStrategyData);
				}else {
					console.error("获取总排行榜列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {
				console.error("获取总排行榜列表请求失败！");
				console.error(error);
			});
    },

    //点击出现规则弹窗
    openRule:function () {
      $('.rule-specific').fadeIn('1000');
    },
    closeRule:function() {
      $('.rule-specific').fadeOut('1000');
    },

    // 点击生成我的策略
    MyStrategy:function() {
      this.Hidden = this.Population =false;
      this.Show = this.myStrategy = true;
    },
    MyStrategy1:function () {
      this.Hidden = this.Population =true;
      this.Show = this.myStrategy = false;
    },

    // 点击跳转到大赛详情页面
    ToCompetitionDetails:function() {
      var that = this;
      $('.center-center').on('click',function() {
        that.$router.push("/CompetitionDetails");
      })
    }
  }
}

</script>

<style lang="less" scoped>
.CRBigBox {
  background-color: #f0f0f0;
  padding-bottom: 20px;
}
.contain {
  width: 1206px;
  margin: 0 auto;
  box-sizing: border-box;
}

// 最上边部分
.CompetitionRankings-top{
  width: 100%;
  height: 230px;
  margin: 0 auto;
  overflow: hidden;
  background:url('/static/SignalRing/CompetitionRankings/icon_banner.png') no-repeat center;
  .top-article{
    text-align: center;
    height: 230px ;
    padding-top: 80px;
    .article-Image{
      width: 664px ;
      height: 78px;
      margin: 0 auto;
      background:  url('/static/SignalRing/CompetitionRankings/icon_biaoti.png') no-repeat center;
    }
  }
}


// 中间部分

.color{
    width: 100% ;
    background-color: #fff;
  }
.CompetitionRankings-center{
  padding: 40px 0 60px 0;
  box-sizing: border-box;
  position: relative;


  // 出现规则内容弹框部分

  .rule-specific{
    width: 234px;
    height: 316px;
    z-index: 99999999;
    position: absolute;
    top: 160px;
    right: -52px;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    padding: 22px;
    border-radius: 8px;
    box-sizing: border-box;

    .rule-title{
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: #333;
      margin-bottom: 12px;
    }
    .rule-center{
      width: 100%;
      font-size: 14px;
      color: #333;
      line-height: 1.4em;
    }
    .close{
      width: 114px;
      height: 30px;
      margin:24px auto 0;
      text-align: center;
      background-color: #14aaff;
      color: #fff;
      font-size: 14px;
      border-radius: 8px;
      line-height: 30px;
    }
  }

  // 头部
  .center-top{
    width: 100%;
    height: 30px;
    margin-bottom: 68px;
    .center-topTitle{
      width: 216px;
      height: 30px;
      margin: 0 auto;
      background: url('/static/SignalRing/CompetitionRankings/icon_paihangbang.png') no-repeat;
    }
  }

  // 小的导航栏
  .center-nav{
    width: 100%;
    overflow: hidden;
    .nav-left{
      float: left;
      font-size: 14px;
      color: #666;
    }
    .nav-right{
      float: right;
      overflow: hidden;
      .Choice{
        display: block;
        float: left;
        margin-right: 8px;
        cursor: pointer;
        width: 12px;
        height: 12px;
      }
      .mine,
      .rule{
        float: left;
        font-size: 12px;
      }
      .mine{
        margin-right: 20px;
        color: #666;
      }
      .rule{
        color: #14aaff;
      }
    }
  }

  // 中间展示

  // 我的策略空空如也
  .blank{
    width: 100%;
    height: 400px;
    .blank-photo{
      width: 200px;
      height: 120px;
      margin: 140px auto 14px;
      img{
        margin-left: 66px;
      }
      .blank-actial{
        width: 100% ;
        text-align: center;
        font-size: 14px;
        color: #666;
        margin-top: 14px;
      }
    }
    .signUp{
      cursor: pointer;
      width: 100px;
      height: 30px;
      border-radius: 8px;
      background-color: #14aaff;
      color: #fff;
      text-align: center;
      line-height: 30px;
      margin: 0 auto;
    }
  }


  // 排名展示部分
  .center-center{

    cursor: pointer;

    width: 100%;
    height: 114px;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    padding-left: 82px;
    margin-top: 14px;
    position: relative;
    box-sizing: border-box;

    .rankingImage{
      width: 30px;

      height: 38px;
      position: absolute;
      left: 22px;
      top: 26px;

      .photo{
        margin: 0 auto;
      }

    }
    .ranking{
      width: 222px;
      float: left;
      padding: 8px 0 12px 0;
      box-sizing: border-box;
      position: relative;
      &::after{
        content: '';
        display: block;
        width: 2px;
        height: 64px;
        position: absolute;
        top: 25px;
        right: 0;
        background-color: #e3e3e3;
      }
      .strategyName{
        font-size: 18px;
        color: #333;
        margin: 18px 0;
      }
      .teamName{
        font-size: 12px;
        color: #999;
      }
      .school{
        font-size: 12px;
        color: #999;
        margin-top: 10px;
      }
    }
    .teamData{
      width: 896px;
      height: 112px;
      float: left;
      overflow: hidden;
      box-sizing: border-box;
      li{
        width: 12.5%;
        height: 112px;
        float: left;
        box-sizing: border-box;
        .teamData-name{
          width: 100%;
          text-align: center;
          font-size: 12px;
          color: #999;
          margin-top: 36px;
        }
        .teamData-number{
          width: 100%;
          text-align: center;
          font-size: 16px;
          color: #333;
          margin-top: 10px;
        }
        .red{
          color: #ec4343;
        }
      }
    }
  }

  // 底部加载
  .center-bottom{
    width: 100%;
    height: 50px;
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    text-align: center;
    font-size: 18px;
    color: #333;
    line-height: 50px;
    margin-top: 28px;
  }
}

</style>


