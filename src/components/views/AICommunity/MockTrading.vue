<template>
  <div>
    <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

      <div class="big-box">

        <div class="CompetitionDetails-box">
          <div class="CompetitionDetails-center contain">

            <!-- 中间展示部分 -->


            <!-- 模拟交易 -->
            <div class="MockTrading">
              <div class="MockTrading-title">模拟交易</div>
              <ul class="MockTrading-content">
                <li>
                  <div class="span-t">累计收益</div>
                  <div class="span-b red">{{strategyGain | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">今日收益</div>
                  <div class="span-b red">{{baseGain | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">最大回撤</div>
                  <div class="span-b">{{maxDrawBack | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">年化波动率</div>
                  <div class="span-b">1.32%</div>
                </li>
                <li>
                  <div class="span-t">alpha</div>
                  <div class="span-b">{{alpha | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">bata</div>
                  <div class="span-b">{{beta | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">sharpe</div>
                  <div class="span-b">{{sharp | formatBenefit}}</div>
                </li>
              </ul>
            </div>

            <!-- 回测 -->
            <div class="BackProbe">
              <div class="BackProbe-title">回测</div>
              <ul class="BackProbe-content">
                <li>
                  <div class="span-t">累计收益</div>
                  <div class="span-b">{{MTstrategyGain | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">今日收益</div>
                  <div class="span-b">{{baseGain | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">最大回撤</div>
                  <div class="span-b">{{maxDrawBack | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">年化波动率</div>
                  <div class="span-b">--</div>
                </li>
                <li>
                  <div class="span-t">alpha</div>
                  <div class="span-b">{{alpha | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">bata</div>
                  <div class="span-b">{{beta | formatBenefit}}</div>
                </li>
                <li>
                  <div class="span-t">sharpe</div>
                  <div class="span-b">{{MTsharp | formatBenefit}}</div>
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
                  <div style="padding-top: 4px;" id="generalChart">
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
// import SignalChart from "@/components/layout/SignalChart";
import Highstock from "highcharts/highstock";

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

//sessionstroage的key
var LastBackTestDatakey = "MockTrading";

export default {
  components: {
    NavBar,
    FooterBar,
    Global,
  },
  mounted() {
    this.$nextTick(function() {
      // this.loadEconomicForecastData();

      this.GetMockTradingData();

    });

    if(window.sessionStorage[LastBackTestDatakey]){
					this.MTBackTestData = JSON.parse(window.sessionStorage[LastBackTestDatakey]);
          this.MTstrategyGain =  parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTstrategyYearGain = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTbaseGain = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTalpha = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTbeta =  parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTsharp = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTsortino = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTinfoRatio = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTalgoVola = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTbenchVola = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTwinRate = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTwinRateDay = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTwinLossRatio = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTwinCount = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTlossCount = parseFloat(this.MTBackTestData.total_benefit_rate) * 100;
          this.MTmaxDrawBack = parseFloat(this.MTBackTestData.max_retracement) * 100;
				}
  },
  data() {
    return {

      AIadvisorMenu: Global.getPageMenu("SignalDevelop"),

      signals: mockSignals,
      stateData: [],
      //模拟交易数据
      strategyGain: "--",
			strategyYearGain: "--",
			baseGain: "--",
			alpha: "--",
			beta: "--",
			sharp: "--",
			sortino: "--",
			infoRatio: "--",
			algoVola: "--",
			benchVola: "--",
			winRate: "--",
			winRateDay: "--",
			winLossRatio: "--",
			winCount: "--",
			lossCount: "--",
			maxDrawBack: "--",

      //模拟交易回测数据
      MTBackTestData:[],
      MTstrategyGain: "--",
			MTstrategyYearGain: "--",
			MTbaseGain: "--",
			MTalpha: "--",
			MTbeta: "--",
			MTsharp: "--",
			MTsortino: "--",
			MTinfoRatio: "--",
			MTalgoVola: "--",
			MTbenchVola: "--",
			MTwinRate: "--",
			MTwinRateDay: "--",
			MTwinLossRatio: "--",
			MTwinCount: "--",
			MTlossCount: "--",
			MTmaxDrawBack: "--",


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

    // 将回测提交模拟
    GetMockTradingData: function() {
      this.$http.post(Global.getRequestUrl() + "/dev/signal/backtest/simulate", 
				{
          backtestId:this.$route.params.backtestID
        },
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
        var resp = resp.body;
        console.log(resp);

				if(resp.success) {
          //set data to general info tab
          console.log("获取模拟交易数据成功！")

          //获取回测数据
          this.backtestID = resp.data.name;
          var self = this;
          var stateIntervalID = setInterval(function() {
						//Get signal compile running status/result
						self.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
							{
								backtestId: self.$route.params.backtestID,
							},
							{
								headers: Global.getRequestHeader()
							}
						).then(	
							function(stateRes) {
								var stateRes = stateRes.body
								 if(stateRes && stateRes.data && stateRes.data.report && stateRes.data.report.final_status) {
								 	clearInterval(stateIntervalID);
								 	if(stateRes.data.report.final_status === "fail") {
								 		console.error("回测运行出错！错误原因：" + stateRes.data.report.reason);
								 	}else if(stateRes.data.report.final_status === "success"){
									 	//show data and chart in UI according to data returned from server side
									 	var output = stateRes.data.report.output;
										var L = output.length-2;
										console.log(L);
										console.log(output);
										 output[L].total_benefit_rate && (self.strategyGain = parseFloat(output[L].total_benefit_rate) * 100);
										//  console.log(output[L].total_benefit_rate)
									 	// output[L].alpha && (self.alpha = output[L].alpha);
									 	// output[L].beta && (self.beta = output[L].beta);
										 output[L].max_retracement && (self.maxDrawBack = parseFloat(output[L].max_retracement) * 100);
										//  console.log(output[L].max_retracement)
										// output[L].half_decay && (self.halfDecay = parseFloat(output[L].half_decay));

										var PhotoData = [];
										for(var i=0;i<output.length;i++){
											var values = [];
											var ts = output[i].ts * 1000
											values.push(ts);
											values.push(output[i].total_asserts);
											PhotoData.push(values);
										}
										console.log(PhotoData);
									 	if(PhotoData) {
									 		this.formatNetValues(PhotoData);
									 	}
									 	self.loadBenefitData();
									 }
								 }
							}, function(error) {
								console.error("获取编译运行状态请求出错！");
								console.error(error);
							});
					}, 1000);
				}else {
					console.error("获取模拟交易数据失败！");
				}
			}, function(error) {
				console.error("获取模拟交易数据请求失败！");
				console.error(error);
			});
    },

    //走势图数据及配置
    loadBenefitData: function() {
			Highstock.StockChart({
				chart: {
					renderTo: 'generalChart'
				},
				xAxis: {
					type: 'datetime',
					dateTimeLabelFormats: {  
                 	second: '%Y-%m-%d<br/>%H:%M:%S',  
						minute: '%Y-%m-%d<br/>%H:%M',  
						hour: '%Y-%m-%d<br/>%H:%M',  
						day: '%Y<br/>%m-%d',  
						week: '%Y<br/>%m-%d',  
						month: '%Y-%m',  
						year: '%Y'   
               } 
				},
        navigator: {
					height: 20
				},
				tooltip: {
					xDateFormat: '%Y-%m-%d %H:%M:%S'
        },
        credits: {
					enabled: false
				},
				series: [{
					name: '净值',
					data: self.benefitData //[[1,2], [3,4]]
				}]
			});
    },
    

    // 给走势图传数据
    formatNetValues: function(PhotoData) {
			self.benefitData = PhotoData;

			// self.benefitData = [];
			// for(var i=0; i<netValues.length; i++) {
			// 	var _ts = netValues[i].ts * 1000;
			// 	var _v = netValues[i].v;
			// 	self.benefitData.push([_ts, _v]);
			// } 
		},
    


  },

  filters: {
    formatStateData: function(val) {
      return parseFloat(val * 100).toFixed(2) + "%";
    },
    formatBenefit: function(val) {
			if(val === "--" || !val) {
				return "--";
			}
			return parseFloat(val).toFixed(2) + "%";
		},
  }
};
</script>

<style lang="less">
.big-box {
  background-color: #f0f0f0;
}

.CompetitionDetails-box{
  background-color: #fff;
  width: 100%;
}

.contain {
  width: 1206px;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
}
.CompetitionDetails-center {
  padding: 40px 0;
  margin-bottom: 20px;
  background-color: #fff;
  margin-top: 22px;

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
        background-color: #00aefc;
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
        background-color: #00aefc;
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
    height: 500px;
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
        background-color: #00aefc;
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
    .el-input__inner{
      border: none;
      border-radius: 0;
      border-bottom: 1px solid #999;
    }
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

  
}
  
</style>


