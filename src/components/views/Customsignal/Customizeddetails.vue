<template>
	<div>
		<div class="custom-header" @click="back()">
			<i class="space-white"></i>
			<img src="../../../../static/go-back.png">
			<span>返回列表</span>
		</div>
		<div class="custom_content" >
			<div class="custom_list" v-for="obj in customerMessagetop">
				<div class="custom_img">
					<img :src="obj.img"/>
				</div>
				<div class="custom_text">
					<p class="custom_text_big">{{obj.author}}</p>
					<p class="custom_text_small">{{obj.title}}</p>
				</div>
				<div class="custom_price">
					需求报价：	<span>{{obj.money}}</span>元
				</div>
				<div class="custom_btn">
					 <el-button type="primary">我要报名</el-button>
				</div>
			</div>
			<div class="cuntom_micromall">
				<p class="micromall_title">苹果微商城信号</p>
				<div class="micromall_num">
					<div class="micromall_num_box"><span class="micromall_num_number">1548</span>查看</div>
					截止时间:<span class="micromall_num_time">2717.09.02</span>
				</div>
				<p class="custom_adv">策略优势</p>
				<p class="custom_adv_text" v-for="adv in advantageText">{{adv.text}}</p>
			</div>
			<div class="custom_box">
				<ul class="custom_bag">
					<li>
						<div class="custom_bag_img">
							<img src="../../../../static/Customsignaler/icon_fabuxuqiu.png" alt="" />
						</div>
						<div class="custom_bag_text">发布需求</div>
						<div class="custom_slider"></div>
					</li>
					<li>
						<div class="custom_bag_img">
							<img src="../../../../static/Customsignaler/icon_gongbuxuanrenweixuanzhong.png" alt="" />
						</div>
						<div class="custom_bag_text">预付押金</div>
						<div class="custom_slider"></div>
					</li>
					<li>
						<div class="custom_bag_img">
							<img src="../../../../static/Customsignaler/icon_jiezhibaomingxuanzhong.png" alt="" />
						</div>
						<div class="custom_bag_text">截止报名</div>
						<div class="custom_slider"></div>
					</li>
					<li>
						<div class="custom_bag_img">
							<img src="../../../../static/Customsignaler/icon_gongbuxuanrenxuanzhong.png" alt="" />
						</div>
						<div class="custom_bag_text">公布被选中的人</div>
						<div class="custom_slider"></div>
					</li>
					<li>
						<div class="custom_bag_img">
							<img src="../../../../static/Customsignaler/icon_jiaoyiwancheng.png" alt="" />
						</div>
						<div class="custom_bag_text">交易结束</div>
					</li>
				</ul>
				
			</div>
			<div class="custom-man">
				<p>购买信号的人</p>
				<div class="custom-man-img">
					<div class="custom-head-portrait">
						<div class="head-portrait" v-for="headImg in protraitImg">
							<img :src="headImg.img" />
						</div>
					</div>
					<div class="all-people">{{protrait_num}}</div>
				</div>	
			</div>
		</div>
		<div class="gray"></div>
		<div class="custom_foot">
			<div class="custom_foot_box">
				<span class="custom_text_slider"></span>
				<span class="custom_text_txt">推荐的任务</span>
			</div>
			<div class="customer_content" >
				<div class="customer_content_list" v-for="obj in customerMessage">
					<div class="customer_list_img"><img :src="obj.img" /></div>
					<div class="customer_list_text">
						<div class="customer_list_text_title">{{obj.title}}</div>
						<div class="customer_list_text_anther">发布者:<span >{{obj.author}}</span></div>
						<div class="customer_list_text_anther">参与人数:<span >{{obj.num}}</span></div>
						<div class="customer_list_text_anther">截止日间:<span >{{obj.time}}</span></div>
					</div>
					<div class="customer_list_money">报价: <span>{{obj.money}}</span></div>
				</div>
			</div>
		</div>
		<div class="gray"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				protrait_num:2500,
				customerMessagetop: [
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',money:'15'},
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
				customerMessage: [
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_touxiangf.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
				],
			}
		},
		methods:{
			back:function(){
				window.history.back();
			}
		}
	}
</script>

