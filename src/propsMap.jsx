import {
  ElInput,
  ElInputNumber,
  ElSlider,
  ElRadioGroup,
  ElRadioButton,
  ElSelect,
  ElOption,
  ElColorPicker
} from 'element-plus'
import 'element-plus/theme-chalk/el-input.css'
import 'element-plus/theme-chalk/el-input-number.css'
import 'element-plus/theme-chalk/el-slider.css'
import 'element-plus/theme-chalk/el-radio-group.css'
import 'element-plus/theme-chalk/el-radio-button.css'
import 'element-plus/theme-chalk/el-select.css'
import 'element-plus/theme-chalk/el-option.css'
import 'element-plus/theme-chalk/el-color-picker.css'
import 'element-plus/theme-chalk/el-button.css'

const fontFamilyArr = [
  { label: '宋体', value: 'SimSun,STSong' },
  { label: '黑体', value: 'SimHei,STHeiti' },
  { label: '楷体', value: 'KaiTi,STKaiti' },
  { label: '仿宋', value: 'FangSong,STFangsong' }
]
const fontFamilyOptions = fontFamilyArr.map(font => {
  return {
    value: font.value,
    label: <span style={{ fontFamily: font.value }}>{font.label}</span>
  }
})
const pxToNumberHandler = {
  component: ElInputNumber,
  initalTransform: v => parseInt(v),
  afterTransform: e => (e ? `${e}px` : '')
}

export const mapPropsToForms = {
  text: {
    text: '文本',
    component: ElInput,
    extraProps: { rows: 3, type: 'textarea' },
    eventName: 'input'
  },
  fontSize: {
    text: '字号',
    ...pxToNumberHandler
  },
  lineHeight: {
    text: '行高',
    component: ElSlider,
    extraProps: { min: 0, max: 3, step: 0.1 },
    eventName: 'input',
    initalTransform: v => parseFloat(v),
    afterTransform: e => e.toString()
  },
  textAlign: {
    component: ElRadioGroup,
    subComponent: ElRadioButton,
    text: '对齐',
    options: [
      { label: 'left', value: '左' },
      { label: 'center', value: '中' },
      { label: 'right', value: '右' }
    ]
  },
  fontFamily: {
    component: ElSelect,
    subComponent: ElOption,
    text: '字体',
    options: [{ value: '', label: '无' }, ...fontFamilyOptions]
  },
  width: {
    text: '宽度',
    ...pxToNumberHandler
  },
  color: {
    component: ElColorPicker,
    text: '字体颜色',
    extraProps: { showAlpha: true }
  }
}
