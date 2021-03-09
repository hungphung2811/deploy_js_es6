import ProductApi from "../../../api/productApi";
import { $, reRender } from '../../../utils'
import FormEdit from "./FormEdit";
const ListProducts = {
    async render() {
        const { data: products } = await ProductApi.getItemsByOption({_sort:'id',_order:'desc'});
        return /*html*/`
                    <table class="min-w-full divide-y divide-gray-200 ${products.length == 0 ? 'hidden' : ''}">
                                        <thead class="bg-gray-50">
                                            <tr>
                                            <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    #
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    <div>
                                                    price
                                                    </div>
                                                    <div class="text-xs text-gray-500 block capitalize">
                                                    sale
                                                    </div>
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Quantity
                                                    <div class="text-xs text-gray-500 block capitalize">
                                                    Instock / Total products
                                                    </div>
                                                </th>
                                                <th scope="col" class="py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Edit
                                                </th>
                                                <th scope="col" class="py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Delete
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            ${products.map((product, index) => {
            return /*html*/ `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                        ${index + 1}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                                <img class="rounded-full" src="${product.image}" alt="">
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    ${product.name}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${parseFloat(product.price).toFixed(2)} 
                        <div class="text-xs block text-red-500">
                            ${parseFloat(product.sale)} %
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span
                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status === true ? 'bg-green-100' : 'bg-red-200'} text-green-800">
                            ${product.status === true ? "Instock" : 'Outstock'}
                        </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span class="ml-3">
                            ${product.instock}/${product.quantity}
                        </span>
                    </td>
                    <td class="py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button data-id="${product.id}" class="btn btn-edit text-indigo-600 hover:text-indigo-900" style="outline:none;">
                            <svg class="text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>
                    </td>
                    <td class="py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button href="#" data-id="${product.id}" class="btn btn-remove outline-none border-0 text-indigo-600 hover:text-indigo-900" style="outline:none;">
                        <svg class="text-red-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                    </td>
            </tr>
            `
        }).join('')}
                                        </tbody>
                                    </table>
                                    <div class="text-xl font-semibold text-center my-5 ${products.length == 0 ? 'block' : 'hidden'}">
                                        <span>Không có sản phẩm</span>
                                    </div>
        `;
    },
    async afterRender() {
        const popUpContainer = $('.pop-up__container');
        const close = $('#close');
        const newFormEdit = $('#formBackend');
        const btns = $('.btn');

        if (!(popUpContainer && newFormEdit && btns)) return;

        btns.forEach(btn => {
            btn.addEventListener('click', async () => {
                try {
                    if (btn.classList.contains('btn-remove')) {
                        const uerConfirm = confirm('Bạn có chắc muốn xóa ?');
                        if (uerConfirm) {
                            await ProductApi.remove(btn.dataset.id);
                            await reRender(ListProducts, '#list-products');
                        }
                        else {
                            alert('ko xóa thì bấm làm gì ?');
                        }
                    }
                    if (btn.classList.contains('btn-edit')) {
                        const { data: product } = await ProductApi.get(btn.dataset.id);
                        newFormEdit.innerHTML = await FormEdit.render(product);
                        await FormEdit.afterRender(product);
                        popUpContainer.classList.toggle('active');
                    }
                } catch (error) {
                    console.log(error);
                    alert('Đã xảy ra lỗi vui lòng tải lại trang hoặc liên hệ với quản trị viên .');
                }
            });
        });
        if (close) {
            close.addEventListener('click', (event) => {
                event.stopPropagation();
                popUpContainer.classList.remove('active');
            });
        }
    }

}

export default ListProducts;
