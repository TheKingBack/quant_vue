<template>
	<div>
		<nav-bar :navMenuItems="signalDevelopMenu"></nav-bar>

		<div class="signal-develop">
			<div class="banner">
				<div>
					<div style="padding-top: 34px;"><img class="user-image" src="/static/SignalDevelop/user-photo.jpg"></div>
					<div class="user-name">不二咚</div>
					<div class="user-signature">行情总在绝望中产生，猜疑中成长，欢乐中死亡。</div>
				</div>
				<div class="banner-tabs">
					<span class="banner-tab banner-selected" id="my-signal-tab">我的信号</span>
					<span class="banner-tab" style="width: 180px; margin-left: -34px;">开发优化模型</span>
					<span class="banner-tab" style="margin-left: -34px;" @click="goToSignalCollector">信号征集</span>
				</div>
			</div>
			<div class="signal-table">
				<div>
					<el-dropdown trigger="click" @command="createNewSignal">
				      <el-button type="primary">
					    + 新建信号
					  </el-button>
				      <el-dropdown-menu slot="dropdown" class="signalCategory">
				      	<el-dropdown-item v-for="(cat,index) in signalCategories" :key="index" :command="cat.value">
				      		<!-- <router-link :to="{name: 'MyStrategy', params: {strategyCat: cat.value}}">{{cat.label}}</router-link> -->
				      		{{cat.label}}
				      	</el-dropdown-item>
				      </el-dropdown-menu>
				    </el-dropdown>
				    <el-button type="warning" style="margin-left: 20px;" :disabled="optimizeButtonDisabled" @click="openCombineSignalsDiag">优化信号</el-button>
				    <el-button style="margin-left: 20px;" v-if="showDelete" @click="deleteSignalDiag = true">删除</el-button>

				    <el-dialog
					  title="优化信号"
					  :visible.sync="combineSignalsDiag"
					  size="tiny">
					  <div class="combine-signal-dialog">
					  	<div class="combine-signal-item">
					  		<span class="item-label">组合信号名称</span>
					  		<el-input style="width:120px;" v-model="combineName" placeholder="请输入新的信号名称"></el-input>
					  	</div>
					  	<template v-for="aPageSignal in selectedSignal">
						  	<div class="combine-signal-item"  v-for="sg in aPageSignal">
						  		<div>
						  			<span class="item-label">{{sg.name}}</span>
						  			<el-select placeholder="请选择" v-model="combineBackTestVals[sg.id]">
									    <el-option
									      v-for="item in sg.backTestList"
									      :key="item.id"
									      :label="item.id"
									      :value="item.id"
									      >
									    </el-option>
									  </el-select>
						  		</div>
						  	</div>
					  	</template>
					  	<div class="combine-signal-item">
					  		<span class="item-label">开始时间</span>
					  		<el-date-picker
						      align="right"
						      type="date"
						      placeholder="选择日期"
						      v-model="startTime">
						    </el-date-picker>
					  	</div>
					  	<div class="combine-signal-item">
					  		<span class="item-label">结束时间</span>
					  		<el-date-picker
						      align="right"
						      type="date"
						      placeholder="选择日期"
						      v-model="endTime">
						    </el-date-picker>
					  	</div>
					  	<div class="combine-signal-item">
					  		<span class="item-label">频率</span>
					  		<el-select v-model="frequency" placeholder="请选择" style="width: 120px;">
									<el-option v-for="fre in freOptions" :key="fre.value" :label="fre.label" :value="fre.value"></el-option>
						    </el-select>
					  	</div>
					  	<div class="combine-signal-item">
					  		<span class="item-label">优化模型</span>
					  		<el-select v-model="model" placeholder="请选择" style="width: 120px;">
									<el-option v-for="mod in models" :key="mod.value" :label="mod.label" :value="mod.value"></el-option>
						    </el-select>
					  	</div>
					  </div>
					  <span slot="footer" class="dialog-footer">
					    <el-button @click="combineSignalsDiag = false">取 消</el-button>
					    <el-button type="primary" @click="combineSignalConfirm">确 定</el-button>
					  </span>
					</el-dialog>

					<el-dialog
					  title="删除信号"
					  :visible.sync="deleteSignalDiag"
					  size="tiny">
					  <span>确定要删除信号？</span>
					  <span slot="footer" class="dialog-footer">
					    <el-button @click="deleteSignalDiag = false">取 消</el-button>
					    <el-button type="primary" @click="deleteSignalConfirm">删 除</el-button>
					  </span>
					</el-dialog>
				</div>
				<template v-if="signalListData.length > 0">
				<div>
					<div style="color: #666666; padding: 24px 0px 16px;">全部文件</div>
					<div>
						<template>
						    <el-table
						      ref="signalTable"
						      :data="signalListData"
						      style="width: 100%" @selection-change="selectSignalItem">
						      <el-table-column
						        prop="id"
						        label="id"
								  align="center"
						        type="selection">
						      </el-table-column>
						      <el-table-column
						        	prop="name"
								  	align="left"
						        label="名称"
								  >
						        <template slot-scope="scope">
						        	<a style="cursor: pointer;" @click="goToSignalStrategy(scope.row.type, scope.row.id,1)">{{scope.row.name}}</a>
						        </template>
						      </el-table-column>
						      <el-table-column
						        prop="type"
						        label="分类"
								  align="center"
						        >
								  <!-- width="175" -->
						        <template slot-scope="scope">
						        	{{scope.row.type | convSignalType}}
						        </template>
						      </el-table-column>
						      <el-table-column
						        prop="utime"
								  align="center"
						        label="最后修改时间">
								  <!-- width="204" -->
								  <template slot-scope="scope">{{scope.row.utime | FormatDate}}</template>
						      </el-table-column>
						      <!-- This should be removed according to Gao Yun -->
						      <!-- <el-table-column
						        prop="running_days"
						        label="历史编译运行"
						        width="204">
						      </el-table-column> -->
						      <el-table-column
						        prop="backtestTimes"
						        label="历史回测"
								  align="center"
						        width="180">
						        <template slot-scope="scope">
						        	<template v-if="parseInt(scope.row.backtestTimes) > 0">
						        		<!-- <router-link to="/AICommunity/MyStrategy/stock">{{scope.row.backtestTimes}}</router-link> -->
										<div class="huicecishu" @click="goToSignalStrategy(scope.row.type, scope.row.id,4)">{{scope.row.backtestTimes}}</div>
						        	</template>
						        	<template v-else>
						        		<span>{{scope.row.backtestTimes}}</span>
						        	</template>
							      </template>
						      </el-table-column>
						      <!-- <el-table-column
						        prop=""
						        label="上架策略">
						        	<template slot-scope="scope">
								        <router-link to="">上架</router-link>
								    </template>
						      </el-table-column> -->
						    </el-table>
						</template>
					</div>
				</div>

				<div style="padding-top: 22px; height: 20px;">
					<div style="float: right;">
						<el-pagination
						  small
						  layout="prev, pager, next"
						  :current-page="currentPage"
						  :total="signalListTotal"
						  @current-change="handleCurrentPageChange">
						</el-pagination>
					</div>
				</div>
				</template>
				<div v-else class="no-signals">
					<img src="/static/SignalDevelop/no-signal.png">
					<p class="no-signals-one">您还没有信号，点击“新建信号”</p>
					<p class="no-signals-two">新建属于自己的信号吧！</p>
				</div>
			</div>
			<div class="signal-city">
				<div class="signal-city-header">
					<span style="display: block; font-size: 30px; color: #333333;">我的信号商城</span>
					<span style="display: block; text-align: center;"><span class="hr-line"></span></span>
				</div>
				<div class="signal-city-list">
					<div style="color: #666666; padding: 43px 0px 26px;" @click="switchSignalCityNav">
						<span id="mySignals" class="signal-city-nav" :class="{'signal-city-nav-selected': selectedTabInNav === 'mySignals'}">我提交的</span>
						<span id="purchasedSignals" class="signal-city-nav" :class="{'signal-city-nav-selected': selectedTabInNav === 'purchasedSignals'}">我购买的</span>
						<span id="allSignals" class="signal-city-nav" :class="{'signal-city-nav-selected': selectedTabInNav === 'allSignals'}">信号库</span>
						<!-- <span id="mySimulation" class="signal-city-nav" :class="{'signal-city-nav-selected': selectedTabInNav === 'mySimulation'}">我的模拟</span> -->
						<router-link id="mySimulation" target="_blank" to="/AICommunity/MySimulation" class="signal-city-nav" :class="{'signal-city-nav-selected': selectedTabInNav === 'mySimulation'}">我的模拟</router-link>
					</div>
					<div style="color: #666666; padding-bottom: 0px;">
						<!--TO DO: update number here according to fetched data-->
						<span>信号实盘收益展示（2）</span>
						<span style="padding-left: 26px;">信号进入模拟交易系统统计（1）</span>
					</div>
					<template v-if="signals.length > 0">
					<div class="all-signal-wrapper">
						<div class="signal-wrapper"  v-for="sg in signals" @click="gotoSignalDetail(sg.id)">
							<div class="signal-header">
								<span class="signal-name">{{sg.signal.name}}</span>
								<span class="signal-cat" :class="{'signal-cat-mock': sg.type === 'mock'}">{{sg.type==="mock"? "模拟交易": "信号实盘"}}</span>
							</div>
							<div class="signal-chart">
								<signal-chart v-if="sg.pChartData" :chartData="sg.pChartData" style="height: 188px;"></signal-chart>
							</div>
							<div class="signal-profit-wrapper">
								<div class="signal-profit">
									<div class="signal-profit-cat">年化收益</div>
									<div class="signal-profit-year">{{sg.totalBenefitPerYear | benefitFilter}}</div>
								</div>
								<div class="signal-profit-separator"></div>
								<div class="signal-profit">
									<div class="signal-profit-cat">最大回撤</div>
									<div class="signal-profit-val">{{sg.maxBacktrace | benefitFilter}}</div>
								</div>
								<div class="signal-profit-separator"></div>
								<div class="signal-profit">
									<div class="signal-profit-cat">初始资金</div>
									<div class="signal-profit-val">{{sg.initAmount | moneyFilter}}</div>
								</div>
							</div>
							<div><hr style="border-color: #E6E6E6; margin: 0px;"/></div>
							<div style="height: 68px; font-size: 16px; padding: 0px 20px;">
								<span style="display: inline-block; color: #666666; margin-top: 23px;">已有<span style="color: #F54E2D;">{{sg.bought}}</span>人购买</span>
								<span class="signal-put-down" @click="putDownSignal(sg.id)">下架商品</span>
							</div>
						</div>
					</div>
					</template>
					<div v-else class="no-signals">
						<img src="/static/SignalDevelop/no-signal-in-city.png">
						<p class="no-signals-one">您还没有发布信号，赶紧去上架信号吧！</p>
						<!-- TO DO: go to page to putaway signal-->
						<span class="signal-put-on" @click="putOnSignal">上架信号</span>
					</div>
				</div>
			</div>
			<div class="signal-custom">
				<div style="font-size: 30px;">参与客户定制，赚取自己的小金库</div>
				<div class="custom-button"><router-link to="/Shelfsignal/Customsignaler">立即参与</router-link></div>
			</div>
		</div>

		<footer-bar></footer-bar>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"
