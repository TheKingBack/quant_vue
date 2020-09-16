<template>
  <div>
    <!-- 添加队长模态框 -->
    <div class="AddCaptain">
      <div class="AddCaptain-content">
        <div class="AddCaptain-top">
          添加队长
          <div class="CloseWindow" @click="CloseAddCaptain">×</div>
        </div>
        <div class="AddCaptain-center">
          <div class="AccountInformation">
            <div class="InformationTop">账户信息</div>
            <div class="InformationL">
              <span class="AddCaptainS"></span>
              <div class="InformationT">平台账户</div>
              <input class="AddCaptainC" type="text" placeholder="请输入账户名称" v-model="AddCaptainAccount">
            </div>
            <div class="InformationR">
              <span class="AddCaptainS"></span>
              <div class="InformationT">分工</div>
              <input class="AddCaptainC" type="text" disabled  value="队长" >
            </div>
          </div>
          <div class="PersonalInformation">
            <div class="InformationTop">个人信息</div>
            <div class="InformationL">
              <span class="AddCaptainS"></span>
              <div class="InformationT">姓名</div>
              <input class="AddCaptainC" placeholder="请输入姓名" v-model="AddCaptainName" type="text">
            </div>
            <div class="InformationR">
              <span class="AddCaptainS"></span>
              <div class="InformationT">性别</div>
              <el-select v-model="AddCaptainGender" placeholder="请选择姓别" style="width: 310px;">
                <el-option
                  v-for="item in Genders"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="PersonalInformation1">
              <div class="InformationL">
                <span class="AddCaptainS"></span>
                <div class="InformationT">联系电话</div>
                <input class="AddCaptainC" placeholder="请输入联系方式" v-model="AddCaptainPhone" type="tel">              
              </div>
              <div class="InformationR">
                <span class="AddCaptainS"></span>
                <div class="InformationT">电子邮箱</div>
                <input class="AddCaptainC" placeholder="请输入电子邮箱" v-model="AddCaptainEmail" type="email">                            
              </div>
            </div>
            <div class="PersonalInformation1">
              <div class="InformationL">
                <span class="AddCaptainS"></span>
                <div class="InformationT">微信号</div>
                <input class="AddCaptainC" placeholder="请输入微信号" v-model="AddCaptainWeChat" type="text">              
              </div>
              <div class="InformationR">
                <span class="AddCaptainS"></span>
                <div class="InformationT">QQ</div>
                <input class="AddCaptainC" placeholder="请输入qq号" v-model="AddCaptainQQ" type="text">                            
              </div>
            </div>
            
          </div>
          <div class="UniversityInformation">
            <div class="InformationTop">院校信息</div>
            <div class="InformationL">
              <span class="AddCaptainS"></span>
              <div class="InformationT">学校信息</div>
              <input class="AddCaptainC" placeholder="请输入学校名称" v-model="AddCaptainSchoolName" type="text">
            </div>
            <div class="InformationR">
              <span class="AddCaptainS"></span>
              <div class="InformationT">院系</div>
              <input class="AddCaptainC" placeholder="请输入院系" v-model="AddCaptainDepartment" type="text">
            </div>
            <div class="UniversityInformation1">
              <div class="InformationL">
                <span class="AddCaptainS"></span>
                <div class="InformationT">专业</div>
                <input class="AddCaptainC" placeholder="请输入专业" v-model="AddCaptainMajor" type="text">              
              </div>
              <div class="InformationR">
                <span class="AddCaptainS"></span>
                <div class="InformationT">学生证号</div>
                <input class="AddCaptainC" placeholder="请输入学生证号" v-model="AddCaptainStudentID" type="text">                            
              </div>
            </div>
          </div>
        </div>
        <div class="AddCaptain-bottom" @click="AddCaptainSubmit">确定提交</div>
      </div>
    </div>

    <!-- 添加成员模态框 -->
    <div class="AddMembers">
      <div class="AddMembers-content">
        <div class="AddMembers-top">
          添加成员
          <div class="CloseWindow" @click="CloseAddMembers">×</div>
        </div>
        <div class="AddMembers-center">
          <div class="AccountInformation">
            <div class="InformationTop">账户信息</div>
            <div class="InformationL">
              <span class="AddMembersS"></span>
              <div class="InformationT">平台账户</div>
              <input class="AddMembersC" type="text" placeholder="请输入账户名称" v-model="AddMembersAccount">
            </div>
            <div class="InformationR">
              <span class="AddMembersS"></span>
              <div class="InformationT">分工</div>
              <input class="AddMembersC" type="text" disabled  value="成员" >
            </div>
          </div>
          <div class="PersonalInformation">
            <div class="InformationTop">个人信息</div>
            <div class="InformationL">
              <span class="AddMembersS"></span>
              <div class="InformationT">姓名</div>
              <input class="AddMembersC" placeholder="请输入姓名" type="text" v-model="AddMembersName">
            </div>
            <div class="InformationR">
              <span class="AddMembersS"></span>
              <div class="AddMembersT">性别</div>
              <el-select v-model="AddMembersGender" placeholder="请输入姓别" style="width: 310px;">
                <el-option
                  v-for="item in Genders"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="PersonalInformation1">
              <div class="InformationL">
                <span class="AddMembersS"></span>
                <div class="InformationT">联系电话</div>
                <input class="AddMembersC" placeholder="请输入联系方式" type="tel" v-model="AddMembersPhone">              
              </div>
              <div class="InformationR">
                <span class="AddMembersS"></span>
                <div class="InformationT">电子邮箱</div>
                <input class="AddMembersC" placeholder="请输入电子邮箱" type="email" v-model="AddMembersEmail">                            
              </div>
            </div>
            <div class="PersonalInformation1">
              <div class="InformationL">
                <span class="AddMembersS"></span>
                <div class="InformationT">微信号</div>
                <input class="AddMembersC" placeholder="请输入微信号" type="text" v-model="AddMembersWeChat">              
              </div>
              <div class="InformationR">
                <span class="AddMembersS"></span>
                <div class="InformationT">QQ</div>
                <input class="AddMembersC" placeholder="请输入qq号" type="text" v-model="AddMembersQQ">                            
              </div>
            </div>
            
          </div>
          <div class="UniversityInformation">
            <div class="InformationTop">院校信息</div>
            <div class="InformationL">
              <span class="AddMembersS"></span>
              <div class="InformationT">学校信息</div>
              <input class="AddMembersC" placeholder="请输入学校名称" type="text" v-model="AddMembersSchoolName">
            </div>
            <div class="InformationR">
              <span class="AddMembersS"></span>
              <div class="InformationT">院系</div>
              <input class="AddMembersC" placeholder="请输入院系" type="text" v-model="AddMembersDepartment">
            </div>
            <div class="UniversityInformation1">
              <div class="InformationL">
                <span class="AddMembersS"></span>
                <div class="InformationT">专业</div>
                <input class="AddMembersC" placeholder="请输入专业" type="text" v-model="AddMembersMajor">              
              </div>
              <div class="InformationR">
                <span class="AddMembersS"></span>
                <div class="InformationT">学生证号</div>
                <input class="AddMembersC" placeholder="请输入学生证号" type="text" v-model="AddMembersStudentID">                            
              </div>
            </div>
          </div>
        </div>
        <div class="AddMembers-bottom" @click="AddMembersSubmit">确定提交</div>
      </div>
    </div>

    <!-- 添加指导老师模态框 -->
    <div class="AddTutor">
      <div class="AddTutor-content">
        <div class="AddTutor-top">
          指导老师
          <div class="CloseWindow" @click="CloseAddTutor">×</div>
        </div>
        <div class="AddTutor-center">
          <div class="PersonalInformation">
            <div class="InformationTop">个人信息</div>
            <div class="InformationL">
              <span class="AddTutorS"></span>
              <div class="InformationT">姓名</div>
              <input class="AddTutorC" placeholder="请输入姓名" type="text" v-model="AddTutorName">
            </div>
            <div class="InformationR">
              <span class="AddTutorS"></span>
              <div class="AddTutorT">性别</div>
              <el-select v-model="AddTutorGender" placeholder="请输入姓别" style="width: 310px;">
                <el-option
                  v-for="item in Genders"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="PersonalInformation1">
              <div class="InformationL">
                <span class="AddTutorS"></span>
                <div class="InformationT">联系电话</div>
                <input class="AddTutorC" placeholder="请输入联系方式" type="tel" v-model="AddTutorPhone">              
              </div>
              <div class="InformationR">
                <span class="AddTutorS"></span>
                <div class="InformationT">电子邮箱</div>
                <input class="AddTutorC" placeholder="请输入电子邮箱" type="email" v-model="AddTutorEmail">                            
              </div>
            </div>
          </div>
          <div class="UniversityInformation">
            <div class="InformationTop">院校信息</div>
            <div class="InformationL">
              <span class="AddTutorS"></span>
              <div class="InformationT">工作单位</div>
              <input class="AddTutorC" placeholder="请输入单位名称" type="text" v-model="AddTutorWorkUnit">
            </div>
            <div class="InformationR">
              <span class="AddTutorS"></span>
              <div class="InformationT">职位/职称</div>
              <input class="AddTutorC" placeholder="请输入职位" type="text" v-model="AddTutorPosition">
            </div>
          </div>
        </div>
        <div class="AddTutor-bottom" @click="AddTutorSubmit">确定提交</div>
      </div>
    </div>

    <!-- 提示信息填充完整的模态框 -->
    <div class="CompleteInformation">
      <div class="CompleteInformationContent">
        <div class="CompleteInformationCenter">
          请将信息补充完整!
        </div>
        <div class="CompleteInformationBtn" @click="CloseCompleteI">确定</div>
      </div>
    </div>



    <nav-bar :navMenuItems="AIadvisorMenu"></nav-bar>

      <div class="RPBigBox">
        <!-- 顶部 -->
        <div class="RegistrationProcess-top">
          <div class="RegistrationProcess-topContain contain">
            <router-link class="backsignalCity" to="/Description">
              <span class="backPhoto"></span>
              返回信号擂台
            </router-link>
          </div>
        </div>

        <!-- 中间部分 -->
        <div class="RegistrationProcess-center">
          <div class="RegistrationProcess-centerTop contain">
            <div class="informationTop"></div>
          </div>

          <!-- 团队信息 -->
          <div class="teamInformation containOne">
            <div class="table-top">
              <span class="signUp-span"></span>
              团队信号
            </div>
            <div class="teamInformation-name">
              <div class="teamInformation-nameTitle">
                <span class="signUp-span1"></span>
                团队名称
              </div>
              <input placeholder="请输入团队名称" v-model="TimeName" class="teamInformation-nameInput" type="text">
            </div>
            <div class="teamInformation-number">
              <div class="teamInformation-numberTitle">
                <span class="signUp-span1"></span>
                报名账号
              </div>
              <input placeholder="请输入报名账号" v-model="RegistrationNumber" class="teamInformation-numberInput" type="text">
            </div>
          </div>

          <!-- 队长信息 -->
          <div class="captainInformation containOne">
            <div class="table-top">
              <span class="signUp-span"></span>
              队长信息
              <div class="tianjia addCaptain" v-show="JudgeCaptain" @click="OpenAddCaptain">+添加</div>
              <div class="tianjia1 addCaptain" v-show="!JudgeCaptain">+添加</div>
            </div>
            <ul class="captainInformation-center">
              <li>平台账号</li>
              <li>姓名</li>
              <li>性别</li>
              <li>学校姓名</li>
              <li>院系</li>
              <li>专业</li>
              <li>联系电话</li>
              <li>电子邮箱</li>
              <li>操作</li>
            </ul>
            <ul class="captainInformationAll" v-for="item in AddCaptainData" :key="item.id">
              <li>{{item.AddCaptainAccount}}</li>
              <li>{{item.AddCaptainName}}</li>
              <li>{{item.AddCaptainGender}}</li>
              <li>{{item.AddCaptainSchoolName}}</li>
              <li>{{item.AddCaptainDepartment}}</li>
              <li>{{item.AddCaptainMajor}}</li>
              <li>{{item.AddCaptainPhone}}</li>
              <li>{{item.AddCaptainEmail}}</li>
              <li>
                <div class="modify" @click="ModifyCaptain"></div>
                <div class="deleteInformation" @click="DeleteCaptain"></div>
              </li>
            </ul>
          </div>

          <!-- 成员信息 -->
          <div class="memberInformation containOne">
            <div class="table-top">
              <span class="signUp-span"></span>
              成员信息
              <span class="prompt">（最多可添加3名成员）</span>
              <div class="tianjia addMember" v-show="JudgeMember" @click="OpenAddMembers">+添加</div>
              <div class="tianjia1 addMember" v-show="!JudgeMember">+添加</div>
            </div>
            <ul class="memberInformation-center">
              <li>平台账号</li>
              <li>姓名</li>
              <li>性别</li>
              <li>学校姓名</li>
              <li>院系</li>
              <li>专业</li>
              <li>联系电话</li>
              <li>电子邮箱</li>
              <li>操作</li>
            </ul>
            <ul class="memberInformationAll" v-for="(item,index) in AddMembersData" :key="item.id">
              <li>{{item.AddMembersAccount}}</li>
              <li>{{item.AddMembersName}}</li>
              <li>{{item.AddMembersGender}}</li>
              <li>{{item.AddMembersSchoolName}}</li>
              <li>{{item.AddMembersDepartment}}</li>
              <li>{{item.AddMembersMajor}}</li>
              <li>{{item.AddMembersPhone}}</li>
              <li>{{item.AddMembersEmail}}</li>
              <li>
                <div class="modify" @click="ModifyMember(index)"></div>
                <div class="deleteInformation" @click="DeleteMember(index)"></div>
              </li>
            </ul>
          </div>

          <!-- 指导老师 -->
          <div class="instructor containOne">
            <div class="table-top">
              <span class="signUp-span"></span>
              指导老师
              <span class="prompt">（最多可添加1名指导老师）</span>
              <div class="tianjia addInstructor" v-show="JudgeTutor" @click="OpenAddTutor">+添加</div>
              <div class="tianjia1 addInstructor" v-show="!JudgeTutor">+添加</div>
            </div>
            <ul class="instructor-center">
              <li>姓名</li>
              <li>性别</li>
              <li>工作单位</li>
              <li>职务/职称</li>
              <li>联系电话</li>
              <li>电子邮箱</li>
              <li>操作</li>
            </ul>
            <ul class="instructorAll" v-for="item in AddTutorData" :key="item.id">
              <li>{{item.AddTutorName}}</li>
              <li>{{item.AddTutorGender}}</li>
              <li>{{item.AddTutorPhone}}</li>
              <li>{{item.AddTutorEmail}}</li>
              <li>{{item.AddTutorWorkUnit}}</li>
              <li>{{item.AddTutorPosition}}</li>
              <li>
                <div class="modify" @click="ModifyTutor"></div>
                <div class="deleteInformation" @click="DeleteTutor"></div>
              </li>
            </ul>
          </div>

          <!-- 策略及论文部分 -->
          <div class="instructor containOne">
            <div class="table-top">
              策略及论文
            </div>
            
            <!-- 模拟交易 -->
            <div class="instructor-moni">
              <div class="instructor-moniTitle">
                模拟交易
                <span class="tanhao" @click="HintPoint"></span>
                <div class="HintInformation"  @click="CloseHintPoint">
                  请选择"永久"属性的模拟交易报名参赛。为了避免人为干预，报名后的模拟交易将会被锁定，无法"暂停"和"关闭"。
                </div>
              </div>
              <el-select v-model="SelectedMockTrading" placeholder="请选择一个模拟交易" style="width: 726px;">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>

            <!-- 上传论文 -->
            <div class="instructor-upload">
              <div class="instructor-uploadL">
                <div class="instructor-uploadTitle">
                上传论文
                </div>
                <input placeholder="请输入文件名称" class="SelectFile" type="text" v-model="FileName">
                <button class="UploadingFiles">
                  选择文件 
                  <input
                  ref="upfile"
                  name="file"
                  @change="UpFile"
                  type="file" id="upfile">
                </button>
                
              </div>
              <ul class="instructor-uploadR">
                <li>
                  1.请按照要求编辑论文
                  <a class="requirement" href="">格式要求</a>
                </li>
                <li>2.大小20mb以内，后缀为.doc,.pdf</li>
              </ul>
            </div>
          </div>

          <!-- 下部提交 -->
          <div class="SubmitAllFile" @click="SubmitAllFile">提交</div>
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
    Global,
  },
  mounted() {
    this.$nextTick(function() {
      // this.loadEconomicForecastData();
      this.JudgmentShown();
    });
  },
  data() {
    return {
      // 修改成员信息需要用到的
      MemberIndex:"",

      // 判断能否添加
      JudgeCaptain:true,
      JudgeMember:true,
      JudgeTutor:true,

      //判断是修改还是添加true是添加，false是修改
      JudgmentModification:true,


      AIadvisorMenu: Global.getPageMenu("SignalRing"),
      //表单信息
      TimeName:"",
      RegistrationNumber:"",
      // 交易类型选择器
      options: [
        {value: "one", label: "这是一个简单的回测1"},
        {value: "two", label: "这是一个简单的回测2"},
        {value: "three", label: "这是一个简单的回测3"},
      ],
      SelectedMockTrading: "",
      // 文件名
      FileName:"",
      // 性别选择器
      Genders: [
        {value: "1", label: "男"},
        {value: "0", label: "女"},
      ],


      //添加队长模态框获取到的信息
      AddCaptainAccount:"",
      AddCaptainName:"",
      AddCaptainGender:"",
      AddCaptainPhone:"",
      AddCaptainEmail:"",
      AddCaptainWeChat:"",
      AddCaptainQQ:"",
      AddCaptainSchoolName:"",
      AddCaptainDepartment:"",
      AddCaptainMajor:"",
      AddCaptainStudentID :"",
      

      //添加成员模态框获取到的信息
      AddMembersAccount:"",
      AddMembersName:"",
      AddMembersGender:"",
      AddMembersPhone:"",
      AddMembersEmail:"",
      AddMembersWeChat:"",
      AddMembersQQ:"",
      AddMembersSchoolName:"",
      AddMembersDepartment:"",
      AddMembersMajor:"",
      AddMembersStudentID :"",

      //添加指导老师模态框获取到的信息
      AddTutorName:"",
      AddTutorGender:"",
      AddTutorPhone:"",
      AddTutorEmail:"",
      AddTutorWorkUnit:"",
      AddTutorPosition:"",
      
      


      //队长信息
      AddCaptainData:[],
      

      //成员信息
      AddMembersData:[],

      //指导老师
      AddTutorData:[],
      
    }
  },
  methods: {
  // 模拟交易旁边的叹号开启和关闭
  HintPoint(e){
    $('.HintInformation').fadeIn('1000');
    return false;
  },
  CloseHintPoint(e){
    $('.HintInformation').fadeOut('1000');
    return false;
  },


  // 提示信息填充完整的模态框
  OpenCompleteI() {
    var Height = $(window).height();
		var Width = $(window).width();
		$('.CompleteInformation').css({
			"width":Width,
			"height":Height
		}).fadeIn('1000');
  },
  CloseCompleteI(){
    $('.CompleteInformation').fadeOut('1000');
  },


  //判断能否添加
  JudgmentShown(){
    if(this.JudgeCaptain){
      this.JudgeCaptain=true;
    }else{
      this.JudgeCaptain=false;
    };

    if(this.AddMembersData.length==3){
      this.JudgeMember=false;
    }else{
      this.JudgeMember=true;
    }

    if(this.JudgeTutor){
      this.JudgeTutor=true;
    }else{
      this.JudgeTutor=false;
    }
  },

  //添加队长模态框
	OpenAddCaptain: function() {
		var Height = $(window).height();
		var Width = $(window).width();
		$('.AddCaptain').css({
			"width":Width,
			"height":Height
		}).fadeIn('1000');
	},
  // 关闭添加队长模态框
	CloseAddCaptain: function () {
	  $('.AddCaptain').fadeOut('1000');
	},
  // 添加队长模态框的提交按钮
  AddCaptainSubmit(){
    if(this.JudgmentModification){
      var CaptainData = {};
      CaptainData.AddCaptainAccount=this.AddCaptainAccount;
      CaptainData.AddCaptainName=this.AddCaptainName;
      CaptainData.AddCaptainGender=this.AddCaptainGender;
      CaptainData.AddCaptainPhone=this.AddCaptainPhone;
      CaptainData.AddCaptainEmail=this.AddCaptainEmail;
      CaptainData.AddCaptainWeChat=this.AddCaptainWeChat;
      CaptainData.AddCaptainQQ=this.AddCaptainQQ;
      CaptainData.AddCaptainSchoolName=this.AddCaptainSchoolName;
      CaptainData.AddCaptainDepartment=this.AddCaptainDepartment;
      CaptainData.AddCaptainMajor=this.AddCaptainMajor;
      CaptainData.AddCaptainStudentID=this.AddCaptainStudentID;
      
      if(this.AddCaptainAccount && this.AddCaptainName && 
      this.AddCaptainGender && this.AddCaptainPhone && 
      this.AddCaptainEmail && this.AddCaptainWeChat &&
      this.AddCaptainQQ && this.AddCaptainSchoolName && 
      this.AddCaptainDepartment && this.AddCaptainMajor && 
      this.AddCaptainStudentID
      ){
        this.AddCaptainData.push(CaptainData);
        this.JudgeCaptain = false;
        this.JudgmentShown();
        $('.AddCaptain').fadeOut('1000');
      }else{
        this.OpenCompleteI();
      }
    }else{
      this.AddCaptainData[0].AddCaptainAccount=this.AddCaptainAccount;
      this.AddCaptainData[0].AddCaptainName=this.AddCaptainName;
      this.AddCaptainData[0].AddCaptainGender=this.AddCaptainGender;
      this.AddCaptainData[0].AddCaptainPhone=this.AddCaptainPhone;
      this.AddCaptainData[0].AddCaptainEmail=this.AddCaptainEmail;
      this.AddCaptainData[0].AddCaptainWeChat=this.AddCaptainWeChat;
      this.AddCaptainData[0].AddCaptainQQ=this.AddCaptainQQ;
      this.AddCaptainData[0].AddCaptainSchoolName=this.AddCaptainSchoolName;
      this.AddCaptainData[0].AddCaptainDepartment=this.AddCaptainDepartment;
      this.AddCaptainData[0].AddCaptainMajor=this.AddCaptainMajor;
      this.AddCaptainData[0].AddCaptainStudentID=this.AddCaptainStudentID;

      if(this.AddCaptainAccount && this.AddCaptainName && 
      this.AddCaptainGender && this.AddCaptainPhone && 
      this.AddCaptainEmail && this.AddCaptainWeChat &&
      this.AddCaptainQQ && this.AddCaptainSchoolName && 
      this.AddCaptainDepartment && this.AddCaptainMajor && 
      this.AddCaptainStudentID
      ){
        this.JudgeCaptain = false;
        this.JudgmentModification = true;
        this.JudgmentShown();
        $('.AddCaptain').fadeOut('1000');
      }else{
        this.OpenCompleteI();
      }
    }
    
    
  },
  // 修改队长信息
  ModifyCaptain(){
    this.JudgmentModification = false;
    this.OpenAddCaptain();
  },
  // 删除队长信息
  DeleteCaptain() {
    this.AddCaptainData = [];
    this.JudgeCaptain=true;
    this.JudgmentModification = true;
    alert("删除成功！");
  },


  //添加成员模态框
  OpenAddMembers: function(index) {
		var Height = $(window).height();
		var Width = $(window).width();
		$('.AddMembers').css({
			"width":Width,
			"height":Height
    }).fadeIn('1000');
    if(this.JudgmentModification){
      this.AddMembersAccount="";
      this.AddMembersName="";
      this.AddMembersGender="";
      this.AddMembersPhone="";
      this.AddMembersEmail="";
      this.AddMembersWeChat="";
      this.AddMembersQQ="";
      this.AddMembersSchoolName="";
      this.AddMembersDepartment="";
      this.AddMembersMajor="";
      this.AddMembersStudentID="";
    }else{
      this.AddMembersAccount=this.AddMembersData[index].AddMembersAccount;
      this.AddMembersName= this.AddMembersData[index].AddMembersName;
      this.AddMembersGender= this.AddMembersData[index].AddMembersGender;
      this.AddMembersPhone= this.AddMembersData[index].AddMembersPhone;
      this.AddMembersEmail= this.AddMembersData[index].AddMembersEmail;
      this.AddMembersWeChat= this.AddMembersData[index].AddMembersWeChat;
      this.AddMembersQQ=this.AddMembersData[index].AddMembersQQ;
      this.AddMembersSchoolName=this.AddMembersData[index].AddMembersSchoolName;
      this.AddMembersDepartment=this.AddMembersData[index].AddMembersDepartment;
      this.AddMembersMajor=this.AddMembersData[index].AddMembersMajor;
      this.AddMembersStudentID=this.AddMembersData[index].AddMembersStudentID;
    }
    
	},
  // 关闭添加成员模态框
	CloseAddMembers: function () {
	  $('.AddMembers').fadeOut('1000');
	},
  //添加成员模态框的提交按钮
  AddMembersSubmit() {
    if(this.JudgmentModification){
      var MembersData = {};
      MembersData.AddMembersAccount=this.AddMembersAccount;
      MembersData.AddMembersName=this.AddMembersName;
      MembersData.AddMembersGender=this.AddMembersGender;
      MembersData.AddMembersPhone=this.AddMembersPhone;
      MembersData.AddMembersEmail=this.AddMembersEmail;
      MembersData.AddMembersWeChat=this.AddMembersWeChat;
      MembersData.AddMembersQQ=this.AddMembersQQ;
      MembersData.AddMembersSchoolName=this.AddMembersSchoolName;
      MembersData.AddMembersDepartment=this.AddMembersDepartment;
      MembersData.AddMembersMajor=this.AddMembersMajor;
      MembersData.AddMembersStudentID=this.AddMembersStudentID;
      console.log(MembersData);
      if(this.AddMembersAccount && this.AddMembersName && 
      this.AddMembersGender && this.AddMembersPhone && 
      this.AddMembersEmail && this.AddMembersWeChat &&
      this.AddMembersQQ && this.AddMembersSchoolName && 
      this.AddMembersDepartment && this.AddMembersMajor && 
      this.AddMembersStudentID
      ){
        this.AddMembersData.push(MembersData);
        this.JudgmentShown();
        $('.AddMembers').fadeOut('1000');
      }else{
        this.OpenCompleteI();
      }
    }else{
      var MIndex = this.MemberIndex;
      console.log("*********************************")
      console.log(MIndex);
      this.AddMembersData[MIndex].AddMembersAccount=this.AddMembersAccount;
      this.AddMembersData[MIndex].AddMembersName=this.AddMembersName;
      this.AddMembersData[MIndex].AddMembersGender=this.AddMembersGender;
      this.AddMembersData[MIndex].AddMembersPhone=this.AddMembersPhone;
      this.AddMembersData[MIndex].AddMembersEmail=this.AddMembersEmail;
      this.AddMembersData[MIndex].AddMembersWeChat=this.AddMembersWeChat;
      this.AddMembersData[MIndex].AddMembersQQ=this.AddMembersQQ;
      this.AddMembersData[MIndex].AddMembersSchoolName=this.AddMembersSchoolName;
      this.AddMembersData[MIndex].AddMembersDepartment=this.AddMembersDepartment;
      this.AddMembersData[MIndex].AddMembersMajor=this.AddMembersMajor;
      this.AddMembersData[MIndex].AddMembersStudentID=this.AddMembersStudentID;
      
      if(this.AddMembersAccount && this.AddMembersName && 
      this.AddMembersGender && this.AddMembersPhone && 
      this.AddMembersEmail && this.AddMembersWeChat &&
      this.AddMembersQQ && this.AddMembersSchoolName && 
      this.AddMembersDepartment && this.AddMembersMajor && 
      this.AddMembersStudentID
      ){
        this.JudgmentModification = true;
        this.JudgmentShown();
        $('.AddMembers').fadeOut('1000');
      }else{
        this.OpenCompleteI();
      }
    }
    
  },
  // 修改成员信息
  ModifyMember(index){
    this.JudgmentModification = false;
    this.OpenAddMembers(index);
    this.MemberIndex = index;
  },
  // 删除成员信息
  DeleteMember(index) {
    if(this.AddMembersData.length==1){
      this.AddMembersData = [];
      this.JudgmentModification = true;
      this.JudgmentShown();
      alert("删除成功！");
    }else{
      this.AddMembersData.splice(index,1);
      this.JudgmentModification = true;
      this.JudgmentShown();
      alert("删除成功！");
    }
  },


  //添加导师模态框
  OpenAddTutor: function() {
		var Height = $(window).height();
		var Width = $(window).width();
		$('.AddTutor').css({
			"width":Width,
			"height":Height
		}).fadeIn('1000');
	},
  // 关闭添加导师模态框
	CloseAddTutor: function () {
	  $('.AddTutor').fadeOut('1000');
	},
  //添加导师模态框的提交按钮
  AddTutorSubmit() {
    if(this.JudgmentModification){
      var TutorData = {};
      TutorData.AddTutorName=this.AddTutorName;
      TutorData.AddTutorGender=this.AddTutorGender;
      TutorData.AddTutorPhone=this.AddTutorPhone;
      TutorData.AddTutorEmail=this.AddTutorEmail;
      TutorData.AddTutorWorkUnit=this.AddTutorWorkUnit;
      TutorData.AddTutorPosition=this.AddTutorPosition;
      
      if(this.AddTutorName && this.AddTutorGender && 
      this.AddTutorPhone && this.AddTutorEmail && 
      this.AddTutorWorkUnit && this.AddTutorPosition
      ){
        this.AddTutorData.push(TutorData);
        this.JudgeTutor = false;
        this.JudgmentShown();
        $('.AddTutor').fadeOut('1000');
      }else{
        this.OpenCompleteI();
      }
    }else{
      this.AddTutorData[0].AddTutorName=this.AddTutorName;
      this.AddTutorData[0].AddTutorGender=this.AddTutorGender;
      this.AddTutorData[0].AddTutorPhone=this.AddTutorPhone;
      this.AddTutorData[0].AddTutorEmail=this.AddTutorEmail;
      this.AddTutorData[0].AddTutorWorkUnit=this.AddTutorWorkUnit;
      this.AddTutorData[0].AddTutorPosition=this.AddTutorPosition;
      
      if(this.AddTutorName && this.AddTutorGender && 
      this.AddTutorPhone && this.AddTutorEmail && 
      this.AddTutorWorkUnit && this.AddTutorPosition
      ){
        this.JudgeTutor = false;
        this.JudgmentModification = true;
        this.JudgmentShown();
        $('.AddTutor').fadeOut('1000');
      }else{
        this.OpenCompleteI();
      }
    }
    
  },
  // 修改指导老师信息
  ModifyTutor(){
    this.JudgmentModification = false;
    this.OpenAddTutor();
  },
  // 删除指导老师信息
  DeleteTutor() {
    this.AddTutorData = [];
    this.JudgmentModification = true;
    this.JudgeTutor=true;
    alert("删除成功！");
  },



  //提交表单
  SubmitAllFile() {
    var AllData = {
      TimeName:this.TimeName,
      RegistrationNumber:this.RegistrationNumber,
      SelectedMockTrading:this.SelectedMockTrading,
      AddCaptainData:this.AddCaptainData,
      AddMembersData:this.AddMembersData,
      AddTutorData:this.AddTutorData,
    };
    console.log(AllData);
    this.$http.post(Global.getRequestUrl() + "",
    AllData,
    {
      headers: Global.getRequestHeader()
    }
    ).then(function (resp) {
      resp = resp.body;
      console.log(resp);
      if(resp.success){
        // this.imageUrl = resp.data;
      }else{
        console.error("报名擂台大赛失败！");
      }
    },function (error) {
      console.error("报名擂台大赛请求失败！");
    })
  },


  // 上传文件
  UpFile() {
    // 1.得到要上传的文件
    const file = this.$refs.upfile.files[0]
    // 转换文件格式
    const avatarImage = new FormData();
    avatarImage.append('avatar', file);
    console.log(avatarImage);
    this.$http.post(Global.getRequestUrl() + "/user/update/avatar",
    avatarImage,
    {
      headers: Global.getRequestHeader()
    }
    ).then(function (resp) {
      resp = resp.body;
      console.log(resp);
      if(resp.success){
        this.imageUrl = resp.data;
      }else{
        console.error("更改用户头像失败！");
      }
    },function (error) {
      console.error("更改用户头像请求失败！");
    })
  },

  },
};
</script>

