
<template>
  <!--页眉部分-->
  <div id="assets-management">
    <!--页眉下内容上-->
    <el-row class="manage-top">
      <el-row class="manage-top-padding">
       <el-col :span="8">
        <div class="manage-select">
     <el-row>

      <div style="padding-bottom: 12px">选择标的（多选）</div>
        <el-select v-model="selectedtable" multiple plcaholder="请选择" style="width: 265px;">
          <el-option 
            v-for="table in tables"
            :key="table.value" 
            :label="table.label" 
            :value="table.value" ></el-option>
        </el-select>
      </el-row>
      <!--选择和状态-->
      <!--日期等选择-->
    

      <el-row>
        <div style=" padding-bottom: 8px; padding-top: 18px;">请选择预测的周期时间</div>
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
          <el-col :div="4" style=" padding-top: 18px;">频率</el-col>
         
          <el-select v-model="freqValue" plcaholder="请选择" style="width: 265px;">
            <el-option 
              v-for="freq in freqs"
              :key="freq.value" 
              :label="freq.label" 
              :value="freq.value"></el-option>
          </el-select>
        
        </el-row>
      </el-row>

       <el-row>
        <el-row>
          <el-col :div="4" style=" padding-top: 18px;">选择模块</el-col>
         
          <el-select v-model="modulValue" plcaholder="请选择" style="width: 265px;">
            <el-option 
              v-for="modul in moduls"
              :key="modul.value" 
              :label="modul.label" 
              :value="modul.value"></el-option>
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
        <div style="padding-bottom:10px;font-size: 14px;">配置方案</div>
      <el-table :data="strategyData" style="width: 678px;"  max-height="350">
          <el-table-column prop="modul" label="模块"></el-table-column>
          <el-table-column prop=" target1" label="指标一">
            <template scope="scope">
             {{scope.row.target1  | formatStateData}}
            </template>
        </el-table-column>
          <el-table-column prop=" target2" label="指标二">
            <template scope="scope">
              {{scope.row.target2  | formatStateData}}
            </template>
        </el-table-column>
          <el-table-column prop=" target3" label="指标三">
            <template scope="scope">
              {{scope.row.target3  | formatStateData}}
            </template>
        </el-table-column>
         
        </el-table>

      </el-col>

    </el-row>
  </el-row>

  <!--图-->

    <el-row class="manage-bottom">
       <div class="econmic-bottom-padding">
        <div style="font-size:18px;color:#333333;line-height:29px;">每日持仓和回测资金曲线</div>

        <el-tabs>
      <el-tab-pane label="收益概述" > 
        <profit-summary></profit-summary>
      </el-tab-pane>
        <el-tab-pane>
      </el-tab-pane>
      <el-tab-pane label="每日持仓&收益">
       <day-hold></day-hold>
      </el-tab-pane>
    
    </el-tabs>  


    </div>

        <div class="econmic-collection" style="clear:both">
       <template>
        <input  @click="collection" name="button" type="image" :src="collectionImg"  />
     </template>
        </div>

    </el-row>  

  </div>
</template>

<script>
import Highstock from 'highcharts/highstock'
import SignalChart from "@/components/layout/SignalChart"
import ProfitSummary from '@/components/views/AISignalAnalysis/AssetsSteward/AssetsManagement/ProfitSummary'
import DayHold from '@/components/views/AISignalAnalysis/AssetsSteward/AssetsManagement/DayHold'
var mockSignals = [
{
  pChartData: {id: "signalChart3", options: [], startDate: "2016-06-11", amountMoney: "30000", frequency: "每天"}},
];

var economyURL = "http://166.111.17.83:5002/economy/";

export default {

  components: {
      SignalChart,
      ProfitSummary,
      DayHold
  },

  data() {
    return {
       tables: [
        {value: "one", label: "标的一"},
        {value: "two", label: "标的二"},
         {value: "three", label: "标的三"},
      ],
      selectedtable: "组合一",
      /**start: new Date(new Date() - 30*24*60*60*1000),
      end: new Date(),**/
      start:'',
       end: '',
      freqs: [
        {value: 1, label: "日"},
        {value: 2, label: "周"},
        {value: 3, label: "月"},
        {value: 4, label: "季"},
        {value: 5, label: "年"}
      ],
      /**freqValue: 1,**/
      freqValue: '',
       moduls: [
        {value: 1, label: "1"},
        {value: 2, label: "2"},
        {value: 3, label: "3"},
        {value: 4, label: "4"},
        {value: 5, label: "5"}
      ],
     /** modulValue: 1,**/
     modulValue: '',
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
           collectionImg: '/static/AIanalysis/collection.png',
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
  #assets-management {
    font-size: 16px;
     color: #333333;
    .el-row {
      margin-bottom: 12px;
    }
    .manage-top{
      width: 1180px;
      display: table;
      margin-left: auto;
      margin-right: auto;
      border: 1p solid #00A0E9;
      border-radius: 8px;
      background-color: white;
      box-shadow: 0 0 13px rgba(18, 35, 51, 0.4);
      margin-top:20px;
    }
    .manage-top-padding{
       padding: 28px 0px 28px 48px;
    }
    .manage-select{
      padding-left: 24px;
       padding-top: 24px;
        padding-right: 75px;
        width: 300px;
    }
    .el-button{
      width: 90px;
      height: 34px;
      border-radius: 8px;
       margin-top:18px;
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

   

    .manage-bottom{
      margin-bottom: 120px;
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
      margin: 32px 0px 0px 44px;
    }
    .econmic-collection{
       text-align: center;
       margin-top: 30px;
       margin-bottom: 20px;
    }

    .el-tabs__item {
      font-size: 16px;
      margin-left: 0px;
      padding-left: 0px;  
      padding-right: 20px;

    }
    .el-tabs__nav-wrap{
      margin-bottom: 10px;
      margin-left:0px;
    
    }
    .el-tabs__nav{
      margin-top:24px;
    }
    .el-tabs__item:nth-child(2) {
            margin-left: 0px;   
          }
    .el-tabs__item:nth-child(3) {
            font-size: 16px;
             
          }
          .el-tabs__header{
            width:1010px;
          }
  }

</style>