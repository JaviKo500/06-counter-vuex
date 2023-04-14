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
        },
        setLoading( state, isLoading ) {
            state.isLoading = isLoading
        }
    },
    actions : {
        async incrementByRandomInt ( { commit } ) {
            commit( 'setLoading', true )
            const rndInt = await getRandomInt()
            commit( 'setLoading', false )
            commit('incrementBy', rndInt)
        }
    },
    getters: {
        squareCount( state ) {
            return state.count * state.count
        } 
    }
})