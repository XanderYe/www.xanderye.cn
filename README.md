# 使用说明

1. 修改 index.html 中的 #title 为你要的标题
2. 修改 index.html 中的 #footer 下的备案号
3. 本网站为静态页面，增加或修改链接需要修改 index.js，其中：outerLinks 为外网链接，innerLinks 为内网链接。
4. 默认使用 bing/bing.jpg 作为背景图，配置 change_bing.sh 定时任务以使用每日bing壁纸。
5. 部署直接用 nginx 指定 location 即可。