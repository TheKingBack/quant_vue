<template>
   <div>
      <div class="SZHB">
         <ul class="HSType">
            <li :class='{active:SZHBType == "OKEXQH"}' @click="GoSZHBStockType('OKEXQH')">okex期货</li>
            <li :class='{active:SZHBType == "OKEXXH"}' @click="GoSZHBStockType('OKEXXH')">okex现货</li>
            <li :class='{active:SZHBType == "HBQH"}' @click="GoSZHBStockType('HBQH')">huobi期货</li>
            <li :class='{active:SZHBType == "HBXH"}' @click="GoSZHBStockType('HBXH')">huobi现货</li>
         </ul>
         <div class="HSBanner" v-if="SZHBType==='OKEXXH' || SZHBType==='HBXH'">
            <ul class="HSBTitle">
               <li style="width:7%;">币种</li>
               <li style="width:7%;">最高价</li>
               <li style="width:7%;">最低价</li>
               <li style="width:7%;">买入价</li>
               <li style="width:7%;">卖出价</li>
               <li style="width:7%;">涨跌额</li>
               <li style="width:7%;">昨收</li>
               <li style="width:7%;">今开</li>
               <li style="width:8%;">日最高</li>
               <li style="width:8%;">日最低</li>
               <li style="width:8%;">成交量/手</li>
               <li style="width:8%;">最新成交价</li>
               <li style="width:12%;">加入到自选股</li>
            </ul>
            <ul class="HSBTitle" v-for="item in SZHBData" :key="item.id" @click="GoShareDetails(4,item.symbol)">
               <li style="width:7%;color:red;">{{item.symbol}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.high).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.low).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.buy).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.sell).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.change).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.close).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.open).toFixed(2)}}</li>
               <li style="width:8%;color:red;">{{parseFloat(item.dayHigh).toFixed(2)}}</li>
               <li style="width:8%;color:red;">{{parseFloat(item.dayLow).toFixed(2)}}</li>
               <li style="width:8%;color:red;">{{parseFloat(item.vol).toFixed(2)}}</li>
               <li style="width:8%;color:red;">{{parseFloat(item.last).toFixed(2)}}</li>
               <li style="width:12%;color:#00aefc;" @click.stop="CollectionYesAndNo(item.id)">{{item.JoinSelfSelect | IsCollection}}</li>
            </ul>
         </div>
         <div class="HSBanner" v-else>
            <ul class="HSBTitle">
               <li style="width:6%;">币种</li>
               <li style="width:7%;">最高价</li>
               <li style="width:7%;">最低价</li>
               <li style="width:7%;">买入价</li>
               <li style="width:7%;">卖出价</li>
               <li style="width:7%;">成交量/手</li>
               <li style="width:7%;">合约价值</li>
               <li style="width:7%;">最新成交价</li>
               <li style="width:7%;">当前持仓量</li>
               <li style="width:13%;">最高买入限制价格</li>
               <li style="width:13%;">最低卖出限制价格</li>
               <li style="width:12%;">加入到自选股</li>
            </ul>
            <ul class="HSBTitle" @click="GoShareDetails(3,item.symbol)" v-for="item in SZHBData" :key="item.id">
               <li style="width:6%;color:red;">{{item.symbol}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.high).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.low).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.buy).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.sell).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.vol).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.unitAmount).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.last).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(item.hold_amount).toFixed(2)}}</li>
               <li style="width:13%;color:red;">{{parseFloat(item.limitHigh).toFixed(2)}}</li>
               <li style="width:13%;color:red;">{{parseFloat(item.limitLow).toFixed(2)}}</li>
               <li style="width:12%;color:#00aefc;" @click.stop="CollectionYesAndNo(item.contractId)">{{item.JoinSelfSelect | IsCollection}}</li>
            </ul>
         </div>
      </div>
   </div>
</template>
<script>
import Global from "@/components/layout/Global"



