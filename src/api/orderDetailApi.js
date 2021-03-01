import { axiosClient } from './axiosClient';

const OrderDetailApi = {
    getAll() {
        const url = `/order_detail`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/order_detail/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/order_detail`;
        return axiosClient.post(url, product);
    },
    remove(id) {
        const url = `/order_detail/${id}`;
        return axiosClient.delete(url);
    },
    update(id, product) {
        const url = `/order_detail/${id}`;
        return axiosClient.put(url, product);
    },
    getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/order_detail?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default OrderDetailApi;
