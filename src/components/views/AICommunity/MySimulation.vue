<template>
	<div>
		<nav-bar :navMenuItems="signalDevelopMenu"></nav-bar>
		<div class="MSBigBox" :style="{width:MWidth,height:MHeight}">
			<!-- 信号曲线模态框 -->
			<div class="MSSignalCurve" v-show="OpMSSC">
				<div class="MSSCTop">
					<div class="MSSCTopWord">信号曲线（模拟）</div>
					<div class="MSSCTopColse" @click="CloseCurve"></div>
				</div>
				<div class="MSSCContent">
					<div id="MSChart"></div>
				</div>
			</div>

			<!-- 信号设置 -->
			<div class="MSSignalSetUp" v-show="OpMSSSU">
				<div class="MSSSTop">
					<div class="MSSSTopWord">公共应用设置</div>
					<div class="MSSSTopColse" @click="CloseSetUp"></div>
				</div>
				<div class="MSSSTableOut">
					<div class="MSSSTable">
						<table  class="table" cellspacing="0" cellpadding="0">
							<tr class="thead">
								<td style="width:18%;height:28px;">简称</td>
								<td style="width:18%;height:28px;">名称</td>
								<td style="width:28%;height:28px;">参数</td>
								<td style="width:18%;height:28px;">显示</td>
								<td style="width:18%;height:28px;">报警</td>
							</tr>
							<tr class="tbody" v-for="item in MSSSetUpData" :key="item.Id" @click="ViewParameters(item.Id)">
								<td style="width:18%;height:28px;">{{item.Abbreviation}}</td>
								<td style="width:18%;height:28px;">{{item.SignalName}}</td>
								<td style="width:28%;height:28px;">{{item.Parameter}}</td>
								<td style="width:18%;height:28px;">{{item.Display}}</td>
								<td style="width:18%;height:28px;">{{item.CallPolice}}</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="MSSSSelectI">
					<template>
						<el-checkbox v-model="AutomaticTrading" @change="IsSelect"><span class="MSASBLCWord">启动自动策略交易系统</span></el-checkbox>
					</template>
					<template>
						<el-checkbox v-model="OrderConfirmation"><span class="MSASBLCWord">下单需要用户确认</span></el-checkbox>
					</template>
					<template>
						<el-checkbox v-model="SendMailbox"><span class="MSASBLCWord">将交易信息发送到邮箱</span></el-checkbox>
					</template>
				</div>
				<div class="MSSSAccountI">
					<template>
						<el-radio-group v-model="radio2">
							<el-radio :label="1">
								<span class="SelectName">单账户</span>
								<input type="text" readonly v-model="SingleAccount" class="AccountInp">
								<span class="BatchHiding">批量隐藏</span>
							</el-radio>
							<el-radio :label="2">
								<span class="SelectName">多账户</span>
								<input type="text" readonly v-model="MultiAccount" class="AccountInp">
								<span class="AccounntSet">账户设置</span>
							</el-radio>
						</el-radio-group>
					</template>
				</div>
				<div class="MSSSType">
					<div class="MSSSTLeft">
						<span class="TypeName">投保标志：</span>
						<template>
							<el-select v-model="InsureTypeV" placeholder="请选择">
								<el-option
									v-for="item in InsureType"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
					<div class="MSSSTRight">
						<span class="TypeName">委托映射：</span>
						<template>
							<el-select v-model="EntrustTypeV" placeholder="请选择">
								<el-option
									v-for="item in EntrustType"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</template>
					</div>
				</div>
				<div class="MSSSBtn">
					<div class="MSSSBLeft">确定</div>
					<div class="MSSSBRight" @click="CloseSetUp">取消</div>
				</div>
			</div>

			<!-- 参数信息模态框 -->
			<div class="MSParametersI" v-show="OpMSPI">
				<div class="MSPITop">
					<div class="MSPITopWord">自动交易</div>
					<div class="MSPITopColse" @click="ClosePI"></div>
				</div>
				<div class="MSPITableOut">
					<div class="MSPITable">
						<table  class="table" cellspacing="0" cellpadding="0">
							<tr class="thead">
								<td style="width:40%;height:28px;">参数名</td>
								<td style="width:30%;height:28px;">参数值</td>
								<td style="width:30%;height:28px;">优化范围</td>
							</tr>
							<tr class="tbody" v-for="item in MSPIData" :key="item.Id">
								<td style="width:40%;height:28px;">{{item.ParameterName}}</td>
								<td style="width:30%;height:28px;">{{item.parameterValues}}</td>
								<td style="width:30%;height:28px;">{{item.OptimizationRange}}</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="MSPIBtn">
					<div class="MSPIBLeft" @click="ClosePI">确定</div>
					<div class="MSPIBRight" @click="ClosePI">取消</div>
				</div>
			</div>

			<!-- 自动交易提示模态框 -->
			<div class="MSAutomaticTrading" v-show="OpMSAT">
				<div class="MSATTop">
					<div class="MSATTopWord">自动交易</div>
					<div class="MSATTopColse" @click="CloseAT"></div>
				</div>
				<div class="MSATNav">
					<div class="MSATNPrompt"></div>
					<div class="MSATNPWord">您将启动自动交易系统，给系统将自动发送策略产生的委托，请仔细阅读以下文字，如果您想继续该功能，请点击[同意]按钮，否则点击[取消]退出.</div>
				</div>
				<div class="MSATNPContent">
					<div class="MSATNPC">
						<p>自动交易风险提示</p>
						<p>您将启动'自动交易系统'，启动后，系统将自动跟踪你设定的交易讯号，一旦讯号满足条件，系统立刻会自动发送你设定的交易委托。</p>
						<p>开发商郑重提醒使用者仔细阅读下面的内容，以便正确且全面了解使用'自动交易'可能面临的交易风险。</p>
						<p>在使用者未作承诺，全部承担由于'自动交易'使用不当挥着其他原因引起的交易风险前，将不能使用'自动交易'的任何功能。</p>
						<p>开发商已最大限度的采取了有效措施，保证'自动交易'的安全性。</p>
					</div>
				</div>
				<div class="MSATBtn">
					<div class="MSATBLeft" @click="OpenAT">确定</div>
					<div class="MSATBRight" @click="CloseAT">取消</div>
				</div>
			</div>

			<!-- 监控器模态框 -->
			<div class="MSMonitor" v-show="OpMSM">
				<div class="MSMTop">自动交易监视器</div>
				<div class="MSMCenter">
					<div class="MSMCLeft">
						<div class="MSMCLTitle">范围设置</div>
						<div class="MSMCLTOne">
							<template>
								<el-checkbox v-model="MSMAllAccounts"><span class="MSMCLTOWord">全部账户</span></el-checkbox>
							</template>
							<template>
								<el-select v-model="MSMAccount" placeholder="请选择">
									<el-option
										v-for="item in MSMAccounts"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</template>
						</div> 
						<div class="MSMCLTOne">
							<template>
								<el-checkbox v-model="MSMAllGoods"><span class="MSMCLTOWord">全部商品</span></el-checkbox>
							</template>
							<template>
								<el-select v-model="MSMGoods" placeholder="请选择">
									<el-option
										v-for="item in MSMCommoditys"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</template>
						</div>
						<div class="MSMCLTOne">
							<template>
								<el-checkbox v-model="Storehouse"><span class="MSMCLTOWord">多仓信息</span></el-checkbox>
							</template>
							<template>
								<el-checkbox v-model="Empty"><span class="MSMCLTOWord">空仓信息</span></el-checkbox>
							</template>
						</div>
						<div class="MSMCLTOne">
							<template>
								<el-checkbox v-model="Mismatch"><span class="MSMCLTOWord">只显示不匹配</span></el-checkbox>
							</template>
							<div class="MSMCLTFSet" @click="OpenMSAL">高级设置</div>
						</div>
					</div>
					<div class="MSMCCenter">
						<div class="MSMCCTitle">同步设置</div>
						<div class="MSMCCTOne">
							<span class="MSMCCTOWord">同步比例</span>
							<template>
								<el-select v-model="MSMSRatio" placeholder="请选择">
									<el-option
										v-for="item in MSMSRatios"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</template>
							<span class="MSMCCTOWord">同步比例</span>
							<template>
								<el-select v-model="MSMInsure" placeholder="请选择">
									<el-option
										v-for="item in MSMInsures"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</template>
							<template>
								<el-checkbox v-model="NetPosition"><span class="MSMCCTOWordO">仅同步净头寸</span></el-checkbox>
							</template>
						</div> 
						<div class="MSMCCTOne">
							<span class="MSMCCTOWord">委托价格</span>
							<template>
								<el-input-number :controls="false" v-model="EPrice" controls-position="right" @change="EPriceChange" :min="1" :max="10"></el-input-number>
							</template>
							<template>
								<el-checkbox v-model="PriceMigration"><span class="MSMCCTOWordO">使用价格偏移</span></el-checkbox>
							</template>
							<template>
								<el-input-number :controls="false" v-model="PriceMigrationNum" controls-position="right" @change="PriceMigrationChange" :min="1" :max="10"></el-input-number>
							</template>
						</div> 
						<div class="MSMCCTOne">
							<template>
								<el-checkbox v-model="TimedRefresh"><span class="MSMCCTOWordO">定时刷新</span></el-checkbox>
							</template>
							<template>
								<el-input-number :controls="false" v-model="TimedRefreshTime" controls-position="right" @change="EPriceChange" :min="1" :max="10"></el-input-number>
							</template>
							<span class="MSMCCTOWord">秒</span>
							<template>
								<el-checkbox v-model="MTimesChecked"><span class="MSMCCTOWordO">连续</span></el-checkbox>
							</template>
							<template>
								<el-input-number :controls="false" v-model="MTimes" controls-position="right" @change="EPriceChange" :min="1" :max="10"></el-input-number>
							</template>
							<span class="MSMCCTOWord">次不匹配则自动同步</span>
						</div> 
						<div class="MSMCCTOne">
							<template>
								<el-checkbox v-model="SoundAlarm"><span class="MSMCCTOWordO">声音报警</span></el-checkbox>
							</template>
							<span class="MSMCCTOWordT">建议自动同步时至少设置两次以上不匹配进行过滤</span>
						</div> 
					</div>
					<div class="MSMCRight">
						<div class="MSMCRBtn">查询</div>
						<div class="MSMCRBtn MSMCRBO">交易日志</div>
						<div class="MSMCRBtn MSMCRBO">一键同步</div>
						<div class="MSMCRBtn MSMCRBO" @click="OpenCMSM">关闭</div>
					</div>
				</div>
				<div class="MSPMableOut">
					<div class="MSMTable">
						<table  class="table" cellspacing="0" cellpadding="0">
							<tr class="thead">
								<td style="width:14%;height:28px;">账户ID</td>
								<td style="width:12%;height:28px;">商品</td>
								<td style="width:6%;height:28px;">账户仓</td>
								<td style="width:6%;height:28px;">杠杆率</td>
								<td style="width:6%;height:28px;">系统仓</td>
								<td style="width:8%;height:28px;">理论仓差</td>
								<td style="width:6%;height:28px;">手工仓</td>
								<td style="width:6%;height:28px;">匹配</td>
								<td style="width:6%;height:28px;">账户多</td>
								<td style="width:6%;height:28px;">系统多</td>
								<td style="width:6%;height:28px;">手工多</td>
								<td style="width:6%;height:28px;">账户空</td>
								<td style="width:6%;height:28px;">系统空</td>
								<td style="width:6%;height:28px;">手工空</td>
							</tr>
							<tr class="tbody" v-for="item in MSPIData" :key="item.Id">
								<td style="width:14%;height:28px;">{{item.ParameterName}}</td>
								<td style="width:12%;height:28px;">{{item.parameterValues}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:8%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:6%;height:28px;">{{item.OptimizationRange}}</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="MSMBtn">
					<div class="MSMBLogin" @click="OpenAL">交易账号登录</div>
				</div>
			</div>

			<!-- 监控范围高级设置模态框 -->
			<div class="MSASetting" v-show="OpMSAS">
				<div class="MSASTop">监控范围高级设置</div>
				<div class="MSASBottom">
					<div class="MSASBLeft">
						<div class="MSASBLWord">监控账户</div>
						<div class="MSASBLContent">
							<template>
								<el-checkbox v-model="AllAccounts"><span class="MSASBLCWord">所有账户</span></el-checkbox>
							</template>
							<div class="MSASBLCSonA">
								<template>
									<el-checkbox v-model="SonAccount"><span class="MSASBLCWord">105245235（吴谣）</span></el-checkbox>
								</template>
							</div>
							<div class="MSASBLCSonA">
								<template>
									<el-checkbox v-model="SonAccountO"><span class="MSASBLCWord">jb5125</span></el-checkbox>
								</template>
							</div>
						</div>
					</div>
					<div class="MSASBCenter">
						<div class="MSASBCChoose">
							<template>
								<el-checkbox v-model="OnlyFS"><span class="MSASBLCWord">仅对以下范围</span></el-checkbox>
							</template>
							<template>
								<el-checkbox v-model="ExcludeFS"><span class="MSASBLCWord">排除以下范围</span></el-checkbox>
							</template>
							<template>
								<el-checkbox v-model="GoodsFilters"><span class="MSASBLCWord">按商品大类过滤</span></el-checkbox>
							</template>
						</div>
						<div class="MSASBCContent">
							<div class="MSASBCCTable">
								<table  class="table" cellspacing="0" cellpadding="0">
									<tr class="thead">
										<td style="width:50%;height:28px;">交易所</td>
										<td style="width:50%;height:28px;">商品</td>
									</tr>
									<tr class="tbody" v-for="item in MSPIData" :key="item.Id">
										<td style="width:50%;height:28px;">{{item.ParameterName}}</td>
										<td style="width:50%;height:28px;">{{item.parameterValues}}</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
					<div class="MSASBRight">
						<div class="MSASBRBtn">添加</div>
						<div class="MSASBRBtn MSASBRBO">删除</div>
						<div class="MSASBRBtn MSASBRBO">清空</div>
						<div class="MSASBRBtn MSASBRBO">导入</div>
						<div class="MSASBRBtn MSASBRBO">导出</div>
						<div class="MSASBRBtn MSASBRBT" @click="CloseMSAS">确定</div>
						<div class="MSASBRBtn MSASBRBO" @click="CloseMSAS">取消</div>
					</div>
				</div>
			</div>

			<!-- 账户登录模态框 -->
			<div class="MSAccountLogin" v-show="OpMSAL">
				<div class="MSALTop">
					<div class="MSALTopWord">账户登录</div>
					<div class="MSALTopColse" @click="CloseAL"></div>
				</div>
				<div class="MSALTableOut">
					<div class="MSALTable">
						<table  class="table" cellspacing="0" cellpadding="0">
							<tr class="thead">
								<td style="width:20%;height:28px;">经济商</td>
								<td style="width:30%;height:28px;">账户</td>
								<td style="width:20%;height:28px;">姓名</td>
								<td style="width:30%;height:28px;">密码</td>
							</tr>
							<tr class="tbody" v-for="item in MSPIData" :key="item.Id">
								<td style="width:20%;height:28px;">{{item.ParameterName}}</td>
								<td style="width:30%;height:28px;">{{item.parameterValues}}</td>
								<td style="width:20%;height:28px;">{{item.OptimizationRange}}</td>
								<td style="width:30%;height:28px;">{{item.OptimizationRange}}</td>
							</tr>
						</table>
					</div>
				</div>
				<div class="MSALBuild" @click="ClosePI">新建账户</div>
			</div>

			<!-- 关闭监控器提示框 -->
			<div class="CloseMSMonitor" v-show="OpCMSM">
				<div class="CMSMTop">关闭弹窗会终止监控器运行，你确认要关闭吗？</div>
				<div class="CMSMBtn">
					<div class="CMSMBLeft" @click="CancelCMSM">取消</div>
					<div class="CMSMBRight" @click="DetermineCMSM">确定</div>
				</div>
			</div>

			<!-- <ul class="MSLeft" :style="{height:MSLeftHeight}"> -->
			<ul class="MSLeft" :style="{height:MSLeftHeight}">
				<li class="active">信号开发</li>
				<li>功能模拟</li>
				<li>信号商城</li>
				<li>实盘模拟</li>
				<li>智能投顾</li>
				<li>交易加载模块</li>
			</ul>
			<!--  :style="{height:MSLeftHeight,width:MSRightWidth}" -->
			<div class="MSRight" :style="{height:MSLeftHeight}">
				<div class="MSRTop">行情图</div>
				<div class="MSRMonitor" @click="OpenMonitor">监控器</div>
				<div class="MSRContentOut">
					<div class="MSRContent">
						<!--  @mouseleave="MSRCDOut(item.id)" @mouseenter="MSRCDOver(item.id)" -->
						<!-- <div class="MSRCDiagram" v-for="item in MySimulationData" :key="item.id"> -->
						<div class="MSRCDiagram" v-for="item in MySimulationData" :key="item.id">
							<div class="MSRCDTop">
								<div class="MSRCDTWord">BJSA000254+6</div>
								<div class="MSRCDTSCurve" v-show="SCShow" @click="OpenCurve(item.id)">信号曲线（模拟）</div>
								<div class="MSRCDTSSet" v-show="SCShow" @click="OpenSetUp(item.id)">信号设置</div>
								<div class="MSRCDTClose"></div>
								<div class="MSRCDTEnlarge" v-show="WindowSize" @click="EnlargeIt(item.id)"></div>
								<div class="MSRCDTEnlargeO" v-show="!WindowSize" @click="NarrowIt(item.id)"></div>
							</div>
							<!-- <div class="MSRCDConter">rb000螺纹指数15分钟线2014-05-14</div> -->
							<div class="MSRCDExplain"></div>
							<div id="container"></div>
						</div>
						<div class="MSRCDiagram" v-for="item in MySimulationData1" :key="item.id">
							<div class="MSRCDTop">
								<div class="MSRCDTWord">BJSA000254+6</div>
								<div class="MSRCDTSCurve" v-show="SCShow" @click="OpenCurve(item.id)">信号曲线（模拟）</div>
								<div class="MSRCDTSSet" v-show="SCShow" @click="OpenSetUp(item.id)">信号设置</div>
								<div class="MSRCDTClose"></div>
								<div class="MSRCDTEnlarge" v-show="WindowSize" @click="EnlargeIt(item.id)"></div>
								<div class="MSRCDTEnlargeO" v-show="!WindowSize" @click="NarrowIt(item.id)"></div>
							</div>
							<!-- <div class="MSRCDConter">rb000螺纹指数15分钟线2014-05-14</div> -->
							<div class="MSRCDExplain"></div>
							<div id="container1"></div>
						</div>
						<div class="MSRCDiagram" v-for="item in MySimulationData2" :key="item.id">
							<div class="MSRCDTop">
								<div class="MSRCDTWord">BJSA000254+6</div>
								<div class="MSRCDTSCurve" v-show="SCShow" @click="OpenCurve(item.id)">信号曲线（模拟）</div>
								<div class="MSRCDTSSet" v-show="SCShow" @click="OpenSetUp(item.id)">信号设置</div>
								<div class="MSRCDTClose"></div>
								<div class="MSRCDTEnlarge" v-show="WindowSize" @click="EnlargeIt(item.id)"></div>
								<div class="MSRCDTEnlargeO" v-show="!WindowSize" @click="NarrowIt(item.id)"></div>
							</div>
							<!-- <div class="MSRCDConter">rb000螺纹指数15分钟线2014-05-14</div> -->
							<div class="MSRCDExplain"></div>
							<div id="container2"></div>
						</div>
						<div class="MSRCDiagram" v-for="item in MySimulationData3" :key="item.id">
							<div class="MSRCDTop">
								<div class="MSRCDTWord">BJSA000254+6</div>
								<div class="MSRCDTSCurve" v-show="SCShow" @click="OpenCurve(item.id)">信号曲线（模拟）</div>
								<div class="MSRCDTSSet" v-show="SCShow" @click="OpenSetUp(item.id)">信号设置</div>
								<div class="MSRCDTClose"></div>
								<div class="MSRCDTEnlarge" v-show="WindowSize" @click="EnlargeIt(item.id)"></div>
								<div class="MSRCDTEnlargeO" v-show="!WindowSize" @click="NarrowIt(item.id)"></div>
							</div>
							<!-- <div class="MSRCDConter">rb000螺纹指数15分钟线2014-05-14</div> -->
							<div class="MSRCDExplain"></div>
							<div id="container3"></div>
						</div>
						<div class="MSRCDiagram" v-for="item in MySimulationData4" :key="item.id">
							<div class="MSRCDTop">
								<div class="MSRCDTWord">BJSA000254+6</div>
								<div class="MSRCDTSCurve" v-show="SCShow" @click="OpenCurve(item.id)">信号曲线（模拟）</div>
								<div class="MSRCDTSSet" v-show="SCShow" @click="OpenSetUp(item.id)">信号设置</div>
								<div class="MSRCDTClose"></div>
								<div class="MSRCDTEnlarge" v-show="WindowSize" @click="EnlargeIt(item.id)"></div>
								<div class="MSRCDTEnlargeO" v-show="!WindowSize" @click="NarrowIt(item.id)"></div>
							</div>
							<!-- <div class="MSRCDConter">rb000螺纹指数15分钟线2014-05-14</div> -->
							<div class="MSRCDExplain"></div>
							<div id="container4"></div>
						</div>
						<div class="MSRCDiagram" v-for="item in MySimulationData5" :key="item.id">
							<div class="MSRCDTop">
								<div class="MSRCDTWord">BJSA000254+6</div>
								<div class="MSRCDTSCurve" v-show="SCShow" @click="OpenCurve(item.id)">信号曲线（模拟）</div>
								<div class="MSRCDTSSet" v-show="SCShow" @click="OpenSetUp(item.id)">信号设置</div>
								<div class="MSRCDTClose"></div>
								<div class="MSRCDTEnlarge" v-show="WindowSize" @click="EnlargeIt(item.id)"></div>
								<div class="MSRCDTEnlargeO" v-show="!WindowSize" @click="NarrowIt(item.id)"></div>
							</div>
							<!-- <div class="MSRCDConter">rb000螺纹指数15分钟线2014-05-14</div> -->
							<div class="MSRCDExplain"></div>
							<div id="container5"></div>
						</div>
						<!-- 下部的分页 -->
						<div class="pageBox">
							<div class="paging">
								<el-pagination 
								background layout="prev, pager, next" 
								:total="AllFunctionTotal" 
								:page-size="pageSize"
								:current-page="AllFunctionCP"
								@current-change="AllFunctionCPChange">
								</el-pagination>
							</div>
						</div>

						<!-- 颜色分割 -->
						<div class="MSRSegmenting"></div>
						<!-- 下部的监控详情 -->
						<div class="MSRBottom">
							<ul class="MSRBTitle">
								<li>账户</li>
								<li>昨日结存</li>
								<li>浮动盈亏</li>
								<li>平仓盈亏</li>
								<li>动态权益</li>
								<li>可用资金</li>
								<li>持仓保证金</li>
								<li>冻结资金</li>
								<li>手续费</li>
								<li>风险</li>
								<li>详情</li>
							</ul>
							<ul class="MSRBContent" v-for="item in AccountMonitoringData" :key="item.id">
								<li>{{item.AccountName | benefitFilter}}</li>
								<li>{{item.DepositYesterday | benefitFilter}}</li>
								<li>{{item.FloatingPOrL | benefitFilter}}</li>
								<li>{{item.OffsetPOrL | benefitFilter}}</li>
								<li>{{item.Dynamic | benefitFilter}}</li>
								<li>{{item.AvailableFunds | benefitFilter}}</li>
								<li>{{item.HoldingDeposit | benefitFilter}}</li>
								<li>{{item.FrozenFunds | benefitFilter}}</li>
								<li>{{item.ServiceCharge | benefitFilter}}</li>
								<li>{{item.Risk | benefitFilter}}</li>
								<li>
									<router-link class="ViewDetails" to="">查看详情</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar"
import FooterBar from "@/components/layout/FooterBar"
import Highstock from 'highcharts/highstock'
import Global from "@/components/layout/Global"

//浏览器可视区域减去上边nav
var Height = $(window).height()-62;
//右边内容的宽度
// var Width = $(window).width()-202;
var Width = $(window).width();



export default {
	components: {
		NavBar,
      FooterBar,
      Highstock,
	},
	mounted: function() {
		
		this.$nextTick(function() {
			this.HighstockData();
		});
		//在窗口大小发生改变时发生
		var that = this;
		window.onresize = () => {
            return (() => {
					// 右边内容的高度
               var Height = $(window).height()-62;
					//右边内容的宽度
					var Width = $(window).width();
					this.MSLeftHeight = Height + "px";
					this.MHeight = Height + "px";
					this.MWidth = Width + "px";
            })()
        }
		// window.onresize = function() {
		// 	var Height = $(window).height()-62;
		// 	//右边内容的宽度
		// 	var Width = $(window).width();
		// 	this.MSLeftHeight = Height + "px";
		// 	this.MHeight = Height + "px";
		// 	this.MWidth = Width + "px";
		// }

		//信号曲线随意拖动
		var box = document.getElementsByClassName("MSSignalCurve")[0];
		var drop = document.getElementsByClassName("MSSCTop")[0];
		drop.onmousedown = function (event) {
			var event = event || window.event;
			var pagex = event.pageX || event.clientX + scrollLeft();
			var pagey = event.pageY || event.clientY + scrollTop();
			var boxx = box.offsetLeft;
			var boxy = box.offsetTop;
			var x = pagex - boxx;
			var y = pagey - boxy;
			document.onmousemove = function (event) {
				var event = event || window.event;
				var pagex = event.pageX ||event.clientX + scrollLeft();
				var pagey = event.pageY ||event.clientY + scrollTop();
				var yy = pagey - y;
				var xx = pagex - x;
				if(yy<30){
					yy = 30;
				}
				box.style.left = xx + "px";
				box.style.top = yy + "px";

				//取消文字选中状态
				window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
			}
		}
		//信号设置随意拖动
		var SetUp = document.getElementsByClassName("MSSignalSetUp")[0];
		var STop = document.getElementsByClassName("MSSSTop")[0];
		STop.onmousedown = function (event) {
			var SetUpE = event || window.event;
			var SetUpPagex = SetUpE.pageX || SetUpE.clientX + scrollLeft();
			var SetUpPagey = SetUpE.pageY || SetUpE.clientY + scrollTop();
			var SetUpx = SetUp.offsetLeft;
			var SetUpy = SetUp.offsetTop;
			var SetUpx = SetUpPagex - SetUpx;
			var SetUpy = SetUpPagey - SetUpy;
			document.onmousemove = function (event) {
				var SetUpE = event || window.event;
				var SetUpPagex = SetUpE.pageX ||SetUpE.clientX + scrollLeft();
				var SetUpPagey = SetUpE.pageY ||SetUpE.clientY + scrollTop();
				var SetUpyy = SetUpPagey - SetUpy;
				var SetUpxx = SetUpPagex - SetUpx;
				if(SetUpyy<30){
					SetUpyy = 30;
				}
				SetUp.style.left = SetUpxx + "px";
				SetUp.style.top = SetUpyy + "px";

				//取消文字选中状态
				window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
			}
		}
		//鼠标弹起，然后移动事件解除;
		document.onmouseup = function () {
			document.onmousemove = null;
		}
	},
	data() {
		return {
			signalDevelopMenu: Global.getPageMenu("SignalDevelop"),
			MSLeftHeight: Height + "px",
			MHeight: Height + "px",
			// MSRightWidth: Width + "px",
			MWidth: Width + "px",

			//账户监测数据
			AccountMonitoringData:[
				{
					AccountName:"test_2018_00263",
					DepositYesterday:"1000000.00",
					FloatingPOrL:"0.00",
					OffsetPOrL:"0.00",
					Dynamic:"1000000.00",
					AvailableFunds:"1000000.00",
					HoldingDeposit:"0.00",
					FrozenFunds:"0.00",
					ServiceCharge:"0.00",
					Risk:"0.00%",
				},
				{
					AccountName:"test_2018_00264",
					DepositYesterday:"1000000.00",
					FloatingPOrL:"0.00",
					OffsetPOrL:"0.00",
					Dynamic:"1000000.00",
					AvailableFunds:"1000000.00",
					HoldingDeposit:"",
					FrozenFunds:"0.00",
					ServiceCharge:"0.00",
					Risk:"0.00%",
				},
				{
					AccountName:"test_2018_00265",
					DepositYesterday:"1000000.00",
					FloatingPOrL:"0.00",
					OffsetPOrL:"0.00",
					Dynamic:"1000000.00",
					AvailableFunds:"1000000.00",
					HoldingDeposit:"",
					FrozenFunds:"0.00",
					ServiceCharge:"0.00",
					Risk:"0.00%",
				},
				{
					AccountName:"test_2018_00266",
					DepositYesterday:"1000000.00",
					FloatingPOrL:"0.00",
					OffsetPOrL:"0.00",
					Dynamic:"1000000.00",
					AvailableFunds:"1000000.00",
					HoldingDeposit:"",
					FrozenFunds:"0.00",
					ServiceCharge:"0.00",
					Risk:"0.00%",
				},
				{
					AccountName:"test_2018_00267",
					DepositYesterday:"1000000.00",
					FloatingPOrL:"0.00",
					OffsetPOrL:"0.00",
					Dynamic:"1000000.00",
					AvailableFunds:"1000000.00",
					HoldingDeposit:"",
					FrozenFunds:"0.00",
					ServiceCharge:"0.00",
					Risk:"0.00%",
				},
			],

			//信号曲线数据
			benefitData: [],
			//点击打开信号曲线
			OpMSSC:false,


			//信号设置信号曲线字样是否显示
			SCShow:false,
			//点击打开信号设置
			OpMSSSU:false,
			MSSSetUpData:[
				{
					Abbreviation: "10056354",
					SignalName: "ni1805",
					Parameter: "-2",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056353",
					SignalName: "ni1804",
					Parameter: "-3",
					Display: "0.78",
					CallPolice: "关",
				},
				{
					Abbreviation: "10056352",
					SignalName: "ni1803",
					Parameter: "-4",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056351",
					SignalName: "ni18052",
					Parameter: "-5",
					Display: "0.78",
					CallPolice: "关",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
				{
					Abbreviation: "10056350",
					SignalName: "ni1801",
					Parameter: "-6",
					Display: "0.78",
					CallPolice: "开",
				},
			],
			//参数信息模态框
			OpMSPI:false,
			//参数信息数据
			MSPIData:[
				{
					ParameterName:"signal_period",
					parameterValues:15,
					OptimizationRange:"N/A"
				},
				{
					ParameterName:"signal_period",
					parameterValues:15,
					OptimizationRange:"N/A"
				},
				{
					ParameterName:"signal_period",
					parameterValues:15,
					OptimizationRange:"N/A"
				},
				{
					ParameterName:"signal_period",
					parameterValues:15,
					OptimizationRange:"N/A"
				},
				{
					ParameterName:"signal_period",
					parameterValues:15,
					OptimizationRange:"N/A"
				},
			],
			//自动交易是否选中
			AutomaticTrading:false,
			//下单确认是否被选中
			OrderConfirmation:false,
			//信息发送邮箱是否被选中
			SendMailbox:false,
			//自动交易提示框
			OpMSAT:false,
			//账户选择
			radio2:1,
			//单账户
			SingleAccount:"",
			//多账户
			MultiAccount:"",
			//投保标志类型
			InsureType: [
				{
					value: '1',
					label: '投机'
				},
				{
					value: '2',
					label: '保值'
				},
				{
					value: '3',
					label: '套利'
				}
			],
        	InsureTypeV: '',
			//委托映射
			EntrustType: [
				{
					value: '1',
					label: '不启用'
				},
				{
					value: '2',
					label: 'DO-D1'
				},
				{
					value: '3',
					label: 'DO-D1,D1-D3'
				},
				{
					value: '4',
					label: 'DO-指定商品'
				},
				{
					value: '5',
					label: 'DO-主力合约'
				},
				{
					value: '6',
					label: 'DO-多空分开'
				},
				{
					value: '7',
					label: 'DO-主力合约'
				},
				{
					value: '8',
					label: 'DO-商品-D1-D2'
				},
				{
					value: '9',
					label: '智能路由'
				}
			],
			EntrustTypeV: '',


			//监控器
			OpMSM:false,
			//范围设置账户
			MSMAllAccounts:true,
			MSMAccount:"",
			MSMAccounts:[
				{
					value: '1',
					label: '18730603578'
				},
				{
					value: '2',
					label: '18730603578'
				},
				{
					value: '3',
					label: '18730603578'
				},
				{
					value: '4',
					label: '18730603578'
				},
				{
					value: '5',
					label: '18730603578'
				},
			],
			//范围设置商品
			MSMAllGoods:true,
			MSMGoods:"",
			MSMCommoditys:[
				{
					value: '1',
					label: '18730603578'
				},
				{
					value: '2',
					label: '18730603578'
				},
				{
					value: '3',
					label: '18730603578'
				},
				{
					value: '4',
					label: '18730603578'
				},
				{
					value: '5',
					label: '18730603578'
				},
			],
			//多仓信息和空仓信息
			Storehouse:true,
			Empty:true,
			//只显示不匹配
			Mismatch:true,
			//同步设置同步比例
			MSMSRatio:"",
			MSMSRatios:[
				{
					value: '1',
					label: '全部'
				},
				{
					value: '2',
					label: '不全部'
				},
			],
			//同步设置投保
			MSMInsure:"",
			MSMInsures:[
				{
					value: '1',
					label: '投机'
				},
				{
					value: '2',
					label: '保值'
				},
				{
					value: '3',
					label: '套利'
				}
			],
			//同步设置仅同步净头寸
			NetPosition:true,
			//同步设置委托价格
			EPrice:"",
			//同步设置价格偏移
			PriceMigration:true,
			//同步设置价格偏移多少
			PriceMigrationNum:"",
			//同步设置定时刷新是否选中
			TimedRefresh:true,
			//同步设置定时刷新时间
			TimedRefreshTime:"",
			//同步设置连续刷新是否选中
			MTimesChecked:true,
			//同步设置连续刷新次数
			MTimes:"",
			//同步设置声音报警是否选中
			SoundAlarm:true,

			//监控范围高级设置模态框是否出现
			OpMSAS:false,
			//所有账户是否选中
			AllAccounts:true,
			//第一个子账户是否被选中
			SonAccount:true,
			//第二个子账户是否被选中
			SonAccountO:true,
			//仅对以下范围是否被选中
			OnlyFS:true,
			//排除以下范围是否被选中
			ExcludeFS:true,
			//按商品大类过滤是否被选中
			GoodsFilters:true,

			//账户登录模态框是否出现
			OpMSAL:false,

			//关闭监控器提示框
			OpCMSM:false,


			//窗口大小
			WindowSize:true,

			//每页显示的个数
			pageSize:5,
			//函数的总数
			AllFunctionTotal:20,
			//当前页数
			AllFunctionCP:1,

			MySimulationData:[
				{
					id:1,
				},
			],
			MySimulationData1:[
				{
					id:2,
				},
			],
			MySimulationData2:[
				{
					id:3,
				},
			],
			MySimulationData3:[
				{
					id:4,
				},
			],
			MySimulationData4:[
				{
					id:5,
				},
			],
			MySimulationData5:[
				{
					id:6,
				},
			],
		};
	},
	methods: {
		//委托价格改变
		EPriceChange(value){

		},
		//价格偏移改变
		PriceMigrationChange(value){

		},
		//页面生成时发送的请求
		GetAllFunctionData: function(Cpage,CpageSize) {
			this.$http.get(Global.getRequestUrl() + "/favor/list",
			{
				params: {
					'page': Cpage,
					'pageSize':CpageSize
				},
				headers: Global.getRequestHeader()
			}
			).then(function(resp) {
			var resp = resp.body;
			if(resp.success) {
				this.AccountMonitoringData = resp.data.AccountMonitoringData;
					console.log("获取函数库列表列表成功！");
			}else {
				console.error("获取函数库列表失败！" + "error code: " + resp.err_code + ", reason: "+ resp.reason);
			}
			}, function(error) {
			console.error("获取函数库列表请求失败！");
			console.error(error);
			});
		},

		//获取分页中每一项的数据
		AllFunctionCPChange(curPage){
			var self = this;
			self.AllFunctionCP = curPage;
			//Get current page data from back end
			self.GetAllFunctionData(self.AllFunctionCP,self.pageSize);
		},

		//曲线图表
		HighstockData(){
			// $.getJSON('https://www.highcharts.com/samples/data/aapl-ohlcv.json', function (data) {
			$.getJSON('https://data.jianshukeji.com/jsonp?filename=json/aapl-ohlcv.json&callback=?', function (data) {
				// split the data set into ohlc and volume
				var ohlc = [],
					volume = [],
					dataLength = data.length,
					// set the allowed units for data grouping
					groupingUnits = [
						[
							'week', // unit name
							[1] // allowed multiples
						],
						[
							'month', [1, 2, 3, 4, 6]
						]
					],

					i = 0;

				for (i; i < dataLength; i += 1) {
					ohlc.push([
						data[i][0], // the date
						data[i][1], // open
						data[i][2], // high
						data[i][3], // low
						data[i][4] // close
					]);

					volume.push([
						data[i][0], // the date
						data[i][5] // the volume
					]);
				};

				Highstock.stockChart('container', {
					rangeSelector: {
						selected: undefined
					},
					navigator: {
						height: 20
					},
					credits: {
						enabled: false
					},
					xAxis: {
						type: 'datetime',
						dateTimeLabelFormats: {  
							second: '%Y-%m-%d<br/>%H:%M:%S',  
							minute: '%Y-%m-%d<br/>%H:%M',  
							hour: '%Y-%m-%d<br/>%H:%M',  
							day: '%Y<br/>%m-%d',  
							week: '%Y<br/>%m-%d',  
							month: '%Y-%m',  
							year: '%Y'   
						} 
					},
					yAxis: [{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'OHLC'
						},
						height: '60%',
						lineWidth: 2,
						resize: {
							enabled: true
						}
					},
					{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'Volume'
						},
						top: '65%',
						height: '35%',
						offset: 0,
						lineWidth: 2
					}],

					tooltip: {
						split: true,
						xDateFormat: '%Y-%m-%d %H:%M:%S'
					},

					series: [{
						type: 'candlestick',
						name: 'AAPL',
						data: ohlc,
						dataGrouping: {
							units: groupingUnits
						}
					}, 
					{
						type: 'column',
						name: 'Volume',
						data: volume,
						yAxis: 1,
						dataGrouping: {
							units: groupingUnits
						}
					}]
				});
				Highstock.stockChart('container1', {
					rangeSelector: {
						selected: undefined
					},
					navigator: {
						height: 20
					},
					credits: {
						enabled: false
					},
					xAxis: {
						type: 'datetime',
						dateTimeLabelFormats: {  
							second: '%Y-%m-%d<br/>%H:%M:%S',  
							minute: '%Y-%m-%d<br/>%H:%M',  
							hour: '%Y-%m-%d<br/>%H:%M',  
							day: '%Y<br/>%m-%d',  
							week: '%Y<br/>%m-%d',  
							month: '%Y-%m',  
							year: '%Y'   
						} 
					},
					yAxis: [{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'OHLC'
						},
						height: '60%',
						lineWidth: 2,
						resize: {
							enabled: true
						}
					},
					{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'Volume'
						},
						top: '65%',
						height: '35%',
						offset: 0,
						lineWidth: 2
					}],

					tooltip: {
						split: true,
						xDateFormat: '%Y-%m-%d %H:%M:%S'
					},

					series: [{
						type: 'candlestick',
						name: 'AAPL',
						data: ohlc,
						dataGrouping: {
							units: groupingUnits
						}
					}, 
					{
						type: 'column',
						name: 'Volume',
						data: volume,
						yAxis: 1,
						dataGrouping: {
							units: groupingUnits
						}
					}]
				});
				Highstock.stockChart('container2', {
					rangeSelector: {
						selected: undefined
					},
					navigator: {
						height: 20
					},
					credits: {
						enabled: false
					},
					xAxis: {
						type: 'datetime',
						dateTimeLabelFormats: {  
							second: '%Y-%m-%d<br/>%H:%M:%S',  
							minute: '%Y-%m-%d<br/>%H:%M',  
							hour: '%Y-%m-%d<br/>%H:%M',  
							day: '%Y<br/>%m-%d',  
							week: '%Y<br/>%m-%d',  
							month: '%Y-%m',  
							year: '%Y'   
						} 
					},
					yAxis: [{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'OHLC'
						},
						height: '60%',
						lineWidth: 2,
						resize: {
							enabled: true
						}
					},
					{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'Volume'
						},
						top: '65%',
						height: '35%',
						offset: 0,
						lineWidth: 2
					}],

					tooltip: {
						split: true,
						xDateFormat: '%Y-%m-%d %H:%M:%S'
					},

					series: [{
						type: 'candlestick',
						name: 'AAPL',
						data: ohlc,
						dataGrouping: {
							units: groupingUnits
						}
					}, 
					{
						type: 'column',
						name: 'Volume',
						data: volume,
						yAxis: 1,
						dataGrouping: {
							units: groupingUnits
						}
					}]
				});
				Highstock.stockChart('container3', {
					rangeSelector: {
						selected: undefined
					},
					navigator: {
						height: 20
					},
					credits: {
						enabled: false
					},
					xAxis: {
						type: 'datetime',
						dateTimeLabelFormats: {  
							second: '%Y-%m-%d<br/>%H:%M:%S',  
							minute: '%Y-%m-%d<br/>%H:%M',  
							hour: '%Y-%m-%d<br/>%H:%M',  
							day: '%Y<br/>%m-%d',  
							week: '%Y<br/>%m-%d',  
							month: '%Y-%m',  
							year: '%Y'   
						} 
					},
					yAxis: [{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'OHLC'
						},
						height: '60%',
						lineWidth: 2,
						resize: {
							enabled: true
						}
					},
					{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'Volume'
						},
						top: '65%',
						height: '35%',
						offset: 0,
						lineWidth: 2
					}],

					tooltip: {
						split: true,
						xDateFormat: '%Y-%m-%d %H:%M:%S'
					},

					series: [{
						type: 'candlestick',
						name: 'AAPL',
						data: ohlc,
						dataGrouping: {
							units: groupingUnits
						}
					}, 
					{
						type: 'column',
						name: 'Volume',
						data: volume,
						yAxis: 1,
						dataGrouping: {
							units: groupingUnits
						}
					}]
				});
				Highstock.stockChart('container4', {
					rangeSelector: {
						selected: undefined
					},
					navigator: {
						height: 20
					},
					credits: {
						enabled: false
					},
					xAxis: {
						type: 'datetime',
						dateTimeLabelFormats: {  
							second: '%Y-%m-%d<br/>%H:%M:%S',  
							minute: '%Y-%m-%d<br/>%H:%M',  
							hour: '%Y-%m-%d<br/>%H:%M',  
							day: '%Y<br/>%m-%d',  
							week: '%Y<br/>%m-%d',  
							month: '%Y-%m',  
							year: '%Y'   
						} 
					},
					yAxis: [{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'OHLC'
						},
						height: '60%',
						lineWidth: 2,
						resize: {
							enabled: true
						}
					},
					{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'Volume'
						},
						top: '65%',
						height: '35%',
						offset: 0,
						lineWidth: 2
					}],

					tooltip: {
						split: true,
						xDateFormat: '%Y-%m-%d %H:%M:%S'
					},

					series: [{
						type: 'candlestick',
						name: 'AAPL',
						data: ohlc,
						dataGrouping: {
							units: groupingUnits
						}
					}, 
					{
						type: 'column',
						name: 'Volume',
						data: volume,
						yAxis: 1,
						dataGrouping: {
							units: groupingUnits
						}
					}]
				});
				Highstock.stockChart('container5', {
					rangeSelector: {
						selected: undefined
					},
					navigator: {
						height: 20
					},
					credits: {
						enabled: false
					},
					xAxis: {
						type: 'datetime',
						dateTimeLabelFormats: {  
							second: '%Y-%m-%d<br/>%H:%M:%S',  
							minute: '%Y-%m-%d<br/>%H:%M',  
							hour: '%Y-%m-%d<br/>%H:%M',  
							day: '%Y<br/>%m-%d',  
							week: '%Y<br/>%m-%d',  
							month: '%Y-%m',  
							year: '%Y'   
						} 
					},
					yAxis: [{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'OHLC'
						},
						height: '60%',
						lineWidth: 2,
						resize: {
							enabled: true
						}
					},
					{
						labels: {
							align: 'right',
							x: -3
						},
						title: {
							text: 'Volume'
						},
						top: '65%',
						height: '35%',
						offset: 0,
						lineWidth: 2
					}],

					tooltip: {
						split: true,
						xDateFormat: '%Y-%m-%d %H:%M:%S'
					},

					series: [{
						type: 'candlestick',
						name: 'AAPL',
						data: ohlc,
						dataGrouping: {
							units: groupingUnits
						}
					}, 
					{
						type: 'column',
						name: 'Volume',
						data: volume,
						yAxis: 1,
						dataGrouping: {
							units: groupingUnits
						}
					}]
				});
			});
		},

		//鼠标移入事件
		// MSRCDOver(id){
		// 	var Num = id-1;
		// 	$(".MSRCDiagram").eq(Num).find(".MSRCDTop").slideDown(400);
		// 	$(".MSRCDiagram").eq(Num).find(".MSRCDConter").height(30).css("line-height","46px");
		// },
		//鼠标移出事件
		// MSRCDOut(id){
		// 	var Num = id-1;
		// 	$(".MSRCDiagram").eq(Num).find(".MSRCDTop").slideUp(400);
		// 	$(".MSRCDiagram").eq(Num).find(".MSRCDConter").height(60).css("line-height","60px");
		// },

		//点击放大标志放大
		EnlargeIt(id){
			// console.log(id)
			var FWidth = $(".MSRContent").width()-30;
			var FHeight = $(".MSRContent").height()-20;
			var HighHeight = FHeight-60;
			// console.log(HighHeight);
			var Num = id-1;
			// console.log(Num)
			$(".MSRCDiagram").eq(Num).siblings().css({"display":"none"})
			$(".MSRCDiagram").eq(Num).width(FWidth);
			$(".MSRCDiagram").eq(Num).height(FHeight);
			$("#container").width(FWidth);
			$("#container").height(HighHeight);
			// $(".MSRCDiagram").eq(Num).animate({
			// 	width:FWidth,
			// 	height:FHeight
			// },"slow");
			// $("#container").animate({
			// 	width:FWidth,
			// 	height:HighHeight
			// },"fast");
			this.HighstockData();
			this.WindowSize = false;
			this.SCShow = true;
		},
		//点击放大标志缩小
		NarrowIt(id){
			var Num = id-1;
			console.log(Num)
			$(".MSRCDiagram").eq(Num).siblings().css({"display":"block"});
			$(".MSRCDiagram").eq(Num).width(500);
			$(".MSRCDiagram").eq(Num).height(358);
			$("#container").width(500);
			$("#container").height(290);
			// $(".MSRCDiagram").eq(Num).animate({
			// 	width:"500px",
			// 	height:"360px"
			// },"slow");
			// $("#container").animate({
			// 	width:"500px",
			// 	height:"290px"
			// },"fast");
			this.HighstockData();
			this.WindowSize = true;
			this.SCShow = false;
		},

		//点击打开信号曲线
		OpenCurve(id){
			this.OpMSSC = true;
			$(".MSRCDTSCurve").addClass("MSRCDTSActive");
			var backtestID = "0168f6a9-6305-4ade-b983-5f5fa8cd8b58";
			var self = this;
			var stateIntervalID = setInterval(function() {
				//Get signal compile running status/result
				self.$http.post(Global.getRequestUrl() + "/dev/signal/test/result",
					{
						backtestId: backtestID,
					},
					{
						headers: Global.getRequestHeader()
					}
					).then(	
						function(stateRes) {
							var stateRes = stateRes.body
							if(stateRes && stateRes.data && stateRes.data.report && stateRes.data.report.final_status) {
								clearInterval(stateIntervalID);
								if(stateRes.data.report.final_status === "fail") {
									console.error("信号曲线运行出错！错误原因：" + stateRes.data.report.reason);
								}else if(stateRes.data.report.final_status === "success"){
									//show data and chart in UI according to data returned from server side
									var output = stateRes.data.report.output;
									var L = output.length-2;
									console.log(L);
									console.log(output);
									output[L].total_benefit_rate && (self.strategyGain = parseFloat(output[L].total_benefit_rate) * 100);
									//  console.log(output[L].total_benefit_rate)
									// output[L].alpha && (self.alpha = output[L].alpha);
									// output[L].beta && (self.beta = output[L].beta);
									output[L].max_retracement && (self.maxDrawBack = parseFloat(output[L].max_retracement) * 100);
									//  console.log(output[L].max_retracement)
									// output[L].half_decay && (self.halfDecay = parseFloat(output[L].half_decay));

									var PhotoData = [];
									for(var i=0;i<output.length;i++){
										var values = [];
										var ts = output[i].ts * 1000
										values.push(ts);
										values.push(output[i].total_asserts);
										PhotoData.push(values);
									}
									console.log(PhotoData);
									if(PhotoData) {
										this.FormatNetValues(PhotoData);
									}
									self.MSChartData();
								}
							}
						}, function(error) {
							console.error("获取信号曲线运行状态请求出错！");
							console.error(error);
						});
			}, 1000);
		},
		//配置信号曲线
		MSChartData() {
			Highstock.StockChart({
				chart: {
					renderTo: 'MSChart'
				},
				navigator: {
					height: 10
				},
				credits: {
					enabled: false
				},
				xAxis: {
					type: 'datetime',
					dateTimeLabelFormats: {  
                 	second: '%Y-%m-%d<br/>%H:%M:%S',  
						minute: '%Y-%m-%d<br/>%H:%M',  
						hour: '%Y-%m-%d<br/>%H:%M',  
						day: '%Y<br/>%m-%d',  
						week: '%Y<br/>%m-%d',  
						month: '%Y-%m',  
						year: '%Y'   
               } 
				},
				tooltip: {
					xDateFormat: '%Y-%m-%d %H:%M:%S'
				},
				series: [{
					name: '净值',
					data: self.benefitData //[[1,2], [3,4]]
				}]
			});
		},
		// 给走势图传数据
    	FormatNetValues(PhotoData) {
			self.benefitData = PhotoData;
		},
		//关闭信号曲线
		CloseCurve(){
			this.OpMSSC = false;
			$(".MSRCDTSCurve").removeClass("MSRCDTSActive");
		},


		//点击打开信号设置
		OpenSetUp(){
			this.OpMSSSU = true;
			$(".MSRCDTSSet").addClass("MSRCDTSActive");
		},
		//点击参数名称查看函数信息
		ViewParameters(id){
			this.OpMSPI = true;
			this.$http.post(Global.getRequestUrl() + "/dev/signal/list",
				{
						'id': id,
				},
				{
					headers: Global.getRequestHeader()
				}
			).then(function(resp) {
				var resp = resp.data;
				if(resp.success) {
					this.MSPIData = resp.data.results;
					console.log("获取参数信息成功！");
				}else {
					console.error("获取参数信息失败！" + "error code: " + resp.code + ", reason: "+ resp.msg);
				}
			}, function(error) {
				console.error("获取参数信息请求失败！");
				console.error(error);
			});
		},
		//点击关闭参数信息
		ClosePI(){
			this.OpMSPI = false;
		},
		//勾选自动交易弹出提示框
		IsSelect(event){
			console.log(event.target.checked);
			if(event.target.checked){
				this.OpMSAT = true;
			}
		},
		//确定开启自动交易
		OpenAT(){
			this.OpMSAT = false;
		},
		//取消开启自动交易
		CloseAT(){
			this.OpMSAT = false;
			this.AutomaticTrading = false;
		},
		//点击关闭信号设置
		CloseSetUp(){
			this.OpMSSSU = false;
			$(".MSRCDTSSet").removeClass("MSRCDTSActive");
		},

		//打开监控器
		OpenMonitor(){
			this.OpMSM = true;
		},
		//打开监控范围高级设置模态框
		OpenMSAL(){
			this.OpMSAS = true;
		},
		// 打开监控范围高级设置模态框
		CloseMSAS(){
			this.OpMSAS = false;
		},
		//打开账户登录模态框
		OpenAL(){
			this.OpMSAL = true;
		},
		//关闭账户登录模态框
		CloseAL(){
			this.OpMSAL = false;
		},
		//关闭监控器提示框打开
		OpenCMSM(){
			this.OpCMSM = true;
		},
		//关闭监控器提示框确定
		DetermineCMSM(){
			this.OpMSM = false;
			this.OpCMSM = false;
		},
		//关闭监控器提示框取消
		CancelCMSM(){
			this.OpCMSM = false;
		},
	},
	filters: {
		//时间过滤器
		FormatDate :function(time) {
		// let date = new Date(time * 1000);时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let date = new Date(time);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
			let Y = date.getFullYear() + '-';
			let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
			let D = (date.getDate() < 10 ? "0" + (date.getDate()) : date.getDate()) + ' ';
			let h = (date.getHours() < 10 ? "0"+(date.getHours()) : date.getHours())+ ':';
			let m = (date.getMinutes() < 10 ? "0" + (date.getMinutes()) : date.getMinutes()) + ':';
			let s = (date.getSeconds() < 10 ? "0" + (date.getSeconds()) : date.getSeconds());
			return Y+M+D+h+m+s;
			// return Y+M+D;
		},

		//没有返回数据时候的过滤器
		benefitFilter: function(val) {
			if(val === null || val === undefined || val === "") {
				return "--";
			}
			return val;
			// return parseFloat(val*100).toFixed(2) + "%";
		},

		//没有返回钱的时候的过滤器
		moneyFilter: function(amount) {
			if(amount == null || amount === undefined) {
				return "--";
			}
			return "￥" + parseInt(amount);
		}
	},
	watch: {
		Height (val) {
			this.MSLeftHeight = val + "px";
			this.MHeight = val + "px";
		},
		Width (val) {
			this.MWidth = val + "px";
		},
	}
}
</script>