import SignalChart from "@/components/layout/SignalChart"
import Global from "@/components/layout/Global"

var seriesOptions = [];

export default {
	components: {
		NavBar,
		FooterBar,
		SignalChart
	},
	mounted: function() {
		this.$nextTick(function() {

			//这里做了改动
			this.loadSignalListData(1);
			// this.loadSignalListData(0);

			this.loadMySignalCity(1);
		});
	},
	data() {
		return {
			signalDevelopMenu: Global.getPageMenu("SignalDevelop"),

			// 李庚鑫在这里改了一下期货和股票的位置
			signalCategories: [
				{value: "futures", label: "期货"},
				{value: "stock", label: "股票"},
				{value: "forex", label: "外汇"},
				{value: "bond", label: "债券"},
				{value: "options", label: "期权"}
			],
			signalListData: [],
			signalListTotal: 0,
			combineName: "",
			combineBackTestVals: {},
			startTime: "",
			endTime: "",

			// 李庚鑫新加的
			CombinationType: "futures",


			frequency: 'day',

			freOptions: [
				{value: 'minute', label: '每分钟'},
				{value: 'minute5', label: '每5分钟'},
				{value: 'minute15', label: '每15分钟'},
				{value: 'minute30', label: '每半小时'},
				{value: 'hour', label: '每小时'},
				{value: 'day', label: '每天'}
			],
			model: 'mode1',
			models: [
				{value: 'model1', label: "模型一"},
				{value: 'model2', label: "模型二"},
				{value: 'model3', label: "模型三"},
				{value: 'model4', label: "模型四"}
			],
			optimizeButtonDisabled: true,
			showDelete: false,
			combineSignalsDiag: false,
			deleteSignalDiag: false,
			selectedSignal: [],
			currentPage: 1,
			selectedTabInNav: "mySignals",
			signals: [], //Signals in signal city

			//李庚鑫新写的
			pageSize:10,

		};
	},
	methods: {

		//验证是否登录
		IsLogin(){
			var LoginIsYON = Global.isLogedin();
			if(LoginIsYON){
				
			}else{
				console.log("用户未登录！");
				THIS.GoLoginIt();
			}
		},

		//去登录
		GoLoginIt(){
			var C = window.location.hash;
			var currentLocation = C.substring(2);
			console.log(currentLocation);
			this.$router.push("/Login/" + currentLocation);
		},

		signalStringToType: function(signalStr) {
			var type = 1;
			// 李庚鑫在这里做了一点改变，变换了一下顺序
			switch(signalStr) {
				case "futures":
					type = 1;
					break;
				case "stock":
					type = 2;
					break;
				case "forex":
					type = 3;
					break;
				case "bond":
					type = 4;
					break;	
				case "options":
					type = 5;
					break;
				default:
					break;
			}
			return type;
		},
		signalTypeToString: function(type) {
			// 李庚鑫在这里做了一点改变，变换了一下顺序
			var signalStr = "futures";
			switch(type) {
				case 1:
					signalStr = "futures";
					break;
				case 2:
					signalStr = "stock";
					break;
				case 3:
					signalStr = "forex";
					break;
				case 4:
					signalStr = "bond";
					break;	
				case 5:
					signalStr = "options";
					break;
				default:
					break;
			}
			return signalStr;
		},
		goToSignalCollector: function() {
			this.$router.push("/Shelfsignal/Customsignaler");
		},

		//创建新信号
		createNewSignal: function(command) {
			// console.log(this.signalStringToType(command));
			//command is one of the values in signalCategories
			this.$http.post(Global.getRequestUrl() + "/dev/signal/add", 
				{
					"type": this.signalStringToType(command)
				},
				{
					headers: Global.getRequestHeader()
				},
				{emulateJSON: true}
			).then(function(resp) {
				// 李庚鑫在这做了改动
				resp = resp.body;
				console.log(resp);
				console.log("111111111111111111111111111111111111111111");
				if(resp.success) {
					var signalId = resp.data;
					this.$router.push("/AICommunity/myStrategy/" + command + "/" + signalId + "/1");
				}else {
					console.error("新建信号失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
			}, function(error) {
				console.error("新建信号请求失败！");
				console.error(error);
			});
		},

		//获取开发者信号列表
		loadSignalListData: function(pageNum) {
			this.$http.get(Global.getRequestUrl() + "/dev/signal/list",
				{
					// 李庚鑫又改了这里
					params: {
						'page': pageNum,
						"pageSize":this.pageSize
						},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				var resp = resp.data;
				console.log(resp);
				console.log("2222222222222222222222222222222222222222");
				if(resp.success) {

					// 李庚鑫又改了这里
					this.signalListTotal = resp.data.totalSize;
					console.log("获取开发者信号列表成功，结果为：");
					this.signalListData = resp.data.results;
					console.log(this.signalListData);
					console.log("333333333333333333333333333333333333333")
					//返回的信号类型格式应为：
					//{id: 1, name: "小市值策略1", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1}
					//To remove
					// this.signalListData = [
					// 	{id: 1, name: "小市值策略1", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1},
					// 	{id: 2, name: "小市值策略2", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1}];				
				}else {
					console.log(resp)
					resp = resp.code;
					var that = this;
					Global.IsToken(resp,that);
					console.error("获取开发者信号列表失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
			}, function(error) {
				console.error("获取开发者信号列表请求失败！");
				console.error(error);
			});
		},

		//选择一行出现删除按钮，选择大于一行出现删除按钮和优化信号按钮
		selectSignalItem: function(selection, row) {
			console.log("***table selection changed");
			console.log(selection);
			this.selectedSignal[this.currentPage] = selection;
			var _selectedSignalSum = 0;
			for(var i in this.selectedSignal) {
				_selectedSignalSum = _selectedSignalSum + this.selectedSignal[i].length;
			}
			if(_selectedSignalSum > 0) {
				this.showDelete = true;
			}else {
				this.showDelete = false;
			}

			if(_selectedSignalSum > 1) {
				this.optimizeButtonDisabled = false;
			}else {
				this.optimizeButtonDisabled = true;
			}
		},

		//点击跳转到编辑策略，回测详情，编译运行列表，回测列表等任意界面
		goToSignalStrategy: function(type, id,where) {
			var TCode = " ";
			this.$router.push("/AICommunity/myStrategy/" + this.signalTypeToString(type) + "/" + id + "/" + where);
		},

		//点击优化信号按钮打开组合信号模态框
		openCombineSignalsDiag: function() {
			var self = this;
			var count = 0;
			var selectedSignalsNum = 0;
			self.selectedBackTestId = [];
			for(var page in self.selectedSignal) {
				console.log(self.selectedSignal);
				for(var i=0; i<self.selectedSignal[page].length; i++) {
					selectedSignalsNum = selectedSignalsNum + 1;

					(function(signal) {
						self.$http.get(Global.getRequestUrl() + "/dev/signal/backtest/list",
							{
								params: {"signalId": signal.id},
								headers: Global.getRequestHeader()
							}
						).then(function(resp) {
							//李庚鑫改了这里
							resp = resp.body;
							console.log(resp);
							console.log("4444444444444444444444444444444444444444444");
							if(resp.success) {
								signal.backTestList = resp.data.results;
								self.combineBackTestVals[signal.id] = signal.backTestList[0].id;

								count++;
								if(count === selectedSignalsNum) {
									self.combineSignalsDiag = true;
								}
							}else {
								console.error("获取信号" + signal.id + "的回测列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
							}
						}, function(error) {
							console.error("获取信号" + signal.id + "的回测列表失败！");
							console.error(error);
							signal.backTestList = [];
							count++;

							//To remove
							// if(signal.id === 1) {
							// 	signal.backTestList = [{id: 11}, {id: 12}];
							// }else {
							// 	signal.backTestList = [{id: 21}, {id: 22}];
							// }
							// this.combineBackTestVals[signal.id] = signal.backTestList[0].id;
							// console.log("111");
							// console.log(this.combineBackTestVals);

							if(count === selectedSignalsNum) {
								self.combineSignalsDiag = true;
							}
						});
					})(self.selectedSignal[page][i]);
				}
			}
		},

		//
		combineSignalConfirm: function() {
			var selectedBackTestIds = [];
			for(var prop in this.combineBackTestVals) {
				selectedBackTestIds.push(this.combineBackTestVals[prop]);
			}
			this.$http.post(Global.getRequestUrl() + "/dev/signal/combine", 
				{
					"backtestId": this.selectedBackTestIds,
					"name": this.combineName
				},
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				resp = resp.body;
				console.log(resp);
				console.log("555555555555555555555555555555555555555555555555555");
				if(resp.success) {
					//TO DO: 组合信号成功后的操作是？？？
					console.log("优化信号成功！");
					var combineSignalId = resp.data.id;
					this.router.push("/AICommunity/myStrategy/combine/" + combineSignalId + "/1");
				}else {
					console.error("优化信号失败" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
				
			}, function(error) {
				console.error("优化信号失败！");
				console.error(error);
			});
			this.combineSignalsDiag = false;
		},
		deleteSignalConfirm: function() { 
			// var signalsToDelete = [];
			// for(var i in this.selectedSignal) {
			// 	var tmpPageSelectedSignal = this.selectedSignal[i];
			// 	for(var j in tmpPageSelectedSignal) {
			// 		signalsToDelete.push(tmpPageSelectedSignal[j].id);
			// 	}
			// }
			var signalsToDelete = "";
			for(var i in this.selectedSignal) {
				var tmpPageSelectedSignal = this.selectedSignal[i];
				for(var j in tmpPageSelectedSignal) {
					if(j==0){
						signalsToDelete += tmpPageSelectedSignal[j].id;
					}else{
						signalsToDelete += "," + tmpPageSelectedSignal[j].id;
					}
				}
			}

			// var signalsToDelete = [];
			// var signalsToDeleteID = {};
			// for(var i in this.selectedSignal) {
			// 	var tmpPageSelectedSignal = this.selectedSignal[i];
			// 	for(var j in tmpPageSelectedSignal) {
			// 		signalsToDeleteID.id = tmpPageSelectedSignal
			// 		signalsToDelete.push(signalsToDeleteID);
			// 	}
			// }
			// [{id:"e152d40c-0315-45ea-b6b6-5c0a4786ca44"},
			// 	{id:"3f76983b-29b0-49e3-9408-16664caff68e"},
			// 	{id:"e152d40c-0315-45ea-b6b6-5c0a4786ca44"}
			// ]
			console.log("需要删除的信号有");
			console.log(signalsToDelete);
			//send request to back end to delete signals
			this.$http.post(Global.getRequestUrl() + "/dev/signal/remove",
				{
					signalId: signalsToDelete
				},
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				resp = resp.data;
				console.log(resp);
				console.log("666666666666666666666666666666666666666666");
				if(resp.success) {
					//update table list
					this.currentPage = 1;

					// 李庚鑫又改了这里
					this.loadSignalListData(this.currentPage);
				}else {
					console.error("删除信号失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
				
			}, function(error) {
				console.error("删除信号出错！");
				console.error(error);
			});
			this.deleteSignalDiag = false;
		},
		handleCurrentPageChange: function(curPage) {
			var self = this;

			self.currentPage = curPage;
			//Get current page data from back end

			// 李庚鑫又改了这里
			self.loadSignalListData(self.currentPage);

			//Set prev selected rows selected
			if(self.selectedSignal[curPage] && self.selectedSignal[curPage].length > 0) {
				var curPageSelection = self.selectedSignal[curPage];
				for(var i=0; i<self.signalListData.length; i++) {
					for(var j=0; j<curPageSelection.length; j++) {
						if(curPageSelection[j].id === self.signalListData[i].id) {
							(function(i) {
								setTimeout(function() {self.$refs.signalTable.toggleRowSelection(self.signalListData[i], true)}, 0);
							})(i);
						}
					}
				}
			}
			
		},
		switchSignalCityNav: function(event) {
			if(!event.target.id) {
				return;
			}
			this.selectedTabInNav = event.target.id;
			switch(event.target.id) {
				case "mySignals":
				    //get my signals
				    this.loadMySignalCity(1);
					break;
				case "purchasedSignals":
					//get purchases signals;
					this.loadMySignalCity(2);
					break;
				case "allSignals":
					//get all signals
					this.loadMySignalCity(3);
					break;
				case "mySimulation":
					//get mySimulation
					// this.loadMySignalCity(4);
					// this.$router.push("/AICommunity/MySimulation/MySimulation");
					// window.location.href = "/AICommunity/MySimulation/MySimulation";
					break;
				default: 
					break;
			}
		},
		gotoSignalDetail: function(signalId) {
			this.$router.push("/Shelfsignal/Buyersignaler/" + signalId);
		},
		putDownSignal: function(signalId) {
			//post signal to back end to put down signal
			console.log("下架的信号的回测id是" + signalId);
			this.$http.post(Global.getRequestUrl() + "/dev/signal/backtest/down", 
				{
					"signalId": signalId
				},
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				resp = resp.body;
				console.log(resp);
				console.log("777777777777777777777777777777777777777777");
				if(resp.succss) {
					//刷新信号商城列表
					this.loadMySignalCity(1);
				}else {
					console.error("下架信号失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
			}, function(error) {
				console.error("下架信号请求失败");
				console.error(error);
			});
		},
		putOnSignal: function() {
			this.$router.push("/Shelfsignal/Shelfsignaler");
		},
		loadMySignalCity: function(type) {
			var self = this;
			//load data from sercer side
			//type: 1-我提交的，2-我购买的， 3-信号库

			//李庚鑫该了这里
			this.$http.get(Global.getRequestUrl() + "/dev/signal/shop/backtest",
				{
					params: {"type": type},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				resp = resp.body;
				console.log(resp);
				console.log("999999999999999999999999999999999999999999999999");
				//李庚鑫该了这里
				if(resp.success) {
					self.signals = resp.data.results;
					console.log("获取type为" + type + "的'我的信号商城'信号成功。结果为:");
					for(var i=0 ; i< self.signals.length; i++) {
						var signal = self.signals[i];


						// 李庚鑫又改了一下这里
						// this.$http.get(Global.getRequestUrl() + "/index/signals/backtests/benefits/",
						// 	{
						// 		params: {"id": signal.id},
						// 		headers: Global.getRequestHeader()
						// 	}

						this.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
							{
								backtestId: signal.id,

							},
							{
								headers: Global.getRequestHeader()
							}
						).then(function(resp) {
							// 李庚鑫在这做了改动
							resp = resp.body;
							if(resp.success) {
								console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
								console.log(resp.data);
							}else {
								console.log("获取id为" + signal.id + "的信号的收益曲线失败" + "error code: " + resp.code + ", reason: "+ resp.msg);
							}
						}, function(error) {
							console.error("获取信号收益曲线失败！id为" + signal.id);
							console.error(error);
						});
					}
				}else {
					console.error("获取type为" + type + "的'我的信号商城'信号失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
			}, function(error) {
				console.error("获取我的信号商城失败！type为" + type);
				console.error(error);
			});
		}
	},
	filters: {
		//时间过滤器
		FormatDate :function(time) {
		// let date = new Date(time * 1000);时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = (date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate()) + ' ';
			let h = (date.getHours() < 10 ? "0"+(date.getHours()) : date.getHours())+ ':';
			let m = (date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes()) + ':';
			let s = (date.getSeconds() < 10 ? "0" + (date.getSeconds()) : date.getSeconds());
			return Y+M+D+h+m+s;
			// return Y+M+D;
		},

		//类型过滤器
		convSignalType: function(type) {
			if(type === -1) {
				return "未设定";
			}else if(type === 1) {
				return "期货";
			}else if(type === 2) {
				return "股票";
			}else if(type === 3) {
				return "外汇";
			}else if(type === 4) {
				return "债券";
			}else if(type === 5) {
				return "期权";
			}else if(type === 6) {
				return "组合策略";
			}else {
				console.error("不是合法的信号类型！");
				return "";
			}
		},
		benefitFilter: function(val) {
			if(val === null || val === undefined) {
				return "--";
			}
			return parseFloat(val*100).toFixed(2) + "%";
		},
		moneyFilter: function(amount) {
			if(amount == null || amount === undefined) {
				return "--";
			}
			return "￥" + parseInt(amount);
		}
	}
}
</script>

<style lang="scss">
	// 回测次数样式
	.huicecishu{
		cursor: pointer;
		color: #00aefc;
	}

	.signal-develop {
		a {
			color: white;
			text-decoration: none;
			display: inline-block;
			width: 100%;
			height: 100%;

			&:hover {

			}
		}

		.banner {
			background: url(/static/SignalDevelop/signal-develop-banner.jpg) no-repeat center center;
			background-size: cover;
			color: white;
			text-align: center;
			height: 400px;
			overflow: hidden;
			.user-image {
				height: 142px;
				width: 142px;
				border: 6px solid rgba(255, 255, 255, 0.2);
				border-radius: 71px;
			}

			.user-name {
				padding-top: 30px;
				font-size: 20px
			}

			.user-signature {
				padding-top: 14px;
				font-size: 14px;
				color: #8F9399;
			}

			.banner-tabs {
				padding-top: 44px;
				padding-bottom: 60px;
				font-size: 18px; 
				height: 34px;
				line-height: 34px;

				.banner-tab {
					display: inline-block;
					border-radius: 17px;
					width: 132px;
					background-color: #FFFFFF;
					color: #000000;
					position: relative;

					&:hover {
						cursor: pointer;
					}
				}

				.banner-selected {
					background-color: #00aefc;
					z-index: 999;
					color: white;
				}
			}
		}

		.number{
			margin-left: 10px;
		}
		.btn-next{
			margin-left: 10px;
		}

		.no-signals {
			height: 300px;
			vertical-align: middle;
			text-align: center;
			padding-top: 100px;
			font-size: 16px;
			color: #b4b4b4;
			.no-signals-one{
				margin-top: 8px;
				line-height: 20px;
			}
			.no-signals-two{
				margin-top: 8px;
				line-height: 20px;
			}
		}

		.signal-table {
			padding: 20px 0px 50px;
			width: 1200px;
			margin: 0 auto;
			font-size: 14px;

			a {
				color: #00aefc;
				text-decoration: none;
			}

			.combine-signal-dialog {
				.combine-signal-item {
			    	margin: 10px;

			    	.item-label {
			    		display: inline-block;
			    		width: 100px;
			    	}
				}
			}
		}

		.signal-city {
			background-color: #E6E6E6;
			width: 100%;
			margin: 0 auto;
			padding: 50px 0px 70px;



			.signal-city-header {
				text-align: center;

				.hr-line {
					display: inline-block;
					border-top: 2px solid #C8C8C8;
					width: 50px;
				}
			}

			.signal-city-list {
				width: 1230px;
				margin: 0 auto;

				.signal-city-nav {
					width: 100px;
					height: 35px;
					display: inline-block;
					text-align: center;
					line-height: 35px;
					background-color: #FFFFFF;
					margin-right: 20px;
					color: #333;
					cursor: pointer;
					border-radius: 4px;
				}

				.signal-city-nav-selected {
					background-color: #00aefc;
					color: #FFFFFF;
					cursor: pointer;
				}

				.all-signal-wrapper {
					width: 100%;
					margin: 0 auto;

						.signal-wrapper {
							display: inline-block;
							background-color: white;
							width: 380px;
							height: 442px;
							margin-right: 30px;
							margin-bottom: 30px;

							.signal-header {
								height: 80px;
								vertical-align: middle;
								padding: 0px 26px 0px 20px;

								.signal-name {
									padding-right: 46px;
									font-size: 18px;
									color: #333333;
									margin-top: 28px;
									display: inline-block;
								}

								.signal-cat {
									display: inline-block;
									font-size: 14px;
									float: right;
									width: 86px;
									height: 26px;
									color: #00aefc;
									border: 1px solid #00aefc;
									background-color: rgba(0, 174, 252, 0.1);
									border-radius: 13px;
									text-align: center;
									vertical-align: middle;
									line-height: 26px;
									margin-top: 28px;
								}

								.signal-cat-mock {
									color: #F5B356;
									border: 1px solid #F5B356;
									background-color: rgba(245, 179, 86, 0.1);
								}
							}

							.signal-chart {
								width: 100%;
								height: 208px;

								.signal-chart-legend {
									height: 20px;
									margin: 0px 10px; 
									font-size: 10px;

									.benefit-legend {
										display: inline-block;
										width: 10px;
										height: 10px;
									}
								}
							}


							.signal-profit-wrapper {
								height: 84px;
								margin: 0px 5px;

								.signal-profit {
									display: inline-block;
									width: 110px;
									text-align: center;
									padding-top: 17px;

									.signal-profit-cat {
										font-size: 14px;
										color: #666666;
										padding-bottom: 5px;
									}

									.signal-profit-val {
										font-size: 20px;
										color: #333333;
									}

									.signal-profit-year {
										font-size: 20px;
										color: #F54E2D;
									}
								}

								.signal-profit-separator {
									display: inline-block;
									width: 1px;
									background-color: #DCDCDC;
									height: 33px;
								}

							}

							.signal-put-down {
								color: #FFFFFF;
								background-color: #00aefc;
								display: inline-block;
								height: 34px;
								width: 105px;
								border-radius: 17px;
								text-align: center;
								vertical-align: middle;
								line-height: 34px;
								float: right;
								margin-top: 17px;
								cursor: pointer;
							}
						}
				}

				.signal-put-on {
					margin-top: 16px;
					display: inline-block;
					cursor: pointer;
					width: 120px;
					height: 35px;
					line-height: 35px;
					color: white;
					background-color: #00aefc;
					text-align: center;
					border-radius: 4px;
				}
			}
		}

		.signal-custom {
			background: url(/static/SignalDevelop/signal-custom.png) no-repeat center center;
			background-size: cover;
			color: white;
			text-align: center;
			padding: 82px 0px 84px;

			.custom-button {
				background-color: #00aefc;
				display: inline-block;
				height: 46px;
				width: 174px;
				border-radius: 23px;
				text-align: center;
				vertical-align: middle;
				line-height: 46px;
				cursor: pointer;
				margin-top: 45px;
				font-size: 18px;
			}
		}
	}
	
	.signalCategory {
		a {
			color: #000000;
			text-decoration: none;
			display: inline-block;
			width: 100%;
		}
	}
</style>