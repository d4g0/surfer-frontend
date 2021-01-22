export const state = () => ({
    isLogedIn: false,
    authorization: null,
    role: null
})

export const getters = {
    // getterValue: state => {
    //     return state.value
    // }
}

export const mutations = {

    logIn: (state, { authorization, role }) => {
        state.isLogedIn = true;
        state.authorization = authorization;
        state.role = role;
    },

    logOut: (state) => {
        state.isLogedIn = false;
        state.authorization = null;
        state.role = null;

        
    }
}

export const actions = {
    // updateActionValue({ commit }) {
    //     commit('updateValue', payload)
    // }
}