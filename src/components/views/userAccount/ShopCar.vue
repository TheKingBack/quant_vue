<template>

	<div>

    <!-- 删除信号模态框 -->
    <div class="deleteSignal">
      <div class="deleteSignal-center">
        <div class="deleteSignal-top">
          你确定要删除信号吗？
        </div>
        <div class="deleteSignal-button">
          <div class="button-left" @click="CloseDeleteSignal">取消</div>
          <div class="button-right" @click="DeleteOrder">确定</div>
        </div>
      </div>
    </div>


    <!-- 移入收藏模态框 -->
    <div class="moveCollection">
      <div class="moveCollection-center">
        <div class="moveCollection-top">
          你确定要将信号移入收藏吗？
        </div>
        <div class="moveCollection-button">
          <div class="button-left" @click="CloseMoveCollection">取消</div>
          <div class="button-right" @click="DeleteOrder">确定</div>
        </div>
      </div>
    </div>


    <!-- 支付完成模态框 -->
    <div class="paySuccess">
      <div class="paySuccess-center">
        <div class="paySuccess-top">
          订单支付完成
        </div>
        <div class="paySuccess-button">
          <div class="button-left" @click="ClosePaySuccess">返回购物车</div>
          <div class="button-right" @click="DeleteOrder">查看信号</div>
        </div>
      </div>
    </div>

    <!-- 支付失败模态框 -->
    <div class="payFail">
      <div class="payFail-center">
        <div class="payFail-top">
          订单支付失败
        </div>
        <div class="payFail-button">
          <div class="button-left" @click="ClosePayFail">返回购物车</div>
          <div class="button-right" @click="DeleteOrder">重新支付</div>
        </div>
      </div>
    </div>



      <!-- 产品展示 -->
      <div class="shopCar-prodect contain">
         <div class="shopCar-prodectTop">
            <div class="shopCar-myshopCar">我的购物车</div>
         </div>
         <ul class="shopCar-chanpin contain">
            <li>
               <div class="shopCar-biaotou">
                  <div class="shopCar-biaotou1">
                     <!-- <input type="checkbox" name="" id="">
                     <span>全选</span> -->
                     <el-checkbox v-model="checkAll" @change="AllChange">全选</el-checkbox>
                  </div>
                  <div class="shopCar-biaotou2">商品</div>
                  <div class="shopCar-biaotou3">价格</div>
                  <div class="shopCar-biaotou4">操作</div>
               </div>
            </li>

            <li class="shopCar-xiangqing" v-for="(item,index) in ShopCarData" :key="item.id">
               <div class="shopCar-xiangqingTop">
                  <span>商家昵称：{{item.merchantNickname}}</span>
                  <span>订单时间：{{item.dingdanTime}}</span>
                  <span>订单编号：{{item.dingdanNumber}}</span>

               </div>
               <div class="shopCar-xiangqingBottom">
                  <el-checkbox class="Choice" v-model="item.Check" :value="item.id" @change="SomeOneChange"></el-checkbox>
                  <div class="shopCar-quxian"><img src="/static/MyAccount/MyForm/icon_商城图标.png" alt=""></div>
                  <div class="shopCar-mingcheng">

                     <p>{{item.commodityName}}</p>
                     <span>剩余{{item.lastNumber}}份</span>
                     <span>订购时长：{{item.orderLength}}</span>
                     <span>到期时间：{{item.dueTime}}</span>
                  </div>
                  <div class="shopCar-jiaqian">￥：{{item.price}}</div>
                  <div class="shopCar-chaozuo">
                     <div class="shopCar-delectSignal" @click="OpenDeleteSignal">删除信号</div>
                     <div class="shopCar-moveCollection" @click="OpenMoveCollection">移入到收藏</div>

                  </div>
               </div>
            </li>
            <li class="shopCar-mairu">
               <div class="shopCar-mairu1">
                  <!-- <input type="checkbox" class="shopCar-xuanzhe">
                  <span>全选</span> -->
                  <el-checkbox v-model="checkAll" @change="AllChange">全选</el-checkbox>
               </div>
               <div class="shopCar-mairu2">删除所选信号</div>
               <div class="shopCar-mairu3">移入到收藏</div>
               <div class="shopCar-mairu4">总共有6个信号&nbsp;&nbsp;总价：<span class="zongjia">1520.00</span></div>
               <a class="shopCar-mairu5 shopCar-kuaisumai" href="javaScript:;">立即购买</a>
            </li>
         </ul>
         
      </div>

      <!-- 官方推荐 -->
      <div class="shopCar-tuijian contain">

        <p>官方推荐</p>
        <div class="shopCar-shangpin">
          <div class="shopCar-jutituijian shopCar-jutituijian1" v-for="item in Recommendation" :key="item.id">
            <div class="shopCar-jutituijianTop">
              <p>{{item.PolicyName}}</p>
              <span class="shopCar-touxiang"><img src="" alt=""></span>
              <span class="shopCar-name">{{item.userName}}</span>
              <span class="shopCar-xinhao">{{item.type}}</span>
            </div>
            <div class="shopCar-tupian"><img :src="item.image" alt=""></div>
            <ul>
              <li>
                <div class="shopCar-shouyi1">年化收益</div>
                <div class="shopCar-shouyi2">{{item.shouyi}}</div>
                <span></span>
              </li>
              <li>
                <div class="shopCar-huiche1">最大回撤</div>
                <div class="shopCar-huiche2">{{item.huice}}</div>
                <span></span>
              </li>
              <li>
                <div class="shopCar-zijin1">初始资金</div>
                <div class="shopCar-zijin2">￥：{{item.bougth}}</div>
              </li>
            </ul>
            <div class="shopCar-yigoumai">
              <div class="shopCar-shuliang">已有
                <span v-text="item.buyNumber">957</span>人购买</div>
              <a class="shopCar-lijigoumai" href="javaScript:;">立即购买</a>
            </div>
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
      //多选框
      checkAll: true,
      // checkSomeOne: "",

      //商品数据
      ShopCarData:[
        {
          Check:"false",
          commodityID:"",
          merchantNickname:'不二咚',
          dingdanTime:"2018.01.25",
          dingdanNumber:"124557426232",
          commodityName:"苹果微商城信号",
          lastNumber:"120",
          orderLength:"1个月",
          dueTime:"2017.11.12",
          price:"100.23",
        },
        {
          Check:"false",
          commodityID:"",
          merchantNickname:'剑豪',
          dingdanTime:"2018.01.25",
          dingdanNumber:"124557426232",
          commodityName:"苹果微商城信号",
          lastNumber:"120",
          orderLength:"1个月",
          dueTime:"2017.11.12",
          price:"100.23",
        },
        {
          Check:"false",
          commodityID:"",
          merchantNickname:'剑圣',
          dingdanTime:"2018.01.25",
          dingdanNumber:"124557426232",
          commodityName:"苹果微商城信号",
          lastNumber:"120",
          orderLength:"1个月",
          dueTime:"2017.11.12",
          price:"100.23",
        },
        {
          Check:"false",
          commodityID:"",
          merchantNickname:'剑姬',
          dingdanTime:"2018.01.25",
          dingdanNumber:"124557426232",
          commodityName:"苹果微商城信号",
          lastNumber:"120",
          orderLength:"1个月",
          dueTime:"2017.11.12",
          price:"100.23",
        },
        {
          Check:"false",
          commodityID:"",
          merchantNickname:'剑魔',
          dingdanTime:"2018.01.25",
          dingdanNumber:"124557426232",
          commodityName:"苹果微商城信号",
          lastNumber:"120",
          orderLength:"1个月",
          dueTime:"2017.11.12",
          price:"100.23",
        },
        {
          Check:"false",
          commodityID:"",
          merchantNickname:'贱贱',
          dingdanTime:"2018.01.25",
          dingdanNumber:"124557426232",
          commodityName:"苹果微商城信号",
          lastNumber:"120",
          orderLength:"1个月",
          dueTime:"2017.11.12",
          price:"100.23",
        },
      ],

      // 推荐数据
      Recommendation:[
        {
          PolicyName:"银行轮动（中、农、工）",
          userName:"不二咚",
          type:"信号实盘",
          image:"/static/MyAccount/MyForm/shouyitu.png",
          shouyi:"46.62%",
          huice:"21.24%",
          bougth:"30000",
          buyNumber:"957",
        },
        {
          PolicyName:"银行轮动（中、农、工）",
          userName:"不二咚",
          type:"模拟交易",
          image:"/static/MyAccount/MyForm/shouyitu.png",
          shouyi:"46.62%",
          huice:"21.24%",
          bougth:"30000",
          buyNumber:"957",
        },
        {
          PolicyName:"银行轮动（中、农、工）",
          userName:"不二咚",
          type:"信号实盘",
          image:"/static/MyAccount/MyForm/shouyitu.png",
          shouyi:"46.62%",
          huice:"21.24%",
          bougth:"30000",
          buyNumber:"957",
        }
      ],

    };
  },
  mounted: function() {
    this.$nextTick(function() {
			this.GetShopCarData();
			// this.GetShopCarData(this.SignalCitySType,this.signalCitySCP,this.pageSize);
		});
  },
  methods: {
    //多选框事件
    AllChange(val) {
      console.log(this.checkAll)
        if(this.checkAll){
          this.checkSomeOne = true;
        }else {
          this.checkSomeOne = false;
        }
    },
    SomeOneChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.ShopCarData.length;
      this.YesOrNo = checkedCount > 0 && checkedCount < this.cities.length;
    },

    //构建页面发送请求
    // GetShopCarData: function(CType,Cpage,CpageSize) {
    GetShopCarData: function() {
      this.$http.get(Global.getRequestUrl() + "/favor/list",
				{
					// params: {
					// 	'type': CType,
					// 	'page': Cpage,
					// 	'pageSize':CpageSize
					// },
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				var resp = resp.data;
				if(resp.success) {
						this.signalCitySTotal = resp.data.pagination.total;
						this.itemId = resp.data.results.id;
						console.log("获取购物车列表成功，结果为：");
						console.log(resp.data.results);
						//返回的信号类型格式应为：
						//{id: 1, name: "小市值策略1", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1}
						this.ShopCarData = resp.data.results;
						//To remove
						// this.signalListData = [
						// 	{id: 1, name: "小市值策略1", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1},
						// 	{id: 2, name: "小市值策略2", type: 1, utime: "2017-09-01", running_days: "每天", runningTimes: 1}];

						console.log(this.ShopCarData);
					
				}else {
					console.error("获取购物车列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {
				console.error("获取购物车列表请求失败！");
				console.error(error);
			});
   },

    // 弹出删除信号模态框
    OpenDeleteSignal: function() {
      var Height = $(window).height();
      var Width = $(window).width();
      $('.deleteSignal').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
    },
    // 弹出移入收藏模态框
    OpenMoveCollection: function() {
      var Height = $(window).height();
      var Width = $(window).width();
      $('.moveCollection').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
    },
    // 弹出支付完成模态框
    OpenPaySuccess: function() {
      var Height = $(window).height();
      var Width = $(window).width();
      $('.paySuccess').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
    },
    // 弹出支付失败模态框
    OpenPayFail: function() {
      var Height = $(window).height();
      var Width = $(window).width();
      $('.payFail').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
    },


    // 关闭删除信号模态框
    CloseDeleteSignal: function () {
      $('.deleteSignal').fadeOut('1000');
    },
    // 关闭移入收藏模态框
    CloseMoveCollection: function () {
      $('.moveCollection').fadeOut('1000');
    },
    // 关闭支付完成模态框
    ClosePaySuccess: function () {
      $('.paySuccess').fadeOut('1000');
    },
    // 关闭支付失败模态框
    ClosePayFail: function () {
      $('.payFail').fadeOut('1000');
    },

    // 删除订单
    DeleteOrder: function() {
      $('.deleteDingdan').fadeOut('1000');
      this.$http.post(Global.getRequestUrl() + "/favor/cancel", 
				{
					"id": this.itemId
				},
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				resp = resp.data;
				if(resp.succss) {
					//刷新信号商城列表
					this.loadMySignalCity(1);
				}else {
					console.error("下架信号失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {
				console.error("下架信号请求失败");
				console.error(error);
			});
    },
  }

}
</script>

<style lang="less">


// 删除信号模态框
.deleteSignal{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .deleteSignal-center{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    .deleteSignal-top{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    .deleteSignal-button{
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

// 移入收藏模态框
.moveCollection{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .moveCollection-center{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    .moveCollection-top{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    .moveCollection-button{
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

// 支付完成模态框
.paySuccess{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .paySuccess-center{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    .paySuccess-top{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    .paySuccess-button{
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

// 支付失败模态框
.payFail{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .payFail-center{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    .payFail-top{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    .payFail-button{
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





   //产品展示
   .shopCar-prodect{
      overflow: hidden;
      .shopCar-prodectTop{
         font-size: 16px;
         overflow: hidden;
         margin: 20px 5px;
         .shopCar-myshopCar{
            color: #00aefc;
            float: left;
            margin-right: 30px;
         }
      }
      .shopCar-chanpin{
         padding: 40px 32px;
         box-sizing: border-box;
         background-color: #fff;
         overflow: hidden;
         .shopCar-biaotou{
            width: 100%;
            height: 38px;
            padding: 0 8px;
            .shopCar-biaotou1,.shopCar-biaotou2,.shopCar-biaotou3,.shopCar-biaotou4{
               float: left;
               font-size: 14px;
               color: #999;
            }
            .shopCar-biaotou1{
               position: relative;
               padding-left: 0px;
            }
            .shopCar-biaotou2{
               margin-left: 180px;
            }
            .shopCar-biaotou3{
               margin-left: 490px;
            }
            .shopCar-biaotou4{
               margin-left: 186px;
            }
         }
         .shopCar-xiangqing{
            width: 100%;
            margin-bottom: 16px;
            box-sizing: border-box;
            border: 1px solid #f0f0f0;
            overflow: hidden;
            .shopCar-xiangqingTop{
               width: 100%;
               height: 35px;
               background-color: #f6f6f6;
               font-size: 14px;
               color: #767676;
               line-height: 35px;
               span{
                  margin: 0 30px;
               }
            }
            .shopCar-xiangqingBottom{
               width: 100%;
               height: 118px;
               padding: 12px 30px;
               position: relative;
               .Choice{
                  width: 16px;
                  height: 16px;
                  position: absolute;
                  top: 30px;
                  left: 6px;
               }
               .shopCar-quxian{
                  width: 136px;
                  height: 93px;
                  border: 1px solid #e1e1e1;
                  border-radius: 5px;
                  float: left;
               }
               .shopCar-mingcheng{
                  height: 100%;
                  float: left;
                  margin-left: 28px;
                  p{
                     font-size: 18px;
                     margin:20px 0;

                     box-sizing: border-box;
                     padding-left: 8px;

                  }
                  span{
                     font-size: 14px;
                     color: #666;
                     margin: 0 10px;
                  }
               }
               .shopCar-jiaqian{
                  height: 100%;
                  float: left;
                  line-height: 90px;
                  margin-left: 156px;
               }

               .shopCar-chaozuo{

                  height: 100%;
                  padding: 14px 0;
                  float: left;
                  margin-left: 140px;

                  .shopCar-delectSignal,
                  .shopCar-moveCollection{
                     color: #999;
                     display: block;
                     height: 40px;
                     font-size: 14px;
                     cursor: pointer;

                  }
               }
            }
         }
         .shopCar-mairu{
            width: 100%;
            height: 50px;
            line-height: 50px;
            padding-left: 8px;
            border: 1px solid #e6e6e6;
            .shopCar-mairu1,.shopCar-mairu2,.shopCar-mairu3,.shopCar-mairu4{
               float: left;
               font-size: 14px;
               color: #999;
            }
            .shopCar-xuanzhe{
               width: 16px;
               height: 16px;
               margin-left: 18px;
               margin-right: 12px;
            }
            .shopCar-mairu2{
               margin-left: 30px;
               margin-right: 18px;
            }
            .shopCar-mairu4{
               margin-left: 508px;
            }
            .shopCar-zongjia{
               font-size: 18px;
               color: #ec4343;
            }
            .shopCar-mairu5{
               width: 128px;
               height: 48px;
               background-color: #ec4343;
               color: #fff;
               float: right;
               text-align: center;
            }
         }
      }
   }

   //官方推荐

  .shopCar-tuijian {
    margin: 30px 0;
    overflow: hidden;
    p {
      display: block;
      margin: 20px 0;
      color: #333;
      font-size: 16px;
    }
    .shopCar-shangpin {
      width: 100%;
      background-color: #fff;
      padding: 22px 12px;
      box-sizing: border-box;
      overflow: hidden;
      .shopCar-jutituijian {
        width: 382px;
        height: 472px;
        float: left;
        margin: 0  10px;
        border: 1px solid #e6e6e6;
        box-sizing: border-box;
        .shopCar-jutituijianTop {
          width: 100%;
          height: 98px;
          padding-left: 20px;
          padding-right: 20px;
          box-sizing: border-box;
          p {
            display: block;
            margin-top: 20px;
            font-size: 16px;
            color: #333;
          }
          .shopCar-touxiang {
            display: block;
            float: left;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: skyblue;
          }
          .shopCar-name {
            display: block;
            float: left;
            margin-top: 12px;
            margin-left: 22px;
            font-size: 16px;
            color: #333;
          }
          .shopCar-xinhao {
            display: block;
            width: 86px;
            height: 26px;
            border: 1px solid #91dcfe;
            border-radius: 13px;
            float: right;
            line-height: 26px;
            text-align: center;
            margin-top: 10px;
            background-color: #ebf9ff;
            color: #00aefc;
          }
        }
        .shopCar-tupian {
          width: 379px;
          height: 208px;
          border: 1px solid #dcdcdc;
        }
        ul {
          width: 380px;
          height: 84px;
          border-bottom: 1px solid #e6e6e6;
          overflow: hidden;
          li {
            width: 33%;
            height: 84px;
            float: left;
            padding: 6px 0;
            position: relative;
            div {
              margin: 14px auto;
              text-align: center;
            }
            span {
              display: block;
              position: absolute;
              width: 1px;
              height: 34px;
              background-color: #dcdcdc;
              right: -1px;
              top: 26px;
            }
            .shopCar-shouyi1,
            .shopCar-huiche1,
            .shopCar-zijin1 {
              font-size: 14px;
              color: #999;
            }
            .shopCar-shouyi2,
            .shopCar-huiche2,
            .shopCar-zijin2 {
              color: #333;
              font-size: 16px;
            }
            .shopCar-shouyi2 {
              color: #f54e2d;
            }
          }
        }
        .shopCar-yigoumai {
          width: 100%;
          height: 60px;
          padding: 0 22px;
          box-sizing: border-box;
          .shopCar-shuliang {
            float: left;
            color: #333;
            font-size: 16px;
            line-height: 60px;
            span {
              color: #f54e2d;
            }
          }
          .shopCar-lijigoumai {
            display: block;
            float: right;
            width: 104px;
            height: 34px;
            border-radius: 17px;
            background-color: #00aefc;
            color: #fff;
            text-align: center;
            line-height: 34px;
            font-size: 16px;
            margin-top: 13px;
          }
        }
      }
      .shopCar-jutituijian1 {
        margin-left: 0;
      }
      .shopCar-jutituijian2 {
        .shopCar-jutituijianTop {
          .shopCar-xinhao {
            background-color: #fef9f2;
            color: #f5b356;
            border: 1px solid #fad6a3;
          }
        }
      }
    }
  }




</style>
