import CategoryApi from "../../../api/categoryApi";
import ProductApi from "../../../api/productApi";
import { $, reRender } from '../../../utils';
import ListProducts from "./ListProducts";
import firebase from "../../../firebase"
import { isNumber, isRequired } from "../../../validate/validate";

const FormAdd = {
    async render() {
        const { data: categories } = await CategoryApi.getAll();
        return /*html*/ `<div class="sticky top-0 bg-white border-b-2 border-gray-200 shadow flex justify-around p-5">
                            <button class="absolute top-3.5 right-3 bg-indigo-800 px-1.5 py-1 text-lg text-white font-bold outline-none rounded shadow" id="close">&times;</button>
                            <h1 class="uppercase text-lg font-semibold">Form add product</h1>
                        </div>
                        <div class="p-5">
                            <div class="mt-5 sm:mt-0">
            <form id="formAddId">
                <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white">
                        <div class="grid grid-cols-6 gap-4">

                            <div class="col-span-6 sm:col-span-6">
                                <label class=" text-sm font-medium text-gray-700">Name*</label>
                                <input type="text" id="product-name" placeholder="name*" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <small class="text-xs text-red-500 font-semibold"></small>
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
                                <label class=" text-sm font-medium text-gray-700">Quantity*</label>
                                <input type="number" id="quantity" placeholder="Quantity*" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <small class="text-xs text-red-500 font-semibold"></small>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label class=" text-sm font-medium text-gray-700">Price*</label>
                                <input type="number" id="price" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <small class="text-xs text-red-500 font-semibold"></small>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label class=" text-sm font-medium text-gray-700">Sales</label>
                                <input type="number" value="0" id="sales" placeholder="sales" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <small class="text-xs text-red-500 font-semibold"></small>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                <label class=" text-sm font-medium text-gray-700">Image*</label>
                                <input type="file" id="productImageId" class="mt-1 px-1.5 py-0.5 w-full shadow-sm sm:text-sm">
                                <small class="text-xs text-red-500 font-semibold"></small>
                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                <img src="" id="productImagePreviewId" class="w-24 h-auto" alt="">
                            </div>

                            <div class="col-span-6 sm:col-span-6">
                                <label class="block text-sm font-medium text-gray-700">
                                Description*
                                </label>
                                <div class="mt-1">
                                <textarea rows="3" id="description" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="description*"></textarea>
                                <small class="text-xs text-red-500 font-semibold"></small>
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
                        </div>
            
        `
    },
    afterRender() {
        const close = $('#close');
        const popUpContainer = $('.pop-up__container');
        const newFormEdit = $('#formBackend');
        if (!newFormEdit) return;
        if (close) {
            close.addEventListener('click', (event) => {
                event.stopPropagation();
                popUpContainer.classList.remove('active');
            });
        }

        $('#formAddId').addEventListener("submit", async (e) => {
            e.preventDefault();
            const productImage = $('#productImageId').files[0];
            const nameProductElement = newFormEdit.querySelector('input#product-name');
            const priceProductElement = newFormEdit.querySelector('input#price');
            const salesProductElement = newFormEdit.querySelector('input#sales');
            const quantityProductElement = newFormEdit.querySelector('input#quantity');
            const descriptionProductElement = newFormEdit.querySelector('textarea#description');

            isRequired(nameProductElement, priceProductElement
                , quantityProductElement, descriptionProductElement);
            const statusPrice = isNumber(priceProductElement);
            const statusQuantity = isNumber(quantityProductElement);

            if (!productImage) {
                $('#productImageId').classList.remove('border-2', 'border-green-400');
                $('#productImageId').classList.add('border-2', 'border-red-400');
                $('#productImageId').nextElementSibling.innerText = 'ban cần nhập ảnh !';
            } else {
                $('#productImageId').classList.remove('border-2', 'border-red-400');
                $('#productImageId').classList.add('border-2', 'border-green-400');
                $('#productImageId').nextElementSibling.innerText = '';
            }

            if (!(productImage && nameProductElement.value && priceProductElement.value
                && quantityProductElement.value && descriptionProductElement.value
                && statusPrice && statusQuantity)) return;

            let storageRef = firebase.storage().ref(`image-product/${productImage.name}`);
            storageRef.put(productImage).then(() => {
                storageRef.getDownloadURL().then(async (url) => {
                    $('#productImagePreviewId').src = url;
                    const newProduct = {
                        id: '',
                        name: nameProductElement.value,
                        image: url,
                        price: priceProductElement.value,
                        sale: salesProductElement.value,
                        status: true,
                        quantity: quantityProductElement.value,
                        instock: quantityProductElement.value,
                        description: descriptionProductElement.value,
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
