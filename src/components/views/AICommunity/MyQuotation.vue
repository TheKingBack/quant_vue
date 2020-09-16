<template>
  <div>
  <nav-bar :navMenuItems="IntelligentTransactionMenu"></nav-bar>
  <!-- 外面的大盒子(用来设置大背景) -->
  <div class="MyQuotationBox">
    <!-- 版心为位置 -->
    <div class="MyQuotation contain">
      <!-- 左边部分 -->
      <div class="MQLeft">
        <!-- 搜索框 -->
        <div class="MQLSearch">
              <!-- 搜索放大镜图标 -->
              <div class="MQLSIcon"></div>
              <!-- 输入框 -->
              <input class="MQLSInput" placeholder="搜索股票代码/全拼/首字母" @keyup="GetSearchTimeData($event)" @keydown.down="changeDown()" @keydown.up.prevent="changeUp()" v-model="MQLSWord" type="text">
              <!-- 搜索按钮 -->
              <div class="MQLSBtn" @click="GetSearchData">搜索</div>
              <!-- 下拉框 -->
              <ul class="MQLSDropdownBox" v-show="DropdownBoxShow">
                    <li @click="GetSearchData(item)" v-for="item in SearchListData" :key="item.index">{{item}}</li>
              </ul>
        </div>
        <!-- 市场概况部分 -->
        <div class="MQLMarketSituation" v-if="SearchData.length == 0">
          <!-- 市场概况头部标题 -->
          <div class="MQLMSTitle">市场概况</div>
          <!-- 市场概况nav导航栏 -->
          <ul class="MQLMSNav">
            <li :class='{active:MarketSituationType == "HS"}' @click="GetMarketSituationData('HS')">沪深</li>
            <li :class='{active:MarketSituationType == "GG"}' @click="GetMarketSituationData('GG')">港股</li>
            <li :class='{active:MarketSituationType == "MG"}' @click="GetMarketSituationData('MG')">美股</li>
            <li :class='{active:MarketSituationType == "JJ"}' @click="GetMarketSituationData('JJ')">基金</li>
            <li :class='{active:MarketSituationType == "WH"}' @click="GetMarketSituationData('WH')">外汇</li>
            <li :class='{active:MarketSituationType == "SP"}' @click="GetMarketSituationData('SP')">商品</li>
          </ul>
          <!-- 市场概况banner -->
          <div class="MQLMSBanner">
            <div class="MQLMSBOne" v-for="item in MarketSituationData" :key="item.id">
              <img :src="item.img" alt="">
              <span class="MQLMSBOIntroduce">
                <span class="MQLMSBOIBlue">上证</span>
                {{item.BaiFenBi}}% {{item.Money}}亿元
              </span>
            </div>
          </div>
        </div>
        <!-- 股票分类 -->
        <div class="MQLStockClassification" v-if="SearchData.length == 0">
          <ul class="MQLSCConter">
            <li :class='{active:StockClassification == "HS"}' @click="GoStockType('HS')">沪深</li>
            <li :class='{active:StockClassification == "GG"}' @click="GoStockType('GG')">港股</li>
            <li :class='{active:StockClassification == "MG"}' @click="GoStockType('MG')">美股</li>
            <li :class='{active:StockClassification == "WH"}' @click="GoStockType('WH')">外汇</li>
            <li :class='{active:StockClassification == "SPQH"}' @click="GoStockType('SPQH')">商品期货</li>
            <li :class='{active:StockClassification == "SZHB"}' @click="GoStockType('SZHB')">数字货币</li>
          </ul>
        </div>
        <!-- 股票分类下部展示(搜索展示) -->
        <div class="MQLBanner" v-if="SearchData.length !== 0">
          <ul class="MQLBTitle">
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
          <ul class="MQLBTitle" v-if="SearchData.length==0" v-for="item in SearchData" :key="item.id" @click="GoShareDetails(item.id)">
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
            <li style="width:8%;color:#00aefc;">{{item.JoinSelfSelect}}</li>
          </ul>
          <!-- 搜索出来为空 -->
          <ul class="MQLBSearch">
            <li>
              <div class="MQLBSCenter">
                <img src="/static/AICommunity/MyQuotation/sousuo_jieguowu.png" alt="">
                <p class="MQLBSCWord">没有搜索到相关信息</p>
                <p class="MQLBSCWord">请重新搜索</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 股票分类下部展示 -->
        <div class="MQLBannerOne" v-if="SearchData.length == 0">
              <Hu-Shen v-if="StockClassification == 'HS'"></Hu-Shen>
              <Gang-Gu v-if="StockClassification == 'GG'"></Gang-Gu>
              <Mei-Gu v-if="StockClassification == 'MG'"></Mei-Gu>
              <Wai-Hui v-if="StockClassification == 'WH'"></Wai-Hui>
              <ShangPin-QiHuo v-if="StockClassification == 'SPQH'"></ShangPin-QiHuo>
              <ShuZi-HuoBi v-if="StockClassification == 'SZHB'"></ShuZi-HuoBi>
        </div>
      </div>
      <!-- 右边部分 -->
      <div class="MQRight">
        <!-- 右边头部标题 -->
        <div class="MQRTitle">
          <!-- 右边头部标题左边 -->
          <div class="MQRTWord">我的自选</div>
          <!-- 右边头部标题右边 -->
          <div class="MQRTGoGuanLi">管理自选股 > </div>
        </div>
        <!-- 展示信息名称 -->
        <div class="MQRNav">
          <template>
            <el-select @change="MQRTypeChange" v-model="MQRNStockType" placeholder="全部">
              <el-option
                    v-for="item in MQRNStockTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
              </el-option>
            </el-select>
          </template>
          <div class="MQRNWord" @click="RFSortChange(RiseOrFall)">涨跌幅
              <img v-show="RiseOrFall==0" src="/static/AICommunity/MyQuotation/默认状态.png" alt="" class="IDRNImg">
              <img v-show="RiseOrFall==1" src="/static/AICommunity/MyQuotation/升序.png" alt="" class="IDRNImg">
              <img v-show="RiseOrFall==-1" src="/static/AICommunity/MyQuotation/降序.png" alt="" class="IDRNImg">
          </div>
          <div class="MQRNWord" @click="LPSortChange(LatestPrice)">最新价
              <img v-show="LatestPrice==0" src="/static/AICommunity/MyQuotation/默认状态.png" alt="" class="IDRNImg">
              <img v-show="LatestPrice==1" src="/static/AICommunity/MyQuotation/升序.png" alt="" class="IDRNImg">
              <img v-show="LatestPrice==-1" src="/static/AICommunity/MyQuotation/降序.png" alt="" class="IDRNImg">
          </div>
        </div>
        <!-- 自选股数展示信息 -->
        <div class="MQRBanner" @click="GoShareDetails(item.id)" v-show="!LoGoinIsShow" v-for="item in SelfSelectedStockData" :key="item.id">
          <div class="MQRBLeft">
            <div class="MQRBLName">{{item.SSSName}}</div>
            <div class="MQRBLCode">{{item.SSSCode}}</div>
          </div>
          <div class="MQRBRight">{{item.RiseAndFall}}%</div>
          <div class="MQRBCenter">{{item.LatestPrice}}</div>
        </div>
        <!-- 自选股数据为空 -->
        <div class="MQRBannerOne" v-show="!LoGoinIsShow" v-if="SelfSelectedStockData.length==0">
          <div class="MQRBOWord">赶紧添加自选</div>
          <div class="MQRBOWord">体验智能预警超强功能</div>
        </div>
        <!-- 自选股数据(没有登录) -->
        <div class="MQRBannerTwo" v-show="LoGoinIsShow">
          <div class="MQRBTWord">你还没有登录</div>
          <div class="MQRBTWord">无法查看我的自选</div>
          <div class="MQRBTButton" @click="GoLoginIt">去登录</div>
        </div>
      </div>
    </div>
  </div>
  <footer-bar></footer-bar>
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import FooterBar from "@/components/layout/FooterBar";
import Global from "@/components/layout/Global";
import HuShen from "@/components/views/AICommunity/MyQuotation/HuShen";
import GangGu from "@/components/views/AICommunity/MyQuotation/GangGu";
import MeiGu from "@/components/views/AICommunity/MyQuotation/MeiGu";
import WaiHui from "@/components/views/AICommunity/MyQuotation/WaiHui";
import ShangPinQiHuo from "@/components/views/AICommunity/MyQuotation/ShangPinQiHuo";
import ShuZiHuoBi from "@/components/views/AICommunity/MyQuotation/ShuZiHuoBi";

