const data = require('../../utils/data.js')

Page({
  data: {
    mst: null
  },

  onLoad(options) {
    const id = Number(options.id)
    const mst = data.masters.find(item => item.id === id)
    this.setData({ mst })
  }
})
