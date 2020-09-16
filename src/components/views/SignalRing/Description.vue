<template>
  <div>
    <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>
    <div class="DBigBox">
      <!-- 上边部分 -->
      <div class="Description-top">
        <div class="top-article contain">
          <div class="article-Image"></div>
        </div>
        <div class="top-bottom">
          <router-link class="bottom-left" to="/JoinCompetition">报名参赛</router-link>
          <router-link class="bottom-right" to="CompetitionRankings">排行榜</router-link>
        </div>
      </div>

      <!-- 中间部分 -->
      <div class="Description-center">
        <!-- 导航栏部分 -->
        <div class="Description-nav">
          <ul class="nav-center contain">
            <li><a class="active" href="#dasaishuoming">大赛说明</a></li>
            <li><a href="#saichenganpai">赛程安排</a></li>
            <li><a href="#jiangxiangshezhi">奖项设置</a></li>
            <li><a href="#cansaixuzhi">参赛须知</a></li>
            <li><a href="#cansaizhiyin">参赛指引</a></li>
            <li><a href="#saishishengming">赛事声明</a></li>
            <li><a href="#dasaizuzhi">大赛组织</a></li>
          </ul>
        </div>

        <!-- 大赛说明 -->
        <div id="dasaishuoming">
          <div class="dasaishuoming-contain contain tongyong">
            <div class="dasaishuoming-top mulu">大赛说明</div>
            <div class="dasaishuoming-center">
              策略擂台大赛（以下简称比赛）旨在响应国家双创号召，培养学生创新思维，推动高校教学科研创新，整合国内顶尖高校量化金融领域顶级资源专家和应用平台，
              发觉培养海内外量化金融领域人才或潜在人才为中国量化金融产业发展服务，探索金融人才创业创新的培养模式和认证体系，加速金融以及量化人才聚集高低的建设，
              并积极寻求金融服务实体的方式和方法。通过比赛，实现对于人才的发掘、发现、培养和孵化，并在此过程中，探索产学研合作的新模式、新机制、新方法、新途径，
              着力构建以企业为主体、市场为导向、产学研相结合的技术创新体系促进政产学研用的紧密结合，为建设创新型国家和世界科技强国做贡献
            </div>
            <div class="dasaishuoming-bottom">
              参赛对象
              <div class="contestants-one">
                1.清华100-300人
              </div>
              <div class="contestants-two">
                2.外校50-100【北大，人大，央财等】
              </div>
            </div>
          </div>
        </div>

        <!-- 赛程安排 -->
        <div id="saichenganpai">
          <div class="saichenganpai-contain contain tongyong">
            <div class="saichenganpai-top mulu">赛程说明</div>
            <ul class="saichenganpai-center">
              <li>报名：（18年度，4月开始启动）</li>
              <li>审核</li>
              <li>提交初版策略及论文</li>
              <li>预交易测试</li>
              <li>修改窗口</li>
              <li>终版锁定</li>
              <li>模拟盘测试</li>
              <li>最终答辩</li>
            </ul>
          </div>
        </div>

        <!-- 奖项设置 -->
        <div id="jiangxiangshezhi">
          <div class="jiangxiangshezhi-contain contain tongyong">
            <div class="jiangxiangshezhi-top mulu">奖项设置</div>
              <div class="jiangxiangshezhi-center">
                <span class="jiangxiangshezhi-span span1"></span>
                <div class="jiangxiangshezhi-div">一等奖：1名</div>
              </div>
              <div class="jiangxiangshezhi-center">
                <ul class="SecondLines">
                  <li>
                    <span class="jiangxiangshezhi-span span2"></span>
                    <div class="jiangxiangshezhi-div">二等奖：2名</div>
                  </li>
                  <li>
                    <span class="jiangxiangshezhi-span span3"></span>
                    <div class="jiangxiangshezhi-div">二等奖：2名</div>
                  </li>
                  <li>
                    <span class="jiangxiangshezhi-span span4"></span>
                    <div class="jiangxiangshezhi-div">二等奖：2名</div>
                  </li>
                </ul>
              </div>
              <div class="jiangxiangshezhi-center">
                <span class="jiangxiangshezhi-span span5"></span>
                <div class="jiangxiangshezhi-div">优秀导师：4名</div>
              </div>
          </div>
        </div>

        <!-- 参赛须知 -->
        <div id="cansaixuzhi">
          <div class="cansaixuzhi-contain contain tongyong">
            <div class="cansaixuzhi-top mulu">参赛须知</div>
            <ul class="cansaixuzhi-center">
              <li>1.参赛团队在策略提交截止日期前可调整策略；</li>
              <li>2.交易标的为A股和场内资金；</li>
              <li>3.参赛策略的实盘模拟交易，起始资金100万；比赛期间平均仓位不能低于50%；手续费和滑点使用系统默认配置；</li>
              <li>4.不能投资首日上市或者首日复盘的股票；</li>
              <li>5.若策略绩效得分相同，将按收益率进行排名；</li>
              <li>6.作品需提交聚宽量化平台的策略代码及策略研究报告一份。</li>
              <li>7.参赛作品应有原创性，无知识产权争议。参赛作品可以是个人作品，也可以使集体作品。大赛组织委员会鼓励参赛学生以团队形式提交作品，并明确队员排序和分工。</li>
              <li>8.其他补充事项，以大赛官网通告为准。</li>
            </ul>
          </div>
        </div>

        <!-- 参赛指引 -->
        <div id="cansaizhiyin">
          <div class="cansaizhiyin-contain contain tongyong">
            <div class="cansaizhiyin-top mulu">参赛指引</div>
            <ul class="cansaizhiyin-center">
              <li>
                <a class="a1" href="javascript:;">
                  <img src="/static/SignalRing/Description/icon_bianjicelv.png" alt="">
                  编辑策略
                </a>
              </li>
              <li>
                <a class="a2" href="javascript:;">
                  <img src="/static/SignalRing/Description/python.png" alt="">
                  Python教程
                </a>
              </li>
              <li>
                <a class="a3" href="javascript:;">
                  <img src="/static/SignalRing/Description/icon_lianghuaketang.png" alt="">
                  量化课堂
                </a>
              </li>
              <li>
                <a class="a4" href="javascript:;">
                  <img src="/static/SignalRing/Description/icon_lianghuashequ.png" alt="">
                  量化社区
                </a>
              </li>
              <li>
                <a class="a5" href="javascript:;">
                  <img src="/static/SignalRing/Description/icon_celvleitai.png" alt="">
                  策略擂台
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 赛事声明 -->
        <div id="saishishengming">
          <div class="contain tongyong">
            <div class="mulu">赛事声明</div>
            <ul class="saishishengming-center">
              <li>1.参赛主题是“量化投资策略开发”、“深度学习数据分析”等内容，凡和量化策略相关的模型研究均可参赛。</li>
              <li>2.参赛者应根据各项赛事的题目要求，完成一篇包括量化金融策略原理、模型的假设、建立和求解、计算方法的设计、分析和检验、模型的改进等方面的书面报告（即答卷）；并在规定竞赛期间内，将参赛策略的市场运行进行模拟仿真竞赛。</li>
              <li>3.在报名及初赛阶段，参赛团队通过平台官网或指定邮箱提交初赛作品成功视为确认报名参加比赛。</li>
              <li>4.主办方在审核报名者信息及参赛资格后，将通过适当方式与参赛者发送参赛确认信息，以及后续赛事信息。</li>
              <li>5.参赛作品应有原创性，无知识产权争议，如有接受他人指导，需提供指导人员信息。</li>
              <li>6.主办方将对参赛者身份信息进行验证，如发现信息不实等情况，将会酌情取消参赛者参赛资格，并通过赛事官方渠道进行通报。</li>
              <li>7.参赛者需以个人名义报名，且必须是在校学生，在同一个赛事中，每人最多只能参加一个主题的比赛。</li>
            </ul>
          </div>
        </div>

        <!-- 大赛组织 -->
        <!-- <div id="dasaizuzhi">
          <div class="contain tongyong">
            <div class="mulu">大赛组织</div>
            <div class="dasaizuhi-center">
              <div class="dasaizuhi-title">指导单位</div>
              <div class="dasaizuhi-article">成都市金融工作局</div>
              <div class="dasaizuhi-title">主办单位</div>
              <div class="dasaizuhi-article">西南财经大学金融学院</div>
              <div class="dasaizuhi-title">联合组办单位</div>
              <ul class="dasaizuhi-article alone">
                <li>电子科技大学经济管理学院</li>
                <li>四川大学商学院</li>
                <li>西南交大金融大数据研究院</li>
                <li>西华大学经济学院</li>
                <li>成都理工大学商学院</li>
                <li>四川师范大学商学院</li>
                <li>四川农业大学经济学院</li>
              </ul>
              <div class="dasaizuhi-title">承办单位</div>
              <ul class="dasaizuhi-article alone">
                <li>JoinQuant聚宽量化交易平台</li>
                <li>西部金融人才中心</li>
                <li>天府新区对冲基金学会</li>
              </ul>
              <div class="dasaizuhi-title">协作单位</div>
              <ul class="dasaizuhi-article alone">
                <li>华西证券股份有限公司</li>
                <li>倍特期货有限公司</li>
                <li>浙商证券四川分公司</li>
                <li>成都肇毓投资管理有限公司</li>
                <li>四川紫玺宸投资管理有限公司</li>
              </ul>
              <div class="dasaizuhi-title">赞助单位</div>
              <div class="dasaizuhi-article">成都凡能科技有限公司</div>
            </div>
          </div>
        </div> -->

        <!-- 大赛组织 -->
        <div id="dasaizuzhi">
          <div class="contain tongyong">
            <div class="mulu">大赛组织</div>
            <div class="dasaizuhi-center">
              <div class="dasaizuhi-title">指导单位</div>
              <div class="dasaizuhi-article">待定</div>
              <div class="dasaizuhi-title">主办单位</div>
              <div class="dasaizuhi-article">待定</div>
              <div class="dasaizuhi-title">联合组办单位</div>
              <ul class="dasaizuhi-article alone">
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
              </ul>
              <div class="dasaizuhi-title">承办单位</div>
              <ul class="dasaizuhi-article alone">
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
              </ul>
              <div class="dasaizuhi-title">协作单位</div>
              <ul class="dasaizuhi-article alone">
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
                <li>待定</li>
              </ul>
              <div class="dasaizuhi-title">赞助单位</div>
              <div class="dasaizuhi-article">待定</div>
            </div>
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

