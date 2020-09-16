<template>
	<div class="customer_main">
		<div class="customer_banner">
			<div class="customer_text">
				<p>这是你展现才华的地方</p>
				<p>一起搞事情吧</p>
			</div>
		</div>
		<div class="customer_box">
			<div class="customer_box_top">
				<div class="customer_slider customer_box_left" @click="custom_left" v-bind:class="{active:isActive}">客户定制活动</div>
				<div class="customer_slider customer_box_right" @click="custom_right" v-bind:class="{actived:isActived}">官方征集活动</div>
			</div>
		</div>
		<div class="customer_content customer_cus" v-show="isShow">
			<div class="customer_content_list_te" v-for="obj in customerMessage">
				<div class="customer_list_img"><a href="/#/Shelfsignal/Customizeddetails"><img :src="obj.img" /></a></div>
				<div class="customer_list_text">
					<div class="customer_list_text_title">{{obj.title}}</div>
					<div class="customer_list_text_anther">发布者:<span >{{obj.author}}</span></div>
					<div class="customer_list_text_anther">参与人数:<span >{{obj.num}}</span></div>
					<div class="customer_list_text_anther">截止日间:<span >{{obj.time}}</span></div>
				</div>
				<div class="customer_list_money">报价: <span>{{obj.money}}</span></div>
			</div>
		</div>
		<div class="customer_content customer_offical" v-show="isHide">
			<div class="customer_content_list_te" v-for="obj in officalMessage">
				<div class="customer_list_img"><a href="/#/Shelfsignal/Officialdetails"><img :src="obj.img" /></a></div>
				<div class="customer_list_text">
					<div class="customer_list_text_title">{{obj.title}}</div>
					<div class="customer_list_text_anther">发布者:<span >{{obj.author}}</span></div>
					<div class="customer_list_text_anther">参与人数:<span >{{obj.num}}</span></div>
					<div class="customer_list_text_anther">截止日间:<span >{{obj.time}}</span></div>
				</div>
				<div class="customer_list_money">报价: <span>{{obj.money}}</span></div>
			</div>
		</div>
		<div class="customer_pag">
			<div class="pag">
				<!--<el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage3"
			      :page-size="100"
			      layout="prev, pager, next, jumper"
			      :total="1000">
			    </el-pagination>-->
			</div>
		</div>
		<div class="slider"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow:true,
				isHide:false,
				isFalse:true,
				isTrue:true,
				isFalse:false,
				isActive:true,
				isActived:false,
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
				officalMessage: [
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
					{ img: "../static/Customsignaler/icon_guanfanglogo.png", title: "需要解决怎样看量化问题", author: '小小',num:'12',time:'2017.09.15',money:'15元'},
				],
			}
		},
		methods:{
			custom_left:function(){
				this.isShow = true;
				this.isHide = false;
				this.isActive = true;
				this.isActived = false;
			},
			custom_right:function(){
				this.isHide = true;
				this.isShow = false;
				this.isActive = false;
				this.isActived = true;
			},
		}
	}
</script>

<style lang="scss">
	p{
		margin: 0;
		padding: 0;
	}
	.customer_banner{
		width: 100%;
		height: 320px;
		background: url(/static/Customsignaler/icon_banner.png) no-repeat;
		background-size: cover;
		padding-top: 180px;
		.customer_text{
			width:60%;
			height:200px;
			margin:auto;
			p{
				width: 100%;
				font-size: 38px;
				line-height: 60px;
				text-align: center;
				color: #fff;
				letter-spacing: 10px;
			}
		}
	}
	.customer_box{
		width: 100%;
		height: 73px;
		background:#e6e6e6;
		padding-top:27px;
		.customer_box_top{
			display:flex;
			flex-wrap:wrap;
			justify-content:flex-start;
			width: 400px;
			height: 46px;
			background: #ffffff;
			margin:auto;
			border-radius:23px;
			.customer_slider{
				width:200px;
				height: 46px;
				font-size:18px;
				line-height: 46px;
				text-align: center;
				border-radius: 23px;
				cursor: pointer;
				background: #fff;
				color:#333;
			}
			.active{
				background:#14aaff;
				color: #fff;
			}
			.actived{
				background:#14aaff;
				color: #fff;
			}
		}
	}
	.customer_content{
		width: 100%;
		height: 963px;
		overflow: hidden;
		.customer_content_list_te{
			width: 80%;
			height: 106px;
			margin-left: 20%;
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
				width: 60%;
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
					width: 25%;
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
				color: #EC4343;
			}
		}
	}
	
	.customer_pag{
		width: 100%;
		height: 76px;
		.pag{
			width: 30%;
			height: 36px;
			margin-left: 60%;
			margin-top: 30px;
		}
	}
	.slider{
		width: 100%;
		height: 20px;
		background:#e6e6e6;
	}
</style>