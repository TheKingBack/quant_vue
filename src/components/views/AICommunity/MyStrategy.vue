<template>
	<div id="AI-community">
		<nav-bar :navMenuItems="AIComunityMenu"></nav-bar>
		<div class="main">
			<el-row class="community-nav">
				<el-col :span="24" style="padding-left: 30px; background-color: white; border: 1px solid #e6e6e6;">
					<router-link class="BackDevelop" to="/SignalDevelop">
						<img :src="goBackIcon" alt="">
					</router-link>
					<template v-if="!isEditing">
						<div class="ThemFather" style="cursor:pointer;float:left;" @click="switchToEditing" @mouseover='IconDisplay' @mouseout='IconNone'>
							<span style="" v-text="signalName"></span>
							<!-- <span style="" v-text="signalName" @click="switchToEditing"></span> -->
							<i class="el-icon-edit" style="cursor:pointer;margin-left:8px;" v-if="IconIsDisplay"></i>
							<!-- <i class="el-icon-edit" style="cursor:pointer;margin-left:8px;" @click="switchToEditing" v-if="activeTab === 'edit-strategy'"></i> -->
						</div>
					</template>
					<template v-else>
					<div style="width: 300px; display: inline-block;">
						<input id="signal-name" @blur="switchToRender" v-model="signalName" ref="signalNameInput" placeholder="请输入信号名称"></input>
					</div>
					</template>
					<div style="display: inline-block; float: right; padding-right: 30px;">
						<div>
							<span class="nav-button" v-if="showEditStrategyTab" :class="{active: activeTab==='edit-strategy'}" @click="switchNavTab('edit-strategy')">编辑策略</span>
							<span class="nav-button" :class="{active: activeTab==='back-test-detail'}" @click="switchNavTab('back-test-detail')">回测详情</span>
							<span style="width: 1px; height: 14px; border-left: 1px solid #b4b4b4; display: inline-block; vertical-align: middle;"></span>	
							<span class="nav-button" :class="{active: activeTab==='compile-list'}" @click="switchNavTab('compile-list')">编译运行列表</span>
							<span class="nav-button" :class="{active: activeTab==='back-test-list'}" @click="switchNavTab('back-test-list')">回测列表</span>
						</div>
					</div>
				</el-col>
			</el-row>
			<div class="community-content">
				<edit-strategy ref="Getcode" :activeTabChanged="activeTab" v-on:message="receiveMessageFromEditStrategy" :style="{display: activeTab==='edit-strategy' ? 'block' : 'none'}" v-if="showEditStrategyTab" :signalName="signalName"></edit-strategy>
				<back-test-detail :activeTabChanged="activeTab" :style="{display: activeTab==='back-test-detail' ? 'block' : 'none'}"></back-test-detail>
				<compile-list :activeTabChanged="activeTab" v-on:message="receiveMessageFromEditStrategy" :style="{display: activeTab==='compile-list' ? 'block' : 'none'}"></compile-list>
				<back-test-list :activeTabChanged="activeTab" v-on:message="receiveMessageFromEditStrategy" :style="{display: activeTab==='back-test-list' ? 'block' : 'none'}"></back-test-list>
			</div>
		</div>

		<!-- <footer-bar></footer-bar> -->
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import EditStrategy from "@/components/views/AICommunity/MyStrategy/EditStrategy"
import BackTestDetail from "@/components/views/AICommunity/MyStrategy/BackTestDetail"
import CompileList from "@/components/views/AICommunity/MyStrategy/CompileList"
import BackTestList from "@/components/views/AICommunity/MyStrategy/BackTestList"
import FooterBar from "@/components/layout/FooterBar"
import Global from "@/components/layout/Global"

if(window.lastUrl=="/AICommunity/myStrategy/futures/"){
	window.location.reload();
}

export default {
	mounted: function() {
		var type = this.$route.params.strategyCat;
		// console.log(type);
		
		if(type === "combine") {
			this.showEditStrategyTab = false;
			this.activeTab = "back-test-detail";
		}else {
			if(this.$route.params.GoWhere=="4"){
				this.switchNavTab('back-test-list');
			};
			this.$http.get(Global.getRequestUrl() + "/dev/signal",
				{
					params: {'signalId': this.$route.params.signalId},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				// 李庚鑫在这做了更改
				resp = resp.body;
				console.log(resp);
				if(resp.success) {
					resp.data.name && (this.signalName = resp.data.name);
					if(resp.data.code){
						this.$refs.Getcode.strategyCode = resp.data.code;
						// console.log(this.$refs.Getcode.strategyCode);
					}
				}else {
					console.error("获取信号基本信息失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {
				console.error("获取信号基本信息请求失败");
				console.error(error);
			});
		}
	},
	components: {
		NavBar,
		EditStrategy,
		BackTestDetail,
		CompileList,
		BackTestList,
		FooterBar
	},
	data() {
		return {

			goBackIcon: './static/go-back.png',
			AIComunityMenu: Global.getPageMenu("SignalDevelop"),
			activeTab: 'edit-strategy',
			showEditStrategyTab: true,
			shouldRefresh: false,
			signalName: "小市值策略",
			isEditing: false,

			GetStrategyCode:"",

			//鼠标移入小笔图标显示
			IconIsDisplay:false,
		}
	},
	methods: {
		switchNavTab: function(tabName) {
			if(tabName) {
				this.activeTab = tabName;
				if(tabName=='edit-strategy'){
					this.GetStrategyCode = this.$refs.Getcode.SaveCode;
				}
			}
		},
		//Get message handler to response to child component message
		receiveMessageFromEditStrategy: function(msg) {
			if(msg === "SHOW_BACK_TEST_DETAIL_TAB") {
				this.activeTab = "back-test-detail";
			}
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

		//鼠标移入小笔图标显示
		IconDisplay(){
			this.IconIsDisplay = true;
		},
		IconNone(){
			this.IconIsDisplay = false;
		},
	}
}
</script>

<style lang="scss">
body{
	background-color: #f0f0f0;
}
	#AI-community {
		overflow-y: hidden;
		
		.main {
			font-size: 14px;

			.community-nav {
				height: 52px;
				line-height: 52px;
				box-sizing: border-box;
				.BackDevelop{
					display:block;
					float:left;
					width:28px;
					height:18px;
					margin: 16px 8px 0 0;
					img{
						display: block;
					}
				}

				.nav-button {
 					margin: 0px 12px;
					height: 52px;
 					display: inline-block;
 					line-height: 52px;
					box-sizing: border-box;
				}

				.nav-button:hover {
					cursor: pointer;
					color: #00aefc;
				}

				.active {
					border-bottom: 4px solid #00aefc;
					color: #00aefc;
				}
			}
		}
	}
</style>