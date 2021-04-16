const RESPONSE_STATUS_200 = 200
const RESPONSE_STATUS_201 = 201

export default {
    async fetchTodos() {
        const response = await fetch("https://todotaskapi.edvard-potapenko.dev/api/tasks/")
        if (response.status === RESPONSE_STATUS_200) {
            return await response.json()
        }
    },
    async removeTodo(idx) {
        const response = await fetch(`http://localhost:3000/todos/${idx}`, {
            method: "DELETE"
        })
        return response.status === RESPONSE_STATUS_200
    },
    async createTodo(item) {
        const response = await fetch('http://localhost:3000/todos/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        if (response.status === RESPONSE_STATUS_201) {
            return item
        }
    },
    async updateTodo(item) {
        const response = await fetch(`http://localhost:3000/todos/${item.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        if (response.status === RESPONSE_STATUS_200) {
            return true
        }
    }
}