export default {
  components: {
    NavBar,
    FooterBar,
    Global
  },
  mounted() {},
  data() {
    return {
      AIadvisorMenu: Global.getPageMenu("SignalRing")
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>

.DBigBox {
  background-color: #f0f0f0;
}
.contain {
  width: 1206px;
  margin: 0 auto;
  box-sizing: border-box;
}

// 最上边部分
.Description-top {
  width: 100%;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  background: url("/static/SignalRing/Description/1844153257.jpg") no-repeat
    center;
  .top-article {
    text-align: center;
    height: 230px;
    padding-top: 106px;
    .article-Image {
      width: 664px ;
      height: 78px;
      margin: 0 auto;
      background:  url("/static/SignalRing/Description/icon_banner.png") no-repeat center;
    }
  }
  .top-bottom {
    width: 312px;
    height: 46px;
    margin: 0 auto;
    overflow: hidden;
    .bottom-left,
    .bottom-right {
      width: 132px;
      height: 46px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 23px;
      text-align: center;
      line-height: 46px;
    }
    .bottom-left {
      float: left;
    }
    .bottom-right {
      float: right;
    }
  }
}

// 中间部分


.mulu {
  font-size: 22px;
  color: #333;
}

.tongyong {
  padding-top: 16px;
  box-sizing: border-box;
}

/*导航栏部分*/
.Description-nav {
  width: 100%;
  height: 60px;
  background-color: #fff;
  .nav-center {
    display: flex;
    padding: 0;
    li {
      flex: 1;
      text-align: center;
      padding: 0 46px;
      box-sizing: border-box;
      a {
        display: block;
        height: 60px;
        line-height: 60px;
        margin: 0 auto;
        font-size: 18px;
        // color: #333;
      }
      .active {
        color: #14aaff;
        border-bottom: 2px solid #14aaff;
      }
    }
  }
}


// 大赛说明
#dasaishuoming {
  width: 100%;
  height: 330px;
  background-color: #f0f0f0;
  box-sizing: border-box;
  .dasaishuoming-contain {
    height: 330px;
    padding-top: 40px;
    box-sizing: border-box;
    .dasaishuoming-center {
      font-size: 14px;
      line-height: 1.8em;
      margin-top: 20px;
      color: #666;
    }
    .dasaishuoming-bottom {
      margin-top: 24px;
      font-size: 16px;
      color: #333;
      .contestants-one,
      .contestants-two {
        padding-left: 14px;
        margin-top: 16px;
        font-size: 14px;
        color: #666;
      }
    }
  }
}

//赛程安排
#saichenganpai {
  width: 100%;
  height: 354px;
  background-color: #fff;
  box-sizing: border-box;
  .saichenganpai-contain {
    height: 354px;
    .saichenganpai-center {
      margin: 30px 0 0 30px;
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 1px;
        height: 232px;
        background-color: #e6e6e6;
        position: absolute;
        left: -18px;
        top: 12px;
      }
      li {
        margin-bottom: 18px;
        font-size: 14px;
        color: #666;
        position: relative;
        &::before {
          content: "";
          display: block;
          width: 10px;
          height: 10px;
          background-color: #14aaff;
          border-radius: 50%;
          position: absolute;
          left: -22px;
          top: 4px;
        }
      }
    }
  }
}

