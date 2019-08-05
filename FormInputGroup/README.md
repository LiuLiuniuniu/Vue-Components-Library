# 基于 vue.ant.design 的表单库

https://vue.ant.design/components/card-cn/

## 效果图
![](https://i.loli.net/2019/08/05/J3l5wxhjoAKUDHb.png)

## 使用

> 你的项目得有`vue.ant.design`才能完美运行此组件

```vue
  <async-components
    v-for="(item, index) in checkboxGroup"
    :key="index"
    :component="item.module"
    :option="item.data.option"
    :can-edit="item.data.canEdit"
    :placeholder="item.data.placeholder"
    v-model="item.value"
  ></async-components>
```

```vue
export default {
    data(){
        checkboxGroup: {
          checkboxGroup1: {
            value: undefined,
            module: () => import("@/components/fromInputGroup/checkboxGroup.vue"),
            data: {
              option: [{ value: 1, name: "name1" }, { value: 2, name: "name2" }],
              placeholder: "13131231"
            }
          }
        },
    }
}
```

### 参数说明


1. `fields`：传给后台的参数
2. `type`：input的类型
3. `label`：label名称
4. `option`：只有当`input`为多个参数使用，比如`select`、`radioGroup`等，具体使用看源码 `form-storage.vue`
5. `placeholder`：placeholder提示


> 具体参数详细源码 `form-storage.vue`

💥 地址组件没有写，是因为要用到的关联组件有限，所以砍掉了...

```vue
//点击唤醒地图
mapLoad() {},
```

### 推荐相似的优秀组件

<p align="center">
    <a href="http://www.form-create.com" rel="nofollow">
        <img width="200" src="https://camo.githubusercontent.com/7b814a1424af0527deaf3c3f7edd86b07dde34f7/687474703a2f2f66696c652e6c6f746b6b2e636f6d2f666f726d2d6372656174652e706e67" data-canonical-src="http://file.lotkk.com/form-create.png" style="max-width:100%;">
    </a>
</p>