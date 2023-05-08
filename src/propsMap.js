import { ElInput, ElInputNumber, ElSlider } from 'element-plus'
import 'element-plus/theme-chalk/el-input.css'
import 'element-plus/theme-chalk/el-input-number.css'
import 'element-plus/theme-chalk/el-slider.css'

export const mapPropsToForms = {
  text: {
    text: '文本',
    component: ElInput,
    extraProps: { rows: 3, type: 'textarea' }
  },
  fontSize: {
    text: '字号',
    component: ElInputNumber
  },
  lineHeight: {
    text: '行高',
    component: ElSlider,
    extraProps: { min: 0, max: 3, step: 0.1 }
  }
}
