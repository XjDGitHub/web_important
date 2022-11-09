//监控区域模块制作
(function () {
    $('.monitor .tabs').on('click', 'a', function () {
        $(this)
            .addClass('active')
            .siblings('a')
            .removeClass('active');
        $('.monitor .content')
            .eq($(this).index())
            .show()
            .siblings('.content')
            .hide();
        // function autoplay() {
        //     //自动轮播
        //     //获取第一个元素
        //     let $first = $('.monitor .content .marquee').eq($(this).index()).children().first()
        //     console.log($first)
        //     //将这一个元素加到最后面
        //     $('.marquee').append($first)
        //     //获取第一个元素的高度
        //     let height = $first.outerHeight(true)
        //     $first.slideUp(1000, function () {
        //         autoplay()
        //     })
        // }
        // autoplay()
        // 1. 先克隆marquee里面所有的行（row）
        $(".marquee-view .marquee").each(function () {
            console.log($(this));
            var rows = $(this)
                .children()
                .clone();
            $(this).append(rows);
        });
    })


})();
// 点位分布统计模块制作
(function () {
    var chartDom = document.querySelector('.pie')
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [
            {
                name: '点位统计',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '50%'],
                roseType: 'radius',
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }

                ],
                label: {
                    fontSize: 10
                },
                labelLine: {
                    // 连接到图形的线长度
                    length: 6,
                    // 连接到文字的线长度
                    length2: 8
                }
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize()
    })

})();
//用户统计模块
// 柱形图模块
(function () {
    var item = {
        name: "",
        value: 1200,
        // 1. 修改当前柱形的样式
        itemStyle: {
            color: "#254065"
        },
        // 2. 鼠标放到柱子上不想高亮显示
        emphasis: {
            itemStyle: {
                color: "#254065"
            }
        },
        // 3. 鼠标经过柱子不显示提示框组件
        tooltip: {
            extraCssText: "opacity: 0"
        }
    };
    // 1. 实例化对象
    var myChart = echarts.init(document.querySelector(".bar"));
    // 2. 指定配置和数据
    var option = {
        color: new echarts.graphic.LinearGradient(
            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
            0,
            0,
            0,
            1,
            [
                { offset: 0, color: "#00fffb" }, // 0 起始颜色
                { offset: 1, color: "#0061ce" } // 1 结束颜色
            ]
        ),
        tooltip: {
            trigger: "item",
            padding: 0,
            backgroundColor: 'rgba(255,255,255,0)',
            borderColor: 'rgba(255,255,255,0)',
            textStyle: {
                color: 'white'
            }
        },
        grid: {
            left: "0%",
            right: "3%",
            bottom: "3%",
            top: "3%",
            //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
            containLabel: true,
            // 是否显示直角坐标系网格
            show: true,
            //grid 四条边框的颜色
            borderColor: "rgba(0, 240, 255, 0.3)"
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "上海",
                    "广州",
                    "北京",
                    "深圳",
                    "合肥",
                    "......",
                    "杭州",
                    "厦门",
                    "济南",
                    "成都",
                    "重庆"
                ],
                axisTick: {
                    alignWithLabel: false,
                    // 把x轴的刻度隐藏起来
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                // x轴这条线的颜色样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                    }
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisTick: {
                    alignWithLabel: false,
                    // 把y轴的刻度隐藏起来
                    show: false
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                // y轴这条线的颜色样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                        // width: 3
                    }
                },
                // y轴分割线的颜色样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(0, 240, 255, 0.3)"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "60%",
                data: [
                    2100,
                    1900,
                    1700,
                    1560,
                    1400,
                    item,
                    900,
                    750,
                    600,
                    480,
                    240
                ]
            }
        ]
    };
    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
