import ContactApi from "../../../api/contactApi";
import { $, reRender } from "../../../utils";
const ListContacts = {
    async render() {
        const { data: contacts } = await ContactApi.getItemsByOption({ _sort: 'cateId', _order: 'decs' });
        return /*html*/`
                    <table class="min-w-full divide-y divide-gray-200 ${contacts.length == 0 ? 'hidden' : ''}">
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
                                                    email
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    subtitle
                                                </th>
                                                <th scope="col"
                                                    class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    message
                                                </th>
                                                <th scope="col" class="py-3 text-center text-sm font-medium text-gray-500 uppercase tracking-wider">
                                                    Delete
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            ${contacts.map((contact, index) => {
            return /*html*/ `
                <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                        ${index + 1}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            
                            <div class="ml-4">
                                <div class="text-sm font-medium text-gray-900">
                                    ${contact.name}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td class="px-6 py-4">
                        ${contact.email}
                    </td>
                    <td class="px-6 py-4">
                        ${contact.subTitle}
                    </td>
                    <td class="px-6 py-4">
                        ${contact.message}
                    </td>
                    <td class="py-4 whitespace-nowrap text-center text-sm font-medium">
                        <button data-id="${contact.id}" class="btn btn-remove outline-none border-0 text-indigo-600 hover:text-indigo-900" style="outline:none;">
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
                                    <div class="text-xl font-semibold text-center my-5 ${contacts.length == 0 ? 'block' : 'hidden'}">
                                        <span>Không có sản phẩm</span>
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
                try {
                    if (btn.classList.contains('btn-remove')) {
                        const uerConfirm = confirm('Bạn có chắc muốn xóa ?');
                        if (uerConfirm) {
                            console.log(btn.dataset.id);
                            await ContactApi.remove(btn.dataset.id);
                            await reRender(ListContacts, '#listCategoriesId');
                        }
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

export default ListContacts;
