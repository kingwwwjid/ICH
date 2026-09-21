const data = require('../../utils/data.js')

Page({
  data: {
    act: null   // 一开始是空，找到后再填进去
  },

  onLoad(options) {//加载时自动调用
    const id = Number(options.id)   // 拿到跳转时传的 id
    const act = data.activities.find(item => item.id === id)  // 找出对应的活动
    this.setData({ act })
  }
})
