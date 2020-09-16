<template>
   <div>
      <nav-bar :navMenuItems="IntelligentTransactionMenu"></nav-bar>
      <!-- 取消自选股弹框 -->
      <div class="SelfSelectionShare">
            <div class="SSSContent">
                  <div class="SSSCTop" v-text="SSSCWord"></div>
                  <div class="SSSCButton">
                        <div class="SSSCBL" @click="CloseSelfSelectionShare">取消</div>
                        <div class="SSSCBR" @click="JoinOrLogoutSelfShare(JoinOrLogout)">确定</div>
                  </div>
            </div>
      </div>


      <!-- 外面的大容器 -->
      <div class="ShareDetailsBox">

         <!-- 页面头部的标题和按钮 -->
         <div class="SDTop contain">
            <div class="SDTLeft">{{ShareName}}（{{ShareSymbol}}）</div>
            <div class="SDTRight" @click="OpenSelfSelectionShare(0)" v-show="SelfShareN">加入自选股</div>
            <div class="SDTRightOne" @click="OpenSelfSelectionShare(1)" v-show="!SelfShareN">取消加入自选股</div>
         </div>

         <!-- 页面上部的收益 -->
         <div class="SDProfit contain">
            <span class="SDPOne">+27.14</span>
            <span class="SDPTwo">7.86</span>
            <span class="SDPThree">17.12%</span>
         </div>

         <!-- 页面展示的数据上边部分 -->
         <ul class="SDDataTop contain">
            <li>
               <div class="SDDTLeft">最高</div>
               <div class="SDDTRight" style="color:#ec4343">{{parseFloat(ShareDetailsData.high).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDTLeft">外盘</div>
               <div class="SDDTRight" style="color:#0d9f37;">{{parseFloat(ShareDetailsData.out).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDTLeft">量比</div>
               <div class="SDDTRight" style="color:#0d9f37;">{{parseFloat(ShareDetailsData.liang).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDTLeft">今开</div>
               <div class="SDDTRight" style="color:#ec4343">{{parseFloat(ShareDetailsData.open).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDTLeft">总市值</div>
               <div class="SDDTRight">{{parseFloat(ShareDetailsData.price).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDTLeft">流通股</div>
               <div class="SDDTRight">{{parseFloat(ShareDetailsData.vol).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDTLeft">换手率</div>
               <div class="SDDTRight">{{parseFloat(ShareDetailsData.huanshou).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDTLeft">成交量</div>
               <div class="SDDTRight">{{parseFloat(ShareDetailsData.vol).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDTLeft">市值率</div>
               <div class="SDDTRight">{{parseFloat(ShareDetailsData.shizhi).toFixed(2) | benefitFilter}}</div>
            </li>
         </ul>

         <!-- 页面展示的数据下边部分 -->
         <ul class="SDDataBottom contain">
            <li>
               <div class="SDDBLeft">最低</div>
               <div class="SDDBRight" style="color:#0d9f37;">{{parseFloat(ShareDetailsData.low).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDBLeft">内盘</div>
               <div class="SDDBRight" style="color:#0d9f37;">{{parseFloat(ShareDetailsData.neipan).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDBLeft">委比</div>
               <div class="SDDBRight" style="color:#ec4343">{{parseFloat(ShareDetailsData.weibi).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDBLeft">昨收</div>
               <div class="SDDBRight" style="color:#0d9f37;">{{parseFloat(ShareDetailsData.close).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDBLeft">流通值</div>
               <div class="SDDBRight">{{parseFloat(ShareDetailsData.liutongzhi).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDBLeft">总股本</div>
               <div class="SDDBRight">{{parseFloat(ShareDetailsData.zongguben).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDBLeft">成交额</div>
               <div class="SDDBRight">{{parseFloat(ShareDetailsData.price).toFixed(2) | benefitFilter}}</div>
            </li>
            <li>
               <div class="SDDBLeft">振幅</div>
               <div class="SDDBRight">{{parseFloat(ShareDetailsData.zhenfu).toFixed(2)  | benefitFilter}}</div>
            </li>
         </ul>

         <!-- 页面展示的数据K线 -->
         <div class="SDKLine contain">
            <div class="kline">
               <div id="kline_container"></div>
               <hr>

               Width: <input id="width" type="text" value="1200">
               Height: <input id="height" type="text" value="546">
               <button id="resize-btn">resize</button>
               <hr>

               <button id="switch-trade-btn">Switch Trade</button>
               <hr>

               Symbol: <input id="symbol" type="text" value="btc">
               Symbol Name: <input id="symbol-name" type="text" value="BTC/USD">
               <button id="set-symbol-btn">setSymbol</button>
               <hr>

               <button id="toggle-theme-btn">Toggle Theme</button>
               <hr>

               设置语言:
               <select name="" id="lang-select">
                  <option value="zh-cn">简体中文</option>
                  <option value="zh-tw">繁体中文</option>
                  <option value="en-us">英文</option>
               </select>
               <button id="set-lang-btn">设置</button>
               <hr>

            </div>
         </div>

         <!-- 页面资金部分 -->
         <div class="SDCapital contain">
            <div class="SDCFlow">
               <div class="SDCFTop">资金流向</div>
               <div class="SDCFContent">
                  <div id="container" style="min-width:550px;height:330px"></div>
               </div>
            </div>
            <div class="SDCAnalysis">
               <div class="SDCATop">资金分析</div>
               <div class="SDCAContent">
                  <div style="width:550px;height:330px;" id="generalChart"></div>
               </div>
            </div>
         </div>

         <!-- 页面咨询和研究报告 -->
         <div class="SDAdvisoryReport contain">
            <div class="SDCompanyConsulting">
               <div class="SDCCTop">公司资讯</div>
               <div class="SDCCContent">
                  <ul class="SDCCCContent">
                     <li @click="GoInformation(item.html)" v-for="item in AdvisoryReportData" :key="item.id">
                        <div class="SDCCCLeft">
                           <span class="SDCCCLTitle">[{{item.stock}}]</span>{{item.title}}
                        </div>
                        <div class="SDCCCRight">({{item.datetime}})</div>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="SDResearchReport">
               <div class="SDRRTop">研究报告</div>
               <div class="SDRRContent">
                  <ul class="SDRRCContent">
                     <li @click="GoInformation(item.html)" v-for="item in ResearchReportData" :key="item.id">
                        <div class="SDRRCLeft">
                           <span class="SDRRCLTitle">[{{item.stock}}]</span>{{item.title}}
                        </div>
                        <div class="SDRRCRight">({{item.datetime}})</div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>

         <!-- 间隔线 -->
         <div class="SDPartingLine"></div>

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
import Highstock from "highcharts/highstock";
import Highcharts from "highcharts";

// import "@/assets/js/sockjs.js"
// import "@/assets/js/stomp.min.js"
// import "@/assets/js/jquery.min.js";
// import "@/assets/js/jquery.mousewheel.min.js";
import Kline from "kline"

export default {
  created(){
        this.GetStockNewsData();
  },
  mounted: function() {
    this.$nextTick(function() {
      this.GetShareDetailsData();
      this.GetKlineNeedData();
      this.PieChartSet();
      // this.GetSDCAnalysisData();
    });
    setTimeout('this.$router.go(0)";',2000);
  },
  components: {
    NavBar,
    FooterBar,
    Highcharts,
    Highstock,
    Kline
  },
  data() {
    return {
      IntelligentTransactionMenu: Global.getPageMenu("IntelligentTransaction"),
      //股票名称
      ShareName:"",
      //股票编号
      ShareSymbol:"",


      //股票详情数据
      ShareDetailsData:[],

      //是否加入自选股
      SelfShareN:true,
      //模态框内的内容
      SSSCWord:"",
      //加入还是取消
      JoinOrLogout:"",

      // 走势图数据
      SDCAnalysis:[],

      //公司咨询数据
      AdvisoryReportData:[],

      //研究报告数据
      ResearchReportData:[],

      // 下部讨论的数据
      discussionMessage:[
         {discussionImg:'./static/icon_xiangqing_dingbutouxiang.png',reply:'赵雷',dis_text:'瞬间忆起张爱玲的《爱》 补充：于千万人之中遇到你所要遇到的人，于千万年之中，时间的无涯的荒野中，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话好说，唯有轻轻的问一声：“噢，你也在这里吗？”'},
         {discussionImg:'./static/icon_xiangqing_dingbutouxiang.png',reply:'张碧晨',dis_text:'以前高中打游戏。 经常去网吧通宵。 前面坐个长发妹子。 很长的那种。 每次玩上课睡觉她总会把扎着头发放开 。 多年后同学会发现她剪了短发。 依然那么漂亮。 问她为什么剪了。 她说其实她不喜欢留长头发。 留长头发是为了她后面经常熬夜的少年能够睡个安稳觉不被老师发现。现在不见多年。”'}
      ],
      
    };
  },
   methods: {
      //获取股票资讯
      GetStockNewsData() {
            var params = {
                  symbol:this.$route.query.smybol
            };
            this.$http.get(Global.getStockNewsRequestUrl()+ '/news/stock/list?page=1&pageSize=10',
                  {     
                       params: params
                  }
            ).then(function(resp){
                  var resp = resp.body;
                  if(resp.success){
                        // resp.data && (resp.data.JoinSelfSelect = 0);
                        if(resp.data) {
                              console.log(resp.data);
                              this.AdvisoryReportData = resp.data.results;
                              this.ResearchReportData = resp.data.results;
                        }else {
                              this.AdvisoryReportData = [];
                              this.ResearchReportData = [];
                        }
                        console.log("获取股票资讯数据成功！");
                        // console.log(this.AdvisoryReportData);
                  }else{
                        console.log("获取股票资讯数据失败！")
                  }
            },function(error){
                  console.log("获取股票资讯请求失败！")

            })
      },

      //获取kline所需的信息
      GetKlineNeedData(){
            var ID = this.$route.query.id;
            var oDate = new Date(); //实例一个时间对象；
            var Year = oDate.getFullYear();   //获取系统的年；
            var Month = oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
            var Day = oDate.getDate(); // 获取系统日，
            var NowDate = Year + "-" + Month + "-" + Day + " " + "09:00:00";
            var StartTime = new Date(NowDate).getTime();
            console.log(StartTime);

            var EndTime = new Date().getTime();
            console.log(EndTime);
            var url;
            var TypeSymbol;
            var SymbolName = this.$route.query.smybol;
            if(ID == 1){
                  url = "http://180.166.6.244:18000/market/stock/kline?period=minute&kline=true&startTime=" + StartTime;
                  TypeSymbol = this.$route.query.smybol;
                  console.log(TypeSymbol)
            }else if(ID == 2){
                  url = "http://180.166.6.244:18000/market/future/kline?exchange=czce&kline=true&contract=菜油&endTime=" + EndTime + "&startTime=" + StartTime;
                  TypeSymbol = this.$route.query.smybol;
            }else if(ID == 3){
                  url = "http://47.91.255.22:18000/market/coin/kline/future?exchange=okex&kline=true&contract=this_week&endTime=" + EndTime + "&startTime=" + StartTime;
                  TypeSymbol = "btc";
            }else if(ID == 4){
                  url = "http://47.91.255.22:18000/market/coin/kline/spot?exchange=okex&kline=true&startTime=" + StartTime;
                  TypeSymbol = "btc";
            }
            this.GetKLineData(url,TypeSymbol,SymbolName);
            // this.$router.go(0);
      },

      //弹出模态框
      OpenSelfSelectionShare(type){
            var Height = $(window).height();
		var Width = $(window).width();
		$('.SelfSelectionShare').css({
			"width":Width,
			"height":Height
            }).fadeIn('1000');
            if(type==0){
                 this.SSSCWord =  "你确定要加入自选股吗？"
                 this.JoinOrLogout = 0;
            }else{
                  this.SSSCWord =  "你确定要取消加入自选股吗？"
                  this.JoinOrLogout = 1;
            }
      },
      //关闭模态框
      CloseSelfSelectionShare(){
            $('.SelfSelectionShare').fadeOut('1000');
      },

      //加入或者取消自选股
      JoinOrLogoutSelfShare(state){
            $('.SelfSelectionShare').fadeOut('1000');
            console.log(state);
            //获取地址栏中的参数
          var id = this.$route.query.id;
          console.log(this.$route.query.id);
          this.$http.get(Global.getRequestUrl() + "/dev/signal/test/result",
            {
                  params:{
                  "id":id,
                  "state":state
                  },
                  headers: Global.getRequestHeader()
            }
            ).then(
                  function(resp) {
                        var resp = resp.body;
                        console.log(resp);
                        console.log("111111111111111111111111111111111111111111111");
                        if (resp.success) {
                              if(state==0){
                                    this.SelfShareN = false;
                              }else{
                                    this.SelfShareN = true;
                              }
                              
                        console.log("加入自选股或取消加入自选股成功！");
                        } else {
                        console.log("加入自选股或取消加入自选股失败！");
                        }
                  },
                  function(error) {
                        console.log("加入自选股或取消加入自选股请求失败！");
                  }
            );
      },
      
      //去向资讯详情
      GoInformation(html){
            console.log(html);
            var Key = "GetHtmlCode";
            window.sessionStorage[Key] = JSON.stringify(html);
            console.log(window.location.origin);
            // this.$router.push('/MyQuotation/InformationDetails?id=' + Key);
            window.open(window.location.origin +'/#/MyQuotation/InformationDetails?id=' + Key);
      },

      //饼状图配置
      PieChartSet(){
         Highcharts.chart('container', {
            title: {
               text: '2014 某网站各浏览器浏览量占比'
            },
            tooltip: {
               headerFormat: '{series.name}<br>',
               pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
               pie: {
                  allowPointSelect: true,  // 可以被选择
                  cursor: 'pointer',       // 鼠标样式
                  dataLabels: {
                     enabled: true,
                     format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                     style: {
                           color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                     }
                  }
               }
            },
            credits: {
                  enabled: false
               },
            series: [{
               type: 'pie',
               name: '浏览器访问量占比',
               data: [
                     ['Firefox',   45.0],
                     ['IE',       26.8],
                     {
                           name: 'Chrome',
                           y: 12.8,
                           sliced: true,  // 默认突出
                           selected: true // 默认选中 
                     },
                     ['Safari',    8.5],
                     ['Opera',     6.2],
                     ['其他',   0.7]
               ]
            }]
         });
      },

      // 将回测提交模拟
      GetSDCAnalysisData() {
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
      loadBenefitData() {
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
                  data: self.SDCAnalysis //[[1,2], [3,4]]
               }]
            });
      },
    
      // 给走势图传数据
      formatNetValues(PhotoData) {
         self.SDCAnalysis = PhotoData;
      },

      //获取K线图
      GetKLineData(url,TypeSymbol,name){
         var kline = new Kline({
            element: "#kline_container",
            width: 1200,
            height: 546,
            theme: 'dark', // light/dark
            language: 'zh-cn', // zh-cn/en-us/zh-tw
            ranges: ["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"],
            symbol: TypeSymbol,
            // symbol: "btc",
            symbolName: name,
            // symbolName: "BTC/USD",
            type: "poll", // poll/socket
            url: url,
            // url: "http://47.91.255.22:18000/market/coin/kline/spot?exchange=okex&kline=true&startTime=1528272960000",
            limit: 1000,
            intervalTime: 5000,
            debug: true,
            showTrade: true,
            onResize: function(width, height) {
                  console.log("chart resized: " + width + " " + height);
            }
         });
         kline.draw();

         $('#resize-btn').click(function () {
            var height = $('#height').val();
            var width = $('#width').val();
            kline.resize(width, height);
         });

         $('#switch-trade-btn').click(function () {
            kline.toggleTrade();
         });

         $('#set-symbol-btn').click(function () {
            var symbol = $('#symbol').val();
            var symbolName = $('#symbol-name').val();
            kline.setSymbol(symbol, symbolName);
         });

         $('#toggle-theme-btn').click(function () {
            if(kline.theme == "dark") {
               kline.setTheme("light");
            } else {
               kline.setTheme("dark");
            }
         });

         $('#set-lang-btn').click(function () {
            var lang = $('#lang-select').val();
            kline.setLanguage(lang);
         });
      },

      //获取股票详情数据
      GetShareDetailsData() {
          //获取地址栏中的参数
          var ID = this.$route.query.id;
            var url;
            var oDate = new Date(); //实例一个时间对象；
            var Year = oDate.getFullYear();   //获取系统的年；
            var Month = oDate.getMonth()+1;   //获取系统月份，由于月份是从0开始计算，所以要加1
            var Day = oDate.getDate(); // 获取系统日，
            var NowDate = Year + "-" + Month + "-" + Day + " " + "09:00:00";
            var StartTime = new Date(NowDate).getTime();
            var TypeSymbol;
            if(ID == 1){
                  url = "http://180.166.6.244:18000/market/stock/kline?period=minute&kline=false";
                  TypeSymbol = this.$route.query.smybol;
                  console.log(TypeSymbol)
            }else if(ID == 2){
                  url = "http://180.166.6.244:18000/market/future/kline?exchange=czce&kline=false&contract=菜油&endTime=1538333195000"
                  TypeSymbol = this.$route.query.smybol;
            }else if(ID == 3){
                  url = "http://47.91.255.22:18000/market/coin/kline/future?exchange=okex&kline=false&contract=this_week&endTime=1528618020000"
                  TypeSymbol = "btc";
            }else if(ID == 4){
                  url = "http://47.91.255.22:18000/market/coin/kline/spot?exchange=okex&kline=false"
                  TypeSymbol = "btc";
            }
          this.$http.get(url,
            {
                  params:{
                  "symbol":TypeSymbol,
                  "startTime":StartTime,
                  },
                  headers: Global.getRequestHeader()
            }
            ).then(
            function(resp) {
                        var resp = resp.body;
                        console.log(resp);
                        console.log("111111111111111111111111111111111111111111111");
                        if (resp.success) {
                              if(resp.data){
                                    console.log("aaaaaaaa")
                                    var resp = resp.data;
                                    var L = resp.length-1;
                                    this.ShareDetailsData = resp[L];
                                    console.log(this.ShareDetailsData);
                                    if(this.ShareDetailsData.name != undefined){
                                          this.ShareName = this.ShareDetailsData.name;
                                          this.ShareSymbol = this.ShareDetailsData.code;
                                    }else if(this.ShareDetailsData.code){
                                          this.ShareName = this.ShareDetailsData.code;
                                          this.ShareSymbol = this.ShareDetailsData.code;
                                    }else if(this.ShareDetailsData.symbol){
                                          this.ShareName = this.ShareDetailsData.symbol;
                                          this.ShareSymbol = this.ShareDetailsData.symbol;
                                    }
                              }else{
                                    this.ShareDetailsData = [];
                              }
                              
                              console.log("获取股票详情数据成功！");
                              console.log(this.ShareDetailsData);
                        } else {
                              console.log("获取市股票详情数据失败！");
                        }
                  },
                  function(error) {
                        console.log("获取股票详情请求失败！");
                  }
            );
      },
   },
   filters:{
         benefitFilter: function(val) {
			if(val === null || val === undefined || val === "NaN") {
				return "--";
			}
			return val;
		},
   }
};
</script>

<style lang="less" scoped>
//版心设定
.contain {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}

//是否取消自选股模态框
.SelfSelectionShare{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .SSSContent{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    .SSSCTop{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    .SSSCButton{
      width: 100% ;
      padding: 0 60px ;
      box-sizing: border-box;
      .SSSCBL,
      .SSSCBR{
            cursor: pointer;
            width: 90px;
            height: 36px;
            font-size: 16px;
            text-align: center;
            line-height: 36px;
            border-radius: 8px;
      }
      .SSSCBL{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .SSSCBR{
        float: right;
        background: #00aefc;
        color: #fff;
      }
    }
  }
}


//外面的大容器
.ShareDetailsBox{
   background-color: #fff;

   //页面头部的标题和按钮
   .SDTop{
      padding: 20px 0;
      overflow: hidden;
      .SDTLeft{
         float: left;
         font-size: 30px;
         color: #333;
      }
      .SDTRight{
         float: right;
         width: 112px;
         height: 36px;
         background-color: #00aefc;
         color: #fff;
         font-size: 14px;
         border-radius: 18px;
         text-align: center;
         line-height: 36px;
         cursor: pointer;
      }
      .SDTRightOne{
         float: right;
         width: 112px;
         height: 36px;
         background-color: #fff;
         color: #00aefc;
         font-size: 14px;
         border-radius: 18px;
         text-align: center;
         line-height: 36px;  
         cursor: pointer;
      }
   }

   //页面上部的收益
   .SDProfit{
      .SDPOne{
         font-size: 24px;
         color: #ec4343;
      }
      .SDPTwo,
      .SDPThree{
         font-size: 14px;
         color: #333;
         margin-left: 14px;
      }
   }

   //页面展示的数据上边部分
   .SDDataTop{
      margin-top: 12px;
      overflow: hidden;
      li{
         width: 132px;
         float: left;
         .SDDTLeft{
            float: left;
            font-size: 14px;
            color: #999;
         }
         .SDDTRight{
            float: left;
            width: 90px;
            // margin-left: 24px;
            text-align: center;
            font-size: 14px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
         }
      }
   }

   //页面展示的数据下边部分
   .SDDataBottom{
      margin: 12px auto 20px;
      overflow: hidden;
      li{
         width: 132px;
         float: left;
         .SDDBLeft{
            float: left;
            font-size: 14px;
            color: #999;
         }
         .SDDBRight{
            float: left;
            width: 90px;
            // margin-left: 24px;
            text-align: center;
            font-size: 14px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
         }
      }
   }

   //页面展示的数据K线
   .SDKLine{
      height: 546px;
   }

   //页面资金部分
   .SDCapital{
      margin:20px auto;
      overflow: hidden;
      box-sizing: border-box;
      .SDCFlow{
         width: 590px;
         height: 400px;
         float: left;
         padding: 20px;
         border: 1px solid rgba(0,0,0,0.1);
         border-radius: 8px;
         box-sizing: border-box;
         .SDCFTop{
            font-size: 16px;
            position: relative;
            color: #333;
            &::before{
               content:"";
               display: block;
               width: 6px;
               height: 18px;
               background-color: #00aefc;
               position: absolute;
               left: -20px;
               top: 0;
            }
         }
      }
      .SDCAnalysis{
         width: 590px;
         height: 400px;
         float: right;
         padding: 20px;
         border: 1px solid rgba(0,0,0,0.1);
         border-radius: 8px;
         box-sizing: border-box;
         .SDCATop{
            font-size: 16px;
            box-sizing: border-box;
            position: relative;
            color: #333;
            &::before{
               content:"";
               display: block;
               width: 6px;
               height: 18px;
               background-color: #00aefc;
               position: absolute;
               left: -20px;
               top: 0;
            }
         }
      }
   }

   //页面咨询和研究报告
   .SDAdvisoryReport{
      margin:0px auto 50px;
      overflow: hidden;
      box-sizing: border-box;
      .SDCompanyConsulting{
         width: 590px;
         height: 400px;
         float: left;
         padding: 20px;
         border: 1px solid rgba(0,0,0,0.1);
         border-radius: 8px;
         box-sizing: border-box;
         .SDCCTop{
            font-size: 16px;
            position: relative;
            color: #333;
            padding-bottom: 14px;
            border-bottom: 1px dashed rgba(0,0,0,0.1);
            &::before{
               content:"";
               display: block;
               width: 6px;
               height: 18px;
               background-color: #00aefc;
               position: absolute;
               left: -20px;
               top: 0;
            }
         }
         .SDCCContent{
            width: 100% ;
            height: 320px;
            overflow: hidden;
            .SDCCCContent{
               width: 100% + 2.6px;
               height: 100% ;
               padding: 10px 0;
               overflow-y: scroll;
               li{
                  width: 100% ;
                  height: 28px;
                  line-height: 28px;
                  cursor: pointer;
                  .SDCCCLeft{
                     width: 360px;
                     float: left;
                     font-size: 14px;
                     color: #999;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     .SDCCCLTitle{
                        margin-right: 8px;
                     }
                  }
                  .SDCCCRight{
                     margin-right: 10px;
                     float: right;
                     font-size: 14px;
                     color: #999;
                  }
               }
            }
         }
      }
      .SDResearchReport{
         width: 590px;
         height: 400px;
         float: RIGHT;
         padding: 20px;
         border: 1px solid rgba(0,0,0,0.1);
         border-radius: 8px;
         box-sizing: border-box;
         .SDRRTop{
            font-size: 16px;
            position: relative;
            color: #333;
            padding-bottom: 14px;
            border-bottom: 1px dashed rgba(0,0,0,0.1);
            &::before{
               content:"";
               display: block;
               width: 6px;
               height: 18px;
               background-color: #00aefc;
               position: absolute;
               left: -20px;
               top: 0;
            }
         }
         .SDRRContent{
            width: 100% ;
            height: 320px;
            overflow: hidden;
            .SDRRCContent{
               width: 100% + 2.6px;
               height: 100% ;
               padding: 10px 0;
               overflow-y: scroll;
               li{
                  width: 100% ;
                  height: 28px;
                  line-height: 28px;
                  cursor: pointer;
                  .SDRRCLeft{
                     width: 360px;
                     float: left;
                     font-size: 14px;
                     color: #999;
                     overflow: hidden;
                     text-overflow: ellipsis;
                     white-space: nowrap;
                     .SDRRCLTitle{
                        margin-right: 8px;
                     }
                  }
                  .SDRRCRight{
                     margin-right: 10px;
                     float: right;
                     font-size: 14px;
                     color: #999;
                  }
               }
            }
         }
      }
   }

   //间隔线
   .SDPartingLine{
      width: 100% ;
      height: 20px;
      background-color: #f0f0f0;
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
               margin-top: 22px;
               border-radius: 5px;
            }
            .discuss-area-text{
               display: inline-block;
               font-size: 26px;
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
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0px 0px 10px 6px #e6e6e6;
            textarea{
               width: 100%;
               height: 293px;
               padding: 20px;
               box-sizing: border-box;
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
}

</style>