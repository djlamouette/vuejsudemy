<template lang="html">
  <div class="row">
      <my-list-server></my-list-server>
      <my-server-details></my-server-details>
  </div>
</template>

<script>
import ListServer from "./ListServer.vue";
import ServerDetails from "./ServerDetails.vue";

export default {
  components: {
    "my-list-server": ListServer,
    "my-server-details": ServerDetails
  },
  data: function() {
    return {
    };
  }
}
</script>

<style lang="css" scoped>
</style>
