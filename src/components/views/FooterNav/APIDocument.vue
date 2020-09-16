<template>
	<div>
	 	<nav-bar :navMenuItems="myAccountMenu"></nav-bar>

	 	<!-- <div style="height: 300px; border: 1px solid red;">个人账户</div> -->

		<div class="API-big">
         <div class="API-left">
            <ul>
               <li><a href="javascript:;">信号开发接口文档</a></li>
               <li><a href="javascript:;">1. 综述</a></li>
               <li><a href="javascript:;">2. 程序模板</a></li>
               <li><a href="javascript:;">3. 用户需要实现的函数介绍</a></li>
               <li class="space1"><a href="javascript:;">3.1 on_init</a></li>
               <li class="space1"><a href="javascript:;">3.2 on_start</a></li>
               <li class="space1"><a href="javascript:;">3.3 on_stop</a></li>
               <li class="space1"><a href="javascript:;">3.4 on_tick</a></li>
               <li class="space1"><a href="javascript:;">3.5 on_bar</a></li>
               <li><a href="javascript:;">4. API介绍</a></li>
               <li class="space1"><a href="javascript:;">4.1 参数设置</a></li>
               <li class="space1"><a href="javascript:;">4.2 公共数据查询</a></li>
               <li class="space1"><a href="javascript:;">4.3 私有数据存储与获取</a></li>
               <li class="space1"><a href="javascript:;">4.4 日志与结果输出</a></li>
               <li class="space1"><a href="javascript:;">4.5 辅助函数</a></li>
               <li><a href="javascript:;">5. 回测引擎介绍</a></li>
               <li class="space1"><a href="javascript:;">5.1 回测环境</a></li>
               <li class="space1"><a href="javascript:;">5.2 回测过程</a></li>
               <li class="space1"><a href="javascript:;">5.3 评测指标</a></li>
               <li><a href="javascript:;">6. 模拟引擎介绍</a></li>
               <li class="space1"><a href="javascript:;">6.1 回测过程</a></li>
               <li class="space1"><a href="javascript:;">6.2 评测指标</a></li>
               <li><a href="javascript:;">7. 组合信号回测介绍</a></li>
               <li class="space1"><a href="javascript:;">7.1 回测过程</a></li>
               <li class="space1"><a href="javascript:;">7.2 评测指标</a></li>
               <li><a href="javascript:;">8. 示例代码</a></li>
               <li class="space1"><a href="javascript:;">8.1 单品种单信号</a></li>
               <li class="space1"><a href="javascript:;">8.2 多品种多信号</a></li>
               <li class="space1"><a href="javascript:;">8.3 多周期信号</a></li>
               <li class="space1"><a href="javascript:;">8.4 组合信号信号</a></li>
            </ul>
         </div>
         <div class="API-right">
            <h2 id="API" class="biaoji">信号开发接口文档
              <span class="API-span" @click='Down'>下载API文档</span>
            </h2>


            <h2 id="API-综述" class="biaoji">1. 综述</h2>

            <p>IThink平台支持的信号开发分为4类：</p>
            <ol>
               <li>单品种单信号</li>
               <li>多品种多信号</li>
               <li>多周期信号</li>
               <li>组合信号信号</li>
            </ol>
            <p>其中，1、2与3需要用户编写相应的代码，4暂时由平台采用固定的组合算法来执行，用户仅需要选择需要进行组合的信号并提交组合优化。</p>
            <p>对所有的信号，平台提供三种运行方式：</p>
            <ol>
               <li>回测： 用户选择一个时间段，系统根据历史报价信息预测用户信号的成交情况，并给出回测收益等信息</li>
               <li>模拟执行：用户将信号提请模拟执行后，系统从当天某一时刻起，通过实时数据调用户的信号，并实时计算收益等信息。由于数据源存在一定的延迟，模拟执行也将存在一定的延迟</li>
               <li>线上实际运行：&lt;待定&gt;</li>
            </ol>
            <p>此外，对于模拟回测，平台提供自动调参功能，允许用户从一组可选值列表中搜索最优的参数。</p>


            <h2 id="API-程序模板" class="biaoji">2. 程序模板</h2>
            <p>无论哪种信号，用户均需基于如下模板实现自己的代码：</p>
            <ul class="example1">
               <li>class SignalTemplate(object):</li>
               <li class="space1">def on_init(self, context):</li>
               <li class="space2">"""初始化信号（必须由用户继承实现）"""</li>
               <li class="space2">raise NotImplementedError</li>
               <li class="space1">#----------------------------------------------------------------------</li>
               <li class="space1">def on_start(self, context):</li>
               <li class="space2">"""启动信号（必须由用户继承实现）"""</li>
               <li class="space2">raise NotImplementedError</li>
               <li class="space1">#----------------------------------------------------------------------</li>
               <li class="space1">def on_stop(self, context):</li>
               <li class="space2">"""停止信号（必须由用户继承实现）"""</li>
               <li class="space2">raise NotImplementedError</li>
               <li class="space1">#----------------------------------------------------------------------</li>
               <li class="space1">def on_tick(self, context, ticks):</li>
               <li class="space2">"""收到行情TICK推送（必须由用户继承实现）"""</li>
               <li class="space2">raise NotImplementedError</li>
               <li class="space1">#----------------------------------------------------------------------</li>
               <li class="space1">def on_bar(self, context, bars):</li>
               <li class="space2">"""</li>
               <li class="space2">1. 收到Bar推送（必须由用户继承实现）</li>
               <li class="space2">2. 这个bar只包含当前bar的数据，</li>
               <li class="space2">"""</li>
               <li class="space2">raise NotImplementedError</li>
            </ul>

            <h5>状态维护</h5>
            <p>由于用户编写的信号实现为一个单独的类，在回测与实现执行时，框架会创建该类的一个对象，并一直保持，因此大部分状态用户只需要只需要利用该类的变量来维护即可。在任务方法中，用户可以创建变量。</p>
            <ul class="example2">
               <li>class xxx(SignalTemplate):</li>
               <li class="space1">def yyy():</li>
               <li class="space2">self.&lt;state&gt; = 1</li>
            </ul>
            <p>在其它方法中，用户直接取该状态的值即可。</p>


            <h2 id="API-用户需要" class="biaoji">3. 用户需要实现的函数介绍</h2>

            <h3 id="API-on_init" class="biaoji">3.1 on_init</h3>
            <p>初始化函数，用户在该函数中，需要设置相应的品种、基准品种等信息</p>

            <h3 id="API-on_start" class="biaoji">3.2 on_start</h3>
            <p>在信号回测执行前，或每次模拟开始之前调用，在该函数中，用户可以读取私有数据进行进一步的初始化</p>

            <h3 id="API-on_stop" class="biaoji">3.3 on_stop</h3>
            <p>每次信号回测执行后，或者模拟开始后进行调用，在该函数中，用户可以存储相应的私有数据</p>

            <h3 id="API-on_tick" class="biaoji">3.4 on_tick</h3>
            <p>tick 类型回测暂不支持</p>
            <p>ticks是一个tick的数组，其中每一个tick对应着on_init时设置的一个品种：</p>
            <p>tick数据包含以下字段：</p>
            <ul class="example3">
               <li>datetime: python时间对象，精确到1分钟</li>
               <li>last: 最近成交价</li>
               <li>quantity: 最近成交数量</li>
            </ul>

            <h3 id="API-on_bar" class="biaoji">3.5 on_bar</h3>
            <p>bar类型回测中，对每一个周期进一行一次该函数的调用，用户在该函数中执行相应的计算并返回信号值</p>
            <p>bars是一个bar的数组，其中每一个bar对应着on_init时设置的一个品种：</p>
            <ul class="example4">
               <li>bars = [security_0_bar, security_1_bar,...]</li>
            </ul>
            <p>bar数据包括以下字段:</p>
            <ul class="example5">
               <li>datetime: python时间对象，精确到1分钟</li>
               <li>min: 最低价</li>
               <li>max: 最高价</li>
               <li>open: 开盘价</li>
               <li>close: 收盘价</li>
            </ul>
            <p>用户必须对每个品种返回一个信号值，即</p>
            <ul class="example6">
               <li>rets = [security_0_signal, security_1_signal, ...]</li>
            </ul>


            <h2 id="API-API介绍" class="biaoji">4. API介绍</h2>

            <p>在每一个方法，系统提供了一个context对象，它封装了平台为用户提供的参数设置、公共数据查询、私有数据存储与获取、辅助函数等功能。</p>

            <h3 id="API-参数设置" class="biaoji">4.1 参数设置</h3>
            <h4>设置回测所使用的品种</h4>
            <ul class="example7">
               <li>context.settings.set_securities(["", ""...])</li>
            </ul>
            <h4>设置基准品种</h4>
            <ul class="example8">
               <li>context.settings.set_benchmark("")</li>
            </ul>
            <h4>设置滑点</h4>
            <ul class="example9">
               <li>context.settings.set_slippage(0.02)</li>
               <li>目前仅支持固定滑点</li>
            </ul>

            <h3 id="API-公共数据" class="biaoji">4.2 公共数据查询</h3>
            <h4>查询某个品种的bar数据</h4>
            <ul class="example10">
               <li>context.data.get_bars(security, count, unit='1d',</li>
               <li class="space2">startTime = &lt;datetime&gt;</li>
               <li class="space2">endTime = &lt;datetime&gt;</li>
               <li class="space2">fields=['date', 'open','high','low','close'])</li>
            </ul>
            <p>该函数主要参数如下：</p>
            <ul class="canshu">
               <li>security: 品种代码</li>
               <li>unit: bar的时间单位, 支持如下周期：’1m’, ‘5m’, ‘15m’, ‘30m’, ‘60m’, ‘120m’, ‘1d’, ‘1w’, ‘1M’。’1w’ 表示一周，‘1M’ 表示一月。</li>
               <li>fields: 获取数据的字段， 支持如下值：’date’, ‘open’, ‘close’, ‘high’, ‘low’, ‘volume’, ‘money’</li>
               <li>startTime: 起始时间，包含在内</li>
               <li>endTime: 结束时间，包含在内</li>
            </ul>
            <p>返回值</p>
            <ul class="canshu">
               <li>一个 numpy.ndarry 对象。可以通过 array[‘close’] 的方式直接访问列数据。</li>
            </ul>

            <h3 id="API-私有数据" class="biaoji">4.3 私有数据存储与获取</h3>

            <h4>存储变量</h4>
            <ul class="example11">
               <li>context.storage.save_variable("name", "")</li>
            </ul>

            <h4>载入变量</h4>
            <ul class="example12">
               <li>context.storage.load_variable("name")</li>
            </ul>
            <p>返回该变量对应的值</p>

            <h3 id="API-日志" class="biaoji">4.4 日志与结果输出</h3>

            <h3 id="API-辅助函数" class="biaoji">4.5 辅助函数</h3>


            <h2 id="API-回测引擎介绍" class="biaoji">5. 回测引擎介绍</h2>

            <h3 id="API-回测环境" class="biaoji">5.1 回测环境</h3>
            <p>1.回测引擎运行在pytho2.7上，后续将添加对Python3的支持</p>
            <p>2.我们支持所有的Python标准库和部分常用第三方库，包括</p>
            <table cellspacing="0" cellpadding="0">
               <thead>
                  <tr>
                     <td>库名</td>
                     <td>帮助文档</td>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>array</td>
                     <td>https://docs.python.org/2.7/library/array.html</td>
                  </tr>
               </tbody>
            </table>
            <p>支持两种回测类型，即按Bar定时执行与按 Tick定时执行。</p>

            <h3 id="API-回测过程" class="biaoji">5.2 回测过程</h3>
            <ol>
               <li>用户按上述要求，编写信号逻辑。</li>
               <li>用户指定起始时间、终止时间、回测周期与初始资金，并提交回测。</li>
               <li>系统根据用户指定的品种与周期，计算每一个周期内的bar，将提供给用户的on_bar函数。用户完成相应计算后，返回该周期内的信号值。</li>
            </ol>

            <h3 id="API-评测指标" class="biaoji">5.3 评测指标</h3>
            <ol>
               <li>具体信号值：对用户返回的信号值进行收集并画出相应曲线。</li>
               <li>每个周期的收益率：</li>
               <li>每个周期未的仓位：</li>
               <li>总收益：</li>
               <li>最大回撤：</li>
               <li>相对于基准数据的alpha与beta：</li>
            </ol>


            <h2 id="API-模拟引擎介绍" class="biaoji">6. 模拟引擎介绍</h2>

            <h3 id="API-回测" class="biaoji">6.1 回测过程</h3>

            <h3 id="API-评测" class="biaoji">6.2 评测指标</h3>
            <p>相对于回测，模拟引擎返回的指标相同，只是所有的指标以当前时刻作为结束点进行计算</p>
            <ol>
               <li>具体信号值：对用户返回的信号值进行收集并画出相应曲线。</li>
               <li>每个周期的收益率：</li>
               <li>每个周期未的仓位：</li>
               <li>总收益：</li>
               <li>最大回撤：</li>
               <li>相对于基准数据的alpha与beta：</li>
            </ol>


            <h2 id="API-组合信号回测介绍" class="biaoji">7. 组合信号回测介绍</h2>

            <h3 id="API-过程" class="biaoji">7.1 回测过程</h3>
            <ol>
               <li>用户选择一组已经编写完成的信号进行组合</li>
               <li>用户重新指定起始时间、终止时间、回测周期与初始资金，并提交回测。</li>
               <li>系统根据用户指定的参数进行组合</li>
            </ol>

            <h3 id="API-指标" class="biaoji">7.2 评测指标</h3>
            <p>组合信号也作为一个信号，所以也包含如下评测指标：</p>
            <ol>
               <li>具体信号值：对用户返回的信号值进行收集并画出相应曲线。</li>
               <li>每个周期的收益率：</li>
               <li>每个周期未的仓位：</li>
               <li>总收益：</li>
               <li>最大回撤：</li>
               <li>相对于基准数据的alpha与beta：</li>
            </ol>
            <p>此外，它还提供如下指标：</p>
            <p>每个周期未各信号的权重</p>

            <h2 id="API-示例代码" class="biaoji">8. 示例代码</h2>
            <h3 id="API-单品种单信号" class="biaoji">8.1 单品种单信号</h3>
            <h3 id="API-多品种多信号" class="biaoji">8.2 多品种多信号</h3>
            <h3 id="API-多周期信号" class="biaoji">8.3 多周期信号</h3>
            <h3 id="API-组合信号信号" class="biaoji">8.4 组合信号信号</h3>
         </div>
      </div>

	 	<!-- <footer-bar></footer-bar> -->
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar";
// import FooterBar from "@/components/layout/FooterBar";
import Global from "@/components/layout/Global";

