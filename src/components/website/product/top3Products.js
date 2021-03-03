import ProductApi from "../../../api/productApi"

const Top3product = {
    async render() {
        const { data: products } = await ProductApi.getItemsByOption({ _sort: 'wiew', _order: 'desc', _limit: 3 });
        return /*html */ `
            ${products.map(product =>{
                return /*html */ `
                    <div class="flex justify-start items-center my-3">
                        <div>
                            <a href="/#//product/${product.id}">
                                <img class="w-14" src="${product.image}" title="${product.name}">
                            </a>
                        </div>
                        <div class="ml-3">
                            <h6 class="text-xs font-semibold flex flex-wrap" title="${product.name}"><a href="/#//product/${product.id}">${product.name}</a></h6>
                            <p class="text-xs mt-1 text-gray-400">
                                ${product.price}
                            </p>
                        </div>
                    </div>
                `
            }).join('')}
        `
    }
}

export default Top3product;
