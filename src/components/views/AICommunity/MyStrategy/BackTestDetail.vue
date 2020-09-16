<template>
	<div class="back-test-detail">
		<div class="toolbar">
			<span>
				<span>设置：</span>
				<span v-text="startDate"></span>
				<span> 到 </span>
				<span v-text="endDate"></span>
				<span>，</span>
				<span v-text="amountMoney"></span>
				<span>，</span>
				<span v-text="frequencyLabel"></span>
			</span>
			
			<span style="padding-left: 40px;">
				<span>状态：</span>
				<img :src="statusIcon">
				<span v-text="statusDesc"></span>
				<span>，</span>
				<span>耗时</span>
				<span v-text="timeCost"></span>
			</span>

			<span style="float: right;">
				<el-button type="danger" @click="mockTradeDiagVisible = true"><i class="mockTradeIcon"></i> 模拟交易</el-button>
				<el-button type="primary" style="display:none;"><i class="attrAnalyzeIcon"></i> 归因分析</el-button>
				<el-button class="LiButton"><i class="shareIcon"></i> 分享到社区</el-button>
				<el-button class="LiButton" @click="strategyCodeDiagVisible = true">查看代码</el-button>
				<el-dropdown trigger="click" style="margin-left: 10px;">
				  	<el-button class="LiButton">
				    	导出<i class="el-icon-caret-bottom el-icon--right"></i>
				  	</el-button>
				  	<el-dropdown-menu class="LiButton" slot="dropdown">
				    	<el-dropdown-item>收益概述</el-dropdown-item>
				    	<el-dropdown-item>交易详情</el-dropdown-item>
					    <el-dropdown-item>持仓&收益</el-dropdown-item>
					    <el-dropdown-item>日志</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</span>
		</div>
		<div>
			<el-dialog
				  title="新建模拟交易"
				  :visible.sync="mockTradeDiagVisible"
				  size="tiny">
				  <div style="width: 300px;">
				  	<div class="new-mock-trade-item">
				  		<div>交易名称</div>
				  		<el-input v-model="tradeName" placeholder="请输入内容"></el-input>
				  	</div>
				  	<div class="new-mock-trade-item">
				  		<div>初始资金</div>
				  		<el-input v-model="tradeMoney" placeholder="请输入内容"></el-input>
				  	</div>
				  	<div class="new-mock-trade-item">
				  		<div>开始日期</div>
				  		 <el-date-picker
					      v-model="tradeStartDate"
					      type="date"
					      placeholder="选择日期">
					    </el-date-picker>
				  	</div>
				  	<div class="new-mock-trade-item">
				  		<div>数据频率</div>
				  		<template>
						  <el-select v-model="tradeFre" placeholder="请选择">
						    <el-option
						      v-for="item in freOptions"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
						</template>
				  	</div>
				  	<div class="new-mock-trade-item">
				  		<div>时限</div>
				  		<template>
						  <el-select v-model="tradeTimeLimit" placeholder="请选择">
						    <el-option
						      v-for="item in timeLimitOpts"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
						</template>
				  	</div>
				  </div>
				  <span slot="footer" class="dialog-footer">
				    <el-button @click="mockTradeDiagVisible = false">取 消</el-button>
					 <!-- 李庚鑫在这做了改变 -->
				    <el-button type="primary" @click="toMockTrading">确 定</el-button>
				  </span>
				</el-dialog>
		</div>
		<div>
			<el-dialog
			  title="策略代码"
			  :visible.sync="strategyCodeDiagVisible"
			  size="small">
			  <ace-editor :content="strategyCode" :theme="'tomorrow'" height="500px" :lang="'python'" :options="editorOptions">
			  </ace-editor>
			</el-dialog>
		</div>
		<div class="strategy-results" style="padding-top: 12px; min-height: calc(100vh - 182px);">
			<div class="result-nav">
				<el-menu default-active="generalInfo" @select="handleTabSelect">
					<template v-for="tab in resultsTab">
						<span v-if="tab.index === 'separator'" class="separator"></span>
						<el-menu-item :index="tab.index" v-else>
							<a>
								<img class="unselected-icon" :src="tab.iconPref+'unselected.png'">
								<img class="selected-icon" :src="tab.iconPref+'selected.png'">
								<span style="padding: 0px 5px;">{{tab.label}}</span>
							</a>
						</el-menu-item>
					</template>
			    </el-menu>
			</div>
			<div style="display: inline-block; min-height: calc(100vh - 170px); min-width: calc(100% - 210px); margin-left: 10px;">
				<general-info v-if="selectedTab === 'generalInfo'" ref="generalInfo"></general-info>
				<transaction-info v-if="selectedTab === 'transactionInfo'"></transaction-info>
				<position-info v-if="selectedTab === 'positionInfo'"></position-info>
				<log-info v-if="selectedTab === 'logInfo'"></log-info>
				<perf-info v-if="selectedTab === 'perfInfo'"></perf-info>
				<strategy-return v-if="selectedTab === 'strategyReturn'"></strategy-return>
				<base-return v-if="selectedTab === 'baseReturn'"></base-return>
				<alpha v-if="selectedTab === 'alpha'"></alpha>
				<beta v-if="selectedTab === 'beta'"></beta>
				<sharp v-if="selectedTab === 'sharp'"></sharp>
				<sortino v-if="selectedTab === 'sortino'"></sortino>
				<info-ratio v-if="selectedTab === 'infoRatio'"></info-ratio>
				<volatility v-if="selectedTab === 'volatility'"></volatility>
				<benchmark v-if="selectedTab === 'benchmark'"></benchmark>
				<max-drawdown v-if="selectedTab === 'maxDrawdown'"></max-drawdown>
			</div>
		</div>
	</div>
