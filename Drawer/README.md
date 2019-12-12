<a href="http://p2.so.qhmsg.com/t01d67d1500eb19f8f2.jpg" target="_blank"><img src="http://p2.so.qhmsg.com/t01d67d1500eb19f8f2.jpg" width="500" /></a>
# 使用 (Use)
```vue
import SimpleDrawer from "@/components/Drawer";
```

```vue
<simple-drawer ref="RightDrawerCss" @close="onDrawerClose">
  <h1>Simple-Drawer</h1>
</simple-drawer>
```
## 打开 (open)

```vue
openDrawer() {
  this.$refs.RightDrawerCss.active
    ? this.$refs.RightDrawerCss.close()
    : this.$refs.RightDrawerCss.open();
},
```
## 关闭 (close)

```vue
onDrawerClose() {
  this.$refs.RightDrawerCss.active = this.$refs.RightDrawerCss.close();
},
```

## 修改位置？(edit direction ?)

right：

```
  transform: translateX(100%);
  right: 0;
```

left:

```vue
  transform: translateX(-100%);
  left: 0;
```
