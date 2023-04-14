<template>
  <h1>Counter - vuex</h1>
  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementByRandom">Random</button>

  <h1>Map State</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'CounterNum',
    // computed: mapState(['count'])
    computed: {
      countComputed() {
        return this.$store.state.count
      },
      ...mapState(['count', 'lastMutation'])
      // ...mapState({
      //   count: state => state.count,
      //   lastMutation: state => state.lastMutation
      // })
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      incrementBy() {
        this.$store.commit('incrementBy', 5)
      },
      incrementByRandom() {
        this.$store.commit('incrementByRandom')
      }
    }
}
</script>

<style>

</style>