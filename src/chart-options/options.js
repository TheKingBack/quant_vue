module.exports = {
  bar: {
    chart: {
            type:'column'//指定图表的类型，默认是折线图（line）
            },
             legend:{
                enabled: false
            },
            credits: {
              enabled:false
            },//去掉地址
            colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00',
                    '#24CBE5'  ],
            xAxis: {
                    categories: ['1号', '2号', '3号','3号','3号'] //指定x轴分组
                },

            title: {
                text: null, //指定图表标题
            },
            yAxis: [ {
            lineWidth: 1,
            opposite: true,
            title: {
                 text: '每日盈亏', 
                 style:{ //样式
                fontSize: '16px',
                
                },
            }
        },
        {
            lineWidth: 1,
            title: {
                 text: null, 
            }
        }],

         
            plotOptions: {
                    column: {
                    colorByPoint:true
                        },
                    },

                   series: [{
                color:'#eeeeee',
              
                data: [5, 3, 4, 7, 2]
            }, {
    
                data: [2, -2, -3, 2, 1]
            }]
  }

}





