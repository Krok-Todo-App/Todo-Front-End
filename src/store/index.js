import {createStore} from 'vuex'
import api from "./api";
import axios from "axios";

export default createStore({
    state: {
        todos: [],
        jwt: localStorage.getItem('jwt')
    },
    mutations: {
        SET_TODOS(state, data) {
            state.todos = data
        },
        CREATE_TODO(state, item) {
            state.todos.push(item)
        },
        REMOVE_TODO(state, idx) {
            state.todos = state.todos.filter(item => item.id !== idx)
        },
        UPDATE_TODO(state, itemTodo) {
            const updateTodo = state.todos.find(item => itemTodo.id === item.id)
            state.todos[updateTodo] = itemTodo
        },
        SET_JWT(state, jwt) {
            state.jwt = jwt
            localStorage.setItem("jwt", jwt)
        },
        REMOVE_JWT(state) {
            state.jwt = null
            localStorage.removeItem("jwt")
        }
    },
    getters: {
        getTodos(state) {
            return state.todos
        }
    },
    actions: {
        async fetchTodos({commit}) {
            const data = await api.fetchTodos()
            commit("SET_TODOS", data)
        },
        async removeTodo({commit}, idx) {
            const resp = await api.removeTodo(idx)
            if (resp) {
                commit("REMOVE_TODO", idx)
            }
        },
        async createTodo({commit, dispatch}, item) {
            const data = await api.createTodo(item)
            if (data) {
                commit("CREATE_TODO", data)
            }
        },
        async updateTodo({commit}, item) {
            const data = await api.updateTodo(item)
            if (data) {
                commit("UPDATE_TODO", item)
            }
        },
        async login({commit}, user) {
            const data = await api.login(user)
            if (data.token) {
                commit("SET_JWT", data.token)
                axios.defaults.headers["Authorization"] = "Bearer " + data.token
                return true
            }
            return false
        },
        async register({commit}, user) {
            const data = await api.register(user)
            if (data.token) {
                commit("SET_JWT", data.token)
                axios.defaults.headers["Authorization"] = "Bearer " + data.token
                return true
            }
            return false
        }
    },
    modules: {}
})
