<template>
  <div class="form-storage">
    <a-select
      v-if="config.type == 'select'"
      v-model="config.val"
      :disabled="!can_edit"
      :placeholder="config.placeholder"
      :locale="lang"
      :getPopupContainer="setPopupContainer"
      @change="onSelectChange"
    >
      <a-select-option
        v-for="(item, index) in config.option"
        :key="index"
        :style="setFormItemStyle()"
        :value="item.key"
      >
        {{ item.value }}
      </a-select-option>
    </a-select>
    <a-date-picker
      v-if="config.type == 'datePicker' && config.defaultValue !== ''"
      :style="setFormItemStyle()"
      :defaultValue="config.defaultValue"
      v-model="config.defaultValue"
      showTime
      :disabled="!can_edit"
      @change="onPickerChange"
      @focus="pickerOpenHandle(true)"
      @ok="pickerOkHandle"
      :open.sync="pickerOpen"
      :getCalendarContainer="setPopupContainer"
      :disabledDate="disabledDate"
      :format="config.format"
      :locale="lang"
      :placeholder="config.placeholder"
    >
    </a-date-picker>
    <a-date-picker
      v-else-if="config.type == 'datePicker'"
      :disabled="!can_edit"
      :style="setFormItemStyle()"
      @change="onPickerChange"
      @focus="pickerOpenHandle(true)"
      @ok="pickerOkHandle"
      :open.sync="pickerOpen"
      showTime
      :getCalendarContainer="setPopupContainer"
      :disabledDate="disabledDate"
      :format="config.format"
      :locale="lang"
      :placeholder="config.placeholder"
    >
    </a-date-picker>
    <a-month-picker
      v-if="config.type == 'monthPicker'"
      :style="setFormItemStyle()"
      :defaultValue="config.defaultValue"
      :disabled="!can_edit"
      @change="onPickerChange"
      @ok="pickerOkHandle"
      showTime
      :getCalendarContainer="setPopupContainer"
      :format="config.format"
      :locale="lang"
      :placeholder="config.placeholder"
    >
    </a-month-picker>
    <a-time-picker
      v-if="config.type == 'timePicker'"
      :style="setFormItemStyle()"
      :disabled="!can_edit"
      @change="onPickerChange"
      @ok="pickerOkHandle"
      showTime
      :getPopupContainer="setPopupContainer"
      :locale="lang"
      :defaultValue="config.defaultValue"
      :format="config.format"
    />
    <a-range-picker
      :locale="lang"
      v-if="config.type == 'timerange' && config.defaultValue !== ''"
      @change="onPickerChange"
      @ok="pickerOkHandle"
      :defaultValue="config.defaultValue"
      :format="config.format"
      :showTime="
        config.showTimeDefault
          ? {
              defaultValue: config.showTimeDefault
            }
          : false
      "
      :getPopupContainer="setPopupContainer"
      :disabled="!can_edit"
      :disabledDate="disabledDate"
      :disabledTime="disabledRangeTime"
      style="width: 100%;"
    />
    <a-range-picker
      :locale="lang"
      v-else-if="config.type == 'timerange'"
      :format="config.format"
      @change="onPickerChange"
      @ok="pickerOkHandle"
      :showTime="
        config.showTimeDefault
          ? {
              defaultValue: config.showTimeDefault
            }
          : false
      "
      :getPopupContainer="setPopupContainer"
      :disabled="!can_edit"
      :disabledDate="disabledDate"
      :disabledTime="disabledRangeTime"
      style="width: 100%;"
    />
    <a-input
      :style="setFormItemStyle()"
      v-if="config.type == 'input'"
      v-model="config.val"
      @change="onChange"
      :disabled="!can_edit"
      :defaultValue="config.defaultValue"
      :placeholder="config.placeholder"
    >
    </a-input>
    <a-input-number
      v-if="config.type == 'inputNumber'"
      style="width: 100%;"
      pattern="[0-9]*"
      :disabled="!can_edit"
      oninput="if(value.length>11)value=value.slice(0,11)"
      :defaultValue="config.defaultValue"
      :placeholder="config.placeholder"
    />
    <a-radio-group
      v-if="config.type == 'radioGroup'"
      v-model="config.val"
      @change="onChange"
      name="radioGroup"
      :disabled="!can_edit"
    >
      <a-radio v-for="item of config.option" :value="item.value"
        >{{ item.key }}
      </a-radio>
    </a-radio-group>
    <a-textarea
      v-if="config.type == 'textArea'"
      v-model="config.val"
      @change="onChange"
      :disabled="!can_edit"
      :defaultValue="config.defaultValue"
      :placeholder="config.placeholder"
    />
    <a-upload
      v-if="config.type == 'file'"
      name="file"
      :multiple="true"
      action="//jsonplaceholder.typicode.com/posts/"
      :headers="headers"
      @change="handleChange"
      :disabled="!can_edit"
      :remove="() => can_edit"
      :locale="lang"
    >
      <a-button type="primary">
        选择文件
      </a-button>
    </a-upload>
    <span v-if="config.type == 'auto'">
      {{ config.val }}
    </span>
    <a-input
      :style="setFormItemStyle()"
      v-if="config.type == 'idcard'"
      @change="onChange"
      v-model="config.val"
      oninput="if(value.length>18)value=value.slice(0,18);value=value.replace(/[^x^\d]/g, '');"
      :disabled="!can_edit"
      :placeholder="config.placeholder"
    >
    </a-input>
    <a-input-number
      v-if="config.type == 'money'"
      v-model="config.val"
      @change="onChange"
      :precision="parseInt(2)"
      class="input-money"
      :placeholder="config.placeholder"
      :disabled="!can_edit"
      :min="0"
      :formatter="value => `￥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '')"
      :parser="value => value.replace(/\￥\s?|(,*)/g, '')"
    ></a-input-number>
    <a-input
      :style="setFormItemStyle()"
      v-if="config.type == 'number'"
      v-model="config.val"
      :min="0"
      @change="onChange"
      type="number"
      :disabled="!can_edit"
      :placeholder="config.placeholder"
    >
    </a-input>
    <a-input
      :style="setFormItemStyle()"
      v-if="config.type == 'phone'"
      @change="onChange"
      v-model="config.val"
      oninput="if(value.length>11)value=value.slice(0,11);value=value.replace(/[^\d]/g, '');"
      :disabled="!can_edit"
      :placeholder="config.placeholder"
    >
    </a-input>
    <a-checkbox-group
      :disabled="!can_edit"
      @change="checkboxChange"
      v-if="config.type == 'checkbox'"
      v-model="config.val"
    >
      <a-checkbox
        v-for="(item, index) in config.option_data"
        :key="index"
        :value="item.id"
      >
        {{ item.name }}
      </a-checkbox>
    </a-checkbox-group>
    <div v-if="config.type == 'location'">
      <a-row>
        <a-col :span="16">
          <a-input
            :style="setFormItemStyle()"
            v-model="address"
            :disabled="!can_edit"
            @change="addressChange"
            :placeholder="config.placeholder"
            :readOnly="config.subtype !== 'location_text'"
          ></a-input>
        </a-col>
        <a-col :span="2">
          <a-button
            v-if="can_edit"
            style="margin-left: 20px"
            type="primary"
            @click="mapLoad"
            >选择位置
          </a-button>
        </a-col>
      </a-row>
      <a-input name="v-model" v-model="location"></a-input>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  DatePicker,
  TimePicker,
  Radio,
  Upload,
  Checkbox
} from "ant-design-vue";
import ATextarea from "ant-design-vue/es/input/TextArea";
import { lang } from "../config/config.js";
import moment from "@/plugins/moment.js";

Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Radio);
Vue.use(Upload);
Vue.use(Checkbox);
export default {
  name: "form-storage",
  components: { ATextarea },
  props: {
    can_edit: { default: () => true },
    value: { require: true },
    config: { default: {} }
  },
  data() {
    return {
      lang,
      pickerOpen: false,
      pickedTime: undefined,
      selectVal: "",
      checkbox_val: [],
      val: this.config.val || "",
      headers: {
        authorization: "authorization-text"
      },
      address: this.config.address || "",
      location: this.config.location || "", // 经纬度
      _name: ""
    };
  },
  created() {
    if (this.config.type == "select") {
      if (this.config.output == "Array") {
        let value = String(this.config.val).trim() ? [this.config.val] : "";
        this.$emit("input", value);
      }
    }
    if (this.config.fields == "time") {
      if (
        this.config.val instanceof Array &&
        this.config.val.length == 2 &&
        typeof this.config.val[0] != "object"
      ) {
        this.config.defaultValue = [
          moment(this.config.val[0] * 1000),
          moment(this.config.val[1] * 1000)
        ];
      }
    }
    this._name = this.config._name ? this.config._name : "";
    this.updateCaseTime(moment(this.config.val).valueOf() / 1000, false);
    this.updateCaseAddress(this.config.address, false);
    this.updateCaseFrom(this.config.val, false);
  },
  methods: {
    mapLoad() {},
    setPopupContainer() {
      return this.$el;
    },
    setFormItemStyle() {
      return "width: 100%";
    },
    addressChange(val) {
      console.log(val);
      val = typeof val === "object" ? val.target.value : val;
      let loc = this.location.split(",");
      this.$emit("input", { address: val, lat: loc[1], lng: loc[0] });
    },
    onChange(val) {
      console.log(val.target.value);
      val = typeof val === "object" ? val.target.value : val;
      this.$emit("input", val);
    },
    checkboxChange(checkedValues) {
      this.$emit("input", checkedValues);
    },
    onSelectChange(value) {
      console.log(value);
      //后端要求这里传数组过去
      if (this.config.output == "Array") {
        value = String(value).trim() ? [value] : "";
      }
      //用于生成案情摘要
      this.updateCaseFrom(value);
      this.$emit("input", value);
    },
    pickerOpenHandle(open) {
      if (typeof open === "boolean") {
        this.pickerOpen = open;
      }
    },
    pickerOkHandle() {
      console.log(this.pickedTime);
      this.pickerOpen = false;
    },
    onPickerChange(date) {
      console.log(date);
      //时间段
      if (date instanceof Array) {
        if (date.length < 2) {
          this.pickedTime = { s_time: 0, e_time: 0 };
        } else {
          this.pickedTime = {
            s_time: date[0].startOf("day").format("X"),
            e_time: date[1].endOf("day").format("X")
          };
        }
      } else {
        this.pickedTime = date.endOf("day").format("X");
      }
      this.updateCaseTime(this.pickedTime);
      this.$emit("input", this.pickedTime);
    },
    handleChange(info) {
      console.log(info);
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} 文件上传失败`);
      }
    },
    range(start, end) {
      const result = [];
      for (let i = start; i < end; i++) {
        result.push(i);
      }
      return result;
    },
    disabledDate(current) {
      if (
        this._name == "lian_time" ||
        this._name == "case_time" ||
        this.config.fields == "case_time"
      ) {
        return current && current > moment().endOf("day");
      } else {
        return false;
      }
    },
    disabledRangeTime(_, type) {
      if (type === "start") {
        return {
          disabledHours: () => this.range(0, 60).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56]
        };
      }
      return {
        disabledHours: () => this.range(0, 60).splice(20, 4),
        disabledMinutes: () => this.range(0, 31),
        disabledSeconds: () => [55, 56]
      };
    },
    updateCaseTime(time, update) {
      if (time && this._name == "case_time") {
        this.$store.commit("updateSummary", {
          key: this._name,
          value: time,
          update: update
        });
      }
    },
    updateCaseAddress(address, update) {
      if (address && this._name == "case_address") {
        this.$store.commit("updateSummary", {
          key: this._name,
          value: address,
          update: update
        });
      }
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
  }
};
</script>

<style scoped lang="scss"></style>
