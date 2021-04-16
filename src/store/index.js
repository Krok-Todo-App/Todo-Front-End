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
        UPDATE_TODO(state, {idx, itemUpdate}) {
            const updateTodo = state.todos.find(item => item.id === idx)
            for (let field in itemUpdate) {
                if (updateTodo.hasOwnProperty(field)) {
                    updateTodo[field] = itemUpdate[field]
                }
            }
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
            const resp = await api.createTodo(item)
            if (resp) {
                await commit("CREATE_TODO", item)
            }
        },
        async updateTodo({commit}, item) {
            const resp = await api.updateTodo(item)
            if (resp) {
                await commit("UPDATE_TODO", {idx: item.id, itemUpdate: item})
            }
        }

    },
    modules: {}
})
