import { axiosClient } from './axiosClient';

const BlogApi = {
    getAll() {
        const url = `/blog`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/blog/${id}`;
        return axiosClient.get(url);
    },
    getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/blog?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default BlogApi;
