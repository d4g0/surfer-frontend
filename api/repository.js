const API_PATH = '/api'


export default $api => ({
    async getToken({ username = '', password = '' }) {
        const result = await $api.post(API_PATH + '/login', { username, password })
        return result
    }
})