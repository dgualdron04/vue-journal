import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyAkmzoFHPAASW6q_DLy4PhRIvjnxq6U1YQ',
    }
})

export default authApi