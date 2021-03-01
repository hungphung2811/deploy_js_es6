import CategoryApi from "../../api/categoryApi";
import ProductApi from "../../api/productApi";
import UserApi from "../../api/userApi";

const DashboardPage = {
    async render() {
        const { data: products } = await ProductApi.getAll();
        const total = products.reduce((total, product) =>{
            return total + parseInt(product.quantity);
        },0)
        const { data: users } = await UserApi.getAll();
        const { data: categories } = await CategoryApi.getAll();
        return /*html*/ `
            <div class="px-32 mt-10">
                <div class="flex">
                    <div class="bg-indigo-500 p-8 mr-3 shadow rounded text-white font-semibold uppercase">
                        products :
                        <p class="text-xs"> - length: <span>${products.length}</span></p>
                        <p class="text-xs"> - quantity: <span>${total}</span></p>
                    </div>
                    <div class="bg-red-500 p-8 mr-3 shadow rounded text-white font-semibold uppercase">
                        categories : <span>${categories.length}</span>
                    </div>
                    <div class="bg-yellow-500 p-8 mr-3 shadow rounded text-white font-semibold uppercase">
                        customers : <span>${users.length}</span>
                    </div>
                </div>
            </div>
        `
    }
}

export default DashboardPage;
