const app = getApp()

Page({
  
  OnTap:function(){
    wx.redirectTo({
      url: '../message_success/message_success',
    })
  },

    data: {
      selectList: [{
        "id": "10",
        "text": "男"
      }, {
        "id": "21",
        "text": "女"
      }],
      select: false,
      select_value1: {
        "id": "0",
        "text": "未选择"
      },
      select_value2: {
        "id": "0",
        "text": "未选择"
      },
      select_value3: {
        "id": "0",
        "text": "未选择"
      }
    },
    onLoad: function () {
      
    },
    m_select_touch(e) {
      let that = this;
      let selectIndex = e.detail.selIndex;
      let stype = e.detail.stype;
      console.log(stype);
      if (stype == "1") {
        let value1 = that.data.selectList[selectIndex];
        that.setData({
          select_value1: value1
        })
      }
      else if (stype == "2") {
        let value2 = that.data.selectList[selectIndex];
        that.setData({
          select_value2: value2
        })
      }
      else {
        let value3 = that.data.selectList[selectIndex];
        that.setData({
          select_value3: value3
        })
      }
  
    }
}
)