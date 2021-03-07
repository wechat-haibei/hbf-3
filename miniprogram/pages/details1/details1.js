// pages/dome/dome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {listName:'海贝分的涵义',
       item:[{
         itemName:'为建立社会成员信用记录和评价体系，健全信用积分和分类管理机制，为守信联合激励和失信联合惩戒提供应用标准，营造良好的社会信用环境，推进我区社会信用体系建设，根据《国务院关于印发社会信用体系建设规划纲要（2014—2020年）的通知》（国发〔2014〕21号）、《国务院办公厅关于加强个人诚信体系建设的指导意见》（国办发〔2016〕98号）、《新时代公民道德建设实施纲要》《山东省公共信用信息管理办法》（省政府令第314号）等文件精神，结合实际，制定本办法。'
       }]
      }, 
      {
        listName: '适用范围',
        item: [{
          itemName: "信用积分适用于威海市行政区域内年满18周岁、具有完全民事行为能力的常住人口。"
        }]
      }, {
        listName: '级别划分',
        item: [{
          itemName: "个人信用积分评价采用千分制，默认初始得分为1000分，设定为AAA、AA、A、B、C、D 六个级别：\n  分值在1150分以上的为AAA级（诚信模范级别）；\n  分值在1050—1149分的为AA级（诚信优秀级别）；\n  分值在1000—1049分的为A级（诚信级别）；\n  分值在950—999分的为B级（较诚信级别）；\n  分值在801—949分的为C级（诚信警示级别）；\n  分值在800分及以下的为D级（不诚信级别）。"
        }]
      },
      {
        listName: '信用应用指南',
        item: [{
          itemName:"　1.信易贷"+
                  　　"\n公积金贷款申请条件由连续足额缴存住房公积金12个月放宽至6个月；贷款金额由不超过个人公积金帐户余额的20倍放宽至25倍；借款人还款能力按不高于月缴存工资基数的50%放宽至60%。"+
                  　　"威海市商业银行在“积金易贷”等业务中，给予增加贷款（或信用卡）额度、降低贷款利率、灵活选择还款方式、延长贷款期限等优惠。"+
                  　　"蓝海银行在信贷业务中，在正常利率的基础上优惠5-10%；优先考虑个人银行业务手续费服务价格优惠或减免。"+
                  　　 "\n  2.信易医"+
                  
                  　　"\n公立医院住院，5万元以内免住院押金。住院期间，免收轮椅、平车使用押金。"+
                  
                  　　"\n  3.信易游"+
                  
                  　　"\n游览威海市相关A级以上旅游景区按照公布政策享受折扣优惠。"+
                  
                  　　"刘公岛优惠至100元；圣水观6折优惠；大乳山、多福山、福如东海、岠嵎山等景区5折优惠；青龙生态旅游度假村AAA级5折优惠，AA级7.5折优惠。"+
                  
                  　　"\n  4.信易借"+
                  
                  　　"\n威海市图书馆借书免收办证押金；借阅册数增加到8册。"+
                  
                  　　"\n  5.信易健"+
                  
                  　　"\n威海体育场、威海体育馆、场馆中心网球场、场馆中心网球馆等地健身消费，享受8—9折优惠。"+
                  
                  　　"\n  6.信易批"+
                  
                  　　"\n办理行政管理事项时享受绿色通道和容缺受理，在评先选优中优先考虑。"+
                  
                  　　"\n  7.信用服"+
                  
                  　　"\n威海水务、供电、广电网络、港华燃气、联通、移动等公共服务领域享受一定的优惠服务。"+
                  
                  　　"\n  8.信易购"+
                  
                  　　"\n燕喜堂医药连锁公司购买药品时，全天候享受蓝标药品8折优惠。"+
                  
                  　　"\n  9.信易停"+
                  
                  　　"\n威海安通停车服务区域内，享受一定的优惠折扣。"+
                  
                  　　"\n  10.信易租"+
                  
                  　　"\n广州研趣信息科技有限公司（威海）公司在提供办公设备租赁时，对企业法定代表人“海贝分”等级达到AA级的给予10%，AAA级的给予30%的租金减免。"
                  
                  　　+"\n  以上信用惠民政策详见信用威海网站，具体以实施单位公布的为准。"
        }]
      },{
        listName: '个人信用积分查询',
        item: [{
          itemName: "（一）\n到行政审批服务窗口，持本人身份证现场查询和打印。 \n（二）\n“信用威海”APP查询。登录信用威海网站，扫描右上角的二维码或者从“信用威海”微信公众号左下角的“海贝分”板块，直接点击进入APP下载页面。实名认证注册，并与个人手机号码绑定后，即可查询个人信用积分。\n（三）\n“信用威海”官方网站查询。点击网站上的“个人信用”板块，进入查询页面，输入姓名、身份证号码、手机号码以及短信验证码后进行查询。\n（四）\n通过市民卡APP进行查询。登录市民卡APP后，从信用威海板块进入，通过实名认证后查询。"
        }]
      }
    ]
  },
  //点击最外层列表展开收起
  listTap(e){
    console.log('触发了最外层');
    let Index = e.currentTarget.dataset.parentindex,//获取点击的下标值
        list=this.data.list;
    list[Index].show = !list[Index].show || false;//变换其打开、关闭的状态
    if (list[Index].show){//如果点击后是展开状态，则让其他已经展开的列表变为收起状态
      this.packUp(list,Index);
    }

    this.setData({
      list
    });
  },
  //点击里面的子列表展开收起
  listItemTap(e){
    let parentindex = e.currentTarget.dataset.parentindex,//点击的内层所在的最外层列表下标
        Index=e.currentTarget.dataset.index,//点击的内层下标
        list=this.data.list;
    console.log(list[parentindex].item,Index);
    list[parentindex].item[Index].show = !list[parentindex].item[Index].show||false;//变换其打开、关闭的状态
    if (list[parentindex].item[Index].show){//如果是操作的打开状态，那么就让同级的其他列表变为关闭状态，保持始终只有一个打开
      for (let i = 0, len = list[parentindex].item.length;i<len;i++ ){
        if(i!=Index){
          list[parentindex].item[i].show=false;
        }

      }
    }
    this.setData({list});
  },
  //让所有的展开项，都变为收起
  packUp(data,index){
    for (let i = 0, len = data.length; i < len; i++) {//其他最外层列表变为关闭状态
      if(index!=i){
        data[i].show = false;
        for (let j=0;j<data[i].item.length;j++){//其他所有内层也为关闭状态
            data[i].item[j].show=false;
        }
      }
    }
  },
  onLoad: function (options) {

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

  }
})