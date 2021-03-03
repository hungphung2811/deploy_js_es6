import { axiosClient } from './axiosClient';

const ReviewApi = {
    getAll() {
        const url = `/reviews`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/reviews/${id}`;
        return axiosClient.get(url);
    },
    add(review) {
        const url = `/reviews`;
        return axiosClient.post(url, review);
    },
    remove(id) {
        const url = `/reviews/${id}`;
        return axiosClient.delete(url);
    },
    update(id, review) {
        const url = `/reviews/${id}`;
        return axiosClient.put(url, review);
    },
    getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/reviews?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default ReviewApi;
