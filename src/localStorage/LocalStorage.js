import ProductApi from "../api/productApi";

const LocalStorage = {
    async saveProducts() {
        const { data: products } = await ProductApi.getAll();
        localStorage.setItem('products', JSON.stringify(products));
    },
    getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id == id);
    },
    saveCart(carts) {
        localStorage.setItem('cart', JSON.stringify(carts));
    },
    getCart() {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    },
    saveUser(user) {
        localStorage.setItem('user', JSON.stringify(user));
    },
    getUser() {
        return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : undefined;
    },

}

export default LocalStorage;
