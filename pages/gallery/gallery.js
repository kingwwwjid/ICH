const data = require('../../utils/data.js')

Page({
  data: {
    categories: ['刺绣', '焰火', '武术', '茶', '打铁花'],
    current: 0,
    list: []
  },

  onLoad() {
    this.setData({
      list: data.gallery.filter(item => item.category === '刺绣')
    })
  },

  onTabTap(e) {
    const index = Number(e.currentTarget.dataset.index)
    const cat = this.data.categories[index]
    this.setData({
      current: index,
      list: data.gallery.filter(item => item.category === cat)
    })
  },
    onItemTap(e) {
    const category = e.currentTarget.dataset.category
    wx.navigateTo({ url: '/pages/detailgly/detailgly?category=' + category })
  }
})
