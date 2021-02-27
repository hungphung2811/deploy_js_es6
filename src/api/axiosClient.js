import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'http://localhost:3300',
    headers: { 'content-type': 'application/json' }
});

export { axiosClient };
