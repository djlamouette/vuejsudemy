<template lang="html">
  <div class="row">
      <div class="col-xs-12">
          <header>
              <h1>{{ headerTitle }}</h1>
          </header>
      </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        headerTitle: "Server Status"
      };
    }
  }
</script>

<style lang="css" scoped>
</style>
