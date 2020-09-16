<template>
	<div>
    <!-- 删除订单模态框 -->
    <div class="deleteDingdan">
      <!-- 中间白色背景内容 -->
      <div class="deleteDingdan-center">
        <!-- 上部的文字提示 -->
        <div class="deleteDingdan-top">
          你确定要删除订单吗？
        </div>
        <!-- 确定和取消的按钮 -->
        <div class="deleteDingdan-button">
          <div class="button-left" @click="CloseDeleteDingdan">取消</div>
          <div class="button-right" @click="DeleteOrder">确定</div>
        </div>
      </div>
    </div>

    <!-- 产品展示 -->
    <div class="myForm-prodect contain">
      <!-- 上部的导航栏部分 -->
      <div class="myForm-prodectTop">
        <div class="myForm-mydingdan" style="cursor:pointer" @click = 'ToMyForm'>我的订单</div>
        <div class="myForm-dingzhi" style="cursor:pointer" >私人订制订单</div>
      </div>
      <!-- 下部中心内容部分 -->
      <ul class="myForm-chanpin contain">
        <!-- 信息外部盒子 -->
        <li class="myForm-xiangqing" v-for="item in MyFormData" :key="item.id">
          <div class="myForm-xiangqingTop">
            <span>商家昵称：{{item.userName}}</span>
            <span>订单时间：{{item.dingdanTime}}</span>
            <span>订单编号：{{item.dingdanBianhao}}</span>

          </div>
          <div class="myForm-xiangqingBottom">
            <div class="myForm-quxian"><img src="/static/MyAccount/MyForm/icon_商城图标.png" alt=""></div>
            <div class="myForm-mingcheng">

              <p>{{item.prodectName}}</p>
              <span>剩余{{item.numberLast}}份</span>
              <span>订购时长：{{item.dinggouTime}}</span>
              <span>到期时间：{{item.daoqiTime}}</span>
            </div>
            <div class="myForm-jiaqian">￥：{{item.price}}</div>
            <div class="myForm-zhifu">
              <span class="myForm-wancheng zhifu-a">{{item.payStatus}}</span>
              <span class="myForm-shanchu zhifu-a" @click="OpenDeleteDingdan">删除订单</span>

            </div>
          </div>
        </li>
      </ul>
      <!-- 下部的分页 -->
      <div class="paging">
        <el-pagination 
        background layout="prev, pager, next" 
        :total="MyFormTotal" 
        :page-size="pageSize"
        :current-page="MyFormCP"
        @current-change="MyFormCPChange">
        </el-pagination>
      </div>

    </div>

    <!-- 官方推荐 -->
    <div class="myForm-tuijian contain">
      <p>官方推荐</p>
      <div class="myForm-shangpin">

        <div class="myForm-jutituijian myForm-jutituijian1" v-for="item in Recommendation" :key="item.id">
          <div class="myForm-jutituijianTop">
            <p>{{item.PolicyName}}</p>
            <span class="myForm-touxiang"><img src="" alt=""></span>
            <span class="myForm-name">{{item.userName}}</span>
            <span class="myForm-xinhao">{{item.type}}</span>
          </div>
          <div class="myForm-tupian"><img :src="item.image" alt=""></div>
          <ul>
            <li>
              <div class="myForm-shouyi1">年化收益</div>
              <div class="myForm-shouyi2">{{item.shouyi}}</div>

              <span></span>
            </li>
            <li>
              <div class="myForm-huiche1">最大回撤</div>

              <div class="myForm-huiche2">{{item.huice}}</div>

              <span></span>
            </li>
            <li>
              <div class="myForm-zijin1">初始资金</div>

              <div class="myForm-zijin2">￥：{{item.bougth}}</div>

            </li>
          </ul>
          <div class="myForm-yigoumai">
            <div class="myForm-shuliang">已有

              <span v-text="item.buyNumber">957</span>人购买</div>

            <a class="myForm-lijigoumai" href="javaScript:;">立即购买</a>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>

import Global from "@/components/layout/Global";


