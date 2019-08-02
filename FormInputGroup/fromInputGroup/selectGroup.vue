<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="selectGroup">
      <a-select
        :style="setFormItemStyle()"
        v-model="SelectValue"
        :disabled="!canEdit"
        :placeholder="placeholder"
        :getPopupContainer="setPopupContainer"
        @change="onSelectChange"
      >
        <a-select-option
          v-for="(item, index) in option"
          :key="index"
          :value="item.value"
        >
          {{ item.name }}
        </a-select-option>
      </a-select>
    </div>
  </a-form-item>
</template>

<script>
export default {
  name: "SelectGroup",
  props: {
    canEdit: { type: Boolean, default: true },
    defaultVal: { type: [String, Number], default: undefined, require: true },
    placeholder: { type: String, default: undefined },
    option: { type: Array, default: () => [] },
    output: { type: Array, default: () => [] },
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
    FormItemStyle: {
      type: String,
      default: function() {
        return "width:100%";
      }
    }
  },
  data() {
    return {
      _name: "",
      SelectValue: undefined
    };
  },
  methods: {
    setFormItemStyle() {
      return this.FormItemStyle;
    },
    setPopupContainer() {
      return this.$el;
    },
    onSelectChange(value) {
      console.log(value);
      //后端要求这里传数组过去
      if (this.output == "Array") {
        value = String(value).trim() ? [value] : "";
      }
      //用于生成案情摘要
      this.updateCaseFrom(value);
      this.$emit("input", value);
    },
    updateCaseFrom(value, update) {
      if (value && this._name == "case_from") {
        let _value = this.config.option.filter(item => item.key == value);
        this.$store.commit("updateSummary", {
          key: this._name,
          value: _value[0]["value"],
          update: update
        });
      }
    }
  },
  created() {
    if (this.output == "Array") {
      let value = String(this.value).trim() ? [this.value] : "";
      this.$emit("input", value);
    }
    let { defaultVal } = this;
    this.SelectValue =
      defaultVal instanceof Array ? [...defaultVal] : defaultVal;
  }
};
</script>

<style scoped></style>