// 奖项设置
#jiangxiangshezhi {
  width: 100%;
  height: 292px;
  background-color: #f0f0f0;
  box-sizing: border-box;
  .jiangxiangshezhi-center {
    padding-top: 30px;
    overflow: hidden;
    .jiangxiangshezhi-span {
      display: block;
      width: 40px;
      height: 48px;
      float: left;
      margin-right: 20px;
      margin-top: -9px;
    }
    .jiangxiangshezhi-div {
      width: 108px;
      height: 30px;
      float: left;
      text-align: center;
      line-height: 30px;
      font-size: 12px;
      border-radius: 6px;
      background-color: #14aaff;
      color: #fff;
    }
    .span1 {
      background: url("/static/SignalRing/Description/icon_1dengjiang.png")
        no-repeat;
    }
    .span2 {
      background: url("/static/SignalRing/Description/icon_dierming.png")
        no-repeat;
    }
    .span3 {
      margin-left: 52px;
      background: url("/static/SignalRing/Description/icon_disanming.png")
        no-repeat;
    }
    .span4 {
      margin-left: 52px;
      background: url("/static/SignalRing/Description/icon_youshengjiang.png")
        no-repeat;
    }
    .span5 {
      margin-top: 0;
      background: url("/static/SignalRing/Description/icon_youxiudaoshi.png")
        no-repeat;
    }
  }
}

