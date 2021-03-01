import ProductApi from '../../api/ProductApi';
import LocalStorage from '../../localStorage/LocalStorage';
import { parseRequestURL, increamenView, subNavigation, $ } from '../../utils';

const DetailProductPage = {
    async render() {
        const { id } = parseRequestURL();
        let product;
        let cart = LocalStorage.getCart();
        let tempProduct = cart.find(item => item.id == id);
        if (!tempProduct) {
            let { data } = await ProductApi.get(id);
            product = { ...data };
        } else {
            product = { ...tempProduct };
        }
        await increamenView(product);
        const category = await subNavigation(product.cateId);
        return /*html*/`
            <div class="container mx-auto lg:px-32 bg-gray-100 py-5">
                <ul>
                    <li class="inline-block mr-1 underline"><a href="#">Home</a></li>
                    <li class="inline-block mr-0.5"><span>></span></li>
                    <li class="inline-block mx-1 underline"><a href="/#/category/${category.cateId}">${category.cateName}</a></li>
                    <li class="inline-block mr-0.5"><span>></span></li>
                    <li class="inline-block mx-1 ">${product.name}</li>
                </ul>

            </div>
            <div class="container mx-auto lg:px-32 mt-5">
                <div>
                    <div>
                        <ul class="inline-block text-xs text-yellow-500">
                            <li class="inline-block"><i class="fas fa-star"></i></li>
                            <li class="inline-block"><i class="fas fa-star"></i></li>
                            <li class="inline-block"><i class="fas fa-star"></i></li>
                            <li class="inline-block"><i class="fas fa-star"></i></li>
                            <li class="inline-block"><i class="fas fa-star"></i></li>
                        </ul>
                        <span class="inline-block text-xs">(${product.view} reviews)</span>
                    </div>
                    <h3 class="font-semibold text-xl mt-3">${product.name}</h3>
                </div>
                <div class="grid grid-cols-12 gap-6 mt-3">
                    <div class="col-span-5">
                        <div class="bg-gray-100 border boder-gray-200">
                            <img src="${product.image}"
                                alt="">
                        </div>
                        <div class="grid grid-cols-4 mt-2 gap-2">
                            <div class="bg-gray-100 border boder-gray-200">
                                <img src="${product.image}"
                                    alt="">
                            </div>
                            <div class="bg-gray-100 border boder-gray-200">
                                <img src="${product.image}"
                                    alt="">
                            </div>
                            <div class="bg-gray-100 border boder-gray-200">
                                <img src="${product.image}"
                                    alt="">
                            </div>
                            <div class="bg-gray-100 border boder-gray-200">
                                <img src="${product.image}"
                                    alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-span-7">
                        <div class="flex items-center justify-start">
                            <div class="text-3xl">
                                <span>$${product.price - (product.price*product.sale/100)}</span>
                            </div>
                            <div class="ml-5">
                                <p class="line-through text-indigo-400 text-opacity-70"><span class="text-red-500">$ ${product.price}</span></p>
                                <p class="text-red-500 text-xs">You save: $ ${product.price * product.sale / 100} (${product.sale}%)</p>
                            </div>
                        </div>
                        
                        <div class="my-5 pb-5 border-b border-gray-300">
                                <div class="inline-block relative">
                                    <input id="amountId" type="text" class="w-24 px-5 py-3 border-2 border-black rounded" value="${product.amount ? product.amount : 1}">
                                    <div class="absolute top-0 right-1 flex flex-col cursor-pointer">
                                        <button class="btn btn-up focus:outline-none">
                                            <svg class="mt-1 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </button>
                                        <button class="btn btn-down -mt-1 focus:outline-none">
                                            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                            fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="inline-block ml-5">
                                    <button type="submit" id="btn-cart" data-id=${product.id}
                                        class="px-5 py-3 text-white font-semibold uppercase bg-green-500 rounded">Add to cart</button>
                                </div>
                        </div>
                        <div class="mt-5">
                            <h6 class="font-semibold mb-1.5">short description</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae labore nam sapiente
                                recusandae optio voluptatem ducimus modi tempore, cum rerum? Doloribus voluptatum harum
                                modi
                                alias, sunt iusto facilis aliquam.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        `
    },
    afterRender() {
        const btns = $('.btn');
        btns.forEach(btn => {
            btn.onclick = function () {
                if (this.classList.contains('btn-up')) {
                    let valueInput = parseInt(this.parentElement.previousElementSibling.value);
                    this.parentElement.previousElementSibling.value = valueInput + 1;
                }
            }
        })
    }
}

export default DetailProductPage;
