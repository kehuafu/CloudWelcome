// pages/campusDedail/campusDedail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    campus: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("校园风景详情->", options.id)
    if (options.id == -1) {
      var campus = {
        "_id": "-1",
        "title": "校铭石",
        "couldImg": "cloud://cloudwelcome-qrvgt.636c-cloudwelcome-qrvgt-1303010378/images/校门.jpg",
        "content": "走进华广第一眼就能见到“霸气侧漏”的校铭石，它如同学校的一颗心脏，将华广精神传播到每个华广的角落，它拥有坚强的外表，是华光学子坚韧不拔的象征,来华广一定在这里打卡呦~",
        "mapId": {
          "latitude": 23.430311798701656,
          "longitude": 113.17317008972168
        }
      }
      this.setData({
        campus: campus
      })
      return
    }
    var that = this
    var index = options.id
    const db = wx.cloud.database()
    db.collection('campus').where({
      _id: index
    }).get({
      success: function (res) {
        console.log(res)
        that.setData({
          campus: res.data[0]
        })
      }
    })
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
  /**
   * 去地图路线规划
   * @param ev 
   */
  goto_guide(ev) {
    wx.showLoading({
      title: '正在加载...',
    })
    let key = 'GE4BZ-VYIE3-TUX3J-YCDGR-IXPX2-AIF2Q'
    let referer = '云迎新-小程序端'
    let endPoint = JSON.stringify({
      'name': this.data.campus.title,
      'latitude': this.data.campus.mapId.latitude, //23.432177258282845
      'longitude': this.data.campus.mapId.longitude //113.17179143428802

    })
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    })
  }
})