<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', type: 'text/css', href: '//unpkg.com/katex/dist/katex.min.css' }
    ]
  }
}
</script>


<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
