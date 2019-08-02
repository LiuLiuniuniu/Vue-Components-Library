<template>
  <a-form-item :label="label" :label-col="labelCol" :wrapper-col="wrapperCol">
    <div class="uploadFile">
      <a-upload
        name="file"
        :multiple="true"
        :action="action"
        :headers="headers"
        @change="handleChange"
        :disabled="!canEdit"
        :remove="() => canEdit"
        :locale="lang"
      >
        <a-button type="primary">
          选择文件
        </a-button>
      </a-upload>
    </div>
  </a-form-item>
</template>

<script>
import Vue from "vue";
import { Upload } from "ant-design-vue";
Vue.use(Upload);
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
  name: "UploadFile",
  props: {
    canEdit: { type: Boolean, default: true },
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
    label: { type: String, default: "label" },
    placeholder: {
      type: String,
      default: function() {
        return "文件上传";
      }
    }
  },
  data() {
    return {
      lang,
      headers: {
        authorization: "authorization-text"
      },
      action: "//jsonplaceholder.typicode.com/posts/"
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        console.log(`${info.file.name} 文件上传成功`);
        // this.$message.success(`${info.file.name} 文件上传成功`);
      } else if (info.file.status === "error") {
        console.error(`${info.file.name} 文件上传失败`);
        // this.$message.error(`${info.file.name} 文件上传失败`);
      }
    }
  }
};
</script>

<style scoped></style>
