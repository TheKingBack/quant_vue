<template>
	<div>
		<nav-bar :navMenuItems="homeMenu"></nav-bar>

		<div class="main">
			<div class="home-banner">
				<div style="padding-top: 150px; text-align: center;">
					<img :src="homeBannerTextIcon">
				</div>
				<div style="padding-top: 80px; text-align: center;">
					<div style="display: inline-block;">
						<div class="home-banner-button" style="background-color: #14AAFF; border: 1px solid #14AAFF;">
							<a @click="gotoSignalDevelopPage">开启智能信号开发</a>
							<!-- <router-link to="/signalDevelop" @click.native="openSignalDevelopHandler">智能信号开发</router-link> -->
						</div>
						<div class="home-banner-button" style="margin-left: 46px; border: 1px solid #FFFFFF;">
							<a @click="gotoSignalCityPage">优质信号商城</a>
							
						</div>
					</div>
				</div>
				<div style="padding-top: 150px; text-align: center;"></div>
			</div>
			<div style="background-color: white;">
				<div class="signal-analysis-pane">
					<div class="pane-header">
						<span class="pane-header-title">AI信号分析师</span>
						<span class="pane-header-separator"></span>
					</div>
					<div class="pane-description" style="text-indent: 30px;">
						<div>利用人工智能算法和效用优化模型，提供仓位管理系统，量化策略以及交易信号的优化服务，通过资金合理配置，策略科学组合，信号自动过滤，</div>
						<div>实现风险收益的最佳平衡。AI信号分析系统与天鸿云策略库直接对接，将用户通过量化终端选择上传的基础策略进行诊断，评价和组合优化，筛选并训练</div>
						<div>出表现优异的组合策略，最终进入我们的实盘交易模块提供资金进行实盘交易。</div></div>
					<div style='background: url("/static/Home/signal-analysis-banner.png") no-repeat center center; height: 430px;'>
						<div style="padding: 48px 0px 50px;">
							<img src="/static/Home/signal-analysis.png">
						</div>
						<div>
							<router-link class="home-radius-button" style="width: 196px;" to="/AISignalAnalysis/assetsSteward">进入信号分析师</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="signal-city-pane">
				<div class="pane-header">
					<span class="pane-header-title">信号商城</span>
					<span class="pane-header-separator"></span>
				</div>
				<div class="pane-description">平台利用人工智能算法和效用优化模块，把优质的策略信号放在信号商城，让你不再错过优质的策略</div>
				<div style="padding: 36px 0px; margin: 0px 75px;"  v-for="(sg, index) in signals">
					<div style="text-align: left;">
						<div>
							<span style="display: block; font-size: 34px; color: #162738;">0{{index + 1}}</span>
							<div style="line-height: 1px;"><span class="pane-header-separator"></span></div>
						</div>
						<div class="signal-wrapper">
							<div class="signal-description">
								<div class="signal-owner">
									<div class="signal-owner-item">
										<img src="/static/Home/user-photo.jpg" style="width: 46px; height: 46px; border-radius: 23px;">
									</div>
									<div class="signal-owner-item signal-owner-itemone" style="margin: 0px 80px 0px 14px;">
										<span>{{sg.owner}}</span>
									</div>
									<div class="signal-owner-item">
										<span class="signal-backtest-button">策略回测</span>
									</div>
								</div>
								<div class="signal-name" @click="gotoSignalDetailPage(sg.id)">{{sg.name}}</div>
								<div class="signal-profit-wrapper">
									<div class="signal-profit">
										<div class="signal-profit-cat">年化收益</div>
										<div class="signal-profit-year">{{sg.benefits.totalBenefitPerYear}}</div>
									</div>
									<div class="signal-profit">
										<div class="signal-profit-cat">最大回撤</div>
										<div class="signal-profit-val">{{sg.benefits.max_drawback}}</div>
									</div>
									<div class="signal-profit">
										<div class="signal-profit-cat">初始资金</div>
										<div class="signal-profit-val">￥{{sg.initAmount}}</div>
									</div>
								</div>
								<div>
									<span style="display: inline-block; color: #666666;">已有<span style="color: #F54E2D;">{{sg.bought}}</span>人购买</span>
								</div>
								<div style="font-size: 20px; color: #00AEFC; margin-top: 18px;">
									<span>
										<router-link :to="{name: 'Buyersignaler', params: {backtestId: sg.id}}" style="color: #00AEFC;">查看详情
										<img style="padding-left: 18px;" src="/static/Home/get-source-code.png">
									</router-link>
									</span>
								</div>
							</div>
							<div class="signal-chart" style="position: absolute; left: 376px; top: 66px; padding: 30px 12px; height: 410px;">
								<signal-chart :chartData="sg.pChartData" style="height: 350px;"></signal-chart>
							</div>
						</div>
					</div>
				</div>
				<div style="margin-top: 50px;"><span class="home-radius-button" style="width: 190px;" @click="gotoSignalCityPage">加载更多策略</span></div>
			</div>
			<div class="our-service-pane-wrapper">
				<div class="our-service-pane">
					<div class="pane-header" style="color: #FFFFFF;">
						<span class="pane-header-title">我们提供</span>
						<span class="pane-header-separator"></span>
					</div>
					<div style="margin-top: 46px;">
						<div class="service-wrapper" v-for="svc in ourServices">
							<div style="padding: 0px 50px;">
								<div><img :src="svc.icon"></div>
								<div class="service-name">{{svc.name}}</div>
								<div class="service-description">{{svc.description}}</div>
								<!-- <div class="service-button">
									<span class="home-radius-button" style="width: 136px; height: 40px; line-height: 40px;">立即体验</span>
								</div> -->
							</div>
						</div>
					</div>
					
				</div>
			</div>
			<div class="advantage-pane-wrapper">
				<div class="advantage-pane">
					<div class="pane-header">
						<span class="pane-header-title">我们的优势</span>
						<span class="pane-header-separator"></span>
					</div>
					<div class="advantage-wrapper" v-for="adv in advantages">
						<div style="padding: 0px 40px;">
							<div><img :src="adv.icon"></div>
							<div class="advantage-name">{{adv.name}}</div>
							<div class="advantage-description">{{adv.description}}</div>
						</div>
					</div>
				</div>
			</div>
			<div class="journey-pane-wrapper">
				<div class="journey-pane">
					<div style="font-size: 30px; margin-bottom: 58px;">开启我的投资量化之旅</div>
					<div class="home-radius-button" style="width: 196px;"><router-link to="/signalDevelop">开启人工智能之旅</router-link></div>
				</div>
			</div>

			<div>
				<el-dialog
				  title="请登录"
				  :visible.sync="loginDiagVisible"
				  size="tiny"
				  :before-close="handleClose">
				  <login-diag></login-diag>
				  <!-- <span slot="footer" class="dialog-footer">
				    <el-button @click="loginDiagVisible = false">取 消</el-button>
				    <el-button type="primary" @click="loginDiagVisible = false">确 定</el-button>
				  </span> -->
				</el-dialog>
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
import LoginDiag from "@/components/layout/LoginDiag"

