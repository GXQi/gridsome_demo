---
title: third blog
author: GXQi
excerpt: third excerpt...
date: 2020-01-23
time: 10:49
tags: ['gridsome', 'tag111', 'tag112', 'tag113']
cover_image: './images/third-blog.jpg'
---

#### 1.当swiper loop设为true时，同时你又改变了sliderPerview的值，这时候轮播，按prev按钮到第一个时，会出现空白页；

解决办法：sliderPerview设置为auto,loopSliders设置你想要同时显示的slide个数；

#### 2.当swiper-slide为动态添加的内容时，swiper的滑动动效会失效；

解决办法：初始化中设置observer为true;observerParent为true;
