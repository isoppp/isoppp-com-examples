<template>
<div>
  <input
    v-bind="$attrs"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: String,
  }
}
</script>
