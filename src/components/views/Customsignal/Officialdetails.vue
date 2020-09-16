<template>
	<div>
		<div class="custom-header" @click="back()">
			<i class="space-white"></i>
			<img src="../../../../static/go-back.png">
			<span>返回列表</span>
		</div>
		<div class="custom_content">
			<div class="custom_list" v-for="obj in customerMessagetop">
				<div class="custom_img">
					<img :src="obj.img" />
				</div>
				<div class="custom_text">
					<p class="custom_text_big">{{obj.author}}</p>
					<p class="custom_text_small">{{obj.title}}</p>
				</div>
				<div class="custom_btn">
					<el-button type="primary" @click="submit()">我要报名</el-button>
				</div>
			</div>
			<div class="cuntom_micromall">
				<p class="micromall_title">第二期，征集国信优质信号</p>
				<div class="micromall_num">
					<div class="micromall_num_box"><span class="micromall_num_number">1548</span>查看</div>
					截止时间:<span class="micromall_num_time">2717.09.02</span>
				</div>
				<p class="custom_adv">活动优势</p>
				<p class="custom_adv_text" v-for="adv in advantageText">{{adv.text}}</p>
			</div>

			<div class="custom-man">
				<p>已参加的人</p>
				<div class="custom-man-img">
					<div class="custom-head-portrait" >
						<div class="head-portrait" v-for="head in protraitImg">
							<img :src="head.img" />
						</div>
					</div>
					<div class="all-people">{{protrait_num}}</div>
				</div>
			</div>
		</div>
		<div class="gray"></div>
		<div class="customer">
			<div class="customer-area">
				<span class="customer-area-slider"></span>
				<span class="customer-area-text">讨论区</span>
			</div>
			<div class="customer-message" v-for="distext in discussionMessage">
				<div class="customer-message-box">
					<img :src="distext.discussionImg" />
					<span class="customer-message-nickname">{{distext.reply}}</span>
				</div>
				<div class="customer-message-msg">{{distext.dis_text}}</div>
				<div class="customer-message-reply"><img src="../../../../static/Buyersignal/icon_huifu.png" alt="" /><span class="customer-message-reply-msg">回复</span></div>
			</div>
			<div class="customer_input">
				<textarea name="" rows="" cols=""></textarea>
			</div>
			<div class="customer_btn">
				<el-button type="primary">确认发送</el-button>
			</div>
		</div>
		<div class="gray"></div>
	</div>
</template>