var mockSignals = [
{id: 1, owner: "不二咚", name: "银行轮动", benefits: {totalBenefitPerYear: "46.62%", max_drawback: "21.24%"}, initAmount: "30000", bought: 975,
	pChartData: {id: "signalChart1", options: [], startDate: "2016-06-11", amountMoney: "30000", frequency: "每天"}},
{id: 2, owner: "不二咚2", name: "银行轮动2", benefits: {totalBenefitPerYear: "46.62%", max_drawback: "21.24%"}, initAmount: "30000", bought: 975,
	pChartData: {id: "signalChart2", options: [], startDate: "2016-06-11", amountMoney: "30000", frequency: "每天"}}
];

export default {
	components: {
		NavBar,
		FooterBar,
		SignalChart,
		LoginDiag
	},
	mounted() {
		document.body.style.overflow = "auto";
		this.$nextTick(function() {
			this.IsWechat();
			this.loadHomeSignalCity();
		});
	},
	name: "home",
	data() {
		return {
			homeMenu: Global.getPageMenu("Home"),
			homeBannerTextIcon: "/static/home-banner-text.png",
			signals: mockSignals,
			loginDiagVisible: false,
			
			ourServices: [
				{
					name: "高质量数据",
					description: "我们免费提供2005年至今的A股行情数据、AI信号、定制模块",
					icon: "/static/Home/high-quality-data.png"
				},
				{
					name: "精准回测",
					description: "我们免费提供高效、精准的回测引擎，快速验证策略，支持日级、分钟级回测",
					icon: "/static/Home/accurate-backtest.png"
				},
				{
					name: "模拟交易",
					description: "我们免费提供最准确、实时的沪深A股、期货模拟交易工具，支持日级、分钟级、tick级模拟交易",
					icon: "/static/Home/mock-transaction.png"
				},
				{
					name: "人工智能交流社区",
					description: "提供人工智能线上交流社区，基于清华量协开展线下学术小组，一起探索人工智能在金融领域的应用",
					icon: "/static/Home/community.png"
				}
			],
			advantages: [
				{
					icon: "/static/Home/advantage-1.png",//"/static/logo.png",
					name: "强大的技术团队",
					description: "依托清华量协，中美量化人才联盟，顶尖高校教授、研究生、博士等开发团队"
				},
				{
					icon: "/static/Home/advantage-2.png",
					name: "开源的人工智能交流社区",
					description: "为人工智能爱好者提供线上交流社区，结合清华量协的线下学术研讨会，以及协会品牌“Q-talk”邀请海内外知名学者一起交流、进步"
				},
				{
					icon: "/static/Home/advantage-3.png",
					name: "顶级回测体验",
					description: "支持每日、分钟两级回测，提供简洁、强大的API，回测结果实时显示、快速响应、数据全面"
				},
				{
					icon: "/static/Home/advantage-4.png",
					name: "顶尖模拟交易",
					description: "提供最准确、实时的沪深A股、ETF模拟交易工具，支持基于tick级的模拟交易"
				},
				{
					icon: "/static/Home/advantage-5.png",
					name: "安全",
					description: "本地回测"
				},
				{
					icon: "/static/Home/advantage-6.png",
					name: "高效",
					description: "C++底层设计，资源独立，安全性更高、性能更好，同步支持Python、C++等语言"
				},
				{
					icon: "/static/Home/advantage-7.png",
					name: "多功能",
					description: "我们提供独家包装好的优化模块、分析模块，协助您便携地把人工智能算法应用到金融领域，使得您的策略提高性能"
				},
				{
					icon: "/static/Home/advantage-8.png",
					name: "广阔的教育资源",
					description: "清华校内科研单位支持协会，校友资源服务同学，广大的业界机构合作"
				},

			]
		}
	},
	methods: {
		//验证是否是微信登录
		IsWechat:function(){
			console.log("微信登录！获取token！")
			this.$http.post(Global.getRequestUrl() + "/user/login/check",
			{
				headers: Global.getRequestHeader(),
			}
			)
			.then(function(resp){
				var resp = resp.body;
				console.log(resp);
				if(resp.success){
					if(resp.data){
						Global.setCookie("token", resp.data);
					}
					console.log("用户已经用" + "登录！")
				}else{
					console.log(resp.msg);
				}

			},function(error){
				console.log("验证是否是微信登录请求失败！")
				console.log("失败代码：" + error.code + "失败原因：" + error.msg);
			})
		},

		loadHomeSignalCity: function() {
			this.$http.get(Global.getRequestUrl() + "/backtest/list",
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				// 李庚鑫在这做了修改
				resp = resp.body;
				// console.log(resp);

				// resp = resp.data;
				if(resp.success) {
					self.signals = resp.data.results;
					
				}else {
					console.error("获取首页精选信号失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {
				console.error("获取首页精选信号请求失败！");
				console.error(error);
			});
		},
		gotoSignalDevelopPage: function(event) {
			if(Global.isLogedin()) {
				this.$router.push("/signalDevelop");
				return true;
			}else {
				// console.log("用户还没有登录！");
				event.preventDefault();
				this.loginDiagVisible = true;
				window.lastUrl = "/signalDevelop";
				return false;
			}
		},
		gotoSignalCityPage: function() {
			this.$router.push("/SignalCity");
		},
		gotoSignalDetailPage: function(id) {
			this.$router.push("/Shelfsignal/Buyersignaler/" + id);
		},
		handleClose: function(done) {
			window.lastUrl = null;
			done();
		}
	}
};
</script>

<style lang="scss">
	a {
		color: white;
		text-decoration: none;
		display: inline-block;
		width: 100%;
		height: 100%;

		&:hover {

		}

		&:visited {
			
		}
	}

	.main {
		background-color: #F2F3F7;

		.home-banner {
			background: url("/static/home-banner.png") no-repeat center center;
			background-size: cover;

			.home-banner-button {
				display: inline-block;
				height: 46px;
				width: 172px;
				font-size: 18px;
				text-align: center;
				vertical-align: middle;
				border-radius: 23px;
				color: white;
				line-height: 46px;
				cursor: pointer;
			}
		}

		@mixin home-pane {
			text-align: center;
			width: 1200px;
			margin: 0 auto;
		}

		.signal-analysis-pane {
			height: 628px;
			background-color: #FFFFFF;
			@include home-pane;
		}

		.signal-city-pane {
			height: 1450px;
			@include home-pane

			.signal-wrapper {
				background-color: #FFFFFF;
				width: 612px;
				height: 336px;
				margin-top: 14px;
				margin-bottom: 90px;
				position: relative;

				.signal-description {
					padding-left: 38px;
					padding-top: 20px;

					.signal-owner-item {
						height: 46px;
						line-height: 46px;
						vertical-align: top;
						display: inline-block;

						.signal-backtest-button {
							display: inline-block;
							width: 86px;
							height: 26px;
							border-radius: 13px;
							color: #00AEFC;
							border: 1px solid #00AEFC;
							background-color: rgba(0, 174, 252, 0.1);
							line-height: 27px;
							vertical-align: middle;
							text-align: center;
							font-size: 14px;
						}
					}
					.signal-owner-itemone{
						width: 112px;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						// margin-right: 80px;
					}

					.signal-name {
						font-size: 18px;
						color: #333333;
						margin-top: 30px;
						margin-bottom: 32px;
						cursor: pointer;
					}

					.signal-profit-wrapper {
						margin: 0px 5px;
						padding: 0px 0px 30px 0px;

						.signal-profit {
							display: inline-block;
							width: 80px;
							text-align: center;
							padding-right: 20px;

							.signal-profit-cat {
								font-size: 14px;
								color: #666666;
								padding-bottom: 10px;
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
					}
				}

				.signal-chart {
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
			}

			.signal-chart {
				width: 668px;
				height: 350px;
				border: 1p solid #00aefc;
				border-radius: 8px;
				background-color: white;
				box-shadow: 0 0 13px rgba(18, 35, 51, 0.4);		
			}
		}

		.pane-header {
			color: #333333;
			padding: 50px 0px 20px 0px;

			.pane-header-title {
				display: block;
				font-size: 30px;
			}
		}

		.pane-header-separator {
			display: inline-block;
			border-top: 2px solid #C8C8C8;
			width: 50px;
		}

		.pane-description {
			font-size: 14px;
			color: #666666;
			width: 1000px;
			margin: 0 auto;
			line-height: 25px;
		}

		.home-radius-button {
			display: inline-block;
			color: #FFFFFF;
			font-size: 18px;
			height: 50px;
			border-radius: 25px;
			background-color: #00aefc;
			line-height: 50px;
			text-align: center;
			vertical-align: middle;
			cursor: pointer;
		}


		.our-service-pane-wrapper {
			background: url("/static/Home/our-service.png") no-repeat center center;
			background-size: cover;
			height: 550px; //634px;
			color: #FFFFFF;

			.our-service-pane {
				@include home-pane

				.service-wrapper {
					display: inline-block;
					float: left;
					width: calc(100%/4);
					height: 450px;
					cursor: default;

					.service-name {
						font-size: 22px;
						padding: 22px 0px 30px 0px;
					}

					.service-description {
						font-size: 16px;
						color: #DCDCDC;
						height: 84px;
						line-height: 25px;
					}

					.service-button {
						padding-top: 50px;
						display: none;
						cursor: pointer;					
					}

					&:hover {
						.service-button {
							display: block;
						}
					}
				}
			}
		}

		.advantage-pane-wrapper {
			background-color: white;
			height: 976px;

			.advantage-pane {
				@include home-pane

				.advantage-wrapper {
					width: calc(100%/4);
					float: left;
					height: 230px;
					text-align: center;
					margin: 78px 0px;

					.advantage-name {
						font-size: 22px;
						color: #333333;
						margin: 60px 0px 20px;
					}

					.advantage-description {
						font-size: 16px;
						color: #666666;
						line-height: 25px;
					}
				}
			}
		}
		

		.journey-pane-wrapper {
			background: url("/static/Home/journey.png") no-repeat center center;
			background-size: cover;
			color: white;
			height: 300px;

			.journey-pane {
				padding-top: 72px;
				@include home-pane
			}

		}
	}
</style>