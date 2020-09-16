<template>
	<div>
	 	<nav-bar :navMenuItems="myAccountMenu"></nav-bar>
		<div class="CP-big">
      <!-- 左边导航栏内容 -->
      <div class="CP-left">
        <ul>
          <li class="CommonProblem activeLi"><a href="javascript:;">常见问题</a></li>

          <li><a href="javascript:;">1. 关于IThink</a></li>
          <li class="space1"><a href="javascript:;">1.1 IThink平台提供什么服务？</a></li>
          <li class="space1"><a href="javascript:;">1.2 IThink支持哪些交易品种？</a></li>
          <li class="space1"><a href="javascript:;">1.2 IThink收费吗？</a></li>
          <li class="space1"><a href="javascript:;">1.2 策略归谁所有？</a></li>
          <li class="space1"><a href="javascript:;">1.2 我的策略是否安全？</a></li>

          <li><a href="javascript:;">2. 如何使用IThink？</a></li>

          <li><a href="javascript:;">3. 数据</a></li>
          <li class="space1"><a href="javascript:;">3.1 IThink提供哪些数据？</a></li>
          <li class="space1"><a href="javascript:;">3.2 IThink提供的数据支持下载吗？</a></li>
          <li class="space1"><a href="javascript:;">3.3 数据后缀是怎么定义的？</a></li>
          <li class="space1"><a href="javascript:;">3.4 如何增加 DataFrame 显示的行、列数？</a></li>
          <li class="space1"><a href="javascript:;">3.5 numpy.float64 浮点数的展示问题</a></li>
          <li><a href="javascript:;">4. 回测</a></li>
          <li class="space1"><a href="javascript:;">4.1 回测的作用？</a></li>
          <li class="space1"><a href="javascript:;">4.2 回测可以使用哪些数据？</a></li>
          <li class="space1"><a href="javascript:;">4.3 如何编写一个最简单的策略？</a></li>
          <li class="space1"><a href="javascript:;">4.4 从哪里能获得一些常用的策略？</a></li>
          <li class="space1"><a href="javascript:;">4.5 如何编写策略，运行回测？</a></li>
          <li class="space1"><a href="javascript:;">4.5 编写策略需要实现哪些函数？</a></li>
          <li class="space1"><a href="javascript:;">4.5 回测支持哪些API？</a></li>
          <li class="space1"><a href="javascript:;">4.5 按天回测和分钟回测的区别？</a></li>
          <li class="space1"><a href="javascript:;">4.5 编译运行和运行回测的区别？</a></li>
          <li class="space1"><a href="javascript:;">4.5 回测引擎如何撮合成交？</a></li>
          <li class="space1"><a href="javascript:;">4.5 如何查看订单的处理结果？</a></li>
          <li class="space1"><a href="javascript:;">4.5 回测的基准收益如何设置？</a></li>
          <li class="space1"><a href="javascript:;">4.5 Total Returns、Alpha等指标如何计算？</a></li>
          <li class="space1"><a href="javascript:;">4.5 如何获取股票的市值？</a></li>
          <li class="space1"><a href="javascript:;">4.5 如何获取所有股票？</a></li>
          <li class="space1"><a href="javascript:;">4.5 如何开始金融期货交易</a></li>
          <li class="space1"><a href="javascript:;">4.5 期货到交割日，没有手动交割，系统如何处理</a></li>
          <li class="space1"><a href="javascript:;">4.5 回测时Cash为负是因为什么？</a></li>
        </ul>
      </div>
      <!-- 右边内容 -->
      <div class="CP-right">
        <h1 id="CP" class="biaoji">常见问题</h1>

        <p>感谢您使用IThink量化交易平台，以下内容希望解答您对IThink的疑问。</p>
        <p>如果您想了解我们提供的API如何使用，请查看<a href="/FooterNav/APIDocument" target="_blank">API文档</a>。</p>
        <p>如果以下内容仍没有解决您的问题，请您通过<a href="http://forum.thuquant.com/" target="_blank">社区提问</a>的方式告诉我们，谢谢。</p>

        <h2 id="CP-关于" class="biaoji">关于IThink</h2>
          <h3 class="biaoji">IThink平台提供什么服务？</h3>
            <p>IThink致力于打造最高效、易用的量化交易平台；我们希望降低量化交易的门槛，让更多人有机会参与进来；我们坚信“人人皆为宽客”—任何人只要对量化交易感兴趣，就可以成为一名宽客。</p>
            <p>我们免费为量化爱好者提供如下服务：</p>
            <ol>
                <li>高质量数据
                  <p>我们的数据基于2005年至今完整的Level-2数据、上市公司财务数据，包含完整的停牌、复权等信息，盘后及时更新；IThink的数据完全免费，我们每年投入近百万元用于数据购买、数据加工、数据存储。</p>
                  <a href="javascript:;">查看详情</a>
                </li>
                <li>强大的研究平台 
                  <p>我们免费提供基于IPython Notebook的研究平台，提供分钟级数据，采用Docker技术隔离，资源独立、安全性更高、性能更好，同步支持Python2、Python3。</p>
                  <a href="javascript:;">立即体验</a>
                </li>
                <li>顶级回测体验 
                  <p>我们支持对沪深A股、ETF、LOF、分级基金进行回测。 我们支持每日、分钟两级回测，提供简洁、强大的API，回测结果实时显示、快速响应、数据全面。</p>
                  <a href="/Login/SignalDevelop"  target="_blank">立即体验</a>
                </li>
                <li>顶尖模拟交易 
                  <p>我们提供最准确、实时的沪深A股、ETF模拟交易工具，支持基于tick级的模拟交易。 </p>
                  <a href="javascript:;">立即体验</a>
                </li>
                <li>量化交流社区 
                  <p>我们为量化爱好者提供线上交流社区，便于用户交流量化策略、学习量化知识，一起成长。 </p>
                  <a href="http://forum.thuquant.com/" target="_blank">立即体验</a>
                </li>
            </ol>

          <h3 id="CP-交易品种" class="biaoji">IThink支持哪些交易品种？</h3>
            <p>IThink目前主要支持沪深A股、ETF、LOF、分级基金，后续我们会逐步支持股指期货、商品期货、现货、外汇等其他金融衍生品。</p>

          <h3 id="CP-收费" class="biaoji">IThink收费吗？</h3>
            <p>IThink（天鸿均策）量化交易平台是为量化爱好者、宽客量身打造的云平台，我们免费为您提供高质量数据、强大的研究平台、顶级回测体验、顶尖模拟交易、量化交流社区，便于您快速实现自己的交易思想。</p>

          <h3 id="CP-归谁" class="biaoji">策略归谁所有？</h3>
            <p>策略是用户最大的财富，您对策略拥有100%的知识产权。</p>

          <h3 id="CP-安全" class="biaoji">我的策略是否安全？</h3>
            <p>我们提供业界最高的安全保护，通过https传输、加密存储、沙箱保护保障您的策略安全，除了您本人，任何人无法获取您的策略。<a href="/FooterNav/APIDocument" target="_blank">点击这里</a>了解更多信息。</p>

        <h2 id="CP-如何使用" class="biaoji">如何使用IThink？</h2>
          <ol>
              <li>创建自己的第一个策略 
                <p>方法一：参照<a href="/Login/SignalDevelop" target="_blank">示例策略</a>，修改代码；</p>
                <p>方法二：从<a href="http://forum.thuquant.com/" target="_blank">社区</a>克隆一个您感兴趣的策略；</p>
                <p>方法三：<a href="/Login/SignalDevelop">新建一个策略</a>，从头开始实现自己的交易思想； </p>
                <p>如果您想要更详细的了解如何写策略，<a href="/FooterNav/APIDocument" target="_blank">点击这里</a></p>
              </li>
              <li>通过回测检验自己的策略  
                <p>您可以使用回测功能，通过策略收益、最大回撤、Alpha、Sharpe等风险指标初步检验自己的策略。 </p>
                <a href="javascript:;">如何进行回测？</a>
              </li>
              <li>使用模拟交易进一步检验自己的策略  
                <p>如果您的策略已经经过回测的检验，您可以使用模拟交易来进一步检验自己的策略。 </p>
                <a href="#">如何进行模拟交易？</a>
              </li>
              <li>策略实盘 
                <p>IThink支持策略“一键跟单”功能，让实盘更简单。<a href="javascript:;">点击这里</a>了解更多信息。 </p>
              </li>
          </ol>

        <h2 id="CP-数据" class="biaoji">数据</h2>
          <h3 class="biaoji">IThink提供哪些数据？</h3>
            <ol>
              <li>股票数据：我们拥有所有A股上市公司2005年以来的股票<a href="javascript:;">行情数据</a>、<a href="javascript:;">市值数据</a>、<a href="javascript:;">财务数据</a>、<a href="javascript:;">上市公司基本信息</a>、<a href="javascript:;">融资融券信息</a>等。为了避免<a href="javascript:;">幸存者偏差</a>，我们包括了已经退市的股票数据。
              </li>
              <li>基金数据：我们目前提供了600多种在交易所上市的基金的行情、净值等数据，包含<a href="javascript:;">ETF</a>、<a href="javascript:;">LOF</a>、<a href="javascript:;">分级A/B基金</a>以及<a href="javascript:;">货币基金</a>的完整的行情、净值数据等，请点击<a href="javascript:;">基金数据</a>查看。
              </li>
              <li>金融期货数据：我们提供中金所推出的所有<a href="javascript:;">金融期货产品</a>的行情数据，并包含历史产品的数据。
              </li>
              <li>股票指数：我们支持近600种<a href="javascript:;">股票指数</a>数据，包括指数的行情数据以及成分股数据。为了避免未来函数，我们支持获取历史任意时刻的指数成分股信息，具体见<a href="javascript:;">get_index_stocks</a>。注意：指数不能买卖
              </li>
              <li>行业板块：我们支持按行业、按板块选股，具体见<a href="javascript:;">get_industry_stocks</a>
              </li>
              <li>概念板块：我们支持按概念板块选股，具体见<a href="javascript:;">get_concept_stocks</a>
              </li>
              <li>宏观数据：我们提供全方位的<a href="javascript:;">宏观数据</a>，为投资者决策提供有力数据支持。
              </li>
              <li>所有的行情数据我们均已处理好前复权信息。
              </li>
              <li>我们当日的回测数据会在收盘后通过多数据源进行校验，并在T+1（第二天）的00:01更新。
              </li>
            </ol>
          <h3 id="CP-下载" class="biaoji">IThink提供的数据支持下载吗？</h3>
            <p>IThink提供的数据可以在回测、模拟交易、研究模块免费使用，暂不支持下载。</p>
          <h3 class="biaoji">数据后缀是怎么定义的？</h3>
            <p>深交所股票代码后缀为 XSHE </p>
            <p>如000001.XSHE 平安银行 </p>
            <p>上交所股票代码后缀为 XSHG </p>
            <p>如600000.XSHG 浦发银行</p>
            <p>其他数据后缀请查询<a href="javascript:;">数据字典</a></p>
          <h3 id="CP-增加显示" class="biaoji">如何增加 DataFrame 显示的行、列数？</h3>
            <p>使用如下代码：</p>
            <ul class="example1">
              <li>import pandas as pd</li>
              <li># 设定最大显示行数、列数为10000</li>
              <li>pd.set_option('display.max_rows', 10000)</li>
              <li>pd.set_option('display.max_columns', 10000)</li>
              <li>pd.set_option('display.width', 10000)</li>
            </ul>
          <h3 id="CP-浮点" class="biaoji">numpy.float64 浮点数的展示问题</h3>
            <p>有同学问到, 天鸿均策的数据是不是有问题, 怎么价格还带那么多位小数. 其实并不是我们数据的问题, 是numpy.float64 展示数据的问题.我们的价格是使用 numpy.float64 对象存储的, numpy.float64 展示的时候跟我们想象的不一样.</p>
            <p>stackoverflow上的答案: <a href="http://stackoverflow.com/questions/27098529/numpy-float64-vs-python-float " target="_blank"> http://stackoverflow.com/questions/27098529/numpy-float64-vs-python-float </a> .</p>
            <p>详情可以查看：<a href="javascript:;">https://www.IThink.com/post/754</a></p>

        <h2 id="CP-回测" class="biaoji">回测</h2>
          <h3 class="biaoji">回测的作用？</h3>
            <p>策略有效体现了您的交易思想，通过历史数据的回测，可以检验策略的有效性。</p>

          <h3 id="CP-回测数据" class="biaoji">回测可以使用哪些数据？</h3>
            <p>回测可以免费使用 IThink 提供的所有数据。<a href="javascript:;">点击这里</a> 了解更多信息。</p>
            <p>回测使用的交易数据有一天的延时，即当天的交易数据在第二天的0:01分更新。</p>
            <p>延时原因：回测使用的交易数据基于Level-2行情数据，Level-2级别的完整交易数据需要收盘后才能获得，目前市场上没有权威的行情数据，为了保证数据的准确性，我们购买了多个数据提供商的数据，经过一系列处理后才投入使用。</p>

          <h3 id="CP-编写策略" class="biaoji">如何编写一个最简单的策略？</h3>
            <ul class="HowStart">
              <li>方法一：参照 <a href="/Login/SignalDevelop" target="_blank">示例策略</a> ，修改代码；</li>
              <li>方法二：从 <a href="http://forum.thuquant.com/" target="_blank">社区</a> 克隆一个您感兴趣的策略；</li>
              <li>方法三：<a href="/Login/SignalDevelop" target="_blank">新建一个策略</a> ，从头开始实现自己的交易思路；</li>
            </ul>
            <p>如果您想要更详细的了解如何写策略，<a href="/FooterNav/APIDocument" target="_blank">点击这里</a></p>

          <h3 id="CP-获得策略" class="biaoji">从哪里能获得一些常用的策略？</h3>
            <p>爱分享的小伙伴已经在社区分享了<a href="http://forum.thuquant.com/" target="_blank">许多策略</a>，您可以一键克隆免费使用。</p>


          <h3 id="CP-查看我的" class="biaoji">如何查看我的策略？</h3>
            <p>登录后，点击右上方“策略”，或者点击首页“编写策略”，进入策略列表页，查看我的策略。</p>
            <img src="" alt="">
            <img src="" alt="">
            <img src="" alt="">

          <h3 id="CP-编写运行" class="biaoji">如何编写策略，运行回测？</h3>
            <p>通过策略列表页进入策略详情页后，按如下步骤编写策略，运行回测：</p>
            <ol>
              <li>编辑策略  
                <p>使用基于Python语言的在线编辑器编写您的策略，我们会每隔10s自动保存您的策略，您也可以使用Ctrl+S快速保存。</p>
                <img src="" alt="">
              </li>
              <li>设置回测参数   
                <p>根据需要设置您的回测开始时间、结束时间、初始资金、回测频率。</p>
                <img src="" alt="">
              </li>
              <li>快速回测   
                <p>点击“编译运行”按钮进行快速回测，回测结果会实时显示在右侧。</p>
                <img src="" alt="">
                <img src="" alt="">
              </li>
              <li>完整回测  
                <p>如果您想要查看更完整的回测数据，可以点击右侧的“运行回测”按钮，查看完整的回测结果。</p>
                <img src="" alt="">
                <img src="" alt="">
              </li>
          </ol>

          <h3 id="CP-需要函数" class="biaoji">编写策略需要实现哪些函数？</h3>
            <p>编写策略仅需实现initialize和handle_data两个函数，<a href="/FooterNav/APIDocument" target="_blank">点击这里</a> 了解更多信息。</p>

          <h3 id="CP-支持API" class="biaoji">回测支持哪些API？</h3>
            <p> <a href="/FooterNav/APIDocument" target="_blank">点击这里</a> 查看回测API。</p>

          <h3 id="CP-每天分钟" class="biaoji">按天回测和分钟回测的区别？</h3>
            <p>按天回测: <a href="/FooterNav/APIDocument" target="_blank">handle_data</a>每天9:30调用一次, handle_data的参数是昨天的数据； </p>
            <p>分钟回测: handle_data每分钟调用一次, handle_data的参数是上一分钟的数据；</p>
            <p>下列图片中齿轮为 handle_data(context, data) 的运行时间，before_trading_start(context) 等其他函数运行时间详见<a href="/FooterNav/APIDocument" target="_blank">相关API</a>。</p>

          <h3 id="CP-运行回测区别" class="biaoji">编译运行和运行回测的区别？</h3>
            <p>编译运行便于您快速调试代码，检查代码中的错误，策略的运行结果也能更快的展示，仅统计了<a href="/FooterNav/APIDocument" target="_blank">Total Returns（策略总收益</a>、Alpha（阿尔法）、Beta（贝塔）、Sharpe（夏普比率）、Max Drawdown（最大回撤）。 </p>
            <p>运行回测是一次完整的回测，不仅包括编译运行中已经统计的指标，还包括交易详情、每日持仓&收益等信息。</p>

          <h3 id="CP-回测成交" class="biaoji">回测引擎如何撮合成交？</h3>
            <p>我们把您的一次申报记做一笔订单，<a href="/FooterNav/APIDocument" target="_blank">点击这里</a>了解订单的处理方式。</p>

          <h3 id="CP-订单结果" class="biaoji">如何查看订单的处理结果？</h3>
            <ol>
                <li>请参考如下API: 
                  <p><a href="/FooterNav/APIDocument" target="_blank">get_open_orders</a>/get_orders/get_trades</p>
                </li>
                <li>运行回测，在回测结果页查看交易详情、每日持仓&收益。
                </li>
            </ol>

          <h3 id="CP-设置收益" class="biaoji">回测的基准收益如何设置？</h3>
            <p>回测默认使用沪深300指数的收益作为基准收益，您也可以根据需要使用<a href="/FooterNav/APIDocument" target="_blank">set_benchmark</a>设置基准收益。</p>

          <h3 id="CP-计算指标" class="biaoji">Total Returns、Alpha等指标如何计算？</h3>
            <p>Total Returns、Alpha等指标统称为风险指标，风险指标有利于您对策略进行一个客观的评价；<a href="/FooterNav/APIDocument" target="_blank">点击这里</a>查看风险指标的计算方法。</p>

          <h3 id="CP-股票市值" class="biaoji">如何获取股票的市值？</h3>
            <p>您可以使用<a href="/FooterNav/APIDocument" target="_blank">get_fundamentals</a>函数获取股票的市值。</p>

          <h3 id="CP-回去股票" class="biaoji">如何获取所有股票？</h3>
            <p>您可以使用如下函数获取所有股票：</p>
            <ul class="example1">
              <li>list(get_all_securities().index)</li>
            </ul>

          <h3 id="CP-开始交易" class="biaoji">如何开始金融期货交易</h3>
            <p>初始化的仓位是不允许直接买卖金融期货的，因为初始默认 subportfolios[0] 中 SubPortfolioConfig 的 type = ‘stock’，只允许买卖股票与基金等。</p>
            <p>因此要买卖金融期货，您需要设定 SubPortfolioConfig 的 type = ‘index_futures’，单仓操作的设定方法具体方法如下：</p>
            <ul class="example1">
              <li>def initialize(context):</li>
              <li class="space1"># 在初始换函数 initialize 中加入下面设定语句</li>
              <li class="space1">set_subportfolios([SubPortfolioConfig(cash=context.portfolio.starting_cash ,type='index_futures')])</li>
            </ul>
            <p>如需使用分仓操作，请看<a href="/FooterNav/APIDocument" target="_blank">账户分仓操作</a>.</p>

          <h3 id="CP-期货处理" class="biaoji">期货到交割日，没有手动交割，系统如何处理</h3>
            <p>期货持仓到交割日，没有手动交割，系统会以当天结算价平仓, 没有手续费, 不会有交易记录.</p>

          <h3 id="CP-Cash为负" class="biaoji">回测时Cash为负是因为什么？</h3>
            <p>因为买入了大量的股票，在扣除手续费之后，造成Cash为负，与现实是相同的。</p>
      </div>
    </div>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
