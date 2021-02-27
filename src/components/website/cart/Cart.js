import HandleLogicCart from "./HandleLogicCart"

const Cart = {
    render() {
        let divElement = document.createElement('div');

        divElement.innerHTML = /*html*/ `
            <div class="cart-overlay relative">
                <div class="cart overflow-y-auto">
                    <div class="">
                        <div class="border-b-2 pb-2 text-center ">
                            <span class="font-semibold text-lg uppercase">your cart</span>
                            <button class="absolute top-3 left-3 bg-gray-800 px-1 text-white" id="close">&times;</button>
                        </div>
                    </div>
                    <div class="cart-items mt-5"></div>
                    <div class="text-center mt-5 pt-2 border-t border-gray-300">
                        <div class="mx-2">
                            <span class="font-semibold text-lg">Total :</span>
                            <span id="totalCartId"></span>
                        </div>
                        <div class="flex justify-between">
                            <a href="/#//checkout" class="flex py-2 px-5 mt-2 bg-black hover:bg-green-600 rounded text-white text-sm uppercase">check out</a>
                            <button id="clearCartId" class="flex py-2 px-5 mt-2 bg-black hover:bg-red-600 rounded text-white text-sm uppercase">Clear cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return divElement;
    },
    async afterRender() {
        return `${await HandleLogicCart.setUpAPP() + await HandleLogicCart.getButtons() + await HandleLogicCart.logical()}`
    }
}

export default Cart;
