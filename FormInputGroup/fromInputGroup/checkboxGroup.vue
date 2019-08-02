<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="checkboxGroup">
      <a-checkbox-group
        :disabled="!canEdit"
        @change="checkboxChange"
        v-model="checkboxVal"
      >
        <a-checkbox
          v-for="(item, index) in option"
          :key="index"
          :value="item.value"
        >
          {{ item.name }}
        </a-checkbox>
      </a-checkbox-group>
    </div>
  </a-form-item>
</template>

<script>
import Vue from "vue";
import { Checkbox } from "ant-design-vue";
Vue.use(Checkbox);
export default {
  name: "CheckboxGroup",
  data() {
    return {
      checkboxVal: undefined
    };
  },
  props: {
    value: { type: [Array, String], default: undefined },
    canEdit: { type: Boolean, default: true },
    defaultVal: { type: [Array, String], default: undefined },
    option: { type: Array, default: () => [] },
    label: { type: String, default: "label" },
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
    }
  },
  created() {
    let { defaultVal } = this;
    this.checkboxVal =
      defaultVal instanceof Array ? [...defaultVal] : defaultVal;
  },
  methods: {
    checkboxChange(checkedValues) {
      this.$emit("input", checkedValues);
    }
  }
};
</script>

<style scoped></style>
