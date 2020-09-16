<template>
	<div id="buyer">
		<div class="buyer-header">
			<div class="buyer-header-before"></div>
			<div class="buyer-header-img">
				<img src="../../../../static/Buyersignal/icon_xiangqing_dingbutouxiang.png" alt="" />
			</div>
			<div class="buyer-header-text" v-for="buyer in buyerMessage">
				<span class="buyer-header-text-name">{{buyer.name}}</span>
				<span class="buyer-header-text-label">{{buyer.label}}</span>
			</div>
		</div>
		<div class="buyer-middle"></div>
		<div class="buyer-market" v-for="sg in signals">
			<el-row :gutter="20">
				<el-col :span="6" style="font-size: 22px;color: #333333;">
					苹果微商城信号
				</el-col>
			</el-row>
			<el-row :gutter="20" v-for="(num,index) in buyerNumber" :key="index">
				<el-col :span="2">
					<span>{{num.buy}}</span>人购买
				</el-col>
				<el-col :span="2">
					<span>{{num.see}}</span>人查看
				</el-col>
				<el-col :span="2">
					<span>{{num.evaluate}}</span>人评价
				</el-col>
				<el-col :span="2">
					<span>{{num.collection}}</span>人收藏
				</el-col>
				<el-col :span="4" :offset="8">
					<el-button style="line-height: 20px;color: #fff;background: #00AEFC;"><img src="/static/Buyersignal/icon_fenxiang.png" />分享</el-button>
				</el-col>
				<el-col :span="4">
					<el-button type="primary" style="color: #ffffff;line-height: 20px;background:#F5B55B;border:none;" @click="putDown()">下架信号</el-button>
				</el-col>
			</el-row>
			<div class="Stockmarketstrategy">策略思路：1.不追高:2.威利就走：3.自我学习：4.适应股市震荡</div>
			<div class="zoom"><span>缩放：</span><span>1个月 </span><span>1年</span><span>全部</span></div>
			<div class="buyer-text-box" id="buyer-text-box">
				<signal-chart :chartData="sg.pChartData" style="height: 190px;"></signal-chart>
			</div>
			<ul class="buyer-text-table">
				<li v-for="money in monthProfit">
					<span class="month-Profit">{{money.name}}</span>
					<span class="month-num">{{money.num}}</span>
				</li>
			</ul>
			<div class="sinagn-advantage">
				<span class="sinagn-advantage-title">策略优势：</span>
				<p class="sinagn-advantage-text" v-for="sign in advantageText">{{sign.text}}</p>
			</div>
			<div class="buyer-man">
				<p>购买信号的人</p>
				<div class="buy-man-img">
					<div class="buyer-head-portrait">
						<div class="head-portrait" v-for="head in pratrait">
							<img :src="head.img" />
						</div>
					</div>
					<div class="all-people"></div>
				</div>
			</div>
		</div>
		<div class="buyer-middle"></div>
		<div class="discussion">
			<div class="discussion-area">
				<span class="discussion-area-slider"></span>
				<span class="discussion-area-text">讨论区</span>
			</div>
			<div class="discussion-message" v-for="distext in discussionMessage">
				<div class="discussion-message-box">
					<img :src="distext.discussionImg" />
					<span class="discussion-message-nickname">{{distext.reply}}</span>
				</div>
				<div class="discussion-message-msg">{{distext.dis_text}}</div>
				<div class="discussion-message-reply"><img src="/static/Buyersignal/icon_huifu.png" alt="" /><span class="discussion-message-reply-msg">回复</span></div>
			</div>
			<div class="discussion_input">
				<textarea name="" rows="" cols=""></textarea>
			</div>
			<div class="discussion_btn">
				<el-button type="primary">确认发送</el-button>
			</div>
		</div>
		<div class="buyer-middle"></div>
	</div>
</template>

