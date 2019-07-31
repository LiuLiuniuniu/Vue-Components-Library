<p align="center">
<img src="https://i.loli.net/2019/07/31/5d4159813a07175069.gif" alt="view.gif" title="view.gif" />
</p>

# 跑马灯

## 使用方法

```
<vue-carousel></vue-carousel>
```

```
import VueCarousel from "@/components/carousel";
export default {
  name: "test-carousel",
  components: {
    VueCarousel
  }
};
```

## 传值

```
 <vue-carousel :sliders="sliders"></vue-carousel>
```

```
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

