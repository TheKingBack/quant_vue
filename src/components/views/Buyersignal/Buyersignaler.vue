<template>
	<div id="buyer">
		<div class="buyer-header contain">
			<!-- <div class="buyer-header-before"></div> -->
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
			<el-row style="line-height:38px;" :gutter="20" v-for="(num,index) in buyerNumber" :key="index">
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
				<div class="LiButtonOut">
					<!-- <el-col :span="4" :offset="8"></el-col> -->
					<div style="float:left;margin-right:30px;">
						<el-button style="line-height: 20px;color: #00AEFC;border: 1px solid #00AEFC;text-align:center;"@click="show">
							<img src="/static/Buyersignal/icon_weidianjishoucang.png" v-show="isA" style="margin:0 7px;"/>
							<img src="/static/Buyersignal/icon_shoucangdianji.png" v-show="isB" style="margin:0 7px;"/>
							收藏
						</el-button>
					</div>
					<!-- <el-col :span="4"></el-col> -->
					<div style="float:right;">
						<el-dropdown trigger="click" @command="createNewSignal">
							<el-button type="primary">
								<img src="/static/Buyersignal/icon_fenxiang.png" style="margin:0 10px;"/>分享
							</el-button>
							<el-dropdown-menu slot="dropdown" class="signalCategory">
								<el-dropdown-item v-for="(cat,index) in signalCategories" :key="index" :command="cat.value">
									{{cat.label}}
								</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</div>
				</div>
			</el-row>
			<div class="Stockmarketstrategy">策略思路：1.不追高:2.威利就走：3.自我学习：4.适应股市震荡</div>
			<div class="zoom"><span>缩放：</span><span>1个月 </span><span>1年</span><span>全部</span></div>
			<div class="buyer-text-box" id="buyer-text-box" >
				<signal-chart :chartData="sg.pChartData" style="height: 190px;"></signal-chart>
			</div>
			<ul class="buyer-text-table">
				<li v-for="money in monthProfit">
					<span class="month-Profit">{{money.name}}</span>
					<span class="month-num">{{money.num}}</span>
				</li>
				<div class="buyer-chat" @click="dialogVisible = true" v-show="isBuyer">
					立即加入购物车
				</div>
				<div class="buyer-btn" @click="dialogVisible = true" v-show="isBuyer">
					1000元/月，立即订购
				</div>
				<div class="buy-btn" @click="buy" v-show="isBuy">
					信号回测详情
				</div>
				<!--支付二维码-->
				<el-dialog
				    title="微信扫码支付"
				    :visible.sync="dialogVisible"
				    size="tiny"
				    custom-class="money"
				    >
				    <img src="/static/Home/qq.png" alt="">
				    <p>支付金额：1111元</p >
				</el-dialog>
				
				<!--插入图片-->
				<!--<el-dialog
				    title="插入图片"
				    :visible.sync="dialogVisible"
				    size="tiny"
				    custom-class="select-img"
				    >
				    <div class="slider"></div>
				    <el-upload
					  class="upload-demo"
					  ref="upload"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :file-list="fileList"
					  :auto-upload="false">
					  <el-button slot="trigger" size="small" >选取文件</el-button> 
					</el-upload>
					<div class="el-dislong-btn">
					  	<button class="remove">取消</button>
					  	<button class="add">提交</button>
					</div>
				</el-dialog>-->
				<!--插入链接-->
				<!--<el-dialog
					 title="插入链接"
				    :visible.sync="dialogVisible"
				    size="tiny"
				    custom-class="link"
				    >
					<div class="link-slider"></div>
					<div class="link-box">
						<p>链接地址</p>
						<input type="text" />
						<span>http://</span>
					</div>
					<div class="link-bag">
						<p>描述</p>
						<textarea name="" rows="" cols=""></textarea>
					</div>
					<div class="link-btn">
						<button class="link-remove">取消</button>
						<button class="link-add">提交</button>
					</div>
				</el-dialog>-->
				<!--选择回测-->
				<!--<el-dialog
					title="选择回测"
				    :visible.sync="dialogVisible"
				    size="tiny"
				    custom-class="backprobe"
					>
					<div class="back-slider"></div>
					<div class="strategy">
						<span>选择策略</span>
						<select name="" id="">
							<option value="">请选择一个策略</option>
						</select>
					</div>
					<div class="strategy">
						<span class=".hc">选择回测</span>
						<select name="" id="">
							<option value="">请选择一个回测</option>
						</select>
					</div>
					<span slot="footer" class="dialog-footer">
						<el-button @click="dialogVisible = false">取消</el-button>
						<el-button type="primary" @click="dialogVisible = false">提交</el-button>
					</span>
				</el-dialog>-->
			</ul>
			<div class="sinagn-advantage">
				<span class="sinagn-advantage-title">策略优势：</span>
				<p class="sinagn-advantage-text" v-for="sign in advantageText">{{sign.text}}</p>
			</div>
			<div class="buyer-man">
				<p>购买信号的人</p>
				<div class="buy-man-img">
					<div class="buyer-head-portrait">
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="head-portrait">
							<img src="/static/Buyersignal/icon_xiangqing_dingbutouxiang.png" />
						</div>
						<div class="all-people">268人</div>
					</div>
					<!-- <div class="all-people">268人</div> -->
				</div>	
			</div>
		</div>
		<div class="buyer-middle"></div>
		<div class="discussion contain">
			<div class="discussion-area">
				 <span class="discussion-area-slider"></span>
				 <span class="discussion-area-text">讨论区</span>
			</div>
			<div class="discussion-message" v-for="distext in discussionMessage">
				<div class="discussion-message-box">
					<img :src="distext.discussionImg"/>
					<span class="discussion-message-nickname">{{distext.reply}}</span>
				</div>
				<div class="discussion-message-msg">{{distext.dis_text}}</div>
				<div class="discussion-message-reply">
					<img src="/static/Buyersignal/icon_huifu.png" alt="" />
					<span class="discussion-message-reply-msg">回复</span>
				</div>
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
	
