<template>
	<div>
		<el-row class="edit-strategy-pane">
			<el-col :span="IDECols" :class="{'hide-pane': shouldHideIDEPane}">
				<el-row class="IDE-toolbar">
					<el-col :span="12">
						<el-button class="toolbar-icon" :disabled="isSaveDisabled" v-text="saveLabel" @click="saveEditorHandler()"></el-button>
						<el-button class="toolbar-icon" @click="startBuild">编译运行</el-button>
						<el-button class="toolbar-icon toolbar-icon-link"><router-link class="toolbar-icon-linkone" to="/FooterNav/FunctionLibrary"link target="_blank" style="text-decoration: none;">函数库</router-link></el-button>
						<!-- <el-button class="toolbar-icon toolbar-icon-link"><router-link to="/AICommunity/myStrategy/funcLib" style="text-decoration: none;">函数库</router-link></el-button> -->
					</el-col>
					<el-col :span="8" :offset="2">
						<div style="float: right;">
							<!-- <el-button class="toolbar-icon toolbar-icon-link"><router-link to="/AICommunity/myStrategy/strategyAPI" style="text-decoration: none;">API</router-link></el-button> -->
							<el-button class="toolbar-icon toolbar-icon-link"><router-link class="toolbar-icon-linkone" target="_blank" to="/FooterNav/APIDocument" style="text-decoration: none;">API</router-link></el-button>
							<el-button icon="search" class="toolbar-icon"></el-button>
							<el-button icon="setting" class="toolbar-icon"></el-button>
							<el-button class="toolbar-icon" @click="dialogVisible = true"><i class="keyboard"></i></el-button>
							<el-dialog title="快捷键" :visible.sync="dialogVisible">
								<span>
									<el-row v-for="(shortcutKey,index) in shortcutKeys" :key="index" style="margin: 5px;">
										<el-col :span="6">
											<span v-text="shortcutKey.keyName" style="float: right; background-color: #f9f2f4;"></span>
										</el-col>
										<el-col :span="18" v-text="'：' + shortcutKey.keyDesc"></el-col>
									</el-row>
								</span>
								<span slot="footer">
									<el-button @click="dialogVisible = false">关闭</el-button>
								</span>
							</el-dialog>
						</div>
					</el-col>
					<el-col :span="1" :offset="1" style="margin-left:4px;">
						<img :src="toggleIDEIcon" style="float: right; margin: 5px 0px;" @click="toggleIDE">
					</el-col>
				</el-row>
				<el-row>
					<div>
						<!-- :theme="'twilight'"   -->
						<ace-editor :sync="true" :content="strategyCode" :height="IDEHeight" :theme="'twilight'" :lang="'python'" :options="editorOptions" v-on:editor-update="editorUpdate"></ace-editor>
					</div>
				</el-row>
			</el-col>
			<el-col :span="12" :class="{'hide-pane': shouldHideBuildPane}">
				<el-row class="build-toolbar">
					<div :class="{'hide-pane': shouldHideBuildToolbar}">
						<el-col :span="20">
							<div>
								<el-date-picker class="quant-date" v-model="startDate" type="date" placeholder="选择日期"></el-date-picker>
								<span>至</span>
								<el-date-picker class="quant-date" v-model="endDate" type="date" placeholder="选择日期"></el-date-picker>
								<span>￥</span>
								<el-input v-model="amountMoney" style="width: 80px;"></el-input>
								<el-select v-model="frequency" placeholder="请选择" style="width: 120px;margin-left:8px;">
									<el-option v-for="fre in freOptions" :key="fre.value" :label="fre.label" :value="fre.value"></el-option>
								</el-select>
							</div>
						</el-col>
						<el-col :span="4" style="float: right;">
							<el-button type="primary" class="Libutton" @click="runBackTest">运行回测</el-button>
						</el-col>
					</div>
					<div :class="{'hide-pane': shouldHideBuildProgress}">
						<el-col :span="8" style="padding-top: 15px;">
							<el-progress :percentage="progressVal" :show-text="false"></el-progress>
						</el-col>
						<el-col :span="4" style="margin-left: 20px">
							<el-button @click="cancelBuild">取消编译</el-button>
						</el-col>
					</div>
				</el-row>
				<el-row :class="{'hide-pane': shouldHideBuildChartPane}">
					<div style="height: 350px; background: white; padding: 10px;">
						<div style="height: 35px;">
							<div class="char-status" style="color: #00aefc;">
								<div style="margin-bottom:8px;">策略收益</div>
								<div>{{strategyBenefit | formatBenefit}}</div>
							</div>
							<div class="char-status" style="color: #f54e2d;">
								<div style="margin-bottom:8px;">基准收益</div>
								<div>{{benchmarkBenefit | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div style="margin-bottom:8px;">Alpha</div>
								<div>{{alpha | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div style="margin-bottom:8px;">Beta</div>
								<div>{{beta | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div style="margin-bottom:8px;">Sharpe</div>
								<div>{{sharp | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div style="margin-bottom:8px;">最大回撤</div>
								<div>{{maxDrawBack | formatBenefit}}</div>
							</div>
							<div class="char-status">
								<div style="margin-bottom:8px;">半衰期</div>
								<div>{{halfDecay}}</div>
							</div>
						</div>
						<div style="height: 300px;">
							<div :class="{'hide-pane': shouldHideToolTip}" style="height: 100%; padding-top: 50px; text-align: center">
								<div><img :src="toolTipIcon"></div>
								<div style="color: grey; font-size: 16px; padding: 5px;">
									<div class="ESWords">点击"编译运行"进行快速回测或者点击"运行回测"进行详细回测</div> 
								</div>
							</div>
							<div :class="{'hide-pane': shouldHideChart}">
								<div id="benefitChart" style="height: 300px;"></div>
							</div>
						</div>
					</div>
				</el-row>
				<el-row>
					<div :style="{height: logHeight}">
						<el-row>
							<span class="log-tab LogMsg" @click="showLogMsg">日志</span>
							<span class="log-tab ErrorMsg" @click="showErrorMsg">错误</span>
							<span style="float: right; padding: 10px"><img :src="toggleMsgPaneIcon" @click="toggleMsgPane"></span>
						</el-row>
						<el-row style="height: 100%; width: 100%;">
							<div class="log-pane" v-text="outputMsg"></div>
						</el-row>
					</div>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import AceEditor from 'vue2-ace'
import 'brace/mode/python'
import 'brace/theme/twilight'
import Highstock from 'highcharts/highstock'
import Global from "@/components/layout/Global"

var globalMenuHeight = 62;
var navSubMenuHeight = 56;
var IDEtoolbarHeight = 56;
var IDEHeight = 320;
var logToolbarHeight = 42;
var editorHeight = window.innerHeight - globalMenuHeight - navSubMenuHeight - IDEtoolbarHeight;
var strategyBaseURL = "http://166.111.17.78:8000/";
var submitTaskURL = "regression/task/submit/";
var getTaskStateURL = "regression/task/state/";
var strategySessionKey = "strategy_data";

export default {
	components: {
		AceEditor,
		Highstock
	},
	props: ['activeTabChanged', 'signalName',"SCode"],
	data() {
		return {
			toggleIDEIcon: './static/right-expand.png',
			toggleMsgPaneIcon: './static/up-expand.png',
			toolTipIcon: './static/tooltip.png',
			editorOptions: {fontSize: '16px'},
			IDECols: 12,
			IDEHeight: editorHeight + 'px',
			logHeight: (editorHeight - IDEHeight - logToolbarHeight) > 0 ? (editorHeight - IDEHeight - logToolbarHeight+ 'px') : '0px',
			shouldHideIDEPane: false,
			shouldHideBuildPane: false,
			shouldHideBuildChartPane: false,
			shouldHideBuildToolbar: false,
			shouldHideBuildProgress: true,
			shouldHideToolTip: false,
			shouldHideChart: true,
			progressVal: 0,
			startDate: new Date("2017-01-01"),
			endDate: new Date("2017-11-01"),
			amountMoney: 100000,
			frequency: 'day',
			freOptions: [
				{value: 'minute', label: '每分钟'},
				{value: 'minute5', label: '每5分钟'},
				{value: 'minute15', label: '每15分钟'},
				{value: 'minute30', label: '每半小时'},
				{value: 'hour', label: '每小时'},
				{value: 'day', label: '每天'}
			],
			activeMsg: 'log',

			//日志相关信息
			// logMsg: "logs message",
			logMsg: "",
			logStart:0,

			//错误相关数据
			errorMsg: "error message",
			outputMsg: '',
			msgPaneState: 'not-expanded',
			isSaveDisabled: true,
			saveLabel: "已保存",
			dialogVisible: false,
			shortcutKeys: [
				{keyName: "F2", keyDesc: "折叠当前"},
				{keyName: "Alt-0", keyDesc: "折叠其他"},
				{keyName: "Alt-Shift-0", keyDesc: "展开所有"},
				{keyName: "Ctrl-/", keyDesc: "注释"},
				{keyName: "Ctrl-[", keyDesc: "块反缩进"},
				{keyName: "Ctrl-]", keyDesc: "块缩进"},
				{keyName: "Ctrl-A", keyDesc: "选择全部"},
				{keyName: "Ctrl-L", keyDesc: "跳转到"},
				{keyName: "Ctrl-F", keyDesc: "查找"},
				{keyName: "Ctrl-Alt-K", keyDesc: "查找全部"},
				{keyName: "Alt-Shift-K", keyDesc: "选择并查找上一个"},
				{keyName: "Ctrl-D", keyDesc: "删除当前行"},
				{keyName: "Ctrl-Shift-D", keyDesc: "复制并粘贴当前行"},
				{keyName: "Ctrl-H", keyDesc: "替换"},
				{keyName: "Alt-Up", keyDesc: "上移行"},
				{keyName: "Alt-Down", keyDesc: "下移行"},
				{keyName: "Ctrl-Shift-Left", keyDesc: "选择左侧单词"},
				{keyName: "Ctrl-Shift-Right", keyDesc: "选择右侧单词"},
				{keyName: "Alt-Shift-Left", keyDesc: "选择到行起始"},
				{keyName: "Alt-Shift-Right", keyDesc: "选择到行结束"},
				{keyName: "Ctrl-Home", keyDesc: "跳转到开始"},
				{keyName: "Ctrl-End", keyDesc: "跳转到结尾"},
				{keyName: "Ctrl-Left", keyDesc: "跳到单词左侧"},
				{keyName: "Ctrl-Right", keyDesc: "跳到单词右侧"},
				{keyName: "Alt-Left|Home", keyDesc: "跳转到行起始"},
				{keyName: "Alt-Right|End", keyDesc: "跳转到行结束"}
			],
			strategyCode: "",
			strategyBenefit: "--",
			benchmarkBenefit: "--",
			alpha: "--",
			beta: "--",
			sharp: "--",
			maxDrawBack: "--",
			halfDecay: "--",
			benefitData: [],

			SaveCode:"",

			//用以存储编缉器新值的临时变量
			code4update:"",
		}
	},
	mounted() {
		const that = this;
		this.$nextTick(function() {
			editorHeight = document.body.scrollHeight - globalMenuHeight - navSubMenuHeight - IDEtoolbarHeight;
			this.IDEHeight = editorHeight + "px";

			this.showLogMsg();
		});
		window.onresize = function() {
			that.IDEHeight = that.getIDEHeight(document.body.scrollHeight) + 'px';
			that.logHeight = that.getLogHeight(window.innerHeight) + 'px';
		}
		document.body.style.overflow = "hidden";
	},
	methods: {
		toggleIDE: function() {
			if(this.IDECols !== 24) {
				this.IDECols = 24;
				$(".el-col-offset-1").css({
					"float":"right",
					"margin-right":"42px"
				})
				this.toggleIDEIcon = "./static/left-expand.png";
				self.shouldHideIDEPane = false;
				this.shouldHideBuildPane = true;
			}else {
				this.IDECols = 12;
				$(".el-col-offset-1").css({
					"float":"left",
					"margin-right":"0px"
				})
				this.toggleIDEIcon = "./static/right-expand.png";
				self.shouldHideIDEPane = false;
				this.shouldHideBuildPane = false;
			}
		},
		showLogMsg: function() {
			$(".LogMsg").addClass("logTabActive").siblings().removeClass("logTabActive");
			this.outputMsg = this.logMsg;
		},
		showErrorMsg: function() {
			$(".ErrorMsg").addClass("logTabActive").siblings().removeClass("logTabActive");
			this.outputMsg = this.errorMsg;
		},
		toggleMsgPane: function() {
			if(this.msgPaneState === "not-expanded") {
				this.shouldHideBuildChartPane = true;
				this.msgPaneState = "expanded";
				this.toggleMsgPaneIcon = "./static/down-expand.png";
				this.logHeight = this.getIDEHeight(window.innerHeight) + 'px';
			}else {
				this.shouldHideBuildChartPane = false;
				this.msgPaneState = "not-expanded";
				this.toggleMsgPaneIcon = "./static/up-expand.png";
				this.logHeight = this.getLogHeight(window.innerHeight) + 'px';
			}
		},
		getIDEHeight: function(_windowHeight) {
			return _windowHeight - globalMenuHeight - navSubMenuHeight - IDEtoolbarHeight;
		},
		getLogHeight: function(_windowHeight) {
			var _editorHeight = _windowHeight - globalMenuHeight - navSubMenuHeight - IDEtoolbarHeight;
			return (_editorHeight - IDEHeight - logToolbarHeight) > 0 ? (_editorHeight - IDEHeight - logToolbarHeight) : 0
		},
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
		startBuild: function() {

			// 庚鑫在这做了改动，将传入后台的数据中加了一个初始资金
			var taskData = {
				signalId: this.$route.params.signalId,
				code: this.strategyCode,
				task_type: this.getStrategyCatVal(this.$route.params.strategyCat),

				initMoney:this.amountMoney,//我的改动在这里

				// user_id: "test_user",
				startTime: this.startDate.getTime()/1000,
				endTime: this.endDate.getTime()/1000,
				// symbol: 'rb1801',
				frequency: (this.frequency)
			};
			// console.log(taskData);
			var self = this;
			console.log(taskData)
			//compile signal
			this.$http.post(Global.getRequestUrl() + "/dev/signal/compile", 
				taskData,
				{
					headers: Global.getRequestHeader()
				}
			).then(function(res) {
				// 李庚鑫做了改动
				res = res.body;
				console.log(res);
				if(res.success) {
					var stateIntervalID = setInterval(function() {
						//Get signal compile running status/result
						self.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
							{
								backtestId: res.data.name
							},
							{
								headers: Global.getRequestHeader()
							}
						).then(	
							function(stateRes) {
								// 李庚鑫在这里做了改动
								var stateRes = stateRes.body
								console.log(stateRes);
								console.log("****************************");
								 if(stateRes&& stateRes.data && stateRes.data.report && stateRes.data.report.final_status) {
								 	clearInterval(stateIntervalID);
								 	if(stateRes.data.report.final_status === "fail") {
								 		console.error("编译运行出错！错误原因：" + stateRes.data.report.reason);
								 	}else if(stateRes.data.report.final_status === "success"){
										 //show data and chart in UI according to data returned from server side
										
										var output = stateRes.data.report.output;
										var L = output.length-2;
										console.log(output);

										 output[L].total_benefit_rate && (self.strategyBenefit = parseFloat(output[L].total_benefit_rate) * 100);
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
										console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
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


						self.$http.post(Global.getRequestUrl() + "/dev/signal/backtest/log",
						{
							"backtestId": res.data.name,
							"start":self.logStart
						},
						{
							headers: Global.getRequestHeader()
						}
						).then(function(resp){
							console.log(resp);
							var resp = resp.body;
							if(resp.success){
								console.log("获取日志成功！")
								if(this.logMsg == ""){
									this.logMsg = resp.data.content;
								}else{
									this.logMsg = this.logMsg +  "," + resp.data.content
								}
								
								this.logStart = resp.data.new_start;
							}else{
								console.log("获取日志失败！失败原因：" + resp.msg);
							}
						},function(error){
							console.error("获取日志请求错误！")
							console.error(error)
						});
							
					}, 1000);


				}else {
					console.error("提交编译运行失败！");
				}
			}, function(error) {
				console.error("提交编译运行请求失败！");
				console.error(error);
			});
			// this.$http({url: strategyBaseURL + submitTaskURL, method: 'POST', data: taskData, {}}).then(function(res) {
			// 	console.log(res);
			// }, function(res) {

			// });
			this.shouldHideBuildToolbar = true;
			this.shouldHideBuildProgress = false;
			//TO DO: get progress from back end and update progress bar
			var self = this;
			var intervalID = setInterval(function() {
				self.progressVal = self.progressVal + 10;
				if(self.progressVal === 100) {
					//TO DO: hide tooltip and show chart
					self.cancelBuild();
					clearInterval(intervalID);
				}
			}, 100);
		},
		cancelBuild: function() {
			this.shouldHideBuildToolbar = false;
			this.shouldHideBuildProgress = true;
			this.progressVal = 0;
		},
		runBackTest: function() {
			//Use sessionStorage to pass params to BackTestDetail page
			this.storeStrategyData();
			//Send message to tell parent component to show back-test-detail tab
			this.$emit("message", "SHOW_BACK_TEST_DETAIL_TAB");
		},
		editorUpdate: function(editorContent) {
			console.log("监测代码变化！");
			var self = this;
			self.isSaveDisabled = false;
			self.saveLabel = "保存";
			this.code4update = editorContent;

			if(self.saveEditorTimer) {
				clearTimeout(self.saveEditorTimer);
			}

			self.saveEditorTimer = setTimeout(function() {
				self.saveEditorContent();
			}, 5000);
		},
		saveEditorHandler: function() {
			var self = this;
			if(self.saveEditorTimer) {
				clearTimeout(self.saveEditorTimer);
			}
			self.saveEditorContent();
		},
		saveEditorContent: function() {
			//save editor content to server
			var self = this;
			self.isSaveDisabled = true;
			self.saveLabel = "保存中";

			this.$http.post(Global.getRequestUrl() + "/dev/signal/update", 
				{
					signalId: this.$route.params.signalId,
					name: this.signalName,
					code: this.code4update,
				},
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				// 李庚鑫做了修改
				resp = resp.body;
				if(resp.success) {
					self.saveLabel = "已保存";
					console.log("信号更改保存成功！");
					this.SaveCode = self.strategyCode;
				}else {
					console.error("信号更改保存失败！");
				}
			}, function(error) {
				console.error("信号更改保存请求失败！");
			});
			
		},
		storeStrategyData: function() {
			var strategySessionData = {
				strategyCode: this.strategyCode,
				// startDate: this.startDate,
				// endDate: this.endDate,
				startTime: this.startDate.getTime(),
				endTime: this.endDate.getTime(),
				amountMoney: this.amountMoney,
				frequency: this.frequency
			}
			window.sessionStorage[strategySessionKey] = JSON.stringify(strategySessionData);
		},
		formatNetValues: function(PhotoData) {
			self.benefitData = PhotoData;
		},
		loadBenefitData: function() {
			Highstock.StockChart({
				chart: {
					renderTo: 'benefitChart'
				},
				navigator: {
					height: 20
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
			this.shouldHideToolTip = true;
			this.shouldHideChart = false;
		}
	},
	watch: {
		activeTabChanged: function() {
			// this.storeStrategyData();
		},
		signalName: function(newName) {
			this.saveEditorHandler();
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
.ESWords{
	width: 290px;
	margin: 0 auto;
	line-height: 1.5em;
}
.edit-strategy-pane {
	background-color: #EDF0F2;
	margin-top: 3px;
		.IDE-toolbar {
			// padding: 15px 20px 15px 50px;
			padding: 15px 0px 15px 20px;
			.keyboard:before {
				content: url("/static/keyboard.png");
			}
			.toolbar-icon {
				// color: #333;
				padding: 5px;
				margin-left: 8px;
				&:hover{
					color: #00aefc;
					.keyboard:before {
						content: url("/static/keyboardOne.png");
					}
				}
			}
			.toolbar-icon-linkone{
				color: #333;
			}
			.toolbar-icon-linkone:hover{
				color: #00aefc;
			}
		}

		.build-toolbar {
			padding: 10px 20px 10px 10px;
		}

		.char-status {
			display: block;
			float: left;
			width: calc(100%/7.5);
			text-align: center;
		}

		.log-tab {
			height: 41px ;
			display: inline-block;
			padding:0 10px;
			text-align: center;
			line-height: 41px;
			cursor: pointer;
		}
		.logTabActive{
			background-color: black;
			color: #fff;
		}

		.log-pane {
			height: 100%;
			min-height: 200px;
			margin: 0 auto;
			background-color: black;
			color: white;
			padding: 10px;
		}

		.hide-pane {
			display: none;
		}

		.quant-date {
			width: 134px;
		}
		.Libutton{
			float: right;
			margin-right: 22px;
		}
		.el-col-offset-1{
			width: 40px;
			// float: right;
			// margin-right: 42px;
		}
		// .el-col .el-col-1 .el-col-offset-1{
		// 	float: right;
		// }
}

</style>