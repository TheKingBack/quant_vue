<template>
	<div id="profit-summary">

		
          <el-table :data="profitData" style="width: 1010px;background-color:#ffffff;margin-bottom:20px;">
          <el-table-column prop=" target1" label="策略收益" >
            <template slot-scope="scope">
             {{scope.row["1"] | formatStateData}}
            </template>
        </el-table-column>
          <el-table-column prop=" target2" label="策略年化收益">
            <template slot-scope="scope">
              {{scope.row["2"] | formatStateData}}
            </template>
        </el-table-column>
          <el-table-column prop=" target3" label="基准收益">
            <template slot-scope="scope">
              {{scope.row["3"] | formatStateData}}
            </template>
        </el-table-column>
        <el-table-column prop=" target4" label="Alpha">
            <template slot-scope="scope">
              {{scope.row["4"] | formatStateData}}
            </template>
        </el-table-column>
        <el-table-column prop=" target5" label="Beta">
            <template slot-scope="scope">
              {{scope.row["5"] | formatStateData}}
            </template>
        </el-table-column>
        <el-table-column prop=" target6" label="Shape">
            <template slot-scope="scope">
              {{scope.row["6"] | formatStateData}}
            </template>
        </el-table-column>
        <el-table-column prop=" target7" label="Sortino">
            <template slot-scope="scope">
              {{scope.row["7"] | formatStateData}}
            </template>
        </el-table-column>
        <el-table-column prop=" target8" label="胜率">
            <template slot-scope="scope">
              {{scope.row["8"] | formatStateData}}
            </template>
        </el-table-column>
        <el-table-column prop=" target9" label="盈亏比">
            <template slot-scope="scope">
              {{scope.row["9"] | formatStateData}}
            </template>
        </el-table-column>
        <el-table-column prop=" target10" label="最大回撤">
            <template slot-scope="scope">
              {{scope.row["10"] | formatStateData}}
            </template>
        </el-table-column>
         
        </el-table>


      <div id="manageChart">
          <div class="buyer-market" v-for="sg in signals">       
          <div class="zoom"><span>缩放：</span><span>1个月 </span><span>1年</span><span>全部</span></div>
          <div class="buyer-text-box" id="buyer-text-box" style="float:left;">
          <signal-chart :chartData="sg.pChartData" style="height: 200px; width: 1000px;"></signal-chart>
      </div>
        <div  class="coordinate" style="margin-left:20px;margin-top:80px; float:left;">累计收益</div>
          </div>
      </div>

      <div id="charts" style="">
    <x-chart :id="id" :option="option" style="height: auto; width: 95%;"></x-chart>
  </div>






	</div>
</template>

<script>
import Highstock from 'highcharts/highstock'
import SignalChart from "@/components/layout/SignalChart"

// 导入chart组件
import XChart from '@/components/layout/Chart'
// 导入chart组件模拟数据
import options from '@/chart-options/options.js'

var mockSignals = [
{
  pChartData: {id: "signalChart3", options: [], startDate: "2016-06-11", amountMoney: "30000", frequency: "每天"}},
];

var economyURL = "http://166.111.17.83:5002/economy/";

export default {

  components: {
      SignalChart,
        XChart,
  },
  name: 'charts',
  data() {
  	 let option = options.bar
    return {


    		 id: 'test',
      option: option,

          profitData: [{
            target1: '32',
            target2: '32',
            target3: '32',
            target4: '32',
            target5: '32',
            target6: '32',
            target7: '32',
            target8: '32',
            target9: '32',
            target10: '32',

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
 #profit-summary {
  #economyChart{
        padding: 30px 0px 0px 35px;
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
      padding: 10px 0;
      margin-bottom: 40px;
    }
    .coordinate{
      transform:rotate(90deg);
      -ms-transform:rotate(90deg); /* Internet Explorer 9*/
      -moz-transform:rotate(90deg); /* Firefox */
      -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
      -o-transform:rotate(90deg); /* Opera */
      filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
          }		
          .el-tabs__nav{
            margin-top:0px;
          }
 }

</style>