var mockSignals = [
{owner: "不二咚", name: "银行轮动", benefits: {totalBenefitPerYear: "46.62%", max_drawback: "21.24%"}, initAmount: "30000", bought: 975,
	pChartData: {id: "signalChart1", options: [], startDate: "2016-06-11", amountMoney: "30000", frequency: "每天"}},
];
	export default {
		components: {
			SignalChart,
	},
		data() {
			return {
				dialogVisible:false,
				weixin:false,
				isShow:false,
				isA:true,
				isB:false,
				isBuyer:true,
				isBuy:false,
				signals: mockSignals,
				fileList: [
					{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
				],
				buyerMessage: [
					{ img: "../static/Buyersignal/icon_xiangqing_dingbutouxiang.png", name: "不二咚", label: '行情总在绝望中产生，猜疑中成长，欢乐中死亡' },
				],
				buyerNumber: [
					{ buy: '100', see: "200", evaluate: "300", collection: "400" }
				],
				monthProfit: [
					{ name: '每月收益', num: '0.89%' },
					{ name: '目标收益（每月）', num: 'HS300+3%' },
					{ name: '年化收益', num: '80.55%' },
					{ name: '历史达标率', num: '100%' },
					{ name: '适合资金', num: '0.89%' },
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
				discussionMessage:[
					{discussionImg:'./static/icon_xiangqing_dingbutouxiang.png',reply:'赵雷',dis_text:'瞬间忆起张爱玲的《爱》 补充：于千万人之中遇到你所要遇到的人，于千万年之中，时间的无涯的荒野中，没有早一步，也没有晚一步，刚巧赶上了，那也没有别的话好说，唯有轻轻的问一声：“噢，你也在这里吗？”'},
					{discussionImg:'./static/icon_xiangqing_dingbutouxiang.png',reply:'张碧晨',dis_text:'以前高中打游戏。 经常去网吧通宵。 前面坐个长发妹子。 很长的那种。 每次玩上课睡觉她总会把扎着头发放开 。 多年后同学会发现她剪了短发。 依然那么漂亮。 问她为什么剪了。 她说其实她不喜欢留长头发。 留长头发是为了她后面经常熬夜的少年能够睡个安稳觉不被老师发现。现在不见多年。”'}
				],
				signalCategories: [
				{value: "stock", label: "股票"},
				{value: "futures", label: "期货"},
				{value: "forex", label: "外汇"},
				{value: "bond", label: "债券"},
				{value: "options", label: "期权"}
			],
			}
		},
		methods: {

			createNewSignal() {},


	      submitUpload() {
	        this.$refs.upload.submit();
	      },
	      handleRemove(file, fileList) {
	        console.log(file, fileList);
	      },
	      handlePreview(file) {
	        console.log(file);
	      },
	      show:function(){
				this.isA = !this.isA;
				this.isB = !this.isB;
			},
		  toggle:function(){
				this.isShow = !this.isShow;
			},
			buy:function(){
				this.isBuyer = true;
				this.isBuy = false;
			}
	  },
	}
</script>

<style lang="scss">
.contain{
	width: 1200px;
	margin: 0 auto;
}
body{
	background-color: #fff;
}
	.buyer-header {
		// width: 100%;
		height: 64px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin: 18px auto;
		.buyer-header-before {
			width: 15%;
		}
		.buyer-header-img {
			width: 58px;
			height: 58px;
			border: 1px solid #AAAAAA;
			border-radius: 50%;
			// padding: 4px;
			img{
				width: 58px;
				height: 58px;
			}
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
		.LiButtonOut{
			float: right;
		}
		.el-row {
			// margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.el-col {
			border-radius: 4px;
			font-size: 14px;
			color: #999999;
			position: relative;
			.buyer-share{
				width: 88px;
				height: 96px;
				position: absolute;
				top: 50px;
				left: 10px;
				padding: 20px 10px;
				border:1px solid #999;
				border-radius:4px;
				z-index:100;
				span{
					display: inline-block;
					width: 0;
				    height: 0;
				    border-left: 10px solid transparent;
				    border-right: 10px solid transparent;
				    border-bottom: 10px solid #999;
				    position: absolute;
				    top: -10px;
				    left: 30px;
				}
				div{
					font-size: 14px;
					color: #666666;
					line-height: 29px;
					cursor: pointer;
					img{
						display: inline-block;
						margin-left: 10px;
						margin-right: 10px;
					}
				}
			}
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
			line-height: 20px;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			.hollow{
				display: inline-block;
				width: 27px;
				height: 17px;
				margin-left: 10px;
				background: url(/static/Buyersignal/icon_weidianjishoucang.png) no-repeat;
				background: cover;
			}
			.solid{
				display: inline-block;
				width: 27px;
				height: 17px;
				margin-left: 10px;
				background: url(/static/Buyersignal/icon_shoucangdianji.png) no-repeat;
				background: cover;
			}
		}
		.Stockmarketstrategy {
			width: 100%;
			font-size: 14px;
			color: #333333;
			line-height: 30px;
		}
		.zoom {
			width: 100%;
			font-size: 12px;
			color: #999999;
			line-height: 30px;
			span {
				display: inline-block;
				margin-right: 10px;
			}
		}
		.buyer-text-box {
			width: 1220px;
			border: 1px solid #e4e4e4;
			height: 170px;
			padding: 10px 0;
			margin-bottom: 40px;
		}
		.buyer-text-table {
			width: 1220px;
			height: 120px;
			border: 1px solid #999999;
			margin:0;
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
			li:before {
				content: '';
				height: 50px;
				width: 1px;
				background: #999999;
				position: absolute;
				top: 50px;
				left: 200px;
			}
			.buyer-chat{
				width: 180px;
				height: 35px;
				background: #EC4343;
				border-radius: 4px;
				position: absolute;
				right: 10px;
				top: 20px;
				text-align: center;
				line-height: 35px;
				color: #ffffff;
				font-size: 14px;
				cursor: pointer;
			}
			.buyer-btn {
				width: 180px;
				height: 35px;
				background: #EC4343;
				border-radius: 4px;
				position: absolute;
				right: 10px;
				bottom: 20px;
				text-align: center;
				line-height: 35px;
				color: #ffffff;
				font-size: 14px;
				cursor: pointer;
			}
			.buy-btn {
				width: 180px;
				height: 35px;
				background: #00A0E9;
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
			margin:20px 0 20px 0;
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
			margin-bottom:80px;
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
			margin:30px auto 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			position: relative;
			overflow: hidden;
			.buyer-head-portrait {
				// width: 510px;
				width: 560px;
				height: 60px;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				margin-left:350px;
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
				.all-people {
					width: 60px;
					height: 60px;
					color: #fff;
					font-size: 16px;
					text-align: center;
					line-height: 60px;
					display: inline-block;
					background: #F5B55B;
					border-radius: 50%;
					margin-left: -13px;
					border: 2px solid #fff;
				}
			}
			// .all-people {
			// 	width: 60px;
			// 	height: 60px;
			// 	color: #fff;
			// 	font-size: 16px;
			// 	text-align: center;
			// 	line-height: 60px;
			// 	display: inline-block;
			// 	background: #F5B55B;
			// 	border-radius: 50%;
			// 	margin-left: -15px;
			// 	border: 2px solid #fff;
			// }
		}
		
	}
	.discussion{
		width: 1200px;
		margin: auto;
		.discussion-area{
			width: 100%;
			height: 66px;
			border-bottom: 1px solid #e6e6e6;
			display:flex;
			flex-wrap:wrap;
			justify-content:flex-start;
			.discussion-area-slider{
				display: inline-block;
				width: 5px;
				height: 30px;
				background:#00AEFC;
				margin-right: 14px;
				margin-top: 22px;
				border-radius: 5px;
			}
			.discussion-area-text{
				display: inline-block;
				font-size: 26px;
				color: #333333;
				margin-top: 22px;
			}
		}
		.discussion-message{
			width: 100%;
			padding: 10px;
			border-bottom:1px solid #e6e6e6 ;
			.discussion-message-box{
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				margin:14px 0 16px;
				img{
				display: inline-block;
				width: 42px;
				height: 42px;
			}
			.discussion-message-nickname{
				display: inline-block;
				width: 200px;
				height: 42px;
				line-height: 42px;
				margin-left: 18px;
				font-size: 14px;
				color: #666666;
			}
			}
			.discussion-message-msg{
				width: 80%;
				font-size: 14px;
				color: #666666;
				line-height: 26px;
			}
			.discussion-message-reply{
				width: 100%;
				height: 20px;
				display: flex;
				flex-wrap:wrap ;
				justify-content: flex-start;
				margin-top: 16px;
				img{
					display: inline-block;
					width: 16px;
					height: 16px;
				}
				.discussion-message-reply-msg{
					font-size: 14px;
					color: #00AEFC;
					margin-left: 12px;
					cursor: pointer;
				}
			}
		}
		.discussion_input{
			width: 100%;
			height: 300px;
			border: 1px solid #e6e6e6;
			margin-top: 30px;
			box-shadow: #e6e6e6 2px 3px 2px 3px;
			textarea{
				width: 100%;
				height: 293px;
				border:none;
			}
		}
		.discussion_btn{
			width: 110px;
			height: 40px;
			font-size: 16px;
			color: #fff;
			margin-top: 24px;
			margin-bottom: 70px;
			.el-button{
				width: 100%;
				height: 40px;
			}
		}
	}
	.money{
		width: 210px;
		height: 250px;
		border-radius: 8px;
	}
	.select-img{
		width: 412px;
		height: 260px;
		border-radius: 8px;
		.slider{
			width: 390px;
			height: 1px;
			background: black;
		}
		.el-upload-list__item:before{
			display: none;
			
		}
		.el-upload-list__item{
			border-bottom: 1px solid gray;
		}
		.el-button--small{
			border: none;
			color: #14AAFF;
			font-size: 14px;
		}
		.el-dislong-btn{
			width:100%;
			height: 40px;
			margin-top: 50px;
			button{
				width: 110px;
				height: 40px;
				border-radius: 4px;
				color: #fff;
				font-size: 16px;
			}
			.remove{
				background: #fff;
				border:1px solid #B4B4B4;
				margin-right:100px;
				margin-left: 10px;
				color: #333;
			}
			.add{
				background: #20A0FF;
				border: none;
			}
		}
	}
	input{
		border: none;
	}
	.link{
		width: 412px;
		height: 400px;
		border-radius: 8px;
		.el-dialog__title{
				color: #333;
				font-size: 18px;
			}
		.link-slider{
			width: 380px;
			height: 1px;
			background: #666666;
		}
		.link-box{
			font-size: 16px;
			color: #333;
			position: relative;
			
			input{
				border-bottom: 1px solid #666;
				width: 350px;
				height: 25px;
				text-indent: 50px;
				font-size: 14px;
			}
			span{
				width: 50px;
				height: 25px;
				position: absolute;
				top: 40px;
				left: 0;
				font-size: 14px;
			}
		}
		.link-bag{
			width: 400px;
			textarea{
				width: 350px;
				height: 92px;
				background: #F5F5F5;
				border-radius: 4px;
			}
		}
		.link-btn{
				width:100%;
				height: 40px;
				margin-top: 20px;
				button{
					width: 110px;
					height: 40px;
					border-radius: 4px;
					color: #fff;
					font-size: 16px;
				}
				.link-remove{
					background: #fff;
					border:1px solid #B4B4B4;
					margin-right:100px;
					margin-left: 10px;
					color: #333;
				}
				.link-add{
					background: #20A0FF;
					border: none;
				}
			}
	}
	select{
		border: none;
	}
	button{
		border: none;
		background: #fff;
	}
	.backprobe{
		width: 372px;
		height: 300px;
		border-radius: 8px;
		padding: 0 20px;
		position: relative;
		.back-slider{
			width: 372px;
			height: 1px;
			background: #666666;
			position: absolute;
			top: 60px;
			left: 0;
		}
		.strategy{
			width: 100%;
			height: 70px;
			.hc{
				display: inline-block;
				font-size: 16px;
				color: #333333;
				margin-bottom: 10px;
			}
			select{
				width: 100%;
				height: 30px;
				border-bottom: 1px solid #B4B4B4;
				color: #B4B4B4;
			}
		}
		.el-dialog__footer{
			margin-top: -20px;
			text-align: center;
			.el-button{
				display: inline-block;
			}
		}
	}
</style>