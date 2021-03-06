import CategoryApi from '../../api/categoryApi';
import ProductApi from '../../api/productApi';
import FilterProducts from '../../components/website/product/FilterProducts'
import { $, parseRequestURL } from '../../utils';

const CategoryPage = {
    async render() {
        const { id } = await parseRequestURL();
        const { data: categories } = await CategoryApi.getAll();
        const category = categories.find(item => item.cateId == id);
        const { data: products } = await ProductApi.getItemsByOption({ cateId: id });
        if (!(Array.isArray(products) && products.length)) {
            return /*html*/ `
                <div class="text-center m-32 text-lg font-semibold text-gray-800">
                    <h3>
                        <span>Không có sản phẩm phù hợp. Thử vào trang</span>
                        <a class="text-green-800 underline" href="/#//products">tất cả Products</a>
                    </h3>
                </div>
            `;
        }

        return /*html*/`
            <div class="container mx-auto lg:px-32 bg-gray-100 py-3">
                <ul>
                    <li class="inline-block">
                    <a class="underline" href="/#/">Home</a>
                    <span>></span>
                    </li>
                    <li class="inline-block mx-1.5 ">${category.cateName}</li>
                </ul>
            </div>
            <div class="container mx-auto pt-3 xl:px-32 grid grid-cols-11 gap-4">
                ${await FilterProducts.render()}
                <div class="col-span-8 grid grid-cols-3 gap-4" id="listProductId">
                    ${products.map(product => {
            return /*html*/`
                        <div>
                            <div class="bg-gray-50 h-auto relative group">
                                            <div>
                                                <a href="/#//product/${product.id}">
                                                    <div class="w-full h-72 flex justify-center overflow-hidden">
                                                        <img class="transform group-hover:scale-110 transition-all duration-300" src="${product.image}" alt="${product.name}">
                                                    </div>
                                                </a>
                                                <div class="px-3 pb-3 border-t border-gray-400 border-opacity-90 mt-1">
                                                    <h3 class="text-sm mt-2 group-hover:opacity-0 group-hover:invisible transition-all duration-300">
                                                        <a href="/#//product/${product.id}">
                                                            ${product.name}
                                                        </a>
                                                    </h3>
                                                    <p class="text-sm font-semibold mt-0.5">$ ${product.price}</p>
                                                </div>
                                            </div>
                                            <div class="absolute bottom-0 mx-auto opacity-0 invisible  group-hover:mb-8 group-hover:opacity-100 group-hover:visible transition-all duration-500">
                                                <button id="btn-cart" data-id=${product.id} class="flex text-xs font-semibold p-1 bg-indigo-600 border rounded-sm border-gray-100 shadow-sm text-white hover:bg-yellow-600 transition-all duration-300">Add to cart</button>
                                            </div>
                                        </div>
                        </div>
                        `
        }).join('')}
                </div>
            </div>
        `;
    }, async afterRender() {
        $('input[type="radio"]').forEach(btn => {
            btn.onclick = async () => {
                let [valueInit, valueNext] = btn.value.split('-');
                const { id } = await parseRequestURL();
                const { data: products } = await ProductApi.getItemsByOption({ cateId: id, price_gte: valueInit, price_lte: valueNext });
                if (products.length === 0) {
                    $('#listProductId').innerHTML = /*html */ `
                        <div class="py-20 col-span-4 text-xl text-center font-semibold">
                            <span class="underline">Không có sản phẩm phù hợp</span>
                        </div>
                    `
                    return;
                }
                $('#listProductId').innerHTML =
                    products.map(product => {
                        return /*html*/`
                            <div>
                                <div class="bg-gray-50 h-auto relative group">
                                    <div>
                                        <a href="/#//product/${product.id}">
                                            <div class="w-full h-72 flex justify-center overflow-hidden">
                                                <img class="transform group-hover:scale-110 transition-all duration-300" src="${product.image}" alt="${product.name}">
                                            </div>
                                        </a>
                                        <div class="px-3 pb-3 border-t border-gray-400 border-opacity-90 mt-1">
                                            <h3 class="truncate text-sm mt-2 group-hover:opacity-0 group-hover:invisible transition-all duration-300">
                                                <a href="/#//product/${product.id}">
                                                    ${product.name}
                                                </a>
                                            </h3>
                                            <p class="text-sm font-semibold mt-0.5">$ ${product.price}</p>
                                        </div>
                                    </div>
                                    <div class="absolute bottom-0 mx-auto opacity-0 invisible  group-hover:mb-8 group-hover:opacity-100 group-hover:visible transition-all duration-500">
                                        <button id="btn-cart" data-id=${product.id} class="flex text-xs font-semibold p-1 bg-indigo-600 border rounded-sm border-gray-100 shadow-sm text-white hover:bg-yellow-600 transition-all duration-300">Add to cart</button>
                                    </div>
                                </div>
                            </div>  
                        `
                    }).join('')
            }
        })
    }
}

export default CategoryPage;
