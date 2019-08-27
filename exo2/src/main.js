import Vue from 'vue'
import App from './App.vue'

export const quotesBus = new Vue({
  data: {
    counterQuotes: 1,
    indexQuoteClicked: null
  },
  methods: {
    addQuote() {
      this.$emit('addQuotes', this.counterQuotes++);
    },

    removeQuote() {
      this.$emit('removeQuotes', this.indexQuoteClicked);
      console.log(this.indexQuoteClicked);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
