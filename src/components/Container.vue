<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container"
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>