export default {
  created(){
    this.IsLogin();
  },
  mounted: function() {
    this.$nextTick(function() {
          this.GetMarketSituationData("HS");
          this.GetSelfShareData(this.RiseOrFall,this.LatestPrice,this.MQRNStockType);
          this.GoStockType('HS');
    });
  },
  components: {
    NavBar,
    FooterBar,
    HuShen,
    GangGu,
    MeiGu,
    WaiHui,
    ShangPinQiHuo,
    ShuZiHuoBi
  },
  data() {
    return {
      IntelligentTransactionMenu: Global.getPageMenu("IntelligentTransaction"),
      //涨跌排序所需参数
      RiseOrFall:0,
      //最新价排序所需参数
      LatestPrice:0,


      //搜索输入框的值
      MQLSWord: "",
      //搜索联想出来的数据
      SearchListData: [],
      //现在光标所处位置
      NowPosition: -1,
      //搜索出来的数据
      SearchData: [],
      //下拉框显示
      DropdownBoxShow:false,

      //市场概况类别
      MarketSituationType:"HS",
      //市场概况趋势图
      MarketSituationData: [
        {
          img: "/static/AICommunity/MyQuotation/shichang_gaikuang.png",
          BaiFenBi: "3183.92-0.95",
          Money: "1638.71"
        },
        {
          img: "/static/AICommunity/MyQuotation/shichang_gaikuang.png",
          BaiFenBi: "3183.92-0.95",
          Money: "1638.71"
        },
        {
          img: "/static/AICommunity/MyQuotation/shichang_gaikuang.png",
          BaiFenBi: "3183.92-0.95",
          Money: "1638.71"
        }
      ],

      //下拉选择器中的股票分类
      MQRNStockType: "0",
      MQRNStockTypes: [
        {
          value: "0",
          label: "全部"
        },
        {
          value: "1",
          label: "沪深"
        },
        {
          value: "2",
          label: "港股"
        },
        {
          value: "3",
          label: "美股"
        },
        {
          value: "4",
          label: "基金"
        },
        {
          value: "5",
          label: "外汇"
        },
        {
          value: "6",
          label: "商品"
        }
      ],
      //自选股信息
      SelfSelectedStockData: [
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55",
          id:123123,
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        },
        {
          SSSName: "中环球船务",
          SSSCode: "600886",
          LatestPrice: "1.28",
          RiseAndFall: "+0.55"
        }
      ],
      // SelfSelectedStockData:[],
      //是否登录
      LoGoinIsShow:true,

      //下部展示信息类别
      StockClassification:"HS",
    };
  },
  methods: {
    //验证是否登录
    IsLogin(){
      var LoginIsYON = Global.isLogedin();
      if(LoginIsYON){
        this.LoGoinIsShow = false;
      }else{
        this.LoGoinIsShow = true;
      }
    },


    //获取市场概况数据
    GetMarketSituationData(type) {
      var Type;
      this.MarketSituationType = type;
      if(type == "HS"){
            Type = 1;
      }else if(type == "GG"){
            Type = 2;
      }else if(type == "MG"){
            Type = 3;
      }else if(type == "JJ"){
            Type = 4;
      }else if(type == "WH"){
            Type = 5;
      }else if(type == "SP"){
            Type = 6;
      };
      //console.log(Type);
      this.$http.get(Global.getRequestUrl() + "/dev/signal/test/result",
        {
          params:{
            "type":Type,
          },
          headers: Global.getRequestHeader()
        }
      ).then(
        function(resp) {
          var resp = resp.body;
          console.log(resp);
          console.log("111111111111111111111111111111111111111111111");
          if (resp.success) {
                this.MarketSituationData = resp.data;
            console.log("获取市场概况数据成功！");
          } else {
            console.log("获取市场概况数据失败！");
          }
        },
        function(error) {
          console.log("获取市场概况请求失败！");
        }
      );
    },

    //获取搜索联想时数据
    GetSearchTimeData(ev) {
      this.DropdownBoxShow = true;
      if (ev.keyCode == 38 || ev.keyCode == 40) {
        return;
      }
      if (ev.keyCode == 13) {
        window.open("https://www.baidu.com/s?wd=" + this.MQLSWord);
        this.MQLSWord = "";
      }
      this.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
          {
            word: this.MQLSWord
          },
          {
            headers: Global.getRequestHeader()
          }
        )
        .then(
          function(resp) {
            var resp = resp.body;
            console.log(resp);
            console.log("33333333333333333333333333333333333333333");
            if (resp.success) {
              this.GetSearchListData = resp.data;
              console.log("获取搜索结果数据成功！");
            } else {
              console.log("获取搜索结果数据失败！");
            }
          },
          function(error) {
            console.log("获取搜索结果请求失败！");
          }
        );
    },

    //上键向上选择
    changeDown() {
      this.NowPosition++;
      if (this.NowPosition == this.GetSearchListData.length)
        this.NowPosition = -1;
      this.MQLSWord = this.GetSearchListData[this.NowPosition];
    },

    //下键向下选择
    changeUp() {
      this.NowPosition--;
      if (this.NowPosition == -2)
        this.NowPosition = this.GetSearchListData.length - 1;
      this.MQLSWord = this.GetSearchListData[this.NowPosition];
    },
    

    //搜索时发送请求获取数据
    GetSearchData(word) {
      this.DropdownBoxShow = false;
      if(word){
        this.MQLSWord = word;
      }
      this.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
        {
          word: this.MQLSWord
        },
        {
          headers: Global.getRequestHeader()
        }
      )
      .then(function(resp) {
        var resp = resp.body;
        console.log(resp);
        console.log("222222222222222222222222222222222222222222222");
        if (resp.success) {
          console.log("获取搜索联想数据成功！");
        } else {
          console.log("获取搜索联想数据失败！");
        }
      },function(error) {
        console.log("获取搜索联想请求失败！");
      });
    },

    //按涨跌幅排序
    RFSortChange(RF){
      if(RF==0){
        this.RiseOrFall = 1;
      }else if(RF==1){
        this.RiseOrFall = -1;
      }else if(RF==-1){
        this.RiseOrFall = 0;
      }
      // console.log(this.RiseOrFall)
      this.GetSelfShareData(this.RiseOrFall,this.LatestPrice,this.MQRNStockType);
    },

    //按最新价排序
    LPSortChange(LP){
      if(LP==0){
        this.LatestPrice = 1;
      }else if(LP==1){
        this.LatestPrice = -1;
      }else if(LP==-1){
        this.LatestPrice = 0;
      }
      // console.log(this.LatestPrice);
      this.GetSelfShareData(this.RiseOrFall,this.LatestPrice,this.MQRNStockType);
    },
    
    //自选股类型发生改变时
    MQRTypeChange(event){
      this.GetSelfShareData(this.RiseOrFall,this.LatestPrice,this.MQRNStockType);
    },

    //获取自选股数据信息
    GetSelfShareData(RF,LP,type) {
      this.$http.get(Global.getRequestUrl() + "/dev/signal/test/result",
          {
            params:{
              "type":type,
              "RF":RF,
              "LP":LP,
            },
            headers: Global.getRequestHeader()
          }
        )
        .then(
          function(resp) {
            var resp = resp.body;
            console.log(resp);
            console.log("444444444444444444444444444444444444444444444444");
            if (resp.success) {
              this.SelfSelectedStockData = resp.data;
              console.log("获取自选股数据成功！");
            } else {
              console.log("获取自选股数据失败！");
            }
          },
          function(error) {
            console.log("获取自选股请求失败！");
          }
        );
    },

    //选择展示部分的股票类型
    GoStockType(type){
      this.StockClassification = type;
    },

    //点击跳转到股票详情页
    GoShareDetails(id){
      this.$router.push("/MyQuotation/ShareDetails?id=" + id)
    },

    //去登录
    GoLoginIt(){
      var C = window.location.hash;
      var currentLocation = C.substring(2);
      console.log(currentLocation);
      this.$router.push("/Login/" + currentLocation);
    },
  }
};
</script>

