<template>
  <div
    class="button"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
    :style="styles"
  >
    Nested Child Button Here!! {{ $attrs }}
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    size: String,
    rounded: Boolean,
  },
  computed: {
    styles() {
      return {
        color: this.color,
        'font-size': this.size + 'px',
        'border-radius': this.rounded ? '16px' : null,
      }
    }
  },
}
</script>

<style>
.button {
  width: 320px;
  margin: 0 auto;
  border: 1px solid lightslategray;
  padding: 8px;
}
</style>
