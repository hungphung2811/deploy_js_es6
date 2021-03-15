import ListBlog from '../../components/admin/blog/ListBlog';
import FormAddCategory from '../../components/admin/categories/formAddCategory';
import ListCategories from '../../components/admin/categories/ListCategories';
import { $ } from '../../utils';

const AdminBlogsPage = {
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
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm" id="listCategoriesId">
                                    ${await ListBlog.render()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pop-up__container" class="pop-up__container">
                    <div class="pop-up overflow-auto h-5/6 shadow-lg rounded">
                        <div class="relative" id="formBackend">

                        </div>
                    </div>
                </div>
        `;
    },
    async afterRender() {
        return `${await ListCategories.afterRender() + (() => {
            const close = $('#close');
            const popUpContainer = $('.pop-up__container');
            const formAdd = $('#formBackend');
            if (!$('#btn-addNew')) console.log('hung');
            $('#btn-addNew').addEventListener("click", async () => {
                formAdd.innerHTML = await FormAddCategory.render();
                popUpContainer.classList.toggle('active');
                await FormAddCategory.afterRender();
            })
            if (close) {
                close.addEventListener('click', (event) => {
                    event.stopPropagation();
                    popUpContainer.classList.remove('active');
                });
            }
        })()}`
    }
}

export default AdminBlogsPage;
