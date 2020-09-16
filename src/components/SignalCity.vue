<template>
  <div id="AI-advisor" >
      <nav-bar :navMenuItems="signalCityMenu"></nav-bar>

      <div class="signal-city">
          <div class="banner">
              <div style="padding-top: 130px; padding-bottom: 54px; font-size: 38px;"> 
                  私人订制，定制自己专属信号
                  <div class="Enghing" style="margin-top:16px; font-size: 18px;">
                    Private custom,customize your own signal
                  </div>
              </div>
              <div class="signal-city-banner-button" style="background-color: #14AAFF; border: 1px solid #14AAFF;">
                  <a @click="gotoSignalDevelopPage">开启智能信号开发</a>
              </div>
          </div>

          <div class="city">
              <div class="city-type">
                  <div style="width: 1200px; margin: 0 auto;">
                      <div style="display: inline-block;" @click="signalTypeChanged">
                          <div id="stock" class="city-type-item" :class="{'city-type-item-selected': selectedCityType === 'stock'}">股票策略</div>
                          <div id="futures" class="city-type-item" :class="{'city-type-item-selected': selectedCityType === 'futures'}">期货策略</div>
                          <div id="forex" class="city-type-item" :class="{'city-type-item-selected': selectedCityType === 'forex'}">外汇策略</div>
                          <div id="bond" class="city-type-item" :class="{'city-type-item-selected': selectedCityType === 'bond'}">期权策略</div>
                          <div id="options" class="city-type-item" :class="{'city-type-item-selected': selectedCityType === 'options'}">债券策略</div>
                      </div>
                      <!-- <div class="cart">
                          <img style="vertical-align: middle;" src="/static/SignalCity/cart.png"/>
                          <span style="padding-left: 3px;">购物车</span>
                      </div> -->
                  </div>
              </div>
              <div class="city-seperator"></div>
              <div class="city-signals-wrapper">
                  <div class="city-signals">
                      <div @click="ViewDetails(sg.id)" style="cursor:pointer" class="signal-wrapper" v-for="sg in signals" :key="sg.id">
                          <div class="signal-header">
                              {{sg.name}}
                          </div>
                          <div class="signal-owner">
                            <div class="signal-owner-item">
                              <img src="/static/Home/user-photo.jpg" style="width: 40px; height: 40px; border-radius: 20px;">
                            </div>
                            <div class="signal-owner-item" style="margin: 0px 136px 0px 14px;">
                              <span>不二咚</span>
                            </div>
                            <div class="signal-owner-item">
                              <span class="signal-cat" :class="{'signal-cat-mock': sg.type === 'mock'}">{{sg.type==="mock"? "模拟交易": "信号实盘"}}</span>
                            </div>
                          </div>
                          <div class="signal-chart">
                            <signal-chart :chartData="sg.pChartData" style="height: 200px;"></signal-chart>
                          </div>
                          <div class="signal-profit-wrapper">
                            <div class="signal-profit">
                              <div class="signal-profit-cat">年化收益</div>
                              <div class="signal-profit-year">{{sg.totalBenefitPerYear | benefitFilter}}</div>
                            </div>
                            <div class="signal-profit-separator"></div>
                            <div class="signal-profit">
                              <div class="signal-profit-cat">最大回撤</div>
                              <div class="signal-profit-val">{{sg.maxBacktrace | benefitFilter}}</div>
                            </div>
                            <div class="signal-profit-separator"></div>
                            <div class="signal-profit">
                              <div class="signal-profit-cat">初始资金</div>
                              <div class="signal-profit-val">{{sg.initAmount | moneyFilter}}</div>
                            </div>
                          </div>
                          <div><hr style="border-color: #E6E6E6; margin: 0px;"/></div>
                          <div style="height: 68px; font-size: 16px; padding: 0px 20px;">
                            <span style="display: inline-block; color: #666666; margin-top: 23px;">已有<span style="color: #F54E2D;">{{sg.bought}}</span>人购买</span>
                            <span class="signal-buy">立即购买</span>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- <div class="city-pagination">
              </div> -->
              <div class="city-seperator"></div>
          </div>

          <div>
            <el-dialog
              title="请登录"
              :visible.sync="loginDiagVisible"
              size="tiny"
              :before-close="handleClose">
              <login-diag></login-diag>
            </el-dialog>
          </div>
      </div>

      <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"
import Global from "@/components/layout/Global"
import LoginDiag from "@/components/layout/LoginDiag"
import SignalChart from "@/components/layout/SignalChart"

var signalsMockData = [
 {id: '1', name: '银行轮动1', type: "mock", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 123, pChartData: {id: "signalChart1", options: [], startDate: "2016-06-11", amountMoney: "10000", frequency: "每天"}},
 {id: '2', name: '银行轮动2', type: "real", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 234, pChartData: {id: "signalChart2", options: [], startDate: "2016-06-11", amountMoney: "20000", frequency: "每天"}},
 {id: '3', name: '银行轮动3', type: "mock", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 345, pChartData: {id: "signalChart3", options: [], startDate: "2016-06-11", amountMoney: "30000", frequency: "每天"}},
 {id: '4', name: '银行轮动4', type: "real", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 456, pChartData: {id: "signalChart4", options: [], startDate: "2016-06-11", amountMoney: "40000", frequency: "每天"}},
 {id: '5', name: '银行轮动5', type: "real", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 567, pChartData: {id: "signalChart5", options: [], startDate: "2016-06-11", amountMoney: "50000", frequency: "每天"}},
 {id: '6', name: '银行轮动6', type: "real", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 678, pChartData: {id: "signalChart6", options: [], startDate: "2016-06-11", amountMoney: "60000", frequency: "每天"}},
 {id: '7', name: '银行轮动7', type: "mock", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 789, pChartData: {id: "signalChart7", options: [], startDate: "2016-06-11", amountMoney: "70000", frequency: "每天"}},
 {id: '8', name: '银行轮动8', type: "real", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 890, pChartData: {id: "signalChart8", options: [], startDate: "2016-06-11", amountMoney: "80000", frequency: "每天"}},
 {id: '9', name: '银行轮动9', type: "real", totalBenefitPerYear: 0.45, maxBacktrace: 0.45, initAmount: 100000, bought: 900, pChartData: {id: "signalChart9", options: [], startDate: "2016-06-11", amountMoney: "90000", frequency: "每天"}}
];

