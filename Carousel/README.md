<p align="center">
<img src="https://i.loli.net/2019/07/31/5d415c583cca181681.png" alt="2.png" title="2.png" />
</p>

# 跑马灯+Viewerjs

## 使用方法

#### 安装 Viewerjs

https://github.com/fengyuanchen/viewerjs/blob/master/README.md

#### 使用

```vue
<v-carousel :slideData="slideData" :height="450" :begin="0" :interval="3000" :dot="true" :arrow="true"></v-carousel>
```

```vue
import VCarousel from "@/components/carousel";
export default {
  name: "test-carousel",
  components: {
    VCarousel
  }
};
```

## 传值

```
data() {
    return {
      slideData: [
        // 图片的src,图片的超链接
        {
          src:
            "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg",
        },
        {
          src:
            "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-2.jpg",
        },
        {
          src:
            "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-3.jpg",
        },
        {
          src:
            "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-4.jpg",
        },
        {
          src:
            "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-5.jpg",
        }
      ]
    };
  }
```

#### props参数

1. `height`：高度
1. `dot`：图片数量走势
1. `arrow`：左右指向
1. `count`：右上角图片数量
1. `interval`：定时器
1. `begin`：略
1. `slideData`：图片数据


#### 不使用 viewerjs

去掉 `id="galley"`即可

#### 改为弹出样式

![](https://i.loli.net/2019/08/07/wS5Jagtqdef1pyV.png)

> 图片垂直自适应居中 

```
.slide li img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  user-select: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

