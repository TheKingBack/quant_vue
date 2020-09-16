<template>
<div>
  <!-- 外部的大框 -->
  <div class="OutBox">
    <!-- 头部介绍 -->
    <div class="MobileHead">成员信息</div>
    <!-- 版心部分 -->
    <div class="MobileContain">
        <!-- 上部公司logo -->
        <img class="MobileLogo" src="/static/SignalRing/RegistrationProcess/MobileLogo.png" alt="">
        <!-- 下部需要填写的信息 -->
        <div class="MemberI">
          <div class="MemberIStyle">
              <div class="headContent">
                <img class="AllStars" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
                <div class="AfterWords">姓名</div>
              </div>
              <input type="text" class="MemberInput MerberName" placeholder="请输入姓名">
          </div>
          <div class="MemberIStyle SelectGender">
            <div class="headContent">
                <img class="AllStars" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
                <div class="AfterWords">性别</div>
            </div>
            <div class="Gender">请选择性别</div>
            <img src="/static/SignalRing/RegistrationProcess/icon_shangsanjiao.png" alt="" class="PhotoUp">
            <img src="/static/SignalRing/RegistrationProcess/icon_xiashanjiao.png" alt="" class="PhotoDown">   
              <!-- 下拉框 -->
              <ul class="SelectBox">
                <li class="man">男</li>
                <li class="woman">女</li>
            </ul>
          </div>
          <div class="MemberIStyle">
              <div class="headContent">
                <img class="AllStars" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
                <div class="AfterWords">联系电话</div>
              </div>
              <input type="tel" class="MemberInput MerberPhone" placeholder="请输入姓名">
          </div>
          <div class="MemberIStyle">
              <div class="headContent">
                <img class="AllStars" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
                <div class="AfterWords">电子邮箱</div>
              </div>
              <input type="email " class="MemberInput MerberEmail" placeholder="请输入姓名">
          </div>
          <div class="MemberIStyle">
              <div class="headContent">
                <img class="AllStars" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
                <div class="AfterWords">学校信息</div>
              </div>
              <input type="text" class="MemberInput MerberSchool" placeholder="请输入姓名">
          </div>
          <div class="MemberIStyle">
              <div class="headContent">
                <img class="AllStars" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
                <div class="AfterWords">院系</div>
              </div>
              <input type="text" class="MemberInput MerberDepartment" placeholder="请输入姓名">
          </div>
          <div class="MemberIStyle">
              <div class="headContent">
                <img class="AllStars" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
                <div class="AfterWords">专业</div>
              </div>
              <input type="text" class="MemberInput MerberMajor" placeholder="请输入姓名">
          </div>
          <div class="MemberIStyle">
              <div class="headContent">
                <img class="AllStars" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
                <div class="AfterWords">学生证号</div>
              </div>
              <input type="text" class="MemberInput MerberStudentId" placeholder="请输入姓名">
          </div>
          <div class="MemberIStyle">
              <div class="headContent">
                <div class="AfterWords">微信号</div>
              </div>
              <input type="text" class="MemberInput MerberWeChat" placeholder="请输入姓名">
          </div>
          <div class="MemberIStyle">
              <div class="headContent">
                <div class="AfterWords">QQ</div>
              </div>
              <input type="text" class="MemberInput MerberQQ" placeholder="请输入姓名">
          </div>
        </div>
        <!-- 提示信息 -->
        <div class="HintInformation">
          <img class="HIStar" src="/static/SignalRing/RegistrationProcess/icon_bitian.png" alt="">
          <div class="HIWord">为必填项目</div>
        </div>
        <!-- 点击加入项目 -->
        <div class="JoinItem">加入项目</div>
    </div>
  </div>

  <!-- 信息不完整弹出的提示框 -->
  <div class="ModalFrame">
    <div class="MFOutBox">
      <div class="MFword"></div>
      <div class="IKnow">我知道了</div>
    </div>
  </div>

  <!-- 加入项目成功后的页面 -->
  <div class="JoinSeccess">
    <!-- 头部介绍 -->
    <div class="JSHead">报名成功</div>
    <img class="SeccessLogo" src="/static/SignalRing/RegistrationProcess/SeccessLogo.png" alt="">
    <div class="JSWord">
      <div class="TellYouS">加入项目成功，请用电脑登录ithink官网，了解擂台大赛相关流程。</div>
      <div class="OfficialAddress">官方地址：http://thquant.com</div>
    </div>
  </div>
