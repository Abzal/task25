import axios from "axios";

export default {
    state: {
        data: [],
        users: [],
        user: {
            id:"",
            first_name: "",
            last_name: "",
            email:"",
            avatar:"",
        },
        history: []
    },

    mutations: {
        setUsers (state, Users) {
            state.data = Users.data
        },
        setUser (state, User) {
            state.data.push(User)
        },
        setHistory(state, History) {
            state.history.push(History)
        },
        setUserData(state, UserData) {
            state.user = UserData
        },
        updateUserData(state, UserData) {
          state.data.forEach((key, index) => {
              if (key.id == UserData.id) {

                   state.data.splice(index, 1, UserData)

              }
          })
        },
        deleteUserData(state, UserData) {
            state.data.forEach((key, index) => {
                if (key.id == UserData.userId) {

                    state.data.splice(index, 1)

                }
            })
        },
    },
    actions: {
        async getUsers ({ commit }, pageNumber) {
            return await axios
                .get('/users?page='+ pageNumber.page)
                .then(({ data }) => {
                    commit('setUsers', data)
                })
        },
        createUser ({ commit }, NewUser) {
            return axios
                .post('/users', NewUser)
                .then(({ data }) => {
                    commit('setUser', data)
                })
        },
        updateUser ({ commit }, User) {
            return axios
                .put('/users/'+ User.id, {
                    id: User.id,
                    first_name: User.first_name,
                    last_name: User.last_name,
                    email:User.email,
                    avatar: User.avatar,
                })
                .then(({ data }) => {
                    commit('updateUserData', data)
                })
        },
        deleteUser ({ commit }, userId) {

            return axios
                .delete('/users/'+ userId.userId)
                .then(({ data }) => {
                    console.log(data)
                    commit('deleteUserData', userId)
                })
        },

    },
    getters: {
        allUsers(state) {
            return state.data
        },
        getUser(state) {
            return state.user
        }
    },
}
