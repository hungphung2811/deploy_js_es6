import HandleLogicCart from "../../components/website/cart/HandleLogicCart";
import ListCheckOut from "../../components/website/cart/ListCheckOut";
import LocalStorage from "../../localStorage/LocalStorage";

const CheckOut = {
    async render() {
        const cart = LocalStorage.getCart();
        if (!Array.isArray(cart)||cart.length===0) {
            return /*html*/ `
                <div class="text-center py-20 -mb-8 bg-gray-50">
                    <h4 class="font-semibold font-sans text-lg">Hiện tại chưa có sản phẩm trong giỏ hàng . hãy vào trang <a class="text-indigo-600 underline font-bold" href="/#//products">Products</a> để xem thêm</h4>
                </div>
            `
        }

        return /*html*/ `
            <div class="container md:px-8 lg:px-16 mt-10">
        <div class="grid grid-cols-3 gap-6 bg-gray-100">
            <div class="col-span-2">
                <div class="py-3">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto">
                            <div class="py-2 align-middle inline- min-w-full sm:px-3 lg:px-4">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm"
                                    id="list-products">

                                    <table class="min-w-full divide-y divide-gray-200 ">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    #
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    price
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    quantity
                                                </th>
                                                <th scope="col"
                                                    class="py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Delete
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 list-cart-check-out">

                                        ${await ListCheckOut.render(cart)}

                                        </tbody>
                                    </table>
                                    <div class="text-xl font-semibold text-center my-5 hidden">
                                        <span>Không có sản phẩm</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                checkout
            </div>
        </div>

    </div>
        `
    },
    afterRendr(){
        HandleLogicCart.logical().bind(HandleLogicCart);
    }
}

export default CheckOut;
