<template>
  <div id="app">
    <h1>What is scoped style</h1>

    <h2>Bad Example</h2>
    <bad-button></bad-button>

    <bad-container>
      <bad-button></bad-button>
    </bad-container>

    <h2>Good Example with CSS modules</h2>
    <good-button></good-button>

    <good-container>
      <good-button></good-button>
    </good-container>


  </div>
</template>

<script>
import BadContainer from './components/bad/BadContainer.vue'
import BadButton from './components/bad/BadButton.vue'
import GoodContainer from './components/good/css-modules/GoodContainer.vue'
import GoodButton from './components/good/css-modules/GoodButton.vue'

export default {
  name: 'app',
  components: {
    BadContainer,
    BadButton,
    GoodContainer,
    GoodButton
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
