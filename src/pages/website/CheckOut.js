import OrderApi from "../../api/orderApi";
import OrderDetailApi from "../../api/orderDetailApi";
import ProductApi from "../../api/productApi";
import ListCheckOut from "../../components/website/cart/ListCheckOut";
import LocalStorage from "../../localStorage/LocalStorage";
import { $ } from "../../utils";
import { isRequired,isPhoneNumber } from "../../validate/validate";

const CheckOut = {
    async render() {
        if (!LocalStorage.getUser()) {
            alert("bạn cần đăng nhập trước khi checkout !");
            await window.history.back();
        }
        const cart = LocalStorage.getCart();
        const quantity = cart.length;
        const total = cart.reduce((initial, cart) => {
            return initial + cart.price * parseFloat(cart.amount)
        }, 0)
        if (!Array.isArray(cart) || cart.length === 0) {
            return /*html*/ `
            <div class="container mx-auto lg:px-32 bg-gray-100 py-3">
                <ul>
                    <li class="inline-block">
                    <a class="underline" href="/#/">Home</a>
                    <span>></span>
                    </li>
                    <li class="inline-block mx-1.5 ">Checkout</li>
                </ul>
            </div>
                <div class="text-center py-20 -mb-8 bg-gray-50">
                    <h4 class="font-semibold font-sans text-lg">Hiện tại chưa có sản phẩm trong giỏ hàng . hãy vào trang <a class="text-indigo-600 underline font-bold" href="/#//products">Products</a> để xem thêm</h4>
                </div>
            `
        }

        return /*html*/ `
        <div class="container mx-auto lg:px-32 bg-gray-100 py-3">
                <ul>
                    <li class="inline-block">
                    <a class="underline" href="/#/">Home</a>
                    <span>></span>
                    </li>
                    <li class="inline-block mx-1.5 ">Checkout</li>
                </ul>
            </div>
        <div class="container md:px-8 lg:px-16 mt-3">

        <div class="grid grid-cols-3 gap-4 bg-gray-100">
            <div class="col-span-2">
                <div class="p-3">
                        <div class=" mt-2">
                            <label class="ml-1 text-sm font-semibold" for="">Name *</label>
                            <input id="nameOrderId" type="text" class="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" placeholder="Name *">
                            <span class="flex text-xs text-red-500" id="nameOrderErrorId"></span>
                        </div>
                        <div class=" mt-2">
                            <label class="ml-1 text-sm font-semibold" for="">Phone Number *</label>
                            <input id="phoneOrderId" type="text" class="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" placeholder="Phone *">
                            <span class="flex text-xs text-red-500" id="phoneOrderErrorId"></span>
                        </div>
                        <div class=" mt-2">
                            <label class="ml-1 text-sm font-semibold" for="">Address *</label>
                            <textarea id="addressOrderId" class="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" rows="3" placeholder="Address *"></textarea>
                            <span class="flex text-xs text-red-500" id="addressOrderErrorId"></span>
                        </div>
                </div>
                <div class="py-3">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto">
                            <div class="py-2 align-middle inline- min-w-full sm:px-3 lg:px-4">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm" id="list-products">
                                    <table class="min-w-full divide-y divide-gray-200 ">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    product
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    price
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    quantity
                                                </th>
                                                <th scope="col"
                                                    class="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    subTotal
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200 list-cart-check-out" id="listOrderId">

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
            <div class="col-span-1 py-3 pr-3 mt-8">
                <div class="bg-white shadow p-3 mt-1">
                    <div class="flex justify-between items-center border-b border-gray-300 pb-3">
                        <span class="font-semibold text-sm"> ${quantity}  Product</span>
                        <span class="font-semibold text-sm uppercase">$ ${total.toFixed(2)}</span> 
                    </div>
                    <div class="mt-3 flex justify-between items-center border-b border-gray-300 pb-3">
                        <span class="font-semibold text-sm">Shipping</span>
                        <span class="font-semibold text-sm uppercase">$ 45.00</span> 
                    </div>
                    <div class="mt-3 flex justify-between items-center border-b border-gray-300 pb-3">
                        <span class="font-semibold text-sm">Total</span>
                        <span class="font-semibold text-sm uppercase">$${(total + 45.00).toFixed(2)}</span> 
                    </div>
                    <div class="mt-3 text-center">
                        <button id="btnCheckoutId" class="uppercase px-5 py-2 text-sm text-white font-semibold bg-black hover:bg-yellow-600">checkout</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
        `
    },
    async afterRender() {
        await ListCheckOut.afterRender() + (function () {
            if (!$('#btnCheckoutId')) return;
            $('#btnCheckoutId').onclick = async () => {
                const carts = LocalStorage.getCart();
                const user = LocalStorage.getUser();
                let nameOrderElement = $('#nameOrderId');
                let phoneOrderElement = $('#phoneOrderId');
                let addressOrderElement = $('#addressOrderId');

                isRequired(nameOrderElement, phoneOrderElement, addressOrderElement);
                const statusPhoneOrder = isPhoneNumber(phoneOrderElement);
                if (!(statusPhoneOrder && nameOrderElement.value && phoneOrderElement.value && addressOrderElement.value)) {
                    return;
                }
                const costomer = {
                    id: '',
                    name: nameOrderElement.value,
                    phone: phoneOrderElement.value,
                    address: addressOrderElement.value,
                    userId: user.id
                }

                try {
                    let { data: lastestOrder } = await OrderApi.add(costomer);
                    carts.forEach(async cart => {
                        const newCart = { ...cart, productId: cart.id }
                        const orderDetail = { ...newCart, id: '', orderId: lastestOrder.id };
                        await OrderDetailApi.add(orderDetail);
                        const { data: product } = await ProductApi.get(orderDetail.productId);
                        const newInstock = product.instock - orderDetail.amount;
                        const newProduct = { ...product, instock: newInstock }
                        await ProductApi.update(orderDetail.productId, newProduct);
                    })
                    alert('order thành công . Cảm ơn bạn đã mua hàng!');
                } catch (error) {
                    console.log(error);
                    alert('Đã có lỗi xảy ra vui lòng thử lại !');
                }
            }
        })();
    }
}

export default CheckOut;
