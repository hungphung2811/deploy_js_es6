import { axiosClient } from './axiosClient';

const OrderApi = {
    getAll() {
        const url = `/order`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/order/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/order`;
        return axiosClient.post(url, product);
    },
    remove(id) {
        const url = `/order/${id}`;
        return axiosClient.delete(url);
    },
    update(id, product) {
        const url = `/order/${id}`;
        return axiosClient.put(url, product);
    },
    getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/order?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default OrderApi;
