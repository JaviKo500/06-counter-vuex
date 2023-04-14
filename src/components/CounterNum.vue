<template>
  <h1>Counter - vuex</h1>
  <h2>Direct Access: {{ $store.state.counter.count }}</h2>
  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementBy">+5</button>
  <button @click="incrementByRandomInt" :disabled="isLoading">Random</button>

  <h1>Map State</h1>
  <h2>mapState: {{ count }}</h2>
  <h2>lastMutation: {{ lastMutation }}</h2>
  <h2>lastRandomInt: {{ lastRandomInt }}</h2>

  <h2 >Direct getters: {{ $store.getters['counter/squareCount'] }}</h2>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: 'CounterNum',
    // computed: mapState(['count'])
    computed: {
      countComputed() {
        return this.$store.state.counter.count
      },
      ...mapState( 'counter', ['count', 'lastMutation', 'lastRandomInt', 'isLoading']),
      // ...mapState({
      //   count: state => state.count,
      //   lastMutation: 'lastMutation'
      // })
    },
    methods: {
      increment() {
        this.$store.commit('counter/increment')
      },
      incrementBy() {
        this.$store.commit('counter/incrementBy', 5)
        // this.incrementByRandomInt()
      },
      // incrementByRandomInt() {
        //   this.$store.dispatch( 'incrementByRandomInt' )
        // }
      // ...mapActions('counter', ['incrementByRandomInt']),
      ...mapActions( 'counter', {
        incrementByRandomInt: 'incrementByRandomInt',
      })

    }
}
</script>

<style>

</style>