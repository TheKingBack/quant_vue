<template>
	<div>
	<!-- 取消收藏模态框 -->
	<div class="cancelCollection">
		<div class="cancelCollection-center">
			<div class="cancelCollection-top">
				你确定要取消收藏吗？
			</div>
			<div class="cancelCollection-button">
				<div class="button-left" @click="CloseCancelCollection">取消</div>
				<div class="button-right" @click="CancelCollection">确定</div>
			</div>
		</div>
	</div>
      <!-- 信息展示 -->
      <div class="MyCollection-prodect contain">
         <div class="MyCollection-prodectTop">
            <div class="MyCollection-myCollection" style="cursor:pointer" @click='SignalCityS' :class="{active:signalcityS}">信号商城</div>
         	<div class="MyCollection-myCollection" style="cursor:pointer" @click='AssetStewardship' :class="{active:assetstewardship}">资产管家</div>
         	<div class="MyCollection-myCollection" style="cursor:pointer" @click='SignalRing' :class="{active:signalring}">信号擂台</div>
         </div>
			<!-- 信号商城部分 -->
			<div class="SignalCityS" v-show="signalCityS">
				<ul class="signalCityS-chanpin contain">
					<li v-for="item in signalCitySData" :key="item.id">
						<div class="signalCityS-sirendingzhi">
							<span class="signalCityS-HeadPhoto"><img src="" alt=""></span>
							<div class="signalCityS-sirenTop">{{item.user.loginName}}</div>
						</div>
						<div class="signalCityS-title">{{item.name}}</div>
						<div class="signalCityS-article">{{item.content}}</div>
						<a class="signalCityS-chakanxiangqing" href="javaScript:;">查看详情</a>
						<div class="signalCityS-shijian">
							<span class="signalCityS-quxiaoshoucang" style="cursor:pointer" @click="OpenCancelCollection">取消收藏</span>
							{{item.createTime}}前
						</div>
					</li>
				</ul>

				<!-- 下部的分页 -->
				<div class="paging">
					<el-pagination
					background layout="prev, pager, next" 
					:total="signalCitySTotal" 
					:page-size="pageSize"
					:current-page="signalCitySCP"
					@current-change="SignalCitySCPChange">
					</el-pagination>
				</div>

			</div>
			<!-- 资产管家部分 -->
			<div class="AssetStewardship" v-show="assetStewardship">
				<ul class="AssetStewardship-chanpin contain">
					<li v-for=" item in AssetStewardshipData" :key="item.id">
						<div class="AssetStewardship-sirendingzhi">
							<span class="AssetStewardship-HeadPhoto"><img src="" alt=""></span>
							<div class="AssetStewardship-sirenTop">{{item.user.loginName}}</div>
						</div>
						<div class="AssetStewardship-title">{{item.name}}</div>
						<a class="AssetStewardship-chakanxiangqing" href="javaScript:;">查看详情</a>
						<div class="AssetStewardship-shijian">
							<span class="AssetStewardship-quxiaoshoucang" style="cursor:pointer" @click="OpenCancelCollection">取消收藏</span>
							{{item.createTime}}前

						</div>
					</li>
				</ul>
				<!-- 下部的分页 -->
				<div class="paging">
					<el-pagination 
					background layout="prev, pager, next" 
					:total="AssetStewardshipTotal" 
					:page-size="pageSize"
					:current-page="AssetStewardshipCP"
					@current-change="AssetStewardshipCPChange">
					</el-pagination>
				</div>
			</div>
			<!-- 信号擂台 -->
			<div class="SignalRing" v-show="signalRing">
				<ul class="SignalRing-chanpin contain">
					<li v-for="item in SignalRingData" :key="item.id">
						<div class="SignalRing-sirendingzhi">
							<span class="SignalRing-HeadPhoto"><img src="" alt=""></span>
							<div class="SignalRing-sirenTop">{{item.user.loginName}}</div>
						</div>
						<div class="SignalRing-title">{{item.name}}</div>
						<a class="SignalRing-chakanxiangqing" href="javaScript:;">查看详情</a>
						<div class="SignalRing-shijian">
							<span class="SignalRing-quxiaoshoucang" style="cursor:pointer" @click="OpenCancelCollection">取消收藏</span>
							{{item.createTime}}前
						</div>
					</li>
				</ul>
				<!-- 下部的分页 -->
				<div class="paging">
					<el-pagination 
					background layout="prev, pager, next" 
					:total="SignalRingTotal" 
					:page-size="pageSize"
					:current-page="SignalRingCP"
					@current-change="SignalRingCPChange">
					</el-pagination>
				</div>
			</div>
      </div>
	</div>


