<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="SwitchGroup">
      <a-switch
        :checkedChildren="checkedText"
        :disabled="!canEdit"
        :unCheckedChildren="uncheckedText"
        :defaultChecked="defaultChecked"
        @change="onChange"
      />
    </div>
  </a-form-item>
</template>

<script>
export default {
  name: "SwitchGroup",
  props: {
    canEdit: { type: Boolean, default: true },
    defaultChecked: { type: Boolean, default: true },
    checkedText: { type: String, default: "" },
    uncheckedText: { type: String, default: "" },
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
    label: { type: String, default: "开关" }
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    }
  }
};
</script>

<style scoped></style>
