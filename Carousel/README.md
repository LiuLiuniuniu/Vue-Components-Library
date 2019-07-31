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
<vue-carousel></vue-carousel>

import VueCarousel from "@/components/carousel";
export default {
  name: "test-carousel",
  components: {
    VueCarousel
  }
};
```

## 传值

```vue
 <vue-carousel :sliders="sliders"></vue-carousel>
 
 data() {
     return {
       sliders: [
         {
           img:
             "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-1.jpg"
         },
         {
           img:
             "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-2.jpg"
         },
         {
           img:
             "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-3.jpg"
         },
         {
           img:
             "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-4.jpg"
         },
         {
           img:
             "https://fengyuanchen.github.io/viewerjs/images/thumbnails/tibet-6.jpg"
         }
       ]
     };
 }
```

#### 不使用 viewerjs

去掉 `id="galley"`即可

