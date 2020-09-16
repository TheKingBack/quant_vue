<template>
   <div>
      <!-- 我的函数页面 -->
      <div class="MyFunction contain">
         <!-- 上边头部分 -->
         <ul class="MFHeader">
            <li style="width:14%;">查看次数</li>
            <li style="width:29%;">函数名称</li>
            <li style="width:29%;">分享日期</li>
            <li style="width:14%;">状态</li>
            <li style="width:14%;">操作</li>
         </ul>
         <!-- 下边数据展示 -->
         <ul class="MFContent" v-for="item in MyFunctionData" :key="item.id">
            <li style="width:14%;">{{item.viewedNumber}}</li>
            <li style="width:29%;">{{item.functionName}}</li>
            <li style="width:29%;">{{item.createTime}}</li>
            <li style="width:14%;">{{item.functionType}}</li>
            <li style="width:14%;">
              <!-- 修改 -->
              <div class="MFModify" @click="MFModifyIt(item.id)"></div>
              <!-- 删除 -->
              <div class="MFDeleted" @click="MFDeletedIt(item.id)"></div>
            </li>
         </ul>
         <!-- 下部的分页 -->
         <div class="paging">
            <el-pagination 
            background layout="prev, pager, next" 
            :total="MyFunctionTotal" 
            :page-size="pageSize"
            :current-page="MyFunctionCP"
            @current-change="MyFunctionCPChange">
            </el-pagination>
         </div>
      </div>
   </div>
</template>

<script>
import Global from "@/components/layout/Global";

export default {
  components: {
    Global,
  },
  mounted() {
    this.$nextTick(function() {
      this.GetMyFunctionData(this.MyFunctionCP,this.pageSize);
    });
  },
  data() {
    return {
      AIadvisorMenu: Global.getPageMenu(""),
      //每页显示的个数
      pageSize:8,
      //函数的总数
      MyFunctionTotal:20,
      //当前页数
      MyFunctionCP:1,

      //页面生成获取的所有函数的数据
      MyFunctionData:[
        {  
            viewedNumber:60,
            functionName:"这个策略就是叼",
            createTime:"2018-05-10 20：06：11",
            functionType:"--",
            operation:"--",
            id:"1",
        },
        {  
            viewedNumber:24,
            functionName:"那就这样吧",
            createTime:"2018-05-10 20：06：11",
            functionType:"--",
            operation:"--",
            id:"2",
        },
        {  
            viewedNumber:33,
            functionName:"给你们",
            createTime:"2018-05-10 20：06：11",
            functionType:"--",
            operation:"--",
            id:"3",
        },
        {  
            viewedNumber:66,
            functionName:"纸长情短",
            createTime:"2018-05-10 20：06：11",
            functionType:"--",
            operation:"--",
            id:"4",
        },
        {  
            viewedNumber:88,
            functionName:"白羊",
            createTime:"2018-05-10 20：06：11",
            functionType:"--",
            operation:"--",
            id:"5",
        },
        {  
            viewedNumber:56,
            functionName:"PLANTE",
            createTime:"2018-05-10 20：06：11",
            functionType:"--",
            operation:"--",
            id:"6",
        },
        {  
            viewedNumber:22,
            functionName:"渐渐的被你吸引",
            createTime:"2018-05-10 20：06：11",
            functionType:"--",
            operation:"--",
            id:"7",
        },
        {  
            viewedNumber:16,
            functionName:"想要大声说喜欢你",
            createTime:"2018-05-10 20：06：11",
            functionType:"--",
            operation:"--",
            id:"8",
        },
      ],
    }
  },
  methods: {
    //页面生成时发送的请求
    GetMyFunctionData: function(Cpage,CpageSize) {
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
          this.FunctionTotal = resp.data.pagination.total;
          this.itemId = resp.data.results.id;
          console.log("获取我的函数列表列表成功！");
          this.AllFunctionData = resp.data.results;
        }else {
          console.error("获取我的函数列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
        }
      }, function(error) {
        console.error("获取我的函数列表请求失败！");
        console.error(error);
      });
    },

    //获取分页中每一项的数据
    MyFunctionCPChange(curPage){
        var self = this;
        self.MyFunctionCP = curPage;
        //Get current page data from back end
        self.GetMyFunctionData(self.MyFunctionCP,self.pageSize);
    },

    //修改函数
    MFModifyIt(id){
       this.$router.push("/FooterNav/FunctionLibrary/ShareFunction?id=" + id)
    },

    //删除函数
    MFDeletedIt(id){
      this.$http.get(Global.getRequestUrl() + "/favor/list",
      {
        params: {
          'id': id,
        },
        headers: Global.getRequestHeader()
      }
      ).then(function(resp) {
        var resp = resp.data;
        if(resp.success) {
          this.GetMyFunctionData(this.MyFunctionCP,this.pageSize)
        }else {
          console.error("删除函数失败！" + "error code: " + resp.code + ", reason: "+ msg);
        }
      }, function(error) {
        console.error("删除函数请求失败！");
        console.error(error);
      });
    },
  },
};
</script>

<style lang="less" scoped>
//版心设定
.contain{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}

//我的函数页面
.MyFunction{
  background-color: #fff;
  border-radius: 14px;
  margin-top: 10px;
  padding: 0 0 82px 0;
  position: relative;
  //下部的分页
  .paging{
    position: absolute;
    bottom: 30px;
    right: 32px;
  }
  //上边头部分
  .MFHeader{
    width: 100% ;
    height: 60px;
    // background-color: rgba(0,0,0,0.1);
    // border-bottom: 1px solid #cecece;
    li{
        height: 60px;
        font-size: 16px;
        color: #00aefc;
        float: left;
        text-align: center;
        line-height: 60px;
    }
  }
  //下边数据展示
  .MFContent{
    width: 100% ;
    height: 50px;
    //border-bottom: 1px solid #cecece;
    // &:hover{
    //   background-color: rgba(0,0,0,0.1);
    //   color: #00aefc;
    //   background-color: #00aefc;
    //   color: #fff;
    // }
    li{
      height: 50px;
      font-size: 16px;
      color: #333;
      float: left;
      text-align: center;
      line-height: 50px;
      //修改
      .MFModify{
        width: 18px;
        height: 16px;
        background: url("/static/FooterNav/FunctionLibrary/icon_bianji.png") no-repeat center;
        cursor: pointer;
        float: left;
        margin-top: 17px;
        margin-left: 50px ;
      }
      //删除
      .MFDeleted{
        width: 18px;
        height: 16px;
        background: url("/static/FooterNav/FunctionLibrary/icon_shanchu.png") no-repeat center;
        cursor: pointer;
        float: right;
        margin-top: 17px;
        margin-right: 50px ;
      }
    }
  }
}

  
</style>


