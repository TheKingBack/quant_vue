<template>
  <div>
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
   <div class="JCBigBox">
      <!-- 顶部 -->
      <div class="JoinCompetitionTop">
         <!-- 顶部背景颜色框 -->
         <div class="JCTContain contain">
            <router-link class="BackSignalCity" to="/Description">
               <!-- 箭头 -->
               <span class="ArrowPhoto"></span>
               返回信号擂台
            </router-link>
         </div>
      </div>

      <!-- 中间部分 -->
      <div class="JoinCompetitionCenter">
         <!-- 填写报名信息的图片 -->
         <div class="JCCTop contain">
            <div class="InformationPhoto"></div>
         </div>
         <!-- 团队信息 -->
         <div class="TeamInformation containOne">
            <div class="TableTop">
               <span class="TableTopStar"></span>
               团队信号
            </div>
            <!-- 团队名称 -->
            <div class="TIName">
               <div class="TINameTitle">
                  <span class="TableTopStar1"></span>
                  团队名称
               </div>
               <input placeholder="请输入团队名称" v-model="TimeName" class="TINameInput" type="text">
            </div>
            <!-- 报名账号 -->
            <div class="TINumber">
               <div class="TINumberTitle">
                  <span class="TableTopStar1"></span>
                  报名账号
               </div>
               <input placeholder="请输入报名账号" v-model="RegistrationNumber" class="TINumberInput" type="text">
            </div>
         </div>

         <!-- 队长信息 -->
         <div class="CaptainInformation containOne">
            <div class="TableTop">
               <span class="TableTopStar"></span>
               队长信息
            </div>
            <div class="CIcenter">
               <div class="InformationTop">基本信息</div>
               <!-- 基本信息的内容 -->
               <div class="ITContent">
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">平台账户</div>
                     <input class="InformationInput" type="text" placeholder="请输入账户名称" v-model="CaptainAccount">
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="InformationT">分工</div>
                     <input class="InformationInput" type="text" disabled  value="队长" >
                  </div>
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">姓名</div>
                     <input class="InformationInput" placeholder="请输入姓名" v-model="CaptainName" type="text">
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="InformationT">性别</div>
                     <el-select v-model="CaptainGender" placeholder="请选择姓别" style="width: 326px;">
                        <el-option
                        v-for="item in Genders"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                     </el-select>
                  </div>
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">联系电话</div>
                     <input class="InformationInput" placeholder="请输入联系方式" v-model="CaptainPhone" type="tel">              
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="InformationT">电子邮箱</div>
                     <input class="InformationInput" placeholder="请输入电子邮箱" v-model="CaptainEmail" type="email">                            
                  </div>
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">微信号</div>
                     <input class="InformationInput" placeholder="请输入微信号" v-model="CaptainWeChat" type="text">              
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="InformationT">QQ</div>
                     <input class="InformationInput" placeholder="请输入qq号" v-model="CaptainQQ" type="text">                            
                  </div>
               </div>
               <div class="InformationTop1">院校信息</div>
               <div class="ITContent">
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">学校信息</div>
                     <input class="InformationInput" placeholder="请输入学校名称" v-model="CaptainSchoolName" type="text">
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="InformationT">院系</div>
                     <input class="InformationInput" placeholder="请输入院系" v-model="CaptainDepartment" type="text">
                  </div>
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">专业</div>
                     <input class="InformationInput" placeholder="请输入专业" v-model="CaptainMajor" type="text">              
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="InformationT">学生证号</div>
                     <input class="InformationInput" placeholder="请输入学生证号" v-model="CaptainStudentID" type="text">                            
                  </div>
               </div>
            </div>
         </div>

         <!-- 指导老师 -->
         <div class="InstructorInformation containOne">
            <div class="TableTop">
               <span class="TableTopStar"></span>
               指导老师
            </div>
            <div class="IIcenter">
               <div class="InformationTop">基础信息</div>
               <div class="ITContent">
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">姓名</div>
                     <input class="InformationInput" placeholder="请输入姓名" type="text" v-model="TutorName">
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="AddTutorT">性别</div>
                     <el-select v-model="TutorGender" placeholder="请输入姓别" style="width: 326px;">
                        <el-option
                        v-for="item in Genders"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                     </el-select>
                  </div>
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">联系电话</div>
                     <input class="InformationInput" placeholder="请输入联系方式" type="tel" v-model="TutorPhone">              
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="InformationT">电子邮箱</div>
                     <input class="InformationInput" placeholder="请输入电子邮箱" type="email" v-model="TutorEmail">                            
                  </div>
               </div>
               
               <div class="InformationTop1">院校信息</div>
               <div class="ITContent">
                  <div class="InformationL">
                     <span class="SmallStar"></span>
                     <div class="InformationT">工作单位</div>
                     <input class="InformationInput" placeholder="请输入单位名称" type="text" v-model="TutorWorkUnit">
                  </div>
                  <div class="InformationR">
                     <span class="SmallStar"></span>
                     <div class="InformationT">职位/职称</div>
                     <input class="InformationInput" placeholder="请输入职位" type="text" v-model="TutorPosition">
                  </div>
               </div>
            </div>
         </div>

         <!-- 策略及论文部分 -->
         <div class="instructor containOne">
            <div class="TableTop">
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
         <div class="SubmitAllFile" @click="SubmitAllFile">下一步</div>
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
    });
  },
  data() {
    return {
      AIadvisorMenu: Global.getPageMenu("SignalRing"),
      //团队名称
      TimeName:"",
      //报名账号
      RegistrationNumber:"",
      // 交易类型选择器
      options: [
        {value: "one", label: "这是一个简单的回测1"},
        {value: "two", label: "这是一个简单的回测2"},
        {value: "three", label: "这是一个简单的回测3"},
      ],
      //交易类型
      SelectedMockTrading: "",
      // 文件名
      FileName:"",
      // 性别选择器
      Genders: [
        {value: "1", label: "男"},
        {value: "0", label: "女"},
      ],


      //添加队长模态框获取到的信息
      CaptainAccount:"",
      CaptainName:"",
      CaptainGender:"",
      CaptainPhone:"",
      CaptainEmail:"",
      CaptainWeChat:"",
      CaptainQQ:"",
      CaptainSchoolName:"",
      CaptainDepartment:"",
      CaptainMajor:"",
      CaptainStudentID :"",

      //添加指导老师模态框获取到的信息
      TutorName:"",
      TutorGender:"",
      TutorPhone:"",
      TutorEmail:"",
      TutorWorkUnit:"",
      TutorPosition:"",
      
      //队长信息
      CaptainData:[],

      //指导老师
      TutorData:[],
      
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

  //提交表单
  SubmitAllFile() {
     if(
        this.TimeName && this.RegistrationNumber && 
        this.SelectedMockTrading &&  this.FileName && 
        this.CaptainAccount && this.CaptainName && 
        this.CaptainGender && this.CaptainPhone && 
        this.CaptainEmail && this.CaptainWeChat && 
        this.CaptainQQ && this.CaptainSchoolName && 
        this.CaptainDepartment && this.CaptainMajor && 
        this.CaptainStudentID && this.TutorName && 
        this.TutorGender && this.TutorPhone && 
        this.TutorEmail && this.TutorWorkUnit && 
        this.TutorPosition
      ){
         var AllData = {
            TimeName:this.TimeName,
            RegistrationNumber:this.RegistrationNumber,
            SelectedMockTrading:this.SelectedMockTrading,
            FileName:this.FileName,
            CaptainData:this.CaptainData,
            TutorData:this.TutorData,
         };
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
     }else{
        this.$router.push("/Mobile");
        // this.OpenCompleteI();
     }
    
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
        console.log("上传论文成功！")
      }else{
        console.error("上传论文失败！");
      }
    },function (error) {
      console.error("上传论文请求失败！");
    })
  },

  },
};
</script>

