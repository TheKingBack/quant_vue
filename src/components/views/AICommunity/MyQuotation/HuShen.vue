<template>
   <div>
      <div class="HuShen">
         <ul class="HSType">
            <li :class='{active:HuShenType == "HA"}' @click="GetHuShenStockType('HA')">沪A</li>
            <li :class='{active:HuShenType == "HB"}' @click="GetHuShenStockType('HB')">沪B</li>
            <li :class='{active:HuShenType == "SA"}' @click="GetHuShenStockType('SA')">深A</li>
            <li :class='{active:HuShenType == "SB"}' @click="GetHuShenStockType('SB')">深B</li>
            <li :class='{active:HuShenType == "JSB"}' @click="GetHuShenStockType('JSB')">警示板</li>
            <li :class='{active:HuShenType == "HAZS"}' @click="GetHuShenStockType('HAZS')">沪A涨速</li>
            <li :class='{active:HuShenType == "SAZS"}' @click="GetHuShenStockType('SAZS')">深A涨速</li>
         </ul>
         <div class="HSBanner">
            <ul class="HSBTitle">
               <li style="width:6%;">代码</li>
               <li style="width:7%;">名称</li>
               <li style="width:7%;">最新价</li>
               <li style="width:5%;">涨跌幅</li>
               <li style="width:7%;">买入</li>
               <li style="width:7%;">卖出</li>
               <li style="width:7%;">昨收</li>
               <li style="width:7%;">今开</li>
               <li style="width:7%;">最高</li>
               <li style="width:7%;">最低</li>
               <li style="width:8%;">成交额/万</li>
               <li style="width:8%;">成交量/手</li>
               <li style="width:8%;">持仓量/手</li>
               <li style="width:9%;">加入到自选股</li>
            </ul>
            <ul class="HSBTitle" @click="GoShareDetails(1,item.code)" v-for="item in HuShenData" :key="item.id">
               <li style="width:6%;">{{item.code | benefitFilter}}</li>
               <li style="width:7%;">{{item.name | benefitFilter}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.price).toFixed(2)}}</li>
               <li style="width:5%;color:red;">{{item.RiseFall | benefitFilter}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.buy1Vol).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.sell1Vol).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.close).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.open).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.high).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.low).toFixed(2)}}</li>
               <li style="width:8%;">{{parseFloat(item.volPrice).toFixed(2)}}</li>
               <li style="width:8%;">{{parseFloat(item.vol).toFixed(2)}}</li>
               <li style="width:8%;">{{item.ChiCang | benefitFilter}}</li>
               <li style="width:9%;color:#00aefc;" @click.stop="CollectionYesAndNo(item.id)">{{item.JoinSelfSelect | IsCollection}}</li>
            </ul>
            <div class="HSBBotton" @click="GetHuShenDataMore()">点击加载更多</div>
         </div>
      </div>
   </div>
</template>
<script>
import Global from "@/components/layout/Global"



