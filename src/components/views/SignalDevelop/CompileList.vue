<template>
	<div class="compile-list">
		<nav-bar :navMenuItems="SignalEditMenu"></nav-bar>
		<signal-dev-tabs :activeTab="'compile-list'"></signal-dev-tabs>
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
				      style="width: 100%" @selection-change="selectCompileItem">
				      <el-table-column
				        prop="id"
				        label="id"
				        type="selection">
				      </el-table-column>
				      <el-table-column
				        prop="signal.name"
				        label="名称">
				      </el-table-column>
				      <el-table-column
				        prop="createDate"
				        label="创建时间"
				        width="175">
				      </el-table-column>
				      <el-table-column
				        prop="timeRange"
				        width="204"
				        label="时间范围">
				      </el-table-column>
				      <el-table-column
				        prop="frequency"
				        label="频率"
				        width="80">
				      </el-table-column>
				      <el-table-column
				        prop="status"
				        label="状态"
				        width="80">
				      </el-table-column>
				      <el-table-column
				        prop="profit"
				        label="收益">
				      </el-table-column>
				      <el-table-column
				        prop="maxDrawDown"
				        label="最大回撤">
				      </el-table-column>
				      <el-table-column
				        prop="alpha"
				        label="Alpha">
				      </el-table-column>
				      <el-table-column
				        prop="beta"
				        label="Beta">
				      </el-table-column>
				      <el-table-column
				        prop="sharp"
				        label="Sharp">
				      </el-table-column>
				      <el-table-column
				        prop=""
				        label=""
				        width="80">
				        	<template scope="scope">
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
		Global,
		SignalDevTabs
	},
	mounted() {
		document.body.style.overflow = "auto";
		this.$nextTick(function() {
			this.getCompileListData();
		});
	},
	data() {
		return {
			SignalEditMenu: Global.getPageMenu("SignalDevelop"),
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
				{id: "1", name: "小市值策略1", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
				{id: "2", name: "小市值策略2", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
				{id: "3", name: "小市值策略3", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
				{id: "4", name: "小市值策略4", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"},
				{id: "5", name: "小市值策略5", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"}
			]
		}
	},
	methods: {
		getCompileListData: function() {
			this.$http.get(Global.getRequestUrl() + "/dev/signals/signal/backtests/list_compile/",
					{
						params: {'id': this.$route.params.signalId},
						headers: Global.getRequestHeader()
					}
				).then(function(resp) {
					resp = resp.data;
					if(resp.success) {
						this.compileNum = resp.data.pagination.total;
						this.compileListData = resp.data.backtests;
						// {id: "1", name: "小市值策略1", createDate: "2017-08-17 23:10:43", timeRange: "2017-07-12 - 2017-07-30", frequency: "每天", status: "完成", profit: "-7%", maxDrawDown: "11.16%", alpha: "-1.3846", beta: "2.3388", sharp: "-1.6402"}
					}else {
						console.error("获取信号回测列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
					}
				}, function(error) {
					console.error("获取信号回测列表请求失败！");
					console.error(error);
				});
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
			margin: 34px 150px;
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