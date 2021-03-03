import CategoryApi from '../../api/categoryApi';
import UserApi from '../../api/userApi';
import LocalStorage from '../../localStorage/LocalStorage';
import firebase from "../../firebase";
import { $ } from '../../utils';
const Header = {
    async render() {
        const { data: categories } = await CategoryApi.getAll();
        return /*html*/ `
            <header class="container mx-auto xl:px-32 bg-white sticky top-0 z-50 shadow-md">
                <div div class="flex justify-between items-center">
                <div>
                    <a href="#">
                        <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/logo.webp"
                            alt="logo">
                    </a>
                </div>
                <div>
                    <ul class="font-semibold">
                        <li class="inline-block">
                            <a class="flex items-center p-3.5 hover:bg-gray-100 group-hover:bg-gray-100 group-hover:border-black" href="#">
                                <span class="ml-1">
                                    Home
                                </span>
                            </a>
                        </li>
                        <li class="inline-block group relative">
                            <a class="p-3.5 group-hover:bg-gray-100 group-hover:border-b-2 group-hover:border-white" href="/#//products">
                                <span class="inline-block mr-0.5">Products</span>
                                <svg class="inline-block font-semibold" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                            <div class="absolute -mt-10 w-40 bg-gray-100 text-black shadow opacity-0 invisible group-hover:mt-3.5 group-hover:opacity-100 group-hover:visible transition-all duration-500">
                            <ul>
                                ${categories.map((category, index) => {
            return /*html*/ `<li>
                                    <a class="flex pl-3 py-1.5 items-center text-gray-700 hover:bg-gray-200 hover:border hover:border-white" href="/#//category/${category.cateId}">
                                        <span class="ml-3">
                                            ${category.cateName}
                                        </span>
                                    </a>
                                </li>`
        }).join('')}
                            </ul>
                            </div>
                        </li>
                        <li class="inline-block"><a class="p-3.5 hover:bg-gray-100" href="/#//blog">Blog</a></li>
                        <li class="inline-block"><a class="p-3.5 hover:bg-gray-100" href="/#//contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li class="inline-block mx-3 relative">
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </a>
                        </li>
                        <li class="inline-block mx-1.5 relative">
                            <button id="openCartId">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-bag" viewBox="0 0 16 16">
                                    <path
                                        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                                <span class="w-4 h-4 absolute -bottom-1.5 -left-1 rounded-full bg-black text-white text-xs text-center" id="cart-values">0</span>
                            </button>
                        </li>
                        <li class="relative inline-block mx-1.5 -mb-3 pb-1.5 group" id="valueUserId">
                            <button class="text-sm focus:outline-none" id="loginId">Login</button>
                            <button class="text-sm ml-3 focus:outline-none" id="registerId">Register</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        `
    },
    async afterRender() {
        let divFormLoginElement = document.createElement('div');
        divFormLoginElement.classList.add('block-form-login', 'hidden');
        let divFormRegisterElement = document.createElement('div');
        divFormRegisterElement.classList.add('block-form-register', 'hidden');
        divFormLoginElement.innerHTML = /*html*/ `
            <div class="fixed top-0 bg-gray-500 bg-opacity-50 h-full w-full">
                <div class="bg-white relative top-1/4 -mt-10 py-2 px-4 max-w-lg h-auto mx-auto">
                    <div class=" text-center py-2 border-b border-gray-300 relative">
                        <div>
                            <span class="uppercase text-lg font-semibold">Login form</span>
                        </div>
                        <button class="close-form absolute top-2 right-2 bg-black text-white px-1">&times;</button>
                    </div>
                    <form id="formLoginId">
                        <div class="mt-3">
                            <label class="font-semibold">User Name</label>
                            <input id="userNameId" type="text" class="w-full my-1 py-3 pl-2 border-gray-300 text-xs text-gray-700"
                                placeholder="User name *">
                        </div>
                        <div class="mt-3">
                            <label class="font-semibold">Password *</label>
                            <input id="passwordId" type="text" class="w-full my-1 py-3 pl-2 border-gray-300 text-xs text-gray-700"
                                placeholder="Pass Word *">
                        </div>
                        <div class="text-center">
                            <button
                                class="bg-black py-1.5 px-5 mt-3 text-white text-sm font-semibold shadow hover:bg-yellow-600 focus:outline-none">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            `;
        divFormRegisterElement.innerHTML = /*html*/ `
            <div class="fixed top-0 bg-gray-500 bg-opacity-50 h-full w-full">
                <div class="bg-white relative top-1/4 -mt-10 py-2 px-4 max-w-lg h-auto mx-auto overflow-y-auto">
                    <div class=" text-center py-2 border-b border-gray-300 relative">
                        <div>
                            <span class="uppercase text-lg font-semibold">Register form</span>
                        </div>
                        <button class="close-form absolute top-2 right-2 bg-black text-white px-1">&times;</button>
                    </div>
                    <form id="formRegisterId">
                        <div class="mt-3">
                            <label class="font-semibold">Full name</label>
                            <input id="fullNameId" type="text" class="w-full my-1 py-3 pl-2 border-gray-300 text-xs text-gray-700"
                                placeholder="Full name *">
                        </div>
                        <div class="mt-3">
                            <label class="font-semibold">User Name</label>
                            <input id="userNameFormRegisterId" type="text" class="w-full my-1 py-3 pl-2 border-gray-300 text-xs text-gray-700"
                                placeholder="User name *">
                        </div>
                        <div class="mt-3">
                            <label class="font-semibold">Password *</label>
                            <input id="passwordFormRegisterId" type="text" class="w-full my-1 py-3 pl-2 border-gray-300 text-xs text-gray-700"
                                placeholder="Pass Word *">
                        </div>
                        <div class="mt-3">
                            <label class="font-semibold">Avatar *</label>
                            <input id="avatarId" type="file" class="w-full my-1 py-3 pl-2 border-gray-300 text-xs text-gray-700"
                                placeholder="Avatar *">
                        </div>
                        <div class="text-center">
                            <button
                                class="bg-black py-1.5 px-5 mt-3 text-white text-sm font-semibold shadow hover:bg-yellow-600 focus:outline-none">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            `;
        $('.main-content').appendChild(divFormLoginElement);
        $('.main-content').appendChild(divFormRegisterElement);
    },
    HandleLogicFormLogin() {
        if (!$('#loginId')) return;
        $('#loginId').addEventListener('click', () => {
            $('.block-form-login').classList.remove('hidden');
            $('.block-form-register').classList.add('hidden');

            $('#formLoginId').addEventListener('submit', async (e) => {
                e.preventDefault();
                let userName = $('#formLoginId').querySelector('#userNameId').value;
                if (userName) {
                    let { data: users } = await UserApi.getAll();
                    let checkUser = users.find(user => user.userName == userName);
                    if (!checkUser) alert('sai tài khoản hoặc mật khẩu !');
                    this.checkPass(checkUser);
                } else {
                    alert('sai tài khoản hoặc mật khẩu !');
                }
            })
        });

        if (!$('#registerId')) return;
        $('#registerId').addEventListener('click', () => {
            $('.block-form-login').classList.add('hidden');
            $('.block-form-register').classList.remove('hidden');
            $('#formRegisterId').addEventListener('submit', async (e) => {
                e.preventDefault();
                let fullName = $('#formRegisterId').querySelector('#fullNameId').value;
                let userName = $('#formRegisterId').querySelector('#userNameFormRegisterId').value;
                let passWord = $('#formRegisterId').querySelector('#passwordFormRegisterId').value;

                const { data: users } = await UserApi.getAll();
                let tempUser = users.find(user => user.userName == userName);
                if (tempUser) {
                    alert('tên đăng nhập đã tồn tại');
                }
                else {
                    const customerAvatar = $('#avatarId').files[0];
                    if (!customerAvatar) {
                        console.log('ban can nhap avatar');
                        return
                    }
                    let storageRef = firebase.storage().ref(`image-customer/${customerAvatar.name}`);
                    storageRef.put(customerAvatar).then(() => {
                        storageRef.getDownloadURL().then(async (url) => {
                            const user = {
                                id: '',
                                userName,
                                fullName,
                                passWord,
                                avatar: url,
                            }
                            UserApi.add(user);
                            LocalStorage.saveUser(user);
                            this.setUpUser(user);
                            alert('Register thành công !')
                        })
                    })
                }
            });
        });
    },
    checkPass(user) {
        let pass = $('#formLoginId').querySelector('#passwordId').value;
        if (!pass) return;
        if (user.passWord == pass) {
            LocalStorage.saveUser(user);
            $('#formLoginId').reset();
            this.setValuesUser(user);
            this.closeForm();
            this.logOut();
            alert('Login thành công !');
        }
        else {
            alert('sai tài khoản hoặc mật khẩu !');
        }
    },
    setValuesUser(user) {
        if (user) {
            $('#valueUserId').innerHTML = /*html */ `
            <a href="/#/user" class="pb-1.5">
                <img class="rounded-full w-6 h-6" src="${user.avatar}" alt="${user.name}">
            </a>
            <ul
                class="absolute w-36 -mt-32 bg-gray-100 shadow opacity-0 invisible group-hover:mt-1.5 group-hover:opacity-100 group-hover:visible transition-all duration-500">
                <li>
                    <a class="flex p-2" href="/#/backend">Quan tri</a>
                </li>
                <li>
                    <button id="logoutId" class="flex p-2">Log out</button>
                </li>
            </ul>
        `
        } else {
            $('#valueUserId').innerHTML = /*html */ `
                <button class="text-sm focus:outline-none" id="loginId">Login</button>
                <button class="text-sm ml-3 focus:outline-none" id="registerId">Register</button>
            `
        }
    },
    onCloseForm() {
        $('.close-form').forEach(btn => {
            btn.onclick = () => {
                this.closeForm();
            }
        }
        );
    },
    closeForm() {
        $('.block-form-login').classList.add('hidden');
        $('.block-form-register').classList.add('hidden');
    },
    async setUpUser() {
        const user = LocalStorage.getUser();
        if (user) this.setValuesUser(user);
        this.onCloseForm();
        this.logOut();
    },
    logOut() {
        if ($('#logoutId')) {
            $('#logoutId').onclick = () => {
                localStorage.removeItem('user');
                this.setValuesUser(0);
                this.HandleLogicFormLogin();
            }
        }
    }
}

export default Header;
