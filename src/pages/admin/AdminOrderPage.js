import ListOrder from '../../components/admin/order/ListOrder';

const AdminOrderPage = {
    async render() {
        return /*html*/`
                <div class="bg-gray-200 py-3">
                    <div class="flex flex-col">
                        <div class="-my-2 overflow-x-auto">
                            <div class="py-2 align-middle inline- min-w-full sm:px-3 lg:px-4">
                                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm" id="listCategoriesId">
                                    ${await ListOrder.render()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pop-up__container" class="pop-up__container">
                    <div class="pop-up overflow-auto h-auto shadow-lg rounded">
                        <div class="relative" id="formBackend">

                        </div>
                    </div>
                </div>
        `;
    },
    async afterRender() {
        return `${await ListOrder.afterRender()}`
    }
}

export default AdminOrderPage;
