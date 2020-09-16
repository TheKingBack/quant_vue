<template>
	<div class="backtest-list">
		<nav-bar :navMenuItems="SignalEditMenu"></nav-bar>
		<signal-dev-tabs :activeTab="'back-test-list'"></signal-dev-tabs>
		<div class="backtest-list-content">
			<div class="backtest-list-toolbar">
				<span style="font-size: 20px; padding-right: 20px;">共有{{backtestNum}}个回测</span>
				<span v-if="showEditButtons">
					<el-button @click="compareCodeDiagVisible = true" :disabled="compareButtonDisabled"><i :class="[compareIcon]"></i><span style="padding-left: 5px;">对比</span></el-button>
					<el-button icon="delete" @click="deleteCodeDiagVisible = true">删除</el-button>
				</span>
			</div>
			<div class="backtest-list-table">
				<template>
				    <el-table
				      :data="backtestListData"
				      style="width: 100%" @selection-change="selectBacktestItem">
				      <el-table-column
				        prop="id"
				        label="id"
				        type="selection">
				      </el-table-column>
				      <el-table-column
				        prop="name"
				        label="名称">
				        <template scope="scope">
						    <a style="cursor: pointer; color: #00AEFC;" @click="gotoBackTestDetail(scope.row.id)">{{scope.row.signal.name}}</a>
						</template>
				      </el-table-column>
				      <el-table-column
				        prop="createDate"
				        label="创建时间"
				        width="200">
				      </el-table-column>
				      <el-table-column
				        prop="timeRange"
				        width="250"
				        label="时间范围">
				      </el-table-column>
				      <el-table-column
				        prop="frequency"
				        label="频率">
				      </el-table-column>
				      <el-table-column
				        prop="totalBenefitPerYear"
				        label="收益">
				      </el-table-column>
				      <el-table-column
				        prop="maxBacktrace"
				        label="最大回撤">
				      </el-table-column>
				      <el-table-column
				        prop="status"
				        label="状态">
				      </el-table-column>
				      <el-table-column
				        prop=""
				        label="上架策略">
				        <template scope="scope">
						    <a style="cursor: pointer; color: #00AEFC;" @click="gotoPutOnPage(scope.row.id)">上架策略</a>
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
					    <el-button type="primary" @click="deleteBacktestConfirmed">确 定</el-button>
					</span>
				</el-dialog>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import SignalDevTabs from "@/components/views/SignalDevelop/SignalDevTabs/SignalDevTabs"
import AceEditor from 'vue2-ace'
import 'brace/mode/python'
import 'brace/theme/tomorrow'
import Global from "@/components/layout/Global"

export default {
	components: {
		AceEditor,
		NavBar,
		SignalDevTabs,
		Global
	},
	mounted() {
		document.body.style.overflow = "auto";
		this.$nextTick(function() {
			this.getBackTestListData();
		});
	},
	data() {
		return {
			SignalEditMenu: Global.getPageMenu("SignalDevelop"),
			backtestNum: 5,
			strategyCodeVisible: false,
			compareCodeDiagVisible: false,
			deleteCodeDiagVisible: false,
			showEditButtons: false,
			compareButtonDisabled: true,
			selectedItems: [],
			compareIcon: "compare-disabled-icon",
			editorOptions: {fontSize: '16px'},
			strategyCode: "TO DO: put code here",
			backtestListData: [],
			// backtestListData: [{id: "1", signal: {name: "小市值策略1"}, name: "回测1",createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
			// 	{id: "2", signal: {name: "小市值策略2"}, name: '回测2', createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
			// 	{id: "3", signal: {name: "小市值策略3"}, name: "回测3", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
			// 	{id: "4", signal: {name: "小市值策略4"}, name: "回测4", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
			// 	{id: "5", signal: {name: "小市值策略5"}, name: "回测4", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"}
			// ]
		}
	},
	methods: {
		getBackTestListData: function() {
			this.$http.get(Global.getRequestUrl() + "/dev/signals/signal/backtests/list/",
					{
						params: {'id': this.$route.params.signalId},
						headers: Global.getRequestHeader()
					}
				).then(function(resp) {
					resp = resp.data;
					if(resp.success) {
						this.backtestNum = resp.data.pagination.total;
						this.backtestListData = resp.data.backtests;
						// {id: "1", name: "小市值策略1", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"}
					}else {
						console.error("获取信号回测列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
					}
				}, function(error) {
					console.error("获取信号回测列表请求失败！");
					console.error(error);
				});
		},
		gotoBackTestDetail: function(backtestId) {
			var signalId = this.$route.params.signalId;
			window.open("#/SignalDevelop/BackTestDetail/" + signalId + "/" + backtestId);
		},
		gotoPutOnPage: function(backtestId) {
			this.$router.push("/Shelfsignal/Shelfsignaler");
			// this.$router.push("/Shelfsignal/Shelfsignaler/" + backtestId);
		},
		selectBacktestItem: function(selection, row) {
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
		deleteBacktestConfirmed: function() {
			var self = this;
			self.deleteCodeDiagVisible = false;
			//TO DO: delete selected backtest item in both client and server side
			console.log(this.selectedItems);

			self.backtestListData = self.backtestListData.filter(function(item) {
				return self.selectedItems.indexOf(item) < 0;
			});
		}
	}
}
</script>

<style lang="scss">
	.backtest-list {
		.nav-separator {
			height: 10px;
			width: 100%;
			margin: 0 auto;
			background-color: #666666;
		}
		.backtest-list-content {
			margin: 34px 150px;
			font-size: 16px;

			.backtest-list-toolbar {
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

			.backtest-list-table {
				padding-top: 24px;
			}
		}
	}
</style>