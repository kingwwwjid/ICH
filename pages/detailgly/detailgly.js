const data = require('../../utils/data.js')

Page({
  data: {
    list: [],
    current: 0
  },

  onLoad(options) {
    const category = options.category   // 拿到分类名
    const list = data.gallery.filter(item => item.category === category)
    this.setData({ list })
  },

  // 手指滑动 swiper 时触发，e.detail.current 是滑到第几张
  onSwiperChange(e) {
    this.setData({ current: e.detail.current })
  }
})
