
<template>
  <!--页眉部分-->
  <div id="assets-allocation">
    <el-row class="allocation-bottom">
 <div class="econmic-bottom-padding">
        <div style="font-size:18px color:#333333;line-height:29px;">
		<ul class="economic-type">
				<li v-for="type in types">
					<span class="type-kind">{{type.kind}}</span>
				</li>
			</ul>
       </div>
		<ul class="buyer-text-table">
				<li v-for="money in monthProfit">
					<span class="month-Profit">{{money.name}}</span>
					<span class="month-num">{{money.num}}</span>
				</li>
			</ul>
      <div id="economyChart" >
          <div class="buyer-market" v-for="sg in signals">       
          <div class="zoom"><span>缩放：</span><span>1个月 </span><span>1年</span><span>全部</span></div>

         
         <div class="buyer-text-box" id="buyer-text-box" style="float:left;">
          <signal-chart :chartData="sg.pChartData" style="height: 200px; width: 1000px;"></signal-chart>
      </div>
       <div  style="width:1.5em; padding-top:50px; padding-left:10px;float:left;">累计收益</div>
          </div>
      </div>

       </div>

    </el-row>  

  </div>
</template>

<script>
import Highstock from 'highcharts/highstock'
import SignalChart from "@/components/layout/SignalChart"

var mockSignals = [
{
  pChartData: {id: "signalChart2", options: [], startDate: "2016-06-11", amountMoney: "30000", frequency: "每天"}},
];

var economyURL = "http://166.111.17.83:5002/economy/";

export default {

 components: {
      SignalChart,
  },



  data() {
    return {
    		types: [
    		{kind: '模式一'},
    		{kind: '模式二'},
    		{kind: '模式三'},
    		{kind: '模式四'},
    		{kind: '模式五'},
    		],
    		monthProfit: [{
					name: '本月收益',
					num: '0.89%'
				}, {
					name: '目标收益（每月）',
					num: 'HS300+3%'
				}, {
					name: '年化收益',
					num: '80.55%'
				}, {
					name: '历史达标率',
					num: '100%'
				}, {
					name: '适合资金',
					num: '0.89%'
				}],
          signals: mockSignals,
      stateData: []
    }
  },

  mounted: function() {
    this.$nextTick(function() {
      this.loadEconomicForecastData();
    })
  },

  methods: {

     collection() {
      var myname=prompt("收藏标的名称");
      if(myname!=null){
        alert("收藏成功");
        this.collectionImg='/static/AIanalysis/collected.png';
      }
        else{
          alet("请输入收藏名称");      
      }

    },

    loadEconomicForecastData: function() {
      this.$http.get(economyURL + "china").then(function(resp) {
        resp.data.shift();
        this.strategyData = resp.data;
        this.filterStateData(resp.data);
        this.loadEconomyChart();
      });
    },

    filterStateData: function(data) {
      for(var i=0; i<data.length; i++) {
        this.stateData.push([new Date(data[i].Date).getTime(), parseInt(data[i].state)]);
      }
    },

    loadEconomyChart: function() {
      Highstock.StockChart({
        chart: {
          renderTo: 'economyChart'
        },
        title: {
          text: '策略状态图'
        },
        
        series: [{
          name: '状态',
          data: this.stateData
        }]
      });
    }

  },

  filters: {
    formatStateData: function(val) {
      return parseFloat(val*100).toFixed(2) + "%"
    }
  }


}
</script>



<style lang="scss">
  #assets-allocation {
    font-size: 16px;
     color: #333333;
    .el-row {
      margin-bottom: 12px;
    }
  
    .allocation-bottom{
      margin-bottom: 90px;
      width: 1180px;
      margin-top: 30px;
      display: table;
      margin-left: auto;
      margin-right: auto;
      border: 1p solid #00A0E9;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 0 13px rgba(18, 35, 51, 0.4);
    }
    .econmic-bottom-padding{
      margin: 32px 0px 80px 44px;
    }
	.economic-type{
		width: 500px;
			height: 50px;
			margin-bottom: 0px;
			padding: 0;
			list-style: none;
			position: relative;
			margin-left: 30px;
			li {
				float: left;
				width: 70px;
				height: 100%;
				position: relative;
				.type-kind {
					display: block;
					width: 100%;
					height: 20px;
					line-height: 20px;
					text-align: center;
					font-size: 14px;
					margin-top: 20px;
				}
	}
}
    .buyer-text-table {
			width: 900px;
			height: 100px;
			margin-bottom: 20px;
			padding: 0;
			list-style: none;
			position: relative;
			li {
				float: left;
				width: 150px;
				height: 100%;
				position: relative;
				.month-Profit {
					display: block;
					width: 100%;
					height: 20px;
					line-height: 20px;
					text-align: center;
					font-size: 10px;
					color: #999999;
					margin-top: 20px;
				}
				.month-num {
					display: block;
					width: 100%;
					height: 26px;
					line-height: 26px;
					text-align: center;
					font-size: 26px;
					color: #333333;
					margin-top: 20px;
				}
			}
			li:first-child {
				.month-num {
					color: #EC4343;
				}
			}
			.buyer-btn {
				width: 180px;
				height: 35px;
				background: #EC4343;
				border-radius: 4px;
				position: absolute;
				right: 10px;
				bottom: 55px;
				text-align: center;
				line-height: 35px;
				color: #ffffff;
				font-size: 14px;
				cursor: pointer;
			}
		}
		
    #economyChart{
        padding: 0px 0px 0px 35px;
    }
    .zoom {
      width: 500px;
      font-size: 12px;
      color: #999999;
      line-height: 30px;
      span {
        display: inline-block;
        margin-right: 10px;
      }
    }
    .buyer-text-box {
      width: 1000px;
      border: 1px solid #e4e4e4;
      height: 170px;
      padding: 10px 0px 100px 0px;
    }

  }

</style>