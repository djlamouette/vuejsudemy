<template lang="html">
  <div>
    <ul>
      <quote v-for="(quote, index) in __quotes" :__quote="quote" :__index="index" :__quotes="__quotes"></quote>
    </ul>
  </div>
</template>

<script>
import quote from "./Quote.vue";

export default {
  props: ["__quotes"],
  components: {
    quote
  }
}
</script>

<style lang="css" scoped>
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
  }
</style>
