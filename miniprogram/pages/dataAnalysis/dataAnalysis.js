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
    option: '',
    data: ''
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    switch (e.detail.value) {
      case "0":
        this.setData({
          index: 0,
          option: this.data.data[0]
        })
        break;
      case "1":
        this.setData({
          index: 1,
          option: this.data.data[1]
        })
        break;
      case "2":
        this.setData({
          index: 2,
          option: this.data.data[2]
        })
        break;
      case "3":
        this.setData({
          index: 3,
          option: this.data.data[3]
        })
        break;
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    const db = wx.cloud.database()
    db.collection('dataAnalysis').get({
      success: function (res) {
        // res.data 包含该记录的数据
        console.log(res.data)
        that.setData({
          data: res.data,
          option: res.data[0]
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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