<style lang="scss">
	*{
		margin:0;
		padding: 0;
	}
	.custom-header {
		width: 100%;
		height: 62px;
		background: #e6e6e6;
		margin-bottom: 36px;
		.space-white{
			display: inline-block;
			width: 18%;
		}
		img{
			display: inline-block;
			margin-top: 24px;
			margin-right: 14px;
		}
		span{
			display: inline-block;
			font-size: 22px;
			color: #666666;
		}
	}
	
	.custom_content{
		width: 64%;
		padding: 0 18%;
		.custom_list{
		width: 100%;
		height: 76px;
		border-bottom:1px solid #AAAAAA;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		.custom_img{
			width: 60px;
			height: 60px;
			padding: 1px;
			border: 1px solid #AAAAAA;
			border-radius: 50%;
			margin-right: 20px;
		}
		.custom_text{
			width: 65%;
			height: 76px;
			.custom_text_big{
				line-height: 38px;
				font-size: 18px;
				color: #333333;
			}
			.custom_text_small{
				line-height: 24px;
				font-size: 13px;
				color: #8F9399;
			}
		}
		.custom_price{
			width: 150px;
			height: 76px;
			line-height: 76px;
			font-size: 18px;
			color: #F5B55B;
			margin-right: 48px;
		}
		.custom_btn{
			width:110px;
			height: 32px;
			margin-top: 22px;
			.el-button{
				width: 100%;
				height: 100%;
				font-size: 16px;
			}
		}
	}
	.cuntom_micromall{
		width:100%;
		margin-top: 40px;
		.micromall_title{
			font-size: 22px;
			color: #333333;
			margin-bottom: 16px;
		}
		.micromall_num{
			margin-bottom:36px;
			font-size: 14px;
			color: #999999;
			.micromall_num_box{
				display: inline-block;
				margin-right: 24px;
			}
		}
		.custom_adv{
			font-size: 18px;
			color: #333333;
			line-height:26px;
			margin-bottom: 16px;
		}
		.custom_adv_text{
			font-size: 14px;
			color: #666666;
			line-height: 26px;
		}
	}
	.custom_box{
		width: 1050px;
		height: 114px;
		background: #F5F5F5;
		margin:45px auto;
		border-radius: 8px;
		padding-top:42px;
		.custom_bag{
			/*width: 842px;*/
			height: 80px;
			margin-left: 104px;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			li{
				list-style: none;
				width: 100px;
				height: 80px;
				margin-right: 80px;
				position: relative;
				.custom_bag_img{
					width: 60px;
					height:60px;
					border-radius: 50%;
					margin-left: 20px;
				}
				.custom_bag_text{
					width: 100%;
					font-size: 14px;
					color: #333333;
					text-align: center;
				}
				.custom_slider{
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
			margin-bottom:80px;
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
.gray{
	width: 100%;
	height: 20px;
	background: #e6e6e6;
}
.custom_foot{
	width: 64%;
	padding: 0 18%;
	.custom_foot_box{
		font-size:22px;
		color: #333333;
		line-height: 26px;
		padding:24px 0 18px;
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		border-bottom:1px solid #e6e6e6;
		.custom_text_slider{
			display: inline-block;
			width: 3px;
			height: 26px;
			background: #00AEFC;
			margin-right: 14px;
		}
		
	}
		.customer_content{
		width: 100%;
		height: 428px;
		overflow: hidden;
		margin-bottom: 52px;
		.customer_content_list{
			width: 100%;
			height: 106px;
			display:flex;
			flex-wrap:wrap;
			justify-content:flex-start;
			border-bottom:1px solid #E6E6E6;
			.customer_list_img{
				width: 60px;
				height: 60px;
				margin-top: 28px;
				margin-right: 20px;
				background:red;
				border-radius:50%;
			}
			.customer_list_text{
				width: 70%;
				height: 50px;
				margin-top: 36px;
				display:flex;
				flex-wrap:wrap;
				justify-content:flex-start;
				.customer_list_text_title{
					width: 100%;
					font-size: 18px;
					color: #333333;
					line-height: 25px;
					margin-bottom: 5px;
				}
				.customer_list_text_anther{
					width: 23%;
					font-size: 14px;
					color: #999999;
					line-height: 25px;
				}
			}
			.customer_list_money{
				width: 20%;
				height: 50px;
				margin-top: 30px;
				text-align: center;
				line-height:50px;
				font-size: 20px;
				color: #F5b365;
			}
		}
	}
}
</style>