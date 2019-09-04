<template lang="html">
  <li @click="removeQuote">{{ __quote }}</li>
</template>

<script>
// import { quotesBus } from "../../main.js"
export default {
  props: ["__quote", "__index", "__quotes"],
  data: function() {
    return {
      index: ""
    }
  },
  methods: {
    removeQuote: function (e) {
      let content = e.target.innerText;
      for (var i = 0; i < this.__quotes.length; i++) {
        if (this.__quotes[i] === content) {
          this.__quotes.splice(i,1);
        }
      }
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
    font-size: 40px;
    width: 31.3333%;
    margin: 1%;
    cursor: pointer;
    transition: 0.3s;
    transform-origin: left top;
  }

  li:hover {
    background-color: rgb(255, 204, 204);
    transition: 0.3s;
    transform: rotate(1deg);
    transform-origin: left top;
    box-shadow: 3px 3px 5px rgb(164, 164, 164);
  }
</style>
