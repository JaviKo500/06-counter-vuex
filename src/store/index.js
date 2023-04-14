import { createStore } from 'vuex'

import getRandomInt from '@/helpers/getRandomInt'

export default createStore({
    state: {
        count: 1,
        lastMutation: 'none',
        isLoading: false,
        lastRandomInt: 0
    },
    mutations: {
        increment( state ) {
            state.count++
            state.lastMutation = 'increment'
        },
        incrementBy( state, value ) {
            state.count += value
            state.lastMutation = `incrementBy ${value}`
            state.lastRandomInt =  value
        },
        incrementByRandom( state ) {
            const random = Math.random() * 100;
            state.count += random;
            state.lastMutation = 'incrementByRandom'
        }
    },
    actions : {
        async incrementByRandomInt ( context ) {
            const rndInt = await getRandomInt()
            context.commit('incrementBy', rndInt)
        }
    }
})