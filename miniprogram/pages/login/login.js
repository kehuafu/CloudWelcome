// pages/login/login.js
// 使用相对路径引入创建的文件
const util = require('../../util/_uuid.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: false,
    no: '',
    uuid: '',
    data: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(util.uuid())
    this.setData({
      uuid: util.uuid()
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
  bindtouchstart(e) {
    if (this.data.no.length == 12) {
      this.setData({
        login: true
      })
    }
  },
  bindtouchend(e) {
    this.setData({
      login: false
    })
  },
  /**
   * 立即登录
   * @param {} ev 
   */
  login(ev) {
    if (this.data.no.length == 12) { // 云数据库
      wx.showToast({
        title: '正在加载...',
        icon: 'loading'
      })
      const db = wx.cloud.database()
      var that = this
      db.collection('student').where({
        no: that.data.no
      }).get({
        success: function (res) {
          // 输出 [{ "title": "The Catcher in the Rye", ... }]
          //console.log(res.data)
          console.log(res.data[0])
          if (res.data == '') {
            wx.showToast({
              title: '学号不存在哦',
              icon: 'none'
            })
          } else {
            that.setData({
              data: res.data[0]
            })
            const db = wx.cloud.database()
            db.collection('user').add({
              data: {
                data: that.data.data,
                token: that.data.uuid
              },
              success: function (res) {
                // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                //console.log("立即登录", res)
                wx.showToast({
                  title: '恭喜，登录成功！',
                  icon: 'none'
                })
                wx.setStorageSync('token', that.data.uuid)
                wx.redirectTo({
                  url: '/pages/message/message',
                })
              }
            })
          }
        }
      })
    } else {
      wx.showToast({
        title: '学号长度不对哦',
        icon: 'none'
      })
    }
  },
  input(e) {
    //console.log(e.detail.value)
    this.setData({
      no: e.detail.value
    })
  }
})