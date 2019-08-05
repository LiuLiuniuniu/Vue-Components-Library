<template>
  <div class="FromInput">
    <a-form>
      <async-components
        v-for="(item, index) in checkboxGroup"
        :key="index"
        :component="item.module"
        :option="item.data.option"
        :can-edit="item.data.canEdit"
        :placeholder="item.data.placeholder"
        v-model="item.value"
      ></async-components>
      <async-components
        v-for="(item, index) in radioGroup"
        :key="index"
        :component="item.module"
        :option="item.data.option"
        :can-edit="item.data.canEdit"
        :placeholder="item.data.placeholder"
        v-model="item.value"
      ></async-components>
      <async-components
        v-for="(item, index) in inputsGroup"
        :key="index"
        :component="item.module"
        :type="item.data.type"
        :can-edit="item.data.canEdit"
        :placeholder="item.data.placeholder"
        v-model="item.value"
      ></async-components>

      <async-components
        v-for="(item, index) in selectGroup"
        :key="index"
        :component="item.module"
        :option="item.data.option"
        :can-edit="item.data.canEdit"
        :placeholder="item.data.placeholder"
        v-model="item.value"
      ></async-components>
      <async-components
        v-for="(item, index) in textAreaGroup"
        :key="index"
        :component="item.module"
        :can-edit="item.data.canEdit"
        :placeholder="item.data.placeholder"
        v-model="item.value"
      ></async-components>

      <async-components
        v-for="(item, index) in locationGroup"
        :key="index"
        :component="item.module"
        :can-edit="item.data.canEdit"
        :placeholder="item.data.placeholder"
        v-model="item.value"
      ></async-components>

      <async-components
        v-for="(item, index) in uploadFile"
        :key="index"
        :component="item.module"
        :can-edit="item.data.canEdit"
      ></async-components>

      <async-components
        v-for="(item, index) in timePickerGroup"
        :key="index"
        :component="item.module"
        :can-edit="item.data.canEdit"
        :type="item.data.type"
        v-model="item.value"
        :label="item.data.label"
        :placeholder="item.data.placeholder"
      ></async-components>

      <async-components
        v-for="(item, index) in switchGroup"
        :key="index"
        :component="item.module"
        :label="item.data.label"
      ></async-components>

      <async-components
        v-for="(item, index) in treeGroup"
        :key="index"
        :component="item.module"
        :label="item.data.label"
        :type="item.data.type"
      ></async-components>
    </a-form>
  </div>
</template>

<script>
import Vue from "vue";
import asyncComponents from "./async-components/index.vue";
Vue.component("async-components", asyncComponents);
export default {
  name: "FromInput",
  data() {
    return {
      checkboxGroup: {
        a: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/checkboxGroup.vue"),
          data: {
            option: [{ value: 1, name: "name1" }, { value: 2, name: "name2" }],
            placeholder: "13131231"
          }
        }
      },
      inputsGroup: {
        v: {
          value: 32132131,
          module: () => import("@/components/fromInputGroup/inputGroup.vue"),
          data: {
            type: "money",
            placeholder: "1312312312"
          }
        },
        c: {
          value: 123,
          module: () => import("@/components/fromInputGroup/inputGroup.vue"),
          data: {
            type: "phone",
            placeholder: "1312312312"
          }
        },
        k: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/inputGroup.vue"),
          data: {
            type: "input",
            placeholder: "1312312312"
          }
        }
      },
      radioGroup: {
        radioGroup1: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/radioGroup.vue"),
          data: {
            option: [
              { value: 1, name: "value1" },
              { value: 2, name: "value2" }
            ],
            placeholder: "sadasasds"
          }
        }
      },
      selectGroup: {
        selectGroup1: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/selectGroup.vue"),
          data: {
            option: [
              { value: 1, name: "select1" },
              { value: 2, name: "select2" }
            ],
            placeholder: "aaa"
          }
        },
        selectGroup2: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/selectGroup.vue"),
          data: {
            option: [
              { value: 1, name: "select3" },
              { value: 2, name: "select4" }
            ],
            placeholder: "bbbb"
          }
        }
      },
      textAreaGroup: {
        textAreaGroup1: {
          value: "sadasasdassadasda",
          module: () => import("@/components/fromInputGroup/textAreaGroup.vue"),
          data: {
            placeholder: "1312312312"
          }
        }
      },
      locationGroup: {
        location1: {
          value: "sadsasaas11113213124",
          module: () => import("@/components/fromInputGroup/location.vue"),
          data: {
            placeholder: "地址"
          }
        }
      },
      uploadFile: {
        uploadFile1: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/uploadFile.vue"),
          data: {
            canEdit: true
          }
        }
      },
      timePickerGroup: {
        timePickerGroup1: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/timePicker.vue"),
          data: {
            canEdit: true,
            placeholder: "时间选择器",
            type: "date-picker",
            label: "时间选择器"
          }
        },
        timePickerGroup2: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/timePicker.vue"),
          data: {
            canEdit: true,
            placeholder: "月份选择器",
            type: "month-picker"
          }
        },
        timePickerGroup3: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/timePicker.vue"),
          data: {
            canEdit: true,
            placeholder: "开始结束选择器",
            type: "range-picker"
          }
        },
        timePickerGroup4: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/timePicker.vue"),
          data: {
            canEdit: true,
            placeholder: "周期选择器",
            type: "week-picker"
          }
        },
        timePickerGroup5: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/timePicker.vue"),
          data: {
            canEdit: true,
            placeholder: "时间选择框",
            type: "time-picker"
          }
        }
      },
      switchGroup: {
        switchGroup1: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/switchGroup.vue"),
          data: {
            label: "开关选择框"
          }
        }
      },
      treeGroup: {
        treeGroup1: {
          value: undefined,
          module: () => import("@/components/fromInputGroup/treeGroup.vue"),
          data: {
            label: "树选择框",
            type: "treeSingleSelected"
          }
        }
      }
    };
  }
};
</script>

<style scoped></style>
