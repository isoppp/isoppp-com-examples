<template>
<div>
  <h3>Nested Parent</h3>
  <div>$attrs: {{ $attrs }}</div>
  <h5 v-if="caption">{{caption}}</h5>
  <div>
    <nested-child-button
      v-bind="$attrs"
    ></nested-child-button>
  </div>
</div>
</template>

<script>
import NestedChildButton from './NestedChildButton'

export default {
  inheritAttrs: true,
  components: {
    NestedChildButton
  },
  props: {
    caption: String,
  }
}
</script>
