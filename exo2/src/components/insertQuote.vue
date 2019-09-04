<template lang="html">
  <div class="addQuotesBlock">

    <h3>Quotes</h3>

    <textarea name="Text1" cols="60" rows="4" v-model="quoteInput"></textarea>

    <button type="button" name="button" @click="quoteAdd">Add Quote</button>
  </div>
</template>

<script>
import { quotesBus } from "../main.js"

export default {
  props: ["__quotes"],
  data: function() {
    return {
      quoteInput: null
    }
  },
  methods: {
    // increaseCounter: function() {
    //   quotesBus.addQuote()
    // },
    // decreaseCounter: function() {
    //   console.log("coucou");
    //   quotesBus.removeQuote()
    // }
    quoteAdd: function(event) {
      if (this.__quotes.length <= 9) {
        if (this.quoteInput != undefined && this.quoteInput != "") {
          this.__quotes.push(this.quoteInput);
          this.quoteInput = "";
        } else {
          alert("please type some text");
        }
      } else {
        alert('too many quotes');
      }
    }
  }
}
</script>

<style lang="css" scoped>

  .addQuotesBlock {
    max-width: 500px;
    margin: auto;
    text-align: center;
  }

  h3 {
    text-align: left;
  }

  textarea {
    border-radius: 4px;
    width: 500px;
  }

  button {
    background-color: #77bdde;
    border-radius: 4px;
    padding: 5px 10px;
    color: #fff;
    margin: 10px auto 0;
  }
</style>
