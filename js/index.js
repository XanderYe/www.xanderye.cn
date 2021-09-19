new Vue({
  el: "#app",
  data() {
    return {
      bingImageUrl: null,
      isInternet: true,
      outerLinks: [
        {
          name: "我的博客",
          image: "img/logo.png",
          link: "https://www.xanderye.cn/"
        },
        {
          name: "家庭影院",
          image: "img/jellyfin.png",
          link: "https://nas.xanderye.cn:8920/"
        },
        {
          name: "工具小站",
          image: "img/logo.png",
          link: "http://tool.xanderye.cn/"
        },
      ],
      innerLinks: [

      ]
    }
  },
  methods: {
    bing() {
      let _this = this;
      axios({
        method: 'get',
        url: 'http://nas.xanderye.cn:8081/tool/image/bingDaily'
      }).then(function (res) {
        if (res.data.code === 0) {
          _this.bingImageUrl = res.data.data;
          sessionStorage.setItem("bingImageUrl", _this.bingImageUrl);
        } else {
          _this.bingImageUrl = "url ('img/WindowsTerminal.png')";
        }
        _this.renderBackground();
      });
    },
    renderBackground() {
      document.body.style['background-image'] = "url('" + this.bingImageUrl + "')";
    },
  },
  mounted() {

  },
  created() {
    const bgUrl = sessionStorage.getItem("bingImageUrl");
    if (bgUrl) {
      this.bingImageUrl = bgUrl;
      this.renderBackground();
    } else {
      this.bing();
    }
  }
})