<template>
	<div class="general-info">
		<div style="border-bottom: 1px solid #E6E6E6; height: 36px; background-color:white; vertical-align: middle; line-height: 36px; padding-left: 20px;">
			<img src="/static/AICommunity/general-info-unselected.png">
			<span style="padding-left: 5px">收益概述</span>
		</div>
		<div style="background-color: white; padding: 20px; min-height: calc(100vh - 36px - 170px);">
			<div>
				<div v-for="gain in gains" class="char-status">
					<div v-text="gain.label" style="font-size: 12px;"></div>
					<div v-text="gain.value" style="font-size: 16px; padding-top: 12px;"></div>
				</div>
			</div>
			<div style="border: 1px solid black; padding-top: 34px;">
aa
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			strategyGain: "--",
			strategyYearGain: "--",
			baseGain: "--",
			alpha: "--",
			beta: "--",
			sharp: "--",
			sortino: "--",
			infoRatio: "--",
			algoVola: "--",
			benchVola: "--",
			winRate: "--",
			winRateDay: "--",
			winLossRatio: "--",
			winCount: "--",
			lossCount: "--",
			maxDrawdown: "--",

			gains: [
				{label: "策略收益", value: this.strategyGain ? this.strategyGain : "--"},
				{label: "策略年化收益", value: this.strategyYearGain ? this.strategyYearGain : "--"},
				{label: "基准收益", value: this.baseGain ? this.baseGain : "--"},
				{label: "Alpha", value: this.alpha ? this.alpha : '--'},
				{label: "Beta", value: this.beta ? this.beta : "--"},
				{label: "Sharp", value: this.sharp ? this.sharp : "--"},
				{label: "Sortino", value: this.sortino ? this.sortino : "--"},
				{label: "Information Ratio", value: this.infoRatio ? this.infoRatio : "--"},
				{label: "Algorithm Volatility", value: this.algoVola ? this.algoVola : "--"},
				{label: "Benchmark Volatility", value: this.benchVola ? this.benchVola : "--"},
				{label: "胜率", value: this.winRate ? this.winRate : "--"},
				{label: "日胜率", value: this.winRateDay ? this.winRateDay : "--"},
				{label: "盈亏比", value: this.winLossRatio ? this.winLossRatio : "--"},
				{label: "盈利次数", value: this.winCount ? this.winCount : "--"},
				{label: "亏损次数", value: this.lossCount ? this.lossCount : "--"},
				{label: "最大回撤", value: this.maxDrawdown ? this.maxDrawdown : "--"}
			]
		}
	}
}
</script>

<style lang="scss">
	.general-info {
		.char-status {
			display: inline-block;
			width: calc(100%/16);
			text-align: center;
			min-width: 35px;
		}		
	}
	
</style>