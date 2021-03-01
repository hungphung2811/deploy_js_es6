const HeaderBackend = {
    render(){
        return /*html*/ `
            <header class="bg-white">
                    <div>
                        <nav class="bg-gray-700">
                            <div class="mx-auto px-4 sm:px-6 lg:px-8">
                                <div class="flex items-center justify-between h-16">
                                    <div class="flex items-center relative">
                                    <form action="">
                                    <div>
                                        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                                        <div class="mt-1 relative rounded-md shadow-sm">
                                            <div class="absolute inset-y-0 left-0 flex items-center">
                                            <label for="currency" class="sr-only">Currency</label>
                                            <select id="currency" name="currency" class="focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                                                <option>USD</option>
                                                <option>CAD</option>
                                                <option>EUR</option>
                                            </select>
                                            </div>
                                            <input type="text" class="focus:ring-indigo-500 focus:border-indigo-500 block w-96 pl-20 mb-5 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00">
                                            <button class="absolute top-2 right-1 font-bold p-1 shadow-xl rounded-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                        </div>
                                            
                                        </form>
                                    </div>
                                    <div class="hidden md:block">
                                        <div class="ml-4 flex items-center md:ml-6">
                                            <div class="ml-3 relative group">
                                                <div>
                                                    <button
                                                        class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                                        id="user-menu" aria-haspopup="true">
                                                        <span class="sr-only">Open user menu</span>
                                                        <img class="h-8 w-8 rounded-full"
                                                            src="../../../public/images/user.png"
                                                            alt="">
                                                    </button>
                                                </div>
                                                <div class="origin-top-right absolute right-0 mt-10 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:mt-0 group-hover:visible transition-all duration-300"
                                                    role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                                    <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                        role="menuitem">website</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                        </nav>
                    
                    </div>
                </header>
        `
    }
}
export default HeaderBackend;
