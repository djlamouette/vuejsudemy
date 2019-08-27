<template lang="html">
  <li @click="removeQuote" :data-index="__index">{{ __quote }}</li>
</template>

<script>
import { quotesBus } from "../../main.js"
export default {
  props: ["__quote", "__index"],
  methods: {
    removeQuote: function (e) {
      let index = e.currentTarget.getAttribute('data-index');
      console.log(index);
      quotesBus.removeQuote(index);
    }
  }
}
</script>

<style lang="css" scoped>
  li {
    display: block;
    font-family: "Arizonia";
    border: 1px solid #b3b3b3;
    border-radius: 4px;
    padding: 20px 10px;
    font-size: 20px;
    width: 31.3333%;
    margin: 1%;
  }
</style>