export default {
      created(){
            // this.connect();
            // this.initWebSocket();
      },
      mounted: function() {
            this.$nextTick(function() {
                  
            });

            this.GoSZHBStockType("OKEXQH");
             
	},
	components: {

	},
	data() {
		return {
         IntelligentTransactionMenu: Global.getPageMenu("IntelligentTransaction"),


         //页面刚创建时显示的股票类型
         SZHBType:"OKEXQH",

         //定义一个websocket
         websock: null,
            
         //沪深股票数据
         SZHBData:[],
         
		}
	},
	methods: {

            //点击根据不同类型获取数据
            GoSZHBStockType(type){
                  if(this.SZHBInterval) {
                        clearInterval(this.SZHBInterval);
                  }
                  var self = this;
                  this.SZHBType = type;
                  var exchange;
                  var symbol = "btc,eth,etc,bch,ltc,qtum,neo,xuc,eos,xrp,btg";
                  var contract = "this_week";
                  var url;
                  if(type == "OKEXQH"){
                        exchange = "okex";
                        url = "/market/coin/rt/future";
                  }else if(type == "OKEXXH"){
                        exchange = "okex";
                        url = "/market/coin/rt/spot";
                  }else if(type == "HBQH"){
                        exchange = "okex";
                        url = "/market/coin/rt/future";
                  }else if(type == "HBXH"){
                        exchange = "okex";
                        url = "/market/coin/rt/spot";
                  }
                  var params = {
                        "exchange": exchange,
                        "symbols": symbol,
                  }
                  if(type === "OKEXQH" || type === "HBQH") {
                        params.contract = contract;
                  }
                  this.getSZHBMarketData(url, params,type);
                  this.SZHBInterval = setInterval(function() {
                        self.getSZHBMarketData(url, params,type);
                  }, 10000);
            },

            //获取数字货币数据
            getSZHBMarketData(url, params,type) {
                  this.$http.get(Global.getDCMarketRequestUrl() + url,
                        {     
                              params: params
                        }
                  ).then(function(resp){
                        var resp = resp.body;
                        // console.log(resp);
                        console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
                        if(resp.success){
                              // resp.data && (resp.data.JoinSelfSelect = 0);
                              if(!resp.data) {
                                    this.SZHBData = [];
                              }else {
                                    this.SZHBData = [];
                                    if(type == "OKEXQH"){
                                          for( var key in resp.data){
                                                // console.log(key);
                                                var item = resp.data[key];
                                                // console.log(item);
                                                if(item[0] === null){
                                                      continue;
                                                }else{
                                                      for(var i= 0;i<item.length;i++){
                                                            item[i].JoinSelfSelect= "0" ;
                                                            this.SZHBData.push(item[i]);
                                                      }
                                                }
                                          }
                                    }else if(type == "OKEXXH"){
                                          this.SZHBData = resp.data;
                                          for(var i=0;i<this.SZHBData.length;i++){
                                                this.SZHBData[i].JoinSelfSelect= "0" ;
                                          }
                                    }else if(type == "HBQH"){
                                          for( var key in resp.data){
                                                // console.log(key);
                                                var item = resp.data[key];
                                                // console.log(item);
                                                if(item[0] === null){
                                                      continue;
                                                }else{
                                                      for(var i= 0;i<item.length;i++){
                                                            item[i].JoinSelfSelect= "0" ;
                                                            this.SZHBData.push(item[i]);
                                                      }
                                                }
                                          }
                                    }else if(type == "HBXH"){
                                          this.SZHBData = resp.data;
                                          for(var i=0;i<this.SZHBData.length;i++){
                                                this.SZHBData[i].JoinSelfSelect= "0" ;
                                          }
                                    }


                                    // this.SZHBData = [resp.data];
                                    
                              }
                              
                              console.log("获取数字货币数据成功！");
                              console.log(this.SZHBData);
                        }else{
                              console.log("获取数字货币数据失败！")
                        }
                  },function(error){
                        console.log("获取数字货币请求失败！")

                  })
            },

            //点击跳转到股票详情页
            GoShareDetails(id,smybol){
                  this.$router.push("/MyQuotation/ShareDetails?id=" + id + "&smybol="+ smybol)
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
                        this.SZHBData = resp.data;
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

.SZHB{
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
         }
      }
      .HSBBotton{
         width: 272px;
         height: 42px;
         line-height: 42px;
         text-align: center;
         border: 1px solid rgba(0,0,0,0.1);
         box-shadow: 0 0 5px rgba(0,0,0,0.5);
         border-radius: 21px;
         margin: 30px auto 10px;
         font-size: 16px;
         color: #666;
         cursor: pointer;
      }
   }
}
   

</style>