<style lang="less">
.JCBigBox{
  background-color: #fff;
}
.contain {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
}

//提示信息填充完整的模态框
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

//外面表格总样式
//表头总样式
.TableTop{
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
//表总样式
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
//表头小星星的样式
.TableTopStar{
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  margin-top: 18px;
  margin-right: 8px;
  background:url("/static/SignalRing/RegistrationProcess/icon_bitian.png") no-repeat;
}

//团队信息表内小星星样式
.TableTopStar1{
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  margin-top: 4px;
  margin-right: 8px;
  background:url("/static/SignalRing/RegistrationProcess/icon_bitian.png") no-repeat;
}

//队长信息表内总样式
//统一基本信息样式
.InformationTop{
   width: 100% ;
   color: #666;
   font-size: 16px;
   margin: 20px 0;
}
//统一院校信息样式
.InformationTop1{
   width: 100% ;
   color: #666;
   font-size: 16px;
   margin-bottom: 20px;
}
//统一的左边样式
.InformationL{
   width: 326px;
   float: left;
   margin-bottom: 20px;
   overflow: hidden;
}
//统一的右边样式
.InformationR{
   width: 326px;
   float: right;
   margin-bottom: 20px;
   overflow: hidden;
}
//统一的小星号
.SmallStar{
   display: block;
   float: left;
   width: 10px;
   height: 10px;
   margin-top: 4px;
   margin-right: 8px;
   background:url("/static/SignalRing/RegistrationProcess/icon_bitian.png") no-repeat;
}
//统一的小星号后面的文字
.InformationT{
   float: left;
   font-size: 16px;
   color: #333;
}
//队长信息input统一样式
.InformationInput{
   width: 100% ;
   height: 36px;
   font-size: 12px;
   line-height: 36px;
   padding: 0px 8px;
   border: none;
   border-bottom: 1px solid #cecece;
   box-sizing: border-box;
   color: #666;
   background-color: #fff;
}



//顶部
.JoinCompetitionTop{
   width: 100%;
   height: 62px;
   background-color: #e6e6e6;
   //顶部背景颜色框
   .JCTContain{
      height: 62px;
      .BackSignalCity{
         float: left;
         height: 62px;
         color: #666;
         font-size: 20px;
         display: block;
         height: 62px;
         line-height: 62px;
         overflow: hidden;
         //箭头图片
         .ArrowPhoto{
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
//中间部分
.JoinCompetitionCenter{
   width: 100% ;
   padding-bottom: 65px;
   margin-bottom: 20px;
   box-sizing: border-box;
   background-color: #fff;
   //填写报名信息的图片
   .JCCTop{
      height: 94px;
      padding: 44px 0 30px;
      .InformationPhoto{
         width: 250px;
         height: 20px;
         margin: 0 auto;
         background:url("/static/SignalRing/RegistrationProcess/leitai_baomingxini_05.png") no-repeat;
      }
   }
   //选择器统一样式
   .el-input__inner{
      border-left-width:0px;
      border-top-width:0px;
      border-right-width:0px;
      border-bottom-width:1px;
      border-radius: 0px;
      padding:0px 8px;
   }
   //选择器下拉框层级
   .el-scrollbar__view{
      z-index: 9999;
   }
   //团队信息
   .TeamInformation{
      //团队名称
      .TIName{
         height: 54px;
         padding: 0 28px;
         margin-top: 32px;
         box-sizing: border-box;
         .TINameTitle{
            color: #333;
            font-size: 16px;
            overflow: hidden;
         }
         .TINameInput{
            border: none;
            outline: none;
            width: 100% ;
            height: 40px;
            border-bottom: 1px solid #e6e6e6;
            font-size: 14px;
            color: #666;
         }
      }
      //报名账号
      .TINumber{
         height: 54px;
         padding: 0 28px;
         margin-top: 32px;
         box-sizing: border-box;
         .TINumberTitle{
            color: #333;
            font-size: 16px;
            overflow: hidden;
         }
         .TINumberInput{
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
   //队长信息
   .CaptainInformation{
      margin-top: 20px;
      .CIcenter{
         width: 100% ;
         padding: 0 32px;
         .ITContent{
            width: 100% ;
            overflow: hidden;
         }
      }
   }
   //指导老师
   .InstructorInformation{
      margin-top: 20px;
      .IIcenter{
         width: 100% ;
         padding: 0 32px;
         .ITContent{
            width: 100% ;
            overflow: hidden;
         }
      }
   }
   //策略及论文
   .instructor{
      margin-top: 20px;
      //模拟交易
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
      //上传论文
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
   //下部提交
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


