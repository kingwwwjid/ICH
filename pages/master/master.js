const data = require('../../utils/data.js')

Page({
  data: {
    masters: data.masters
  },

  onMstTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: '/pages/detailmst/detailmst?id=' + id })
  }
})
