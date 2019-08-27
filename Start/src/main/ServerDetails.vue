<template lang="html">
  <div class="col-xs-12 col-sm-6">
      <p>{{ currentStatus }}</p>
      <button @click="setToNormal">Set to normal</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js"

export default {
  props: ["__statusDetail"],
  data: function() {
    return {
      currentStatus: "Normal"
    };
  },
  methods: {
    setToNormal() {
      eventBus.changeStatus('Normal');
    }
  },
  created() {
    eventBus.$on("changeStatus", (status) => {
      this.currentStatus = status;
    });
  }
}
</script>

<style lang="css" scoped>
</style>
