import LocalStorage from "../../../localStorage/LocalStorage";
import CheckOut from "../../../pages/website/CheckOut";
import { $, reRender } from "../../../utils";

const ListCheckOut = {
    async render(cart= LocalStorage.getCart()) {
        return cart.map((item) => {
            return /*html */ `
            <tr class="items-order">
            <td class="py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button
                        class="cursor-pointer outline-none border-0 text-indigo-600 hover:text-indigo-900"
                        style="outline:none;">
                        <svg data-id=${item.id} class="btn btn-remove text-red-600" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z">
                            </path>
                            <path fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z">
                            </path>
                        </svg>
                    </button>
                </td>
                
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <img class="rounded-full"
                                src="${item.image}"
                                alt="${item.name}">
                        </div>
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                                ${item.name}
                            </div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    $ ${item.price}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="inline-block relative">
                            <input type="text" data-id=${item.id} class="amount w-16 px-5 border-0 border-b border-gray-300 active:outline-none focus:outline-none" value="${item.amount}">
                            <div class="absolute top-0 right-1 flex flex-col">
                                <div>
                                    <svg data-id=${item.id} class="btn btn-up mt-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 16 16">
                                        <path
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <svg data-id=${item.id} class="btn btn-down cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    $ ${(item.price * item.amount).toFixed(2)}
                </td>
            </tr>
            `
        }).join('')
    },
    async afterRender() {
        if (!$('.btn')) return;
        const carts = LocalStorage.getCart();

        document.querySelectorAll('.amount').forEach(input=>{
            input.onchange =async () => {
                let id = input.dataset.id;
                let cart = carts.find(cart => cart.id == id);
                cart.amount = input.value;
                await LocalStorage.saveCart(carts);
                await reRender(CheckOut, '');
                $('.cart-overlay').classList.remove('transparentBcg')
                $('.cart').classList.remove('show-cart')
            }
        })
        $('.btn').forEach(btn => {
            btn.addEventListener('click',async () => {
                if (btn.classList.contains('btn-remove')) {
                    let userConfirm = confirm('Bạn có chắc muốn xóa ?');
                    if (userConfirm){
                        let id = btn.dataset.id;
                        let newCart = carts.filter(cart => cart.id != id);
                        LocalStorage.saveCart([...newCart]);
                        await reRender(CheckOut,'');
                        $('.cart-overlay').classList.remove('transparentBcg')
                        $('.cart').classList.remove('show-cart')
                    }
                }
                else if(btn.classList.contains('btn-up')){
                    btn.addEventListener('click', async()=>{
                        let id = btn.dataset.id;
                        let cart = carts.find(cart=>cart.id==id);
                        cart.amount += 1;
                        await LocalStorage.saveCart(carts);
                        await reRender(CheckOut, '');
                        $('.cart-overlay').classList.remove('transparentBcg')
                        $('.cart').classList.remove('show-cart')
                    })
                } else if (btn.classList.contains('btn-down')) {
                    btn.addEventListener('click', async () => {
                        let id = btn.dataset.id;
                        let cart = carts.find(cart => cart.id == id);
                        cart.amount -= 1;

                        if (cart.amount > 0) {
                            await LocalStorage.saveCart(carts);
                            await reRender(CheckOut, '');
                            $('.cart-overlay').classList.remove('transparentBcg')
                            $('.cart').classList.remove('show-cart')
                        } else {
                            let userConfirm = confirm('Bạn có chắc muốn xóa ?');
                            if (userConfirm) {
                                let id = btn.dataset.id;
                                let newCart = carts.filter(cart => cart.id != id);
                                LocalStorage.saveCart([...newCart]);
                                await reRender(CheckOut, '');
                                $('.cart-overlay').classList.remove('transparentBcg')
                                $('.cart').classList.remove('show-cart')
                            }
                        }
                        
                    })
                }
            })
        })
    }
}

export default ListCheckOut;
