import { axiosClient } from './axiosClient';

const ContactApi = {
    getAll() {
        const url = `/contacts`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/contacts/${id}`;
        return axiosClient.get(url);
    },
    add(contact){
        const url = `/contacts`;
        return axiosClient.post(url, contact);
    },
    getItemsByOption(option) {
        const arrOption = [];
        if (option) {
            for (const key in option) {
                arrOption.push(`${key}=${option[key]}&`);
            }
        }
        const url = `/contacts?${arrOption.join('')}`;
        return axiosClient.get(url);
    }
}

export default ContactApi;
