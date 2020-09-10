// pages/dataAnalysis/dataAnalysis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    array: ['2020级各学院男女比例柱状图',
      '2020级各学院人数柱状图',
      '全校各学院人数比例饼状图',
      '全校男女比例饼状图'
    ],
    option: {
      "dataset": {
        "dimensions": ["product", "男", "女"],
        "source": [{
            "男": 43,
            "女": 10,
            "product": "计院"
          },
          {
            "男": 13,
            "女": 52,
            "product": "管院"
          },
          {
            "男": 13,
            "女": 85,
            "product": "珠宝"
          },
          {
            "男": 13,
            "女": 200,
            "product": "电汽"
          },
          {
            "男": 13,
            "女": 150,
            "product": "经院"
          },
          {
            "男": 13,
            "女": 85,
            "product": "汽院"
          },
          {
            "男": 13,
            "女": 50,
            "product": "土木"
          },
        ]
      },
      "legend": {},
      "series": [{
        "type": "bar",
        "color": "#2E7DC8"
      }, {
        "type": "bar",
        "color": "#F65B57"
      }],
      "tooltip": {},
      "xAxis": {
        "type": "category"
      },
      "yAxis": {}
    }
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    switch (e.detail.value) {
      case "0":
        this.setData({
          index: 0,
          option: {
            "dataset": {
              "dimensions": ["product", "男", "女"],
              "source": [{
                  "男": 43,
                  "女": 10,
                  "product": "计院"
                },
                {
                  "男": 13,
                  "女": 52,
                  "product": "管院"
                },
                {
                  "男": 13,
                  "女": 85,
                  "product": "珠宝"
                },
                {
                  "男": 13,
                  "女": 200,
                  "product": "电汽"
                },
                {
                  "男": 13,
                  "女": 150,
                  "product": "经院"
                },
                {
                  "男": 13,
                  "女": 85,
                  "product": "汽院"
                },
                {
                  "男": 13,
                  "女": 50,
                  "product": "土木"
                },
              ]
            },
            "legend": {},
            "series": [{
              "type": "bar",
              "color": "#2E7DC8"
            }, {
              "type": "bar",
              "color": "#F65B57"
            }],
            "tooltip": {},
            "xAxis": {
              "type": "category"
            },
            "yAxis": {}
          }
        })
        break;
      case "1":
        this.setData({
          index: 1,
          option: {
            "color": ["#209BAA"],
            "grid": {
              "bottom": "3%",
              "containLabel": true,
              "left": "3%",
              "right": "4%"
            },
            "series": [{
              "barWidth": "60%",
              "data": [10, 52, 200, 334, 390, 330, 220],
              "name": "人数",
              "type": "bar"
            }],
            "tooltip": {
              "axisPointer": {
                "type": "shadow"
              },
              "trigger": "axis"
            },
            "xAxis": [{
              "axisTick": {
                "alignWithLabel": true
              },
              "data": ["计院", "管院", "珠宝", "电汽", "经院", "汽院", "土木"],
              "type": "category"
            }],
            "yAxis": [{
              "type": "value"
            }]
          }
        })
        break;
      case "2":
        this.setData({
          index: 2,
          option: {
            "legend": {
              "data": ["计院", "管院", "珠宝", "电汽", "经院"],
              "left": "left",
              "orient": "vertical"
            },
            "series": [{
              "center": ["50%", "60%"],
              "data": [{
                "name": "计院",
                "value": 335
              }, {
                "name": "管院",
                "value": 310
              }, {
                "name": "珠宝",
                "value": 234
              }, {
                "name": "电汽",
                "value": 135
              }, {
                "name": "经院",
                "value": 1548
              }],
              "emphasis": {
                "itemStyle": {
                  "shadowBlur": 10,
                  "shadowColor": "rgba(0, 0, 0, 0.5)",
                  "shadowOffsetX": 0
                }
              },
              "name": "访问来源",
              "radius": "55%",
              "type": "pie"
            }],
            "title": {
              "left": "center",
              "subtext": "模拟数据",
              "text": ""
            },
            "tooltip": {
              "formatter": "{b} : {c} ({d}%)",
              "trigger": "item"
            }
          }
        })
        break;
      case "3":
        this.setData({
          index: 3,
          option: {
            "legend": {
              "data": ["男", "女"],
              "left": "left",
              "orient": "vertical"
            },
            "series": [{
              "center": ["50%", "60%"],
              "data": [{
                "name": "男",
                "value": 13350
              }, {
                "name": "女",
                "value": 10100
              }],
              "emphasis": {
                "itemStyle": {
                  "shadowBlur": 10,
                  "shadowColor": "rgba(0, 0, 0, 0.5)",
                  "shadowOffsetX": 0
                }
              },
              "name": "访问来源",
              "radius": "55%",
              "type": "pie"
            }],
            "title": {
              "left": "center",
              "subtext": "模拟数据",
              "text": ""
            },
            "tooltip": {
              "formatter": "{b} : {c} ({d}%)",
              "trigger": "item"
            }
          }
        })
        break;
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onInstance(ev) {
    console.log(ev)
  }
})