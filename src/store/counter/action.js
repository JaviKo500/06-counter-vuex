import getRandomInt from "@/helpers/getRandomInt"

export const incrementByRandomInt = async ( { commit } ) => {
    commit( 'setLoading', true )
    const rndInt = await getRandomInt()
    commit( 'setLoading', false )
    commit('incrementBy', rndInt)
}