import FormAdd from '../../components/admin/products/FormAdd';
import ListProducts from '../../components/admin/products/ListProducts';
import { $ } from '../../utils';

const AdminProductsPage = {
    async render() {
        return /*html*/`
                <div class="bg-gray-200 py-3">
                    <div class="px-4 mr-auto flex justify-end mb-1.5">
                        <button id="btn-addNew" type="button" class="inline-flex justify-center py-1.5 px-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none">
                        Add new
                        </button>
                    </div>
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto">
                            <div class="py-2 align-middle inline- min-w-full sm:px-3 lg:px-4">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm" id="list-products">
                                    ${await ListProducts.render()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pop-up__container" class="pop-up__container">
                    <div class="pop-up overflow-auto h-5/6 relative shadow-lg rounded" id="formBackend">
                        
                    </div>
                </div>
        `;
    },
    async afterRender() {
        return `${(() => {
            const close = $('#close');
            const popUpContainer = $('.pop-up__container');
            const newFormEdit = $('#formBackend');
            if (!$('#btn-addNew')) console.log('hung');
            $('#btn-addNew').addEventListener("click", async () => {
                newFormEdit.innerHTML = await FormAdd.render();
                popUpContainer.classList.toggle('active');
                await FormAdd.afterRender();
            })
            if (close) {
                close.addEventListener('click', (event) => {
                    event.stopPropagation();
                    popUpContainer.classList.remove('active');
                });
            }
        })() + await ListProducts.afterRender()}`
    }
}

export default AdminProductsPage;
