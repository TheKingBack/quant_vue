import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
// 加了一些初始样式
import '../assets/css/normalize.css'
import '../assets/css/reset.css'

import Home from '@/components/Home'
// import Global from '@/components/layout/Global'
import AboutUs from '@/components/AboutUs'
import JoinUs from '@/components/JoinUs'
import ContactUs from '@/components/ContactUs'
import AISignalAnalysis from '@/components/AISignalAnalysis'
import Shelfsignal from '@/components/Shelfsignal'
import SignalDevelop from '@/components/SignalDevelop'
import SignalCity from '@/components/SignalCity'
import Login from '@/components/Login'
import MyAccount from '@/components/MyAccount'

//import AssetsSteward from '@/components/views/AISignalAnalysis/AssetsSteward'
import EconomicForecasts from '@/components/views/AISignalAnalysis/EconomicForecasts'
//import AssetsManagement from '@/components/views/AISignalAnalysis/AssetsSteward/AssetsManagement'
//import EconomicForecasts from '@/components/views/AISignalAnalysis2/EconomicForecasts'

//import ProductManager from '@/components/views/AISignalAnalysis/ProductManager'
import AssetsSteward from '@/components/views/AISignalAnalysis/AssetsSteward'
//import Strategist from '@/components/views/AISignalAnalysis/Strategist'
import PublicOpinionAnalysis from '@/components/views/AISignalAnalysis/PublicOpinionAnalysis'
import FundamentalAnalysis from '@/components/views/AISignalAnalysis/FundamentalAnalysis'

//import CustomBuilt from '@/components/views/AISignalAnalysis/CustomBuilt'
import AssetsManagement from '@/components/views/AISignalAnalysis/AssetsManagement'
import MyStrategy from '@/components/views/AICommunity/MyStrategy'
//模拟交易
import MockTrading from '@/components/views/AICommunity/MockTrading'



//我的模拟
import MySimulation from '@/components/views/AICommunity/MySimulation'
//原先编辑运行界面函数库
// import FuncLib from '@/components/views/AICommunity/MyStrategy/FuncLib'
//原先编辑运行界面API
// import StrategyAPI from '@/components/views/AICommunity/MyStrategy/StrategyAPI'

//智能交易的行情页面
import MyQuotation from '@/components/views/AICommunity/MyQuotation'
//智能交易的行情详情页面(股票详情)
import ShareDetails from '@/components/views/AICommunity/MyQuotation/ShareDetails/ShareDetails'
//智能交易的行情详情页面(资讯详情)
import InformationDetails from '@/components/views/AICommunity/MyQuotation/ShareDetails/InformationDetails'








import Shelfsignaler from '@/components/views/Shelfsignal/Shelfsignaler'
import Shelfsuccess from '@/components/views/Shelfsignal/Shelfsuccess'
import Customsignaler from '@/components/views/Customsignal/Customsignaler'
import Smallcapitalization from '@/components/views/Customsignal/Smallcapitalization'
import Publishsignal from '@/components/views/Customsignal/Publishsignal'
import Customizeddetails from '@/components/views/Customsignal/Customizeddetails'
import Customtable from '@/components/views/Customsignal/Customtable'
import Officialdetails from '@/components/views/Customsignal/Officialdetails'
import Developersignaler from '@/components/views/Developersignal/Developersignaler'
import Buyersignaler from '@/components/views/Buyersignal/Buyersignaler'
import Profit from '@/components/views/Customsignal/customtable/Profit'
import Alpha from '@/components/views/Customsignal/customtable/Alpha'
import Benchmarkincome from '@/components/views/Customsignal/customtable/Benchmarkincome'
import Benchmarkvolitity from '@/components/views/Customsignal/customtable/Benchmarkvolitity'
import Beta from '@/components/views/Customsignal/customtable/Beta'
import Dailyposition from '@/components/views/Customsignal/customtable/Dailyposition'
import Informationratio from '@/components/views/Customsignal/customtable/Informationratio'
import Log from '@/components/views/Customsignal/customtable/Log'
import Maxdrawdown from '@/components/views/Customsignal/customtable/Maxdrawdown'
import Performanceanalysis from '@/components/views/Customsignal/customtable/Performanceanalysis'
import Sertino from '@/components/views/Customsignal/customtable/Sertino'
import Sharpe from '@/components/views/Customsignal/customtable/Sharpe'
import Transactiondetails from '@/components/views/Customsignal/customtable/Transactiondetails'
import Volitity from '@/components/views/Customsignal/customtable/Volitity'
import Strategicreturn from '@/components/views/Customsignal/customtable/Strategicreturn'


//李庚鑫做的个人中心部分
import MyForm from '@/components/views/userAccount/MyForm'
import MyCollection from '@/components/views/userAccount/MyCollection'
import ShopCar from '@/components/views/userAccount/ShopCar'
import NewsCenter from '@/components/views/userAccount/NewsCenter'

