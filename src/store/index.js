import {createStore} from 'vuex'
import api from "./api";

export default createStore({
    state: {
        todos: []
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
            await commit("SET_TODOS", data)
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
                await commit("CREATE_TODO", data)
            }
        },
        async updateTodo({commit}, item) {
            const data = await api.updateTodo(item)
            if (data) {
                await commit("UPDATE_TODO", item)
            }
        }
    },
    modules: {}
})
