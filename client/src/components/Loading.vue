<template>
  <div class="loading">
    <img src="../assets/entropy-loading.gif" />
    <blockquote>
      <p>{{quote}}</p>
      <footer>
        <cite>{{author}}</cite>
      </footer>
    </blockquote>
  </div>
</template>
<script>
const Quote = require("inspirational-quotes");
let inspiration = Quote.getQuote();

export default {
  data() {
    return {
      quote: inspiration.text,
      author: inspiration.author
    };
  }
};
</script>
<style>
.loading{
  display: flex; align-items: center; flex-direction: column;
}
</style>
