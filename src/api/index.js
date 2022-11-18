//界面左边的数据
let color = ['#1089E7', '#F57575', '#56D0E3', '#F8B448', '#8B786F']
export const getLeftEchartsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          legend: {
            data: ['成都', '北京', '上海'],
            textStyle: {
              color: '#fff',
            },
          },
          tooltip: {
            trigger: 'axis',
          },
          xAxis: ['Mon', 'Wed', 'Fri', 'Sun'],
          series: [
            {
              name: '成都',
              type: 'bar',
              data: [3453, 3053, 3653, 4453],
            },
            {
              name: '北京',
              type: 'bar',
              data: [4453, 5053, 4653, 8153],
            },
            {
              name: '上海',
              type: 'bar',
              data: [5453, 7053, 6653, 6453],
            },
          ],
        },
        {
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
              color: '#fff',
            },
          },
          series: [
            {
              itemStyle: {
                color: function (params) {
                  return color[params.dataIndex]
                },
              },
              name: '航班数量',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 4048, name: '成都' },
                { value: 3335, name: '北京' },
                { value: 2880, name: '上海' },
                { value: 2484, name: '西藏' },
                { value: 2200, name: '河南' },
              ],
            },
          ],
        },
        {
          legend: {
            data: ['成都', '北京', '上海', '西藏'],
            textStyle: {
              color: '#fff',
            },
          },
          tooltip: {
            trigger: 'axis',
          },
          xAxis: ['Mon', 'Wed', 'Fri', 'Sun'],
          series: [
            {
              name: '成都',
              smooth: true,
              type: 'line',
              data: [120, 132, 101, 134],
            },
            {
              name: '北京',
              smooth: true,
              type: 'line',
              data: [250, 532, 701, 254],
            },
            {
              name: '上海',
              smooth: true,
              type: 'line',
              data: [820, 932, 601, 734],
            },
            {
              name: '西藏',
              smooth: true,
              type: 'line',
              data: [220, 632, 401, 634],
            },
          ],
        },
      ])
    }, 1000)
  })
}

//界面右边的数据
export const getRightEchartsData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          grid: {
            left: '4%',
            top: '4%',
            bottom: '4%',
            right: '4%',
            containLabel: true,
          },
          xAxis: {
            show: false,
          },
          yAxis: [
            {
              type: 'category',
              data: ['成都', '北京', '上海', '西藏', '湖南'],
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                color: '#fff',
              },
            },
            {
              type: 'category',
              data: ['980000', '940000', '880000', '787000', '726000'],
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false,
              },
              axisLabel: {
                color: '#fff',
              },
            },
          ],
          series: [
            {
              name: '条',
              type: 'bar',
              data: [98, 94, 88, 78.7, 72.6],
              barWidth: 15,
              yAxisIndex: 0,
              itemStyle: {
                barBorderRadius: 20,
                color: function (params) {
                  return color[params.dataIndex]
                },
              },
              label: {
                normal: {
                  show: true,
                  color: '#fff',
                  position: 'inside',
                  formatter: '{c}%',
                },
              },
            },
            {
              name: '框',
              type: 'bar',
              barWidth: 22,
              data: [100, 100, 100, 100, 100],
              yAxisIndex: 1,
              itemStyle: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15,
              },
            },
          ],
        },
        {
          title: {
            shoe: false,
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985',
              },
            },
          },
          legend: {
            show: false,
          },
          grid: {
            top: '8%',
            left: '8%',
            right: '8%',
            bottom: '8%',
            containLabel: true,
          },
          xAxis: [
            {
              axisLabel: {
                color: '#fff',
              },
              type: 'category',
              boundaryGap: false,
              data: ['1-2小时', '2-3小时', '3-4小时', '5-8小时', '8小时以上'],
            },
          ],
          yAxis: [
            {
              axisLabel: {
                color: '#fff',
              },
              splitLine: {
                show: false,
              },
              type: 'value',
            },
          ],
          series: [
            {
              name: '成都',
              type: 'line',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              smooth: true,
              data: [120, 132, 101, 734, 990],
            },
            {
              name: '上海',
              type: 'line',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              smooth: true,
              data: [320, 182, 891, 534, 1290],
            },
            {
              name: '北京',
              type: 'line',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              smooth: true,
              data: [450, 932, 701, 454, 890],
            },
            {
              name: '西藏',
              type: 'line',
              areaStyle: {},
              emphasis: {
                focus: 'series',
              },
              smooth: true,
              data: [720, 832, 301, 834, 1390],
            },
          ],
        },

        {
          title: {
            text: '62.4%',
            textStyle: {
              fontSize: 20,
              fontWeight: 'normal',
              color: '#fff',
            },
            x: 'center',
            y: 'center',
          },
          series: [
            {
              type: 'liquidFill',
              waveAnimation: 20,
              data: [0.68, 0.53],
              color: ['rgb(77,155,202)', '#F8B448'],
              amplitude: 25,
              radius: '90%',
              backgroundStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.85,
                  colorStops: [
                    {
                      offset: 0.5,
                      color: 'rgb(11,27,52)', // 0% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: 'rgb(27,41,83)', // 100% 处的颜色
                    },
                    {
                      offset: 0.95,
                      color: 'rgb(53,63,135)', // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
              label: {
                normal: {
                  formatter: '',
                },
              },
            },
          ],
        },
        {
          title: {
            text: '42.434%',
            textStyle: {
              fontSize: 20,
              fontWeight: 'normal',
              color: '#fff',
            },
            x: 'center',
            y: 'center',
          },
          series: [
            {
              type: 'liquidFill',
              waveAnimation: 20,
              data: [0.48, 0.43],
              color: ['rgb(77,95,202)', '#F8B448'],
              amplitude: 25,
              radius: '90%',
              backgroundStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.85,
                  colorStops: [
                    {
                      offset: 0.5,
                      color: 'rgb(11,27,52)', // 0% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: 'rgb(27,41,83)', // 100% 处的颜色
                    },
                    {
                      offset: 0.95,
                      color: 'rgb(53,63,135)', // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
              label: {
                normal: {
                  formatter: '',
                },
              },
            },
          ],
        },
        {
          title: {
            text: '22.467%',
            textStyle: {
              fontSize: 20,
              fontWeight: 'normal',
              color: '#fff',
            },
            x: 'center',
            y: 'center',
          },
          series: [
            {
              type: 'liquidFill',
              waveAnimation: 20,
              data: [0.28, 0.23],
              color: ['#F57575', '#F8B448'],
              amplitude: 25,
              radius: '90%',
              backgroundStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.85,
                  colorStops: [
                    {
                      offset: 0.5,
                      color: 'rgb(11,27,52)', // 0% 处的颜色
                    },
                    {
                      offset: 0.75,
                      color: 'rgb(27,41,83)', // 100% 处的颜色
                    },
                    {
                      offset: 0.95,
                      color: 'rgb(53,63,135)', // 100% 处的颜色
                    },
                  ],
                  globalCoord: false, // 缺省为 false
                },
              },
              label: {
                normal: {
                  formatter: '',
                },
              },
            },
          ],
        },
      ])
    }, 1000)
  })
}