</template>

<script>
import  "jquery";

import Global from "@/components/layout/Global"


export default {
  data() {
    return {
			signalCityS: true,
			assetStewardship: false,

			signalRing:false,
			signalcityS: true,
			assetstewardship: false,
			signalring: false,
			itemId:"1",

			//每页显示个数
			pageSize:5,

			//信号商城
			//收藏总数
			signalCitySTotal:20,
			//当前页数
			signalCitySCP:1,
			//取到的数据
			// signalCitySData:[],
			signalCitySData:[
				{
					id:'1',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'2',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨1',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'3',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨2',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'4',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨3',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'5',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨4',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
			],
			//收藏类型
			SignalCitySType:1,

			//资产管家
			//收藏总数
			AssetStewardshipTotal:20,
			//当前页数
			AssetStewardshipCP:1,
			//取到的数据
			// AssetStewardshipData:[],
			AssetStewardshipData:[
				{
					id:'1',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨5',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'2',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨6',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'3',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨7',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'4',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨8',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'5',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨9',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
			],
			//收藏类型
			AssetStewardshipType:2,

			//信号擂台
			//收藏总数
			SignalRingTotal:20,
			//当前页数
			SignalRingCP:1,
			//取到的数据
			// SignalRingData:[],
			SignalRingData:[
				{
					id:'1',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'2',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨1',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'3',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨2',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'4',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨3',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
				{
					id:'5',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨4',
					content:"调取策略优势：秋名山上行人稀，常有高手较高低。如今秋名山依在，不见当年老司机。",
					createTime:'13分钟'
				},
			],
			//收藏类型
			SignalRingType:3,
    };
  },
  mounted: function() {
	  this.$nextTick(function() {
			this.GetMyCollectionData(this.SignalCitySType,this.signalCitySCP,this.pageSize);
		});
  },
  methods: {

	// 弹出模态框
	OpenCancelCollection: function() {
		var Height = $(window).height();
		var Width = $(window).width();
		$('.cancelCollection').css({
			"width":Width,
			"height":Height
		}).fadeIn('1000');
	},

	// 关闭模态框
	CloseCancelCollection: function () {
		$('.cancelCollection').fadeOut('1000');
	},

	// 取消收藏
	CancelCollection: function() {
		$('.cancelCollection').fadeOut('1000');
		console.log(this.itemId);
		this.$http.post(Global.getRequestUrl() + "/favor/cancel", 
			{
				"id": this.itemId
			},
			{
				headers: Global.getRequestHeader()
			}
		).then(function(resp) {
			resp = resp.body;
			if(resp.succss) {

				alert(resp.msg);
			}else {
				
				console.error("取消收藏失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
			}
		}, function(error) {
			console.error("取消收藏请求失败");
			console.error(error);
		});
	},

	// 获取分页中每一页的数据（信号商城）
	SignalCitySCPChange: function(curPage) {
			var self = this;
			self.signalCitySCP = curPage;
			console.log(self.signalCitySCP)
			//Get current page data from back end
			self.GetMyCollectionData(self.SignalCitySType,self.signalCitySCP,self.pageSize);
	},

	// 获取分页中每一页的数据（资产管家）
	AssetStewardshipCPChange: function(curPage) {
		var self = this;
		self.AssetStewardshipCP = curPage;
		//Get current page data from back end
		self.GetMyCollectionData(self.AssetStewardshipType,self.AssetStewardshipCP,self.pageSize);
	},

	// 获取分页中每一页的数据（信号擂台）
	SignalRingCPChange: function(curPage) {
		var self = this;
		self.SignalRingCP = curPage;
		//Get current page data from back end
		self.GetMyCollectionData(self.SignalRingType,self.SignalRingCP,self.pageSize);
	},

	// 点击收藏发送请求
	GetMyCollectionData: function(CType,Cpage,CpageSize) {
      this.$http.get(Global.getRequestUrl() + "/favor/list",
				{
					params: {
						'type': CType,
						'page': Cpage,
						'pageSize':CpageSize
					},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				var resp = resp.body;
				// console.log("--------------------------------------------")
				// console.log(resp);
				if(resp.success) {
					console.log("获取我的收藏列表成功!");
					if(resp.type == 1){
						this.signalCitySTotal = resp.data.pagination.total;
						this.itemId = resp.data.results.id;
						console.log("获取我的收藏，信号商城列表成功，结果为：");
						this.signalCitySData = resp.data.results;
					}else if(resp.type == 2){
						this.AssetStewardshipTotal = resp.data.pagination.total;
						this.itemId = resp.data.results.id;
						console.log("获取我的收藏，资产管家列表成功，结果为：");
						this.AssetStewardshipData = resp.data.results;
					}else if(resp.type == 3){
						this.AssetStewardshipTotal = resp.data.pagination.total;
						this.itemId = resp.data.results.id;
						console.log("获取我的收藏，信号擂台列表成功，结果为：");
						this.AssetStewardshipData = resp.data.results;
					}
				}else {
					console.error("获取收藏列表失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
			}, function(error) {
				console.error("获取收藏列表请求失败！");
				console.error(error);
			});
   },



	//第一个选项卡
	SignalCityS() {
		this.signalCityS = this.signalcityS = true,
		this.assetStewardship = this.assetstewardship = false,
		this.signalRing = this.signalring = false,
		this.GetMyCollectionData(this.SignalCitySType,this.signalCitySCP,this.pageSize);
	},
	AssetStewardship() {
		this.signalCityS = this.signalcityS = false,
		this.assetStewardship = this.assetstewardship = true,
		this.signalRing = this.signalring = false,
		this.GetMyCollectionData(this.AssetStewardshipType,this.AssetStewardshipCP,this.pageSize);
	},
	SignalRing() {
		this.signalCityS = this.signalcityS = false,
		this.assetStewardship = this.assetstewardship = false,
		this.signalRing = this.signalring = true,
		this.GetMyCollectionData(this.SignalRingType,this.SignalRingCP,this.pageSize);
	},

  }
};
</script>

<style lang="less">


// 删除订单模态框
.cancelCollection{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .cancelCollection-center{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    .cancelCollection-top{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    .cancelCollection-button{
      width: 100% ;
      padding: 0 60px ;
      box-sizing: border-box;
      .button-left,
      .button-right{
        cursor: pointer;
        width: 90px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        border-radius: 6px;
      }
      .button-left{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .button-right{
        float: right;
        background: #00aefc;
        color: #fff;
      }
    }
  }
}

.active{
	color: #00aefc;
}
//产品展示
.MyCollection-prodect {
  	overflow: hidden;
  	.MyCollection-prodectTop {
		font-size: 16px;
		overflow: hidden;
		margin: 20px 5px;
		.MyCollection-myCollection {
			display: block;
			float: left;
			margin-right: 30px;
		}
  	}

	//信号商城部分
	.SignalCityS{
		position: relative;
		margin-bottom: 30px;
		.paging{
			position: absolute;
			bottom: 30px;
			right: 60px;
		}
	}
  	.signalCityS-chanpin {
		width: 100%;
		padding: 40px 60px 82px;
		background-color: #fff;
		overflow: hidden;
		li {
			border-bottom: 1px solid #e6e6e6;
			position: relative;
			padding-bottom: 20px;
		}
		.signalCityS-sirendingzhi {
			overflow: hidden;
			margin-top: 14px;
			.signalCityS-HeadPhoto {
				display: block;
				width: 28px;
				height: 28px;
				background-color: #00aefc;
				border-radius: 50%;
				float: left;
			}
			.signalCityS-sirenTop {
				font-size: 14px;
				color: #666;
				float: left;
				margin-top: 5px;
				margin-left: 16px;
			}
		}
		.signalCityS-title {
			font-size: 16px;
			color: #666;
			margin: 14px 0;
			text-align: left;
		}
		.signalCityS-article {
			font-size: 14px;
			color: #666;
			text-align: left;
		}
		.signalCityS-chakanxiangqing {
			text-align: left;
		}
		.signalCityS-shijian {
			font-size: 12px;
			color: #999;
			position: absolute;
			right: 6px;
			top: 20px;
			.signalCityS-quxiaoshoucang {
				display: inline;
				color: #00aefc;
				margin-right: 30px;
				font-size: 12px;
			}
		}
		.signalCityS-chakanxiangqing{
			display: block;
			font-size: 14px;
			color: #00aefc;
			margin-top: 20px;
		}
  	}

	//资产管家部分
	.AssetStewardship{
		position: relative;
		margin-bottom: 30px;
		.paging{
			position: absolute;
			bottom: 30px;
			right: 60px;
		}
	}
	.AssetStewardship-chanpin {
		width: 100%;
		padding: 40px 60px 82px;
		background-color: #fff;
		overflow: hidden;
		li {
			border-bottom: 1px solid #e6e6e6;
			position: relative;
			padding-bottom: 20px;
		}
		.AssetStewardship-sirendingzhi {
			overflow: hidden;
			margin-top: 14px;
			.AssetStewardship-HeadPhoto {
				display: block;
				width: 28px;
				height: 28px;
				background-color: #00aefc;
				border-radius: 50%;
				float: left;
			}
			.AssetStewardship-sirenTop {
				font-size: 14px;
				color: #666;
				float: left;
				margin-top: 5px;
				margin-left: 16px;
			}
		}
		.AssetStewardship-title {
			font-size: 16px;
			color: #666;
			margin: 14px 0;
			text-align: left;
		}
		.AssetStewardship-chakanxiangqing {
			text-align: left;
		}
		.AssetStewardship-shijian {
			font-size: 12px;
			color: #999;
			position: absolute;
			right: 6px;
			top: 20px;
			.AssetStewardship-quxiaoshoucang {
				display: inline;
				color: #00aefc;
				margin-right: 30px;
				font-size: 12px;
			}
		}
		.AssetStewardship-chakanxiangqing{
			display: block;
			font-size: 14px;
			color: #00aefc;
			margin-top: 20px;
		}
	}
	  
	// 信号擂台
	.SignalRing{
		position: relative;
		margin-bottom: 30px;
		.paging{
			position: absolute;
			bottom: 30px;
			right: 60px;
		}
	}
	.SignalRing-chanpin {
		width: 100%;
		padding: 40px 60px 82px;
		background-color: #fff;
		overflow: hidden;
		li {
			border-bottom: 1px solid #e6e6e6;
			position: relative;
			padding-bottom: 20px;
		}
		.SignalRing-sirendingzhi {
			overflow: hidden;
			margin-top: 14px;
			.SignalRing-HeadPhoto {
				display: block;
				width: 28px;
				height: 28px;
				background-color: #00aefc;
				border-radius: 50%;
				float: left;
			}
			.SignalRing-sirenTop {
				font-size: 14px;
				color: #666;
				float: left;
				margin-top: 5px;
				margin-left: 16px;
			}
		}
		.SignalRing-title {
			font-size: 16px;
			color: #666;
			margin: 14px 0;
			text-align: left;
		}
		.SignalRing-chakanxiangqing {
			text-align: left;
		}
		.SignalRing-shijian {
			font-size: 12px;
			color: #999;
			position: absolute;
			right: 6px;
			top: 20px;
			.SignalRing-quxiaoshoucang {
				display: inline;
				color: #00aefc;
				margin-right: 30px;
				font-size: 12px;
			}
		}
		.SignalRing-chakanxiangqing{
			display: block;
			font-size: 14px;
			color: #00aefc;
			margin-top: 20px;
		}
	}
}


	

</style>