export default {
   mounted: function() {
      this.$nextTick(function() {
            this.GetHuShenStockType("HA");
      });
	},
	components: {

	},
	data() {
		return {
         IntelligentTransactionMenu: Global.getPageMenu("IntelligentTransaction"),
      //获取数据的页码
      page:1,
      //获取的每页的个数
      pageSize:10,
      //点击加载更多所需参数
      GetMore:"",

         //页面刚创建时显示的股票类型
         HuShenType:"HA",
            
         //沪深股票数据
         HuShenData:[],
      //    HuShenData:[
      //       {
      //          code:"SH600583",
      //          name:"海油工程",
      //          LatestPrice:"6.66",
      //          RiseAndFall:"+0.61",
      //          RiseFall:"+10.083%",
      //          Purchase:"6.66",
      //          SellOut:"0.00",
      //          Yesterday:"6.05",
      //          NowOpen:"6.09",
      //          Highest:"6.66",
      //          Minimum:"6.01",
      //          Turnover:"1054.162",
      //          Volume:"67996.88",
      //          JoinSelfSelect:"0",
      //       },
      //    ],
         
		}
	},
	methods: {

            //点击根据不同类型获取数据
            GetHuShenStockType(type,page){
                  this.GetMore = type;
                  if(page){
                        this.page = ++page;
                  }else{
                       this.page = 1; 
                  }
                  if(this.HSInterval) {
                        clearInterval(this.HSInterval);
                  }
                  var self = this;
                  this.HuShenType = type;
                  var exchange;
                  var symbol = "";
                  var Type;
                  if(type == "HA"){
                        Type = 1;
                  }else if(type == "HB"){
                        Type = 2;
                  }else if(type == "SA"){
                        Type = 3;
                  }else if(type == "SB"){
                        Type = 4;
                  }else if(type == "JSB"){
                        Type = 5;
                  }else if(type == "HAZS"){
                        Type = 6;
                  }else if(type == "SAZS"){
                        Type = 7;
                  };
                  var params = {
                        // "symbols": symbol,
                        "page":this.page,
                        "pageSize":this.pageSize
                  }
                  this.GetHuShenData(params);
                  this.HSInterval = setInterval(function() {
                        self.GetHuShenData(params);
                  }, 10000);
            },

            //获取沪深股票数据
            GetHuShenData(params){
                  this.$http.get(Global.getStockNewsRequestUrl() + "/market/stock/rt",
                              {     
                                    params: params
                              }
                        ).then(function(resp){
                              var resp = resp.body;
                              // console.log(resp);
                              console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
                              if(resp.success){
                                    // resp.data && (resp.data.JoinSelfSelect = 0);
                                    for(var i= 0;i<resp.data.length;i++){
                                          resp.data[i].JoinSelfSelect = 0
                                    }
                                    if(resp.data) {
                                          // this.HuShenData = resp.data;
                                          for(var i=0;i<resp.data.length;i++){
                                                this.HuShenData.push(resp.data[i]);
                                          }  
                                    }else {
                                          this.HuShenData;
                                    }
                                    
                                    console.log("获取沪深股票数据成功！");
                                    console.log(this.HuShenData);
                              }else{
                                    console.log("获取沪深股票数据失败！")
                              }
                        },function(error){
                              console.log("获取沪深股票请求失败！")

                        })
            },

            //点击跳转到股票详情页
            GoShareDetails(id,smybol){
                  this.$router.push("/MyQuotation/ShareDetails?id=" + id + "&smybol="+ smybol)
            },

            //加载更多
            GetHuShenDataMore(){
                  this.GetHuShenStockType(this.GetMore,this.page);
            },

            //点击是否收藏
            CollectionYesAndNo(id){
                  this.$http.get(Global.getRequestUrl() + "/dev/signal/test/result",
                        {
                        headers: Global.getRequestHeader()
                        }
                  ).then(function(resp){
                        var resp = resp.body;
                        // console.log(resp);
                        console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
                        if(resp.success){
                        this.HuShenData = resp.data;
                        console.log("收藏数据成功！");
                        }else{
                        console.log("收藏数据失败！")
                        }
                  },function(error){
                        console.log("收藏请求失败！")
                  })
            },
	},
      filters: {
		IsCollection: function(val) {
			if(val == "0") {
				return "加入到自选股";
			}else if(val == "1") {
                        return "取消收藏";
                  }
            },
            benefitFilter: function(val) {
			if(val === null || val === undefined) {
				return "--";
			}
			return val;
		},
	}
}
</script>

<style lang="less" scoped>

.HuShen{
   width: 100% ;
   background-color: #fff;
   border-radius: 4px;
   padding: 20px 0 30px;
   margin-bottom: 30px;
   overflow: hidden;
   .HSType{
      width: 100% ;
      margin: 10px 0 ;
      padding:0 16px;
      overflow: hidden;
      .active{
         color: #00aefc;
         border-bottom: 2px solid #00aefc;
      }
      li{
         height: 30px;
         line-height: 30px;
         float: left;
         text-align: center;
         font-size: 16px;
         margin-right: 30px;
         cursor: pointer;
      }
   }
   .HSBanner{
      width: 100% ;
      overflow: hidden;
      .HSBTitle{
         padding:0 16px;
         border-bottom: 1px solid rgba(0,0,0,0.1);
         overflow: hidden;
         li{
            height: 32px;
            line-height: 32px;
            float: left;
            color: #999;
            text-align: center;
            font-size: 12px;
            cursor: pointer;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
         }
      }
      .HSBBotton{
         width: 272px;
         height: 42px;
         line-height: 42px;
         text-align: center;
         border: 1px solid rgba(0,0,0,0.1);
         box-shadow: 0 0 20px rgba(0,0,0,0.1);
         border-radius: 21px;
         margin: 30px auto 10px;
         font-size: 16px;
         color: #666;
         cursor: pointer;
      }
   }
}
   

</style>


