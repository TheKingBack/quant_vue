<template>
   <div>
      <div class="ShangPinQiHuo">
         <ul class="SPQHType">
            <li :class='{active:ShangPinQiHuoType == "ZZSP"}'@click="GoShangPinQiHuoStockType('ZZSP')">郑州商品交易所</li>
            <li :class='{active:ShangPinQiHuoType == "DLSP"}'@click="GoShangPinQiHuoStockType('DLSP')">大连商品交易所</li>
            <li :class='{active:ShangPinQiHuoType == "SHQH"}'@click="GoShangPinQiHuoStockType('SHQH')">上海期货交易所</li>
            <li :class='{active:ShangPinQiHuoType == "ZGJR"}'@click="GoShangPinQiHuoStockType('ZGJR')">中国金融期货交易所</li>
            <li :class='{active:ShangPinQiHuoType == "WPQH"}'@click="GoShangPinQiHuoStockType('WPQH')">外盘期货</li>
         </ul>
         <div class="SPQHBanner" v-for="item in ShangPinQiHuoData" :key="item.id">
            <div class="QiHuoCategory">{{item.Category}}</div>
            <ul class="SPQHBTitle">
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
            <ul class="SPQHBTitle" v-for="itemone in item.data" :key="itemone.id" @click="GoShareDetails(2,itemone.symbol)">
               <li style="width:6%;">{{itemone.code | benefitFilter}}</li>
               <li style="width:7%;">{{itemone.name | benefitFilter}}</li>
               <li style="width:7%;color:red;">{{parseFloat(itemone.trade).toFixed(2)}}</li>
               <li style="width:5%;color:red;">{{itemone.RiseFall | benefitFilter}}</li>
               <li style="width:7%;color:red;">{{parseFloat(itemone.bid).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(itemone.ask).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(itemone.close).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(itemone.open).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(itemone.high).toFixed(2)}}</li>
               <li style="width:7%;color:red;">{{parseFloat(itemone.low).toFixed(2)}}</li>
               <li style="width:8%;">{{parseFloat(itemone.prevsettlement).toFixed(2)}}</li>
               <li style="width:8%;">{{parseFloat(itemone.vol).toFixed(2)}}</li>
               <li style="width:8%;">{{parseFloat(itemone.position).toFixed(2)}}</li>
               <li style="width:9%;color:#00aefc;" @click.stop="CollectionYesAndNo(itemone.id)">{{itemone.JoinSelfSelect | IsCollection}}</li>
            </ul>
         </div>
      </div>
   </div>
</template>
<script>
import Global from "@/components/layout/Global"



export default {
   mounted: function() {
      this.$nextTick(function() {
            this.GoShangPinQiHuoStockType("ZZSP");
      });
	},
	components: {

	},
	data() {
		return {
         IntelligentTransactionMenu: Global.getPageMenu("IntelligentTransaction"),

         //页面刚创建时显示的股票类型
         ShangPinQiHuoType:"ZZSP",
            
         //商品期货数据
         ShangPinQiHuoData:[],
      //    ShangPinQiHuoData:[
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
      GoShangPinQiHuoStockType(type){
            if(this.SPQHInterval) {
                  clearInterval(this.SPQHInterval);
            }
            var self = this;
            this.ShangPinQiHuoType = type;
            var exchange;
            var symbol;
            var contract;
         var Type;
         if(type == "ZZSP"){
               exchange = "czce";
         }else if(type == "DLSP"){
               exchange = "dce";
         }else if(type == "SHQH"){
               exchange = "shfe";
         }else if(type == "ZGJR"){
               exchange = "cffex";
         }else if(type == "WPQH"){
               exchange = "okex";
         }
         var params = {
            "exchange": exchange,
            "symbol": symbol,
            "contract":contract,
         }
         this.GetShangPinQiHuoData(params);
            this.SPQHInterval = setInterval(function() {
                  self.GetShangPinQiHuoData(params);
            }, 10000);
      },

      //获取商品期货数据
      GetShangPinQiHuoData(params){
            this.$http.get(Global.getStockNewsRequestUrl() + "/market/future/rt",
                        {     
                              params: params
                        }
                  ).then(function(resp){
                        var resp = resp.body;
                        console.log(resp);
                        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
                        if(resp.success){
                              if(resp.data) {

                                    // for(var i=0;i<resp.data.length;i++){
                                    //       this.HuShenData.push(resp.data[i]);
                                    // }  

                                    var index = 0;
                                    for( key in resp.data){
                                          // console.log(key);
                                          var item = resp.data[key];
                                          // console.log(item);
                                          for(var i= 0;i<item.length;i++){
                                                item[i].JoinSelfSelect = 0;
                                                // item[i].Category = 0;
                                                // this.ShangPinQiHuoData.push(item[i]);
                                          }
                                          
                                          this.ShangPinQiHuoData[index] = {};
                                          var SPQHD = this.ShangPinQiHuoData[index];
                                          SPQHD[Category] = key;
                                          SPQHD[data] = item;
                                          index++;
                                    }
                              }else {
                                    this.ShangPinQiHuoData;
                              }
                              
                              console.log("获取商品期货数据成功！");
                              console.log(this.ShangPinQiHuoData);
                        }else{
                              console.log("获取商品期货数据失败！")
                        }
                  },function(error){
                        console.log("获取商品期货请求失败！")

                  })
      },

      //点击跳转到股票详情页
      GoShareDetails(id,smybol){
         this.$router.push("/MyQuotation/ShareDetails?id=" + id + "&smybol=" + smybol);
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
               this.ShangPinQiHuoData = resp.data;
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

.ShangPinQiHuo{
   width: 100% ;
   background-color: #fff;
   border-radius: 4px;
   padding: 20px 0 30px;
   margin-bottom: 30px;
   overflow: hidden;
   .SPQHType{
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
   .SPQHBanner{
      width: 100% ;
      overflow: hidden;
      .SPQHBTitle{
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
   }
}
   

</style>


