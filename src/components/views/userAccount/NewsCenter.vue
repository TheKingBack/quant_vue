<template>
	<div>
    <!-- 信息展示 -->
    <div class="prodect contain">
      <div class="prodectTop">
        <div class="myNews" style="cursor:pointer" @click='SignalMall':class="{active:signalmall}">信号商城</div>
        <div class="myNews" style="cursor:pointer" @click='MyCity' :class="{active:mycity}">我的商城</div>
        <div class="myNews" style="cursor:pointer" @click='PersonalTailor' :class="{active:personaltailor}">私人订制</div>
        <div class="myNews" style="cursor:pointer" @click='OfficialInformation' :class="{active:officialinformation}">官方消息</div>
      </div>

      <!-- 信号商城部分 -->
      <div class="CityNews" v-show="signalMall">
        <ul class="cityNews-chanpin contain">
          <li v-for="item in CityNewsData" :key="item.id">
              <div class="cityNews-sirendingzhi">
                <span class="cityNews-HeadPhoto"><img src="" alt=""></span>
                <div class="cityNews-sirenTop">{{item.user.loginName}}</div>
              </div>
              <div class="cityNews-title">{{item.name}}</div>
              <div class="cityNews-article">
                @
                <span>{{item.otherName}}</span>
                <span class="cityNews-neirong">{{item.content}}</span>
              </div>
              <a href="javaScript:;">
                <span class="cityNews-Reply"></span> 回复</a>
              <div class="cityNews-shijian">{{item.createTime}}前</div>
          </li>
        </ul>

        <!-- 下部的分页 -->
        <div class="paging">
          <el-pagination 
          background layout="prev, pager, next" 
          :total="CityNewsTotal" 
          :page-size="pageSize"
          :current-page="CityNewsCP"
          @current-change="CityNewsCPChange">
          </el-pagination>
        </div>
      </div>

      <!-- 我的商城部分 -->
      <div class="MyCity" v-show="myCity">
        <ul class="myCity-chanpin contain">
          <li v-for="item in MyCityData" :key="item.id">
            <div class="myCity-title">{{item.name}}</div>
            <div class="myCity-article">
              @<span>{{item.otherName}}</span>
              <span class="myCity-neirong">{{item.content}}</span>

            </div>
            <a href="javaScript:;"> 
              <span class="myCity-Reply"></span> 
              回复</a>

            <div class="myCity-shijian">{{item.createTime}}前</div>
          </li>
        </ul>

        <!-- 下部的分页 -->
        <div class="paging">
          <el-pagination 
          background layout="prev, pager, next" 
          :total="MyCityTotal" 
          :page-size="pageSize"
          :current-page="MyCityCP"
          @current-change="MyCityCPChange">
          </el-pagination>
        </div>
      </div>

      <!-- 私人订制部分 -->
      <div class="DingZhi" v-show="personalTailor">
        <ul class="dingzhi-chanpin contain">
          <li v-for="item in DingZhiData" :key="item.id">
            <div class="dingzhi-sirendingzhi">
              <span class="dingzhi-HeadPhoto"><img src="" alt=""></span>
              <div class="dingzhi-sirenTop">{{item.user.loginName}}</div>
            </div>
            <div class="dingzhi-title">{{item.name}}</div>
            <div class="dingzhi-article">{{item.content}}</div>
            <a href="javaScript:;">立即查看</a>
            <div class="dingzhi-shijian">{{item.createTime}}前</div>
          </li>
        </ul>

        <!-- 下部的分页 -->
        <div class="paging">
          <el-pagination 
          background layout="prev, pager, next" 
          :total="DingZhiTotal" 
          :page-size="pageSize"
          :current-page="DingZhiCP"
          @current-change="DingZhiCPChange">
          </el-pagination>
        </div>
      </div>

      <!-- 官方消息部分 -->
      <div class="GuanFang" v-show="officialInformation">
        <ul class="guanfang-chanpin contain">
          <li v-for="item in GuanFangData" :key="item.id">
            <div class="guanfang-guanfang">
              <span class="guanfang-HeadPhoto"><img src="" alt=""></span>
              <div class="guanfang-guanfangTop">{{item.user.loginName}}</div>
            </div>
            <div class="guanfang-title">{{item.name}}</div>
            <div class="guanfang-article">{{item.content}}</div>
            <div class="guanfang-shijian">{{item.createTime}}前</div>
          </li>
        </ul>

        <!-- 下部的分页 -->
        <div class="paging">
          <el-pagination 
          background layout="prev, pager, next" 
          :total="GuanFangTotal" 
          :page-size="pageSize"
          :current-page="GuanFangCP"
          @current-change="GuanFangCPChange">
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
      signalMall:true,
      myCity:false,
      personalTailor:false,
      officialInformation:false,
      signalmall:true,
      mycity:false,
      personaltailor:false,
      officialinformation:false,


      //每页显示个数
			pageSize:5,

      //信号商城
			//收藏总数
			CityNewsTotal:20,
			//当前页数
			CityNewsCP:1,
			//取到的数据
			// CityNewsData:[],
			CityNewsData:[
				{
					id:'1',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
				{
					id:'2',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨1',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
				{
					id:'3',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨2',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
				{
					id:'4',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨3',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
				{
					id:'5',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨4',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
			],
			//收藏类型
			CityNewsType:1,

			//我的商城
			//收藏总数
			MyCityTotal:20,
			//当前页数
			MyCityCP:1,
			//取到的数据
			// MyCityData:[],
			MyCityData:[
				{
					id:'1',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
				{
					id:'2',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨1',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
				{
					id:'3',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨2',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
				{
					id:'4',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨3',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
				{
					id:'5',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨4',
          otherName:"不二咚",
					content:"\"取全部股票代码的三种方法的比较\"",
					createTime:'13分钟'
				},
			],
			//收藏类型
			MyCityType:2,

			//私人订制
			//收藏总数
			DingZhiTotal:20,
			//当前页数
			DingZhiCP:1,
			//取到的数据
			// DingZhiData:[],
			DingZhiData:[
				{
					id:'1',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨',
          otherName:"不二咚",
					content:"商家已选择了不三不四的策略，您可以继续参加新的订制活动来专区小金库",
					createTime:'13分钟'
				},
				{
					id:'2',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨1',
          otherName:"不二咚",
					content:"商家已选择了不三不四的策略，您可以继续参加新的订制活动来专区小金库",
					createTime:'13分钟'
				},
				{
					id:'3',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨2',
          otherName:"不二咚",
					content:"商家已选择了不三不四的策略，您可以继续参加新的订制活动来专区小金库",
					createTime:'13分钟'
				},
				{
					id:'4',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨3',
          otherName:"不二咚",
					content:"商家已选择了不三不四的策略，您可以继续参加新的订制活动来专区小金库",
					createTime:'13分钟'
				},
				{
					id:'5',
					user:{id:'1',mobile:'',name:'',loginName:'小小',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'苹果股票暴涨4',
          otherName:"不二咚",
					content:"商家已选择了不三不四的策略，您可以继续参加新的订制活动来专区小金库",
					createTime:'13分钟'
				},
			],
			//收藏类型
			DingZhiType:3,

      //官方消息
			//收藏总数
			GuanFangTotal:20,
			//当前页数
			GuanFangCP:1,
			//取到的数据
			// GuanFangData:[],
			GuanFangData:[
				{
					id:'1',
					user:{id:'1',mobile:'',name:'',loginName:'官方消息',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'提现成功',
          otherName:"不二咚",
					content:"您申请的提现已经到达您的账户，请注意查收，如有疑问请拨打：18730654286",
					createTime:'13分钟'
				},
				{
					id:'2',
					user:{id:'1',mobile:'',name:'',loginName:'官方消息',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'擂台第43期获奖名单',
          otherName:"不二咚",
					content:"恭喜您获得43期擂台赛第一名，如有疑问请拨打：18730654286",
					createTime:'13分钟'
				},
				{
					id:'3',
					user:{id:'1',mobile:'',name:'',loginName:'官方消息',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'提现成功',
          otherName:"不二咚",
					content:"您申请的提现已经到达您的账户，请注意查收，如有疑问请拨打：18730654286",
					createTime:'13分钟'
				},
				{
					id:'4',
					user:{id:'1',mobile:'',name:'',loginName:'官方消息',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'擂台第43期获奖名单',
          otherName:"不二咚",
					content:"恭喜您获得43期擂台赛第一名，如有疑问请拨打：18730654286",
					createTime:'13分钟'
				},
				{
					id:'5',
					user:{id:'1',mobile:'',name:'',loginName:'官方消息',avatar:'',enabled:'',introduction:'',weChatID:''},
					name:'提现成功',
          otherName:"不二咚",
					content:"您申请的提现已经到达您的账户，请注意查收，如有疑问请拨打：18730654286",
					createTime:'13分钟'
				},
			],
			//收藏类型
			GuanFangType:4,
    };
  },
  mounted: function() {
    this.$nextTick(function() {
			this.GetNewsCenterData(this.CityNewsType,this.CityNewsCP,this.pageSize);
      // this.GetNewsCenterData(this.MyCityType,this.MyCityCP,this.pageSize);
      // this.GetNewsCenterData(this.DingZhiType,this.DingZhiCP,this.pageSize);
      // this.GetNewsCenterData(this.GuanFangType,this.GuanFangCP,this.pageSize);
		});
  },
  methods: {
    // 获取分页中每一页的数据（信号商城）
	  CityNewsCPChange: function(curPage) {
			var self = this;
			self.CityNewsCP = curPage;
			console.log(self.CityNewsCP)
			//Get current page data from back end
			self.GetNewsCenterData(self.CityNewsType,self.CityNewsCP,self.pageSize);
	  },

    // 获取分页中每一页的数据（我的商城）
	  MyCityCPChange: function(curPage) {
			var self = this;
			self.MyCityCP = curPage;
			console.log(self.MyCityCP)
			//Get current page data from back end
			self.GetNewsCenterData(self.MyCityType,self.MyCityCP,self.pageSize);
	  },

    // 获取分页中每一页的数据（私人订制）
	  DingZhiCPChange: function(curPage) {
			var self = this;
			self.DingZhiCP = curPage;
			console.log(self.DingZhiCP)
			//Get current page data from back end
			self.GetNewsCenterData(self.DingZhiType,self.DingZhiCP,self.pageSize);
	  },

    // 获取分页中每一页的数据（官方消息）
	  GuanFangCPChange: function(curPage) {
			var self = this;
			self.GuanFangCP = curPage;
			console.log(self.GuanFangCP)
			//Get current page data from back end
			self.GetNewsCenterData(self.GuanFangType,self.GuanFangCP,self.pageSize);
	  },

    //页面生成发送请求
	  GetNewsCenterData: function(CType,Cpage,CpageSize) {
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
				var resp = resp.data;
        // console.log(resp)
				if(resp.success) {
					if(CType == 1){
						this.CityNewsTotal = resp.data.totalSize;
						this.itemId = resp.data.results.id;
						console.log("获取信息中心，信号商城列表成功，结果为："+ resp.data.results);
						// this.CityNewsData = resp.data.results;
						// console.log(this.CityNewsData);
					}else if(CType == 2){
						this.MyCityTotal = resp.data.totalSize;
						this.itemId = resp.data.results.id;
						console.log("获取信息中心，我的商城列表成功，结果为：" + resp.data.results);
						// this.MyCityData = resp.data.results;
						// console.log(this.MyCityData);
					}else if(CType == 3){
						this.DingZhiTotal = resp.data.totalSize;
						this.itemId = resp.data.results.id;
						console.log("获取信息中心，私人订制列表成功，结果为：" + resp.data.results);
						// this.DingZhiData = resp.data.results;
						// console.log(this.DingZhiData);
					}else if(CType == 4){
						this.GuanFangTotal = resp.data.totalSize;
						this.itemId = resp.data.results.id;
						console.log("获取信息中心，官方消息列表成功，结果为：" + resp.data.results);
            // this.GuanFangData = resp.data.results;
					}
				}else {
					console.error("获取信息中心列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {
				console.error("获取信息中心列表请求失败！");
				console.error(error);
			});
    },


    SignalMall:function(){
      this.signalMall = this.signalmall= true,
      this.myCity = this.mycity= false,
      this.personalTailor = this.personaltailor= false,
      this.officialInformation = this.officialinformation= false,
      $(this).addClass('active').siblings('div').removeClass('active');
      this.GetNewsCenterData(this.CityNewsType,this.CityNewsCP,this.pageSize);
		},
		MyCity:function(){
      this.signalMall = this.signalmall= false,
      this.myCity = this.mycity= true,
      this.personalTailor = this.personaltailor= false,
      this.officialInformation = this.officialinformation= false,
      $(this).addClass('active').siblings('div').removeClass('active');
      this.GetNewsCenterData(this.MyCityType,this.MyCityCP,this.pageSize);
		},
    PersonalTailor:function(){
      this.signalMall = this.signalmall= false,
      this.myCity = this.mycity= false,
      this.personalTailor = this.personaltailor= true,
      this.officialInformation = this.officialinformation= false,
      $(this).addClass('active').siblings('div').removeClass('active');
      this.GetNewsCenterData(this.DingZhiType,this.DingZhiCP,this.pageSize);
		},
    OfficialInformation:function(){
      this.signalMall = this.signalmall= false,
      this.myCity = this.mycity= false,
      this.personalTailor = this.personaltailor= false,
      this.officialInformation = this.officialinformation= true,
      $(this).addClass('active').siblings('div').removeClass('active');
      this.GetNewsCenterData(this.GuanFangType,this.GuanFangCP,this.pageSize);
		},

  }
}
</script>

<style lang="less">

.active{
  color: #00aefc;
}
   //产品展示
  .prodect{
    overflow: hidden;
    .prodectTop{
      font-size: 16px;
      overflow: hidden;
      margin: 20px 5px;

      .myNews{

        display: block;
        float: left;
        margin-right: 30px;
      }
    }


    //信号商城部分

    .CityNews{
      position: relative;
      margin-bottom: 30px;
      .paging{
        position: absolute;
        bottom: 30px;
        right: 60px;
      }
      .cityNews-chanpin{
        width: 100%;
        padding: 40px 60px 82px;

        background-color: #fff;
        overflow: hidden;
        li{
          border-bottom: 1px solid #e6e6e6;
          position: relative;
          padding-bottom: 20px;
        }
        .cityNews-sirendingzhi{
          overflow: hidden;
          margin-top: 14px;
          .cityNews-HeadPhoto{
              display: block;
              width: 28px;
              height: 28px;
              background-color: #00aefc;
              border-radius: 50%;
              float: left;
          }
          .cityNews-sirenTop{
              font-size: 14px;
              color: #666;
              float: left;
              margin-top: 5px;
              margin-left: 16px;
          }
        }
        .cityNews-title{
          font-size: 16px;
          color: #666;
          margin: 14px 0;
        }
        .cityNews-article{
          font-size: 12px;
          color: #666;
          .neirong{
              margin-left: 10px;
          }
        }
        .cityNews-shijian{
          font-size: 12px;
          color: #999;
          position: absolute;
          right: 6px;
          top: 20px;
        }
        a{
          display: block;
          font-size: 14px;
          color: #00aefc;
          margin-top: 20px;
          .cityNews-Reply{
              display: block;
              float: left;
              margin-right: 8px;
              width: 18px;
              height: 18px;
              background-color: #00aefc;
              background: url('/static/MyAccount/NewsCenter/icon_huifu.png') no-repeat;
          }
        }

      }
    }
    


    //我的商城部分
    .MyCity{
      position: relative;
      margin-bottom: 30px;
      .paging{
        position: absolute;
        bottom: 30px;
        right: 60px;
      }
      .myCity-chanpin{
        width: 100%;
        padding: 40px 60px 82px;
        background-color: #fff;
        overflow: hidden;
        li{
          border-bottom: 1px solid #e6e6e6;
          position: relative;
          padding-bottom: 20px;
          margin-bottom: 20px;
        }
        .myCity-sirendingzhi{
          overflow: hidden;
          margin-top: 14px;
          .myCity-sirenTop{
              font-size: 14px;
              color: #666;
              float: left;
              margin-top: 5px;
              margin-left: 16px;
          }
        }
        .myCity-title{
          font-size: 16px;
          color: #666;
          margin: 14px 0;
        }
        .myCity-article{
          font-size: 12px;
          color: #666;
          .myCity-neirong{
              margin-left: 10px;
          }
        }
        .myCity-shijian{
          font-size: 12px;
          color: #999;
          position: absolute;
          right: 6px;
          top: 20px;
        }
        a{
          display: block;
          font-size: 14px;
          color: #00aefc;
          margin-top: 20px;
          .myCity-Reply{
            display: block;
            float: left;
            margin-right: 8px;
            width: 18px;
            height: 18px;
            background-color: #00aefc;
            background: url('/static/MyAccount/NewsCenter/icon_huifu.png') no-repeat;
          }
        }
      }
    }
    


    //私人订制部分
    .DingZhi{
      position: relative;
      margin-bottom: 30px;
      .paging{
        position: absolute;
        bottom: 30px;
        right: 60px;
      }

      .dingzhi-chanpin{
        width: 100%;
        padding: 40px 60px 82px;
        background-color: #fff;
        overflow: hidden;
        li{
          border-bottom: 1px solid #e6e6e6;
          position: relative;
          padding-bottom: 20px;
          // margin-bottom: 20px;
        }
        .dingzhi-sirendingzhi{
          overflow: hidden;
          margin-top: 14px;
          .dingzhi-HeadPhoto{

            display: block;
            width: 28px;
            height: 28px;
            background-color: #00aefc;
            border-radius: 50%;
            float: left;

          }
          .dingzhi-sirenTop{

            font-size: 14px;
            color: #666;
            float: left;
            margin-top: 5px;
            margin-left: 16px;

          }
        }
        .dingzhi-title{
          font-size: 16px;
          color: #666;
          margin: 14px 0;
        }
        .dingzhi-article{
          font-size: 14px;
          color: #666;
        }
        .dingzhi-shijian{

        font-size: 12px;
        color: #999;
        position: absolute;
        right: 6px;
        top: 20px;

        }
        a{
          display: block;
          font-size: 14px;
          color: #00aefc;
          margin-top: 20px;
        }
      }
    }
    

    //官方消息部分
    .GuanFang{
      position: relative;
      margin-bottom: 30px;
      .paging{
        position: absolute;
        bottom: 30px;
        right: 60px;
      }

      .guanfang-chanpin{
        width: 100%;
        padding: 40px 60px 82px;
        background-color: #fff;
        overflow: hidden;
        li{
          border-bottom: 1px solid #e6e6e6;
          position: relative;
          padding-bottom: 20px;
        }
        .guanfang-guanfang{
          overflow: hidden;
          margin-top: 14px;
          .guanfang-HeadPhoto{
              display: block;
              width: 28px;
              height: 28px;
              background-color: #00aefc;
              border-radius: 50%;
              float: left;
          }
          .guanfang-guanfangTop{
              font-size: 14px;
              color: #666;
              float: left;
              margin-top: 5px;
              margin-left: 16px;
          }
        }
        .guanfang-title{
          font-size: 16px;
          color: #666;
          margin: 14px 0;
        }
        .guanfang-article{
          font-size: 14px;
          color: #666;
        }
        .guanfang-shijian{
          font-size: 12px;
          color: #999;
          position: absolute;
          right: 6px;
          top: 20px;
        }
        a{
          display: block;
          font-size: 14px;
          color: #00aefc;
          margin-top: 20px;
        }
      }
    }

  }



</style>
