## 学习目标：
* 能够独立根据设计稿进行整套项目的需求、刨析及其需求
* 对项目开发流程需求有一定的了解
* 可以灵活运用切图，重构前端知识对项目进行灵活设置
* 提高自己的项目意识和团队意识，对大型项目累计经验

## 开发技能分析：
* 移动端项目，采用html5为项目的结构层
* 分析网页呈现形势，直接采用Css3完成网页的表现层
* 特效分析，采用Css3完成主要特性，采用JavaScript控制交互
* 背景音乐直接采用javaScript控制Audio的API进行控制
* 直接采用原生态的javaScript控制Css实现翻页效果，放弃前端框架和类库

## 性能优化分析：
* 项目为移动端项目，尽可能简化结构层标签
* 尽可能少用图片，尽量直接用Css3控制标签完成图片效果
* 尽可能减少文件大小，压缩图片带无损最小值
* 减少服务器请求次数，用原生态JavaScript代替Zepto等前端框架


## css3 平移，缩放，倾斜，旋转
```
平移：transform:translate(0px,-5px);
缩放：transform:scale(1.5,1.5);
倾斜：transform:skew(-20deg,0deg);
旋转(2D)：transform:rotate(180deg,180deg);
过渡的触发机制：transition:0.8s ease-in-out;
```


## animation css动画参数

```
animation-function  规定动画的速度曲线，默认是"ease"
linear 动画从头到尾的速度是相同的
ease 默认，动画以低速开始，然后加快，在结束时变慢
ease-in 动画以低速开始
ease-out 动画以低速结束
ease-in-out 动画以低速开始和结束
cubic-bezier(n,n,n,n) 在cubic-bezizr函数中自己的值，可能的值是0到1的值
----
animation-delay 规定动画何时开始，默认是0
----
infinite 无限次播放
----
animation-direction
normal '默认'
alternate 动画轮流反向播放
----
```


## 函数addEventListener

"click" 代表注册的什么事件。“click”代表的自然是点击事件，注意前面不加“on”前缀。也可以是其他事件，去掉“on”前缀即可。
callback 回调函数，当事件被触发时调用该函数。
isCapture 是否在捕获阶段执行回调。默认为false

## audio标签和video标签
掘金学习链接：https://juejin.cn/post/6844903885707051016
