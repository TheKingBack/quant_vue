<template>
  <div>
    <!-- 点击弹出收藏模态框 -->
    <div class="clickCollection">
      <!-- 中心白色部分 -->
      <div class="clickCollection-center">
        <!-- 上部的文字信息 -->
        <div class="clickCollection-top">
          确定要收藏该信号吗？
        </div>
        <!-- 下部的按钮 -->
        <div class="clickCollection-button">
          <div class="button-left" @click="CloseclickCollection">取消</div>
          <div class="button-right" @click="CollectionIt">确定</div>
        </div>
      </div>
    </div>
    <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>
      <div class="big-box">
        <!-- 上面TOP部分用户信息 -->
        <div class="RDTOuterLayer">
          <div class="contain">
            <img src="/static/SignalRing/SignalPK/dm.png" alt="" class="UserPhoto">
            <div class="UserInformation">
              <div class="UserName">永恒的鑫光</div>
              <div class="PersonalitySignature">行情总在绝望中产生，猜疑中成长，欢乐中死亡。</div>
            </div>
          </div>
        </div>
        <!-- 中间部分详情展示 -->
        <div class="CDOuterLayer">
          <div class="contain">
              <!-- 商品信息 -->
              <div class="CInformation">
                <div class="CName">苹果微商城信号</div>
                <!-- 订阅信息 -->
                <ul class="Detailed">
                    <li>可订阅24</li>
                    <li>剩余0份</li>
                    <li>15人收藏</li>
                    <li>可订阅时长3个月</li>
                </ul>
                <!-- 策略思路 -->
                <ul class="StrategyThinking">
                    <li>策略思路：</li>
                    <li>1.不追高；</li>
                    <li>2.微利就走；</li>
                    <li>3.自我学习</li>
                    <li>4.适应牛市和震荡市。</li>
                </ul>
                <!-- 点击收藏 -->
                <div class="CollectionIt">
                    <div class="CollectionLogo"></div>
                    <div class="CollectionLogo1"></div>
                    收藏
                </div>
                <!-- 点击分享 -->
                <div class="ShareIt" @click="OpenShare">
                    <div class="ShareLogo"></div>
                    <div class="ShareLogo1"></div>
                    分享
                    <ul class="ShareItBy">
                      <li> <router-link class="WeiXin" to="">微信</router-link> </li>
                      <li> <router-link class="WeiBo" to="">微博</router-link> </li>
                      <li> <router-link class="XueQiu" to="">雪球</router-link> </li>
                    </ul>
                </div>
              </div>

              <!-- 商品排名 -->
              <div class="CRing">
                <!-- 参数 -->
                <ul class="Parameter">
                  <li>
                    <div class="ParameterC">策略排名</div>
                    <img src="/static/SignalRing/SignalPK/icon_touxiang_jinpai.png" alt="" class="RankingP">                        
                  </li>
                  <li>
                    <div class="ParameterC">排名变化</div>
                    <div class="ParameterD">=</div>
                  </li>
                  <li>
                    <div class="ParameterC">历史最高排名</div>
                    <div class="ParameterD">4</div>
                  </li>
                  <li class="Last">
                    <div class="ParameterC">策略评分</div>
                    <div class="ParameterD">13545</div>
                  </li>
                </ul>

                <!-- 曲线 -->
                <div class="RankingCurve">
                  <!-- 曲线的名称 -->
                  <div class="RankingCurveT">策略评分走势</div>
                  <div class="Curve">
                    <!-- 侧边解释名词 -->
                    <div class="LeftNav">策略评分</div>
                    <div style="padding-top: 34px;width: 1160px;height: 360px;" id="generalChart"></div>
                  </div>    
                </div>
              </div>

              <!-- 实盘指标 -->
              <div class="RealIndex">
                <!-- 左侧数据 -->
                <div class="RealIndexL">
                  <div class="RealIndexLT">实盘指标</div>
                  <div class="RealPlate">累计实盘</div>
                  <div class="RealPlateN">137.49%</div>
                  <!-- 收益回测 -->
                  <ul class="ReturnSurvey">
                    <li>
                      <div class="ReturnSurveyC">今日收益</div>
                      <div class="ReturnSurveyR">2.83%</div>
                    </li>
                    <li>
                      <div class="ReturnSurveyC">最大回测</div>
                      <div class="ReturnSurveyS">10.74%</div>
                    </li>
                  </ul>
                  <!-- 实盘信息 -->
                  <div class="InitialFunds">初始资金：20000</div>
                  <div class="TotalAssets">总资产：47498.7</div>
                  <div class="StartTime">起始时间：2016-08-01</div>
                </div>
                <!-- 右边数据 -->
                <div class="RealIndexR">
                  <!-- 数据名称 -->
                  <div class="RealIndexRT">收益走势</div>
                  <div class="content-top">
                    <span class="content-span">缩放：</span>
                    <span class="content-span">1个月</span>
                    <span class="content-span">1年</span>
                    <span class="content-span">全部</span>
                  </div>
                  <!-- 曲线外框 -->
                  <div class="WaiTao">
                    <div style="padding-top: 34px;width: 780px;height: 300px;" id="RealIndexChart"></div>
                  </div>
                  <!-- 右边名词 -->
                  <div class="CumulativeIncome">累计收益</div>
                </div>
              </div>

              <!-- 当前持仓 -->
              <div class="CurrentHolding">
                <!-- 持仓顶部信息 -->
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
                <!-- 表格 -->
                <div class="CurrentHolding-table">
                  <table  class="table" cellspacing="0" cellpadding="0">
                    <!-- 表头 -->
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
                    <!-- 内容 -->
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
                  <!-- 表格 -->
                  <table  class="table" cellspacing="0" cellpadding="0">
                    <!-- 表头 -->
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
                    <!-- 内容 -->
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
          <!-- 讨论区居中位置 -->
          <div class="discuss">
            <!-- 讨论区头部 -->
            <div class="discuss-area">
              <span class="discuss-area-slider"></span>
              <span class="discuss-area-text">讨论区</span>
            </div>
            <!-- 评论部分 -->
            <div class="discuss-message" v-for="distext in discussionMessage" :key="distext.id">
              <div class="discuss-message-box">
                <img :src="distext.discussionImg"/>
                <span class="discuss-message-nickname">{{distext.reply}}</span>
              </div>
              <!-- 评论内容 -->
              <div class="discuss-message-msg">{{distext.dis_text}}</div>
              <div class="discuss-message-reply">
                <img src="/static/Buyersignal/icon_huifu.png" alt="" />
                <span class="discussion-message-reply-msg">回复</span>
              </div>
            </div>
            <!-- 书写评论区域 -->
            <div class="discuss_input">
                <textarea name="" rows="" cols=""></textarea>
            </div>
            <!-- 确认提交按钮 -->
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
import Highstock from "highcharts/highstock";

