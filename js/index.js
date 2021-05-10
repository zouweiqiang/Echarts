;(function () {
  // 初始化
  var mychart = echarts.init(document.querySelector('.bar .chart'))

  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '旅游行业',
          '教育培训',
          '游戏行业',
          '医疗行业',
          '电商行业',
          '社交行业',
          '金融行业',
        ],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
        axisLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12',
        },
        // y轴线条样式
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            // width: 1,
            // type: "solid"
          },
        },
        // y 轴分隔线样式
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5,
        },
      },
    ],
  }
  mychart.setOption(option)
  window.addEventListener('resize', function () {
    mychart.resize()
  })
})()

// 折线图模块
;(function () {
  var yearData = [
    {
      year: '2020', // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      ],
    },
    {
      year: '2021', // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
      ],
    },
  ]
  // 初始化
  var mychart = echarts.init(document.querySelector('.line .chart'))
  option = {
    // 通过这个color 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      // 如果series对象有name值，则legend可以不用写data
      // data: ['新增粉丝', '新增游客'],
      textStyle: {
        color: '#4c9bfd', // 图例文字颜色
      },
      right: '10%', // 距离右边10%
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      containLabel: true, // 包含刻度文字在内
    },
    // 设置保存图片按钮，加上可以保存图片
    // toolbox: {
    //   feature: {
    //     saveAsImage: {},
    //   },
    //},
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false, // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd', // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a', // 分割线颜色
        },
      },
      axisLine: {
        show: false, // 去除轴线
      },
    },

    series: [
      {
        name: '新增粉丝',
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        type: 'line',
        // 折线修饰为圆滑
        smooth: true,
      },
      {
        name: '新增游客',
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        type: 'line',
        smooth: true,
      },
    ],
  }
  // 把配置给实例化对象
  mychart.setOption(option)
  // 让图表自动的去适应屏幕大小
  window.addEventListener('resize', function () {
    mychart.resize()
  })
})()

// 饼图制作
;(function () {
  // 初始化
  var mychart = echarts.init(document.querySelector('.pie .chart'))

  var option = {
    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      // 距离底部为0%
      bottom: '0%',
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        // 设置饼形图在容器中的位置
        center: ['50%', '50%'],
        // 修改内圆半径和外圆半径为 百分比是相对于容器宽度来说的
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' },
        ],
      },
    ],
  }
  //  把配置给实例化对象
  mychart.setOption(option)
  // 图标自动适应屏幕的变化
  window.addEventListener('resize', function () {
    mychart.resize()
  })
})()

// 设置柱状图2 // 柱状图2
;(function () {
  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  // 1. 实例化对象
  var mychart = echarts.init(document.querySelector('.bar1 .chart'))
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: 'category',
        inverse: true,
        data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff',
        },
      },
      {
        data: [702, 350, 610, 793, 664],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false,
        },
        // 不显示刻度
        axisTick: {
          show: false,
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: '#fff',
        },
      },
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        data: [70, 34, 60, 78, 69],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子对象
            console.log(params)
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex]
          },
        },
        // 柱子之间的距离
        barCategoryGap: 100,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: 'inside',
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: '{c}%',
        },
      },
      {
        name: '框',
        type: 'bar',
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15,
        },
      },
    ],
  }

  // 3. 把配置给实例对象
  mychart.setOption(option)
  // 图标自动适应屏幕的变化
  window.addEventListener('resize', function () {
    mychart.resize()
  })
})()
// 折线定制2
;
(function () {
  // 初始化
  var mychart = echarts.init(document.querySelector('.line2 .chart'))
  var option = {
    // 通过这个color 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      // 如果series对象有name值，则legend可以不用写data
      // data: ['新增粉丝', '新增游客'],
      top: '0%',
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12',
      },
    },
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '10',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      // containLabel: true, // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '26',
        '28',
        '29',
        '30',
      ],
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        textStyle: {
          color: 'rgba(255,255,255,.6)',
          fontSize: 12,
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)',
        },
      },
      yAxis: {
        type: 'value',
        axisTick: {
          show: false, // 去除刻度
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12,
          },
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
          },
        },
      },

      series: [
        {
          name: '新增粉丝',
          data: [
            30,
            40,
            30,
            40,
            30,
            40,
            30,
            60,
            20,
            40,
            30,
            40,
            30,
            40,
            30,
            40,
            30,
            60,
            20,
            40,
            30,
            40,
            30,
            40,
            30,
            40,
            20,
            60,
            50,
            40,
          ],
          type: 'line',
          // 折线修饰为圆滑
          smooth: true,
          // 单独修改线的样式
          lineStyle: {
            color: '#0184d5',
            width: 2,
          },
          // 填充区域
          areaStyle: {
            // 渐变色，只需要复制即可
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(1, 132, 213, 0.4)', // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: 'rgba(1, 132, 213, 0.1)', // 渐变线的结束颜色
                },
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
          },
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 8,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: '#0184d5',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12,
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
        },
        {
          name: '转发量',
          data: [
            130,
            10,
            20,
            40,
            30,
            40,
            80,
            60,
            20,
            40,
            90,
            40,
            20,
            140,
            30,
            40,
            130,
            20,
            20,
            40,
            80,
            70,
            30,
            40,
            30,
            120,
            20,
            99,
            50,
            20,
          ],
          type: 'line',
          smooth: true,
          lineStyle: {
            normal: {
              color: '#00d887',
              width: 2,
            },
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: 'rgba(0, 216, 135, 0.4)',
                  },
                  {
                    offset: 0.8,
                    color: 'rgba(0, 216, 135, 0.1)',
                  },
                ],
                false
              ),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
            },
          },
          // 设置拐点 小圆点
          symbol: 'circle',
          // 拐点大小
          symbolSize: 5,
          // 设置拐点颜色以及边框
          itemStyle: {
            color: '#00d887',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12,
          },
          // 开始不显示拐点， 鼠标经过显示
          showSymbol: false,
        },
      ],
    },
  };
  // 把配置给实例化对象
  mychart.setOption(option)
  // 让图表自动的去适应屏幕大小
  window.addEventListener('resize', function () {
    mychart.resize()
  })
})()