import Global from "@/components/layout/Global";

export default {

  components: {
    NavBar,
  },
  data() {
    return {
      // "MyAccount"
      myAccountMenu: Global.getPageMenu()
    };
  },
  mounted: function() {

    // 左边导航点击跳转

    $(function(){
				//设置标杆
        var _line=parseInt($(window).height()/3);//
        var Height = $(window).height()-60;

        if ($(window).scrollTop()>60) {
						$('.CP-left').css({'height':'100%','top':0})
          }
        $('.CP-left ul li a').eq(0).addClass('active');
				$(window).scroll(function(){

          //滚动730px，左侧导航固定定位
					if ($(window).scrollTop()>60) {
						$('.CP-left').css({'height':'100%','top':0})
					}else{
						$('.CP-left').css({'height':'Height','top':60})
          };
        });

        //左边导航栏滚动
        $('.CP-left').scrollTop(function(){
          return false;
        });
        
        //点击左侧导航栏实现跳转
				$('.CP-left li').click(function(){
          $(this).children("a").addClass("active");
          $(this).siblings().children("a").removeClass("active");
					$(this).addClass('activeLi').siblings().removeClass('activeLi');
          // $('.CP-left ul li a').removeClass('active');
					// $(this).children('a').addClass('active');
					var _i=$(this).index();
					 $('body, html').animate({scrollTop:$('.CP-right .biaoji').eq(_i).offset().top-_line},500);
				});
			});

  },
  methods: {

    // 点击下载文档
    Down: function() {
      this.$http.get('').then(({data}) => {

      })
    }

  }
};
</script>

