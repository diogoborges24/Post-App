import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7215/'
});


const thread = {
    getAll: () => {
        const response = api.get('threads')
        return response;
    },
    getById: (threadId) => {
        const response = api.get(`threads/${threadId}`)
        return response.data
    },
    
}

const agent = {
    thread
}

export default agent;