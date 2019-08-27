<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <my-main></my-main>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Main from "./main/Main.vue";

export default {
  components: {
    "my-header": Header,
    "my-footer": Footer,
    "my-main": Main
  }
}
</script>

<style>

</style>
