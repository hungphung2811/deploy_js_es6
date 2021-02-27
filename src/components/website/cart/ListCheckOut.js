const ListCheckOut = {
    render(cart){
        return cart.map((item,index)=>{
            return /*html */ `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                    ${index+1}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                            <img class="rounded-full"
                                src="${item.image}"
                                alt="${item.name}">
                        </div>
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">
                                ${item.name}
                            </div>
                        </div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    ${item.price}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span class="ml-3">
                        ${item.amount}
                    </span>
                </td>
                <td class="py-4 whitespace-nowrap text-center text-sm font-medium">
                    <button href="#" data-id="1"
                        class="btn btn-remove outline-none border-0 text-indigo-600 hover:text-indigo-900"
                        style="outline:none;">
                        <svg class="text-red-600" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z">
                            </path>
                            <path fill-rule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z">
                            </path>
                        </svg>
                    </button>
                </td>
            </tr>
            `
        }).join('')
    }
}

export default ListCheckOut;
