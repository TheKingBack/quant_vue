<template>
	<div class="general-info">
		<div style="border-bottom: 1px solid #E6E6E6; height: 36px; background-color:white; vertical-align: middle; line-height: 36px; padding-left: 20px;">
			<img src="/static/AICommunity/general-info-unselected.png">
			<span style="padding-left: 5px">收益概述</span>
		</div>
		<div style="background-color: white; padding: 20px; min-height: calc(100vh - 36px - 170px);">
			<div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;color: #00aefc;">策略收益</div>
					<div style="font-size: 16px; padding-top: 12px;">{{strategyGain | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">策略年化收益</div>
					<div style="font-size: 16px; padding-top: 12px;">{{strategyYearGain | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;color: #f54e2d;">基准收益</div>
					<div style="font-size: 16px; padding-top: 12px;">{{baseGain | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">Alpha</div>
					<div style="font-size: 16px; padding-top: 12px;">{{alpha | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">Beta</div>
					<div style="font-size: 16px; padding-top: 12px;">{{beta | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">Sharp</div>
					<div style="font-size: 16px; padding-top: 12px;">{{sharp | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">Sortino</div>
					<div style="font-size: 16px; padding-top: 12px;">{{sortino | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">Information Ratio</div>
					<div style="font-size: 16px; padding-top: 12px;">{{infoRatio | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">Algorithm Volatility</div>
					<div style="font-size: 16px; padding-top: 12px;">{{algoVola | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">Benchmark Volatility</div>
					<div style="font-size: 16px; padding-top: 12px;">{{benchVola | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">胜率</div>
					<div style="font-size: 16px; padding-top: 12px;">{{winRate | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">日胜率</div>
					<div style="font-size: 16px; padding-top: 12px;">{{winRateDay | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">盈亏比</div>
					<div style="font-size: 16px; padding-top: 12px;">{{winLossRatio | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">盈利次数</div>
					<div style="font-size: 16px; padding-top: 12px;">{{winCount | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">亏损次数</div>
					<div style="font-size: 16px; padding-top: 12px;">{{lossCount | formatBenefit}}</div>
				</div>
				<div class="char-status">
					<div style="font-size: 12px; height: 30px;">最大回撤</div>
					<div style="font-size: 16px; padding-top: 12px;">{{maxDrawBack | formatBenefit}}</div>
				</div>
			</div>
			<div style="padding-top: 34px;" id="generalChart">
			</div>
		</div>
	</div>
</template>

<script>
import Global from "@/components/layout/Global"
import Highstock from 'highcharts/highstock'

//sessionstroage的key
var LastBackTestDatakey = "MockTrading";

export default {
	components: {
		Highstock
	},
	data() {
		return {

			// 传给模拟交易的ID
			backtestID:"",


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
			maxDrawBack: "--"
		}
	},
	methods: {
		getStrategyCatVal: function(catVal) {
			if(!catVal) {
				console.error("未获取到策略类别");
			}
			var strategyNum = null;
			switch(catVal) {
				case "futures":
					strategyNum = 0;
					break;
				case "stock":
					strategyNum = 1;
					break;
				case "forex":
					strategyNum = 2;
					break;
				case "bond":
					strategyNum = 3;
					break;
				case "options":
					strategyNum = 4;
					break;
				default:
					console.error("不存在此类别的策略：" + catVal);
					break;
			}
			return strategyNum;
		},
		loadGeneralInfo: function(strategyData) {
			console.log(strategyData.amountMoney)
			var params = {
				signalId: this.$route.params.signalId,
				code: strategyData.strategyCode,
				task_type: this.getStrategyCatVal(this.$route.params.strategyCat),
				startTime: new Date(strategyData.startTime).getTime()/1000,
				endTime: new Date(strategyData.endTime).getTime()/1000,
				frequency: strategyData.frequency,
				initMoney:strategyData.amountMoney
			};
			var self = this;
			this.$http.post(Global.getRequestUrl() + "/dev/signal/test/run", 
				params,
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				// 李庚鑫改了这里
				resp = resp.body;
				console.log("11111111111111111111111111111111111111111111111111111111");
				console.log(resp);
				// resp = resp.data;
				if(resp.success) {
					//set data to general info tab
					this.backtestID = resp.data.name;
					
					var stateIntervalID = setInterval(function() {
						//Get signal compile running status/result
						self.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
							{
								backtestId: resp.data.name
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
										 console.log(output);
										var L = output.length-2;
										console.log(L);

										 output[L].total_benefit_rate && (self.strategyGain = parseFloat(output[L].total_benefit_rate) * 100);
										//  console.log(output[L].total_benefit_rate)
									 	// output[L].alpha && (self.alpha = output[L].alpha);
									 	// output[L].beta && (self.beta = output[L].beta);
										 output[L].max_retracement && (self.maxDrawBack = parseFloat(output[L].max_retracement) * 100);
										//  console.log(output[L].max_retracement)
										// output[L].half_decay && (self.halfDecay = parseFloat(output[L].half_decay));

										//将回测数据存入到sessionStorage中
										var LastBackTestData = output[L]
										window.sessionStorage[LastBackTestDatakey] = JSON.stringify(LastBackTestData);

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
					console.error("运行回测失败！");
				}
			}, function(error) {
				console.error("运行回测请求失败！");
				console.error(error);
			});
		},
		formatNetValues: function(PhotoData) {
			self.benefitData = PhotoData;

			// self.benefitData = [];
			// for(var i=0; i<netValues.length; i++) {
			// 	var _ts = netValues[i].ts * 1000;
			// 	var _v = netValues[i].v;
			// 	self.benefitData.push([_ts, _v]);
			// } 
		},
		loadBenefitData: function() {
			Highstock.StockChart({
				chart: {
					renderTo: 'generalChart'
				},
				credits: {
					enabled: false
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
		}
	},
	filters: {
		formatBenefit: function(val) {
			if(val === "--" || !val) {
				return "--";
			}
			return parseFloat(val).toFixed(2) + "%";
		}
	}
}
</script>

<style lang="scss">
	.general-info {
		.char-status {
			// display: inline-block;
			float: left;
			width: calc(100%/16);
			text-align: center;
			min-width: 35px;
		}		
	}
	
</style>