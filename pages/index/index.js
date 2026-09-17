// index.js
const data = require('../../utils/data.js')//数据导入

Page({
  data: {
    banners: data.banners,
    activities: data.activities,
    navItems: [//轮播下处副标
      { id: 1, icon: '/images/1.png', text: '非遗活动' ,url: '/pages/activity/activity'},
      { id: 2, icon: '/images/2.png', text: '非遗展馆' ,url: '/pages/gallery/gallery' },
      { id: 3, icon: '/images/3.png', text: '非遗大师' ,url: '/pages/master/master'},
      { id: 4, icon: '/images/4.png', text: '非遗旅游' ,url: '/pages/travel/travel'},
    ]
  },
   clk(e) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({ url })
  }
})
