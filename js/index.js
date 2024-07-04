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
          name: "DSM",
          image: "img/dsm.png",
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
          link: "https://192.168.31.1:90/"
        },
        {
          name: "Openwrt",
          image: "img/openwrt.png",
          link: "http://192.168.31.254/cgi-bin/luci/"
        },
        {
          name: "PVE",
          image: "img/pve.png",
          link: "https://192.168.31.253:8006/"
        },
        {
          name: "家庭影院",
          image: "img/emby.png",
          link: "https://192.168.31.2:8920/"
        },
        {
          name: "Transmission",
          image: "img/transmission.jpg",
          link: "http://192.168.31.2:9091/transmission/web/"
        },
        {
          name: "Jenkins",
          image: "img/jenkins.png",
          link: "http://192.168.31.3:9080/"
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
