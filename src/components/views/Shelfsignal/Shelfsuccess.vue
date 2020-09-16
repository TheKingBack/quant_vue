<template>
	<div id="shelf-success">
		<div class="shelf-header">
			<img src="../../../../static/go-back.png">
			<span>上架到策略商城</span>
		</div>
		<div class="shlef-box">
			<el-row :gutter="20">
				<el-col :span="6">
					<img src="../../../../static/Shelfsignaler/icon_duihao.png"/>
				</el-col>
				<el-col :span="12">
					<span class="shelf-box-text">你的策略已提交成功</span>
				</el-col>
			</el-row>
			<el-row :gutter="20" style="margin-top: -20px;">
				<el-col :span="20" :offset="6">
					<span class="shelf-box-time">预计3个工作日内审核完成，请随时关注个人账户的消息提示，谢谢</span>
				</el-col>
			</el-row>
			<el-row :gutter="20" style="margin-top: 50px;">
				<el-col :span="3" :offset="6">
					<el-button type="primary">提交</el-button>
				</el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.shelf-header {
		width: 100%;
		height: 62px;
		background: #e6e6e6;
		margin-bottom: 42px;
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
	
	.shlef-box {
		width: 600px;
		margin: auto;
		margin-top: 112px;
		.el-row {
			margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0;
			}
		}
		.el-col {
			border-radius: 4px;
			.shelf-box-text{
				display: inline-block;
				font-size: 26px;
				color:#00AEFC;
			}
			.shelf-box-time{
				display: inline-block;
				font-size: 14px;
				color: #666666;
			}
			.el-button{
				width:170px;
				height:38px;
				background: none;
				border: 1px solid #00AEFC;
				border-radius: 19px;
				font-size: 16px;
				color:#00AEFC;
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
	}
</style>