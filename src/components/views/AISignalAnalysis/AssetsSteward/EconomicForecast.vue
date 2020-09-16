<template>
  <!--页眉部分-->
  <div id="economic-forecaset">
    <!--页眉下内容上-->
    <el-row class="economic-top">
      <el-row class="economic-top-padding">
       <el-col :span="8">
        <div style="font-size: 14px;">选择回测条件</div>
        <div class="economic-select">
      <el-row>
      <div style="padding-bottom: 16px">选择国家</div>
        <el-select v-model="selectedCountry" plcaholder="请选择" style="width: 265px;">
          <el-option 
            v-for="country in countries"
            :key="country.value" 
            :label="country.label" 
            :value="country.value" ></el-option>
        </el-select>
      </el-row>
      <!--选择和状态-->
      <!--日期等选择-->
    

      <el-row>
        <div style="padding-bottom: 10px; padding-top: 22px;">请选择预测的周期时间</div>
         <el-date-picker
            v-model="start"
            type="date"
            placeholder="选择日期" style="width: 120px;">
          </el-date-picker>
        <span>至</span>
        <el-date-picker
            v-model="end"
            type="date"
            placeholder="选择日期" style="width: 120px;">
          </el-date-picker>
      </el-row>

      <el-row>
        <el-row>
          <el-col :div="4" style=" padding-top: 22px;">频率</el-col>
         
          <el-select v-model="freqValue" plcaholder="请选择"  style="width: 265px;">
            <el-option 
              v-for="freq in freqs"
              :key="freq.value" 
              :label="freq.label" 
              :value="freq.value"></el-option>
          </el-select>
        
        </el-row>
      </el-row>

       <el-row>
        <el-button type="primary">运行</el-button>
      </el-row>
      </div>

</el-col>
   
<!--状态表格-->
       <el-col :span="16">
        <div style="padding-bottom:10px; font-size: 14px;">配置方案</div>
      <el-table :data="strategyData" style="width: 678px;"  max-height="350">
          <el-table-column prop="modul" label="模块"></el-table-column>
          <el-table-column prop=" target1" label="收益率">
            <template scope="scope">
             {{scope.row.target1  | formatStateData}}
            </template>
        </el-table-column>
          <el-table-column prop=" target2" label="波动率">
            <template scope="scope">
              {{scope.row.target2  | formatStateData}}
            </template>
        </el-table-column>
          <el-table-column prop=" target3" label="夏善比">
            <template scope="scope">
              {{scope.row.target3  | formatStateData}}
            </template>
        </el-table-column>
         
        </el-table>

      </el-col>

    </el-row>
  </el-row>

  <!--图-->

    <el-row class="econmic-bottom">

      <div class="econmic-bottom-padding">
        <div style="font-size:18px color:#333333;line-height:29px;">经济数据</div>

          <div id="economyChart">
          <div class="buyer-market" v-for="sg in signals">       
          <div class="zoom"><span>缩放：</span><span>1个月 </span><span>1年</span><span>全部</span></div>

          <div class="buyer-text-box" id="buyer-text-box" style="float:left;">
          <signal-chart :chartData="sg.pChartData" style="height: 200px; width: 1000px; "></signal-chart>
      </div>
      <div  style="width:1.5em; float:left; padding-top:50px; padding-left:10px;">累计收益</div>
          </div>
      </div>
      </div>
    

    </el-row>  
<div style="width:1349px,height:20px,background-color:#555555"></div>
  

  </div>
</template>

<script>
import Highstock from 'highcharts/highstock'
import SignalChart from "@/components/layout/SignalChart"

var mockSignals = [
{
  pChartData: {id: "signalChart1", options: [], startDate: "2016-06-11", amountMoney: "30000", frequency: "每天"}},
];

var economyURL = "http://166.111.17.83:5002/economy/";

export default {

  components: {
      SignalChart,
  },

  data() {
    return {
      countries: [
        {value: "China", label: "中国"},
        {value: "America", label: "美国"},
      ],
     selectedCountry: "",
     /** start: new Date(new Date() - 30*24*60*60*1000),
      end: new Date(),**/
      start: '',
      end: '',
      freqs: [
        {value: 1, label: "日"},
        {value: 2, label: "周"},
        {value: 3, label: "月"},
        {value: 4, label: "季"},
        {value: 5, label: "年"}
      ],
      freqValue: '',
      strategyData: [{
            modul: '模块1',
            target1: '32',
            target2: '32',
            target3: '32'
          }, {
            modul: '模块2',
            target1: '32',
            target2: '32',
            target3: '32'
          }, {
            modul: '模块3',
            target1: '32',
            target2: '32',
            target3: '32'
          }, {
             modul: '模块4',
            target1: '32',
            target2: '32',
            target3: '32'
          }, {
             modul: '模块5',
            target1: '32',
            target2: '32',
            target3: '32'
          }, {
             modul: '模块6',
            target1: '32',
            target2: '32',
            target3: '32'
          }, {
             modul: '模块7',
            target1: '32',
            target2: '32',
            target3: '32'
          }, {
             modul: '模块8',
            target1: '32',
            target2: '32',
            target3: '32'
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
          #economic-forecaset {
               font-size: 16px;
               color: #333333;
            .el-row {
               margin-bottom: 12px;

            }
            .economic-top{
                width: 1180px;
                display: table;
                margin-left: auto;
                margin-right: auto;
                border: 1p solid #00A0E9;
                border-radius: 8px;
                background-color: white;
                box-shadow: 0 0 13px rgba(18, 35, 51, 0.4);
                margin-top: 10px;
            }
            .economic-top-padding{
                padding: 28px 0px 28px 48px;
            }
            .economic-select{
                padding-left: 24px;
                padding-top: 52px;
                padding-right: 75px;
                width: 300px;
            }
            .el-button{
                width: 90px;
                height: 34px;
                border-radius: 8px;
                margin-top:14px;
            }
            .el-date-editor.el-input{
                width: 200px;
            }

            .el-input__inner{
                border-left-width:0px;
                border-top-width:0px;
                border-right-width:0px;
                border-bottom-width:1px;

            }

           

            .econmic-bottom{
                margin-bottom: 90px;
                width: 1180px;
                height: 387px;
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
                margin: 32px 0px 0px 44px;
            }
            #economyChart{
                padding: 26px 0px 0px 35px;

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
            .econmic-collection{
                text-align: center;
                margin-top: 30px;
                margin-bottom: 20px;
            }

          }

</style>