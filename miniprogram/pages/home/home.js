// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    opacity: [false, false, false, false]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideHomeButton() //隐藏页面左上角主页按钮
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
  item_start(ev) {
    // console.log(ev.currentTarget.id)
    switch (ev.currentTarget.id) {
      case "1":
        this.data.opacity[0] = true
        this.setData({
          opacity: this.data.opacity
        })
        break;
      case "2":
        this.data.opacity[1] = true
        this.setData({
          opacity: this.data.opacity
        })
        break;
      case "3":
        this.data.opacity[2] = true
        this.setData({
          opacity: this.data.opacity
        })
        break;
      case "4":
        this.data.opacity[3]=true
        this.setData({
        opacity:this.data.opacity
      })
        break;
    }

  },
  item_end(ev) {
    switch (ev.currentTarget.id) {
      case "1":
        this.data.opacity[0] = false
        this.setData({
          opacity: this.data.opacity
        })
        break;
      case "2":
        this.data.opacity[1] = false
        this.setData({
          opacity: this.data.opacity
        })
        break;
      case "3":
        this.data.opacity[2] = false
        this.setData({
          opacity: this.data.opacity
        })
        break;
      case "4":
        this.data.opacity[3]=false
        this.setData({
        opacity:this.data.opacity
      })
        break;
    }
  },
  /**
   * 跳转
   */
  goto(ev){
    console.log(ev.currentTarget.id)
    switch(ev.currentTarget.id){
      case "1":
        wx.showModal({
          title: '需登录使用',
          content: '是否跳转登录界面',
          confirmColor:'#48c9af',
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.navigateTo({
                url: '/pages/login/login',
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        break;
      case "2":
        wx.navigateTo({
          url: '/pages/campus/campus',
        })
        break;
      case "3":
        wx.navigateTo({
          url: '/pages/guide/guide',
        })
        break;
      case "4":
        wx.navigateTo({
          url: '/pages/dataAnalysis/dataAnalysis',
        })
        break;
    }
  }
})