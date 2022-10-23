export default {
    install(Vue, options) {
        Vue.mixin({
            mounted() {
                console.log('Mounted!');
            }
        });
        Vue.VERSION = 'v2.0.3';
    }
}