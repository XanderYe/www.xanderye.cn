#!/bin/bash

pic=$(wget -t 5 --no-check-certificate -qO- "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1")
echo $pic|grep -q enddate||exit
link=$(echo https://www.bing.com$(echo $pic|sed 's/.\+"url"[:" ]\+//g'|sed 's/".\+//g'))
date=$(echo $pic|sed 's/.\+enddate[": ]\+//g'|grep -Eo 2[0-9]{7}|head -1)
tmpfile=/tmp/$date"_bing.jpg"
wget -t 5 --no-check-certificate  $link -qO $tmpfile
[ -s $tmpfile ]||exit
rm -rf /home/httpd/cgi-bin/images/desktop/bg/bg5.jpg
# 需要下载必应壁纸的路径
cp -f $tmpfile /share/docker/nginx/html/www/bing/bing.jpg &>/dev/null
rm -rf /tmp/*_bing.jpg
