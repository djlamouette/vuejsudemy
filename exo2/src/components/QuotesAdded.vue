<template lang="html">
  <div class="quotesStatus">
    <h2>
      Quotes Added
    </h2>
    <div class="quotesBar">
      <div class="movingBar" :style="{ width: __nbQuotes + '0%' }">
      </div>
      <div class="counter">
        {{ __nbQuotes }}/10
      </div>
    </div>
  </div>
</template>

<script>
import { quotesBus } from "../main.js"

export default {
  props: ["__nbQuotes"],
  data: function() {
    return {
      quotes: 0
    }
  },
  // created() {
  //   quotesBus.$on("addQuotes", (status) => {
  //     this.quotes = status;
  //   }),
  //   quotesBus.$on("removeQuotes", (status) => {
  //     this.quotes = status;
  //   })
  // }
}
</script>

<style lang="css" scoped>

  .quotesBar {
    border-radius: 4px;
    text-align: center;
    height: 25px;
    background-color: #f1f1f1;
    box-shadow: 1px 1px 2px #bdbdbd inset;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }

  .movingBar {
    background-color: #77bdde;
    position: absolute;
    width: 80%;
    height: 100%;
    left: 0;
    top: 0;
    transition: 300ms;
  }

  .counter {
    position: relative;
  }

</style>
