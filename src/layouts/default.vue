<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
if (process.browser) {
  // Prevent scroll
  document.querySelector("html").addEventListener('touchmove', function(e) { e.preventDefault() }, false);
  document.querySelector("body").addEventListener('touchmove', function(e) { e.preventDefault() }, false);
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #333;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