export default {
  data() {
    return {

      itemId:0,

      // 每页显示个数
      pageSize:5,

      // 订单总数
      MyFormTotal:20,
      // 当前页数
      MyFormCP:1,
      //取出的数据
      // MyFormData:[],
      MyFormData:[
        {
          userName:"不二咚",
          dingdanTime:"2018.01.25",
          dingdanBianhao:"124557426232",
          prodectName:"苹果微商城信号",
          numberLast:"120",
          dinggouTime:"1个月",
          daoqiTime:"2017.11.12",
          price:"100.23",
          payStatus:"支付完成",
        },
        {
          userName:"永恒的鑫光",
          dingdanTime:"2018.01.25",
          dingdanBianhao:"124557426232",
          prodectName:"苹果微商城信号",
          numberLast:"120",
          dinggouTime:"1个月",
          daiqiTime:"2017.11.12",
          price:"100.23",
          payStatus:"支付完成",
        },
        {
          userName:"失去，失去",
          dingdanTime:"2018.01.25",
          dingdanBianhao:"124557426232",
          prodectName:"苹果微商城信号",
          numberLast:"120",
          dinggouTime:"1个月",
          daiqiTime:"2017.11.12",
          price:"100.23",
          payStatus:"支付完成",
        },
        {
          userName:"come欧尼",
          dingdanTime:"2018.01.25",
          dingdanBianhao:"124557426232",
          prodectName:"苹果微商城信号",
          numberLast:"120",
          dinggouTime:"1个月",
          daiqiTime:"2017.11.12",
          price:"100.23",
          payStatus:"支付完成",
        },
        

      ],

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
			this.GetMyFormData(this.MyFormCP,this.pageSize);
		});

  },
  methods: {

  ToMyForm() {
    this.$router.push('/MyAccount');
  },

  // 弹出模态框
  OpenDeleteDingdan: function() {
    var Height = $(window).height();
    var Width = $(window).width();
    $('.deleteDingdan').css({
      "width":Width,
      "height":Height
    }).fadeIn('1000');
  },

  // 关闭模态框
  CloseDeleteDingdan: function () {
    $('.deleteDingdan').fadeOut('1000');
  },

  // 删除订单
  DeleteOrder: function() {
    $('.deleteDingdan').fadeOut('1000');
    this.$http.post(Global.getRequestUrl() + "/dev/signals/backtests/put_down/", 
      {
        "id": this.itemId
      },
      {
        headers: Global.getRequestHeader()
      }
    ).then(function(resp) {
      resp = resp.data;
      if(resp.succss) {

      }else {
        console.error("删除订单失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
      }
    }, function(error) {
      console.error("删除订单请求失败");
      console.error(error);
    });
  },

  // 获取分页中每一项的数据
  MyFormCPChange: function(curPage) {
    var self = this;
    self.MyFormCP = curPage;
    // console.log(self.MyFormCP)
    //Get current page data from back end
    self.GetMyFormData(self.MyFormCP,self.pageSize);
  },

  // 点击我的订单发送请求
	GetMyFormData: function(Cpage,CpageSize) {
      this.$http.get(Global.getRequestUrl() + "/favor/list",
				{
					params: {
						'page': Cpage,
						'pageSize':CpageSize
					},
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				var resp = resp.data;
				if(resp.success) {
          this.MyFormTotal = resp.data.pagination.total;
          this.itemId = resp.data.results.id;
          console.log("获取我的订单列表列表成功，结果为：");
          // console.log(resp.data.results);
          this.MyFormData = resp.data.results;
          // console.log(this.MyFormData);
				}else {
					console.error("获取我的订单列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
				}
			}, function(error) {
				console.error("获取我的订单列表请求失败！");
				console.error(error);
			});
   },

  }
}
</script>

<style lang="less">


// 删除订单模态框
.deleteDingdan{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  //中间白色背景内容
  .deleteDingdan-center{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 340px;
    height: 176px;
    //上部的文字提示
    .deleteDingdan-top{
      width: 100% ;
      height: 118px;
      font-size: 18px;
      text-align: center;
      line-height: 118px;
      color: #333;
    }
    //确定和取消的按钮
    .deleteDingdan-button{
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
.myForm-prodect {
  overflow: hidden;
  position: relative;
  //上部的导航栏部分
  .myForm-prodectTop {
    font-size: 16px;
    overflow: hidden;
    margin: 20px 5px;
    .myForm-mydingdan {
      display: block;
      float: left;
      color: #00aefc;
      margin-right: 30px;
    }
    .myForm-dingzhi {
      display: block;
      float: left;
      color: #333;
    }
  }
  //下部中心内容部分
  .myForm-chanpin {
    padding: 62px 32px;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;
    //信息外部盒子
    .myForm-xiangqing {
      width: 100%;
      margin-bottom: 16px;
      box-sizing: border-box;
      border: 1px solid #f0f0f0;
      .myForm-xiangqingTop {
        width: 100%;
        height: 35px;
        background-color: #f6f6f6;
        font-size: 14px;
        color: #767676;
        line-height: 35px;
        span {
          margin: 0 30px;
        }
      }
      .myForm-xiangqingBottom {
        width: 100%;
        height: 118px;
        padding: 12px 30px;
        .myForm-quxian {
          width: 136px;
          height: 93px;
          border: 1px solid #e1e1e1;
          border-radius: 5px;
          float: left;
        }
        .myForm-mingcheng {
          height: 100%;
          width: 380px;
          float: left;
          margin-left: 28px;
          p {
            font-size: 18px;
            margin: 20px 0;
          }
          span {
            font-size: 14px;
            color: #666;
            margin: 0 10px;
          }
        }
        .myForm-jiaqian {
          height: 100%;
          float: left;
          line-height: 90px;
          margin-left: 156px;
        }
        .myForm-zhifu {
          height: 100%;
          padding: 14px 0;
          float: left;
          margin-left: 140px;
          font-size: 14px;
          .zhifu-a {
            display: block;
            height: 36px;
            margin: 10px 0;
          }
          .myForm-wancheng {
            color: #999;
          }
          .myForm-shanchu {
            cursor: pointer;
            color: #666;
          }
        }
      }
    }
  }
  //下部的分页
  .paging{
    position: absolute;
    bottom: 30px;
    right: 32px;
  }
}

//官方推荐
.myForm-tuijian {
  margin: 30px 0;
  overflow: hidden;
  p {
    display: block;
    margin: 20px 0;
    color: #333;
    font-size: 16px;
  }
  .myForm-shangpin {
    width: 100%;
    background-color: #fff;
    padding: 22px 12px;
    box-sizing: border-box;
    overflow: hidden;
    .myForm-jutituijian {
      width: 382px;
      height: 472px;
      float: left;
      margin: 0  10px;
      border: 1px solid #e6e6e6;
      box-sizing: border-box;
      .myForm-jutituijianTop {
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
        .myForm-touxiang {
          display: block;
          float: left;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: skyblue;
        }
        .myForm-name {
          display: block;
          float: left;
          margin-top: 12px;
          margin-left: 22px;
          font-size: 16px;
          color: #333;
        }
        .myForm-xinhao {
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
      .myForm-tupian {
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
          .myForm-shouyi1,
          .myForm-huiche1,
          .myForm-zijin1 {
            font-size: 14px;
            color: #999;
          }
          .myForm-shouyi2,
          .myForm-huiche2,
          .myForm-zijin2 {
            color: #333;
            font-size: 16px;
          }
          .myForm-shouyi2 {
            color: #f54e2d;
          }
        }
      }
      .myForm-yigoumai {
        width: 100%;
        height: 60px;
        padding: 0 22px;
        box-sizing: border-box;
        .myForm-shuliang {
          float: left;
          color: #333;
          font-size: 16px;
          line-height: 60px;
          span {
            color: #f54e2d;
          }
        }
        .myForm-lijigoumai {
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
    .myForm-jutituijian1 {
      margin-left: 0;
    }
    .myForm-jutituijian2 {
      .myForm-jutituijianTop {
        .myForm-xinhao {
          background-color: #fef9f2;
          color: #f5b356;
          border: 1px solid #fad6a3;
        }
      }
    }
  }
}

</style>

