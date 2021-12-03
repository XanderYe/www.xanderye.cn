new Vue({
  el: "#app",
  data() {
    return {
      bingImageUrl: "bing/bing.jpg",
      defaultImageUrl: "img/WindowsTerminal.png",
      isInternet: true,
      outerLinks: [
        {
          name: "我的博客",
          image: "img/logo.png",
          link: "https://wp.xanderye.cn/"
        },
        {
          name: "工具小站",
          image: "img/logo.png",
          link: "https://tool.xanderye.cn/"
        },
        {
          name: "QNAP",
          image: "img/qnap.png",
          link: "https://nas.xanderye.cn:5001/"
        },
        {
          name: "家庭影院",
          image: "img/emby.png",
          link: "https://nas.xanderye.cn:8920/"
        },
        {
          name: "Transmission",
          image: "img/transmission.jpg",
          link: "http://nas.xanderye.cn:9091/transmission/web/"
        },
        {
          name: "百度这么难吗？",
          image: "img/baidu.jpg",
          link: "https://baidu.xanderye.cn/"
        },
        {
          name: "Github",
          image: "img/github.jpg",
          link: "https://github.com/XanderYe"
        },
        {
          name: "Docker",
          image: "img/docker.jpg",
          link: "https://hub.docker.com/u/xanderye"
        },
      ],
      innerLinks: [
        {
          name: "爱快",
          image: "img/ikuai.png",
          link: "http://192.168.31.1/"
        },
        {
          name: "家庭影院",
          image: "img/emby.png",
          link: "http://192.168.31.2:8096/"
        },
        {
          name: "Transmission",
          image: "img/transmission.jpg",
          link: "http://192.168.31.2:9091/transmission/web/"
        },
      ]
    }
  },
  methods: {
    renderBackground() {
      let date = new Date();
      let timestamp = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate();
      this.bingImageUrl += "?r=" + timestamp;
      document.body.style['background-image'] = "url('" + this.bingImageUrl + "')";
    },
    changeStatus() {
      this.isInternet = !this.isInternet;
      localStorage.setItem('isInternet', this.isInternet);
    }
  },
  mounted() {

  },
  created() {
    const localStatus = localStorage.getItem("isInternet");
    this.isInternet = !(localStatus == 'false');
    this.renderBackground();
  }
})
