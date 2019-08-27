<template lang="html">
  <div class="row">
      <div class="col-xs-12">
          <footer>
              <p>{{ footer }}</p>
          </footer>
      </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      footer: "All Servers are managed here"
    };
  }
}
</script>

<style lang="css" scoped>
</style>
