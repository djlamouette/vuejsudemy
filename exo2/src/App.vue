<template>
    <div class="container">

      <quotesAdded :__nbQuotes="quotes.length"></quotesAdded>
      <newQuote :__quotes="quotes"></newQuote>
      <quoteList :__quotes="quotes"></quoteList>
      <infos></infos>
    </div>
</template>

<script>
    import { quotesBus } from "./main.js"

    import quotesAdded from "./components/QuotesAdded.vue";
    import infos from "./components/Infos.vue";
    import newQuote from "./components/insertQuote.vue";
    import quoteList from "./components/quoteList/QuoteList.vue";

    export default {
        components: {
          quotesAdded,
          infos,
          newQuote,
          quoteList
        },
        data: function() {
          return {
            quotes: ["quote1", "quote2", "quote3", "quote4"]
          }
        },
        // created() {
        //   quotesBus.$on("removeQuotes", (index) => {
        //     console.log(index);
            // this.quotes.splice(index);
        //   })
        // }
    }
</script>

<style>
</style>
