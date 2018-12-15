<template>
  <div id="app">
    <h2>Original Input with $attrs</h2>

    <base-input
      type="number"
      placeholder="number"
      disabled
      v-model="inputValue"
    ></base-input>

    <h2>Original Nested Component with $attrs</h2>

    <nested-parent
      color="red"
      size="14px"
      caption="caption is here"
    />

    <nested-parent
      color="blue"
      size="18px"
      :rounded="true"
    />

    <h2>Original Nested Component with v-bind</h2>

    <nested-parent v-bind="options"/>
  </div>
</template>

<script>
import BaseInput from './components/BaseInput'
import NestedParent from './components/NestedParent'

export default {
  name: "app",
  components: {
    BaseInput,
    NestedParent
  },
  data() {
    return {
      inputValue: '',
      options: {
        color: 'orange',
        size: '10px',
        caption: 'v-bind example'
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
