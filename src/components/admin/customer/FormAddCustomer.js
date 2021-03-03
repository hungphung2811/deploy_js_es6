import UserApi from "../../../api/userApi";
import firebase from "../../../firebase";
import { $, reRender } from '../../../utils';
import ListCustomer from "./ListCustomer";

const FormAddCustomer = {
    async render() {
        return /*html*/ `
                <div class="sticky top-0 bg-white border-b-2 border-gray-200 shadow flex justify-around p-5">
                    <button class="absolute top-3.5 right-3 bg-indigo-800 px-1.5 py-1 text-lg text-white font-bold outline-none rounded shadow" id="close">&times;</button>
                    <h1 class="uppercase text-lg font-semibold">form add customer</h1>
                </div>
                <div class="p-5" >
                    <div class="mt-5 sm:mt-0">
                        <form id="formAddId">
                            <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white">
                                    <div class="grid grid-cols-6 gap-4">

                                        <div class="col-span-6 sm:col-span-6">
                                            <label class=" text-sm font-medium text-gray-700">User Name</label>
                                            <input value="" type="text" id="userNameCustomerId" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>
        
                                        <div class="col-span-6 sm:col-span-6">
                                            <label class=" text-sm font-medium text-gray-700">Full Name</label>
                                            <input value="" type="text" id="fullNameCustomerId" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                            <label class=" text-sm font-medium text-gray-700">Avatar</label>
                                            <input type="file" id="avatarCustomerId" class="mt-1  w-full shadow-sm sm:text-sm">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                                            <img src="" id="imagePreviewCustomerId" class="w-24 h-auto" alt="">
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
        const formAddCategory = $('#formBackend');
        if (!formAddCategory) return;
        const close = $('#close');
        const popUpContainer = $('.pop-up__container');
        if (close) {
            close.addEventListener('click', (event) => {
                event.stopPropagation();
                popUpContainer.classList.remove('active');
            });
        }
        $('#formAddId').addEventListener("submit", async (e) => {
            e.preventDefault();
            const customerAvatar = $('#avatarCustomerId').files[0];
            if (!customerAvatar) {
                console.log('banj can nhap anh');
                return;
            }
            if (customerAvatar) {
                let storageRef = firebase.storage().ref(`image-customer/${customerAvatar.name}`);
                storageRef.put(customerAvatar).then(() => {
                    storageRef.getDownloadURL().then(async (url) => {
                        $('#imagePreviewCustomerId').src = url;
                        const newUser = {
                            id: '',
                            userName: formAddCategory.querySelector('input#userNameCustomerId').value,
                            avatar: url,
                            fullName: formAddCategory.querySelector('#fullNameCustomerId').value,
                        }
                        await UserApi.add(newUser);
                        await reRender(ListCustomer, '#listCustomerId');
                        $('#formAddId').reset();
                        alert('Add Thành Công !');
                    })
                })
            }
        });
    }
}

export default FormAddCustomer;
