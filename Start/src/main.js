import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeStatus(currentStatus) {
      this.$emit('changeStatus', currentStatus);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