//修改个人信息部分
import bianji from '@/components/views/userAccount/changePassword/bianji'
import xiugaimima from '@/components/views/userAccount/changePassword/xiugaimima'

//擂台大赛部分
import CompetitionRankings from '@/components/views/SignalRing/CompetitionRankings'
import CompetitionDetails from '@/components/views/SignalRing/CompetitionDetails'

//原先的报名流程
//import RegistartProcess from '@/components/views/SignalRing/RegistrationProcess'

//现在的报名参赛
import JoinCompetition from '@/components/views/SignalRing/JoinCompetition'
import Mobile from '@/components/views/SignalRing/Mobile'

import Description from '@/components/views/SignalRing/Description'
import SignalPK from '@/components/views/SignalRing/SignalPK'
import RingDetails from '@/components/views/SignalRing/SignalPK/RingDetails'


//API文档
import APIDocument from '@/components/views/FooterNav/APIDocument'
//常见问题部分
import CommonProblem from '@/components/views/FooterNav/CommonProblem'
//函数库
import FunctionLibrary from '@/components/views/FooterNav/FunctionLibrary'
import FunctionDetails from '@/components/views/FooterNav/FunctionLibrary/FunctionDetails'
import ShareFunction from '@/components/views/FooterNav/FunctionLibrary/ShareFunction'








