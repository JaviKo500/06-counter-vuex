<template>
  <h1>Counter - vuex</h1>
  <h2>Direct Access: {{ $store.state.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementByRandomInt">Random</button>

  <h1>Map State</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
  <h2>lastRandomInt: {{ lastRandomInt }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'CounterNum',
    // computed: mapState(['count'])
    computed: {
      countComputed() {
        return this.$store.state.count
      },
      ...mapState(['count', 'lastMutation', 'lastRandomInt']),
      // ...mapState({
      //   count: state => state.count,
      //   lastMutation: 'lastMutation'
      // })
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      incrementBy() {
        this.$store.commit('incrementBy', 5)
        // this.incrementByRandomInt()
      },
      // incrementByRandomInt() {
        //   this.$store.dispatch( 'incrementByRandomInt' )
        // }
      // ...mapActions(['incrementByRandomInt'])
      ...mapActions({
        incrementByRandomInt: 'incrementByRandomInt',
      })

    }
}
</script>

<style>

</style>