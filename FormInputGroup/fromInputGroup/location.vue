<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="location">
      <a-row>
        <a-col :span="16">
          <a-input
            :style="setFormItemStyle()"
            v-model="locationValue"
            :disabled="!canEdit"
            @change="addressChange"
            :placeholder="placeholder"
            :readOnly="readOnly"
          ></a-input>
        </a-col>
        <a-col :span="2">
          <a-button
            v-if="canEdit"
            style="margin-left: 20px"
            type="primary"
            @click="mapLoad"
            >选择位置
          </a-button>
        </a-col>
      </a-row>
      <!--      <a-input name="v-model" v-model="location"></a-input>-->
    </div>
  </a-form-item>
</template>

<script>
export default {
  name: "Location",
  props: {
    canEdit: { type: Boolean, default: true },
    readOnly: { type: Boolean, default: true },
    value: { type: String, default: undefined },
    location: { type: String, default: undefined },
    placeholder: { type: String, default: undefined },
    mask: { type: String, default: undefined },
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
      locationValue: undefined,
      address: this.value || "",
      data_location: this.location || "" // 经纬度
    };
  },
  methods: {
    addressChange(val) {
      val = typeof val === "object" ? val.target.value : val;
      let loc = this.data_location.split(",");
      // this.$emit("input", { address: val, lat: loc[1], lng: loc[0] });
    },
    setFormItemStyle() {
      return this.FormItemStyle;
    },
    mapLoad() {}
  },
  created() {
    let { value } = this;
    this.locationValue = value;
  }
};
</script>

<style scoped></style>
