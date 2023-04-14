export const increment = ( state ) => {
    state.count++
    state.lastMutation = 'increment'
}
export const incrementBy = ( state, value ) => {
    state.count += value
    state.lastMutation = `incrementBy ${value}`
    state.lastRandomInt =  value
}
export const incrementByRandom = ( state ) => {
    const random = Math.random() * 100;
    state.count += random;
    state.lastMutation = 'incrementByRandom'
}
export const setLoading = ( state, isLoading ) => {
    state.isLoading = isLoading
}