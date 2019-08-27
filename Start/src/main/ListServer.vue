<template lang="html">
  <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <my-server v-for="index in servers" :__indexList="index"></my-server>
      </ul>
  </div>
</template>

<script>
import Server from "./Server.vue"
export default {
  props: ["__indexList"],
  components: {
    "my-server": Server
  },
  data: function() {
    return {
      servers: [
        {id: 1, status: "Normal"},
        {id: 2, status: "Critical"},
        {id: 3, status: "Unknown"},
        {id: 4, status: "Idle"},
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
