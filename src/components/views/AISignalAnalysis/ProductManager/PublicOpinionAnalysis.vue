<template>
	<div id="public-opinion-analysis">

	 <div class="public-opinion-analysis-top">
	 	 <div class="public-opinion-analysis-top-paddding">

          <div style="float:left; padding-top:8px;">选择模块:</div>
         
         <div style="float:left;" >
          <el-select v-model="modulValue" plcaholder="请选择" style="width: 94px; margin-left:20px;">
            <el-option 
              v-for="modul in moduls"
              :key="modul.value" 
              :label="modul.label" 
              :value="modul.value"></el-option>
          </el-select>
       	</div>

        <div style="float:left; margin-left:34px;" >
        <div style="padding-top: 8px; float:left;">请选择预测的周期时间:</div>
         <el-date-picker
            v-model="start"
            type="date"
            placeholder="选择日期" style="width: 120px; margin-left:20px;  margin-right:20px;">
          </el-date-picker>
        <span>至</span>
        <el-date-picker
            v-model="end"
            type="date"
            placeholder="选择日期" style="width: 120px; margin-left:20px;">
          </el-date-picker>
     </div>

		<div style="padding-top: 60px;">	
			<el-table
		        :data="tradingBoardData"
		        style="width: 100%; text-align:center;">
		        <el-table-column
		            prop="name"
		        	label="名称"
		        	>
		        </el-table-column>
		        <el-table-column
		        	prop="code"
		        	label="代码"
		        	>
		      	</el-table-column>
		      	<el-table-column
		        	prop="price"
		        	label="价格">
		      	</el-table-column>
		      	<el-table-column
		        	prop="predictedGains"
		        	label="预测涨幅">
		      	</el-table-column>
		    </el-table>
		</div>

	</div>
</div>

	 <div class="public-opinion-analysis-bottom">
	 	<div class="public-opinion-analysis-bottom-padding">
	 	<div style="font-size: 18px; color: #333333; padding-bottom:18px;">价格走势图</div>
	 	<div>
	 		<div style="float:left;margin-left:80px;">
	 		<img :src="publicOpinionImg1">
	 		<div style="padding-left:200px;">日走势图</div>
	 		</div>
	 		<div style="float:left;">
	 		<img :src="publicOpinionImg2">
	 		<div style="padding-left:200px;">周走势图</div>
	 		</div>
	 		<div style="float:left;margin-left:80px;">
	 		<img :src="publicOpinionImg1">
	 		<div style="padding-left:200px;">月走势图</div>
	 		</div>
	 		<div style="float:left;">
	 		<img :src="publicOpinionImg2">
	 		<div style="padding-left:200px;">大盘走势图</div>
	 		</div>
	 	</div>
	 	</div>
	 </div>

	</div>
</template>

<script>

export default {
	data() {

		return {
		moduls: [
	        {value: 1, label: "模块一"},
	        {value: 2, label: "模块二"},
	        {value: 3, label: "模块三"},
	        {value: 4, label: "模块四"},
	        {value: 5, label: "模块五"}
	      	],
     	/**modulValue: 1,
     	 	 start: new Date(new Date() - 30*24*60*60*1000),
     		 end: new Date(),**/
     		 modulValue: '',
     		start:'',
		    end: '',
			searchTime: new Date(),
			tradingBoardSelected: true,
			tradingBoardData: [
				{name: '银龙股份', code: '603969', price: '17.54', predictedGains: '14.11'},
				{name: '博天环境', code: '6033603', price: '40.16', predictedGains: '14.55'},
				{name: '唐山港', code: '601000', price: '5.1', predictedGains: '17.18'},
				{name: '300491', code: '300491', price: '29.91', predictedGains: '16.02'},
				{name: '京汉股份', code: '000615', price: '12.14', predictedGains: '16.14'}
			],
			publicOpinionImg1:'/static/publicmanager/icon_zoushitu.png',
			publicOpinionImg2:'/static/publicmanager/icon_zoushitu_yue.png',

		}
	},

	methods: {
		selectTradingBoard: function() {
			this.tradingBoardSelected = true;
		},
		unselectTradingBoard: function() {
			this.tradingBoardSelected = false;
		}
	},

	computed: {
		tradingType1: function() {
			return this.tradingBoardSelected ? "primary" : "default";
		},
		tradingType2: function() {
			return this.tradingBoardSelected ? "default" : "primary";
		}
	}

}
</script>

<style lang="scss">
	#public-opinion-analysis {
		font-size: 16px;
    	color: #333333;
    	.public-opinion-analysis-top{
      		width: 1196px;
      		display: table;
		    margin-left: auto;
		    margin-right: auto;
		    border: 1p solid #00A0E9;
	        border-radius: 8px;
	        background-color: white;
	        box-shadow: 0 0 13px rgba(18, 35, 51, 0.4);
	        margin-top:20px;
    	    }
    	.public-opinion-analysis-top-paddding{
    		 padding: 42px 46px 52px 46px;
    	    }
    	.el-table th>.cell{
    		text-align:center;
    		}
    	.el-date-editor.el-input{
      		width: 94px;
    		}

    	.el-input__inner{
	        border-left-width:0px;
	        border-top-width:0px;
	        border-right-width:0px;
	        border-bottom-width:1px;
	        }
	     .public-opinion-analysis-bottom-padding{
	    	padding-top:30px;
	    	padding-bottom:50px;
	    	padding-left:40px;
	    	overflow:auto;
	    	}
	     .public-opinion-analysis-bottom{
	        margin-bottom: 70px;
	        width: 1196px;
	        margin-top: 30px;
	        overflow:auto;
	        display: table;
		    margin-left: auto;
		    margin-right: auto;
		    border: 1p solid #00A0E9;
	        border-radius: 8px;
	        background-color: white;
	        box-shadow: 0 0 13px rgba(18, 35, 51, 0.4);
	    	}


	}

</style>