<style lang="less">
// 提示信息填充完整的模态框
.CompleteInformation{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  .CompleteInformationContent{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 240px;
    z-index: 999999999;
    .CompleteInformationCenter{
      width: 100% ;
      height: 100px;
      text-align: center;
      line-height: 100px;
      color: #333;
      font-size: 16px;
    }
    .CompleteInformationBtn{
      width: 80px;
      height: 30px;
      color: #fff;
      background-color: #00aefc;
      border-radius: 8px;
      margin: 0 auto 20px;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
    }
  }
}


// 添加队长模态框
.AddCaptain{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  // 统一内容样式
  .AddCaptainC{
    width: 100% ;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    padding: 0px 8px;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    color: #666;
    background-color: #fff;
  }
  .el-input__inner{
    margin-top: 2px;
    padding: 0px 8px;
    box-sizing: border-box;
  }
  .el-scrollbar__view{
    z-index: 9999;
  }

  // 统一标题头部
  .InformationTop{
    width: 100% ;
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }

  // 统一的左边样式
  .InformationL{
    width: 310px;
    float: left;
    overflow: hidden;
  }
  .InformationR{
    width: 310px;
    float: right;
    overflow: hidden;
  }

  // 统一的小星号
  .AddCaptainS{
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    margin-top: 4px;
    margin-right: 8px;
    background:url("/static/SignalRing/RegistrationProcess/icon_bitian.png") no-repeat;
  }
  // 统一的小星号后面的文字
  .InformationT{
    float: left;
    font-size: 16px;
    color: #333;
  }
  .AddCaptain-content{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 730px;
    .AddCaptain-top{
      width: 100% ;
      height: 50px;
      line-height: 50px;
      padding: 0 32px;
      box-sizing: border-box;
      font-size: 18px;
      color: #333;
      border-bottom:  1px solid #e6e6e6;
      position: relative;
      .CloseWindow{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px ;
        right: 22px;
        font-size: 40px;
        color: #666;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
      }
    }
    .AddCaptain-center{
      width: 100% ;
      padding: 0 48px;
      box-sizing: border-box;
      overflow: hidden;
      .AccountInformation{
        width: 100% ;
        margin-top: 10px;
        overflow: hidden;
      }
      .PersonalInformation{
        width: 100% ;
        margin-top: 12px;
        overflow: hidden;
      }
      .PersonalInformation1{
        width: 100% ;
        padding-top: 12px;
        overflow: hidden;
        box-sizing: border-box;
      }
      .UniversityInformation{
        width: 100% ;
        margin-top: 12px;
        overflow: hidden;
      }
      .UniversityInformation1{
        width: 100% ;
        padding-top: 12px;
        overflow: hidden;
        box-sizing: border-box;
      }
    }
    .AddCaptain-bottom{
      margin: 16px auto 20px;
      width: 176px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      cursor: pointer;
      background-color: #00aefc;
      color: #f5faff;
      border-radius: 19px;
      border:none;
      font-size: 16px;
    }
  }
}

