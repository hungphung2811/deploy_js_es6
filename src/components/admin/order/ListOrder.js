import OrderApi from "../../../api/orderApi";
import { $ } from '../../../utils';
import FormEditOrder from "./FormEditOrder";
const ListOrder = {
    async render() {
        const { data: orders } = await OrderApi.getAll();
        return /*html*/`
                    <table class="min-w-full divide-y divide-gray-200 ${orders.length == 0 ? 'hidden' : ''}">
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
                                                    phone number
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    address
                                                </th>
                                                <th scope="col" class="py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Edit
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            ${orders.map((order, index) => {
            return /*html*/ `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                        ${index + 1}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${order.name}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${order.phone}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${order.address}
                    </td>
                    <td class="py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button data-id="${order.id}" class="btn btn-edit text-indigo-600 hover:text-indigo-900" style="outline:none;">
                            <svg class="text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>
                    </td>
            </tr>
            `
        }).join('')}
                                        </tbody>
                                    </table>
                                    <div class="text-xl font-semibold text-center my-5 ${orders.length == 0 ? 'block' : 'hidden'}">
                                        <span>Không có sản phẩm</span>
                                    </div>
        `;
    },
    async afterRender() {
        const popUpContainer = $('.pop-up__container');
        const close = $('#close');
        const newFormEdit = $('#formBackend');
        const btns = [...document.querySelectorAll('.btn')];

        if (!(popUpContainer && newFormEdit && btns)) return;
        btns.forEach(btn => {
            btn.addEventListener('click', async () => {
                try {
                    if (btn.classList.contains('btn-edit')) {
                        const { data: order } = await OrderApi.get(btn.dataset.id);
                        newFormEdit.innerHTML = await FormEditOrder.render(order);
                        await FormEditOrder.afterRender(order);
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

export default ListOrder;
