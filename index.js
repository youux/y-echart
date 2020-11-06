import yEchart from "./src/component/y-echart"
import _Vue from "vue"

yEchart.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(yEchart.name, yEchart)
}
export default yEchart
