import CheckOut from "../../../pages/website/CheckOut";
import { $, reRender } from "../../../utils";
import LocalStorage from "../../../localStorage/LocalStorage";
import ListCheckOut from "./ListCheckOut";

const HandleLogicCart = {
    getButtons() {
        LocalStorage.saveProducts();
        const buttonsCartElement = [...document.querySelectorAll('#btn-cart')];
        let cart = [];

        buttonsCartElement.forEach(btn => {
            let id = btn.dataset.id;
            let inCart = LocalStorage.getCart().find(item => item.id == id);
            if (inCart) {
                btn.innerText = 'In cart';
                btn.disabled = true;
            }
            btn.addEventListener('click', async e => {
                e.target.innerText = 'In cart';
                e.target.disabled = true;
                cart = LocalStorage.getCart();
                // get product form products
                let cartItems = { ...LocalStorage.getProduct(id), amount: $('#amountId') ? +$('#amountId').value : 1 };
                // add product from products
                cart = [...cart, cartItems];
                // save localStorage
                LocalStorage.saveCart(cart)
                // set cart setCartValues
                this.setCartValues(cart);
                // display cart items
                this.addCartItems(cartItems);
            });
        });
    },
    setCartValues(cart = LocalStorage.getCart()) {
        // let cart = LocalStorage.getCart();
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * parseFloat(item.amount);
            itemsTotal += parseFloat(item.amount);
        });

        $('#cart-values').innerText = itemsTotal;
        $('#totalCartId').textContent = '$ ' + tempTotal.toFixed(2);
    },
    addCartItems(cartItems) {
        const divElement = document.createElement('div');
        divElement.innerHTML = /*html*/ `
        <div class="flex justify-between items-center mb-5">
            <div class="flex items-center">
                <div class="w-12 h-auto">
                <img src="${cartItems.image}" alt="${cartItems.name}">
                </div>
                <div class="ml-3">
                    <p class="text-sm font-semibold">${cartItems.name}</p>
                    <p class="text-xs font-normal mt-0.5">$ ${(cartItems.price*cartItems.amount).toFixed(2)}</p>
                    <button data-id=${cartItems.id} class="remove text-xs text-gray-600">remove</button>
                </div>
            </div>
            
            <div class="flex flex-col justify-center items-center text-sm">
                <button class="text-yellow-700 font-semibold">
                    <svg data-id=${cartItems.id} class="up"  mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path
                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
                <p class="">
                    ${cartItems.amount}
                </p>
                <button class="text-yellow-700 font-semibold">
                    <svg data-id=${cartItems.id} class="down mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                        </svg>
                </button>
            </div>
        </div>
        `;
        if ($('.cart-items')) $('.cart-items').appendChild(divElement);
    },
    showCart() {
        document.querySelector('.cart').classList.add('showCart');
        document.querySelector('.cart-overlay').classList.add('transparentBcg');
    },
    setUpAPP() {
        let cart = LocalStorage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        $('#openCartId').addEventListener('click', this.showCart);
        $('#close').addEventListener('click', this.hideCart);
    },
    populateCart(cart) {
        cart.forEach(item => this.addCartItems(item));
    },
    hideCart() {
        document.querySelector('.cart').classList.remove('showCart');
        document.querySelector('.cart-overlay').classList.remove('transparentBcg');
    },
    logical() {
        $('#clearCartId').addEventListener('click', () => {
            this.clearCart();
        });
        $('.cart-items').addEventListener('click',async (e) => {
            if (e.target.classList.contains('remove')) {
                const uerConfirm = confirm('Bạn có chắc muốn xóa ?');
                if (uerConfirm){
                    let removeItem = e.target;
                    let id = removeItem.dataset.id;
                    $('.cart-items').removeChild(removeItem.parentElement.parentElement.parentElement.parentElement)
                    this.removeItems(id);
                    if ($('.list-cart-check-out')) {
                        await reRender(CheckOut, '');
                    }
                }
            } else if (e.target.classList.contains('up')) {
                let upAmount = e.target;
                let id = upAmount.dataset.id;
                let cart = LocalStorage.getCart();
                let tempItem = cart.find(item => item.id == id);
                tempItem.amount += 1;
                LocalStorage.saveCart(cart);
                this.setCartValues(cart);
                upAmount.parentElement.nextElementSibling.innerText = tempItem.amount;
                if ($('.list-cart-check-out')) {
                    await reRender(CheckOut, '');
                }
            } else if (e.target.classList.contains('down')) {
                let downAmount = e.target;
                let id = downAmount.dataset.id;
                let cart = LocalStorage.getCart();
                let tempItem = cart.find(item => item.id == id);
                tempItem.amount -= 1;
                if (tempItem.amount > 0) {
                    LocalStorage.saveCart(cart);
                    this.setCartValues(cart);
                    downAmount.parentElement.previousElementSibling.innerText = tempItem.amount;
                } else {
                    let userConfirm = confirm('Bạn có chắc muốn xóa ?');
                    if (userConfirm){
                        $('.cart-items').removeChild(downAmount.parentElement.parentElement.parentElement.parentElement)
                        this.removeItems(id);
                    }
                }

                if ($('.list-cart-check-out')) {
                    await reRender(CheckOut, '');
                }
            }
        })
    },
    async clearCart() {
        let cartItems = LocalStorage.getCart().map(item => item.id);
        cartItems.forEach(id => this.removeItems(id));
        while ($('.cart-items').children.length > 0) {
            $('.cart-items').removeChild($('.cart-items').children[0]);
        }
        if ($('.list-cart-check-out')) {
            await reRender(CheckOut, '');
        }
    },
    removeItems(id) {
        let cart = LocalStorage.getCart().filter(item => item.id != id);
        this.setCartValues(cart);
        LocalStorage.saveCart(cart);
        let btn = this.getSingleBtn(id);
        if (btn) {
            btn.disabled = false;
            btn.innerText = 'Add to cart';
        }
        $('#amountId') && ($('#amountId').value = 1);
    },
    getSingleBtn(id) {
        let buttonElements = [...document.querySelectorAll('#btn-cart')];
        return buttonElements.find(btn => btn.dataset.id == id);
    }
}

export default HandleLogicCart;
