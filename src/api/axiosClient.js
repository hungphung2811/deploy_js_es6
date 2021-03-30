import axios from 'axios';
const axiosClient = axios.create({
    baseURL: 'https://hungpvph12160-pake-user.herokuapp.com',
    headers: { 'content-type': 'application/json' }
});

export { axiosClient };
