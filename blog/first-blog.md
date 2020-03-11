---
title: swiper初始化问题
author: GXQi
excerpt: 1.当swiper loop设为true时，同时你又改变了sliderPerview的值，这时候轮播，按prev按钮到第一个时，会出现空白页；解决办法：sliderPerview设置为auto,loopSliders设置你想要同时显示的slide个数...
date: 2020-01-21
time: 10:49
tags: ['前端', 'gridsome']
cover_image: './images/first-blog.jpg'
---

#### 1.当swiper loop设为true时，同时你又改变了sliderPerview的值，这时候轮播，按prev按钮到第一个时，会出现空白页；

解决办法：sliderPerview设置为auto,loopSliders设置你想要同时显示的slide个数；

#### 2.当swiper-slide为动态添加的内容时，swiper的滑动动效会失效；

解决办法：初始化中设置observer为true;observerParent为true;
<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582190492713&di=de4350296324f09bd6b081ec6832ebd2&imgtype=0&src=http%3A%2F%2Fimg.jk51.com%2Fimg_jk51%2F379132336.jpeg" width="50%" class="img1">
<video src="/i/movie.ogg" controls="controls">
your browser does not support the video tag
</video>