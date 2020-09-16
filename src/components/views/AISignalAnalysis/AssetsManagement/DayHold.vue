<template>
	<div id="day-hold">

      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div style="margin: 15px 0;"></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" style="padding-bottom:15px;">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>


   <el-table
      :data="tableData"
      style="width: 90%">
      <el-table-column
        prop="date"
        label=""
        width="180">
      </el-table-column>
      <el-table-column
        prop="kind"
        label="品种">
      </el-table-column>
      <el-table-column
        prop="biaodi"
        label="标的">
      </el-table-column>
      <el-table-column
        prop="duokong"
        label="多空">
      </el-table-column>
      <el-table-column
        prop="profit"
        label="盈亏/逐笔浮盈">
      </el-table-column>
      <el-table-column
        prop="kjunjia"
        label="开仓均价">
      </el-table-column>
      <el-table-column
        prop="chjunjia"
        label="持仓均价">
      </el-table-column>
    </el-table>

      
	</div>
</template>

<script>
import Highstock from 'highcharts/highstock'
import SignalChart from "@/components/layout/SignalChart"
 const cityOptions = ['品种', '多空', '数量', '收盘价/结算价','盈亏/逐笔浮盈','开仓均价','持仓均价','保证金','当日盈亏','今手数','仓位占比'];

export default {

  components: {
      SignalChart,
  },

  data() {
    return {
       checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,

         tableData: [{
            date: '2016-05-02',
            kind: '',
            biaodi:'',
            duokong:'',
            profit:'',
            kjunjia:'',
            chjunjia:''
          }, {
             date: '',
            kind: '股票',
            biaodi:'傲视股份',
            duokong:'多仓',
            profit:'1243',
            kjunjia:'2570股',
            chjunjia:'142.97'
          }, {
              date: '',
            kind: '股票',
            biaodi:'傲视股份',
            duokong:'多仓',
            profit:'1243',
            kjunjia:'2570股',
            chjunjia:'142.97'
          }]


    }
  },

 methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
}
</script>



<style lang="scss">
 #day-hold {
 }

</style>