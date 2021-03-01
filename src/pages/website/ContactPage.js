import ContactApi from '../../api/contactApi';
import LocalStorage from '../../localStorage/LocalStorage';
import {$} from '../../utils';
const ContactPage = {
    render(){
        return /*html*/ `
        <div>
        <div class="container mx-auto py-10 text-center bg-gray-100">
            <h3 class="text-2xl font-mono font-semibold">Contact</h3>
            <div>
                <span><a class="text-xs text-gray-600 text-opacity-70" href="/#/">Homepage</a></span>
                <span class="text-xs text-gray-600 text-opacity-90">></span>
                <span class="text-xs text-gray-900">Contact</span>
            </div>
        </div>
        <div class="grid grid-cols-3 md:px-8 lg:px-16 xl:px-32 mt-10">
            <div class="pr-10 col-span-1 border-r border-opacity-90">
                <div>
                    <h3 class="text-2xl font-semibold font-momo">Store Information</h3>
                    <p class="mt-2 text-xs font-momo text-gray-500">Lorem ipsum dolor sit amet amet adipisicing, Lorem
                        ipsum dolor sit amet adipisicing
                        elit.</p>
                </div>
                <div class="mt-5 border-t">
                    <div class="flex justify-start items-center my-3">
                        <div>
                            <svg class="text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                <path
                                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <h6 class="text-sm font-semibold">Address</h6>
                            <p class="text-xs mt-1">
                                70 Washington Square South New York, NY
                                10012, United States
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center my-3">
                        <div>
                            <svg class="text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                                <path
                                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <h6 class="text-sm font-semibold">Phone</h6>
                            <p class="text-xs mt-1">
                                0964911301
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center my-3">
                        <div>
                            <svg class="text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                fill="currentColor" class="bi bi-envelope-open" viewBox="0 0 16 16">
                                <path
                                    d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <h6 class="text-sm font-semibold">Email</h6>
                            <p class="text-xs mt-1">
                                hungpvph12160@fpt.edu.vn
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-start items-center my-3">
                        <div>
                            <svg class="text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                <path
                                    d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <h6 class="text-sm font-semibold">Open</h6>
                            <p class="text-xs mt-1">
                                8 AM - 4 PM
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex justify-between items-center mt-10">
                    <div>
                        <p class="text-sm font-semibold font-mono">Social Media :</p>
                    </div>
                    <div class="flex">
                        <div class="group">
                            <a
                                class="p-1 w-8 h-8 border border-black rounded-full flex justify-center items-center group-hover:border-yellow-600">
                                <svg class="group-hover:text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>
                        </div>
                        <div class="group">
                            <a
                                class="p-1 w-8 h-8 border border-black rounded-full flex justify-center items-center group-hover:border-yellow-600">
                                <svg class="group-hover:text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                        </div>
                        <div class="group">
                            <a
                                class="p-1 w-8 h-8 border border-black rounded-full flex justify-center items-center group-hover:border-yellow-600">
                                <svg class="group-hover:text-yellow-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-2 pl-10">
                <div>
                    <h3 class="text-2xl font-semibold font-momo">Got Any Questions?</h3>
                    <p class="mt-2 text-xs font-momo text-gray-500">
                        Use the form below to get in touch with the sales team.
                    </p>
                </div>
                <div class="w-full mt-8">
                    <form id="fomrContactId">
                        <input id="nameContactId" type="text" class="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" placeholder="Name *">
                        <input id="emailContactId" type="text" class="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" placeholder="Email *">
                        <input id="subTitleContactId" type="text" class="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" placeholder="Subtitle">
                        <textarea id="messageContactId" class="w-full my-2 py-3 pl-2 border-gray-300 text-xs text-gray-700" rows="5" placeholder="Message"></textarea>
                        <button class="bg-black py-1.5 px-5 mt-3 text-white text-sm font-semibold">Post</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
        `
    },
    async afterRender(){
        $('#fomrContactId').addEventListener('submit',async (e) => {
            e.preventDefault();
            const user = LocalStorage.getUser();
            if (!user) {
                alert('Bạn cần đăng nhập !');
                return;
            }
            console.log(user);
            const contact = {
                id: '',
                name:$('#nameContactId').value,
                email:$('#emailContactId').value,
                subTitle:$('#subTitleContactId').value,
                message:$('#messageContactId').value,
                userId: user.id
            }
            await ContactApi.add(contact);
        })
    }
}

export default ContactPage;
