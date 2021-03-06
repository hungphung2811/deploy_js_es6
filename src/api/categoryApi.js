import { axiosClient } from './axiosClient';

const CategoryApi = {
    getAll() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    add(category) {
        const url = `/categories`;
        return axiosClient.post(url, category);
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `/categories/${id}`;
        return axiosClient.delete(url);
    },
    update(id, category) {
        const url = `/categories/${id}`;
        return axiosClient.put(url, category);
    },
    getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/categories?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default CategoryApi;
