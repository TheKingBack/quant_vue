<template>
	<div>
		<div class="signal-chart-legend">
			<div style="display: inline-block; height: 10px;">
				<span class="benefit-legend" style="background-color: #058DC7;"></span>
				<span style="color: #14AAE1">策略收益</span>
			</div>
			<div style="display: inline-block; height: 10px;">
				<span class="benefit-legend" style="background-color: #ED561B;"></span>
				<span style="color: #ED561B">基准收益</span>
			</div>
			<div style="display: inline-block; height: 10px; float: right;">
	     		<span>{{chartData.startDate}}开始 ￥{{chartData.amountMoney}} {{chartData.frequency}}</span>
			</div>
		</div>
		<div :id="chartData.id" style="height: 100%;"></div>
	</div>
</template>

<script>
import Highstock from 'highcharts/highstock'

//TO DO: remove
function mockDataGenerator() {
	var mockData = [{name: '策略收益', data: [], color: "#00aefc"},{name: '基准收益', data: [], color: "#ED561B"}];
	for(var i=0; i<2; i++) {
		for(var j=90; j>=0; j--) {
			var _date = new Date() - j*24*60*60*1000;
			var _benefit = 1- Math.random() * 0.2;
			mockData[i].data.push([_date, _benefit]);
		}
	}
	return mockData;
}

export default {
	components: {
		Highstock
	},
	mounted() {
		this.$nextTick(function() {
			this.createChart();
		})
	},
	//Sample of "chartData"
	/*
	{
		id: "signalChart",
		options: [{name: '策略收益', data: [], color: "#058DC7"}, {name: '基准收益', data: [], color: "#ED561B"}],
		startDate: "2016-06-11",
		amountMoney: "30000",
		frequency: "每天"
	}
	*/
	props: ['chartData'],
	data() {
		return {

		}
	},
	methods: {
		createChart: function() {
			if(!document.getElementById(this.chartData.id)) {
				console.error("Element with specified id: " + this.chartData.id + " is not available" );
				return;
			}
			//TO DO: to remove
			this.chartData.options = mockDataGenerator();

			Highstock.StockChart({
				chart: {
					renderTo: this.chartData.id
				},
				credits: {
						enabled: false
				},
				series: this.chartData.options
			});
		}
	}
}
</script>

<style lang="scss">
	.signal-chart-legend {
		height: 20px;
		margin: 0px 10px; 
		font-size: 10px;

		.benefit-legend {
			display: inline-block;
			width: 10px;
			height: 10px;
		}
	}
</style>