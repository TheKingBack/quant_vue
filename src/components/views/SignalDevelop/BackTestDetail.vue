<template>
	<div class="back-test-detail">
		<nav-bar :navMenuItems="SignalEditMenu"></nav-bar>
		<signal-dev-tabs :activeTab="'back-test-detail'"></signal-dev-tabs>
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
				<el-button type="primary"><i class="attrAnalyzeIcon"></i> 归因分析</el-button>
				<el-button><i class="shareIcon"></i> 分享到社区</el-button>
				<el-button @click="strategyCodeDiagVisible = true">查看代码</el-button>
				<el-dropdown trigger="click" style="margin-left: 10px;">
				  	<el-button>
				    	导出<i class="el-icon-caret-bottom el-icon--right"></i>
				  	</el-button>
				  	<el-dropdown-menu slot="dropdown">
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
					  <!-- 李庚鑫在这里做了改变将确定的事件名改了 -->
				    <el-button @click="mockTradeDiagVisible = false">取 消</el-button>
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
			<div style="display: inline-block; min-height: calc(100vh - 170px); min-width: calc(100% - 270px); margin-left: 10px;">
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
import NavBar from "@/components/layout/NavBar"
import Global from "@/components/layout/Global"
import SignalDevTabs from "@/components/views/SignalDevelop/SignalDevTabs/SignalDevTabs"
import GeneralInfo from "@/components/views/SignalDevelop/BackTestDetail/GeneralInfo"
import TransactionInfo from "@/components/views/SignalDevelop/BackTestDetail/TransactionInfo"
import PositionInfo from "@/components/views/SignalDevelop/BackTestDetail/PositionInfo"
import LogInfo from "@/components/views/SignalDevelop/BackTestDetail/LogInfo"
import PerfInfo from "@/components/views/SignalDevelop/BackTestDetail/PerfInfo"
import StrategyReturn from "@/components/views/SignalDevelop/BackTestDetail/StrategyReturn"
import BaseReturn from "@/components/views/SignalDevelop/BackTestDetail/BaseReturn"
import Alpha from "@/components/views/SignalDevelop/BackTestDetail/Alpha"
import Beta from "@/components/views/SignalDevelop/BackTestDetail/Beta"
import Sharp from "@/components/views/SignalDevelop/BackTestDetail/Sharp"
import Sortino from "@/components/views/SignalDevelop/BackTestDetail/Sortino"
import InfoRatio from "@/components/views/SignalDevelop/BackTestDetail/InfoRatio"
import Volatility from "@/components/views/SignalDevelop/BackTestDetail/Volatility"
import Benchmark from "@/components/views/SignalDevelop/BackTestDetail/Benchmark"
import MaxDrawdown from "@/components/views/SignalDevelop/BackTestDetail/MaxDrawdown"

import AceEditor from 'vue2-ace'
import 'brace/mode/python'
import 'brace/theme/tomorrow'

export default {
	mounted: function() {
		document.body.style.overflow = "auto";
		window.backtestId = this.$route.params.backtestId;
		this.$nextTick(function() {
			this.getBacktestinfo();
		});
	},
	components: {
		NavBar,
		SignalDevTabs,
		GeneralInfo,
		SignalDevTabs,
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
	data() {
		return {
			SignalEditMenu: Global.getPageMenu("SignalDevelop"),
			statusIcon: "./static/back-test-success.png",
			strategyData: {},
			startDate: "2017-01-01",
			endDate: "2017-11-01",
			amountMoney: 100000,
			frequencyLabel: "每天",
			strategyCode: "",
			statusDesc: "回测完成",
			timeCost: "3.75s",
			selectedTab: "generalInfo",
			mockTradeDiagVisible: false,
			strategyCodeDiagVisible: false,
			editorOptions: {fontSize: '16px'},
			tradeName: '小市值策略',
			tradeMoney: 100000,
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

		toMockTrading:function() {
			console.log(1);
			this.$router.push('/MockTrading');
		},
		
		getBacktestinfo: function() {
			var backtestId = this.$route.params.backtestId;

			console.log(1);

			// 李庚鑫在这里做了改变，将请求改为get
			this.$http.get(Global.getRequestUrl() + "/dev/signals/signal/backtests/get/" +"?id=" + backtestId,
				{
					// params: {'id': backtestId},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				resp = resp.data;
				console.log(resp);
				if(resp.success) {
					this.startDate = "2017-01-02";
					this.endDate = "2017-11-03";
					this.amountMoney = 100000;
					this.frequencyLabel = "每天";
					console.log("***");
					console.log(reps.data);
					this.startDate = resp.data.startDate;
					this.endDate = resp.data.endDate;
					this.amountMoney = resp.data.amountMoney;
					this.frequencyLabel = resp.data.frequency;
				}else {
					console.error("获取回测信息失败！");
				}
			}, function(error) {
				console.error("获取回测信息请求失败！");
				console.error(error);
			});
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
	}
}
</script>

<style lang="scss">
	.back-test-detail {
		background-color: #e6e6e6;
		font-size: 14px;

		.toolbar {
			padding: 0px 50px;
			height: 60px;
			background-color: white;
			padding-top: 1px;
			vertical-align: middle;
			line-height: 60px;
			margin: 2px 0px;

			.mockTradeIcon:before {
				content: url(/static/mock-trade.png);
			}

			.attrAnalyzeIcon:before {
				content: url(/static/attr-analyze.png);
			}

			.shareIcon:before {
				content: url(/static/share.png);
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
							color: #00BAE9;
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