export default {
  components: {
    NavBar,
    FooterBar,
    Global,
  },
  mounted() {
    this.$nextTick(function() {
      // this.loadEconomicForecastData();
      this.GetRankingCurveData();
      this.GetRealIndexData();
    });

  },
  data() {
    return {
      AIadvisorMenu: Global.getPageMenu("SignalRing"),
      stateData: [],
      benefitData:[],
      realIndexData:[],


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
    //点击上边的分享
    OpenShare(){
      $(".ShareItBy").fadeToggle("solw");
    },

    //实盘曲线图
    // 接受实盘走势图数据及配置
    GetRealIndexData: function() {
      this.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
         {
            backtestId: "cfbbae63-bfcf-4e71-b794-f869c3aeab19",
         },
         {
            headers: Global.getRequestHeader()
         }
      ).then(	
         function(stateRes) {
            var stateRes = stateRes.body
               if(stateRes.data.report.final_status === "fail") {
                  console.error("回测运行出错！错误原因：" + stateRes.data.report.reason);
               }else if(stateRes.data.report.final_status === "success"){
                  //show data and chart in UI according to data returned from server side
                  var output = stateRes.data.report.output;
                  var L = output.length-2;
                  console.log(L);
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
                     this.FormatNetValues(PhotoData);
                  }
                  this.loadBenefitDataOne();
                  }
         }, function(error) {
            console.error("获取编译运行状态请求出错！");
            console.error(error);
         });
    },
    //实盘走势图数据及配置
    loadBenefitDataOne: function() {
      Highstock.StockChart({
         chart: {
            renderTo: 'RealIndexChart'
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
         tooltip: {
            xDateFormat: '%Y-%m-%d %H:%M:%S'
         },
         series: [{
            name: '净值',
            data: self.realIndexData //[[1,2], [3,4]]
         }]
      });
    },
    //实盘给走势图传数据
    FormatNetValues: function(PhotoData) {
			self.realIndexData = PhotoData;
		},



   // 评分曲线图
   // 将接收曲线数据
    GetRankingCurveData: function() {
      this.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
         {
            backtestId: "cfbbae63-bfcf-4e71-b794-f869c3aeab19",
         },
         {
            headers: Global.getRequestHeader()
         }
      ).then(	
         function(stateRes) {
            var stateRes = stateRes.body
               if(stateRes.data.report.final_status === "fail") {
                  console.error("回测运行出错！错误原因：" + stateRes.data.report.reason);
               }else if(stateRes.data.report.final_status === "success"){
                  //show data and chart in UI according to data returned from server side
                  var output = stateRes.data.report.output;
                  var L = output.length-2;
                  console.log(L);
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
                  this.loadBenefitData();
                  }
         }, function(error) {
            console.error("获取编译运行状态请求出错！");
            console.error(error);
         });
    },
    //评分走势图数据及配置
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
         tooltip: {
            xDateFormat: '%Y-%m-%d %H:%M:%S'
         },
         series: [{
            name: '净值',
            data: self.benefitData //[[1,2], [3,4]]
         }]
      });
    },
    //评分给走势图传数据
    formatNetValues: function(PhotoData) {
			self.benefitData = PhotoData;
		},

   
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

