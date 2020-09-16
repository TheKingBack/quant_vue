<template>
	<div class="position-info">
		<div style="border-bottom: 1px solid #E6E6E6; height: 36px; background-color:white; vertical-align: middle; line-height: 36px; padding-left: 20px;">
			<span><img src="/static/AICommunity/position-info-unselected.png"></span>
			<span style="padding-left: 5px">持仓&收益</span>
		</div>
		<!-- 当前持仓 -->
		<div class="CurrentHolding">
			<table class="table" cellspacing="0" cellpadding="0">
				<tr class="thead">
					<td style="width:10%;height:40px;"></td>
					<td class="LiftIcon" style="width:9%;height:40px;"><div class="LiftWord">品种</div></td>
					<td style="width:18%;height:40px;">标的</td>
					<td style="width:9%;height:40px;">多空</td>
					<td style="width:9%;height:40px;">盈亏/逐笔浮盈</td>
					<td style="width:9%;height:40px;">开仓均价</td>
					<td style="width:9%;height:40px;">持仓均价</td>
					<td style="width:9%;height:40px;">保证金</td>
					<td style="width:9%;height:40px;">当日盈亏</td>
					<td style="width:9%;height:40px;">仓位占比</td>
				</tr>
			</table>
			<div class="HoldingContent" v-for="item in CurrentHolding" :key="item.Id">
				<div class="HoldingTime">{{item.HoldingTime}}</div>
				<table class="table1" cellspacing="0" cellpadding="0">
					<tr class="tbody" v-for="Item in item.HoldingContent" :key="Item.Id">
						<td style="width:10%;height:40px;"></td>
						<td style="width:9%;height:40px;">{{Item.Varieties}}</td>
						<td style="width:18%;height:40px;">{{Item.TheSubject}}</td>
						<td style="width:9%;height:40px;">{{Item.LongShort}}</td>
						<td style="width:9%;height:40px;">{{Item.ProfitLoss}}</td>
						<td style="width:9%;height:40px;">{{Item.OpenPrice}}</td>
						<td style="width:9%;height:40px;">{{Item.PositionPrice}}</td>
						<td style="width:9%;height:40px;">{{Item.Bond}}</td>
						<td style="width:9%;height:40px;">{{Item.TodayProfitLoss}}</td>
						<td style="width:9%;height:40px;">{{Item.OccupationRatio}}</td>
					</tr>
				</table>
				<div class="Cash">
					<div class="Cash-left">Cash</div>
					<div class="Cash-right">{{item.HoldingCash}}</div>
				</div>
				<div class="InTotal">总共：{{item.HoldingInTotal}}</div>

			</div>
				
		</div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			CurrentHolding: [
				{	
					HoldingTime:"2017-07-05",
					HoldingContent:[
						{
							Varieties: "股票",
							TheSubject:"沃施股份",
							LongShort:"多仓",
							ProfitLoss:"1243",
							OpenPrice:"2570股",
							PositionPrice:"142.97",
							Bond:"0",
							TodayProfitLoss:"254",
							OccupationRatio:"4.85%",
						},
						{
							Varieties: "股票",
							TheSubject:"同大股份",
							LongShort:"多仓",
							ProfitLoss:"256",
							OpenPrice:"15660股",
							PositionPrice:"25.97",
							Bond:"0",
							TodayProfitLoss:"125",
							OccupationRatio:"10.5%",
						},
					],
					HoldingCash:"4213.27",
					HoldingInTotal:"100372.27",
				},
				{	
					HoldingTime:"2017-07-04",
					HoldingContent:[
						{
							Varieties: "股票",
							TheSubject:"沃施股份",
							LongShort:"多仓",
							ProfitLoss:"2586",
							OpenPrice:"2570股",
							PositionPrice:"2.97",
							Bond:"0",
							TodayProfitLoss:"-65",
							OccupationRatio:"4.85%",
						},
						{
							Varieties: "股票",
							TheSubject:"山东金泰",
							LongShort:"多仓",
							ProfitLoss:"2458",
							OpenPrice:"-50股",
							PositionPrice:"25.97",
							Bond:"0",
							TodayProfitLoss:"24",
							OccupationRatio:"10.5%",
						},
					],
					HoldingCash:"4213.27",
					HoldingInTotal:"100372.27",
				},
				{	
					HoldingTime:"2017-07-03",
					HoldingContent:[
						{
							Varieties: "股票",
							TheSubject:"沃施股份",
							LongShort:"多仓",
							ProfitLoss:"2586",
							OpenPrice:"2570股",
							PositionPrice:"2.97",
							Bond:"0",
							TodayProfitLoss:"-65",
							OccupationRatio:"4.85%",
						},
						{
							Varieties: "股票",
							TheSubject:"山东金泰",
							LongShort:"多仓",
							ProfitLoss:"2458",
							OpenPrice:"-50股",
							PositionPrice:"25.97",
							Bond:"0",
							TodayProfitLoss:"24",
							OccupationRatio:"10.5%",
						},
					],
					HoldingCash:"4213.27",
					HoldingInTotal:"100372.27",
				},
			],

			//当前持仓部分的时间选择器
      	value1: '2018-02-21',

		}
	}
}
</script>

<style lang="less" scoped>

// 当前持仓
.CurrentHolding {
	width: 100%;
	background-color: #fff;
	box-sizing: border-box;
	.table{
		border: 0;
		text-align: center;
		width: 100%;
		box-sizing: border-box;
		tr{
			width: 100%;
			border-bottom: 1px solid #e6e6e6;
			background-color: #f0f0f0;
			td{
				height: 4px;
				line-height: 40px;
			}
			.LiftIcon{
				.LiftWord{
					width: 36px;
					height: 100% ;
					margin: 0 auto;
					position: relative;
					&::before{
						content:"";
						width: 13px;
						height: 15px;
						background: url("/static/AICommunity/icon_huice_paixu.png");
						position: absolute;
						top: 12px;
						right: -18px;
					}
				}
			}
		}
	}
	.HoldingTime{
		width: 100% ;
		height: 40px;
		line-height: 40px;
		padding: 0 22px;
		border-bottom: 1px solid #e6e6e6;
		box-sizing: border-box;
	}
	.Cash{
		width: 100% ;
		height: 40px;
		line-height: 40px;
		padding: 0 22px;
		border-bottom: 1px solid #e6e6e6;
		box-sizing: border-box;
		.Cash-right{
			width: 52% ;
			float: right;
			font-size: 14px;
			color: #333;
		}
		.Cash-left{
			float: left;
			width: 46px;
			height: 20px;
			margin-top: 10px;
			line-height: 20px;
			text-align: center;
			font-size: 14px;
			color: #fff;
			background-color: #14aaff;
			border-radius: 4PX;
		}
	}
	.InTotal{
		width: 100% ;
		height: 40px;
		line-height: 40px;
		text-align: center;
		box-sizing: border-box;
		border-bottom: 1px solid #e6e6e6;
		font-size: 16px;
		color: #333;
		background-color: #f6f6f6;
	}
	.table1{
		border: 0;
		text-align: center;
		width: 100%;
		box-sizing: border-box;
		tr{
			width: 100%;
			border-bottom: 1px solid #e6e6e6;
			td{
				height: 4px;
				line-height: 40px;
			}
		}
	}

}

</style>