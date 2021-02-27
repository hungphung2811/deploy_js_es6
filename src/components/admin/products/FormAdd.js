import CategoryApi from "../../../api/categoryApi";
import ProductApi from "../../../api/productApi";
import { $, reRender } from '../../../utils';
import ListProducts from "./ListProducts";
import firebase from "../../../firebase"

const FormAdd = {
    async render() {
        const { data: categories } = await CategoryApi.getAll();
        return /*html*/ `
            <div class="mt-5 sm:mt-0">
            <form id="formAddId">
                <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white">
                        <div class="grid grid-cols-6 gap-4">

                            <div class="col-span-6 sm:col-span-6">
                                <label class=" text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="product-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label class=" text-sm font-medium text-gray-700">Category</label>
                                <select id="cateId" class="mt-1  w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    ${categories.map(category => {
            return /*html*/ `
                                            <option value="${category.cateId}">${category.cateName}</option>
                                        `
        }).join('')}
                                </select>
                            </div>

                            <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                                <label class=" text-sm font-medium text-gray-700">Quantity</label>
                                <input type="text" id="quantity" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label class=" text-sm font-medium text-gray-700">Price</label>
                                <input type="text" id="price" value="0" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label class=" text-sm font-medium text-gray-700">Sales</label>
                                <input type="text" value="0" name="postal_code" id="sales" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label class=" text-sm font-medium text-gray-700">Image</label>
                                <input type="file" id="productImageId" class="mt-1  w-full shadow-sm sm:text-sm">
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                <img src="" id="productImagePreviewId" class="w-24 h-auto" alt="">
                            </div>

                            <div class="col-span-6 sm:col-span-6">
                                <label class="block text-sm font-medium text-gray-700">
                                Description
                                </label>
                                <div class="mt-1">
                                <textarea rows="3" id="description" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button id="btn-save" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
        `
    },
    afterRender() {
        const newFormEdit = $('#formBackend');
        if (!newFormEdit) return;

        $('#formAddId').addEventListener("submit", async (e) => {
            e.preventDefault();
            const productImage = $('#productImageId').files[0];
            let storageRef = firebase.storage().ref(`image-product/${productImage.name}`);
            storageRef.put(productImage).then(() => {
                storageRef.getDownloadURL().then(async (url) => {
                    $('#productImagePreviewId').src = url;
                    const newProduct = {
                        id: '',
                        name: newFormEdit.querySelector('input#product-name').value,
                        image: url,
                        price: newFormEdit.querySelector('input#price').value,
                        status: true,
                        quantity: newFormEdit.querySelector('input#quantity').value,
                        instock: newFormEdit.querySelector('input#quantity').value,
                        description: newFormEdit.querySelector('#description').value,
                        view: 0,
                        cateId: +newFormEdit.querySelector('#cateId').value
                    }
                    await ProductApi.add(newProduct);
                    await reRender(ListProducts, '#list-products');
                    $('#formAddId').reset();
                    alert('Add Thành Công !');
                })
            })
        });
    }
}

export default FormAdd;
