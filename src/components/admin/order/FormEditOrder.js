import OrderDetailApi from "../../../api/orderDetailApi";
import { $ } from "../../../utils";

const FormEditOrder = {
    async render(order) {
        const { data: orderDetail } = await OrderDetailApi.getItemsByOption({orderId:order.id});
        return /*html*/ `
            <div class="sticky top-0 bg-white border-b-2 border-gray-200 shadow flex justify-around p-5">
                    <button class="absolute top-3.5 right-3 bg-indigo-800 px-1.5 py-1 text-lg text-white font-bold outline-none rounded shadow" id="close">&times;</button>
                    <h1 class="uppercase text-lg font-semibold">form Edit order detail</h1>
                </div>
            <div class="mt-5 sm:mt-0">
            <form action="#">
                <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 ${orderDetail.length == 0 ? 'hidden' : ''}">
                                        <thead class="bg-gray-50">
                                            <tr>
                                            <th scope="col"
                                                    class="text-xs px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                                                    #
                                                </th>
                                                <th scope="col"
                                                    class="text-xs px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col"
                                                    class="text-xs px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                                                    phone number
                                                </th>
                                                <th scope="col"
                                                    class="text-xs px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                                                    address
                                                </th>
                                                <th scope="col" class="text-xs py-3 text-center font-medium text-gray-500 uppercase tracking-wider">
                                                    Edit
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            ${orderDetail.map((order, index) => {
                                                return /*html*/ `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                        ${index + 1}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                                <img class="rounded-full" src="${order.image}" alt="">
                            </div>
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    ${order.name}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${order.price}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        ${order.amount}
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
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button id="btn-save" type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
        `
    },
    afterRender(order) {
        const close = $('#close');
        const popUpContainer = $('.pop-up__container');
        if (close) {
            close.addEventListener('click', (event) => {
                event.stopPropagation();
                popUpContainer.classList.remove('active');
            });
        }
        console.log('after order',order);
    }
}

export default FormEditOrder;