</template>

<script>
import Global from "@/components/layout/Global"
import GeneralInfo from "@/components/views/AICommunity/MyStrategy/BackTestDetail/GeneralInfo"
import TransactionInfo from "@/components/views/AICommunity/MyStrategy/BackTestDetail/TransactionInfo"
import PositionInfo from "@/components/views/AICommunity/MyStrategy/BackTestDetail/PositionInfo"
import LogInfo from "@/components/views/AICommunity/MyStrategy/BackTestDetail/LogInfo"
import PerfInfo from "@/components/views/AICommunity/MyStrategy/BackTestDetail/PerfInfo"
import StrategyReturn from "@/components/views/AICommunity/MyStrategy/BackTestDetail/StrategyReturn"
import BaseReturn from "@/components/views/AICommunity/MyStrategy/BackTestDetail/BaseReturn"
import Alpha from "@/components/views/AICommunity/MyStrategy/BackTestDetail/Alpha"
import Beta from "@/components/views/AICommunity/MyStrategy/BackTestDetail/Beta"
import Sharp from "@/components/views/AICommunity/MyStrategy/BackTestDetail/Sharp"
import Sortino from "@/components/views/AICommunity/MyStrategy/BackTestDetail/Sortino"
import InfoRatio from "@/components/views/AICommunity/MyStrategy/BackTestDetail/InfoRatio"
import Volatility from "@/components/views/AICommunity/MyStrategy/BackTestDetail/Volatility"
import Benchmark from "@/components/views/AICommunity/MyStrategy/BackTestDetail/Benchmark"
import MaxDrawdown from "@/components/views/AICommunity/MyStrategy/BackTestDetail/MaxDrawdown"

import AceEditor from 'vue2-ace'
import 'brace/mode/python'
import 'brace/theme/tomorrow'

var strategySessionKey = "strategy_data";

