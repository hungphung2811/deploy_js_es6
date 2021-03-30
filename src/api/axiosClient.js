import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'https://9ixc8.sse.codesandbox.io/',
    headers: { 'content-type': 'application/json' }
});

export { axiosClient };
