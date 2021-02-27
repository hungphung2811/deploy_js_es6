import { axiosClient } from './axiosClient';

const CategoryApi = {
    getAll() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/categories?${arrOption.join('')}`;
        console.log(url);
        return axiosClient.get(url);
    }
}

export default CategoryApi;