export default {
	mounted: function() {
		document.body.style.overflow = "auto";
	},
	components: {
		GeneralInfo,
		TransactionInfo,
		PositionInfo,
		LogInfo,
		PerfInfo,
		StrategyReturn,
		BaseReturn,
		Alpha,
		Beta,
		Sharp,
		Sortino,
		InfoRatio,
		Volatility,
		Benchmark,
		MaxDrawdown,
		AceEditor
	},
	props: ['activeTabChanged'],
	data() {
		return {
			backTestID:"",

			statusIcon: "./static/back-test-success.png",
			strategyData: {},
			startDate: "",
			endDate: "2",
			amountMoney: 10000,
			frequencyLabel: "每天",
			strategyCode: "",
			statusDesc: "回测完成",
			timeCost: "3.75s",
			selectedTab: "generalInfo",
			mockTradeDiagVisible: false,
			strategyCodeDiagVisible: false,
			editorOptions: {fontSize: '16px'},
			tradeName: '小市值策略',
			tradeMoney: 10000,
			tradeFre: 'day',
			tradeStartDate: '2017-8-30',
			tradeTimeLimit: 'forever',
			freOptions: [
				{value: 'day', label: '每天'},
				{value: 'minute', label: '每分钟'},
			],
			timeLimitOpts: [
				{value: 'forever', label: '永久'}
			],
			resultsTab: [
				{index: "generalInfo", label: "收益概述", iconPref: "/static/AICommunity/general-info-"},
				{index: "transactionInfo", label: "交易详情", iconPref: "/static/AICommunity/transaction-info-"},
				{index: "positionInfo", label: "每日持仓&收益", iconPref: "/static/AICommunity/position-info-"},
				{index: "logInfo", label: "日志输出", iconPref: "/static/AICommunity/log-info-"},
				{index: "perfInfo", label: "性能分析", iconPref: "/static/AICommunity/perf-info-"},
				{index: "separator"},
				
				{index: "strategyReturn", label: "策略收益", iconPref: "/static/AICommunity/strategy-return-"},
				{index: "baseReturn", label: "基准收益", iconPref: "/static/AICommunity/base-return-"},
				{index: "alpha", label: "Alpha", iconPref: "/static/AICommunity/square-"},
				{index: "beta", label: "Beta",iconPref: "/static/AICommunity/square-"},
				{index: "sharp", label: "Sharp", iconPref: "/static/AICommunity/square-"},
				{index: "sortino", label: "Sortino", iconPref: "/static/AICommunity/square-"},
				{index: "infoRatio", label: "Information Ratio", iconPref: "/static/AICommunity/square-"},
				{index: "volatility", label: "Volatility", iconPref: "/static/AICommunity/square-"},
				{index: "benchmark", label: "Benchmark Volatility", iconPref: "/static/AICommunity/square-"},
				{index: "maxDrawdown", label: "Max Drawdown", iconPref: "/static/AICommunity/square-"}
			]
		}
	},
	methods: {
		// 点击跳转到模拟交易页面
		toMockTrading:function() {
			console.log(1);
			var that = this;
			this.mockTradeDiagVisible = false;
			var BacktestId = this.$refs.generalInfo.backtestID;
			this.$router.push('/AICommunity/MockTrading/' + BacktestId);
		},


		handleTabSelect: function(index) {
			this.selectedTab = index;
		},
		formatDate: function(date) {
			var year = date.getFullYear();
			var month = date.getMonth() +1;
			var day = date.getDate();
			if(month < 9) {
				month = "0" + month;
			}
			if(day < 9) {
				day = "0" + day;
			}
			return year + "-" + month + "-" + day;
		}
	},
	watch: {
		//Get refresh message from parent component to refresh data
		activeTabChanged: function(val) {
			if(val === "back-test-detail") {
				if(window.sessionStorage[strategySessionKey]){
					this.strategyData = JSON.parse(window.sessionStorage[strategySessionKey]);
					this.startDate = this.formatDate(new Date(this.strategyData.startTime));
					this.endDate = this.formatDate(new Date(this.strategyData.endTime));
					this.amountMoney = this.strategyData.amountMoney;
					if(this.strategyData.frequency === "day"){
						this.frequencyLabel = "每天";
					}else if(this.strategyData.frequency === "hour"){
						this.frequencyLabel = "每小时";
					}else if(this.strategyData.frequency === "minute30"){
						this.frequencyLabel = "每半小时";
					}else if(this.strategyData.frequency === "minute15"){
						this.frequencyLabel = "每15分钟";
					}else if(this.strategyData.frequency === "minute5"){
						this.frequencyLabel = "每5分钟";
					}else if(this.strategyData.frequency === "minute"){
						this.frequencyLabel = "每分钟";
					}
					// this.frequencyLabel = (this.strategyData.frequency === "day") ? "每天" : "每分钟";
					this.strategyCode = this.strategyData.strategyCode;

					this.$refs.generalInfo.loadGeneralInfo(this.strategyData);

					delete window.sessionStorage[strategySessionKey];
				}
			}
		}
	}
}
</script>

<style lang="scss">
	.back-test-detail {
		background-color: #e6e6e6;

		.toolbar {
			padding: 0px 42px;
			height: 70px;
			background-color: white;
			padding-top: 1px;
			vertical-align: middle;
			line-height: 70px;

			.mockTradeIcon:before {
				content: url("/static/mock-trade.png");
			}

			.attrAnalyzeIcon:before {
				content: url("/static/attr-analyze.png");
			}

			.shareIcon:before {
				content: url("/static/share.png");
			}
			.LiButton{
				color: #666;
				border-color:#666;
				&:hover{
					color: #00aefc;
					border-color: #00aefc;
					.el-button:focus, .el-button{
						color: #00aefc;
						background-color: #00aefc;
					}
					.shareIcon:before {
						content: url("/static/shareOne.png");
					}
				}
			}
		}

		.strategy-results {
			.result-nav {
				width: 200px;
				display: inline-block;
				float: left;
				min-height: calc(100vh - 170px);
				background-color: #FFFFFF;
				padding: 0px 30px;

				.el-menu {
					background-color: white;

					.el-menu-item {
						height: 40px;
						line-height: 40px;

						a {
							text-decoration: none;
							color: #666666;
						}
					}

					.is-active {
						a {
							color: #00aefc;
						}

						.selected-icon {
							display: inline-block;
						}

						.unselected-icon {
							display: none;
						}
					}

					.selected-icon {
						display: none;
					}

					.unselected-icon {
						display: inline-block;
					}


				}

				.separator {
					display: inline-block;
					width: 100%;
					border-bottom: 1px solid #999999;
					cursor: default;
					margin: 17px 0px;
				}
			}

		}

		.new-mock-trade-item {
			padding-bottom: 10px;
		}

	}
</style>