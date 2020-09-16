<template>


  <div>


  <!-- 点击弹出收藏模态框 -->
	<div class="clickCollection">
		<div class="clickCollection-center">
			<div class="clickCollection-top">
				确定要收藏该信号吗？
			</div>
			<div class="clickCollection-button">
				<div class="button-left" @click="CloseclickCollection">取消</div>
				<div class="button-right" @click="CollectionIt">确定</div>
			</div>
		</div>
	</div>



    <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

      <div class="CDBigBox">
        <div class="CDBg">
          <div class="CompetitionDetails-center contain">

            <!-- 最上边的第一名展示栏 -->
            <div class="CompetitionDetails-centerTop">
              <!-- 左边 -->
              <span class="left-span">当前排名</span>
              <span class="left1-span">1</span>
              <div class="centerTop-left"></div>

              <!-- 中间 -->
              <div class="centerTop-center">
                <div class="center-top">
                  <div class="center-topTitle">多因子制衡分析模型-模拟交易</div>
                  <div class="center-topLeft">
                    <div class="topLeft-team">团队名称：新闻1加1</div>
                    <div class="topLeft-school">学校名称：清华大学美院</div>
                  </div>
                  <div class="center-topRight">
                    <div class="topRight-time">开始时间：2018-02-01&nbsp;00:00:00</div>
                    <div class="topRight-capital">初始资金：1000000</div>
                  </div>
                </div>
                <ul class="center-bottom">
                  <li>
                    模拟交易评分
                    <span class="bottom-span">57.25</span>
                  </li>
                  <li>
                    回测评分
                    <span class="bottom-span">8.25</span>
                  </li>
                  <li>
                    论文评分
                    <span class="bottom-span">--</span>
                  </li>
                  <li>
                    综合评分
                    <span class="bottom-span">65.32</span>
                  </li>
                </ul>
              </div>

              <!-- 右边 -->
              <div class="centerTop-right"></div>
              <div class="TeamInformation">
                <div class="TeamInformation-title">团队信息</div>
                <ul class="TeamInformation-content">
                  <li>
                    <div class="content-l">笑笑爬</div>
                    <div class="content-r">队长</div>
                  </li>
                  <li>
                    <div class="content-l">小小</div>
                    <div class="content-r">成员</div>
                  </li>
                  <li>
                    <div class="content-l">撒娇</div>
                    <div class="content-r">指导老师</div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- 中间展示部分 -->

            <!-- 模拟交易 -->
            <div class="MockTrading">
              <div class="MockTrading-title">模拟交易</div>
              <ul class="MockTrading-content">
                <li>
                  <div class="span-t">累计收益</div>
                  <div class="span-b red">0.89%</div>
                </li>
                <li>
                  <div class="span-t">今日收益</div>
                  <div class="span-b red">0.64%</div>
                </li>
                <li>
                  <div class="span-t">最大回撤</div>
                  <div class="span-b">8.55%</div>
                </li>
                <li>
                  <div class="span-t">年化波动率</div>
                  <div class="span-b">1.32%</div>
                </li>
                <li>
                  <div class="span-t">alpha</div>
                  <div class="span-b">0.89%</div>
                </li>
                <li>
                  <div class="span-t">bata</div>
                  <div class="span-b">0.02%</div>
                </li>
                <li>
                  <div class="span-t">sharpe</div>
                  <div class="span-b">0.56%</div>
                </li>
              </ul>
            </div>

            <!-- 回测 -->
            <div class="BackProbe">
              <div class="BackProbe-title">回测</div>
              <ul class="BackProbe-content">
                <li>
                  <div class="span-t">累计收益</div>
                  <div class="span-b">=</div>
                </li>
                <li>
                  <div class="span-t">今日收益</div>
                  <div class="span-b">=</div>
                </li>
                <li>
                  <div class="span-t">最大回撤</div>
                  <div class="span-b">=</div>
                </li>
                <li>
                  <div class="span-t">年化波动率</div>
                  <div class="span-b">=</div>
                </li>
                <li>
                  <div class="span-t">alpha</div>
                  <div class="span-b">=</div>
                </li>
                <li>
                  <div class="span-t">bata</div>
                  <div class="span-b">=</div>
                </li>
                <li>
                  <div class="span-t">sharpe</div>
                  <div class="span-b">=</div>
                </li>
              </ul>
            </div>

            <!-- 收益走势 -->
            <div class="IncomeTrend">
              <div class="IncomeTrend-title">收益走势</div>

              <div class="IncomeTrend-content" v-for="sg in signals" :key="sg.id">

                  <div class="content-top">
                    <span class="content-span">缩放：</span>
                    <span class="content-span">1个月</span>
                    <span class="content-span">1年</span>
                    <span class="content-span">全部</span>
                  </div>
                  <div class="content-content" style="float:left;">
                    <signal-chart :chartData="sg.pChartData" style="height: 390px; width: 1128px; "></signal-chart>
                  </div>
                  <div  style="width:1.5em; float:left; padding-top:50px; padding-left:10px;">累计收益</div>
              </div>
            </div>

            <!-- 当前持仓 -->
            <div class="CurrentHolding">
              <div class="CurrentHolding-top">
                <div class="top-l">当前持仓</div>
                <div class="top-r">
                  <div class="right-title">历史持仓：</div>

                  <div class="right-time">
                    <div class="block">
                      <el-date-picker
                        v-model="value1"
                        type="date"
                        align="center"
                        size="mini"
                        placeholder="选择日期" style="width: 122px;">
                      </el-date-picker>
                    </div>
                  </div>
                </div>
              </div>
              <div class="CurrentHolding-table">
                <table  class="table" cellspacing="0" cellpadding="0">
                  <tr class="thead">
                    <td style="width:20%;height:40px;">股票</td>
                    <td style="width:10%;height:40px;">多空</td>
                    <td style="width:10%;height:40px;">数量</td>
                    <td style="width:10%;height:40px;">市值</td>
                    <td style="width:10%;height:40px;">成本价</td>
                    <td style="width:10%;height:40px;">现价</td>
                    <td style="width:10%;height:40px;">持仓比例</td>
                    <td style="width:20%;height:40px;">盈亏比例</td>
                  </tr>
                  <tr class="tbody" v-for="item in CurrentHolding" :key="item.Id">
                    <td style="width:20%;height:40px;">{{item.shares}}</td>
                    <td style="width:10%;height:40px;">{{item.duokong}}</td>
                    <td style="width:10%;height:40px;">{{item.number}}</td>
                    <td style="width:10%;height:40px;">{{item.marketValue}}</td>
                    <td style="width:10%;height:40px;">{{item.costPrice}}</td>
                    <td style="width:10%;height:40px;">{{item.presentPrice}}</td>
                    <td style="width:10%;height:40px;">{{item.positionRatio}}</td>
                    <td style="width:20%;height:40px;">{{item.lossRatio}}</td>
                  </tr>
                </table>
                <!-- <el-table :data="CurrentHolding" height="196" border style="width: 100%">

                  <el-table-column prop="shares" label="股票" width="202"style='text-align: center'> </el-table-column>
                  <el-table-column prop="duokong" label="多空" width="130"> </el-table-column>
                  <el-table-column prop="number" label="数量" width="130"> </el-table-column>
                  <el-table-column prop="marketValue" label="市值" width="130"> </el-table-column>
                  <el-table-column prop="costPrice" label="成本价" width="130"> </el-table-column>
                  <el-table-column prop="presentPrice" label="现价" width="130"> </el-table-column>
                  <el-table-column prop="positionRatio" label="持仓比例" width="130"> </el-table-column>
                  <el-table-column prop="lossRatio" label="盈亏比例" width="202"> </el-table-column>

                </el-table> -->
              </div>
              
            </div>

            <!-- 最新下单 -->
            <div class="latestOrder">
              <div class="latestOrder-top">最新下单</div>
              <div class="latestOrder-table">

                <table  class="table" cellspacing="0" cellpadding="0">
                  <tr class="thead">
                    <td style="width:20%;height:40px;">股票</td>
                    <td style="width:10%;height:40px;">时间</td>
                    <td style="width:10%;height:40px;">交易类型</td>
                    <td style="width:10%;height:40px;">下单状态</td>
                    <td style="width:10%;height:40px;">状态</td>
                    <td style="width:10%;height:40px;">委托数量</td>
                    <td style="width:10%;height:40px;">成交数量</td>
                    <td style="width:10%;height:40px;">委托价格</td>
                    <td style="width:10%;height:40px;">成交价格</td>
                  </tr>
                  <tr class="tbody" v-for="item in latestOrder" :key="item.Id">
                    <td style="width:20%;height:40px;">{{item.shares}}</td>
                    <td style="width:10%;height:40px;">{{item.time}}</td>
                    <td style="width:10%;height:40px;">{{item.transaction}}</td>
                    <td style="width:10%;height:40px;">{{item.singlState}}</td>
                    <td style="width:10%;height:40px;">{{item.state}}</td>
                    <td style="width:10%;height:40px;">{{item.Enumber}}</td>
                    <td style="width:10%;height:40px;">{{item.Snumber}}</td>
                    <td style="width:10%;height:40px;">{{item.Eprice}}</td>
                    <td style="width:10%;height:40px;">{{item.Sprice}}</td>
                  </tr>
                </table>
                <!-- <el-table :data="latestOrder" height="196" border style="width: 100%">

                  <el-table-column class="table-top" prop="shares" label="股票" width="224"> </el-table-column>
                  <el-table-column class="table-top" prop="time" label="时间" width="120"> </el-table-column>
                  <el-table-column class="table-top" prop="transaction" label="交易类型" width="120"> </el-table-column>
                  <el-table-column class="table-top" prop="singlState" label="下单状态" width="120"> </el-table-column>
                  <el-table-column class="table-top" prop="state" label="状态" width="120"> </el-table-column>
                  <el-table-column class="table-top" prop="Enumber" label="委托数量" width="120"> </el-table-column>
                  <el-table-column class="table-top" prop="Snumber" label="成交数量" width="120"> </el-table-column>
                  <el-table-column class="table-top" prop="Eprice" label="委托价格" width="120"> </el-table-column>
                  <el-table-column class="table-top" prop="Sprice" label="成交价格" width="120"> </el-table-column>

                </el-table> -->

              </div>
              
            </div>

            <!-- 分享 -->
            <ul class="share">
              <li>

                <div style="cursor:pointer" class="share-one" type="text" @click="OpenclickCollection">收藏</div>

              </li>
              <li class="share-two">分享：</li>
              <li class="share-three"></li>
              <li class="share-four"></li>
              <li class="share-five"></li>
            </ul>

            
          </div>
        </div>
        

        <!-- 下部讨论区 -->
        <div class="discussion">
          <div class="discuss">
            <div class="discuss-area">
              <span class="discuss-area-slider"></span>
              <span class="discuss-area-text">讨论区</span>
            </div>
            <div class="discuss-message" v-for="distext in discussionMessage" :key="distext.id">
              <div class="discuss-message-box">
                <img :src="distext.discussionImg"/>
                <span class="discuss-message-nickname">{{distext.reply}}</span>
              </div>
              <div class="discuss-message-msg">{{distext.dis_text}}</div>
              <div class="discuss-message-reply">
                <img src="/static/Buyersignal/icon_huifu.png" alt="" />
                <span class="discussion-message-reply-msg">回复</span>
              </div>
            </div>
            <div class="discuss_input">
                <textarea name="" rows="" cols=""></textarea>
            </div>
            <div class="discuss_btn">
              <el-button type="primary">确认发送</el-button>
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
import SignalChart from "@/components/layout/SignalChart";
import Highstock from "highcharts/highstock";


