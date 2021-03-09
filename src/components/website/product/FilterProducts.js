import CategoryApi from "../../../api/categoryApi";
import { $ } from "../../../utils";
import Top3product from "./top3Products";

const FilterProducts = {
    async render() {
        const { data: categories } = await CategoryApi.getAll();
        return  /*html*/ `
            <div class="col-span-3 bg-gray-50 py-3 px-5">
                <div class="">
                    <p class="text-lg font-semibold mb-1.5">Categories</p>
                    <ul class="ml-3">
                        ${categories.map(category => {
            return /*htnl*/ `
                                <li>
                                    <a class="ml-2" href="/#//category/${category.cateId}">${category.cateName}</a>
                                </li>
                            `
        }).join('')}
                    </ul>
                </div>

                <div class=" mt-5 pt-5 border-t border-gray-300">
                    <p class="text-lg font-semibold mb-1.5">Price</p>
                    <div class="text-sm">
                        <div class="mb-0.5">
                            <input class="focus:outline-none focus:ring-0" type="radio" id="init" name="price" value="0-50">
                            <label for="init">$00.00 - $50.00</label>
                        </div>
                        <div class="mb-0.5">
                            <input class="focus:outline-none focus:ring-0" type="radio" id="next" name="price" value="50-70">
                            <label for="next">$50.00 - $70.00</label>
                        </div>
                        <div class="mb-0.5">
                            <input class="focus:outline-none focus:ring-0" type="radio" id="last" name="price" value="70">
                            <label for="last">> $70.00</label>
                        </div>
                    </div>
                </div>

                <div class="-ml-5 mt-5 pt-5 border-t border-gray-300">
                    <div class="font-semibold text-lg font-momo pl-5">
                        Product
                    </div>
                    <div>
                        ${await Top3product.render()}
                    </div>
                </div>
            </div>
        `
    }
}

export default FilterProducts;