<style lang="less">
//版心设定
.contain {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}
//外面的大盒子(用来设置大背景)
.MyQuotationBox {
  background-color: #f0f0f0;
  //版心为位置
  .MyQuotation {
    padding-top: 20px;
    overflow: hidden;
    //左边部分
    .MQLeft {
      width: 872px;
      float: left;
      //搜索框
      .MQLSearch {
        width: 100%;
        height: 70px;
        background-color: #fff;
        border-radius: 4px;
        padding: 0 122px 0 70px;
        position: relative;
        //搜索放大镜图标
        .MQLSIcon {
          width: 70px;
          height: 70px;
          position: absolute;
          top: 0;
          left: 0;
          background: url("/static/AICommunity/MyQuotation/sousuo_fangfajing.png")
            no-repeat center;
        }
        //输入框
        .MQLSInput {
          width: 100%;
          height: 70px;
          border: none;
        }
        //搜索按钮
        .MQLSBtn {
          width: 120px;
          height: 70px;
          text-align: center;
          line-height: 70px;
          font-size: 18px;
          color: #00aefc;
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
        }
        //下拉框
        .MQLSDropdownBox {
          // display: none;
          // display: block;
          width: 100%;
          height: 300px;
          border-radius: 4px;
          // background-color: #fff;
          background-color: skyblue;
          position: absolute;
          top: 80px;
          left: 0;
          z-index: 1;
        }
      }
      //市场概况部分
      .MQLMarketSituation {
        margin-top: 20px;
        width: 100%;
        // height: 276px;
        background-color: #fff;
        border-radius: 4px;
        padding: 28px 0px;
        //市场概况头部标题
        .MQLMSTitle {
          padding: 0 16px;
          font-size: 18px;
          color: #333;
        }
        //市场概况nav导航栏
        .MQLMSNav {
          width: 100%;
          padding: 0 20px;
          margin-top: 6px;
          overflow: hidden;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          .active {
            color: #00aefc;
            border-bottom: 2px solid #00aefc;
          }
          li {
            height: 34px;
            line-height: 34px;
            float: left;
            font-size: 14px;
            margin-right: 30px;
            cursor: pointer;
          }
        }
        //市场概况banner
        .MQLMSBanner {
          width: 100%;
          background-color: #fff;
          padding: 22px 0px 0px;
          display: flex;
          .MQLMSBOne {
            flex: 1;
            text-align: center;
            .MQLMSBOIntroduce {
              display: inline-block;
              width: 258px;
              height: 22px;
              font-size: 12px;
              color: #008000;
              line-height: 22px;
              background-color: #f0f0f0;
              margin-top: 6px;
              .MQLMSBOIBlue {
                color: #0100a3;
              }
            }
          }
        }
      }
      //股票分类
      .MQLStockClassification {
        width: 100%;
        height: 80px;
        // line-height: 80px;
        background-color: #f0f0f0;
        overflow: hidden;
        .MQLSCConter {
          width: 480px;
          overflow: hidden;
          margin: 34px auto 20px;
          .active {
            color: #00aefc;
          }
          li {
            // height: 80px;
            // line-height: 80px;
            float: left;
            font-size: 18px;
            margin: 0 16px;
            cursor: pointer;
          }
        }
      }
      //股票分类下边展示部分
      .MQLBanner {
        width: 100%;
        margin-top: 20px;
        background-color: #fff;
        margin-bottom: 20px;
        overflow: hidden;
        .MQLBTitle {
          padding: 0 16px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          overflow: hidden;
          li {
            height: 32px;
            line-height: 32px;
            float: left;
            color: #999;
            text-align: center;
            font-size: 12px;
            cursor: pointer;
          }
        }
        .MQLBSearch{
          li{
            width: 100% ;
            height: 400px;
            .MQLBSCenter{
              width: 160px;
              height: 160px;
              text-align: center;
              margin:110px auto 0;
              img{
                width: 88px;
                height: 71px; 
              }
              .MQLBSCWord{
                font-size:14px;
                color:#999;
                line-height:1.5em;
              }
            }
          }
        }
      }
    }
    //右边部分
    .MQRight {
      width: 308px;
      float: right;
      background-color: #fff;
      border-radius: 4px;
      padding: 10px 18px 30px;
      box-sizing: border-box;

      //右边头部标题
      .MQRTitle {
        width: 100%;
        height: 40px;
        overflow: hidden;
        line-height: 40px;

        //右边头部标题左边
        .MQRTWord {
          font-size: 18px;
          color: #333;
          float: left;
        }
        .MQRTGoGuanLi {
          font-size: 12px;
          color: #00aefc;
          float: right;
          cursor: pointer;
        }
      }

      //展示信息名称
      .MQRNav {
        width: 100%;
        height: 24px;
        line-height: 24px;
        //下拉选择器最外框的大小
        .el-select {
          width: 50px;
          //下拉选择器内容设置
          .el-input__inner {
            height: 24px;
            font-size: 14px;
            text-align: left;
            padding: 3px 12px 3px 0px;
            border: none;
            // border-bottom: 1px solid rgba(0,0,0,0.1);
          }
          //下拉选择器的右边三角的外框
          .el-input__icon {
            width: 12px;
          }
          //下拉选择器的下拉框最外框
          .el-select-dropdown {
            z-index: 3;
          }
        }
        .MQRNWord {
          width: 60px;
          text-align: center;
          float: right;
          font-size: 14px;
          color: #999;
          position: relative;
          cursor: pointer;
          .MQRNImg {
            width: 7px;
            height: 9px;
            position: absolute;
            top: 8px;
            right: 0px;
          }
        }
      }
      //展示信息
      .MQRBanner {
        width: 100%;
        height: 44px;
        cursor: pointer;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .MQRBLeft {
          width: 112px;
          height: 44px;
          float: left;
          overflow: hidden;
          .MQRBLName {
            margin-top: 8px;
            font-size: 14px;
            color: #666;
          }
          .MQRBLCode {
            font-size: 12px;
            color: #666;
          }
        }
        .MQRBCenter,
        .MQRBRight {
          float: right;
          width: 60px;
          text-align: center;
          height: 44px;
          line-height: 44px;
          font-size: 16px;
          color: #ec4343;
        }
      }
      //如果没有自选股
      .MQRBannerOne{
        width: 100% ;
        height: 300px;
        padding-top: 100px;
        text-align: center;
        .MQRBOWord{
          font-size: 16px;
          color: #666;
          line-height: 1.4em;
        }
      }
      //自选股数据(没有登录)
      .MQRBannerTwo{
        width: 100% ;
        height: 300px;
        padding-top: 100px;
        text-align: center;
        .MQRBTWord{
          font-size: 16px;
          color: #666;
          line-height: 1.4em;
        }
        .MQRBTButton{
          width: 110px;
          height: 32px;
          cursor: pointer;
          text-align: center;
          line-height: 32px;
          background-color: #00aefc;
          color: #fff;
          font-size: 16px;
          border-radius: 16px;
          margin: 20px auto 0;
        }
      }
    }
  }
}
</style>