//订单模块自动切换
(function () {
    var data = {
        day365: { orders: '20,301,987', amount: '99834' },
        day90: { orders: '301,987', amount: '9834' },
        day30: { orders: '1,987', amount: '3834' },
        day1: { orders: '987', amount: '834' }
    }
    var index = 0
    var obj = data; //定义对象（data为获取到的对象，在这里定义）
    var arr = Object.values(obj); //对象转化为数组
    let $dingdan = $('.order h4:eq(0)')
    let $xiaoliang = $('.order h4:eq(1)')
    console.log(arr);
    $('.order .filter').on('click', 'a', function () {
        index = $(this).index()
        $(this).addClass('active').siblings('a').removeClass('active')
        $dingdan.text(arr[$(this).index()].orders)
        $xiaoliang.text(arr[$(this).index()].amount)
        // console.log(arr[$(this).index()].orders)
    })
    var $allTab = $('.order .filter a')
    setInterval(function () {
        index++
        if (index >= 4) {
            index = 0
        }
        $allTab.eq(index).click()
    }, 5000)
})();
//销售统计模块
(function () {
    //代码放到 实例化图表对象之前 
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }

    //折线图
    var chartDom = document.querySelector('.sales .line')
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        legend: {
            data: ['预期销售额', '实际销售额'],
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd' // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [{
            name: '预期销售额',
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            type: 'line',
            // 折线修饰为圆滑
            smooth: true,
        }, {
            name: '实际销售额',
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            type: 'line',
            smooth: true,
        }]

    };

    myChart.setOption(option);
    let index = 0
    //Tab栏切换
    $('.caption').on('click', 'a', function () {
        $(this).addClass('active').siblings('a').removeClass('active')
        index = $(this).index() - 1
        // console.log($(this).index() - 1)
        // console.log(option.series[0].data)
        //this.dataset.type指的是当前标签的属性值，即data-type的值
        var currData = data[this.dataset.type]
        // console.log(currData)
        option.series[0].data = currData[0]
        option.series[1].data = currData[1]
        myChart.setOption(option);
    })

    let $allTab = $('.sales .caption a')
    function qihuan() {
        index++
        if (index === 4) index = 0
        $allTab.eq(index).click()
    }
    let timer = setInterval(qihuan, 3000)
    $('.sales .line').mouseover(function () {
        clearInterval(timer)

    })
    $('.sales .line').mouseout(function () {
        // console.log(index)
        timer = setInterval(qihuan, 3000)
    })
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();
//渠道分布以及季度销售模块
//渠道分布
(function () {
    var chartDom = document.querySelector('.wrap .radar');
    var myChart = echarts.init(chartDom);
    var option;

    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    const dataBJ = [[186, 142, 192, 88, 93, 79,]];

    const lineStyle = {
        // 线条样式
        normal: {
            color: '#fff',
            width: 1
        },

    };
    option = {
        tooltip: {
            show: false,
            // 控制提示框组件的显示位置
            position: ['60%', '10%'],
        },

        radar: {
            // 雷达图的指示器 内部填充数据
            indicator: [
                { name: '机场', max: 200 },
                { name: '商场', max: 200 },
                { name: '火车站', max: 200 },
                { name: '汽车站', max: 200 },
                { name: '地铁', max: 200 }
            ],

            shape: 'circle',
            radius: '59%',
            splitNumber: 4,

            axisName: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)',
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'

                }
            },
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                // symbol 标记的样式(拐点），还可以取值'rect' 方块 ,'arrow' 三角等
                symbol: 'circle',
                // 拐点的大小  
                symbolSize: 3,
                // 小圆点（拐点）设置为白色
                itemStyle: {
                    color: '#fff'
                },
                // 在圆点上显示相关数据
                label: {
                    show: false,
                    color: '#fff',
                    fontSize: 10
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.9)',
                    opacity: 0.1
                }
            }
        ]
    };
    myChart.setOption(option);
})();
// 销售模块
(function () {
    var chartDom = document.querySelector('.quarter .gauge');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        series: [
            {
                type: 'pie',
                radius: ['120%', '140%'],
                // 移动下位置  套住50%文字
                center: ['48%', '80%'],

                label: {
                    show: false,
                    position: 'center'
                },
                // 起始角度，支持范围[0, 360]
                startAngle: 180,
                data: [{
                    value: 100,
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1,
                            [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    }
                }, { value: 100, itemStyle: { color: '#12274d' } }, { value: 200, itemStyle: { color: 'transparent' } }]
            }
        ]
    };

    option && myChart.setOption(option);

})();
// //全国热榜
(function () {
    var hotData = [
        {
            city: '北京',  // 城市
            sales: '25,179',  // 销售额
            flag: true, //  上升还是下降
            brands: [   //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八&nbsp;&nbsp;&nbsp;喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: ' 八&nbsp;&nbsp;&nbsp;喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: ' 八&nbsp;&nbsp;&nbsp;喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: ' 八&nbsp;&nbsp;&nbsp;喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: ' 八&nbsp;&nbsp;&nbsp;喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ]

    //通过each遍历数组
    //index代表下标,item代表数组的对象

    //sup渲染
    let supHtml = ''
    $.each(hotData, function (index, item) {
        supHtml = supHtml + `<li>
        <span>${item.city}</span>
        <span>${item.sales} <s class="${item.flag ? 'icon-woman' : 'icon-man'}" style="color:${item.flag ? '#6acca3' : '#d93f36'}"></s></span>
    </li>`
    })
    $('.sup').html(supHtml)

    //鼠标进入sup中的小li的时候，要高亮显示
    let Aindex
    //封装一个函数，让鼠标进入sup中的小li的时候，要高亮显示，并且同时让后面的sub渲染
    function rander(a) {
        a.addClass('active').siblings('li').removeClass('active')
        // console.log(hotData[Aindex].brands)


        //sub
        let subHtml = ''
        $.each(hotData[Aindex].brands, function (index, item) {
            console.log(item.flag)
            subHtml = subHtml + `<li>
            <span>${item.name}</span><span>${item.num} </span><s class="${item.flag ? 'icon-woman' : 'icon-man'}" style="color:${item.flag ? '#6acca3' : '#d93f36'}"></s>
            </li>`
        })
        $('.sub').html(subHtml)
    }
    //事件委托 鼠标进入sup中的小li的时候，要高亮显示
    $('.top .sup').on('mouseover', 'li', function () {
        Aindex = $(this).index()
        rander($(this))
        // console.log(index)

    })
    //默认让第一个小li处于经过状态
    $('.sup li').eq(0).mouseover()
    //开启定时器
    let num = 0
    function qiehuan() {
        Aindex++
        if (Aindex === 5) Aindex = 0
        rander($('.sup li').eq(Aindex))
    }

    let timer = setInterval(qiehuan, 2000)
    //
    $('.data').mouseover(function () {
        clearInterval(timer)
    })

    $('.data').mouseout(function () {
        timer = setInterval(qiehuan, 2000)
    })

})();



// 全国热榜模块
// (function () {
//     // 1. 准备相关数据
//     var hotData = [
//         {
//             city: "北京", // 城市
//             sales: "25, 179", // 销售额
//             flag: true, //  上升还是下降
//             brands: [
//                 //  品牌种类数据
//                 { name: "可爱多", num: "9,086", flag: true },
//                 { name: "娃哈哈", num: "8,341", flag: true },
//                 { name: "喜之郎", num: "7,407", flag: false },
//                 { name: "八喜", num: "6,080", flag: false },
//                 { name: "小洋人", num: "6,724", flag: false },
//                 { name: "好多鱼", num: "2,170", flag: true }
//             ]
//         },
//         {
//             city: "河北",
//             sales: "23,252",
//             flag: false,
//             brands: [
//                 { name: "可爱多", num: "3,457", flag: false },
//                 { name: "娃哈哈", num: "2,124", flag: true },
//                 { name: "喜之郎", num: "8,907", flag: false },
//                 { name: "八喜", num: "6,080", flag: true },
//                 { name: "小洋人", num: "1,724", flag: false },
//                 { name: "好多鱼", num: "1,170", flag: false }
//             ]
//         },
//         {
//             city: "上海",
//             sales: "20,760",
//             flag: true,
//             brands: [
//                 { name: "可爱多", num: "2,345", flag: true },
//                 { name: "娃哈哈", num: "7,109", flag: true },
//                 { name: "喜之郎", num: "3,701", flag: false },
//                 { name: "八喜", num: "6,080", flag: false },
//                 { name: "小洋人", num: "2,724", flag: false },
//                 { name: "好多鱼", num: "2,998", flag: true }
//             ]
//         },
//         {
//             city: "江苏",
//             sales: "23,252",
//             flag: false,
//             brands: [
//                 { name: "可爱多", num: "2,156", flag: false },
//                 { name: "娃哈哈", num: "2,456", flag: true },
//                 { name: "喜之郎", num: "9,737", flag: true },
//                 { name: "八喜", num: "2,080", flag: true },
//                 { name: "小洋人", num: "8,724", flag: true },
//                 { name: "好多鱼", num: "1,770", flag: false }
//             ]
//         },
//         {
//             city: "山东",
//             sales: "20,760",
//             flag: true,
//             brands: [
//                 { name: "可爱多", num: "9,567", flag: true },
//                 { name: "娃哈哈", num: "2,345", flag: false },
//                 { name: "喜之郎", num: "9,037", flag: false },
//                 { name: "八喜", num: "1,080", flag: true },
//                 { name: "小洋人", num: "4,724", flag: false },
//                 { name: "好多鱼", num: "9,999", flag: true }
//             ]
//         }
//     ];
//     //  2. 根据数据渲染各省热销 sup 模块内容
//     // (1) 遍历 hotData对象
//     var supHTML = "";
//     $.each(hotData, function (index, item) {
//         // console.log(item);
//         supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
//       ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
//     });
//     // 把生成的5个小li字符串给 sub dom盒子
//     $(".sup").html(supHTML);
//     // 3. 当鼠标进入 tab 的时候
//     // 鼠标经过当前的小li要高亮显示
//     $(".province .sup").on("mouseenter", "li", function () {
//         index = $(this).index();
//         render($(this));
//     });

//     // 声明一个函数 里面设置sup当前小li高亮还有 对应的品牌对象渲染
//     // 这个函数需要传递当前元素进去
//     function render(currentEle) {
//         currentEle
//             .addClass("active")
//             .siblings()
//             .removeClass();
//         // 拿到当前城市的品牌对象
//         // console.log($(this).index());
//         // 可以通过hotData[$(this).index()] 得到当前的城市
//         // console.log(hotData[$(this).index()]);
//         // 我们可以通过hotData[$(this).index()].brands 拿到的是城市对象的品牌种类
//         // console.log(hotData[$(this).index()].brands);
//         // 开始遍历品牌数组
//         var subHTML = "";
//         $.each(hotData[currentEle.index()].brands, function (index, item) {
//             // 是对应城市的每一个品牌对象
//             // console.log(item);
//             subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
//       ${item.flag ? "icon-up" : "icon-down"}
//       ></s></span></li>`;
//         });
//         // 把生成的6个小li字符串给 sub dom盒子
//         $(".sub").html(subHTML);
//     }
//     // 4. 默认把第一个小li处于鼠标经过状态
//     var lis = $(".province .sup li");
//     lis.eq(0).mouseenter();
//     // 5 开启定时器
//     var index = 0;
//     var timer = setInterval(function () {
//         index++;
//         if (index >= 5) index = 0;
//         // lis.eq(index).mouseenter();
//         render(lis.eq(index));
//     }, 2000);

//     $(".province .sup").hover(
//         // 鼠标经过事件
//         function () {
//             clearInterval(timer);
//         },
//         // 鼠标离开事件
//         function () {
//             clearInterval(timer);
//             timer = setInterval(function () {
//                 index++;
//                 if (index >= 5) index = 0;
//                 // lis.eq(index).mouseenter();
//                 render(lis.eq(index));
//             }, 2000);
//         }
//     );
// })();


