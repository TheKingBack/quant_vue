<template>
	<div class="sortino-info">
		<div style="border-bottom: 1px solid #E6E6E6; height: 36px; background-color:white; vertical-align: middle; line-height: 36px; padding-left: 20px;">
			<span><img src="/static/AICommunity/square-unselected.png"></span>
			<span style="padding-left: 5px">Sortino</span>
		</div>

		<div style="background-color: white; padding: 20px; min-height: calc(100vh - 36px - 170px)">
			<template>
			  	<el-table
				    :data="strategyReturnDate"
				    border
				    style="width: 100%"
				    :default-sort = "{prop: 'date', order: 'descending'}"
				    >
				    <el-table-column
				      prop="date"
				      label="日期"
				      sortable
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="month1"
				      label="1个月"
				      sortable
				      width="180">
				    </el-table-column>
				    <el-table-column
				      prop="month3"
				      label="3个月">
				    </el-table-column>
				    <el-table-column
				      prop="month6"
				      label="6个月">
				    </el-table-column>
				    <el-table-column
				      prop="month12"
				      label="12个月">
				    </el-table-column>
			    </el-table>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			strategyReturnDate: [
				{date: "2016-08", month1: "-0.0155", month3: "-0.0426", month6: "NaN", month12: "NaN"},
				{date: "2016-10", month1: "-0.0134", month3: "-0.0287", month6: "NaN", month12: "NaN"},
				{date: "2016-12", month1: "-0.0213", month3: "-0.0141", month6: "-0.0221", month12: "NaN"},
				{date: "2016-06", month1: "-0.0155", month3: "-0.0426", month6: "NaN", month12: "NaN"},
				{date: "2016-07", month1: "-0.0155", month3: "-0.0426", month6: "NaN", month12: "NaN"},
			]
		}
	}
}
</script>

<style lang="scss">
</style>