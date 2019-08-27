<template lang="html">
  <li class="list-group-item" @click="changeStatus">
      Server #{{ __indexList.id }}, Status: {{ __indexList.status }}
  </li>
</template>

<script>
import { eventBus } from "../main.js"

export default {
  props: ["__indexList"],
  data: function() {
    return {

    };
  },
  methods: {
    changeStatus() {
      eventBus.changeStatus(this.__indexList.status)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