</div>
</template>

<script>
// var memberName = document.getElementsByClassName("name")[0].val();


export default {
  mounted(){

    //点击选择性别出现下拉框
    $(".Gender").click(function(){
      $(".SelectBox").fadeToggle("slow");
      $(".PhotoUp").fadeToggle("slow");
      $(".PhotoDown").fadeToggle("slow");
    })

    // 选择性别后下拉框消失
    $("li").click(function(){
      $(".Gender").text($(this).text());
      $(".SelectBox").fadeToggle("slow");
      $(".PhotoUp").fadeToggle("slow");
      $(".PhotoDown").fadeToggle("slow");
      return false;
    })

    //点击我知道了，提示框消失
    $(".IKnow").click(function(){
      $(".ModalFrame").fadeOut("slow");
    })

    //点击加入项目
    $(".JoinItem").click(function(){
      //获取表单填写的内容
      var merberData = {};
      var merberName = $(".MerberName").val();
      var merberGender = $(".Gender").text();
      var merberPhone = $(".MerberPhone").val();
      var merberEmail = $(".MerberEmail").val();
      var merberSchool = $(".MerberSchool").val();
      var merberDepartment = $(".MerberDepartment").val();
      var merberMajor = $(".MerberMajor").val();
      var merberStudentId = $(".MerberStudentId").val();
      var merberWeChat = $(".MerberWeChat").val();
      var merberQQ = $(".MerberQQ").val();

      merberData.merberName = merberName;
      merberData.merberGender = merberGender;
      merberData.merberPhone = merberPhone;
      merberData.merberEmail = merberEmail;
      merberData.merberSchool = merberSchool;
      merberData.merberDepartment = merberDepartment;
      merberData.merberMajor = merberMajor;
      merberData.merberStudentId = merberStudentId;
      merberData.merberWeChat = merberWeChat;
      merberData.merberQQ = merberQQ;
      if(
        merberName && merberGender &&
        merberPhone && merberEmail &&
        merberSchool && merberDepartment &&
        merberMajor && merberStudentId
      ){
        $(".OutBox").fadeOut("slow");
        $(".JoinSeccess").fadeIn("slow");
        console.log(merberData);
        $.ajax({
          type : "POST",  
          url : '',   
          data : merberData,  
          contentType : "application/x-www-form-urlencoded",  
          success : function(data){  
              console.log(data);  
          }  
        })
      }else{
        console.log(merberData);
        var MHeight = $(window).height();
        $(".ModalFrame").fadeIn("slow");
        $(".ModalFrame").height(MHeight);
        $(".MFword").text("请您将必填的信息补充完整！");
      }
    })
  },
  methods:{
     
  },
}
</script>

