<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="inputGroup">
      <a-input
        :style="setFormItemStyle()"
        v-if="type == 'input'"
        v-model="InputValue"
        @change="onChange"
        :disabled="!canEdit"
        :placeholder="placeholder"
      >
      </a-input>
      <a-input-number
        v-if="type == 'inputNumber'"
        :style="setFormItemStyle()"
        pattern="[0-9]*"
        :disabled="!canEdit"
        v-model="InputValue"
        oninput="if(value.length>11)value=value.slice(0,11)"
        :placeholder="placeholder"
      />
      <a-input
        :style="setFormItemStyle()"
        v-if="type == 'idcard'"
        @change="onChange"
        v-model="InputValue"
        oninput="if(value.length>18)value=value.slice(0,18);value=value.replace(/[^x^\d]/g, '');"
        :disabled="!canEdit"
        :placeholder="placeholder"
      >
      </a-input>
      <a-input-number
        v-if="type == 'money'"
        v-model="InputValue"
        @change="onChange"
        :precision="parseInt(2)"
        class="input-money"
        :placeholder="placeholder"
        :disabled="!canEdit"
        :min="0"
        :style="setFormItemStyle()"
        :formatter="value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '')"
        :parser="value => value.replace(/\￥\s?|(,*)/g, '')"
      ></a-input-number>
      <a-input
        :style="setFormItemStyle()"
        v-if="type == 'number'"
        v-model="InputValue"
        :min="0"
        @change="onChange"
        type="number"
        :disabled="!canEdit"
        :placeholder="placeholder"
      ></a-input>
      <a-input
        :style="setFormItemStyle()"
        v-if="type == 'phone'"
        @change="onChange"
        v-model="InputValue"
        oninput="if(value.length>11)value=value.slice(0,11);value=value.replace(/[^\d]/g, '');"
        :disabled="!canEdit"
        :placeholder="placeholder"
      >
      </a-input>
    </div>
  </a-form-item>
</template>

<script>
export default {
  name: "InputGroup",
  props: {
    type: { type: String, default: undefined },
    value: { type: [String, Number], default: undefined },
    canEdit: { type: Boolean, default: true },
    placeholder: { type: String, default: undefined },
    label: { type: String, default: "label" },
    FormItemStyle: {
      type: String,
      default: function() {
        return "width:100%";
      }
    },
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
  data() {
    return {
      InputValue: undefined
    };
  },
  methods: {
    setFormItemStyle() {
      return this.FormItemStyle;
    },
    onChange(val) {
      val = typeof val === "object" ? val.target.value : val;
      this.$emit("input", val);
    }
  },
  created() {
    let { value } = this;
    this.InputValue = value;
  }
};
</script>

<style scoped></style>