<style lang="less">
.big-box {
  background-color: #f0f0f0;
}
.contain {
  width: 1206px;
  overflow: hidden;
  margin: 0 auto;
  box-sizing: border-box;
}
//点击收藏模态框
.clickCollection{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  //中心白色部分
  .clickCollection-center{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    //上部的文字信息
    .clickCollection-top{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    //下部的按钮
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
        background: #00aefc;
        color: #fff;
      }
    }
  }
}

//上面TOP部分用户信息
.RDTOuterLayer {
  width: 100%;
  height: 100px;
  background-color: #fff;
  .UserPhoto{
    width: 64px;
    height: 64px;
    border-radius: 50% ;
    border: 1px solid #cecece;
    display: block;
    float: left;   
    margin-top: 18px;
  }
  .UserInformation{
    height: 100px;
    float: left;
    padding: 30px 0 ;
    box-sizing: border-box;
    margin-left: 20px ;
    .UserName{
      color: #333;
      font-size: 18px;
    }
    .PersonalitySignature{
      color: #999;
      font-size: 14px;
      margin-top: 10px;
    }
  }
}

//中间部分详情展示
.CDOuterLayer{
  width: 100%;
  background-color: #fff;
  margin-top: 30px;
  padding:20px 0 18px ;
  margin-top: 30px;
  overflow: hidden;
  box-sizing: border-box;
  //商品信息
  .CInformation{
    width: 100% ;
    margin-bottom: 18px;
    position: relative;
    .CName{
      font-size: 22px;
      color: #333;
    }
    //订阅信息
    .Detailed{
      margin: 16px 0 30px;
      overflow: hidden;
      li{
        float: left;
        font-size: 14px;
        color: #999;
        margin-right: 28px;
      }
    }
    //策略思路
    .StrategyThinking{
      overflow: hidden;
      li{
        float: left;
        font-size: 14px;
        color: #333;
      }
    }
    //点击收藏
    .CollectionIt{
      width: 102px;
      height: 34px;
      border: 1px solid #00aefc;
      color: #00aefc;
      font-size: 16px;
      line-height: 34px;
      border-radius: 8px;
      position: absolute;
      top: 30px;
      right: 130px;
      cursor: pointer;
      .CollectionLogo{
        width: 17px;
        height: 15px;
        background: url("/static/SignalRing/SignalPK/icon_shoucang.png");
        margin: 8px 10px 0 20px;
        float: left;
      }
      &:hover{
        .CollectionLogo{
          background: url("/static/SignalRing/SignalPK/icon_shoucangdianji.png");
        }
      }
    }
    //点击分享
    .ShareIt{
      width: 102px;
      height: 34px;
      background:  #00aefc;
      color: #fff;
      font-size: 16px;
      line-height: 34px;
      border-radius: 8px;
      position: absolute;
      top: 30px;
      right: 0px;
      cursor: pointer;
      .ShareLogo{
        width: 14px;
        height: 16px;
        background: url("/static/SignalRing/SignalPK/icon_fenxiang.png") no-repeat center;
        margin: 8px 10px 0 24px;
        float: left;
      }
      //点击后出现的分享方式
      .ShareItBy{
        display: none;
        width: 100px ;
        height: 122px;
        box-shadow: 0 0 6px rgba(0,0,0,0.4);
        position: absolute;
        top: 36px;
        right: 2px;
        background-color: #fff;
        border-radius: 6px;
        padding:10px 0;
        box-sizing: border-box;
        z-index: 999;
        .XueQiu,
        .WeiBo,
        .WeiXin{
          font-size: 14px;
          color: #666;
          width: 100% ;
          height: 36px;
          line-height: 36px;
          float: left;
        }
        //微信
        .WeiXin{
          &::before{
            content: "";
            width: 18px;
            height: 14px;
            display: block;
            float: left;
            background: url("/static/SignalRing/SignalPK/icon_weixuanzhongweixindixia.png") no-repeat;
            background-size: contain;
            margin: 11px 10px 11px 16px;
          }
          &:hover{
            color: #00aefc;
            &::before{
              background: url("/static/SignalRing/SignalPK/icon_weixuanzhongweixindixiaxuanzhong.png") no-repeat;
              background-size: contain;
            }
          }
        }
        //微博
        .WeiBo{
          &::before{
            content: "";
            width: 18px;
            height: 14px;
            display: block;
            float: left;
            background: url("/static/SignalRing/SignalPK/icon_weixuanzhongweibodixia.png") no-repeat;
            background-size: contain;
            margin: 11px 10px 11px 16px;
          }
          &:hover{
            color: #00aefc;
            &::before{
              background: url("/static/SignalRing/SignalPK/icon_weixuanzhongweibodixiaxuanzhong.png") no-repeat;
              background-size: contain;
            }
          }
        }
        //雪球
        .XueQiu{
          &::before{
            content: "";
            width: 18px;
            height: 14px;
            display: block;
            float: left;
            background: url("/static/SignalRing/SignalPK/icon_weixuanzhongxueqiudixiaxuanzhong.png") no-repeat;
            background-size: contain;
            margin: 11px 10px 11px 16px;
          }
          &:hover{
            color: #00aefc;
            &::before{
              background: url("/static/SignalRing/SignalPK/icon_dianjixueqiu.png") no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
  }
  //商品排名
  .CRing{
    width: 100% ;
    // 参数
    .Parameter{
      height: 92px;
      border: 1px solid #dcdcdc;
      display: flex;
      li{
        flex: 4;
        float: left;
        text-align: center;
        position: relative;
        //后面的竖杠
        &::after{
          content: "";
          display: block;
          width: 1px;
          height: 36px;
          background-color: #dcdcdc;
          position: absolute;
          top: 28px;
          right: 0;
        }
        //参数名的样式
        .ParameterC{
            margin: 20px 0 10px;
            text-align: center;
            font-size: 14px;
            color: #999;
        }
        //具体参数的样式
        .ParameterD{
            font-size: 22px;
            color: #333;
        }
        .RankingP{
            width: 24px;
            height: 32px;
        }
      }
      .Last::after{
        content: "";
        width: 0;
      }
    }
    //曲线
    .RankingCurve{
      margin-top: 24px;
      //曲线的名称
      .RankingCurveT{
        font-size: 18px;
        color: #333;
        margin-left: 20px;
        position: relative;
        //曲线前面的小logo
        &:before{
          content: "";
          display: block;
          width: 10px;
          height: 16px;
          position: absolute;
          top: 1px;
          left: -20px;
          background: url("/static/SignalRing/SignalPK/pingfen_05.png") no-repeat center;
        }
      }
      //曲线的样式
      .Curve{
        width: 100% ;
        height: 360px;
        position: relative;
        //侧边解释名词
        .LeftNav{
          font-size: 12px;
          color: #999;
          width: 12px;
          position: absolute;
          top: 50% ;
          left: 0;
          transform: translateY(-50%);
        }
        #generalChart{
          width: 1160px;
          float: right;
        }
      }
    }
  }
  //实盘指标
  .RealIndex{
    width: 100% ;
    margin-top: 44px;
    overflow: hidden;
    //左边数据
    .RealIndexL{
      width: 308px;
      float: left;
      border: 2px solid #eee;
      border-radius: 8px;
      padding: 20px 18px 30px;
      //实盘指标
      .RealIndexLT{
        width: 100%;
        font-size: 16px;
        color: #333;
        box-sizing: border-box;
        position: relative;
        //左边的蓝色竖杠
        &::after {
          content: "";
          display: block;
          width: 4px;
          height: 18px;
          position: absolute;
          top: 0 ;
          left: -18px;
          background-color: #00aefc;
        }
      }
      // 累计实盘
      .RealPlate{
        margin-top:28px ;
        font-size: 14px;
        color: #999;
      }
      .RealPlateN{
        margin-top:18px ;
        font-size: 24px;
        color: #ec4343;
      }
      //收益回测
      .ReturnSurvey{
        display: flex;
        margin: 34px 0 32px;
        li{
          flex: 1;
          float: left;
          text-align: center;
        }
        //参数名称样式
        .ReturnSurveyC{
          font-size: 14px;
          color: #999;
        }
        .ReturnSurveyR{
          margin-top:18px;
          font-size: 24px;
          color: #ec4343;
        }
        .ReturnSurveyS{
          margin-top:18px;
          font-size: 24px;
          color: #333;
        }
      }
      //实盘信息
      .InitialFunds,
      .TotalAssets,
      .StartTime{
        font-size: 16px;
        color: #999;
        margin-bottom: 18px;
      }
    }
    //右边数据
    .RealIndexR{
      width: 858px;
      float: right ;
      border: 2px solid #eee;
      padding: 18px;
      border-radius: 10px;
      position: relative;
      //数据名称
      .RealIndexRT{
        width: 100%;
        font-size: 16px;
        color: #333;
        box-sizing: border-box;
        position: relative;
        //左边的蓝色竖杠
        &::after {
          content: "";
          display: block;
          width: 4px;
          height: 18px;
          position: absolute;
          top: 0 ;
          left: -16px;
          background-color: #00aefc;
        }
      }
      .content-top {
        width: 100%;
        font-size: 12px;
        color: #999999;
        padding: 6px 0 8px 0;
        box-sizing: border-box;
        .content-span {
          display: inline-block;
          margin-right: 10px;
        }
      }
      //曲线外框
      .WaiTao{
        width: 790px;
        border: 1px solid #e4e4e4;
        padding: 5px;
        box-sizing: border-box;
      }
      //右边名词
      .CumulativeIncome{
        width: 16px;
        font-size: 16px;
        color: #333;
        position: absolute;
        top: 50% ;
        right: 22px;
        transform: translateY(-50%);
      }
    }
  }

  // 当前持仓
  .CurrentHolding {
    width: 100%;
    margin-top: 20px;
    //时间选择器的外框
    .el-input__inner{
      border-width: 0;
      border-bottom-width: 1px;
      border-radius: 0;
    }
    //持仓顶部信息
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
    //表格样式
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
    //最新下单的上部
    .latestOrder-top {
      padding: 12px 0;
      overflow: hidden;
      color: #333;
      box-sizing: border-box;
    }
    //表格样式
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
          background: url("/static/SignalRing/CompetitionDetails/icon_xshoucangdixiayixuanzhong.png") no-repeat;
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
  //讨论区居中位置
  .discuss{
		width: 1200px;
    margin: auto;
    //讨论区头部
		.discuss-area{
			width: 100%;
			height: 66px;
			border-bottom: 1px solid #e6e6e6;
			display:flex;
			flex-wrap:wrap;
      justify-content:flex-start;
      //蓝色竖杠
			.discuss-area-slider{
				display: inline-block;
				width: 5px;
				height: 30px;
				background:#00aefc;
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
    //评论部分
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
      //评论内容
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
					color: #00aefc;
					margin-left: 12px;
					cursor: pointer;
				}
			}
    }
    //书写评论区域
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
    //确认提交按钮
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


