// pages/welcome/welcome.js
var startX, endX; //首先创建2个变量 来记录触摸时的原点
var moveFlag = true; // 判断执行滑动事件
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page: 0,
    ani_01: '',
    ani_02: '',
    ani_03: '',
    ani_04: '',
    ani_05: '',
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
  /**
   * 触摸开始
   */
  touchStart(ev) {
    console.log(ev)
    startX = ev.touches[0].pageX //获取触摸时x轴的原点
    moveFlag = true
  },
  /**
   * 触摸移动
   */
  touchMove(ev) {
    endX = ev.touches[0].pageX //获取移动时x轴的坐标
    if (moveFlag) {
      if (endX - startX > 50 && this.data.page > 0) {
        //右滑
        console.log("右滑")
        var page = this.data.page - 1
        if (page == 1) {
          var animation_1 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          var animation_2 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          var animation_3 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          var animation_4 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          var animation_5 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          animation_1.rotate(0).translate(0, 0).opacity(1).step()
          animation_2.rotate(0).translate(0, 0).opacity(1).step()
          animation_3.rotate(0).translate(0, 0).opacity(1).step()
          animation_4.rotate(0).translate(0, 0).opacity(1).step()
          animation_5.rotate(0).scale(0).opacity(0).step()
          this.setData({
            ani_01: animation_1.export(),
            ani_02: animation_2.export(),
            ani_03: animation_3.export(),
            ani_04: animation_4.export(),
          })
          this.setData({
            page: page
          })
          this.setData({
            ani_05: animation_5.export(),
          })

        }
        this.setData({
          page: page
        })
        moveFlag = false
      }
      if (startX - endX > 50 && this.data.page < 2) {
        //左滑
        console.log("左滑")
        var page = this.data.page + 1
        if (page == 2) {
          var animation_1 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          var animation_2 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          var animation_3 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          var animation_4 = wx.createAnimation({
            duration: 2000,
            timingFunction: 'ease',
            delay: 100,
          })
          var animation_5 = wx.createAnimation({
            duration: 3000,
            timingFunction: 'ease',
            delay: 100,
          })
          animation_1.rotate(90).translate(150, -150).scale(0, 0).opacity(0).step()
          animation_2.rotate(90).translate(150, 150).scale(0, 0).opacity(0).step()
          animation_3.rotate(90).translate(-150, -150).scale(0, 0).opacity(0).step()
          animation_4.rotate(90).translate(-150, 150).scale(0, 0).opacity(0).step()
          animation_5.rotate(360).scale(0.9).opacity(1).step()
          this.setData({
            ani_01: animation_1.export(),
            ani_02: animation_2.export(),
            ani_03: animation_3.export(),
            ani_04: animation_4.export(),
          })
          this.setData({
            page: page
          })
          this.setData({
            ani_05: animation_5.export(),
          })
        }
        this.setData({
          page: page
        })
        moveFlag = false
      }

    }
  },
  /**
   * 触摸结束
   */
  touchEnd(ev) {
    moveFlag = true //关闭滑动事件
  },
  /**
   * 立即体验
   */
  welcome_btn(e) {
    console.log("立即体验", e)
    wx.redirectTo({
      url: '/pages/home/home',
    })
  }
})