<script>
	import SignalChart from "@/components/layout/SignalChart"
	import Global from "@/components/layout/Global"

	var mockSignals = [{
		owner: "不二咚",
		name: "银行轮动",
		benefits: {
			totalBenefitPerYear: "46.62%",
			max_drawback: "21.24%"
		},
		initAmount: "30000",
		bought: 975,
		pChartData: {
			id: "signalChart1",
			options: [],
			startDate: "2016-06-11",
			amountMoney: "30000",
			frequency: "每天"
		}
	}, ];
	export default {
		components: {
			SignalChart,
		},
		data() {
			return {
				signals: mockSignals,
				buyerMessage: [{
					img: "../static/Buyersignal/icon_xiangqing_dingbutouxiang.png",
					name: "不二咚",
					label: '行情总在绝望中产生，猜疑中成长，欢乐中死亡'
				}, ],
				pratrait: [{
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, {
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, {
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, {
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, {
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, {
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, {
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, {
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, {
					img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"
				}, ],
				buyerNumber: [{
					buy: '100',
					see: "200",
					evaluate: "300",
					collection: "400"
				}],
				monthProfit: [{
					name: '每月收益',
					num: '0.89%'
				}, {
					name: '目标收益（每月）',
					num: 'HS300+3%'
				}, {
					name: '年化收益',
					num: '80.55%'
				}, {
					name: '历史达标率',
					num: '100%'
				}, {
					name: '适合资金',
					num: '0.89%'
				}, {
					name: '信号价格',
					num: '1000元'
				}],
				advantageText: [{
					text: "中国银行，工商银行，劳动银行三者轮动效果最好。"
				}, {
					text: "其实，这个策略有一个最重大的缺点："
				}, {
					text: "策略设置的是0滑点，意味着实盘必须使用限价单交易。"
				}, {
					text: "由于这几个银行交易量都很大，前面可能有一堆的单子在排队，我们的下单结果，很有可能是不能成交的。"
				}, {
					text: "因为这几个银行股股价过小，而中国股市最小的变化单位是1分钱。"
				}, {
					text: "这就意味着，如果我们通过买一卖一交易，最少也要承担千分之二的滑点。"
				}, {
					text: "一买一卖就是千分之四，而策略的交易触发的价格比之差是千分之五......"
				}, {
					text: "所以，设置了2分钱的滑点的回测结果是这样的："
				}, ],
				discussionMessage: [{
					discussionImg: './static/icon_xiangqing_dingbutouxiang.png',
					reply: '赵雷',
					dis_text: '瞬间忆起张爱玲的《爱》 补充：于千万人之中遇到你所要遇到的人，于千万年之中，时间的无涯的荒野中，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话好说，唯有轻轻的问一声：“噢，你也在这里吗？”'
				}, {
					discussionImg: './static/icon_xiangqing_dingbutouxiang.png',
					reply: '张碧晨',
					dis_text: '以前高中打游戏。 经常去网吧通宵。 前面坐个长发妹子。 很长的那种。 每次玩上课睡觉她总会把扎着头发放开 。 多年后同学会发现她剪了短发。 依然那么漂亮。 问她为什么剪了。 她说其实她不喜欢留长头发。 留长头发是为了她后面经常熬夜的少年能够睡个安稳觉不被老师发现。现在不见多年。”'
				}]
			}
		},
		mounted() {
			
		},
		methods: {
			putDown: function() {
				//				this.$http({
				//					url: Global.getRequestUrl() + "/dev/signals/backtests/put_down/",
				//					method: "POST",
				//					headers: Global.getRequestHeader(),
				//					data: { "id": 0 }
				//				}).then(function(resp) {
				//					resp = resp.data;
				//					if(resp.succss) {
				//						console.log('下架信号成功！')
				//					} else {
				//						console.error("下架信号失败！" + "error code: " + resp.err_code + ", reason: " + resp.reason);
				//					}
				//				}, function(error) {
				//					alert("下架信号请求失败");
				//					console.error(error);
				//				});
				this.$http.post(Global.getRequestUrl() + "/dev/signals/backtests/put_down/", {
					headers: Global.getRequestHeader(),
					"id": 0,
				}).then(function(str) {
					var json = str.data;
					console.log(json)
					if(json.success) {
						console.log('上架信号成功')
					} else {
						console.error("上架信号失败" + "error code: " + json.err_code + ", reason: " + json.reason);
					}
				}, function(error) {
					console.error("上架信号失败！");
					console.error(error);
				})
			}
		}
	}
</script>

<style lang="scss">
	.buyer-header {
		width: 100%;
		height: 64px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: 18px 0;
		.buyer-header-before {
			width: 15%;
		}
		.buyer-header-img {
			width: 58px;
			height: 58px;
			border: 1px solid #AAAAAA;
			border-radius: 50%;
			padding: 4px;
		}
		.buyer-header-text {
			margin-left: 20px;
			.buyer-header-text-name {
				display: block;
				font-size: 18px;
				color: #333333;
				margin-top: 10px;
			}
			.buyer-header-text-label {
				font-size: 14px;
				color: #8F9399;
				margin-top: 10px;
			}
		}
	}
	
	.buyer-middle {
		width: 100%;
		height: 20px;
		background: #e6e6e6;
	}
	
	.buyer-market {
		width: 1200px;
		margin: 30px auto;
		.el-row {
			margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.el-col {
			border-radius: 4px;
			font-size: 14px;
			color: #999999;
		}
		.bg-purple-dark {
			background: #99a9bf;
		}
		.bg-purple {
			background: #d3dce6;
		}
		.bg-purple-light {
			background: #e5e9f2;
		}
		.grid-content {
			border-radius: 4px;
			min-height: 36px;
		}
		.row-bg {
			padding: 10px 0;
			background-color: #f9fafc;
		}
		.el-button {
			width: 108px;
			height: 38px;
			font-size: 16px;
			img {
				display: inline-block;
				margin-right: 10px;
			}
		}
		.Stockmarketstrategy {
			width: 100%;
			font-size: 14px;
			color: #333333;
			line-height: 29px;
		}
		.zoom {
			width: 100%;
			font-size: 12px;
			color: #999999;
			line-height: 29px;
			span {
				display: inline-block;
				margin-right: 10px;
			}
		}
		.buyer-text-box {
			width: 1200px;
			border: 1px solid red;
			height: 200px;
		}
		.buyer-text-table {
			width: 1200px;
			height: 150px;
			border: 1px solid #999999;
			margin-bottom: 38px;
			padding: 0;
			list-style: none;
			position: relative;
			li {
				float: left;
				width: 200px;
				height: 100%;
				position: relative;
				.month-Profit {
					display: block;
					width: 100%;
					height: 20px;
					line-height: 20px;
					text-align: center;
					font-size: 14px;
					color: #999999;
					margin-top: 20px;
				}
				.month-num {
					display: block;
					width: 100%;
					height: 26px;
					line-height: 26px;
					text-align: center;
					font-size: 26px;
					color: #333333;
					margin-top: 20px;
				}
			}
			li:first-child {
				.month-num {
					color: #EC4343;
				}
			}
			li:last-child {
				.month-num {
					color: #F5B55B;
				}
			}
			li:before {
				content: '';
				height: 50px;
				width: 1px;
				background: #999999;
				position: absolute;
				top: 50px;
				left: 200px;
			}
			.buyer-btn {
				width: 180px;
				height: 35px;
				background: #EC4343;
				border-radius: 4px;
				position: absolute;
				right: 10px;
				bottom: 55px;
				text-align: center;
				line-height: 35px;
				color: #ffffff;
				font-size: 14px;
				cursor: pointer;
			}
		}
		.sinagn-advantage {
			width: 100%;
			text-align: left;
			margin-bottom: 102px;
			.sinagn-advantage-title {
				display: block;
				font-size: 18px;
				line-height: 26px;
				color: #333333;
			}
			.sinagn-advantage-text {
				font-size: 14px;
				line-height: 26px;
				color: #666666;
			}
		}
		.buyer-man {
			width: 100%;
			text-align: center;
			font-size: 18px;
			color: #333333;
			position: relative;
			margin-bottom: 80px;
		}
		.buyer-man:after {
			content: '';
			width: 30px;
			height: 2px;
			background: #00AEFC;
			position: absolute;
			top: 35px;
			left: 48.5%;
		}
		.buy-man-img {
			width: 100%;
			height: 62px;
			display: inline-block;
			/*margin:30px auto 0;*/
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			position: relative;
			overflow: hidden;
			.buyer-head-portrait {
				width: 510px;
				height: 60px;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				margin-left: 350px;
				.head-portrait {
					width: 60px;
					height: 60px;
					padding: 2px;
					border: 2px solid #fff;
					border-radius: 50%;
					margin-left: -13px;
				}
				.head-portrait:first-child {
					margin-left: 1px;
				}
			}
			.all-people {
				width: 60px;
				height: 60px;
				display: inline-block;
				background: #F5B55B;
				border-radius: 50%;
				margin-left: -15px;
				border: 2px solid #fff;
			}
		}
	}
	
	.discussion {
		width: 1200px;
		margin: auto;
		.discussion-area {
			width: 100%;
			height: 66px;
			border-bottom: 1px solid #e6e6e6;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			.discussion-area-slider {
				display: inline-block;
				width: 3px;
				height: 30px;
				background: #00AEFC;
				margin-right: 14px;
				margin-top: 24px;
			}
			.discussion-area-text {
				display: inline-block;
				font-size: 22px;
				color: #333333;
				margin-top: 24px;
			}
		}
		.discussion-message {
			width: 100%;
			padding: 10px;
			border-bottom: 1px solid #e6e6e6;
			.discussion-message-box {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				margin: 14px 0 16px;
				img {
					display: inline-block;
					width: 42px;
					height: 42px;
				}
				.discussion-message-nickname {
					display: inline-block;
					width: 200px;
					height: 42px;
					line-height: 42px;
					margin-left: 18px;
					font-size: 14px;
					color: #666666;
				}
			}
			.discussion-message-msg {
				width: 80%;
				font-size: 14px;
				color: #666666;
				line-height: 26px;
			}
			.discussion-message-reply {
				width: 100%;
				height: 20px;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				margin-top: 16px;
				img {
					display: inline-block;
					width: 16px;
					height: 16px;
				}
				.discussion-message-reply-msg {
					font-size: 14px;
					color: #00AEFC;
					margin-left: 12px;
				}
			}
		}
		.discussion_input {
			width: 1200px;
			height: 300px;
			border: 1px solid #e6e6e6;
			margin-top: 30px;
			box-shadow: #e6e6e6 2px 3px 2px 3px;
			textarea {
				width: 1198px;
				height: 298px;
			}
		}
		.discussion_btn {
			width: 110px;
			height: 40px;
			font-size: 16px;
			color: #fff;
			margin-top: 24px;
			margin-bottom: 70px;
			.el-button {
				width: 100%;
				height: 40px;
			}
		}
	}
	
	.el-message-box {
		.el-button {
			width: 100px;
			text-align: center;
		}
	}
</style>