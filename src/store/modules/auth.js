import axios from "axios";

export default {
    state: {
        token: null,
        user: localStorage.getItem('user'),
    },

    mutations: {
        setUserData (state, UserData) {
            state.token = UserData.token
            localStorage.setItem('token', UserData.token)
            axios.defaults.headers.common.Authorization = `${UserData.token}`
        },
        setResponseData(state, data) {
          state = data
          localStorage.setItem('response', data)
        },
        clearUserData () {
            localStorage.removeItem('token')
        },
    },

    actions: {
        login ({ commit }, credentials) {
            console.log(credentials)
            return axios
                .post('/login', credentials)
                .then(({ data }) => {
                    commit('setUserData', data)
                })
        },
        register ({ commit }, credentials) {
            return axios
                .post('/register', credentials)
                .then(({ data }) => {
                    commit('setResponseData', data)
                })
        },

        logout ({ commit }) {
            commit('clearUserData')
        },

    },

}
