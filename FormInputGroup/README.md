# 基于 vue.ant.design 的表单库

https://vue.ant.design/components/card-cn/

## 效果图
![](https://i.loli.net/2019/08/01/5d42adf0b7cbd41259.png)

## 使用

> 你的项目得有`vue.ant.design`才能完美运行此组件

```vue
<div class="form-storage-list">
  <a-form>
    <div v-for="(item, index) of InputGroup" :key="index">
      <a-form-item
        :label="item.name"
      >
        <form-storage :config="item"></form-storage>
      </a-form-item>
    </div>
  </a-form>
</div>
```

```vue
<script>
import FormStorage from "@/components/form-storage";
export default {
  name: "test-carousel",
  components: {
    FormStorage
  },
  data() {
    return {
      InputGroup: [
        {
          type: "input",
          name: "名字:",
          fields: "name",
          defaultValue: "",
          placeholder: "请输入名字"
        },
        {
          type: "select",
          name: "来源类型:",
          fields: "type",
          option: [
            { key: "类型1", value: "类型1" },
            { key: "类型2", value: "类型2" },
            { key: "类型3", value: "类型3" },
            { key: "类型4", value: "类型4" }
          ],
          placeholder: "请选择"
        },
        {
          type: "radioGroup",
          name: "来源类型:",
          fields: "type",
          option: [
            { key: "类型1", value: "类型1" },
            { key: "类型2", value: "类型2" },
            { key: "类型3", value: "类型3" },
            { key: "类型4", value: "类型4" }
          ],
          placeholder: "请选择"
        },
        {
          name: "文本域:",
          type: "textArea"
        }
      ]
    };
  }
};
</script>
```

### 参数说明


1. `fields`：传给后台的参数
2. `type`：input的类型
3. `name`：label名称
4. `option`：只有当`input`为多个参数使用，比如`select`、`radioGroup`等，具体使用看源码 `form-storage.vue`
5. `placeholder`：placeholder提示


> 具体参数详细源码 `form-storage.vue`

💥 地址组件没有写，是因为要用到的关联组件太多了，所以砍掉了...

```vue
//地址组件
mapLoad() {},
```