<style lang="less">

.MSBigBox{
	overflow: hidden;
	.active{
		color: #00aefc;
		background-color: #f0f0f0;
	}
	.MSRCDTSActive{
		color: #00aefc;
	}
	//信号曲线模态框
	.MSSignalCurve{
		width: 38% ;
		height: 50% ;
		padding: 0 8px;
		box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
		position: fixed;
      top: 50%;
		left: 50%;
		border-radius: 10px;
		background-color: #fff;
		transform: translate(-50%,-50%);
		z-index: 1;
		.MSSCTop{
			width: 100% ;
			height: 12% ;
			border-bottom: 1px solid rgba(0,0,0,0.1);
			padding: 0 22px;
			color: #333;
			box-sizing: border-box;
			cursor: move;
			.MSSCTopWord{
				float: left;
				margin-top: 18px;
			}
			.MSSCTopColse{
				float: right;
				width: 16px;
				height: 16px;
				margin: 18px 0 0 0 ;
				cursor: pointer;
				background: url("/static/AICommunity/MySimulation/xinhaoquxianguanbi.png") no-repeat center;
			}
		}
		.MSSCContent{
			width: 100% ;
			height: 88% ;
			#MSChart{
				width: 100% ;
				height: 100% ;
			}
		}
	}
	//信号设置模态框
	.MSSignalSetUp{
		width: 38% ;
		// height: 66% ;
		padding: 0 16px;
		box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
		position: fixed;
      top: 50%;
		left: 50%;
		border-radius: 10px;
		background-color: #fff;
		transform: translate(-50%,-50%);
		overflow: hidden;
		z-index: 2;
		.MSSSTop{
			width: 100% ;
			height: 50px ;
			line-height: 50px;
			padding: 0 12px;
			color: #333;
			box-sizing: border-box;
			cursor: move;
			.MSSSTopWord{
				float: left;
				// margin-top: 18px;
			}
			.MSSSTopColse{
				float: right;
				width: 16px;
				height: 16px;
				margin: 12px 0 0 0 ;
				cursor: pointer;
				background: url("/static/AICommunity/MySimulation/xinhaoquxianguanbi.png") no-repeat center;
			}
		}
		.MSSSTableOut{
			width: 100%;
			height: 240px ;
			border-radius: 4px;
			background-color: #efefef;
			border:  1px solid rgba(0,0,0,0.1);
			overflow: hidden;
			.MSSSTable{
				width: 100% + 2px ;
				height: 100% ;
				overflow-y: scroll;
				.table{
					width: 100%;
					// height: 100% ;
					text-align: center;
					color: #666;
					font-size: 14px;
					overflow: hidden;
					tr{
						width: 100%;
						border-bottom: 1px solid rgba(0,0,0,0.1);
						td{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
							cursor: pointer;
						}
					}
					.tbody{
						overflow-y: scroll;
						height: 30px;
						line-height: 30px;
						font-size: 12px;
					}
				}
			}
		}
		.MSSSSelectI{
			margin-top: 14px;
			overflow: hidden;
			.el-checkbox__inner{
				width: 14px;
				height: 14px;
			}
			.el-checkbox__inner::after{
				top: 0;
				left: 3px;
			}
			.el-checkbox__label{
				padding-left: 2px ;
			}
			.el-checkbox__label{
				font-size: 14px;
			}
		}
		.MSSSAccountI{
			font-size: 14px;
			margin:  14px  0 0 18px;
			.SelectName{
				color: #666;
				margin: 0 2px;
			}
			.el-radio__inner{
				width: 14px;
				height: 14px;
			}
			.el-radio+.el-radio{
				margin: 6px 0 0 0;
			}
			.AccountInp{
				width: 300px ;
				height: 30px;
				border: 0 ;
				border: 1px solid rgba(0,0,0,0.2);
				border-radius: 2px;
				overflow: hidden;
				font-size: 12px;
				padding: 2px;
			}
			.BatchHiding,.AccounntSet{
				color: #666;
				margin: 0 0 0 2px;
				padding: 6px;
				border: 1px solid rgba(0,0,0,0.2);
				border-radius: 2px;
			}
		}
		.MSSSType{
			margin:  14px  0 0 12px;
			overflow: hidden;
			.MSSSTLeft,.MSSSTRight{
				float: left;
				font-size: 14px;
				color: #333;
			}
			.MSSSTRight{
				margin: 0 0 0 30px;
			}

			//下拉选择器最外框的大小
			.el-select{
				width: 90px;
				//下拉选择器内容设置
				.el-input__inner{
					height: 24px;
					font-size: 12px;
					padding: 3px 12px 3px 3px ;
					border: none;
					border-bottom: 1px solid rgba(0,0,0,0.1);
				}
				//下拉选择器的右边三角的外框
				.el-input__icon{
					width: 12px;
				}
				//下拉选择器的下拉框最外框
				.el-select-dropdown{
					z-index: 3;
				}
			}
		}
		.MSSSBtn{
			width: 240px;
			margin: 20px auto 20px;
			overflow: hidden;
			.MSSSBLeft{
				float: left;
				width: 100px;
				height: 40px;
				background-color: #00aefc;
				color: #fff;
				line-height: 40px ;
				text-align: center;
				border-radius: 8px;
				cursor: pointer;
			}
			.MSSSBRight{
				float: right ;
				width: 100px;
				height: 40px;
				background-color: #fff;
				color: #666;
				line-height: 40px ;
				text-align: center;
				border: 1px solid rgba(0,0,0,0.2);
				border-radius: 8px;
				cursor: pointer;
			}
		}
	}
	//自动交易模态框
	.MSAutomaticTrading{
		width: 478px ;
		// width: 25% ;
		// height: 66% ;
		padding: 0 30px;
		box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
		position: fixed;
      top: 50%;
		left: 50%;
		border-radius: 10px;
		background-color: #fff;
		transform: translate(-50%,-50%);
		overflow: hidden;
		z-index: 2;
		.MSATTop{
			width: 100% ;
			height: 50px ;
			line-height: 50px;
			// padding: 0 12px;
			color: #333;
			font-size: 16px;
			border-bottom: 1px solid rgba(0,0,0,0.1);
			box-sizing: border-box;
			// cursor: move;
			.MSATTopWord{
				float: left;
			}
			.MSATTopColse{
				float: right;
				width: 16px;
				height: 16px;
				margin: 12px 0 0 0 ;
				cursor: pointer;
				background: url("/static/AICommunity/MySimulation/xinhaoquxianguanbi.png") no-repeat center;
			}
		}
		.MSATNav{
			padding: 0 12px;
			margin-top:18px;
			overflow: hidden;
			.MSATNPrompt{
				float: left;
				width: 53px;
				height: 53px;
				background: url("/static/AICommunity/MySimulation/tishitanhao.png") no-repeat center;				
			}
			.MSATNPWord{
				width: 320px;
				float: left;
				font-size: 14px;
				line-height: 1.5em;
				color: #999;
				margin-left: 18px;
			}
		}
		.MSATNPContent{
			width: 100%;
			height: 226px;
			border-radius: 4px;
			background-color: #eee;
			margin-top:18px;
			overflow: hidden;
			.MSATNPC{
				width: 100% + 2px ;
				height: 100% ;
				padding: 20px;
				overflow-y: scroll;
				p{
					font-size: 14px;
					color: #999;
					line-height: 1.5em;
				}
			}
		}
		.MSATBtn{
			width: 240px;
			margin: 20px auto 20px;
			overflow: hidden;
			.MSATBLeft{
				float: left;
				width: 100px;
				height: 40px;
				background-color: #00aefc;
				color: #fff;
				line-height: 40px ;
				text-align: center;
				border-radius: 8px;
				cursor: pointer;
			}
			.MSATBRight{
				float: right ;
				width: 100px;
				height: 40px;
				background-color: #fff;
				color: #666;
				line-height: 40px ;
				text-align: center;
				border: 1px solid rgba(0,0,0,0.2);
				border-radius: 8px;
				cursor: pointer;
			}
		}
	}
	//参数信息模态框
	.MSParametersI{
		width: 478px ;
		// width: 25% ;
		// height: 66% ;
		padding: 0 30px;
		box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
		position: fixed;
      top: 50%;
		left: 50%;
		border-radius: 10px;
		background-color: #fff;
		transform: translate(-50%,-50%);
		overflow: hidden;
		z-index: 2;
		.MSPITop{
			width: 100% ;
			height: 40px ;
			line-height: 40px;
			// padding: 0 12px;
			color: #333;
			font-size: 16px;
			border-bottom: 1px solid rgba(0,0,0,0.1);
			box-sizing: border-box;
			// cursor: move;
			.MSPITopWord{
				float: left;
			}
			.MSPITopColse{
				float: right;
				width: 16px;
				height: 16px;
				margin: 12px 0 0 0 ;
				cursor: pointer;
				background: url("/static/AICommunity/MySimulation/xinhaoquxianguanbi.png") no-repeat center;
			}
		}
		.MSPITableOut{
			width: 100%;
			height: 350px ;
			margin-top: 10px;
			border-radius: 4px;
			background-color: #efefef;
			border:  1px solid rgba(0,0,0,0.1);
			overflow: hidden;
			.MSPITable{
				width: 100% + 2px ;
				height: 100% ;
				overflow-y: scroll;
				.table{
					width: 100%;
					// height: 350px ;
					text-align: center;
					color: #666;
					font-size: 14px;
					overflow: hidden;
					tr{
						width: 100%;
						border-bottom: 1px solid rgba(0,0,0,0.1);
						td{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					.tbody{
						overflow-y: scroll;
						height: 30px;
						line-height: 30px;
						font-size: 12px;
					}
				}
			}
		}
		.MSPIBtn{
			width: 300px;
			margin: 10px auto 10px;
			overflow: hidden;
			.MSPIBLeft{
				float: left;
				width: 100px;
				height: 40px;
				background-color: #00aefc;
				color: #fff;
				line-height: 40px ;
				text-align: center;
				border-radius: 8px;
				cursor: pointer;
			}
			.MSPIBRight{
				float: right ;
				width: 100px;
				height: 40px;
				background-color: #fff;
				color: #666;
				line-height: 40px ;
				text-align: center;
				border: 1px solid rgba(0,0,0,0.2);
				border-radius: 8px;
				cursor: pointer;
			}
		}
	}
	//监控器模态框
	.MSMonitor{
		width: 933px ;
		// width: 25% ;
		// height: 66% ;
		padding:0 0 20px 0;
		box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
		position: fixed;
      top: 50%;
		left: 50%;
		border-radius: 10px;
		background-color: #fff;
		transform: translate(-50%,-50%);
		overflow: hidden;
		z-index: 2;
		.MSMTop{
			width: 100% ;
			height: 50px ;
			line-height: 50px;
			padding: 0 40px;
			color: #333;
			font-size: 16px;
			// border-bottom: 1px solid rgba(0,0,0,0.1);
			box-sizing: border-box;
			// cursor: move;
		}
		.MSMCenter{
			width: 100% ;
			height: 176px;
			background-color: #efefef;
			padding: 24px 40px ;
			overflow: hidden;
			.MSMCLeft{
				width: 222px;
				float: left;
				.MSMCLTitle{
					font-size: 18px;
					color: #333;
				}
				.MSMCLTOne{
					margin-top:8px;
					//高级设置
					.MSMCLTFSet{
						float: right;
						width: 76px;
						height: 24px;
						border: 1px solid #00aefc;
						border-radius: 4px;
						text-align: center;
						line-height: 24px;
						font-size: 12px;
						color: #00aefc;
						cursor: pointer;
					}
					//多选框后面的文字
					.MSMCLTOWord{
						font-size: 14px;
						color: #333;
						margin-left: 4px;
					}
					.el-select{
						width: 140px;
					}
					.el-input__inner{
						height: 22px;
						font-size: 12px;
						border: none;
						border-bottom: 1px solid rgba(0,0,0,0.1);
						background-color: #efefef;
					}
					.el-select-dropdown{
						z-index: 3;
					}
					.el-checkbox__inner{
						width: 14px;
						height: 14px;
					}
					.el-checkbox__inner::after{
						top: 0;
						left: 3px;
					}
					.el-checkbox__label{
						padding-left: 2px ;
					}
					.el-checkbox__label{
						font-size: 14px;
					}
				}
			}
			.MSMCCenter{
				width: 440px;
				margin-left: 30px;
				float: left;
				.MSMCCTWord{
					font-size: 18px;
					color: #333;
				}
				.MSMCCTOne{
					margin-top:8px;
					//多选框后面的文字
					.MSMCCTOWord{
						font-size: 14px;
						color: #333;
						margin-right: 4px;
					}
					.MSMCCTOWordO{
						font-size: 14px;
						color: #333;
						margin-left: 4px;
					}
					.MSMCCTOWordT{
						font-size: 14px;
						color: #333;
						float: right;
					}
					//下拉选择器最外框的大小
					.el-select{
						width: 60px;
						margin-right:4px;
						//下拉选择器内容设置
						.el-input__inner{
							height: 22px;
							font-size: 12px;
							padding: 3px 12px 3px 8px ;
							border: none;
							border-bottom: 1px solid rgba(0,0,0,0.1);
							background-color: #efefef;
						}
						//下拉选择器的右边三角的外框
						.el-input__icon{
							width: 12px;
						}
						//下拉选择器的下拉框最外框
						.el-select-dropdown{
							z-index: 3;
						}
					}

					//计数器最外框的大小
					.el-input-number{
						width: 40px;
						margin-right:4px;
						//计数器内容的设置
						.el-input__inner{
							height: 22px;
							font-size: 12px;
							padding: 3px 12px 3px 8px ;
							border: none;
							border-bottom: 1px solid rgba(0,0,0,0.1);
							background-color: #efefef;
						}
					}


					//多选框内容设置
					.el-checkbox__inner{
						width: 14px;
						height: 14px;
					}
					//多选框中对号的设置
					.el-checkbox__inner::after{
						top: 0;
						left: 3px;
					}
					//多选框中字体框子设置
					.el-checkbox__label{
						padding-left: 2px ;
						font-size: 14px;
					}
				}
			}
			.MSMCRight{
				float: right;
				width: 84px;
				.MSMCRBtn{
					width: 80px;
					height: 28px;
					background-color: #fff;
					border: 1px solid rgba(0,0,0,0.2);
					border-radius: 4px;
					line-height: 28px ;
					text-align: center;
					font-size: 14px;
					color: #333;
					cursor: pointer;
				}
				.MSMCRBO{
					margin-top: 6px;
				}
			}
		}
		.MSPMableOut{
			width: 100%;
			height: 180px ;
			margin-top: 10px;
			background-color: #fff;
			overflow: hidden;
			.MSMTable{
				width: 100% + 1px ;
				height: 100% ;
				overflow-y: scroll;
				.table{
					width: 100%;
					text-align: center;
					color: #666;
					font-size: 12px;
					overflow: hidden;
					tr{
						width: 100%;
						border-bottom: 1px solid rgba(0,0,0,0.1);
						td{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					.tbody{
						overflow-y: scroll;
						height: 30px;
						line-height: 30px;
						font-size: 12px;
					}
				}
			}
		}
		.MSMBtn{
			width: 100% ;
			overflow: hidden;
			.MSMBLogin{
				float: right;
				width: 120px;
				height: 30px;
				margin: 18px 46px 0 0;
				background-color: #00aefc;
				color: #fff;
				font-size: 14px;
				line-height: 30px ;
				text-align: center;
				border-radius: 4px;
				cursor: pointer;
			}
		}
	}
	//监控范围高级设置模态框
	.MSASetting{
		width: 748px ;
		padding: 0 30px 30px ;
		box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
		position: fixed;
      top: 50%;
		left: 50%;
		border-radius: 10px;
		background-color: #fff;
		transform: translate(-50%,-50%);
		overflow: hidden;
		box-sizing: border-box;
		z-index: 3;
		.MSASTop{
			width: 100% ;
			height: 50px ;
			line-height: 50px;
			// padding: 0 12px;
			color: #333;
			font-size: 16px;
			border-bottom: 1px solid rgba(0,0,0,0.1);
			box-sizing: border-box;
		}
		.MSASBottom{
			overflow: hidden;
			//多选框内容设置
			.el-checkbox__inner{
				width: 14px;
				height: 14px;
			}
			//多选框中对号的设置
			.el-checkbox__inner::after{
				top: 0;
				left: 3px;
			}
			//多选框中字体框子设置
			.el-checkbox__label{
				padding-left: 2px ;
				font-size: 14px;
			}
			//多选框后面字体的设置
			.MSASBLCWord{
				font-size: 14px;
				color: #333;
				margin-right: 4px;
			}
			.MSASBLeft{
				width: 180px;
				float: left;
				.MSASBLWord{
					width: 100% ;
					height: 40px ;
					line-height: 40px ;
					font-size: 14px ;
					color: #333;
				}
				.MSASBLContent{
					width: 100% ;
					height: 300px;
					padding: 10px ;
					background-color: #efefef;
					border-radius: 4px;
					box-sizing: border-box;
					.MSASBLCSonA{
						padding-left: 14px;
						margin-top:4px;
					}
				}
			}
			.MSASBCenter{
				width: 370px;
				float: left;
				margin-left: 18px;
				.MSASBCChoose{
					width: 100% ;
					height: 40px ;
					line-height: 40px ;
				}
				.MSASBCContent{
					width: 100%;
					height: 300px ;
					background-color: #efefef;
					border-radius: 4px;
					box-sizing: border-box;
					overflow: hidden;
					.MSASBCCTable{
						width: 100% + 2px ;
						height: 100% ;
						overflow-y: scroll;
						.table{
							width: 100%;
							text-align: center;
							color: #666;
							font-size: 12px;
							overflow: hidden;
							tr{
								width: 100%;
								border-bottom: 1px solid rgba(0,0,0,0.1);
								td{
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}
							}
							.tbody{
								overflow-y: scroll;
								height: 30px;
								line-height: 30px;
								font-size: 14px;
							}
						}
					}
				}
			}
			.MSASBRight{
				float: right;
				width: 84px;
				height: 340px;
				padding-top:40px;
				.MSASBRBtn{
					width: 82px;
					height: 28px;
					background-color: #fff;
					border: 1px solid rgba(0,0,0,0.2);
					border-radius: 4px;
					line-height: 28px ;
					text-align: center;
					font-size: 14px;
					color: #333;
					cursor: pointer;
				}
				.MSASBRBO{
					margin-top: 6px;
				}
				.MSASBRBT{
					margin-top: 70px;
					background-color: #00aefc;
					border: none;
					color: #fff;
				}
			}
		}
	}
	//账户登录模态框
	.MSAccountLogin{
		width: 748px ;
		box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
		position: fixed;
      top: 50%;
		left: 50%;
		border-radius: 10px;
		background-color: #fff;
		transform: translate(-50%,-50%);
		overflow: hidden;
		z-index: 3;
		.MSALTop{
			width: 100% ;
			height: 40px ;
			line-height: 40px;
			padding: 0 30px;
			color: #333;
			font-size: 16px;
			box-sizing: border-box;
			// cursor: move;
			.MSALTopWord{
				float: left;
			}
			.MSALTopColse{
				float: right;
				width: 16px;
				height: 16px;
				margin: 12px 0 0 0 ;
				cursor: pointer;
				background: url("/static/AICommunity/MySimulation/xinhaoquxianguanbi.png") no-repeat center;
			}
		}
		.MSALTableOut{
			width: 100%;
			height: 280px ;
			// margin-top: 10px;
			background-color: #fff;
			border:  1px solid rgba(0,0,0,0.1);
			overflow: hidden;
			.MSALTable{
				width: 100% + 2px ;
				height: 100% ;
				overflow-y: scroll;
				.table{
					width: 100%;
					text-align: center;
					color: #666;
					font-size: 14px;
					overflow: hidden;
					tr{
						width: 100%;
						border-bottom: 1px solid rgba(0,0,0,0.1);
						td{
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
					.tbody,.thead{
						height: 40px;
						line-height: 40px;
						font-size: 14px;
					}
				}
			}
		}
		.MSALBuild{
			float: right;
			margin: 10px 30px 20px 0;
			width: 70px;
			height: 26px;
			border:1px solid #00aefc;
			color: #00aefc;
			font-size: 14px;
			line-height: 26px ;
			text-align: center;
			border-radius: 4px;
			cursor: pointer;
		}
	}
	//关闭监控器提示框
	.CloseMSMonitor{
		width: 340px ;
		position: fixed;
      top: 50%;
		left: 50%;
		border-radius: 10px;
		background-color: #fff;
		box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
		transform: translate(-50%,-50%);
		overflow: hidden;
		z-index: 3;
		.CMSMTop{
			width: 100% ;
			padding: 50px 46px 30px;
			color: #333;
			font-size: 16px;
			text-align: center;
			line-height: 1.5em;
			box-sizing: border-box;
		}
		.CMSMBtn{
			width: 210px;
			margin: 0px auto 24px;
			overflow: hidden;
			.CMSMBLeft{
				float: left;
				width: 80px;
				height: 28px;
				background-color: #fff;
				color: #666;
				font-size: 14px;
				line-height: 28px ;
				text-align: center;
				border: 1px solid rgba(0,0,0,0.2);
				border-radius: 4px;
				cursor: pointer;
			}
			.CMSMBRight{
				float: right ;
				width: 80px;
				height: 28px;
				background-color: #00aefc;
				color: #fff;
				font-size: 14px;
				line-height: 28px ;
				text-align: center;
				border-radius: 4px;
				cursor: pointer;
			}
		}
	}
	

	.MSLeft{
		// width: 200px;
		width: 15% ;
		// height: 100% ;
		background-color: #fff;
		padding: 20px 0;
		float: left;
		box-sizing: border-box;
		li{
			font-size: 14px;
			padding: 10px 30px;
			// color: #333;
			cursor: pointer;
			&:hover{
				color: #00aefc;
			}
		}
	}
	.MSRight{
		width: 84% ;
		// height: 100%;
		padding: 40px 20px 20px;
		float: left;
		position: relative;
		background-color: #f0f0f0;
		box-sizing: border-box;
		.MSRTop{
			height: 40px;
			font-size: 16px;
			color: #00aefc;
			line-height: 40px;
			position: absolute;
			top: 0;
			left: 28px;
		}
		.MSRMonitor{
			width: 80px ;
			height: 30px;
			font-size: 14px;
			background-color: #00aefc;
			color: #fff;
			line-height: 30px;
			text-align: center;
			border-radius: 4px;
			position: absolute;
			top: 5px;
			left: 100px;
			cursor: pointer;
		}
		.MSRContentOut{
			width: 100% ;
			height: 100% ;
			overflow: hidden;
			.MSRContent{
				width: 100%+2px ;
				height: 100% ;
				background-color: #fff;
				padding: 0 10px 0 0;
				overflow: auto;
				overflow-y:scroll;
				overflow-x:hidden;
				position: relative;
				box-sizing: border-box;
				.MSRCDiagram{
					width: 500px;
					height: 360px;
					border-radius: 8px;
					overflow: hidden;
					float: left;
					margin: 12px 0 0 10px;
					border: 1px solid rgba(0,0,0,0.1);
					box-sizing: border-box;
					&:hover{
						box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
					}
					.MSRCDTop{
						// display: none;
						height: 40px;
						padding:0 16px;
						box-sizing: border-box;
						overflow: hidden;
						background-color: #dadada;
						.MSRCDTWord{
							float: left;
							height: 40px;
							font-size: 14px;
							line-height: 40px;
						}
						.MSRCDTSCurve{
							float: left;
							height: 40px;
							font-size: 14px;
							line-height: 40px;
							margin-left: 10px;
							cursor: pointer;
						}
						.MSRCDTSSet{
							float: left;
							height: 40px;
							font-size: 14px;
							line-height: 40px;
							margin-left: 10px;
							cursor: pointer;
						}
						.MSRCDTClose{
							float: right;
							width: 16px;
							height: 16px;
							margin: 12px 0 0 0 ;
							cursor: pointer;
							background: url("/static/AICommunity/MySimulation/guanbichangkou.png") no-repeat center;
						}
						.MSRCDTEnlarge{
							float: right;
							width: 16px;
							height: 16px;
							margin: 12px 16px 0 0;
							cursor: pointer;
							background: url("/static/AICommunity/MySimulation/fangdachuangkou.png") no-repeat center;
						}
						.MSRCDTEnlargeO{
							float: right;
							width: 16px;
							height: 16px;
							margin: 12px 16px 0 0;
							cursor: pointer;
							background: url("/static/AICommunity/MySimulation/suoxiaochuangkou.png") no-repeat center;
						}
					}
					// .MSRCDConter{
					// 	height: 60px;
					// 	// height: 20px;
					// 	line-height: 60px;
					// 	// line-height: 20px;
					// 	color: #ea3656;
					// 	font-size: 12px;
					// 	padding:0 16px;
					// 	box-sizing: border-box;
					// 	pointer-events: none;
					// }
					#container,
					#container1,
					#container2,
					#container3,
					#container4,
					#container5{
						min-width: 500px;
						height: 290px;
						pointer-events: none;
					}
					.highcharts-axis-resizer {
						stroke: #eee;
					}
					.highcharts-axis-resizer:hover {
						stroke: #ccc;
					}
				}
				//下部的分页
				.pageBox{
					width: 100% ;
					height: 90px;
					float: left;
					.paging{
						// position: absolute;
						// bottom: 30px;
						// right: 32px;
						float: right;
						margin: 20px 32px 30px 0 ;
					}
				}

				//颜色分割
				.MSRSegmenting{
					width: 100% ;
					height: 20px;
					background-color: #f0f0f0;
					overflow: hidden;
				}
				//下部的监控详情
				.MSRBottom{
					width: 100% ;
					overflow: hidden;
					padding: 20px;
					.MSRBTitle{
						width: 100%;
						display: flex;
						overflow: hidden;
						li{
							height: 42px;
							float: left;
							flex: 1;
							font-size: 12px;
							color: 666;
							text-align: center;
							line-height: 42px;
							background-color: #f3f3f3;
						}
					}
					.MSRBContent{
						width: 100%;
						display: flex;
						border-bottom: 1px solid rgba(0,0,0,0.1);
						overflow: hidden;
						li{
							height: 42px;
							float: left;
							flex: 1;
							font-size: 12px;
							color: 666;
							text-align: center;
							line-height: 42px;
						}
					}
					.ViewDetails{
						color: #00aefc;
					}
				}
			}
		}
	}
}
	
</style>