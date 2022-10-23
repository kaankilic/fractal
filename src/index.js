import model from './model';
export default {
    install(Vue, options) {
        Vue.prototype.$fractal = model;
        Vue.VERSION = 'v2.0.3';
    }
}