Vue.use(Router)
Vue.use(ElementUI)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path: '/aboutUs',
    	name: 'AboutUs',
    	component: AboutUs
    },
    {
      path: '/joinUs',
      name: 'JoinUs',
      component: JoinUs
    },
     {
      path: '/contactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/signalDevelop',
      name: 'SignalDevelop',
      component: SignalDevelop
    },
    {
      path: '/signalCity',
      name: 'SignalCity',
      component: SignalCity
    },
    {
      path: '/AISignalAnalysis',
      name: 'AISignalAnalysis',
      component: AISignalAnalysis,

      children: [
        {
          path: 'EconomicForecasts',
          name: 'EconomicForecasts',
          component: EconomicForecasts
        },
       // {
      //   path: 'productManager',
       //   name: 'ProductManager',
       //   component: ProductManager
       // },
          {
          path: 'AssetsSteward',
          name: 'AssetsSteward',
          component: AssetsSteward
        },
       // {
        //  path: 'strategist',
        //  name: 'Strategist',
          //component: Strategist
       // },
        {
          path: 'PublicOpinionAnalysis',
          name: 'PublicOpinionAnalysis',
          component: PublicOpinionAnalysis
        },

         {
          path: 'FundamentalAnalysis',
          name: 'FundamentalAnalysis',
          component: FundamentalAnalysis
        },
        {
          path: 'AssetsManagement',
          name: 'AssetsManagement',
          component: AssetsManagement
        },
      ]
    },
        
   // {
   //   path: '/AISignalAnalysis/AssetsSteward/AssetsManagement',
   //   name: 'AssetsManagement',
   //   component: AssetsManagement,

    //  },
        
    {
      path: '/AICommunity/myStrategy/:strategyCat/:signalId/:GoWhere',
      name: 'MyStrategy',
      component: MyStrategy
      
    },
    //我的模拟
    {
      path: '/AICommunity/MySimulation',
      name: 'MySimulation',
      component: MySimulation
    },
    //原先编辑运行界面函数库

    // {
    //   path: '/AICommunity/myStrategy/funcLib',
    //   name: 'FuncLib',
    //   component: FuncLib
    // },
    //原先编辑运行界面API
    // {
    //   path: '/AICommunity/myStrategy/strategyAPI',
    //   name: 'StrategyAPI',
    //   component: StrategyAPI
    // },

    //智能交易的行情页面
    {
      path: '/MyQuotation',
      name: 'MyQuotation',
      component: MyQuotation
    },
    //智能交易的行情详情页面(股票详情)
    {
      path: '/MyQuotation/ShareDetails',
      name: 'ShareDetails',
      component: ShareDetails
    },
    //智能交易的行情详情页面(资讯详情)
    {
      path: '/MyQuotation/InformationDetails',
      name: 'InformationDetails',
      component: InformationDetails
    },



    {
    	path: '/Shelfsignal',
    	name: 'Shelfsignal',
    	component: Shelfsignal,
    	children:[
    		{
    			path: 'Shelfsignaler',
		    	name: 'Shelfsignaler',
		    	component: Shelfsignaler
    		},
    		{
    			path: 'Shelfsuccess',
		    	name: 'Shelfsuccess',
		    	component: Shelfsuccess
    		},
    		{
    			path: 'Customsignaler',
    			name: 'Customsignaler',
    			component: Customsignaler,
    		},
    		{
    			path: 'Smallcapitalization',
    			name: 'Smallcapitalization',
    			component: Smallcapitalization,
    		},
    		{
    			path: 'Publishsignal',
    			name: 'Publishsignal',
    			component: Publishsignal,
    		},
    		{
    			path: 'Customizeddetails',
    			name: 'Customizeddetails',
    			component: Customizeddetails,
    		},
    		{
    			path: 'Customtable',
    			name: 'Customtable',
    			component: Customtable,
    		},
    		{
    			path: 'Officialdetails',
    			name: 'Officialdetails',
    			component: Officialdetails,
    		},
    		{
    			path: 'Developersignaler',
    			name: 'Developersignaler',
    			component: Developersignaler,
    		},
    		{
    			path: 'Buyersignaler/:backtestId',
    			name: 'Buyersignaler',
    			component: Buyersignaler,
    		},
    	]
    },
    {
      path: '/Login/:Location',
      name: 'Login',
      component: Login
    },

    //个人中心部分
    {
      path: '/MyAccount',
      name: 'MyAccount',
      component: MyAccount,
      children: [{
          path: '/MyAccount/MyForm',
          name: 'MyForm',
          component: MyForm
        },
        {
          path: '/MyAccount/MyCollection',
          name: 'MyCollection',
          component: MyCollection
        },
        {
          path: '/MyAccount/ShopCar',
          name: 'ShopCar',
          component: ShopCar
        },
        {
          path: '/MyAccount/NewsCenter',
          name: 'NewsCenter',
          component: NewsCenter
        },
      ]
    },

    //修改信息部分
    {
      path: '/bianji',
      name: 'bianji',
      component: bianji
    }, {
      path: '/xiugaimima',
      name: 'xiugaimima',
      component: xiugaimima

    },


    //擂台大赛部分
    {
      path: '/CompetitionRankings',
      name: 'CompetitionRankings',
      component: CompetitionRankings
    }, {
      path: '/CompetitionDetails',
      name: 'CompetitionDetails',
      component: CompetitionDetails
    },

    //原先的报名流程
    // {
    //   path: '/RegistartProcess',
    //   name: 'RegistartProcess',
    //   component: RegistartProcess
    // },
    
    //现在的报名参赛
    {
      path: '/JoinCompetition',
      name: 'JoinCompetition',
      component: JoinCompetition
    }, {
      path: '/Description',
      name: 'Description',
      component: Description
    }, {
      path: '/SignalPK',
      name: 'SignalPK',
      component: SignalPK
    }, {
      path: '/RingDetails',
      name: 'RingDetails',
      component: RingDetails
    }, {
      path: '/Mobile',
      name: 'Mobile',
      component: Mobile
    },


    //模拟交易部分
    {
      path: '/AICommunity/MockTrading/:backtestID',
      name: 'mockTrading',
      component: MockTrading
    },

    //API文档部分
    {
      path: '/FooterNav/APIDocument',
      name: 'APIDocument',
      component: APIDocument
    },
    //常见问题部分
    {
      path: '/FooterNav/CommonProblem',
      name: 'CommonProblem',
      component: CommonProblem
    },
    //函数库
    {
      path: '/FooterNav/FunctionLibrary',
      name: 'FunctionLibrary',
      component: FunctionLibrary
    },
    {
      path: '/FooterNav/FunctionLibrary/ShareFunction',
      name: 'ShareFunction',
      component: ShareFunction
    },
    {
      path: '/FooterNav/FunctionLibrary/FunctionDetails',
      name: 'FunctionDetails',
      component: FunctionDetails
    },



    // {
    //   path: '/Profit',
    //   name: 'Profit',
    //   component: Profit
    // },
		{
      path: '/Alpha',
      name: 'Alpha',
      component: Alpha
    },{
      path: '/Benchmarkincome',
      name: 'Benchmarkincome',
      component: Benchmarkincome
    },{
      path: '/Benchmarkvolitity',
      name: 'Benchmarkvolitity',
      component: Benchmarkvolitity
    },{
      path: '/Beta',
      name: 'Beta',
      component: Beta
    },{
      path: '/Dailyposition',
      name: 'Dailyposition',
      component: Dailyposition
    },{
      path: '/Profit',
      name: 'Profit',
      component: Profit
    },
    {
      path: '/Informationratio',
      name: 'Informationratio',
      component: Informationratio
    },
    {
      path: '/Log',
      name: 'Log',
      component: Log
    },
    {
      path: '/Maxdrawdown',
      name: 'Maxdrawdown',
      component: Maxdrawdown
    },
    {
      path: '/Performanceanalysis',
      name: 'Performanceanalysis',
      component: Performanceanalysis
    },
    {
      path: '/Sertino',
      name: 'Sertino',
      component: Sertino
    },
    {
      path: '/Sharpe',
      name: 'Sharpe',
      component: Sharpe
    },
     {
      path: '/Transactiondetails',
      name: 'Transactiondetails',
      component: Transactiondetails
    },
     {
      path: '/Volitity',
      name: 'Volitity',
      component: Volitity
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x:0, y:0};
  }
})