<style lang="less" scoped>
body {
  position: relative;
  font-family: "sun";
}
/* 容器样式 */
.CP-big {
  width: 100%;
  height: 100%-60px;
  overflow: hidden;
  background-color: #fff;
}
/* 动态样式 */
.active {
  color: #00aefc;
}
.activeLi{
  background-color: #ccc;
}


/* 左边导航 */
.CP-left {
  overflow-y: scroll;
  width: 360px;
  position: fixed;
  left: 0;
  /* top: 60px; */
  /* border-right: 2px solid #ccc; */
  ul {
    list-style: none;
    background-color: #f0f0f0;
    font-size: 14px;
    box-sizing: border-box;
    margin: 0;
    .CommonProblem{
      padding: 5px 40px;
    }
    li {
      padding: 5px 50px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
}
a {
  text-decoration: none;
  outline: none;
  color: #333;
}
.CP-left .space1 {
  padding-left: 64px;
}


/* 右边内容 */
.CP-right {
  width: 100%;
  padding-left: 412px;
  padding-right: 50px;
  box-sizing: border-box;
  /* 恢复标题标签样式 */
  h1{
    font-size: 32px;
    margin: 1.5em 0;
    font-weight: normal;
  }
  h2{
    // padding: 10px 0;
    font-size: 24px;
    margin: 19.92px 0;
    font-weight: normal;
    // border-bottom: 1px solid #ccc;
  }
  h3 {
    font-size: 18.72px;
    margin: 18.72px 0;
    font-weight: normal;
  }
  h4 {
    font-size: 16px;
    margin: 21.28px 0;
    font-weight: normal;
  }
  h5 {
    font-size: 14px;
    margin: 22.177px 0;
    font-weight: normal;
  }
  p {
    font-size: 14px;
    margin: 6px 0;
    line-height: 1.5em;
    font-weight: normal;
    padding-left: 8px;
  }
  a {
    text-decoration: none;
    outline: none;
    color: #00aefc;
  }
  /* 内容中example的样式 */
  ul {
    list-style: none;
    background-color: #efefef;
    font-size: 12px;
    padding: 20px;
    margin: 0;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    /* font-weight: bold; */
    li {
      padding: 5px 0;
      // line-height: 1.5em;
    }
    .space1 {
      padding-left: 26px;
    }
    .space2 {
      padding-left: 50px;
    }
  }
  //如何开始一个最简单的策略
  .HowStart{
    background-color: #fff;
    font-size: 14px;
    padding: 20px;
    margin: 0;
    box-sizing: border-box;
    overflow: hidden;
    /* font-weight: bold; */
    li {
      list-style: disc;
      padding: 5px 0;
      // line-height: 1.5em;
    }
  }


  /* 陈述观点的样式 */
  ol {
    /* list-style: none; */
    font-size: 14px;
    padding: 0 20px;
    box-sizing: border-box;
    li {
      // padding: 3px 0;
      line-height: 2.0em;
      list-style-type:decimal;
    }
  }
}

</style>