// 参赛须知
#cansaixuzhi {
  width: 100%;
  height: 320px;
  background-color: #fff;
  box-sizing: border-box;
  .cansaixuzhi-center {
    font-size: 14px;
    li {
      margin-top: 16px;
      color: #999;
    }
  }
}

// 参赛指引
#cansaizhiyin {
  width: 100%;
  height: 214px;
  background-color: #f0f0f0;
  box-sizing: border-box;
  .cansaizhiyin-center {
    width: 100%;
    padding: 42px 70px;
    li {
      width: 20%;
      float: left;
      color: #666;
      font-size: 14px;
      text-align: center;
      .a1,.a2,.a3,.a4,.a5{
        color: #666;
        font-size: 14px;
        img{
          display: block;
          margin: 0 auto 10px;
        }
      }
    }
  }
}

// 赛事声明
#saishishengming{
  width: 100% ;
  height: 318px;
  background-color: #fff;
  box-sizing: border-box;
  .saishishengming-center {
    font-size: 14px;
    li {
      margin-top: 8px;
      color: #999;
      line-height: 1.8em;
    }
  }
}

// 大赛组织
#dasaizuzhi{
  width: 100%;
  height: 444px;
  background-color: #f0f0f0;
  box-sizing: border-box;
  .dasaizuhi-center{
    padding-top: 20px;
    .dasaizuhi-title{
      font-size: 14px;
      color: #333;
      margin-bottom: 14px;
    }
    .dasaizuhi-article{
      font-size: 14px;
      color: #999;
      margin-bottom: 14px;
    }
    .alone{
      overflow: hidden;
      li{
        float: left;
        margin-right: 12px;
      }
    }
  }
}

</style>