// 添加成员模态框
.AddMembers{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  // 统一内容样式
  .AddMembersC{
    // margin-top: 8px;
    width: 100% ;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    padding: 0px 8px;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    color: #666;
    background-color: #fff;
  }
  .el-input__inner{
    margin-top: 2px;
    padding: 0px 8px;
    box-sizing: border-box;
  }
  .el-scrollbar__view{
    z-index: 9999;
  }

  // 统一标题头部
  .InformationTop{
    width: 100% ;
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }

  // 统一的左边样式
  .InformationL{
    width: 310px;
    float: left;
    overflow: hidden;
  }
  .InformationR{
    width: 310px;
    float: right;
    overflow: hidden;
  }

  // 统一的小星号
  .AddMembersS{
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    margin-top: 4px;
    margin-right: 8px;
    background:url("/static/SignalRing/RegistrationProcess/icon_bitian.png") no-repeat;
  }
  // 统一的小星号后面的文字
  .InformationT{
    float: left;
    font-size: 16px;
    color: #333;
  }
  .AddMembers-content{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 730px;
    .AddMembers-top{
      width: 100% ;
      height: 50px;
      line-height: 50px;
      padding: 0 32px;
      box-sizing: border-box;
      font-size: 18px;
      color: #333;
      border-bottom:  1px solid #e6e6e6;
      position: relative;
      .CloseWindow{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px ;
        right: 22px;
        font-size: 40px;
        color: #666;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
      }
    }
    .AddMembers-center{
      width: 100% ;
      padding: 0 48px;
      box-sizing: border-box;
      overflow: hidden;
      .AccountInformation{
        width: 100% ;
        margin-top: 10px;
        overflow: hidden;
      }
      .PersonalInformation{
        width: 100% ;
        margin-top: 12px;
        overflow: hidden;
      }
      .PersonalInformation1{
        width: 100% ;
        padding-top: 12px;
        overflow: hidden;
        box-sizing: border-box;
      }
      .UniversityInformation{
        width: 100% ;
        margin-top: 12px;
        overflow: hidden;
      }
      .UniversityInformation1{
        width: 100% ;
        padding-top: 12px;
        overflow: hidden;
        box-sizing: border-box;
      }
    }
    .AddMembers-bottom{
      margin: 16px auto 20px;
      width: 176px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      cursor: pointer;
      background-color: #00aefc;
      color: #f5faff;
      border-radius: 19px;
      border:none;
      font-size: 16px;
    }
  }
}

