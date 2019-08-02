<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="TreeGroup">
      <a-tree-select
        v-if="type == 'treeSingleSelected'"
        showSearch
        style="width: 100%"
        :value="value"
        :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        @change="onChange"
      >
        <a-tree-select-node value="parent 1" title="parent 1" key="0-1">
          <a-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
            <a-tree-select-node
              :selectable="false"
              value="leaf1"
              title="my leaf"
              key="random"
            />
            <a-tree-select-node value="leaf2" title="your leaf" key="random1" />
          </a-tree-select-node>
          <a-tree-select-node
            value="parent 1-1"
            title="parent 1-1"
            key="random2"
          >
            <a-tree-select-node value="sss" key="random3">
              <b style="color: #08c" slot="title">sss</b>
            </a-tree-select-node>
          </a-tree-select-node>
        </a-tree-select-node>
      </a-tree-select>
      <a-tree-select
        v-if="type == 'treeShowFatherSelected'"
        style="width: 100%"
        :treeData="treeData"
        :value="ShowFatherValue"
        @change="onChange"
        treeCheckable
        :showCheckedStrategy="SHOW_PARENT"
        searchPlaceholder="Please select"
      />
      <a-tree-select
        v-if="type == 'treeDoubleSelected'"
        showSearch
        style="width: 100%"
        :value="value"
        :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"
        placeholder="Please select"
        allowClear
        multiple
        treeDefaultExpandAll
        @change="onChange"
        @search="onSearch"
        @select="onSelect"
      >
        <a-tree-select-node value="parent 1" title="parent 1" key="0-1">
          <a-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">
            <a-tree-select-node value="leaf1" title="my leaf" key="random" />
            <a-tree-select-node value="leaf2" title="your leaf" key="random1" />
          </a-tree-select-node>
          <a-tree-select-node
            value="parent 1-1"
            title="parent 1-1"
            key="random2"
          >
            <a-tree-select-node value="sss" key="random3">
              <b style="color: #08c" slot="title">sss</b>
            </a-tree-select-node>
          </a-tree-select-node>
        </a-tree-select-node>
      </a-tree-select>
    </div>
  </a-form-item>
</template>

<script>
import { TreeSelect } from "ant-design-vue";
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const treeData = [
  {
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [
      {
        title: "Child Node1",
        value: "0-0-0",
        key: "0-0-0"
      }
    ]
  },
  {
    title: "Node2",
    value: "0-1",
    key: "0-1",
    children: [
      {
        title: "Child Node3",
        value: "0-1-0",
        key: "0-1-0",
        disabled: true
      },
      {
        title: "Child Node4",
        value: "0-1-1",
        key: "0-1-1"
      },
      {
        title: "Child Node5",
        value: "0-1-2",
        key: "0-1-2"
      }
    ]
  }
];
export default {
  name: "TreeGroup",
  props: {
    type: { type: String, default: undefined },
    labelCol: {
      type: [String, Object],
      default: function() {
        return {
          xs: { span: 24 },
          sm: { span: 5 }
        };
      }
    },
    wrapperCol: {
      type: [String, Object],
      default: function() {
        return {
          xs: { span: 24 },
          sm: { span: 12 }
        };
      }
    },
    label: { type: String, default: "label" }
  },
  data() {
    return {
      treeExpandedKeys: [],
      value: undefined,
      ShowFatherValue: ["0-0-0"],
      treeData,
      SHOW_PARENT
    };
  },
  methods: {
    onChange(value) {
      console.log("onChange ", value);
      this.value = value;
    },
    onSearch() {
      console.log(...arguments);
    },
    onSelect() {
      console.log(...arguments);
    }
  }
};
</script>

<style scoped></style>
