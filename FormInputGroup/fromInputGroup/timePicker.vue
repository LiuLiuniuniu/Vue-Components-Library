<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="timePicker">
      <a-date-picker
        v-if="type == 'date-picker'"
        :style="setFormItemStyle()"
        :locale="lang"
        :format="format"
        :disabled="!canEdit"
        :defaultValue="TimePickerValue"
        @change="onPickerChange"
        :getCalendarContainer="setPopupContainer"
        :disabledDate="disabledDate"
      ></a-date-picker>
      <a-month-picker
        v-if="type == 'month-picker'"
        :style="setFormItemStyle()"
        :locale="lang"
        :format="format"
        :disabled="!canEdit"
        :defaultValue="TimePickerValue"
        @change="onPickerChange"
        :getCalendarContainer="setPopupContainer"
        :placeholder="placeholder"
      ></a-month-picker>
      <a-range-picker
        v-if="type == 'range-picker'"
        :style="setFormItemStyle()"
        :locale="lang"
        :format="format"
        :defaultValue="TimePickerValue"
        :disabled="!canEdit"
        @change="onPickerChange"
      ></a-range-picker>
      <a-week-picker
        v-if="type == 'week-picker'"
        :style="setFormItemStyle()"
        :showTime="
          propsShowTimeDefault
            ? {
                value: propsShowTimeDefault
              }
            : false
        "
        :locale="lang"
        :format="format"
        :disabled="!canEdit"
        @change="onPickerChange"
        :getPopupContainer="setPopupContainer"
        :disabledDate="disabledDate"
        :disabledTime="disabledRangeTime"
        :placeholder="placeholder"
        :defaultValue="TimePickerValue"
      ></a-week-picker>
      <a-time-picker
        use12Hours
        v-if="type == 'time-picker'"
        :style="setFormItemStyle()"
        :disabled="!canEdit"
        @change="onTimePickerChange"
        :getPopupContainer="setPopupContainer"
        :locale="lang"
        :defaultValue="TimePickerValue"
        :format="format"
      ></a-time-picker>
    </div>
  </a-form-item>
</template>

<script>
import Vue from "vue";
import { DatePicker, TimePicker } from "ant-design-vue";

Vue.use(DatePicker);
Vue.use(TimePicker);
const lang = {
  lang: {
    placeholder: "请选择日期",
    rangePlaceholder: ["开始日期", "结束日期"],
    today: "今天",
    now: "当前时间",
    backToToday: "返回今天",
    ok: "确定",
    clear: "清除",
    month: "月",
    year: "年",
    timeSelect: "选择时间",
    dateSelect: "选择日期",
    monthSelect: "选择月份",
    yearSelect: "选择年份",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: true,
    previousMonth: "上一月",
    nextMonth: "下一月",
    previousYear: "上一年",
    nextYear: "下一年",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  },
  timePickerLocale: {
    placeholder: "请选择时间"
  }
};
export default {
  name: "TimePicker",
  props: {
    canEdit: { type: Boolean, default: true },
    label: { type: String, default: "label" },
    value: { type: [String, Number], default: undefined },
    placeholder: { type: String, default: undefined },
    type: { type: String, default: undefined },
    fields: { type: String, default: undefined },
    propsShowTimeDefault: { type: [Array, String], default: undefined },
    // "YYYY-MM-DD HH:mm:ss"
    format: { type: String, default: undefined },
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
      lang,
      pickerOpen: false,
      pickedTime: "",
      _name: "",
      TimePickerValue: "",
      ShowTimeDefault: ""
    };
  },
  methods: {
    setFormItemStyle() {
      return this.FormItemStyle;
    },
    onTimePickerChange(date, dateString) {
      console.log(date, dateString);
    },
    onPickerChange(date, dateString) {
      console.log(date, dateString);
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
    disabledDate(current) {
      if (
        this._name == "lian_time" ||
        this._name == "case_time" ||
        this.fields == "case_time"
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
    pickerOpenHandle(open) {
      if (typeof open === "boolean") {
        this.pickerOpen = open;
      }
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
    pickerOkHandle() {
      // console.log(this.pickedTime);
      this.pickerOpen = false;
    },
    setPopupContainer() {
      return this.$el;
    }
  },
  created() {
    let { value, propsShowTimeDefault } = this;
    this.TimePickerValue = value;
    this.ShowTimeDefault = propsShowTimeDefault;
  }
};
</script>

<style scoped></style>
