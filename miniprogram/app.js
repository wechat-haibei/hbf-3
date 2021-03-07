var plugin = requirePlugin("chatbot");


App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.init({
      env: 'haibeifen-9ghr19lt5312e331'
    })
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        // console.log('callFunction test result: ', res)
        wx.setStorageSync('openId', res.result.openid)
      }
    })
   
    plugin.init({
      appid: "CBTuL6NX4nV26XQJTWn0REDqEIQ9Z0", //插件appid
      openid: "openId", //用户的openid，必填项，可通过wx.login()获取code，然后通过后台接口获取openid
      guideList:["引导提问","介绍一下","拾金不昧的加几分","违规用火的扣几分","四星信用等次的年度评价指标得分为多少","服役期间荣立三等功的加几分","信用基金包括哪些类别"],
      userName: "", // 用户昵称
      guideCardHeight:90,
      operateCardHeight:0,
      history:false,
      navHeight:0,
      anonymous: false, // 是否允许匿名用户评价，默认为false，设为ture时，未传递userName、userHeader两个字段时将弹出登录框
      success: () => {}, //非必填
      fail: (error) => {}, //非必填
  });

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
