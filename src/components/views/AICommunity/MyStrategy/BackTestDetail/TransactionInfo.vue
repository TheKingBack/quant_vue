<template>
	<div class="transaction-info">
		<div style="border-bottom: 1px solid #E6E6E6; height: 36px; background-color:white; vertical-align: middle; line-height: 36px; padding-left: 20px;">
			<span><img src="/static/AICommunity/transaction-info-unselected.png"></span>
			<span style="padding-left: 5px">交易详情</span>
		</div>
		<!-- 交易详情 -->
		<div class="transactionDetails">
			<table class="table" cellspacing="0" cellpadding="0">
				<tr class="thead">
					<td class="LiftIcon" style="width:13%;height:40px;"><div class="LiftWord">委托日期</div></td>
					<td style="width:9%;height:40px;">时间</td>
					<td style="width:16%;height:40px;">标的</td>
					<td style="width:9%;height:40px;">交易类型</td>
					<td style="width:9%;height:40px;">下单类型</td>
					<td style="width:9%;height:40px;">成交数量</td>
					<td style="width:9%;height:40px;">成交价</td>
					<td style="width:9%;height:40px;">成交额</td>
					<td style="width:9%;height:40px;">平仓亏盈</td>
					<td style="width:9%;height:40px;">手续费</td>
				</tr>
			</table>
			<div class="transactionContent" v-for="item in transactionDetails" :key="item.Id">
				<table class="table1" cellspacing="0" cellpadding="0">
					<tr class="tbody" v-for="Item in item.transactionContent" :key="Item.Id">
						<td style="width:13%;height:40px;">{{Item.EntrustmentDate}}</td>
						<td style="width:9%;height:40px;">{{Item.EntrustmenTime}}</td>
						<td style="width:16%;height:40px;">{{Item.TheSubject}}</td>
						<td style="width:9%;height:40px;">{{Item.TransactionType}}</td>
						<td style="width:9%;height:40px;">{{Item.LoweSingleType}}</td>
						<td style="width:9%;height:40px;">{{Item.TransactionsNumber}}</td>
						<td style="width:9%;height:40px;">{{Item.TransactionPrice}}</td>
						<td style="width:9%;height:40px;">{{Item.Turnover}}</td>
						<td style="width:9%;height:40px;">{{Item.OffsetGainLoss}}</td>
						<td style="width:9%;height:40px;">{{Item.ServiceCharge}}</td>
					</tr>
				</table>
				<div class="BlankLine"></div>
			</div>
		</div>
	</div>
	
</template>

<script>
export default {
	data() {
		return {
			transactionDetails: [
				{	
					transactionContent:[
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"同大股份",
							TransactionType:"卖",
							LoweSingleType:"市价单",
							TransactionsNumber:"1400股",
							TransactionPrice:"22.97",
							Turnover:"32158",
							OffsetGainLoss:"0",
							ServiceCharge:"9.65",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"ST淮油",
							TransactionType:"买",
							LoweSingleType:"市价单",
							TransactionsNumber:"2500股",
							TransactionPrice:"5.97",
							Turnover:"35458",
							OffsetGainLoss:"0",
							ServiceCharge:"9.55",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"沃施股份",
							TransactionType:"卖",
							LoweSingleType:"市价单",
							TransactionsNumber:"2570股",
							TransactionPrice:"142.97",
							Turnover:"25858",
							OffsetGainLoss:"0",
							ServiceCharge:"4.85",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"同大股份",
							TransactionType:"买",
							LoweSingleType:"市价单",
							TransactionsNumber:"15660股",
							TransactionPrice:"25.97",
							Turnover:"14523",
							OffsetGainLoss:"0",
							ServiceCharge:"10.05",
						},
					],
				},
				{	
					transactionContent:[
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"同大股份",
							TransactionType:"卖",
							LoweSingleType:"市价单",
							TransactionsNumber:"1400股",
							TransactionPrice:"22.97",
							Turnover:"32158",
							OffsetGainLoss:"0",
							ServiceCharge:"9.65",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"ST淮油",
							TransactionType:"买",
							LoweSingleType:"市价单",
							TransactionsNumber:"2500股",
							TransactionPrice:"5.97",
							Turnover:"35458",
							OffsetGainLoss:"0",
							ServiceCharge:"9.55",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"沃施股份",
							TransactionType:"卖",
							LoweSingleType:"市价单",
							TransactionsNumber:"2570股",
							TransactionPrice:"142.97",
							Turnover:"25858",
							OffsetGainLoss:"0",
							ServiceCharge:"4.85",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"同大股份",
							TransactionType:"买",
							LoweSingleType:"市价单",
							TransactionsNumber:"15660股",
							TransactionPrice:"25.97",
							Turnover:"14523",
							OffsetGainLoss:"0",
							ServiceCharge:"10.05",
						},
					],
				},
				{	
					transactionContent:[
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"同大股份",
							TransactionType:"卖",
							LoweSingleType:"市价单",
							TransactionsNumber:"1400股",
							TransactionPrice:"22.97",
							Turnover:"32158",
							OffsetGainLoss:"0",
							ServiceCharge:"9.65",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"ST淮油",
							TransactionType:"买",
							LoweSingleType:"市价单",
							TransactionsNumber:"2500股",
							TransactionPrice:"5.97",
							Turnover:"35458",
							OffsetGainLoss:"0",
							ServiceCharge:"9.55",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"沃施股份",
							TransactionType:"卖",
							LoweSingleType:"市价单",
							TransactionsNumber:"2570股",
							TransactionPrice:"142.97",
							Turnover:"25858",
							OffsetGainLoss:"0",
							ServiceCharge:"4.85",
						},
						{
							EntrustmentDate:"2017-07-05",
							EntrustmenTime: "9:30",
							TheSubject:"同大股份",
							TransactionType:"买",
							LoweSingleType:"市价单",
							TransactionsNumber:"15660股",
							TransactionPrice:"25.97",
							Turnover:"14523",
							OffsetGainLoss:"0",
							ServiceCharge:"10.05",
						},
					],
				},
			],
		}
	}
}
</script>

<style lang="less" scoped>
// 当前持仓
.transactionDetails {
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
					width: 60px;
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
	.BlankLine{
		width: 100% ;
		height: 40px;
		border-bottom: 1px solid #e6e6e6;
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