<style lang="less" scoped>
//给外边大盒子背景色
.OutBox{
  // display: none;
  background-color: #fff;
  //头部介绍
  .MobileHead{
    width: 100% ;
    height: 90px;
    text-align: center;
    line-height: 90px;
    font-size: 36px;
    color: #fff;
    background-color: #1c1b21;
  }
  //版心内容
  .MobileContain{
    width: 88% ;
    margin: 0 auto;
    //上部公司logo
    .MobileLogo{
      display: block;
      width: 56% ;
      margin: 88px auto 0px;
    }
    //下部需要填写的信息（统一样式）
    .MemberI{
      width: 100% ;
      margin-top: 42px;
      //需要填写的每个信息的外框
      .MemberIStyle{
        width: 100% ;
        margin-top: 30px;
        //每个填写信息的头部内容
        .headContent{
          width: 100% ;
          height: 28px;
          overflow: hidden;
          //每个填写信息里面的小星星
          .AllStars{
            display: block;
            width: 14px;
            height: 14px;
            margin: 6px 10px 0 0;
            float: left;
          }
          //每个填写信息里面小星星后边的文字
          .AfterWords{
            height: 28px;
            line-height: 28px;
            font-size: 28px;
            color: #333;
            float: left;
          }
        }
        //每个填写信息里面的编辑框
        .MemberInput{
          width: 100% ;
          height: 72px;
          border: none;
          border-bottom: 1px solid #cecece;
          padding:0 12px;
          font-size: 24px;
          color: #333;
        }
        //性别下拉框
        .Gender{
          width: 100% ;
          height: 72px;
          border-bottom: 1px solid #cecece;
          padding:0 12px;
          line-height: 72px;
          font-size: 24px;
          color: #666;
        }
        
      }
      //点击产生的下拉框
      .SelectGender{
        position: relative;
        .SelectBox{
          display: none;
          width: 100% ;
          border: 1px solid #cecece;
          border-top-width: 0;
          background-color: #fff;
          position: absolute;
          bottom: -110px;
          left: 0;
          z-index: 999;
          li{
            width: 100% ;
            height: 56px;
            line-height: 56px;
            font-size: 24px;
            color: #333;
            padding:0 12px;
          }
        }
        .PhotoUp,
        .PhotoDown{
          width: 22px;
          position: absolute;
          bottom: 28px;
          right: 16px;
          z-index: 9999;
        }
        .PhotoUp{
          display: none;
        }
      }
    }
    //提示信息
    .HintInformation{
      width: 100% ;
      height: 24px;
      margin-top: 20px;
      overflow: hidden;
      .HIStar{
        display: block;
        width: 14px;
        height: 14px;
        margin: 6px 10px 0 0;
        float: left;
      }
      .HIWord{
        height: 24px;
        line-height: 24px;
        font-size: 24px;
        color: #333;
        float: left;
      }
    }
    //点击加入项目
    .JoinItem{
      width: 46.4% ;
      height: 74px;
      text-align: center;
      line-height: 74px;
      font-size: 30px;
      color: #fff;
      border-radius: 37px;
      background-color: #00aefc;
      margin: 62px auto;
      cursor: pointer;
    }
  }
}

//提示将信息补充完整
.ModalFrame{
  position: fixed;
  top: 0 ;
  left: 0;
  display: none;
  width: 100% ;
  background-color: rgba(0,0,0,0.5);
  z-index: 99999;
  .MFOutBox{
    width: 40% ;
    height: 240px;
    background-color: #fff;
    border-radius: 12px;
    position: absolute;
    top: 50% ;
    left: 50%;
    transform: translate(-50%,-50%);
    .MFword{
      width: 100% ;
      height: 140px;
      text-align: center;
      line-height: 140px;
      font-size: 26px;
      color: #333;
    }
    .IKnow{
      width: 40% ;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 26px;
      color: #fff;
      background-color: #00aefc;
      border-radius: 30px;
      margin: 0 auto;
    }
  }
}

//加入项目成功后的页面
.JoinSeccess{
  display: none;
  width: 100%;
  background-color: #fff;
  .JSHead{
    width: 100% ;
    height: 90px;
    text-align: center;
    line-height: 90px;
    font-size: 36px;
    color: #fff;
    background-color: #1c1b21;
  }
  .SeccessLogo{
    display: block;
    width: 40.8% ;
    margin: 130px auto 82px;
  }
  .JSWord{
    width: 70% ;
    margin: 0 auto;
    .TellYouS{
      font-size: 32px;
      color: #333;
      line-height: 1.5em;
    }
    .OfficialAddress{
      font-size: 32px;
      color: #00aefc;
      line-height: 1.5em;
      margin-top: 20px;
    }
  }
}

</style>


