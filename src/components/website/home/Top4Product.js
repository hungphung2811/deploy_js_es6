import ProductApi from "../../../api/ProductApi";
import { $ } from '../../../utils'

const Top4Product = {
    async render() {
        const { data: productsMen } = await ProductApi.getItemsByOption({ cateId: 1, _limit: 4, _sort: 'view' });
        const { data: productsWomen } = await ProductApi.getItemsByOption({ cateId: 2, _limit: 4, _sort: 'view' });
        const { data: productsAccessory } = await ProductApi.getItemsByOption({ cateId: 3, _limit: 4, _sort: 'view' });

        return /*html*/ `
        <section class="mt-14 container mx-auto lg:px-32">
                <div class="mt-10">
                    <h3 class="text-center text-2xl font-semibold">Collections</h3>
                    <!-- Tab items -->
                    <div class="tabs justify-center my-3">
                        <div class="tab-item active">Men</div>
                        <div class="tab-item">Women</div>
                        <div class="tab-item">Accesssories</div>
                        <div class="line"></div>
                    </div>

                    <!-- Tab content -->
                    <d class="tab-content">
                        <div class="tab-pane active">
                            <div class="grid grid-cols-4 gap-4">
                                ${productsMen.map(product => {
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
                        <div class="tab-pane">
                                <div class="grid grid-cols-4 gap-4">
                                    ${productsWomen.map(product => {
            return /*html*/`
                                        <div class="bg-gray-50 p-3 h-auto relative group">
                                            <div>
                                                <a href="/#//product/${product.id}">
                                                    <div class="w-full h-72 flex justify-center overflow-hidden">
                                                        <img class="transform group-hover:scale-110 transition-all duration-300" src="${product.image}" alt="${product.name}">
                                                    </div>
                                                </a>
                                                <div class="border-t border-gray-400 border-opacity-90 mt-1">
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
                                                <button id="btn-cart" data-id=${product.id} class="flex text-xs font-semibold p-1 bg-indigo-700 border border-gray-100 shadow-sm text-white">add to cart</button>
                                            </div>
                                        </div>`
        }).join('')}
                                </div>
                        </div>
                        <div class="tab-pane">
                            <div class="grid gap-4 grid-cols-4">
                                ${productsAccessory.map(product => {
            return /*html*/`
                                        <div class="bg-gray-50 p-3 h-auto relative group">
                                            <div>
                                                <a href="/#//product/${product.id}">
                                                    <div class="w-full h-64 flex justify-center overflow-hidden">
                                                        <img class="transform group-hover:scale-110 transition-all duration-300" src="${product.image}" alt="${product.name}">
                                                    </div>
                                                </a>
                                                <div class="border-t border-gray-400 border-opacity-90 mt-1">
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
                                                <button id="btn-cart" data-id=${product.id} class="flex text-xs font-semibold p-1 bg-indigo-700 border border-gray-100 shadow-sm text-white">add to cart</button>
                                            </div>
                                        </div>`
        }).join('')}
                            </div>
                        </div>
                    </d>
                </div>
            </section>
        `
    },
    afterRender() {
        const tabs = $(".tab-item");
        const panes = $(".tab-pane");

        const tabActive = $(".active");
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
    }
}

export default Top4Product;
