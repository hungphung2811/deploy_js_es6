import { axiosClient } from './axiosClient';

const ProductApi = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(product) {
        const url = `/products`;
        return axiosClient.post(url, product);
    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url);
    },
    update(id, product){
        const url = `/products/${id}`;
        return axiosClient.put(url, product);
    },
    getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/products?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default ProductApi;