<script>
		import Global from "@/components/layout/Global"
	export default {
		data() {
			return {
				protrait_num:2500,
				customerMessagetop: [
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '官方' },
				],
				advantageText: [
					{ text: "中国银行，工商银行，劳动银行三者轮动效果最好。" },
					{ text: "其实，这个策略有一个最重大的缺点：" },
					{ text: "策略设置的是0滑点，意味着实盘必须使用限价单交易。" },
					{ text: "由于这几个银行交易量都很大，前面可能有一堆的单子在排队，我们的下单结果，很有可能是不能成交的。" },
					{ text: "因为这几个银行股股价过小，而中国股市最小的变化单位是1分钱。" },
					{ text: "这就意味着，如果我们通过买一卖一交易，最少也要承担千分之二的滑点。" },
					{ text: "一买一卖就是千分之四，而策略的交易触发的价格比之差是千分之五......" },
					{ text: "所以，设置了2分钱的滑点的回测结果是这样的：" },
				],
				protraitImg:[
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
					{ img: "/static/Buyersignal/icon_xiangqing_dingbutouxiang.png"},
				],
				customerMessage: [
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小', num: '12', time: '2017.09.15', money: '15元' },
				],
				discussionMessage: [
					{ discussionImg: './static/icon_xiangqing_dingbutouxiang.png', reply: '赵雷', dis_text: '瞬间忆起张爱玲的《爱》 补充：于千万人之中遇到你所要遇到的人，于千万年之中，时间的无涯的荒野中，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话好说，唯有轻轻的问一声：“噢，你也在这里吗？”' },
					{ discussionImg: './static/icon_xiangqing_dingbutouxiang.png', reply: '张碧晨', dis_text: '以前高中打游戏。 经常去网吧通宵。 前面坐个长发妹子。 很长的那种。 每次玩上课睡觉她总会把扎着头发放开 。 多年后同学会发现她剪了短发。 依然那么漂亮。 问她为什么剪了。 她说其实她不喜欢留长头发。 留长头发是为了她后面经常熬夜的少年能够睡个安稳觉不被老师发现。现在不见多年。”' }
				],
			}
		},
		methods: {
			back: function() {
				window.history.back();
			},
			submit: function() {
				this.$http.post(Global.getRequestUrl() + "/customize/requirement/signup/", {
					headers: Global.getRequestHeader(),
					"id": 1,
				}).then(function(str) {
					var json = str.data;
					console.log(json)
					if(json.success) {
						console.log('报名成功')
					} else {
						console.error("报名失败" + "error code: " + json.err_code + ", reason: " + json.reason);
					}
				}, function(error) {
					console.error("报名失败！");
					console.error(error);
				})
			}
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	
	.custom-header {
		width: 100%;
		height: 62px;
		background: #e6e6e6;
		margin-bottom: 36px;
		.space-white {
			display: inline-block;
			width: 18%;
		}
		img {
			display: inline-block;
			margin-top: 24px;
			margin-right: 14px;
		}
		span {
			display: inline-block;
			font-size: 22px;
			color: #666666;
		}
	}
	
	.custom_content {
		width: 64%;
		padding: 0 18%;
		.custom_list {
			width: 100%;
			height: 76px;
			border-bottom: 1px solid #AAAAAA;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			.custom_img {
				width: 60px;
				height: 60px;
				padding: 1px;
				border: 1px solid #AAAAAA;
				border-radius: 50%;
				margin-right: 20px;
			}
			.custom_text {
				width: 77%;
				height: 76px;
				.custom_text_big {
					line-height: 38px;
					font-size: 18px;
					color: #333333;
				}
				.custom_text_small {
					line-height: 24px;
					font-size: 13px;
					color: #8F9399;
				}
			}
			.custom_price {
				width: 150px;
				height: 76px;
				line-height: 76px;
				font-size: 18px;
				color: #F5B55B;
				margin-right: 48px;
			}
			.custom_btn {
				width: 110px;
				height: 32px;
				margin-top: 22px;
				.el-button {
					width: 100%;
					height: 100%;
					font-size: 16px;
				}
			}
		}
		.cuntom_micromall {
			width: 100%;
			margin-top: 40px;
			.micromall_title {
				font-size: 22px;
				color: #333333;
				margin-bottom: 16px;
			}
			.micromall_num {
				margin-bottom: 36px;
				font-size: 14px;
				color: #999999;
				.micromall_num_box {
					display: inline-block;
					margin-right: 24px;
				}
			}
			.custom_adv {
				font-size: 18px;
				color: #333333;
				line-height: 26px;
				margin-bottom: 16px;
			}
			.custom_adv_text {
				font-size: 14px;
				color: #666666;
				line-height: 26px;
			}
		}
		.custom_box {
			width: 1050px;
			height: 114px;
			background: #F5F5F5;
			margin: 45px auto;
			border-radius: 8px;
			padding-top: 42px;
			.custom_bag {
				/*width: 842px;*/
				height: 80px;
				margin-left: 104px;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				li {
					list-style: none;
					width: 100px;
					height: 80px;
					margin-right: 80px;
					position: relative;
					.custom_bag_img {
						width: 60px;
						height: 60px;
						border-radius: 50%;
						margin-left: 20px;
					}
					.custom_bag_text {
						width: 100%;
						font-size: 14px;
						color: #333333;
						text-align: center;
					}
					.custom_slider {
						content: '';
						width: 110px;
						/*height: 1px;*/
						border: 1px dashed #00AEFC;
						position: absolute;
						left: 85px;
						top: 25px;
					}
				}
			}
		}
		.custom-man {
			width: 100%;
			text-align: center;
			font-size: 18px;
			color: #333333;
			position: relative;
			margin-bottom: 80px;
			.custom-man-img {
				width: 100%;
				height: 62px;
				display: inline-block;
				margin-top: 30px;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				position: relative;
				overflow: hidden;
				.custom-head-portrait {
					width: 510px;
					height: 60px;
					display: flex;
					flex-wrap: wrap;
					justify-content: flex-start;
					/*margin-left: 350px;*/
					margin: auto;
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
					text-align: center;
					line-height: 60px;
					font-size: 20px;
					color: #fff;
				}
			}
		}
		.custom-man:after {
			content: '';
			width: 30px;
			height: 2px;
			background: #00AEFC;
			position: absolute;
			top: 35px;
			left: 48.5%;
		}
	}
	
	.gray {
		width: 100%;
		height: 20px;
		background: #e6e6e6;
	}
	
	.customer {
		width: 1200px;
		margin: auto;
		.customer-area {
			width: 100%;
			height: 66px;
			border-bottom: 1px solid #e6e6e6;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			.customer-area-slider {
				display: inline-block;
				width: 3px;
				height: 30px;
				background: #00AEFC;
				margin-right: 14px;
				margin-top: 24px;
			}
			.customer-area-text {
				display: inline-block;
				font-size: 22px;
				color: #333333;
				margin-top: 24px;
			}
		}
		.customer-message {
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
				.customer-message-nickname {
					display: inline-block;
					width: 200px;
					height: 42px;
					line-height: 42px;
					margin-left: 18px;
					font-size: 14px;
					color: #666666;
				}
			}
			.customer-message-msg {
				width: 80%;
				font-size: 14px;
				color: #666666;
				line-height: 26px;
			}
			.customer-message-reply {
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
				.customer-message-reply-msg {
					font-size: 14px;
					color: #00AEFC;
					margin-left: 12px;
					cursor: pointer;
				}
			}
		}
		.customer_input {
			width: 100%;
			height: 300px;
			border: 1px solid #e6e6e6;
			margin-top: 30px;
			box-shadow: #e6e6e6 2px 3px 2px 3px;
			textarea {
				width: 1200px;
				height: 300px;
				font-size: 20px;
			}
		}
		.customer_btn {
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
</style>