// 添加指导老师模态框
.AddTutor{
  display: none;
  background-color: rgba(0,0,0,0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  // 统一内容样式
  .AddTutorC{
    // margin-top: 8px;
    width: 100% ;
    height: 40px;
    font-size: 12px;
    line-height: 40px;
    padding: 0px 8px;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    box-sizing: border-box;
    color: #666;
    background-color: #fff;
  }
  .el-input__inner{
    margin-top: 2px;
    padding: 0px 8px;
    box-sizing: border-box;
  }
  .el-scrollbar__view{
    z-index: 9999;
  }

  // 统一标题头部
  .InformationTop{
    width: 100% ;
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
  }

  // 统一的左边样式
  .InformationL{
    width: 310px;
    float: left;
    overflow: hidden;
  }
  .InformationR{
    width: 310px;
    float: right;
    overflow: hidden;
  }

  // 统一的小星号
  .AddTutorS{
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    margin-top: 4px;
    margin-right: 8px;
    background:url("/static/SignalRing/RegistrationProcess/icon_bitian.png") no-repeat;
  }
  // 统一的小星号后面的文字
  .InformationT{
    float: left;
    font-size: 16px;
    color: #333;
  }
  .AddTutor-content{
    position: absolute;
    left: 50% ;
    top: 50% ;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 14px;
    width: 730px;
    .AddTutor-top{
      width: 100% ;
      height: 50px;
      line-height: 50px;
      padding: 0 32px;
      box-sizing: border-box;
      font-size: 18px;
      color: #333;
      border-bottom:  1px solid #e6e6e6;
      position: relative;
      .CloseWindow{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px ;
        right: 22px;
        font-size: 40px;
        color: #666;
        text-align: center;
        line-height: 20px;
        cursor: pointer;
      }
    }
    .AddTutor-center{
      width: 100% ;
      padding: 0 48px;
      box-sizing: border-box;
      overflow: hidden;
      .PersonalInformation{
        width: 100% ;
        margin-top: 12px;
        overflow: hidden;
      }
      .PersonalInformation1{
        width: 100% ;
        padding-top: 12px;
        overflow: hidden;
        box-sizing: border-box;
      }
      .UniversityInformation{
        width: 100% ;
        margin-top: 12px;
        overflow: hidden;
      }
    }
    .AddTutor-bottom{
      margin: 16px auto 20px;
      width: 176px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      cursor: pointer;
      background-color: #00aefc;
      color: #f5faff;
      border-radius: 19px;
      border:none;
      font-size: 16px;
    }
  }
}


.RPBigBox{
  background-color: #fff;
}

// 选择器统一样式
.el-input__inner{
  border-left-width:0px;
  border-top-width:0px;
  border-right-width:0px;
  border-bottom-width:1px;
  border-radius: 0px;
  padding:0;
}

// 添加按钮的样式
.tianjia{
  cursor: pointer;
  width: 64px;
  height: 28px;
  border-radius: 6px;
  background-color: #00aefc;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 28px;
  margin-top: 10px;
  float: right;
}

// 不能添加时候的样式
.tianjia1{
  cursor: pointer;
  width: 64px;
  height: 28px;
  border-radius: 6px;
  background-color: #78cff6;
  font-size: 14px;
  color: #fff;
  text-align: center;
  line-height: 28px;
  margin-top: 10px;
  float: right;
}

// 表头span的样式
.signUp-span{
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  margin-top: 18px;
  margin-right: 8px;
  background:url("/static/SignalRing/RegistrationProcess/icon_bitian.png") no-repeat;
}

// 表内span样式
.signUp-span1{
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  margin-top: 4px;
  margin-right: 8px;
  background:url("/static/SignalRing/RegistrationProcess/icon_bitian.png") no-repeat;
}

// 标头中的提示信息
.prompt{
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 116px;
  top: 0px;
}

.contain {
  width: 1206px;
  margin: 0 auto;
  box-sizing: border-box;
}

// 表头总样式
.table-top{
  height: 46px;
  background-color: #e6e6e6;
  padding: 0 28px;
  box-sizing: border-box;
  line-height: 46px;
  overflow: hidden;
  font-size: 16px;
  color: #333;
  position: relative;
}

// 表总样式
.containOne{
  width: 796px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  padding-bottom: 18px;
  box-sizing: border-box;
}

// 顶部
.RegistrationProcess-top{
  width: 100%;
  height: 62px;
  background-color: #e6e6e6;
  .RegistrationProcess-topContain{
    height: 62px;
    .backsignalCity{
      float: left;
      height: 62px;
      color: #666;
      font-size: 20px;
      display: block;
      height: 62px;
      line-height: 62px;
      overflow: hidden;
      .backPhoto{
        display: block;
        width: 28px;
        height: 18px;
        float: left;
        margin-top: 22px;
        margin-right: 24px;
        background:url("/static/SignalRing/RegistrationProcess/leitai_back_05.png") no-repeat;
      }
    }
  }
}
  


// 中间部分
.RegistrationProcess-center{
  width: 100% ;
  padding-bottom: 65px;
  margin-bottom: 20px;
  box-sizing: border-box;
  background-color: #fff;
  .RegistrationProcess-centerTop{
    height: 94px;
    padding: 44px 0 30px;
    .informationTop{
      width: 250px;
      height: 20px;
      margin: 0 auto;
      background:url("/static/SignalRing/RegistrationProcess/leitai_baomingxini_05.png") no-repeat;
    }
  }

  // 团队信息
  .teamInformation{
    // 团队信息上部
    .teamInformation-top{
      height: 46px;
      background-color: #e6e6e6;
      padding: 0 28px;
      box-sizing: border-box;
      line-height: 46px;
      overflow: hidden;
      font-size: 16px;
      color: #333;
    }

    // 团队名称
    .teamInformation-name{
      height: 54px;
      padding: 0 28px;
      margin-top: 32px;
      box-sizing: border-box;
      .teamInformation-nameTitle{
        color: #333;
        font-size: 16px;
        overflow: hidden;
      }
      .teamInformation-nameInput{
        border: none;
        outline: none;
        width: 100% ;
        height: 40px;
        border-bottom: 1px solid #e6e6e6;
        font-size: 14px;
        color: #666;
      }
    }

    // 报名账号
    .teamInformation-number{
      height: 54px;
      padding: 0 28px;
      margin-top: 32px;
      box-sizing: border-box;
      .teamInformation-numberTitle{
        color: #333;
        font-size: 16px;
        overflow: hidden;
      }
      .teamInformation-numberInput{
        border: none;
        outline: none;
        width: 100% ;
        height: 40px;
        border-bottom: 1px solid #e6e6e6;
        font-size: 14px;
        color: #666;
      }
    }
  }

  // 队长信息
  .captainInformation{
    margin-top: 20px;
    .captainInformation-center{
      width: 100% ;
      height: 48px;
      display: flex;
      padding: 0 28px;
      li{
        flex: 1;
        float: left;
        height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        color: #666;
        border-bottom: 1px solid #e6e6e6;
      }
    }
    .captainInformationAll{
      width: 100% ;
      height: 48px;
      display: flex;
      padding: 0 28px;
      li{
        flex: 1;
        float: left;
        height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        color: #666;
        overflow:hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #e6e6e6;
      }
      .modify{
        width: 18px;
        height: 16px;
        margin: 14px 10px 0 18px;
        float: left;
        cursor: pointer;
        background:url("/static/SignalRing/RegistrationProcess/icon_bianji.png") no-repeat;
      }
      .deleteInformation{
        width: 15px;
        height: 16px;
        margin-top: 14px;
        float: left;
        cursor: pointer;
        background:url("/static/SignalRing/RegistrationProcess/icon_shanchu.png") no-repeat;
      }
    }
  }

  // 成员信息
  .memberInformation{
    margin-top: 20px;
    .memberInformation-center{
      width: 100% ;
      height: 48px;
      display: flex;
      padding: 0 28px;
      li{
        flex: 1;
        float: left;
        height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        color: #666;
        border-bottom: 1px solid #e6e6e6;
      }
    }
    .memberInformationAll{
      width: 100% ;
      height: 48px;
      display: flex;
      padding: 0 28px;
      li{
        flex: 1;
        float: left;
        height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        color: #666;
        overflow:hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #e6e6e6;
      }
      .modify{
        width: 18px;
        height: 16px;
        margin: 14px 10px 0 18px;
        float: left;
        cursor: pointer;
        background:url("/static/SignalRing/RegistrationProcess/icon_bianji.png") no-repeat;
      }
      .deleteInformation{
        width: 15px;
        height: 16px;
        margin-top: 14px;
        float: left;
        cursor: pointer;
        background:url("/static/SignalRing/RegistrationProcess/icon_shanchu.png") no-repeat;
      }
    }
  }

  // 指导老师
  .instructor{
    margin-top: 20px;
    .instructor-center{
      width: 100% ;
      height: 48px;
      display: flex;
      padding: 0 28px;
      li{
        flex: 1;
        float: left;
        height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        color: #666;
        border-bottom: 1px solid #e6e6e6;
      }
    }
    .instructorAll{
      width: 100% ;
      height: 48px;
      display: flex;
      padding: 0 28px;
      li{
        flex: 1;
        float: left;
        height: 48px;
        text-align: center;
        line-height: 48px;
        font-size: 14px;
        color: #666;
        overflow:hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #e6e6e6;
      }
      .modify{
        width: 18px;
        height: 16px;
        margin: 14px 10px 0 34px;
        float: left;
        cursor: pointer;
        background:url("/static/SignalRing/RegistrationProcess/icon_bianji.png") no-repeat;
      }
      .deleteInformation{
        width: 15px;
        height: 16px;
        margin-top: 14px;
        float: left;
        cursor: pointer;
        background:url("/static/SignalRing/RegistrationProcess/icon_shanchu.png") no-repeat;
      }
    }
  }

  // 策略及论文
  .instructor{
    // 模拟交易
    .instructor-moni{
      width: 100% ;
      padding: 0 34px;
      margin-top: 32px;
      box-sizing: border-box;
      .instructor-moniTitle{
        color: #333;
        font-size: 16px;
        position: relative;
        .tanhao{
          display: block;
          position: absolute;
          cursor: pointer;
          left: 76px ;
          top: 2px;
          width: 13px;
          height: 13px;
          background:url("/static/SignalRing/RegistrationProcess/icon_gantanhao.png") no-repeat;
        }
        .HintInformation{
          display: none;
          cursor: pointer;
          position: absolute;
          top: 20px;
          left: 30px;
          width: 292px;
          height: 92px;
          padding: 18px 16px;
          border-radius: 14px;
          line-height: 1.5em;
          font-size: 14px;
          color: #666;
          z-index: 9999999;
          box-sizing: border-box;
          background-color: #fff;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
        }
      }
      .el-input__inner{
        border-left-width:0px;
        border-top-width:0px;
        border-right-width:0px;
        border-bottom-width:1px;
        border-radius: 0px;
        padding:0;
      }
    }
    // 上传论文
    .instructor-upload{
      width: 100% ;
      padding: 0 34px;
      margin-top: 32px;
      box-sizing: border-box;
      .instructor-uploadL{
        width: 346px;
        height: 56px;
        float: left;
        position: relative;
        .UploadingFiles{
          margin-top: 20px;
          width: 74px;
          height: 30px;
          cursor: pointer;
          background-color: #00aefc;
          color: #f5faff;
          border-radius: 10px;
          border:none;
          font-size: 14px;
          position: absolute;
          bottom: 10px;
          right: 20px;
          #upfile{
            width: 70px;
            height: 28px;
            cursor: pointer;
            border-radius: 10px;
            border:none;
            text-decoration: none;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        .instructor-uploadTitle{
          color: #333;
          font-size: 16px;
          position: relative;
        }
        .SelectFile{
          width: 100% ;
          height: 38px;
          border: none;
          font-size: 14px;
          color: #999;
          border-bottom:  1px solid #e6e6e6;
        }
      }
      .instructor-uploadR{
        width: 346px;
        height: 56px;
        padding: 20px 32px;
        font-size: 12px;
        color: #999;
        float: left;
        li{
          width: 100% ;
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          color: #999;
        }
        .requirement{
          color: #3fb9fc;
          display: inline;
        }
      }
    }
  }

  // 下部提交
  .SubmitAllFile{
    margin: 50px auto 0;
    width: 200px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    cursor: pointer;
    background-color: #00aefc;
    color: #f5faff;
    border-radius: 10px;
    border:none;
    font-size: 16px;
  }
  
}

</style>


