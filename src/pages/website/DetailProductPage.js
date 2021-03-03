import ProductApi from '../../api/ProductApi';
import ReviewApi from '../../api/reviewApi';
import UserApi from '../../api/userApi';
import LocalStorage from '../../localStorage/LocalStorage';
import { $, increamenView, parseRequestURL, subNavigation } from '../../utils';

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
        const { data: top4ProductRelated } = await ProductApi.getItemsByOption({ _limit: 4, cateId: product.cateId })
        const { data: infoReviews } = await ReviewApi.getItemsByOption({ idProduct: id });
        
        return /*html*/`
            <div class="container mx-auto lg:px-32 bg-gray-100 py-5">
                <ul>
                    <li class="inline-block mr-1 underline"><a href="/#/">Home</a></li>
                    <li class="inline-block mr-0.5"><span>></span></li>
                    <li class="inline-block mx-1 underline"><a href="/#//category/${category.cateId}">${category.cateName}</a></li>
                    <li class="inline-block mr-0.5"><span>></span></li>
                    <li class="inline-block mx-1 ">${product.name}</li>
                </ul>

            </div>
            <div class="container mx-auto lg:px-32 mt-5">
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
                        <div class="mb-3">
                            <div>
                                <span class="px-2 py-1.5 border-green-300 mb-1.5 border text-xs">${product.status === true ? 'Instock' : 'Outstock'}</span>
                                <h3 class="font-semibold text-2xl mt-1.5">${product.name}</h3>
                                <ul class="inline-block text-xs text-yellow-500">
                                    <li class="inline-block"><i class="fas fa-star"></i></li>
                                    <li class="inline-block"><i class="fas fa-star"></i></li>
                                    <li class="inline-block"><i class="fas fa-star"></i></li>
                                    <li class="inline-block"><i class="fas fa-star"></i></li>
                                    <li class="inline-block"><i class="fas fa-star"></i></li>
                                </ul>
                                <span class="inline-block text-xs">(${product.view} reviews)</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-start">
                            <div class="text-3xl">
                                <span>$${product.price - (product.price * product.sale / 100)}</span>
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
                                        class="px-10 py-3 text-white font-semibold uppercase bg-gray-900 rounded-sm hover:bg-yellow-600 transition-all duration-300">Add to cart</button>
                                </div>
                        </div>
                        <div class="mt-5">
                            <h6 class="font-semibold mb-1.5">short description</h6>
                            <p>
                                ${product.description}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <section class="mt-14 container mx-auto lg:px-32" >
                <div class="mt-10">
                    <!-- Tab items -->
                    <div class="tabs justify-center my-3 border-b">
                        <div class="tab-item active">Description</div>
                        <div class="tab-item">Additional Information</div>
                        <div class="tab-item">Review</div>
                        <div class="line"></div>
                    </div>

                    <!-- Tab content -->
                    <d class="tab-content">
                        <div class="tab-pane active">
                            <div class="mt-10">
                                ${product.description}
                            </div>
                        </div>
                        <div class="tab-pane px-10">
                            <table class="table min-w-full divide-y divide-gray-200 border border-gray-300 shadow-sm">
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap border-r">
                                            color
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            black
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap border-r">
                                            size
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            xl ,lg
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="tab-pane">
                            <div class="grid gap-10 grid-cols-10">
                                <div class="col-span-6" id="listReviewId">
                                    ${infoReviews.map(review => {
            return /*html */ `
                                            <div class="grid grid-cols-8 gap-4 border-b border-gray-200 pb-3 mt-3">
                                        <div class="mt-2 col-span-1">
                                            <img src="${review.avatar}" class="w-20" alt="${review.userName}">
                                        </div>
                                        <div class="col-span-7">
                                            <div>
                                                <span class="text-lg font-semibold">${review.userName}</span>
                                                <span class="ml-3 text-xs text-gray-500">${review.time}</span>
                                            </div>
                                            <p class="text-sm text-gray-600">
                                            ${review.review}
                                            </p>
                                        </div>
                                    </div>
                                        `
        }).join('')}
                                </div>
                                <div class="col-span-4">
                                    <form id="formPostReivewId">
                                        <div>
                                            <label class="text-sm font-semibold">Your Review</label>
                                            <textarea class="pl-3 w-full border border-gray-500 text-xs" cols="30" rows="5" placeholder="Your review..."></textarea>
                                        </div>
                                        <div class="mt-3">
                                            <button class="px-5 py-2 bg-black text-white">Post review</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </d>
                </div>
            </section>

            <div class="px-32 mt-10">
                <div class="text-center text-xl font-semibold py-14">
                    Related products
                </div>
                <div class="grid grid-cols-4 gap-4">
                                ${top4ProductRelated.map(product => {
            return /*html*/`
                                        <div class="bg-gray-50 h-auto relative group">
                                            <div>
                                                <a href="/#//product/${product.id}">
                                                    <div class="w-full h-72 flex justify-center overflow-hidden">
                                                        <img class="transform group-hover:scale-110 transition-all duration-300" src="${product.image}" alt="${product.name}">
                                                    </div>
                                                </a>
                                                <div class="border-t border-gray-400 border-opacity-90 mt-1 px-3 pb-3">
                                                    <h3 class="truncate text-sm mt-2 group-hover:opacity-0 group-hover:invisible transition-all duration-300">
                                                        <a href="/#//product/${product.id}">
                                                            ${product.name}
                                                        </a>
                                                    </h3>
                                                    <div class="mt-0.5 flex items-center">
                                                        <p class="text-xs line-through mr-3">$ ${product.price - product.price * product.sale / 100}</p>
                                                        <p class="text-sm font-semibold">$ ${product.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="absolute bottom-0 mx-auto opacity-0 invisible  group-hover:mb-8 group-hover:opacity-100 group-hover:visible transition-all duration-500">
                                                <button id="btn-cart" data-id=${product.id} class="flex text-xs font-semibold p-1 bg-indigo-600 border rounded border-gray-100 shadow-sm text-white hover:bg-yellow-600 transition-all duration-300">Add to cart</button>
                                            </div>
                                        </div>`
        }).join('')}
                            </div>
            </div>
        `
    },
    afterRender() {
        const tabs = $(".tab-item");
        const panes = $(".tab-pane");
        const tabActive = $(".tab-item.active");
        const line = $(".line");
        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";
        tabs.forEach((tab, index) => {
            const pane = panes[index];
            tab.onclick = function () {
                $(".tab-item.active").classList.remove("active");
                $(".tab-pane.active").classList.remove("active");
                line.style.left = this.offsetLeft + "px";
                line.style.width = this.offsetWidth + "px";
                this.classList.add("active");
                pane.classList.add("active");
            };
        });

        const btns = $('.btn');
        btns.forEach(btn => {
            btn.onclick = function () {
                if (this.classList.contains('btn-up')) {
                    let valueInput = parseInt(this.parentElement.previousElementSibling.value);
                    this.parentElement.previousElementSibling.value = valueInput + 1;
                }
            }
        })

        $('#formPostReivewId').addEventListener('submit', async (e) => {
            e.preventDefault();
            if (!LocalStorage.getUser() || LocalStorage.getUser().length == 0) {
                alert('ban can dang nhap')
            }
            const review = $('#formPostReivewId').querySelector('textarea').value;
            const date = new Date();
            let time = `${date.getDay() < 10 ? `0${date.getDay()}` : date.getDay()}/${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}/${date.getFullYear()}`
            const { id } = parseRequestURL();
            const newReview = {
                id: '',
                review,
                time,
                idProduct: id,
                userName: LocalStorage.getUser().userName,
                avatar: LocalStorage.getUser().avatar
            }
            const { data: tempReview } = await ReviewApi.add(newReview);
            console.log(tempReview);
            let div = document.createElement('div');
            div.classList.add('flex', 'mt-5');
            div.innerHTML = /*html */ `
                <div class="mt-2">
                    <img  class="w-20" src="${LocalStorage.getUser().avatar}" alt="${LocalStorage.getUser().uerName}">
                </div>
                <div class="ml-5">
                    <div>
                        <span class="text-lg font-semibold">phung van hung</span>
                        <span class="ml-3 text-xs text-gray-500">${tempReview.time}</span>
                    </div>
                    <p class="text-sm text-gray-600">
                        ${tempReview.review}
                    </p>
                </div>
            `
            $('#listReviewId').appendChild(div);
        });
    }
}

export default DetailProductPage;
