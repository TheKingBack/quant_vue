<template>
	<div>
    <!-- 删除账户模态框 -->
    <div class="MyAPIDelete">
      <div class="MyAPIDContent">
        <div class="MyAPIDCTop">
          <div class="MyAPIDCTLeft">删除</div>
          <div class="MyAPIDCTRight" @click="DeleteAcountClose">×</div>
        </div>
        <div class="MyAPIDCCenter">
          <span class="MyAPIDCCTitle">短信验证码</span>
          <input type="text" v-model="VerificationCode" placeholder="请输入验证码" class="VerificationCode">
          <div class="VerificationCodeButton" @click="GetVerificationCode">发送验证码</div>
        </div>
        <div class="MyAPIDCBottom">
          <div class="MyAPIDCBLeft" @click="DeleteAcountClose">取消</div>
          <div class="MyAPIDCBRight" @click="DeleteAcountTrue">确定</div>
        </div>
      </div>
    </div>

    <!-- 查看账户验证码模态框 -->
    <div class="MyAPICheckVerifi">
      <div class="MyAPICVContent">
        <div class="MyAPICVCTop">
          <div class="MyAPICVCTLeft">查看</div>
          <div class="MyAPICVCTRight" @click="CheckAcountClose">×</div>
        </div>
        <div class="MyAPICVCCenter">
          <span class="MyAPICVCCTitle">短信验证码</span>
          <input type="text" v-model="VerificationCode" placeholder="请输入验证码" class="VerificationCode">
          <div class="VerificationCodeButton" @click="GetVerificationCode">发送验证码</div>
        </div>
        <div class="MyAPICVCBottom">
          <div class="MyAPICVCBLeft" @click="CheckAcountClose">取消</div>
          <div class="MyAPICVCBRight" @click="CheckAcountTrue">确定</div>
        </div>
      </div>
    </div>

    <!-- 查看账户信息模态框(股票,行情) -->
    <div class="MyAPICheckData">
      <div class="MyAPICDContent">
        <div class="MyAPICDCTop">
          <div class="MyAPICDCTLeft">查看</div>
          <div class="MyAPICDCTRight" @click="CheckAcountDataClose">×</div>
        </div>
        <div class="MyAPICDCCenter">
          <div class="MyAPICDCInformation">
            <div class="MyAPICDCILeft">备注名</div>
            <div class="MyAPICDCIRight">api_test</div>
          </div>
          <div class="MyAPICDCInformation">
            <div class="MyAPICDCILeft">账户</div>
            <div class="MyAPICDCIRight">217131215</div>
          </div>
          <div class="MyAPICDCInformation">
            <div class="MyAPICDCILeft">密码</div>
            <div class="MyAPICDCIRight">123456</div>
          </div>
        </div>
        <div class="MyAPICDCBottom">
          <div class="MyAPICDCBLeft" @click="CheckAcountDataClose">取消</div>
          <div class="MyAPICDCBRight" @click="CheckAcountDataClose">确定</div>
        </div>
      </div>
    </div>

    <!-- 查看账户信息模态框(数字货币详情) -->
    <div class="SZHBCheckData">
      <div class="SZHBCDContent">
        <div class="SZHBCDCTop">
          <div class="SZHBCDCTLeft">查看</div>
          <div class="SZHBCDCTRight" @click="SZHBCheckAcountClose">×</div>
        </div>
        <div class="SZHBCDCCenter">
          <div class="SZHBCDCInformation">
            <div class="SZHBCDCILeft">apiKey</div>
            <div class="SZHBCDCIRight">31920-hfjf-sdfsdj-fjsaldfjl</div>
          </div>
          <div class="SZHBCDCInformation">
            <div class="SZHBCDCILeft">备注名</div>
            <div class="SZHBCDCIRight">api_test</div>
          </div>
          <div class="SZHBCDCInformation">
            <div class="SZHBCDCILeft">权限</div>
            <div class="SZHBCDCIRight">提币，交易</div>
          </div>
          <div class="SZHBCDCInformation">
            <div class="SZHBCDCILeft">secretKey</div>
            <div class="SZHBCDCIRight">fjklsdjflsjflakmklsvskdvks</div>
          </div>
          <div class="SZHBCDCInformation">
            <div class="SZHBCDCILeft">二维码</div>
            <img class="SZHBCDCIRight" src="" alt="">
          </div>
        </div>
        <div class="SZHBCDCBottom">
          <div class="SZHBCDCBLeft" @click="SZHBCheckAcountClose">取消</div>
          <div class="SZHBCDCBRight" @click="SZHBCheckAcountClose">确定</div>
        </div>
      </div>
    </div>

    <!-- 账户登录模态框 -->
    <div class="APIAcountLogin">
      <div class="APIALContent">
        <div class="APIALCTop">
          <div class="APIALCTLeft">账户登录</div>
          <div class="APIALCTRight" @click="CreateAcountClose">×</div>
        </div>
        <div class="APIALCCenter">
          <div class="APIALCCWrite">
            <span class="APIALCCLeft">备注名</span>
            <input type="text" class="APIALCCRight" v-model="NewMemoName" placeholder="请输入备注名">
          </div>
          <div class="APIALCCWrite">
            <span class="APIALCCLeft">账号</span>
            <input type="text" class="APIALCCRight" v-model="NewAcount" placeholder="请输入账号">
          </div>
          <div class="APIALCCWrite">
            <span class="APIALCCLeft">密码</span>
            <input type="text" class="APIALCCRight" v-model="NewPassword" placeholder="请输入密码">
          </div>
          <div class="APIALCCWrite">
            <span class="APIALCCLeft">短信验证码</span>
            <input type="text" class="APIALCCRight" v-model="VerificationCode" placeholder="请输入验证码">
            <div class="VerificationCodeButton" @click="GetVerificationCode">发送验证码</div>
          </div>
        </div>
        <div class="APIALCBottom">
          <div class="APIALCBLeft" @click="CreateAcountClose">取消</div>
          <div class="APIALCBRight" @click="CreateAcountTrue">确定</div>
        </div>
      </div>
    </div>

    <!-- 新建API模态框 -->
    <div class="CreateAPI">
      <div class="CAPIContent">
        <div class="CAPICTop">
          <div class="CAPICTLeft">新建API</div>
          <div class="CAPICTRight" @click="CreateAPIClose">×</div>
        </div>
        <div class="CAPICCenter">
          <div class="CAPICCWrite">
            <span class="CAPICCLeft">备注名</span>
            <input type="text" class="CAPICCRight" v-model="NewMemoName" placeholder="请输入备注名">
          </div>
          <div class="CAPICCWrite">
            <span class="CAPICCLeft">apiKey</span>
            <input type="text" class="CAPICCRight" v-model="NewAcount" placeholder="请输入账号">
          </div>
          <div class="CAPICCWrite">
            <span class="CAPICCLeft">权限</span>
            <div class="CAPICCSelect">
              <el-checkbox v-model="WithdrawMoney">提币</el-checkbox>
              <el-checkbox v-model="Transaction">交易</el-checkbox>
            </div>
          </div>
          <div class="CAPICCWrite">
            <span class="CAPICCLeft">secretKey</span>
            <input type="text" class="CAPICCRight" v-model="NewPassword" placeholder="请输入密码">
          </div>
          <div class="CAPICCWrite">
            <span class="CAPICCLeft">短信验证码</span>
            <input type="text" class="CAPICCRight" v-model="VerificationCode" placeholder="请输入验证码">
            <div class="VerificationCodeButton" @click="GetVerificationCode">发送验证码</div>
          </div>
        </div>
        <div class="CAPICBottom">
          <div class="CAPICBLeft" @click="CreateAPIClose">取消</div>
          <div class="CAPICBRight" @click="CreateAPITrue">确定</div>
        </div>
      </div>
    </div>

    <!-- 信息展示 -->
    <div class="MyAPI-prodect contain">
      <div class="MyAPI-prodectTop">
        <div class="MyAPI-myCollection" style="cursor:pointer" @click='SharesAPI' :class="{active:sharesapi}">股票API</div>
        <div class="MyAPI-myCollection" style="cursor:pointer" @click='QuotationAPI' :class="{active:quotationapi}">行情API</div>
        <div class="MyAPI-myCollection" style="cursor:pointer" @click='DigitalCurrencyAPI' :class="{active:digitalcurrencyapi}">数字货币API</div>
      </div>

      <!-- 股票API部分 -->
      <div class="GuPiaoAPI" v-show="sharesAPI">
        <div class="GPTop">
          <div class="GPSecretKey">股票密钥</div>
          <div class="GPCreateAccount" @click="CreateAcountOpen(SharesAPIType)">账户登录</div>
        </div>
        <ul class="GuPiaoAPITitle">
          <li>备注名</li>
          <li>账号</li>
          <li>密码</li>
          <li>创建时间</li>
          <li>操作</li>
        </ul>
        <ul class="GuPiaoAPIContent" v-for="item in SharesAPIData" :key="item.id">
          <li>{{item.MemoName}}</li>
          <li>{{item.AccountNumber}}</li>
          <li>{{item.AccountPassword | PasswordFilter}}</li>
          <li>{{item.CreateTime}}</li>
          <li>
            <div class="GPCButton">
              <div class="GPCCheck" @click="CheckAcountOpen(item.MemoName,SharesAPIType)">查看</div>
              <div class="GPCDelete" @click="DeleteAcountOpen(item.MemoName,SharesAPIType)">删除</div>
            </div>
          </li>
        </ul>


        <!-- 下部的分页 -->
        <div class="paging">
          <el-pagination
          background layout="prev, pager, next" 
          :total="SharesAPITotal" 
          :page-size="pageSize"
          :current-page="SharesAPICP"
          @current-change="SharesAPICPChange">
          </el-pagination>
        </div>

      </div>

      <!-- 行情API部分 -->
      <div class="HangQinAPI" v-show="quotationAPI">
        <div class="HQTop">
          <div class="HQSecretKey">行情密钥</div>
          <div class="HQCreateAccount" @click="CreateAcountOpen(QuotationAPType)">账户登录</div>
        </div>
        <ul class="HangQinAPITitle">
          <li>备注名</li>
          <li>账号</li>
          <li>密码</li>
          <li>创建时间</li>
          <li>操作</li>
        </ul>
        <ul class="HangQinAPIContent" v-for="item in QuotationAPIData" :key="item.id">
          <li>{{item.MemoName}}</li>
          <li>{{item.AccountNumber}}</li>
          <li>{{item.AccountPassword | PasswordFilter}}</li>
          <li>{{item.CreateTime}}</li>
          <li>
            <div class="HQCButton">
              <div class="HQCCheck" @click="CheckAcountOpen(item.MemoName,QuotationAPType)">查看</div>
              <div class="HQCDelete" @click="DeleteAcountOpen(item.MemoName,QuotationAPType)">删除</div>
            </div>
          </li>
        </ul>


        <!-- 下部的分页 -->
        <div class="paging">
          <el-pagination
          background layout="prev, pager, next" 
          :total="QuotationAPITotal" 
          :page-size="pageSize"
          :current-page="QuotationAPICP"
          @current-change="QuotationAPICPChange">
          </el-pagination>
        </div>

      </div>

      <!-- 数字货币API部分 -->
      <div class="ShuZiHuoBiAPI" v-show="digitalCurrencyAPI">
        <div class="SZHBTop">
          <div class="SZHBSecretKey">数字货币密钥</div>
          <div class="SZHBCreateAccount" @click="CreateAPIOpen(DigitalCurrencyAPIType)">新建API</div>
        </div>
        <ul class="ShuZiHuoBiAPITitle">
          <li>备注名</li>
          <li>apiKey</li>
          <li>权限</li>
          <li>创建时间</li>
          <li>操作</li>
        </ul>
        <ul class="ShuZiHuoBiAPIContent" v-for="item in DigitalCurrencyAPIData" :key="item.id">
          <li>{{item.MemoName}}</li>
          <li>{{item.AccountNumber}}</li>
          <li>{{item.Jurisdiction}}</li>
          <li>{{item.CreateTime}}</li>
          <li>
            <div class="SZHBCButton">
              <div class="SZHBCCheck" @click="CheckAcountOpen(item.MemoName,DigitalCurrencyAPIType)">查看</div>
              <div class="SZHBCDelete" @click="DeleteAcountOpen(item.MemoName,DigitalCurrencyAPIType)">删除</div>
            </div>
          </li>
        </ul>


        <!-- 下部的分页 -->
        <div class="paging">
          <el-pagination
          background layout="prev, pager, next" 
          :total="DigitalCurrencyAPITotal" 
          :page-size="pageSize"
          :current-page="DigitalCurrencyAPICP"
          @current-change="DigitalCurrencyAPICPChange">
          </el-pagination>
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
			sharesAPI: true,
			quotationAPI: false,
      digitalCurrencyAPI:false,
      
			sharesapi: true,
			quotationapi: false,
			digitalcurrencyapi: false,
			itemId:"1",
      //新建账户相关信息
      NewMemoName:"",
      NewAcount:"",
      NewPassword:"",

      //输入的验证码
      VerificationCode:"",
      //新建账户或者API的类型
      NewAcountAPIType:"",

      //新建API相关信息
      NewAPIMemoName:"",
      NewAPIAcount:"",
      NewAPIPassword:"",
      WithdrawMoney:true,
      Transaction:true,

			//每页显示个数
			pageSize:5,
      //需要操作的账户类型
      OperatingAccountType:"",
      //需要操作的账户
      OperatingAccount:"",

			//股票API相关数据
			//股票API总数
			SharesAPITotal:20,
			//股票API当前页数
			SharesAPICP:1,
			//股票API的数据
			// SharesAPIData:[],
			SharesAPIData:[
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
			],
			//发送请求时类型
			SharesAPIType:1,


			//行情API相关数据
			//行情API总数
			QuotationAPITotal:20,
			//行情API当前页数
			QuotationAPICP:1,
			//行情API的数据
      // QuotationAPIData:[],
      QuotationAPIData:[
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					AccountPassword:'123456',
					CreateTime:"2018-06-24 09:00:00",
				},
			],
			//发送请求时类型
			QuotationAPType:2,


			//数字货币API相关数据
			//数字货币API总数
			DigitalCurrencyAPITotal:20,
			//数字货币API当前页数
			DigitalCurrencyAPICP:1,
			//数字货币API的数据
			// DigitalCurrencyAPIData:[],
			DigitalCurrencyAPIData:[
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					Jurisdiction:'提币，交易',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					Jurisdiction:'提币，交易',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					Jurisdiction:'提币，交易',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					Jurisdiction:'提币，交易',
					CreateTime:"2018-06-24 09:00:00",
				},
				{
					MemoName:'api_test',
					AccountNumber:"217131215",
					Jurisdiction:'提币，交易',
					CreateTime:"2018-06-24 09:00:00",
				},
			],
			//发送请求时类型
			DigitalCurrencyAPIType:3,

    };
  },
  mounted: function() {
	  this.$nextTick(function() {
			this.GetMyAPIData(self.SharesAPIType,self.SharesAPICP,self.pageSize);
		});
  },
  methods: {
    //获取验证码
    GetVerificationCode(){
      this.$http.post(Global.getRequestUrl() + "/user/verifycode", 
        {
          "acount": this.OperatingAccount,
          "acountType": this.OperatingAccountType
        },
        {
          emulateJSON: true
        }
      ).then(function(resp) {
        resp = resp.data;
        if(resp.success) {
          console.log("获取验证码成功!");
        }else {
          console.error("获取验证码失败！");
          console.error(resp);
          alert(JSON.stringify(resp));
        }
      }, function(error) {
        console.error("获取验证码请求失败!");
        console.error(error);
        alert(JSON.stringify(error));
      });
    },
  
    //弹出新建API模态框
    CreateAPIOpen(type){
      var Height = $(window).height();
      var Width = $(window).width();
      $('.CreateAPI').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
      this.NewAcountAPIType = type;
    },
    //关闭新建API模态框
    CreateAPIClose(){
      $('.CreateAPI').fadeOut('1000');
    },
    //确定新建API
    CreateAPITrue(){
      $('.CreateAPI').fadeOut('1000');
      this.$http.post(Global.getRequestUrl() + "/favor/cancel", 
        {
          "NewAPIMemoName":this.NewAPIMemoName,
          "NewAPIAcount":this.NewAPIAcount,
          "NewAPIPassword":this.NewAPIPassword,
          "WithdrawMoney":this.WithdrawMoney,
          "Transaction":this.Transaction,
          "VerificationCode":this.VerificationCode,
          "type":this.NewAcountAPIType,
        },
        {
          headers: Global.getRequestHeader()
        }
      ).then(function(resp) {
        resp = resp.body;
        if(resp.succss) {
          console,log("新建账户成功！");
          if(type==1){
            self.GetMyAPIData(self.SharesAPIType,self.SharesAPICP,self.pageSize);
          }else if(type==2){
            self.GetMyAPIData(self.QuotationAPType,self.QuotationAPICP,self.pageSize);
          }else if(type==3){
            self.GetMyAPIData(self.DigitalCurrencyAPIType,self.DigitalCurrencyAPICP,self.pageSize);
          }
        }else {
          console.error("新建账户失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
        }
      }, function(error) {
        console.error("新建账户请求失败");
        console.error(error);
      });
    },

    //弹出新建账户模态框
    CreateAcountOpen(){
      var Height = $(window).height();
      var Width = $(window).width();
      $('.APIAcountLogin').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
    },
    //关闭新建账户模态框
    CreateAcountClose(){
      $('.APIAcountLogin').fadeOut('1000');
    },
    //确定新建账户
    CreateAcountTrue(){
      $('.APIAcountLogin').fadeOut('1000');
      this.$http.post(Global.getRequestUrl() + "/favor/cancel", 
        {
          "NewMemoName":this.NewMemoName,
          "NewAcount":this.NewAcount,
          "NewPassword":this.NewPassword,
          "VerificationCode":this.VerificationCode,
          "type":this.NewAcountAPIType,
        },
        {
          headers: Global.getRequestHeader()
        }
      ).then(function(resp) {
        resp = resp.body;
        if(resp.succss) {
          console,log("新建账户成功！");
          if(type==1){
            self.GetMyAPIData(self.SharesAPIType,self.SharesAPICP,self.pageSize);
          }else if(type==2){
            self.GetMyAPIData(self.QuotationAPType,self.QuotationAPICP,self.pageSize);
          }else if(type==3){
            self.GetMyAPIData(self.DigitalCurrencyAPIType,self.DigitalCurrencyAPICP,self.pageSize);
          }
        }else {
          console.error("新建账户失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
        }
      }, function(error) {
        console.error("新建账户请求失败");
        console.error(error);
      });
    },

    //弹出查看账户信息模态框(数字货币详情)
    SZHBCheckAcountOpen(){
      var Height = $(window).height();
      var Width = $(window).width();
      $('.SZHBCheckData').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
    },
    //关闭查看账户信息模态框(数字货币详情)
    SZHBCheckAcountClose() {
      $('.SZHBCheckData').fadeOut('1000');
    },

    //弹出查看账户信息模态框(股票,行情)
    CheckAcountDataOpen() {
      var Height = $(window).height();
      var Width = $(window).width();
      $('.MyAPICheckData').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
    },
    //关闭查看账户信息模态框(股票,行情)
    CheckAcountDataClose() {
      $('.MyAPICheckData').fadeOut('1000');
    },

    //弹出查看账户验证码模态框
    CheckAcountOpen(name,type) {
      var Height = $(window).height();
      var Width = $(window).width();
      $('.MyAPICheckVerifi').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
      this.OperatingAccountType = name;
      this.OperatingAccount = type;
      console.log(this.OperatingAccount);
    },
    //关闭查看账户验证码模态框
    CheckAcountClose() {
      $('.MyAPICheckVerifi').fadeOut('1000');
    },
    //确定查看
    CheckAcountTrue() {
      $('.MyAPICheckVerifi').fadeOut('1000');
      if(this.OperatingAccount==1 || this.OperatingAccount==2){
        this.CheckAcountDataOpen();
      }else if(this.OperatingAccount==3){
        this.SZHBCheckAcountOpen();
      }
      this.$http.post(Global.getRequestUrl() + "/favor/cancel", 
        {
          "VerifiCode": this.VerificationCode
        },
        {
          headers: Global.getRequestHeader()
        }
      ).then(function(resp) {
        resp = resp.body;
        if(resp.succss) {
          console.log("查看账户信息成功！");
          if(type==1 || type==2){
            this.CheckAcountDataOpen();
          }else if(type==3){

          }
        }else {
          console.error("查看账户信息失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
        }
      }, function(error) {
        console.error("查看账户信息请求失败");
        console.error(error);
      });
    },

    //弹出删除账户模态框
    DeleteAcountOpen(name,type) {
      var Height = $(window).height();
      var Width = $(window).width();
      $('.MyAPIDelete').css({
        "width":Width,
        "height":Height
      }).fadeIn('1000');
      this.OperatingAccountType = name;
      this.OperatingAccount = type;
    },
    //关闭删除账户模态框
    DeleteAcountClose() {
      $('.MyAPIDelete').fadeOut('1000');
    },
    //确定删除
    DeleteAcountTrue() {
      $('.MyAPIDelete').fadeOut('1000');
      this.$http.post(Global.getRequestUrl() + "/favor/cancel", 
        {
          "VerifiCode": this.VerificationCode
        },
        {
          headers: Global.getRequestHeader()
        }
      ).then(function(resp) {
        resp = resp.body;
        if(resp.succss) {
          console,log("删除账户成功！");
          alert(resp.msg);
        }else {
          console.error("删除账户失败失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
        }
      }, function(error) {
        console.error("删除账户失败请求失败");
        console.error(error);
      });
    },

    // 获取分页中每一页的数据（股票API部分）
    SharesAPICPChange(curPage) {
        var self = this;
        self.SharesAPICP = curPage;
        console.log(self.SharesAPICP)
        //Get current page data from back end
        self.GetMyAPIData(self.SharesAPIType,self.SharesAPICP,self.pageSize);
    },
    // 获取分页中每一页的数据（行情API部分）
    QuotationAPICPChange(curPage) {
      var self = this;
      self.QuotationAPICP = curPage;
      //Get current page data from back end
      self.GetMyAPIData(self.QuotationAPType,self.QuotationAPICP,self.pageSize);
    },
    // 获取分页中每一页的数据（数字货币API部分）
    DigitalCurrencyAPICPChange(curPage) {
      var self = this;
      self.DigitalCurrencyAPICP = curPage;
      //Get current page data from back end
      self.GetMyAPIData(self.DigitalCurrencyAPIType,self.DigitalCurrencyAPICP,self.pageSize);
    },
    // 点击我的API发送请求
    GetMyAPIData(CType,Cpage,CpageSize) {
      this.$http.get(Global.getRequestUrl() + "/favor/list",
        {
          params: {
            'type': CType,
            'page': Cpage,
            'pageSize':CpageSize
          },
          headers: Global.getRequestHeader()
        }
      ).then(function(resp) {
        var resp = resp.body;
        if(resp.success) {
          console.log("获取我的API数据成功!");
          if(resp.type == 1){
            this.signalCitySTotal = resp.data.pagination.total;
            this.itemId = resp.data.results.id;
            console.log("获取我的API，股票API数据成功，结果为：");
            this.signalCitySData = resp.data.results;
          }else if(resp.type == 2){
            this.AssetStewardshipTotal = resp.data.pagination.total;
            this.itemId = resp.data.results.id;
            console.log("获取我的API，行情API数据成功，结果为：");
            this.AssetStewardshipData = resp.data.results;
          }else if(resp.type == 3){
            this.AssetStewardshipTotal = resp.data.pagination.total;
            this.itemId = resp.data.results.id;
            console.log("获取我的API，数字货币API数据成功，结果为：");
            this.AssetStewardshipData = resp.data.results;
          }
        }else {
          console.error("获取我的API数据失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
        }
      }, function(error) {
        console.error("获取我的API数据请求失败！");
        console.error(error);
      });
    },

    //第一个选项卡
    SharesAPI() {
      this.sharesAPI = this.sharesapi = true;
      this.quotationAPI = this.quotationapi = false;
      this.digitalCurrencyAPI = this.digitalcurrencyapi = false;
      this.GetMyAPIData(this.AssetStewardshipType,this.AssetStewardshipCP,this.pageSize);      
    },
    //第二个选项卡
    QuotationAPI() {
      this.sharesAPI = this.sharesapi = false;
      this.quotationAPI = this.quotationapi = true;
      this.digitalCurrencyAPI = this.digitalcurrencyapi = false;
      this.GetMyAPIData(this.AssetStewardshipType,this.AssetStewardshipCP,this.pageSize);
    },
    //第三个选项卡
    DigitalCurrencyAPI() {
      this.sharesAPI = this.sharesapi = false;
      this.quotationAPI = this.quotationapi = false;
      this.digitalCurrencyAPI = this.digitalcurrencyapi = true;
      this.GetMyAPIData(this.SignalRingType,this.SignalRingCP,this.pageSize);
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
    PasswordFilter(val){
      return "******"
    },
	}
};
</script>

<style lang="less">
//删除账户模态框
.MyAPIDelete{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .MyAPIDContent{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 8px;
    width: 504px;
    // height: 258px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow: hidden;
    .MyAPIDCTop{
      width: 100% ;
      height: 54px;
      padding: 0 30px;
      line-height: 54px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      overflow: hidden;
      .MyAPIDCTLeft{
        float: left;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: #333;
      }
      .MyAPIDCTRight{
        float: right;
        height: 54px;
        line-height: 54px;
        font-size: 32px;
        color: #999;
        cursor: pointer;
      }
    }
    .MyAPIDCCenter{
      width: 100% ;
      // height: 130px;
      height: 46px;
      margin: 42px 0;
      padding: 0 30px ;
      position: relative;
      overflow: hidden;
      .MyAPIDCCTitle{
        float: left;
        height: 46px;
        line-height: 46px;
        font-size: 16px;
        color: #333;
      }
      .VerificationCode{
        float: left;
        width: 310px;
        height: 46px;
        padding: 0 10px ;
        margin-left: 30px;
        line-height: 46px;
        font-size: 14px;
        color: #333;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
      .VerificationCodeButton{
        position: absolute;
        top: 8px;
        right: 54px;
        width: 88px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        color: #00aefc;
        border-radius: 4px;
        border: 1px solid #00aefc;
        cursor: pointer;
      }
    }
    .MyAPIDCBottom{
      width: 260px ;
      margin: 0 auto;
      box-sizing: border-box;
      .MyAPIDCBLeft,
      .MyAPIDCBRight{
        cursor: pointer;
        width: 100px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        line-height: 36px;
        border-radius: 4px;
      }
      .MyAPIDCBLeft{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .MyAPIDCBRight{
        float: right;
        background: #00aefc;
        color: #fff;
      }
    }
  }
}

//查看账户验证码模态框
.MyAPICheckVerifi{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .MyAPICVContent{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 8px;
    width: 504px;
    // height: 258px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow: hidden;
    .MyAPICVCTop{
      width: 100% ;
      height: 54px;
      padding: 0 30px;
      line-height: 54px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      overflow: hidden;
      .MyAPICVCTLeft{
        float: left;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: #333;
      }
      .MyAPICVCTRight{
        float: right;
        height: 54px;
        line-height: 54px;
        font-size: 32px;
        color: #999;
        cursor: pointer;
      }
    }
    .MyAPICVCCenter{
      width: 100% ;
      // height: 130px;
      height: 46px;
      margin: 42px 0;
      padding: 0 30px ;
      position: relative;
      overflow: hidden;
      .MyAPICVCCTitle{
        float: left;
        height: 46px;
        line-height: 46px;
        font-size: 16px;
        color: #333;
      }
      .VerificationCode{
        float: left;
        width: 310px;
        height: 46px;
        padding: 0 10px ;
        margin-left: 30px;
        line-height: 46px;
        font-size: 14px;
        color: #333;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.1);
      }
      .VerificationCodeButton{
        position: absolute;
        top: 8px;
        right: 54px;
        width: 88px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        color: #00aefc;
        border-radius: 4px;
        border: 1px solid #00aefc;
        cursor: pointer;
      }
    }
    .MyAPICVCBottom{
      width: 260px ;
      margin: 0 auto;
      box-sizing: border-box;
      .MyAPICVCBLeft,
      .MyAPICVCBRight{
        cursor: pointer;
        width: 100px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        line-height: 36px;
        border-radius: 4px;
      }
      .MyAPICVCBLeft{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .MyAPICVCBRight{
        float: right;
        background: #00aefc;
        color: #fff;
      }
    }
  }
}

//查看账户信息模态框(股票,行情)
.MyAPICheckData{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .MyAPICDContent{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 8px;
    width: 504px;
    // height: 258px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow: hidden;
    .MyAPICDCTop{
      width: 100% ;
      height: 54px;
      padding: 0 30px;
      line-height: 54px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      overflow: hidden;
      .MyAPICDCTLeft{
        float: left;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: #333;
      }
      .MyAPICDCTRight{
        float: right;
        height: 54px;
        line-height: 54px;
        font-size: 32px;
        color: #999;
        cursor: pointer;
      }
    }
    .MyAPICDCCenter{
      width: 100% ;
      // height: 130px;
      // height: 46px;
      margin: 42px 0;
      padding: 0 30px ;
      position: relative;
      overflow: hidden;
      .MyAPICDCInformation{
        width: 100% ;
        height: 32px;
        overflow: hidden;
        .MyAPICDCILeft{
          float: left;
          width: 80px;
          height: 32px;
          text-align: right;
          line-height: 32px;
          font-size: 16px;
          color: #999;
        }
        .MyAPICDCIRight{
          float: left;
          height: 32px;
          margin-left: 30px;
          line-height: 32px;
          font-size: 16px;
          color: #666;
        }
      }
    }
    .MyAPICDCBottom{
      width: 260px ;
      margin: 0 auto;
      box-sizing: border-box;
      .MyAPICDCBLeft,
      .MyAPICDCBRight{
        cursor: pointer;
        width: 100px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        line-height: 36px;
        border-radius: 4px;
      }
      .MyAPICDCBLeft{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .MyAPICDCBRight{
        float: right;
        background: #00aefc;
        color: #fff;
      }
    }
  }
}

//查看账户信息模态框(数字货币详情)
.SZHBCheckData{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .SZHBCDContent{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 8px;
    width: 504px;
    // height: 258px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow: hidden;
    .SZHBCDCTop{
      width: 100% ;
      height: 54px;
      padding: 0 30px;
      line-height: 54px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      overflow: hidden;
      .SZHBCDCTLeft{
        float: left;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: #333;
      }
      .SZHBCDCTRight{
        float: right;
        height: 54px;
        line-height: 54px;
        font-size: 32px;
        color: #999;
        cursor: pointer;
      }
    }
    .SZHBCDCCenter{
      width: 100% ;
      // height: 130px;
      // height: 46px;
      margin: 42px 0;
      padding: 0 30px ;
      position: relative;
      overflow: hidden;
      .SZHBCDCInformation{
        width: 100% ;
        height: 32px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .SZHBCDCILeft{
          float: left;
          width: 80px;
          height: 32px;
          text-align: right;
          line-height: 32px;
          font-size: 16px;
          color: #999;
        }
        .SZHBCDCIRight{
          float: left;
          height: 32px;
          margin-left: 30px;
          line-height: 32px;
          font-size: 16px;
          color: #666;
        }
      }
    }
    .SZHBCDCBottom{
      width: 260px ;
      margin: 0 auto;
      box-sizing: border-box;
      .SZHBCDCBLeft,
      .SZHBCDCBRight{
        cursor: pointer;
        width: 100px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        line-height: 36px;
        border-radius: 4px;
      }
      .SZHBCDCBLeft{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .SZHBCDCBRight{
        float: right;
        background: #00aefc;
        color: #fff;
      }
    }
  }
}

//账户登录模态框
.APIAcountLogin{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .APIALContent{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 8px;
    width: 504px;
    // height: 258px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow: hidden;
    .APIALCTop{
      width: 100% ;
      height: 54px;
      padding: 0 30px;
      line-height: 54px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      overflow: hidden;
      .APIALCTLeft{
        float: left;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: #333;
      }
      .APIALCTRight{
        float: right;
        height: 54px;
        line-height: 54px;
        font-size: 32px;
        color: #999;
        cursor: pointer;
      }
    }
    .APIALCCenter{
      width: 100% ;
      // height: 130px;
      // height: 46px;
      margin: 32px 0 42px;
      padding: 0 30px ;
      overflow: hidden;
      .APIALCCWrite{
        margin-top: 10px;
        width: 100%;
        height: 46px;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .APIALCCLeft{
          float: left;
          width: 80px;
          height: 46px;
          text-align: right;
          line-height: 46px;
          font-size: 16px;
          color: #333;
        }
        .APIALCCRight{
          float: left;
          width: 310px;
          height: 46px;
          padding: 0 10px ;
          margin-left: 30px;
          line-height: 46px;
          font-size: 14px;
          color: #333;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        .VerificationCodeButton{
          position: absolute;
          top: 8px;
          right: 28px;
          width: 88px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          font-size: 14px;
          color: #00aefc;
          border-radius: 4px;
          border: 1px solid #00aefc;
          cursor: pointer;
        }
      }
    }
    .APIALCBottom{
      width: 260px ;
      margin: 0 auto;
      box-sizing: border-box;
      .APIALCBLeft,
      .APIALCBRight{
        cursor: pointer;
        width: 100px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        line-height: 36px;
        border-radius: 4px;
      }
      .APIALCBLeft{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .APIALCBRight{
        float: right;
        background: #00aefc;
        color: #fff;
      }
    }
  }
}

//新建API模态框
.CreateAPI{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .CAPIContent{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 8px;
    width: 504px;
    // height: 258px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow: hidden;
    .CAPICTop{
      width: 100% ;
      height: 54px;
      padding: 0 30px;
      line-height: 54px;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      overflow: hidden;
      .CAPICTLeft{
        float: left;
        height: 54px;
        line-height: 54px;
        font-size: 16px;
        color: #333;
      }
      .CAPICTRight{
        float: right;
        height: 54px;
        line-height: 54px;
        font-size: 32px;
        color: #999;
        cursor: pointer;
      }
    }
    .CAPICCenter{
      width: 100% ;
      // height: 130px;
      // height: 46px;
      margin: 32px 0 42px;
      padding: 0 30px ;
      overflow: hidden;
      .CAPICCWrite{
        margin-top: 10px;
        width: 100%;
        height: 46px;
        position: relative;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        .CAPICCLeft{
          float: left;
          width: 80px;
          height: 46px;
          text-align: right;
          line-height: 46px;
          font-size: 16px;
          color: #333;
        }
        .CAPICCSelect{
          float: left;
          margin: 15px 0 0 30px;
          .el-checkbox__inner{
            width: 16px;
            height: 16px;
            border-radius:2px;
            &::after{
              left: 4px;
            }
          }
        }
        .CAPICCRight{
          float: left;
          width: 310px;
          height: 46px;
          padding: 0 10px ;
          margin-left: 30px;
          line-height: 46px;
          font-size: 14px;
          color: #333;
          border: none;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        .VerificationCodeButton{
          position: absolute;
          top: 8px;
          right: 28px;
          width: 88px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          font-size: 14px;
          color: #00aefc;
          border-radius: 4px;
          border: 1px solid #00aefc;
          cursor: pointer;
        }
      }
    }
    .CAPICBottom{
      width: 260px ;
      margin: 0 auto;
      box-sizing: border-box;
      .CAPICBLeft,
      .CAPICBRight{
        cursor: pointer;
        width: 100px;
        height: 36px;
        font-size: 16px;
        text-align: center;
        line-height: 36px;
        border-radius: 4px;
      }
      .CAPICBLeft{
        float: left;
        border: 1px solid #dcdcdc;
        color: #333;
      }
      .CAPICBRight{
        float: right;
        background: #00aefc;
        color: #fff;
      }
    }
  }
}


.active{
	color: #00aefc;
}
//产品展示
.MyAPI-prodect {
  overflow: hidden;
  .MyAPI-prodectTop {
		font-size: 16px;
		overflow: hidden;
		margin: 20px 5px;
		.MyAPI-myCollection {
			display: block;
			float: left;
			margin-right: 30px;
		}
  }
  //股票API部分
	.GuPiaoAPI{
    width: 100%;
    padding: 30px 30px 82px;
    background-color: #fff;
    overflow: hidden;
		position: relative;
		margin-bottom: 30px;
		.paging{
			position: absolute;
			bottom: 30px;
			right: 60px;
    }
    .GPTop{
      width: 100% ;
      height: 32px;
      overflow: hidden;
      .GPSecretKey{
        float: left;
        height: 32px;
        line-height: 32px;
        color: #666;
        font-size: 16px;
      }
      .GPCreateAccount{
        width: 88px;
        height: 32px;
        float: right;
        line-height: 32px;
        text-align: center;
        background-color: #00aefc;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .GuPiaoAPITitle{
      width: 100% ;
      height: 42px;
      margin-top: 20px;
      background-color: #f0f0f0;
      display: flex;
      li{
        flex: 1;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        color: #333;
      }
    }
    .GuPiaoAPIContent{
      width: 100% ;
      height: 42px;
      background-color: #fff;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      display: flex;
      li{
        flex: 1;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        color: #333;
        .GPCButton{
          width: 80px;
          height: 42px;
          margin: 0 auto;
          .GPCCheck{
            height: 42px;
            line-height: 42px;
            float: left;
            color: #00aefc;
            cursor: pointer;
          }
          .GPCDelete{
            height: 42px;
            line-height: 42px;
            float: right;
            color: #00aefc;
            cursor: pointer;
          }
        }
      }
    }
	}

	//行情API部分
	.HangQinAPI{
    width: 100%;
    padding: 30px 30px 82px;
    background-color: #fff;
    overflow: hidden;
		position: relative;
		margin-bottom: 30px;
		.paging{
			position: absolute;
			bottom: 30px;
			right: 60px;
    }
    .HQTop{
      width: 100% ;
      height: 32px;
      overflow: hidden;
      .HQSecretKey{
        float: left;
        height: 32px;
        line-height: 32px;
        color: #666;
        font-size: 16px;
      }
      .HQCreateAccount{
        width: 88px;
        height: 32px;
        float: right;
        line-height: 32px;
        text-align: center;
        background-color: #00aefc;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .HangQinAPITitle{
      width: 100% ;
      height: 42px;
      margin-top: 20px;
      background-color: #f0f0f0;
      display: flex;
      li{
        flex: 1;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        color: #333;
      }
    }
    .HangQinAPIContent{
      width: 100% ;
      height: 42px;
      background-color: #fff;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      display: flex;
      li{
        flex: 1;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        color: #333;
        .HQCButton{
          width: 80px;
          height: 42px;
          margin: 0 auto;
          .HQCCheck{
            height: 42px;
            line-height: 42px;
            float: left;
            color: #00aefc;
            cursor: pointer;
          }
          .HQCDelete{
            height: 42px;
            line-height: 42px;
            float: right;
            color: #00aefc;
            cursor: pointer;
          }
        }
      }
    }
	}
	  
	// 信号擂台
	.ShuZiHuoBiAPI{
    width: 100%;
    padding: 30px 30px 82px;
    background-color: #fff;
    overflow: hidden;
		position: relative;
		margin-bottom: 30px;
		.paging{
			position: absolute;
			bottom: 30px;
			right: 60px;
    }
    .SZHBTop{
      width: 100% ;
      height: 32px;
      overflow: hidden;
      .SZHBSecretKey{
        float: left;
        height: 32px;
        line-height: 32px;
        color: #666;
        font-size: 16px;
      }
      .SZHBCreateAccount{
        width: 88px;
        height: 32px;
        float: right;
        line-height: 32px;
        text-align: center;
        background-color: #00aefc;
        border-radius: 4px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .ShuZiHuoBiAPITitle{
      width: 100% ;
      height: 42px;
      margin-top: 20px;
      background-color: #f0f0f0;
      display: flex;
      li{
        flex: 1;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        color: #333;
      }
    }
    .ShuZiHuoBiAPIContent{
      width: 100% ;
      height: 42px;
      background-color: #fff;
      border-bottom: 1px solid rgba(0,0,0,0.1);
      display: flex;
      li{
        flex: 1;
        height: 42px;
        line-height: 42px;
        text-align: center;
        font-size: 14px;
        color: #333;
        .SZHBCButton{
          width: 80px;
          height: 42px;
          margin: 0 auto;
          .SZHBCCheck{
            height: 42px;
            line-height: 42px;
            float: left;
            color: #00aefc;
            cursor: pointer;
          }
          .SZHBCDelete{
            height: 42px;
            line-height: 42px;
            float: right;
            color: #00aefc;
            cursor: pointer;
          }
        }
      }
    }
	}
}
</style>
