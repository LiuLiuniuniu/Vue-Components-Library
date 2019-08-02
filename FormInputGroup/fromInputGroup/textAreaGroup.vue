<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="textArea">
      <a-textarea
        v-model="TextAreaValue"
        @change="onChange"
        :disabled="!canEdit"
        :placeholder="placeholder"
      />
    </div>
  </a-form-item>
</template>

<script>
import ATextarea from "ant-design-vue/es/input/TextArea";
export default {
  name: "TextAreaGroup",
  data() {
    return {
      TextAreaValue: undefined
    };
  },
  props: {
    canEdit: { type: Boolean, default: true },
    value: { type: [String, Number], default: undefined, require: true },
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
  components: { ATextarea },
  methods: {
    onChange(val) {
      val = typeof val === "object" ? val.target.value : val;
      this.$emit("input", val);
    }
  },
  created() {
    let { value } = this;
    this.TextAreaValue = value;
  }
};
</script>

<style scoped></style>
