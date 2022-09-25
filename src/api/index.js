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
