<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="radioGroup">
      <a-radio-group v-model="radioVal" @change="onChange" :disabled="!canEdit">
        <a-radio
          v-for="(item, index) of option"
          :key="index"
          :value="item.value"
          >{{ item.name }}
        </a-radio>
      </a-radio-group>
    </div>
  </a-form-item>
</template>

<script>
import Vue from "vue";
import { Radio } from "ant-design-vue";
Vue.use(Radio);
export default {
  name: "RadioGroup",
  data() {
    return {
      radioVal: undefined
    };
  },
  props: {
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
    },
    placeholder: { type: String, default: undefined }
  },
  methods: {
    onChange(val) {
      val = typeof val === "object" ? val.target.value : val;
      this.$emit("input", val);
    }
  },
  created() {
    let { defaultVal } = this;
    this.radioVal = defaultVal instanceof Array ? [...defaultVal] : defaultVal;
  }
};
</script>

<style scoped></style>
