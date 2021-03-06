import UserApi from "../../../api/userApi";
import { $, reRender } from "../../../utils";
import FormEditCustomer from "./FormEditCustomer";
const ListCustomer = {
    async render() {
        const { data: customers } = await UserApi.getItemsByOption({ _sort: 'id', _order: 'decs' });
        return /*html*/`
                    <table class="min-w-full divide-y divide-gray-200 ${customers.length == 0 ? 'hidden' : ''}">
                                        <thead class="bg-gray-50">
                                            <tr>
                                            <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    #
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    avatar
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    user name
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    full name
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
                                            ${customers.map((customer, index) => {
            return /*html*/ `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                        ${index + 1}
                    </td>
                    <td class="px-6 py-4">
                        <img class="w-14 rounded-full" src="${customer.avatar}" alt="${customer.userName}">
                    </td>
                    <td class="px-6 py-4">
                        ${customer.userName}
                    </td>
                    <td class="px-6 py-4">
                        ${customer.fullName}
                    </td>
                    <td class="py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button data-id="${customer.id}" class="btn btn-edit text-indigo-600 hover:text-indigo-900" style="outline:none;">
                            <svg class="text-green-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>
                    </td>
                    <td class="py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button data-id="${customer.id}" class="btn btn-remove outline-none border-0 text-indigo-600 hover:text-indigo-900" style="outline:none;">
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
                                    <div class="text-xl font-semibold text-center my-5 ${customers.length == 0 ? 'block' : 'hidden'}">
                                        <span>Kh??ng c?? s???n ph???m</span>
                                    </div>
        `;
    },
    async afterRender() {
        const popUpContainer = $('.pop-up__container');
        const close = $('#close');
        const newFormEdit = $('#formBackend');
        const btns = document.querySelectorAll('.btn');
        
        if (!(popUpContainer && newFormEdit && btns)) return;
        
        btns.forEach(btn => {
            btn.addEventListener('click', async () => {
                    if (btn.classList.contains('btn-remove')) {
                        const uerConfirm = confirm('B???n c?? ch???c mu???n x??a ?');
                        if (uerConfirm) {
                            console.log(btn.dataset.id);
                            await UserApi.remove(btn.dataset.id);
                            await reRender(ListCustomer, '#listCustomerId');
                        }
                    }
                    if (btn.classList.contains('btn-edit')) {
                        const { data: user } = await UserApi.get(btn.dataset.id);
                        newFormEdit.innerHTML = await FormEditCustomer.render(user);
                        await FormEditCustomer.afterRender(user);
                        popUpContainer.classList.toggle('active');
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

export default ListCustomer;
