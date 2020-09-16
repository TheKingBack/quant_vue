<template>
	<div class="signal-edit-nav">
		<div :span="24" style="padding-left: 50px; background-color: white; border: 1px solid #e6e6e6;">
			<img :src="goBackIcon">
			<template v-if="!isEditing">
				<span v-text="signalName"></span>
				<i v-if="activeTab === 'edit-strategy'" class="el-icon-edit" @click="switchToEditing"></i>
			</template>
			<template v-else>
				<div style="width: 300px; display: inline-block;">
				<input id="signal-name" @blur="switchToRender" v-model="signalName" ref="signalNameInput" placeholder="请输入信号名称"></input>
				</div>
			</template>
			<div style="display: inline-block; float: right; padding-right: 50px;">
				<div>
					<span class="nav-button" :class="{active: activeTab==='edit-strategy'}" @click="switchNavTab('edit-strategy')">编辑策略</span>
					<span class="nav-button" :class="{active: activeTab==='back-test-detail', disableTab: !backtestId}" @click="switchNavTab('back-test-detail')">回测详情</span>
					<span style="width: 1px; height: 14px; border-left: 1px solid black; display: inline-block; vertical-align: middle;"></span>	
					<span class="nav-button" :class="{active: activeTab==='compile-list'}" @click="switchNavTab('compile-list')">编译运行列表</span>
					<span class="nav-button" :class="{active: activeTab==='back-test-list'}" @click="switchNavTab('back-test-list')">回测列表</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Global from "@/components/layout/Global"
export default {
	mounted() {
		document.body.style.overflow = "auto";
		this.$nextTick(function() {
			this.getSignalInfo();
		});
		this.backtestId = window.backtestId;
	},
	props: ['activeTab'],
	data() {
		return {
			goBackIcon: './static/go-back.png',
			signalName: "小市值策略",
			isEditing: false,
			backtestId: ''
		}
	},
	methods: {
		getSignalInfo: function() {

			this.$http.get(Global.getRequestUrl() + "/dev/signal",
				{
					params: {'signalId': this.$route.params.signalId},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				// 李庚鑫在这做了更改
				resp = resp.body;
				console.log(resp)

				// resp = resp.data;

				if(resp.success) {
					if(resp.data.name) {
						this.signalName = resp.data.name;
					}
					window.sessionStorage.setItem("signalName", this.signalName);

					console.log("获取信号基本信息成功");

				}else {
					console.error("获取信号基本信息失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {

				console.error("获取信号基本信息请求失败");

				console.error(error);
			});
		},
		updateSignalName: function() {

			this.$http.post(Global.getRequestUrl() + "/dev/signal/update", 
				{
					signalId: this.$route.params.signalId,
					name: this.signalName,
					code: self.strategyCode

				},
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {

				// 李庚鑫做了修改
				resp = resp.body;
				console.log(resp);

				// resp = resp.data;

				if(resp.success) {
					console.log("信号名称更改保成功！");
					window.sessionStorage.setItem("signalName", this.signalName);
				}else {
					console.error("信号名称更改失败！");
				}
			}, function(error) {
				console.error("信号名称更改请求失败！");
				console.error(error);
			});
		},
		switchToEditing: function() {
			this.isEditing = true;
			setTimeout(function() {
				document.getElementById("signal-name").focus();
			}, 10);
		},
		switchToRender: function() {
			this.isEditing = false;
		},
		switchNavTab: function(tabName) {
			var signalType = this.$route.params.strategyCat;
			var signalId = this.$route.params.signalId;
			var routerId = null;
			var backtestId = window.backtestId;
			if(tabName === "back-test-detail" && !backtestId) {
				return;
			}
			switch(tabName) {
				case "edit-strategy":
					routerId = "/SignalDevelop/SignalEdit/" + signalType + "/" + signalId;
					break;
				case "back-test-detail":
					if(backtestId) {
						routerId = "/SignalDevelop/BackTestDetail/" + signalId + "/" + backtestId;
					}
					break;
			    case "compile-list":
			    	routerId = "/SignalDevelop/CompileList/" + signalId;
			    	break;
			    case "back-test-list":
			    	routerId = "/SignalDevelop/BackTestList/" + signalId;
			    	break;
			}
			this.$router.push(routerId);
		}
	},
	watch: {
		signalName: function() {
			if(this.isEditing) {
				this.updateSignalName();
			}
		}
	}
}
</script>

<style lang="scss">
	.signal-edit-nav {
		height: 56px;
		line-height: 56px;
		font-size: 14px;

		.nav-button {
 			margin: 0px 20px;
 			display: inline-block;
 			line-height: 50px;
		}

		.nav-button:hover {
			cursor: pointer;
			color: #00BAE9;
		}

		.active {
			border-bottom: 4px solid #00BAE9;
			color: #00BAE9;
		}

		.disableTab {
			color: grey;

			&:hover {
				color: grey;
			}
		}
	}
</style>