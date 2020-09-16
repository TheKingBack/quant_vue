<template>
	<div id="fundamental-analysis">

	 <div class="fundamental-top">
	 	 <div class="fundamental-top-paddding">

        <div style="float:left; " >
        <div style="padding-top: 8px; float:left;">请选择预测的周期时间:</div>
         <el-date-picker
            v-model="start"
            type="date"
            placeholder="选择日期" style="width: 120px; margin-left:20px;  margin-right:20px;">
          </el-date-picker>
        <span>至</span>
        <el-date-picker
            v-model="end"
            type="date"
            placeholder="选择日期" style="width: 120px; margin-left:20px;">
          </el-date-picker>
     </div>

       <div style="float:left; padding-top:8px;margin-left:30px;">选择模块:</div>
         
         <div style="float:left;" >
          <el-select v-model="modulValue" plcaholder="请选择" style="width: 94px; margin-left:20px;">
            <el-option 
              v-for="modul in moduls"
              :key="modul.value" 
              :label="modul.label" 
              :value="modul.value"></el-option>
          </el-select>
       	</div>

		<div style="padding-top: 60px;">	
			<el-table
		        :data="tradingBoardData"
		        style="width: 100%; text-align:center;">
		        <el-table-column
		            prop="name"
		        	label="名称"
		        	>
		        </el-table-column>
		        <el-table-column
		        	prop="code"
		        	label="代码"
		        	>
		      	</el-table-column>
		      	<el-table-column
		        	prop="price"
		        	label="价格">
		      	</el-table-column>
		      	<el-table-column
		        	prop="predictedGains"
		        	label="预测涨幅">
		      	</el-table-column>
		    </el-table>
		</div>

	</div>
</div>

	 <div class="fundamental-bottom">
	 	<div class="fundamental-bottom-padding">
	 	<div style="font-size: 18px; color: #333333; padding-bottom:18px;">价格走势图</div>

	 	<ul class="buyer-text-table">
				<li v-for="money in monthProfit">
					<span class="month-Profit">{{money.name}}</span>
					<span class="month-num">{{money.num}}</span>
				</li>
			</ul>

	 	<div>

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
	 	</div>
	 </div>

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
		moduls: [
	        {value: 1, label: "模块一"},
	        {value: 2, label: "模块二"},
	        {value: 3, label: "模块三"},
	        {value: 4, label: "模块四"},
	        {value: 5, label: "模块五"}
	      	],
	      	modulValue: '',
     /** modulValue: 1,
     	 	 start: new Date(new Date() - 30*24*60*60*1000),
     		 end: new Date(),**/
     		start:'',
		    end: '',

			searchTime: new Date(),
			tradingBoardSelected: true,
			tradingBoardData: [
				{name: '人民网', code: '603969', price: '32.23', predictedGains: '1.2'},
				{name: '博天环境', code: '6033603', price: '40.16', predictedGains: '14.55'},
				{name: '唐山港', code: '601000', price: '5.1', predictedGains: '17.18'},
				{name: '300491', code: '300491', price: '29.91', predictedGains: '16.02'},
				{name: '京汉股份', code: '000615', price: '12.14', predictedGains: '16.14'},
				{name: '银龙股份', code: '256435', price: '32.23', predictedGains: '0.32'},
				{name: '博天环境', code: '578786', price: '12.69', predictedGains: '0.21'},
				{name: '唐山港', code: '254625', price: '23.58', predictedGains: '0.23'}
			],
			monthProfit: [{
					name: '人民网',
					num: '60300'
				}, {
					name: '11.86',
					num: '+0.35 +3.25%'
				}, {
					name: '今日 11.50',
					num: '昨日 11.50'
				}, {
					name: '最高 1350',
					num: '最低 10.50'
				}, {
					name: '涨跌幅 140.01%',
					num: '成交量 19.2万'
				}],
			
				 signals: mockSignals,
      stateData: []
		}
	},

	methods: {
		selectTradingBoard: function() {
			this.tradingBoardSelected = true;
		},
		unselectTradingBoard: function() {
			this.tradingBoardSelected = false;
		}
	},

	computed: {
		tradingType1: function() {
			return this.tradingBoardSelected ? "primary" : "default";
		},
		tradingType2: function() {
			return this.tradingBoardSelected ? "default" : "primary";
		}
	}

}
</script>

<style lang="scss">
	#fundamental-analysis {
		font-size: 16px;
    	color: #333333;
    	.fundamental-top{
      		width: 1196px;
      		display: table;
			margin-left: auto;
			margin-right: auto;
			border: 1p solid #00A0E9;
	      	border-radius: 8px;
	      	background-color: white;
	      	box-shadow: 0 0 13px rgba(18, 35, 51, 0.4);
	      	margin-top:20px;
    		}
    	.fundamental-top-paddding{
    		padding: 42px 46px 52px 46px;
    		}
    	.el-table th>.cell{
    		text-align:center;
    		}
	    .el-date-editor.el-input{
	        width: 94px;
	    	}

	    .el-input__inner{
	        border-left-width:0px;
	        border-top-width:0px;
	        border-right-width:0px;
	        border-bottom-width:1px;
	    	}
	    .fundamental-bottom-padding{
	    	padding-top:30px;
	    	padding-bottom:50px;
	    	padding-left:40px;
	    	overflow:auto;
	    	}
	    .fundamental-bottom{
	        margin-bottom: 70px;
	        width: 1196px;
	        margin-top: 30px;
	        overflow:auto;
	        display: table;
		    margin-left: auto;
		    margin-right: auto;
			border: 1p solid #00A0E9;
	      	border-radius: 8px;
	      	background-color: white;
	      	box-shadow: 0 0 13px rgba(18, 35, 51, 0.4);
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
					font-size: 16px;
					margin-top: 20px;
				}
				.month-num {
					display: block;
					width: 100%;
					height: 26px;
					line-height: 26px;
					text-align: center;
					font-size: 16px;
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