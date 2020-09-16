<template>

	<div id="shelf-store" >
		<div class="shelf-header" @click="back()">
			<i class="space-white"></i>
			<img src="/static/go-back.png" style="cursor: pointer;">
			<span>上架到策略商城</span>
		</div>
		<div class="shelf-text">
			<div class="shelf-text-text">
				<img src="/static/Shelfsignaler/icon_shangjiazuo.png"/>
				<span>上架必读</span>
				<img src="/static/Shelfsignaler/icon_shangjiayou.png"/>
			</div>
			<p class="shelf-standard">1、命名的规范：（标的股票、期货等）—频率—信号名称—信号类别（官方给出选项）</p>
			<p class="shelf-standard">2、信号商城只发布相对独立的信号，经过审核和信息池相关性达到一定标准后即可发布</p>
			<p class="shelf-standard">3、信号说明完整、思路清晰方便审核</p>
		<form action="" class="form">
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>交易名称</span>
				<input class="shelf_name" type="text" placeholder="建议策略名称要有吸引力，提高成单量"/>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>选择分类</span>
				<select name="" class="testSelect">
					<option value="1">请选择分类1</option>
					<option value="2">请选择分类2</option>
					<option value="3">请选择分类3</option>
					<option value="4">请选择分类4</option>
				</select>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>交易思路</span>
				<textarea class="textareaText" name="" rows="" cols="" placeholder="请简要描述交易思路"></textarea>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>策略优势</span>
				<textarea class="textarea_adv" name="" rows="" cols="" placeholder="请简要描述策略优势"></textarea>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>选择模拟交易</span>
				<select name="" class="select_transaction">
					<option value="">模拟交易1</option>
					<option value="">模拟交易2</option>
				</select>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>适合资金</span>
				<input class="shelf-money" type="text" placeholder="例如：1000"/>
				<span class="money">万元</span>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>信号的价格</span>
				<input class="shelf-price" type="text" placeholder="例如：1000"/>
				<span class="money">元</span>
			</div>
			<div class="shelf-sure">
				<img src="/static/Shelfsignaler/icon_weigouxuan.png"v-show="isBlack" @click="black"/>
				<img src="../../../../static/Shelfsignaler/icon_gouxuan.png"v-show="isYellow" @click="yellow"/>
				<span>勾选择视为同意根据平台信号优劣，对价格进行调整</span>
			</div>
			<div class="shelf-btn" @click="shelfData">
				<el-button type="primary"style="width: 200px;height: 38px;border-radius: 19px;margin-left: 180px;margin-bottom: 40px;background: #00AEFC;font-size: 16px;">提交</el-button>
			</div>
		</form>
		</div>
		<div class="shelf-foot"></div>
	</div>
</template>

<script>
import Global from "@/components/layout/Global"

export default {
	data(){
		return{
			isBlack:true,
			isYellow:false,
		}
	},
	methods:{
		shelfData:function(){
			//交易名称
			var shelf_name = document.getElementsByClassName('shelf_name')[0].value;
			//选择分类
			var testSelect = document.getElementsByClassName('testSelect')[0];
			var index = testSelect.selectedIndex;
			var shelf_testSelecttext = testSelect[index].text;
			//交易思路
			var shelf_textareaText = document.getElementsByClassName('textareaText')[0].value;
			//策略优势
			var shelf_textarea_adv = document.getElementsByClassName('textarea_adv')[0].value;
			//模拟交易
			var select_transaction = document.getElementsByClassName('select_transaction')[0];
			var num = select_transaction.selectedIndex;
			var shelf_select_transaction = select_transaction[num].text;
			//适合资金
			var shelf_money = document.getElementsByClassName('shelf-money')[0].value;
			//信号价格
			var shelf_price = document.getElementsByClassName('shelf-price')[0].value;
//			console.log(shelf_name,shelf_testSelecttext,shelf_price,shelf_textareaText,shelf_textarea_adv,shelf_select_transaction,shelf_money,);
			console.log(Global.getRequestHeader());
			
			this.$http.post(Global.getRequestUrl() + "/dev/signal/backtest/up", 
				{
					"backtestId":0,
					"name":shelf_name,
					"type":shelf_testSelecttext,
					"description":shelf_textareaText,
					"benefits":shelf_textarea_adv,
					"amount":shelf_money,
					"price":shelf_price,
					"allow_adjust":0,
					"pub_source":0
				},
				{
					headers: Global.getRequestHeader(),
				}
			).then(function(str){
				var json =  str.data;
				console.log(json)
				if(json.success){
					console.log('上架信号成功')
				}else{
					console.error("上架信号失败" + "error code: " + json.code + ", reason: "+ json.msg);
				}
			},function(error){
				console.error("上架信号失败！");
				console.error(error);
			})
			
		},
		black:function(){
			this.isBlack = false;
			this.isYellow = true;
		},
		yellow:function(){
			this.isBlack = true;
			this.isYellow = false;
		},
		back:function(){
			window.history.back();
		}
	}
	
}
</script>

<style lang="scss">
	body{
		overflow-x: hidden;
	}
	input{
		border: none;
	}
	select{
		border: none;
	}
	.shelf-header{
		width: 100%;
		height: 62px;
		background: #e6e6e6;
		margin-bottom: 42px;
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
	.shelf-text{
		width: 600px;
		margin: auto;
		.shelf-text-text{
			width: 250px;
			height: 20px;
			margin:0 auto 24px;
			span{
				display: inline-block;
				margin: 0 20px;
				font-size: 20px;
				color: #00AEFC;
			}
		}
		.shelf-standard{
			font-size: 14px;
			color: #666666;
			line-height: 30px;
		}
		.form{
			margin-top: 52px;
			margin-left: 25px;
			.inputDiv{
				width: 578px;
				/*height: 30px;*/
				margin-bottom:30px;
				position:relative;
				span{
					display: inline-block;
					font-size: 16px;
					color: #333333;
					margin-bottom: 10px;
				}
				input{
					display: block;
					width: 578px;
					height: 30px;
					border-bottom:1px solid #dcdcdc;
					font-size: 14px;
					color: #999999;
					position: relative;
				}
				.money{
						display: inline-block;
						position: absolute;
						right: 0;
						bottom: 0;
					}
				select{
					display: block;
					width: 578px;
					height: 30px;
					border-bottom:1px solid #dcdcdc;
					font-size: 14px;
					color: #999999;
				}
				textarea{
					display: block;
					padding: 16px 20px;
					width: 538px;
					height: 50px;
					font-size: 14px;
					color: #999999;
					background: #F5F5F5;
					border:1px solid #dcdcdc;
					border-radius: 4px;
					opacity:1;
				}
			}
			.shelf-sure{
				width: 100%;
				height: 20PX;
				margin-top: -20px;
				img{
					display: inline-block;
					float: left;
					margin-right: 10px;
				}
				span{
					display: inline-block;
					float: left;
					line-height: 15px;
					font-size: 12px;
					color: #F5B050;
				}			
			}
			.shelf-btn{
				width: 100%;
				margin-top: 48px;
			}
		}
	}
	.shelf-foot{
		width: 100%;
		height: 20px;
		background: #e6e6e6;
	}
</style>