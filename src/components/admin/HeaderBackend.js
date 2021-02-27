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
                                            <input class="p-1 w-96 shadow-xl rounded-sm" type="text">
                                            <button class="absolute top-1 right-1 font-bold p-1 shadow-xl rounded-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </button>
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
                                                        role="menuitem">Sign out</a>
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
