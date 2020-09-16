<template>
	<div class="compile-list">
		<!-- <div class="nav-separator"></div> -->
		<div class="compile-list-content">
			<div class="compile-list-toolbar">
				<span style="font-size: 20px; padding-right: 20px;">共有{{compileNum}}个编译运行</span>
				<span v-if="showEditButtons">
					<el-button @click="compareCodeDiagVisible = true" :disabled="compareButtonDisabled"><i :class="[compareIcon]"></i><span style="padding-left: 5px;">对比</span></el-button>
					<el-button icon="delete" @click="deleteCodeDiagVisible = true">删除</el-button>
				</span>
			</div>
			<div class="compile-list-table">
				<template>
				    <el-table
				      :data="compileListData"
				      style="width: 100%; cursor:pointer;" @selection-change="selectCompileItem" @row-click="runBackTest">
				      <el-table-column
				        prop="id"
				        label="id"
								align="center"
				        type="selection">
				      </el-table-column>
				      <el-table-column
				        prop="signal.name"
								align="center"
				        label="名称"
								width="">
								<!-- 120 -->
								<template slot-scope="scope">
									{{scope.row.signal.name}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="ctime"
				        label="创建时间"
								align="center"
				        width="170">
								<!-- 170 -->
								<template slot-scope="scope">
									{{[scope.row.ctime,0] | FormatDate}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="timeRange"
				        width="250"
								align="center"
				        label="时间范围">
								<!-- 250 -->
								<template slot-scope="scope">
									{{[scope.row.startTime,scope.row.frequency] | FormatDateTen}}~{{[scope.row.endTime,scope.row.frequency] | FormatDateTen}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="frequency"
				        label="频率"
								align="center"
				        width="100">
								<!-- 100 -->
								<template slot-scope="scope">
									{{scope.row.frequency | BackTestFrequency}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="status"
				        label="状态"
								align="center"
				        width="">
								<!-- 70 -->
								<template slot-scope="scope">
									{{scope.row.status | benefitFilter}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="profit"
								align="center"
				        label="收益"
								width="">
								<!-- 70 -->
								<template slot-scope="scope">
									{{scope.row.profit | benefitFilter}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="maxBacktrace"
								align="center"
				        label="最大回撤"
								width="100">
								<!-- 100 -->
								<template slot-scope="scope">
									{{scope.row.maxBacktrace | benefitFilter}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="alpha"
								align="center"
				        label="Alpha"
								width="">
								<!-- 78 -->
								<template slot-scope="scope">
									{{scope.row.alpha | benefitFilter}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="beta"
								align="center"
				        label="Beta"
								width="">
								<!-- 78 -->
								<template slot-scope="scope">
									{{scope.row.beta | benefitFilter}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop="sharp"
								align="center"
				        label="Sharp"
								width="">
								<!-- 78 -->
								<template slot-scope="scope">
									{{scope.row.sharp | benefitFilter}}
								</template>
				      </el-table-column>
				      <el-table-column
				        prop=""
				        label=""
								align="center"
				        width="">
								<!-- 64 -->
				        <template slot-scope="scope">
					        <el-button type="text" size="small" @click="strategyCodeVisible = true">代码</el-button>
					      </template>
				      </el-table-column>
				    </el-table>
				</template>
			</div>
			<div>
				<el-dialog
				  title="策略代码"
				  :visible.sync="strategyCodeVisible"
				  size="small">
					  	<ace-editor :content="strategyCode" :theme="'tomorrow'" height="500px" :lang="'python'" :options="editorOptions">
				  		</ace-editor>
				</el-dialog>

				<el-dialog
				  title="代码对比"
				  :visible.sync="compareCodeDiagVisible"
				  size="large">
				  	<div style="width: 50%; float: left;">
					  	<ace-editor :content="strategyCode" :theme="'tomorrow'" height="500px" :lang="'python'" :options="editorOptions">
				  		</ace-editor>
				  	</div>
				  	<div style="width: 50%; float: left;">
				  		<ace-editor :content="strategyCode" :theme="'tomorrow'" height="500px" :lang="'python'" :options="editorOptions">
				  		</ace-editor>
				  	</div>
				</el-dialog>

				<el-dialog
				  title="提示"
				  :visible.sync="deleteCodeDiagVisible"
				  size="tiny">
					<span>确定要删除？</span>
					<span slot="footer" class="dialog-footer">
					    <el-button @click="deleteCodeDiagVisible = false">取 消</el-button>
					    <el-button type="primary" @click="deleteCompileConfirmed">确 定</el-button>
					</span>
				</el-dialog>
			</div>
		</div>
	</div>
</template>

<script>
import AceEditor from 'vue2-ace'
import 'brace/mode/python'
import 'brace/theme/tomorrow'
import Global from "@/components/layout/Global"
var strategySessionKey = "strategy_data";

export default {
	components: {
		AceEditor
	},
	props: ['activeTabChanged'],
	data() {
		return {
			compileNum: 5,
			strategyCodeVisible: false,
			compareCodeDiagVisible: false,
			deleteCodeDiagVisible: false,
			showEditButtons: false,
			compareButtonDisabled: true,
			selectedItems: [],
			compareIcon: "compare-disabled-icon",
			editorOptions: {fontSize: '16px'},
			strategyCode: "TO DO: put code here",
			//TO DO: get compile list from server side
			compileListData: [
				// {id: "1", name: "小市值策略1", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
				// {id: "2", name: "小市值策略2", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
				// {id: "3", name: "小市值策略3", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
				// {id: "4", name: "小市值策略4", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
				// {id: "5", name: "小市值策略5", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"}
			]
		}
	},
	methods: {
		//将传过来的数据存在sessionStrategy中
		storeStrategyData: function(row) {
			console.log(1);
			var strategySessionData = {
				strategyCode: row.signal.code,
				startTime: row.startTime*1000,
				endTime: row.endTime*1000,
				// amountMoney: row.initAmount,
				amountMoney: "100000",
				frequency: row.frequency
			}
			console.log(strategySessionData);
			window.sessionStorage[strategySessionKey] = JSON.stringify(strategySessionData);
		},


		//跳到运行回测页面
		runBackTest: function(row) {
			this.storeStrategyData(row);
			this.$emit("message", "SHOW_BACK_TEST_DETAIL_TAB");
		},


		selectCompileItem: function(selection, row) {
			if(selection.length > 0) {
				this.showEditButtons = true;
				this.selectedItems = selection
			}else {
				this.showEditButtons = false;
			}
			if(selection.length %2 === 1) {
				this.compareButtonDisabled = true;
				this.compareIcon = "compare-disabled-icon";
			}else {
				this.compareButtonDisabled = false;
				this.compareIcon = "compare-icon";
			}
		},
		deleteCompileConfirmed: function() {
			var self = this;
			self.deleteCodeDiagVisible = false;
			//TO DO: delete selected compile item in both client and server side
			console.log(this.selectedItems);

			self.compileListData = self.compileListData.filter(function(item) {
				return self.selectedItems.indexOf(item) < 0;
			});
		}
	},
	watch: {
		activeTabChanged: function(val) {
			if(val === "compile-list") {
				this.$http.get(Global.getRequestUrl() + "/dev/signal/backtest/list/compile",
					{
						params: {'signalId': this.$route.params.signalId},
						headers: Global.getRequestHeader()
					}
				).then(function(resp) {
					// 李庚鑫在这做了改动
					resp = resp.body;
					console.log(resp);

					// resp = resp.data;
					if(resp.success) {
						this.compileNum = resp.data.totalSize;
						this.compileListData = resp.data.results;
						// {id: "1", name: "小市值策略1", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"}
						console.log("获取信号编译运行列表成功！")
					}else {
						console.error("获取信号编译运行列表失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
					}
				}, function(error) {
					console.error("获取信号编译运行列表请求失败！");
					console.error(error);
				});
			}
		}
	},
	filters: {
		//回测频率过滤器
		BackTestFrequency:function(frequency){
			if(frequency == 'minute') {
				return "每分钟";
			}else if(frequency == 'minute5') {
				return "每5分钟";
			}else if(frequency == 'minute15') {
				return "每15分钟";
			}else if(frequency == 'minute30') {
				return "每半小时";
			}else if(frequency == 'hour') {
				return "每小时";
			}else if(frequency == 'day') {
				return "每天";
			}else{
				return Y+M+D+h+m+s;
			}
		},

		//时间戳为13位的时间过滤器
		FormatDate :function([time,frequency]) {
			// let date = new Date(time * 1000);时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = (date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate()) + ' ';
			let h = (date.getHours() < 10 ? "0"+(date.getHours()) : date.getHours())+ ':';
			let m = (date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes()) + ':';
			let s = (date.getSeconds() < 10 ? "0" + (date.getSeconds()) : date.getSeconds());
			// if(frequency == 'minute') {
			// 	return Y+M+D+h+m+s;
			// }else if(frequency == 'minute5') {
			// 	return Y+M+D+h+m+s;
			// }else if(frequency == 'minute15') {
			// 	return Y+M+D+h+m+s;
			// }else if(frequency == 'minute30') {
			// 	return Y+M+D+h+m+s;
			// }else if(frequency == 'hour') {
			// 	return Y+M+D+h+m+"00";
			// }else if(frequency == 'day') {
			// 	return Y+M+D;
			// }else{
			// 	return Y+M+D+h+m+s;
			// }
			return Y+M+D+h+m+s;
			// return Y+M+D;
		},

		//时间戳为10位的时间过滤器
		FormatDateTen :function([time,frequency]) {
			let date = new Date(time * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = (date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate()) + ' ';
			let h = (date.getHours() < 10 ? "0"+(date.getHours()) : date.getHours())+ ':';
			let m = (date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes()) + ':';
			let s = (date.getSeconds() < 10 ? "0" + (date.getSeconds()) : date.getSeconds());
			// if(frequency == 'minute') {
			// 	return Y+M+D+h+m+s;
			// }else if(frequency == 'minute5') {
			// 	return Y+M+D+h+m+s;
			// }else if(frequency == 'minute15') {
			// 	return Y+M+D+h+m+s;
			// }else if(frequency == 'minute30') {
			// 	return Y+M+D+h+m+s;
			// }else if(frequency == 'hour') {
			// 	return Y+M+D+h+m+"00";
			// }else if(frequency == 'day') {
			// 	return Y+M+D;
			// }
			// return Y+M+D+h+m+s;
			return Y+M+D;
		},
		

		//如果字段不存在或者没有数据
		benefitFilter: function(val) {
			if(val === null || val === undefined) {
				return "--";
			}
			return parseFloat(val*100).toFixed(2) + "%";
		},
	}
}
</script>

<style lang="scss">
	.compile-list {
		.nav-separator {
			height: 10px;
			width: 100%;
			margin: 0 auto;
			background-color: #666666;
		}
		.compile-list-content {
			width: 91%;
			margin: 34px auto;
			font-size: 16px;

			.compile-list-toolbar {
				height: 38px;
				vertical-align: middle;
				line-height: 38px;

				.compare-icon:before {
					content: url(/static/AICommunity/compare.png);
				}
				.compare-disabled-icon:before {
					content: url(/static/AICommunity/compare-disabled.png);
				}
			}

			.compile-list-table {
				padding-top: 24px;
			}
		}
	}
</style>