// pages/guide/guide.js
Page({
  data: {
    latitude: "23.433757217972598",
    longitude: "113.17205429077148",
    scale: 16,
    polyline: '',
    polygons: '',
    markers: '',
    isClick: false,
    index: ''
  },
  onShow: function () {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        var timer = setTimeout(function () {
          that.setData({
            scale: 16
          })
          clearTimeout(timer)
        }, 1500)
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载...',
    })
    const db = wx.cloud.database()
    var that = this
    var polyline = []
    var polygons = []
    var markers = []
    db.collection('map').get({
      success: function (res) {
        // res.data 是包含以上定义的两条记录的数组
        console.log(res.data)
        polyline.push(res.data[0])
        polygons.push(res.data[1])
        markers.push(...res.data[2].markers)
        that.setData({
          polyline: polyline,
          polygons: polygons,
          markers: markers
        })
        wx.hideLoading({
          success: (res) => {},
        })
      }
    })
  },
  /**
   * 点击标记点
   * @param {} ev 
   */
  callouttap(ev) {
    console.log(ev.detail.markerId)
    var index = ev.detail.markerId
    this.setData({
      isClick: true,
      latitude: this.data.markers[index].latitude,
      longitude: this.data.markers[index].longitude,
      scale: 18,
      index: index
    })
  },
  bindtap(ev) {
    console.log(ev)
    this.setData({
      isClick: false
    })
  },
  gotoRute(ev) {
    //跳转路线规划
    var index = this.data.index
    let key = 'GE4BZ-VYIE3-TUX3J-YCDGR-IXPX2-AIF2Q'
    let referer = '云迎新-小程序端'
    let endPoint = JSON.stringify({
      'name': this.data.markers[index].markerName,
      'latitude': this.data.markers[index].latitude,
      'longitude': this.data.markers[index].longitude
    })
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
    })
  }
});