window.onload = function() {};


var mockSignals = [
  {
    pChartData: {
      id: "signalChart1",
      options: [],
      startDate: "2016-06-11",
      amountMoney: "30000",
      frequency: "每天"
    }
  }
];

export default {
  components: {
    NavBar,
    FooterBar,
    Global,
    SignalChart,
  },
  mounted() {
    this.$nextTick(function() {
      // this.loadEconomicForecastData();
    });

  },
  data() {
    return {
      AIadvisorMenu: Global.getPageMenu("SignalRing"),
      signals: mockSignals,
      stateData: [],


      // 下部讨论的数据
      discussionMessage:[
					{discussionImg:'./static/icon_xiangqing_dingbutouxiang.png',reply:'赵雷',dis_text:'瞬间忆起张爱玲的《爱》 补充：于千万人之中遇到你所要遇到的人，于千万年之中，时间的无涯的荒野中，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话好说，唯有轻轻的问一声：“噢，你也在这里吗？”'},
					{discussionImg:'./static/icon_xiangqing_dingbutouxiang.png',reply:'张碧晨',dis_text:'以前高中打游戏。 经常去网吧通宵。 前面坐个长发妹子。 很长的那种。 每次玩上课睡觉她总会把扎着头发放开 。 多年后同学会发现她剪了短发。 依然那么漂亮。 问她为什么剪了。 她说其实她不喜欢留长头发。 留长头发是为了她后面经常熬夜的少年能够睡个安稳觉不被老师发现。现在不见多年。”'}
			],

      CurrentHolding: [
        {
          shares: "同大股份",
          duokong: "多仓",
          number: "2100股",
          marketValue: "100",
          costPrice: "500",
          presentPrice: "1500",
          positionRatio: "23%",
          lossRatio: "+3336 / 16.11%"
        },
        {
          shares: "同大股份",
          duokong: "多仓",
          number: "2100股",
          marketValue: "100",
          costPrice: "500",
          presentPrice: "1500",
          positionRatio: "23%",
          lossRatio: "+3336/16.11%"
        },
        {
          shares: "同大股份",
          duokong: "多仓",
          number: "2100股",
          marketValue: "100",
          costPrice: "500",
          presentPrice: "1500",
          positionRatio: "23%",
          lossRatio: "+3336/16.11%"
        },
        {
          shares: "同大股份",
          duokong: "多仓",
          number: "2100股",
          marketValue: "100",
          costPrice: "500",
          presentPrice: "1500",
          positionRatio: "23%",
          lossRatio: "+3336/16.11%"
        },
        {
          shares: "同大股份",
          duokong: "多仓",
          number: "2100股",
          marketValue: "100",
          costPrice: "500",
          presentPrice: "1500",
          positionRatio: "23%",
          lossRatio: "+3336/16.11%"
        },
        {
          shares: "同大股份",
          duokong: "多仓",
          number: "2100股",
          marketValue: "100",
          costPrice: "500",
          presentPrice: "1500",
          positionRatio: "23%",
          lossRatio: "+3336/16.11%"
        },
        {
          shares: "同大股份",
          duokong: "多仓",
          number: "2100股",
          marketValue: "100",
          costPrice: "500",
          presentPrice: "1500",
          positionRatio: "23%",
          lossRatio: "+3336/16.11%"
        }
      ],

      latestOrder: [
        {
          shares: "同大股份",
          time: "02-26",
          transaction: "卖",
          singlState: "市价单",
          state: "全部成交",
          Enumber: "-4800股",
          Snumber: "-4800股",
          Eprice: "7.06",
          Sprice: "7.06"
        },
        {
          shares: "同大股份",
          time: "02-26",
          transaction: "卖",
          singlState: "市价单",
          state: "全部成交",
          Enumber: "-4800股",
          Snumber: "-4800股",
          Eprice: "7.06",
          Sprice: "7.06"
        },
        {
          shares: "同大股份",
          time: "02-26",
          transaction: "卖",
          singlState: "市价单",
          state: "全部成交",
          Enumber: "-4800股",
          Snumber: "-4800股",
          Eprice: "7.06",
          Sprice: "7.06"
        },
        {
          shares: "同大股份",
          time: "02-26",
          transaction: "卖",
          singlState: "市价单",
          state: "全部成交",
          Enumber: "-4800股",
          Snumber: "-4800股",
          Eprice: "7.06",
          Sprice: "7.06"
        },
        {
          shares: "同大股份",
          time: "02-26",
          transaction: "卖",
          singlState: "市价单",
          state: "全部成交",
          Enumber: "-4800股",
          Snumber: "-4800股",
          Eprice: "7.06",
          Sprice: "7.06"
        },
        {
          shares: "同大股份",
          time: "02-26",
          transaction: "卖",
          singlState: "市价单",
          state: "全部成交",
          Enumber: "-4800股",
          Snumber: "-4800股",
          Eprice: "7.06",
          Sprice: "7.06"
        },
        {
          shares: "同大股份",
          time: "02-26",
          transaction: "卖",
          singlState: "市价单",
          state: "全部成交",
          Enumber: "-4800股",
          Snumber: "-4800股",
          Eprice: "7.06",
          Sprice: "7.06"
        }
      ],

      //当前持仓部分的时间选择器
      value1: '2018-02-21',
    };
  },
  methods: {
  //点击弹出收藏模态框
	OpenclickCollection: function() {
    var Height = $(window).height();
    var Width = $(window).width();
    $('.clickCollection').css({
      "width":Width,
      "height":Height
    }).fadeIn('1000');
    console.log(this.value1);
	},

	// 关闭收藏模态框
	CloseclickCollection: function () {
	  $('.clickCollection').fadeOut('1000');
	},

	//点击确定发送收藏请求
	CollectionIt: function() {
    $('.clickCollection').fadeOut('1000');
      this.$http.post(Global.getRequestUrl() + "/favor/cancel", 
        {
          "id": this.itemId
        },
        {
          headers: Global.getRequestHeader()
        }
      ).then(function(resp) {
        resp = resp.data;
        if(resp.succss) {
          alert("收藏成功")
        }else {
          console.error("收藏失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
        }
      }, function(error) {
        console.error("收藏请求失败");
        console.error(error);

      });
    },
  },

  filters: {
    formatStateData: function(val) {
      return parseFloat(val * 100).toFixed(2) + "%";
    }

  }

};
</script>

<style lang="less" scoped>
.CDBigBox {
  background-color: #f6f6f6;
  // padding-top: 22px;
}
.contain {
  width: 1206px;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
}

.CDBg {
  margin-top:22px ;
  width: 100%;
  background-color: #fff;
}


// 点击收藏模态框
.clickCollection{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  .clickCollection-center{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    .clickCollection-top{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    .clickCollection-button{
      width: 100% ;
      padding: 0 60px ;
      box-sizing: border-box;
      .button-left,
      .button-right{
        cursor: pointer;
        width: 90px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        border-radius: 6px;
      }
      .button-left{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .button-right{
        float: right;
        background: #14aaff;
        color: #fff;
      }
    }
  }
}

// 大赛详情的中心部分
.CompetitionDetails-center {

  padding: 40px 0;
  margin-bottom: 20px;

  //最上边第一名展示部分
  .CompetitionDetails-centerTop {
    width: 100%;
    height: 235px;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;

    background: url("/static/SignalRing/CompetitionDetails/icon_beijing.png")
      no-repeat;


    // 左边部分
    .left-span {
      display: block;
      position: absolute;
      left: 70px;
      top: 76px;
      // margin: 76px 0 16px;
      font-size: 16px;
      color: #fff;
    }
    .left1-span {
      display: block;
      position: absolute;
      left: 93px;
      top: 108px;
      font-size: 32px;
      color: #fff;
    }
    .centerTop-left {
      width: 206px;
      height: 235px;
      float: left;
      background-color: #fefefe;
      opacity: 0.2;
      text-align: center;
    }

    // 中间部分
    .centerTop-center {
      float: left;
      width: 680px;
      box-sizing: border-box;
      padding: 14px 0 14px 50px;
      overflow: hidden;
      color: #fff;
      .center-top {
        width: 100%;
        height: 130px;
        padding: 18px 0;
        .center-topTitle {
          font-size: 28px;
          margin-bottom: 24px;
        }
        .center-topLeft,
        .center-topRight {
          width: 50%;
          float: left;
          color: #e7e5f0;
          font-size: 14px;
        }
        .topLeft-team,
        .topRight-time {
          margin-bottom: 10px;
        }
      }
      .center-bottom {
        width: 580px;
        box-sizing: border-box;
        padding: 28px 0 0 18px;
        display: flex;
        border-top: 1px solid #705fb2;
        li {
          flex: 1;
          float: left;
          text-align: center;
          font-size: 12px;
          color: #e7e5f0;
          .bottom-span {
            display: block;
            margin-top: 10px;
            font-size: 18px;
            color: #fff;
          }
        }
      }
    }

    //右边部分
    .centerTop-right {
      width: 246px;
      height: 200px;
      background-color: #fff;
      opacity: 0.2;
      float: right;
      border-radius: 10px;
      margin: 18px 20px 0 0;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .TeamInformation {
      width: 246px;
      height: 200px;
      border-radius: 10px;
      padding: 12px 20px;
      position: absolute;
      right: 20px;
      top: 18px;
      z-index: 1;
      box-sizing: border-box;
      .TeamInformation-title {
        width: 100%;
        height: 30px;
        color: #fefefe;
        padding: 8px 0;
        font-size: 14px;
        border-bottom: 1px solid #9083bf;
        box-sizing: border-box;
      }
      .TeamInformation-content {
        width: 100%;
        margin-top: 16px;
        box-sizing: border-box;
        li {
          padding: 6px 0;
          box-sizing: border-box;
          overflow: hidden;
          color: #fefefe;
          font-size: 14px;
          .content-l {
            float: left;
          }
          .content-r {
            float: right;
          }
          &::before {
            content: "";
            display: block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #fff;
            float: left;
            margin-right: 10px;
            margin-top: 3px;
          }
        }
      }
    }
  }

  // 中间展示部分

  // 模拟交易
  .MockTrading {
    width: 100%;
    height: 120px;
    margin-top: 20px;
    border: 2px solid #eee;
    border-radius: 10px;
    overflow: hidden;
    .MockTrading-title {
      font-size: 16px;
      color: #333;

      padding-top : 16px ;

      box-sizing: border-box;
      float: left;
      &::after {
        content: "";
        display: block;
        width: 4px;
        height: 18px;
        float: left;
        margin-right: 16px;
        background-color: #14aaff;
      }
    }
    .MockTrading-content {
      width: 100%;
      overflow: hidden;
      display: flex;
      li {
        flex: 1;
        height: 100px;
        text-align: center;
        float: left;
        position: relative;
        &::after {
          content: "";
          display: block;
          width: 1px;
          height: 36px;
          background-color: #dcdcdc;
          position: absolute;
          right: 0;
          top: 20px;
        }
        .span-t {
          display: block;
          font-size: 14px;

          margin-top: 8px;

          color: #a0a0a0;
        }
        .span-b {
          margin-top: 6px;
          display: block;
          height: 60px;
          font-size: 28px;
          font-family: "Microsoft Yahei";
          color: #333;
        }
        .red {
          color: #ec4343;
        }
      }
    }
  }

  // 回测
  .BackProbe {
    width: 100%;
    height: 120px;
    margin-top: 20px;
    border: 2px solid #eee;
    border-radius: 10px;
    overflow: hidden;
    .BackProbe-title {
      font-size: 16px;
      color: #333;

      padding-top : 16px ;

      box-sizing: border-box;
      float: left;
      &::after {
        content: "";
        display: block;
        width: 4px;
        height: 18px;
        float: left;
        margin-right: 16px;
        background-color: #14aaff;
      }
    }
    .BackProbe-content {
      width: 100%;
      overflow: hidden;
      display: flex;
      li {
        flex: 1;
        height: 100px;
        text-align: center;
        float: left;
        position: relative;
        &::after {
          content: "";
          display: block;
          width: 1px;
          height: 36px;
          background-color: #dcdcdc;
          position: absolute;
          right: 0;
          top: 20px;
        }
        .span-t {
          display: block;
          font-size: 14px;

          margin-top: 8px;

          color: #a0a0a0;
        }
        .span-b {
          margin-top: 6px;
          display: block;
          height: 60px;
          font-size: 28px;
          font-family: "Microsoft Yahei";
          color: #333;
        }
      }
    }
  }

  // 收益走势
  .IncomeTrend {
    width: 100%;
    height: 532px;
    margin-top: 20px;
    border: 2px solid #eee;
    border-radius: 10px;
    overflow: hidden;
    .IncomeTrend-title {
      width: 100%;
      font-size: 16px;
      color: #333;
      padding: 18px 0;
      box-sizing: border-box;
      float: left;
      &::after {
        content: "";
        display: block;
        width: 4px;
        height: 18px;
        float: left;
        margin-right: 16px;
        background-color: #14aaff;
      }
    }
    .IncomeTrend-content {
      width: 100%;
      height: 480px;
      padding-left: 20px;
      box-sizing: border-box;
      .content-top {
        width: 100%;
        font-size: 12px;
        color: #999999;
        padding: 6px 0 16px 0;
        box-sizing: border-box;
        .content-span {
          display: inline-block;
          margin-right: 10px;
        }
      }
      .content-content {
        width: 1130px;
        border: 1px solid #e4e4e4;
        height: 426px;
        padding: 10px 0;
        box-sizing: border-box;
      }
    }
  }

  // 当前持仓

  .CurrentHolding {
    width: 100%;
    margin-top: 20px;
    .CurrentHolding-top {
      height: 24px;
      line-height: 24px;
      margin: 10px 0;
      overflow: hidden;
      color: #333;
      box-sizing: border-box;
      .top-l {
        float: left;
        font-size: 16px;
      }
      .top-r {

        float: right;
        font-size: 14px;
        overflow: hidden;
        .right-title,

        .right-time {
          float: left;
        }
        .right-time {
          width: 126px;
          height: 24px;
        }
      }
    }
    .table{
      width: 100%;
      border:  1px solid #e6e6e6;
      text-align: center;
      tr{
        width: 100%;
        border-bottom: 1px solid #e6e6e6;
      }
      .thead{
        background-color: #f0f0f0;
      }
	  }
  }

  // 最新下单
  .latestOrder {
    width: 100%;
    margin-top: 20px;
    .latestOrder-top {

      padding: 12px 0;
      overflow: hidden;
      color: #333;
      box-sizing: border-box;
    }

    .table{
      width: 100%;
      border:  1px solid #e6e6e6;
      text-align: center;
      tr{
        width: 100%;
        border-bottom: 1px solid #e6e6e6;
      }
      .thead{
        background-color: #f0f0f0;
      }
	  }
  }

  // 分享
  .share {

    width: 100%;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    margin-top: 20px;
    padding-left: 40px;

    li {
      color: #999;

      display: block;
      float: left;
      margin-right: 26px;
    }

    .share-one {
      cursor:pointer;
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 18px;
        height: 16px;
        position: absolute;
        left: -30px;
        top: 1px;
        background: url("/static/SignalRing/CompetitionDetails/icon_shoucangweixuanzhongdixia.png")
          no-repeat ;
        background-size: contain;
      }
      &:hover {
        &::before {
          background: url("/static/SignalRing/CompetitionDetails/icon_xshoucangdixiayixuanzhong.png")
            no-repeat;
          background-size: contain;
        }
      }
    }
    .share-three {
      width: 20px;
      height: 16px;
      cursor:pointer;
      background: url("/static/SignalRing/CompetitionDetails/icon_weixuanzhongweixindixia.png")
        no-repeat;
      background-size: contain;
      &:hover {
        background: url("/static/SignalRing/CompetitionDetails/icon_weixuanzhongweixindixiaxuanzhong.png")
          no-repeat;
        background-size: contain;
      }
    }
    .share-four {
      width: 20px;
      height: 16px;
      cursor:pointer;
      background: url("/static/SignalRing/CompetitionDetails/icon_weixuanzhongweibodixia.png")
        no-repeat;
      background-size: contain;
      &:hover {
        background: url("/static/SignalRing/CompetitionDetails/icon_weixuanzhongweibodixiaxuanzhong.png")
          no-repeat;
        background-size: contain;
      }
    }
    .share-five {
      width: 20px;
      height: 16px;
      cursor:pointer;
      background: url("/static/SignalRing/CompetitionDetails/icon_weixuanzhongxueqiudixia.png")
        no-repeat;
      background-size: contain;
      &:hover {
        background: url("/static/SignalRing/CompetitionDetails/icon_dianjixueqiu.png")
          no-repeat;
        background-size: contain;
      }
    }
  }
}

// 下部讨论区
.discussion{
  width: 100% ;
  background-color: #fff;
  margin-bottom: 20px;
  padding-bottom: 70px;
  box-sizing: border-box;
  .discuss{
		width: 1200px;
    margin: auto;
		.discuss-area{
			width: 100%;
			height: 66px;
			border-bottom: 1px solid #e6e6e6;
			display:flex;
			flex-wrap:wrap;
			justify-content:flex-start;
			.discuss-area-slider{
				display: inline-block;
				width: 5px;
				height: 30px;
				background:#00AEFC;
				margin-right: 14px;
				margin-top: 24px;
				border-radius: 5px;
			}
			.discuss-area-text{
				display: inline-block;
				font-size: 30px;
				color: #333333;
				margin-top: 22px;
			}
		}
		.discuss-message{
			width: 100%;
			padding: 10px;
			border-bottom:1px solid #e6e6e6 ;
			.discuss-message-box{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				margin:14px 0 16px;
				img{
				display: inline-block;
				width: 42px;
				height: 42px;
			}
			.discuss-message-nickname{
				display: inline-block;
				width: 200px;
				height: 42px;
				line-height: 42px;
				margin-left: 18px;
				font-size: 14px;
				color: #666666;
			}
			}
			.discuss-message-msg{
				width: 80%;
				font-size: 14px;
				color: #666666;
				line-height: 26px;
			}
			.discuss-message-reply{
				width: 100%;
				height: 20px;
				display: flex;
				flex-wrap:wrap ;
				justify-content: flex-start;
				margin-top: 16px;
				img{
					display: inline-block;
					width: 16px;
					height: 16px;
				}
				.discussion-message-reply-msg{
					font-size: 14px;
					color: #00AEFC;
					margin-left: 12px;
					cursor: pointer;
				}
			}
		}
		.discuss_input{
			width: 100%;
			height: 300px;
			border: 1px solid #e6e6e6;
			margin-top: 30px;
			box-shadow: #e6e6e6 2px 3px 2px 3px;
			textarea{
				width: 100%;
				height: 293px;
				border:none;
			}
		}
		.discuss_btn{
			width: 110px;
			height: 40px;
			font-size: 16px;
			color: #fff;
			margin-top: 24px;
			.el-button{
				width: 100%;
				height: 40px;
			}
		}
	}
}







</style>


