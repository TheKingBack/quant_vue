<template>
 	<div class="publish-store">
 		<div class="publish_header">
 			<i class="space-white"></i>
			<img src="/static/go-back.png" style="cursor: pointer;">
			<span>发布定制信号需求</span>
 		</div>	
 		<div class="publish_content">
 			<div class="publish-text">
				<img src="/static/Shelfsignaler/icon_shangjiazuo.png"/>
				<span>上架必读</span>
				<img src="/static/Shelfsignaler/icon_shangjiayou.png"/>
			</div>
			<p class="publish-standard">1、命名的规范：（标的股票、期货等）—频率—信号名称—信号类别（官方给出选项）</p>
			<p class="publish-standard">2、信号商城只发布相对独立的信号，经过审核和信息池相关性达到一定标准后即可发布</p>
			<p class="publish-standard">3、信号说明完整、思路清晰方便审核</p>
			<form action="" class="form">
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>需求名称</span>
				<input type="text" placeholder="请输入需求名称"/>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>需求说明</span>
				<textarea name="" rows="" cols="" placeholder="请详细说明你要定制的信号需求"></textarea>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>你的报价</span>
				<input type="text" placeholder="请输入你的报价金额（价格建议在2-1000元之间）"/>
				<span class="money">元</span>
			</div>
			<div class="inputDiv">
				<img src="/static/Shelfsignaler/icon_xingxinbitian.png"/>
				<span>报名截止时间</span>
				<div class="block">
				    <el-date-picker
				      v-model="value1"
				      type="datetime"
				      placeholder="选择截止时间">
				    </el-date-picker>
			  </div>
			</div>
			<div class="shelf-btn">
				<el-button type="primary" @click="dialogVisible = true">提交</el-button>
			</div>
			<el-dialog
			  :visible.sync="dialogVisible"
			  size="tiny"
			  custom-class="publish-box"
			  >
			  <p>你的需求已发布成功，请耐心</p>
			  <p>等待大牛的报名</p>
			  <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">返回信号商城</el-button>
			    <el-button type="primary" @click="dialogVisible = false">参看发布需求</el-button>
			  </span>
			</el-dialog>
		</form>
 		</div>
 		<div class="gray"></div>
 	</div>
</template>

<script>
	 export default {
	    data() {
	      return {
	      	dialogVisible:false,
	        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: ''
      };
    }
  };
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	input{
		border: none;
	}
	.publish_header{
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
	.publish_content{
		width: 40%;
		padding: 0 30%;
		.publish-text{
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
						width: 200px;
						height: 38px;
						border-radius: 19px!important;
						margin-top: 48px;
						margin-left: 25%;
						margin-bottom: 60px;
						.el-button{
							width: 100%;
							height: 100%;
						}
					}
				}
	}
	.gray{
		width: 100%;
		height: 20px;
		background: #e6e6e6;
	}
	.publish-box{
		width: 416px;
		height: 208px;
		border-radius: 6px;
		p{
			width: 100%;
			line-height: 20px;
			text-align: center;
			font-size: 16px;
			color: #333;
		}
		.el-dialog__footer{
			text-align: center;
		}
	}
</style>