export default {
  components: {
      NavBar,
      FooterBar,
      LoginDiag,
      SignalChart
  },
  data () {
      return {
          signalCityMenu: Global.getPageMenu("SignalCity"),
          loginDiagVisible: false,
          selectedCityType: "stock",
          signals: signalsMockData,
          signalsInCart: []
      }
  },
  methods: {
    // 查看详情
    ViewDetails:function(ID) {
      this.$router.push({name: 'Buyersignaler', params: {backtestId: ID}});
    },
      gotoSignalDevelopPage: function() {
          if(Global.isLogedin()) {
            this.$router.push("/signalDevelop");
            return true;
          }else {
            console.log("用户还没有登录！");
            event.preventDefault();
            this.loginDiagVisible = true;
            window.lastUrl = "/signalDevelop";
            return false;
          }
      },
      signalTypeChanged: function(event) {
          if(!event.target || !event.target.id) {
              return false;
          }
          this.selectedCityType = event.target.id;
      },
      handleClose: function(done) {
        window.lastUrl = null;
        done();
      }
  },
  filters: {
    benefitFilter: function(val) {
      if(!val) {
        return "--";
      }
      return parseFloat(val*100).toFixed(2) + "%";
    },
    moneyFilter: function(amount) {
      if(!amount) {
        return "--";
      }
      return "￥" + parseInt(amount);
    }
  }
}
</script>

<style lang="scss">
  .signal-city {
      background-color: #F2F3F7;

      .banner{
          background: url("/static/SignalCity/signal-city-banner.png") no-repeat center center;
          background-size: cover;
          text-align: center;
          color: white;
          height: 400px;

          .signal-city-banner-button {
              display: inline-block;
              height: 46px;
              width: 196px;
              font-size: 18px;
              text-align: center;
              vertical-align: middle;
              border-radius: 23px;
              color: white;
              line-height: 46px;
              cursor: pointer;
            }
      }

      .city {
          .city-type {
              height: 60px;
              background-color: white;
              vertical-align: middle;
              line-height: 60px;

              .city-type-item {
                  display: inline-block;
                  color: #333333;
                  margin-right: 20px;
                  font-size: 18px;
                  cursor: pointer;
              }

              .city-type-item-selected {
                  color: #14AAFF;
              }

              .cart {
                  display: inline-block;
                  width: 136px;
                  height: 36px;
                  border: 1px solid #14AAFF;
                  text-align: center;
                  vertical-align: middle;
                  line-height: 36px;
                  border-radius: 18px;
                  color: #14AAFF;
                  float: right;
                  margin-top: 12px;
              }
          }

          .city-signals-wrapper {
            background-color: white;
            padding: 50px 0px;

            .city-signals {
              margin: 0 auto;
              width: 1230px;

              .signal-wrapper {
                width: 378px;
                height: 470px;
                display: inline-block;
                border: 1px solid rgba(0, 0, 0, 0.2);
                margin-bottom: 30px;
                margin-right: 30px;

                .signal-header {
                  font-size: 18px;
                  color: #333333;
                  padding-left: 20px;
                  padding-top: 28px;
                }

                .signal-owner {
                  padding-top: 10px;
                  padding-left: 20px;
                  padding-bottom: 10px;

                  .signal-owner-item {
                    height: 40px;
                    line-height: 40px;
                    vertical-align: top;
                    display: inline-block;

                    .signal-cat {
                      display: inline-block;
                      width: 86px;
                      height: 26px;
                      border-radius: 13px;
                      border: 1px solid #00AEFC;
                      background-color: rgba(0, 174, 252, 0.1);
                      opacity: 0.5;
                      color: #00AEFC;
                      line-height: 26px;
                      vertical-align: middle;
                      text-align: center;
                      font-size: 14px;
                    }

                    .signal-cat-mock {
                      color: #F5B356;
                      border: 1px solid #F5B356;
                      background-color: rgba(245, 179, 86, 0.1);
                    }
                  }

                }

                .signal-profit-wrapper {
                  height: 84px;
                  margin: 0px 5px;

                  .signal-profit {
                    display: inline-block;
                    width: 110px;
                    text-align: center;
                    padding-top: 17px;

                    .signal-profit-cat {
                      font-size: 14px;
                      color: #666666;
                      padding-bottom: 5px;
                    }

                    .signal-profit-val {
                      font-size: 20px;
                      color: #333333;
                    }

                    .signal-profit-year {
                      font-size: 20px;
                      color: #F54E2D;
                    }
                  }

                  .signal-profit-separator {
                    display: inline-block;
                    width: 1px;
                    background-color: #DCDCDC;
                    height: 33px;
                  }

                }

                .signal-buy {
                  color: #FFFFFF;
                  background-color: #00AEFC;
                  display: inline-block;
                  height: 34px;
                  width: 105px;
                  border-radius: 17px;
                  text-align: center;
                  vertical-align: middle;
                  line-height: 34px;
                  float: right;
                  margin-top: 17px;
                  cursor: pointer;
                }
              }
            }
          }

          .city-seperator {
              height: 20px;
          }
      }
      
  }
</style>
