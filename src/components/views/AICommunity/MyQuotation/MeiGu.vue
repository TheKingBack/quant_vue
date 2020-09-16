<template>
   <div>
      <div class="MeiGu">
         <ul class="MGType">
            <li :class='{active:MeiGuType == "SP500"}'@click="GoMeiGuStockType('SP500')">SP500</li>
            <li :class='{active:MeiGuType == "NASDAQ"}'@click="GoMeiGuStockType('NASDAQ')">NASDAQ100</li>
            <li :class='{active:MeiGuType == "ZGG"}'@click="GoMeiGuStockType('ZGG')">中概股</li>
            <li :class='{active:MeiGuType == "NYSEALL"}'@click="GoMeiGuStockType('NYSEALL')">NYSE全部股票</li>
            <li :class='{active:MeiGuType == "NASDAQALL"}'@click="GoMeiGuStockType('NASDAQALL')">NASDAQ全部股票</li>
            <li :class='{active:MeiGuType == "AMEXALL"}'@click="GoMeiGuStockType('AMEXALL')">AMEX全部股票</li>
         </ul>
         <div class="MGBanner">
            <ul class="MGBTitle">
               <li style="width:7%;">代码</li>
               <li style="width:8%;">名称</li>
               <li style="width:7%;">最新价</li>
               <li style="width:7%;">涨跌额</li>
               <li style="width:7%;">涨跌幅</li>
               <li style="width:7%;">买入</li>
               <li style="width:7%;">卖出</li>
               <li style="width:7%;">昨收</li>
               <li style="width:7%;">今开</li>
               <li style="width:7%;">最高</li>
               <li style="width:7%;">最低</li>
               <li style="width:7%;">成交额/万</li>
               <li style="width:7%;">成交量/手</li>
               <li style="width:8%;">加入到自选股</li>
            </ul>
            <ul class="MGBTitle" v-for="item in MeiGuData" :key="item.id" @click="GoShareDetails(item.id)">
               <li style="width:7%;">{{item.code}}</li>
               <li style="width:8%;">{{item.name}}</li>
               <li style="width:7%;color:red;">{{item.LatestPrice}}</li>
               <li style="width:7%;color:red;">{{item.RiseAndFall}}</li>
               <li style="width:7%;color:red;">{{item.RiseFall}}</li>
               <li style="width:7%;color:red;">{{item.Purchase}}</li>
               <li style="width:7%;color:red;">{{item.SellOut}}</li>
               <li style="width:7%;color:red;">{{item.Yesterday}}</li>
               <li style="width:7%;color:red;">{{item.NowOpen}}</li>
               <li style="width:7%;color:red;">{{item.Highest}}</li>
               <li style="width:7%;color:red;">{{item.Minimum}}</li>
               <li style="width:7%;">{{item.Turnover}}</li>
               <li style="width:7%;">{{item.Volume}}</li>
               <li style="width:8%;color:#00aefc;" @click.stop="CollectionYesAndNo(item.id)">{{item.JoinSelfSelect | IsCollection}}</li>
            </ul>
            <div class="MGBBotton" @click="GetMeiGuDataMore()">点击加载更多</div>
         </div>
      </div>
   </div>
</template>
<script>
import Global from "@/components/layout/Global"



export default {
   mounted: function() {
      this.$nextTick(function() {
            this.GoMeiGuStockType("SP500");
      });
	},
	components: {

	},
	data() {
		return {
         IntelligentTransactionMenu: Global.getPageMenu("IntelligentTransaction"),
         //页面刚创建时显示的股票类型
         MeiGuType:"SP500",
            
         //美股股票数据
         MeiGuData:[
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"0",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"1",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"0",     
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"1",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"0",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"1",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"0",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"1",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"0",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"1",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"0",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"1",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"0",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"1",
            },
            {
               code:"SH600583",
               name:"海油工程",
               LatestPrice:"6.66",
               RiseAndFall:"+0.61",
               RiseFall:"+10.083%",
               Purchase:"6.66",
               SellOut:"0.00",
               Yesterday:"6.05",
               NowOpen:"6.09",
               Highest:"6.66",
               Minimum:"6.01",
               Turnover:"1054.162",
               Volume:"67996.88",
               JoinSelfSelect:"0",
            },
         ],
         
		}
	},
	methods: {
      //点击根据不同类型获取数据
      GoMeiGuStockType(type){
         this.MeiGuType = type;
         var Type;
         if(type == "SP500"){
               Type = 1;
         }else if(type == "NASDAQ"){
               Type = 2;
         }else if(type == "ZGG"){
               Type = 3;
         }else if(type == "NYSEALL"){
               Type = 4;
         }else if(type == "NASDAQALL"){
               Type = 5;
         }else if(type == "AMEXALL"){
               Type = 6;
         };
         console.log(Type);
         this.$http.get(Global.getRequestUrl() + "/dev/signal/test/result",
               {     
                     params:{
                           "type":Type,
                     },
                     headers: Global.getRequestHeader()
               }
         ).then(function(resp){
               var resp = resp.body;
               console.log(resp);
               console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
               if(resp.success){
                     this.MeiGuData = resp.data;
                     console.log("获取美股股票数据成功！");
               }else{
                     console.log("获取美股股票数据失败！")
               }
         },function(error){
               console.log("获取美股股票请求失败！")

         })
      },

      //点击跳转到股票详情页
      GoShareDetails(id){
         this.$router.push("/MyQuotation/ShareDetails?id=" + id)
      },

      //加载更多
      GetMeiGuDataMore(){
         this.$http.get(Global.getRequestUrl() + "/dev/signal/test/result",
            {
               headers: Global.getRequestHeader()
            }
         ).then(function(resp){
            var resp = resp.body;
            console.log(resp);
            console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
            if(resp.success){
               this.MeiGuData = resp.data;
               console.log("获取加载更多数据成功！");
            }else{
               console.log("获取加载更多数据失败！")
            }
         },function(error){
            console.log("获取加载更多请求失败！")

         })
      },

      //点击是否收藏
      CollectionYesAndNo(id){
         this.$http.get(Global.getRequestUrl() + "/dev/signal/test/result",
            {
               headers: Global.getRequestHeader()
            }
         ).then(function(resp){
            var resp = resp.body;
            console.log(resp);
            console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
            if(resp.success){
               this.MeiGuData = resp.data;
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
		}
	}
}
</script>

<style lang="less" scoped>

.MeiGu{
   width: 100% ;
   background-color: #fff;
   border-radius: 4px;
   padding: 20px 0 30px;
   margin-bottom: 30px;
   overflow: hidden;
   .MGType{
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
   .MGBanner{
      width: 100% ;
      overflow: hidden;
      .MGBTitle{
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
      .MGBBotton{
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


