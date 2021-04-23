const axios = require("axios")
const RESPONSE_STATUS_OK_200 = 200
const RESPONSE_STATUS_CREATED_201 = 201
const RESPONSE_STATUS_NO_CONTENT_204 = 204
const RESPONSE_STATUS_FORBIDDEN_401 = 401
const RESPONSE_STATUS_FORBIDDEN_403 = 403
const BASE_URL = "https://todotaskapi.edvard-potapenko.dev"

export default {
    async fetchTodos() {
        const response = await axios.get(`${BASE_URL}/api/tasks`)
        if (response.status === RESPONSE_STATUS_OK_200) {
            return await response.data
        }
    },
    async removeTodo(idx) {
        const response = await axios.delete(`${BASE_URL}/api/tasks/${idx}`)
        return response.status === RESPONSE_STATUS_NO_CONTENT_204
    },
    async createTodo(item) {
        const response = await axios.post(`${BASE_URL}/api/tasks`, item)
        if (response.status === RESPONSE_STATUS_CREATED_201) {
            return await response.data
        }
    },
    async updateTodo(item) {
        const response = await axios.put(`${BASE_URL}/api/tasks`, item)
        if (response.status === RESPONSE_STATUS_OK_200) {
            return response.data
        }
    },
    async login(user) {
        const response = await axios.post(`${BASE_URL}/api/AuthManagement/Login`, user)
        if (response.status === RESPONSE_STATUS_OK_200) {
            return response.data
        }
    },
    async register(user) {
        const response = await axios.post(`${BASE_URL}/api/AuthManagement/Register`, user)
        if (response.status === RESPONSE_STATUS_OK_200) {
            return response.data
        }
    }
}