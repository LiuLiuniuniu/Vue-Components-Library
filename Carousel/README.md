<p align="center">
<img src="https://i.loli.net/2019/07/31/5d415c56ee47078669.png" alt="1.png" title="1.png" />
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
#### 不使用 viewerjs

去掉 `id="galley"`即可

