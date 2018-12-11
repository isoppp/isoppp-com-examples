<template>
<div class="wrapper">
  <h3>BadContainer</h3>
  <div class="button">ContainerButton</div>
  <slot></slot>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  background-color: gray;
  border: 1px solid blue;

  .button {
    width: 400px;
  }
}

.button {
  background-color: aquamarine;
  padding: 8px;
  width: 200px;
}
</style>