export default {

  components: {
    NavBar,
    // FooterBar,
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
						$('.API-left').css({'height':'100%','top':0})
          }
        $('.API-left ul li a').eq(0).addClass('active');
				$(window).scroll(function(){

          //滚动730px，左侧导航固定定位
					if ($(window).scrollTop()>60) {
						$('.API-left').css({'height':'100%','top':0})
					}else{
						$('.API-left').css({'height':'Height','top':60})
          };
        });
        
				$('.API-left li').click(function(){
          $('.API-left ul li a').removeClass('active');
					// $(this).addClass('active').siblings().removeClass('active');
					$(this).children('a').addClass('active');
					var _i=$(this).index();
					 $('body, html').animate({scrollTop:$('.API-right .biaoji').eq(_i).offset().top-_line},500);
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

<style scoped>
body {
  position: relative;
  font-family: "sun";
}

/* 容器样式 */

.API-big {
  width: 100%;
  height: 100%-60px;
  overflow: hidden;
  background-color: #fff;
}

.active {
  /* background-color: #00aefc; */
  color: #00aefc;
}

/* 左边导航 */

.API-left {
  overflow-y: scroll;
  width: 360px;
  position: fixed;
  left: 0;
  /* top: 60px; */
  /* border-right: 2px solid #ccc; */
}

.API-left ul {
  list-style: none;
  background-color: #f0f0f0;
  font-size: 14px;
  padding: 10px 60px;
  box-sizing: border-box;
  margin: 0;
}
.API-left ul li {
  padding: 5px 0;
}

/* .API-left  li a {
  display: block;
  text-decoration: none;
  outline: none;
  color: #333;
} */

a {
  /* display: block; */
  text-decoration: none;
  outline: none;
  color: #333;
}

.API-left .space1 {
  padding-left: 14px;
}


/* 右边内容 */

.API-right {
  /* margin-top: 60px; */
  width: 100%;
  padding-left: 412px;
  padding-right: 50px;
  box-sizing: border-box;
}

/* 恢复标题标签样式 */

.API-right h2 {
  padding: 10px 0;
  font-size: 24px;
  margin: 19.92px 0;
  border-bottom: 1px solid #ccc;
}

/* 下载文档的样式 */

.API-right .API-span{
  font-size: 14px;
  color: #00aefc;
  margin-left: 20px;
  font-weight: normal;
  cursor: pointer;
}

.API-right h3 {
  font-size: 18.72px;
  margin: 18.72px 0;
}
.API-right h4 {
  font-size: 16px;
  margin: 21.28px 0;
}

.API-right h5 {
  font-size: 14px;
  margin: 22.177px 0;
}

.API-right p {
  font-size: 14px;
  margin: 8px 0;
}

/* 内容中example的样式 */

.API-right ul {
  list-style: none;
  background-color: #efefef;
  font-size: 12px;
  padding: 20px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  /* font-weight: bold; */
}

.API-right ul li {
  padding: 5px 0;
}

.API-right .space1 {
  padding-left: 26px;
}

.API-right .space2 {
  padding-left: 50px;
}


/* 陈述观点的样式 */
.API-right ol {
  /* list-style: none; */
  font-size: 14px;
  padding: 20px;
  box-sizing: border-box;
}

.API-right ol li {
  padding: 3px 0;
  list-style-type:decimal;
}


/* 表格样式 */
.API-right table {
  text-align: center;
  border-collapse: collapse;
  padding: 2px;
}

.API-right table td {
  border: 2px solid #f0f0f0;
  padding: 10px;
}
</style>


