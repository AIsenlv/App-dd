Page({
  data:{
    app:getApp(),
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: `,this.data.app.sss.name);
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
     console.log(112221);
    // 页面被下拉
  },
  onReachBottom() {
    // 
    console.log(1111);
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  loginSystem(){
    dd.alert({
      content: '你点了',
      success:res=>{
        dd.navigateTo({
          url: '/pages/apis/apis?name=ljm'
        })
      }
    });
  }
});
