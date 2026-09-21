const data = require('../../utils/data.js')

Page({
  data: {
    activities: data.activities
  },

  onActTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: '/pages/detailact/detailact?id=' + id })//跳转页面
  }
})
