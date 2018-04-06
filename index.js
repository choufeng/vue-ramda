/* eslint-disable */
const R = require('ramda')

const genericInstall = (Vue) => {
  Vue.$R = R
  Object.defineProperties(Vue.prototype, { $R: { get() { return R } } })
}

const VueRamda = {
  install (Vue) {
    genericInstall(Vue)
    Vue.mixin({})
    R.ifElse(R.and(R.compose(R.not, R.isNil), R.has('Vue')), (win) => { win.Vue.use(VueRamda) }, () => {})(window)
  }
}

export default VueRamda
