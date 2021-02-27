const BlogPage={
    render(){
        return /*html*/ `
        <div>
        <div class="container mx-auto py-10 text-center bg-gray-100">
            <h3 class="text-2xl font-mono font-semibold">Blog</h3>
            <div>
                <span><a class="text-xs text-gray-600 text-opacity-70" href="/#/">Homepage</a></span>
                <span class="text-xs text-gray-600 text-opacity-90">></span>
                <span class="text-xs text-gray-900">Blog</span>
            </div>
        </div>
        <div class="grid grid-cols-7 gap-7 md:px-8 lg:px-16 xl:px-32 mt-10">
            <div class="col-span-5">
                <div class="mb-5 pb-14 border-b border-gray-200">
                    <div>
                        <img src="https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/blog-2-1000x565.jpg"
                            alt="">
                    </div>
                    <div>
                        <div class="my-3">
                            <div class="flex items-center justify-start">
                                <p
                                    class="bg-yellow-600 hover:bg-yellow-800 p-1 mr-2 text-white font-semibold text-xs uppercase">
                                    bags</p>
                                <p
                                    class="bg-yellow-600 hover:bg-yellow-800 p-1 mr-2 text-white font-semibold text-xs uppercase">
                                    Shoes</p>
                                <div class="mr-2">
                                    <span class="text-gray-500 text-xs uppercase">By namam</span>
                                </div>
                                <div>
                                    <span class="text-gray-500 text-xs uppercase">DECEMBER 21, 2020</span>
                                </div>
                            </div>

                        </div>
                        <div>
                            <h2 class="text-xl font-semibold mb-2">Meet the Former Model Designing Couture-Level
                                Accessories in Paris</h2>
                            <p class="text-gray-400 text-xs">
                                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec
                                dictum. Vici consequat justo enim.
                                Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero
                                tellus viverra venenatis aliquam.
                                Commodo natoque quam pulvinar elit
                            </p>
                        </div>
                    </div>
                    <div class="mt-5">
                        <button class="bg-black py-2 px-5 text-white text-sm font-semibold uppercase">read more</button>
                    </div>
                </div>
                <div class="mb-5 pb-14 border-b border-gray-200">
                    <div>
                        <img src="https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/blog-2-1000x565.jpg" alt="">
                    </div>
                    <div>
                        <div class="my-3">
                            <div class="flex items-center justify-start">
                                <p class="bg-yellow-600 hover:bg-yellow-800 p-1 mr-2 text-white font-semibold text-xs uppercase">
                                    bags</p>
                                <p class="bg-yellow-600 hover:bg-yellow-800 p-1 mr-2 text-white font-semibold text-xs uppercase">
                                    Shoes</p>
                                <div class="mr-2">
                                    <span class="text-gray-500 text-xs uppercase">By namam</span>
                                </div>
                                <div>
                                    <span class="text-gray-500 text-xs uppercase">DECEMBER 21, 2020</span>
                                </div>
                            </div>
                
                        </div>
                        <div>
                            <h2 class="text-xl font-semibold mb-2">Meet the Former Model Designing Couture-Level
                                Accessories in Paris</h2>
                            <p class="text-gray-400 text-xs">
                                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec
                                dictum. Vici consequat justo enim.
                                Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero
                                tellus viverra venenatis aliquam.
                                Commodo natoque quam pulvinar elit
                            </p>
                        </div>
                    </div>
                    <div class="mt-5">
                        <button class="bg-black py-2 px-5 text-white text-sm font-semibold uppercase">read more</button>
                    </div>
                </div>
            </div>
            <div class="col-span-2">
                <div>
                    <h3 class="text-lg font-semibold font-momo mb-3">Search</h3>
                    <form action="">
                        <div class="relative">
                            <input type="text"
                                class="w-full text-xs text-gray-600 border border-gray-300 pl-2 focus:border-gray-300"
                                placeholder="Search...">
                            <button class="absolute top-1/3 right-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                    class="bi bi-search" viewBox="0 0 16 16">
                                    <path
                                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
                <div class="border-t border-gray-300 mt-5">
                    <h3 class="text-lg font-semibold font-momo mt-5 mb-3">Blog categories</h3>
                    <div>
                        <ul>
                            <li><a class="text-xs font-momo text-gray-500" href="/#/">Bags</a></li>
                            <li><a class="text-xs font-momo text-gray-500" href="/#/">Dresses</a></li>
                            <li><a class="text-xs font-momo text-gray-500" href="/#/">Clothes</a></li>
                            <li><a class="text-xs font-momo text-gray-500" href="/#/">Shoes</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-300 mt-5">
                    <h3 class="text-lg font-semibold font-momo mt-5 mb-3">Products tags</h3>
                    <div>
                        <ul class="flex">
                            <li><a class="px-2 text-xs font-momo text-gray-500" href="/#/">Bags</a></li>
                            <li><a class="px-2 text-xs font-momo text-gray-500" href="/#/">Dresses</a></li>
                            <li><a class="px-2 text-xs font-momo text-gray-500" href="/#/">Clothes</a></li>
                            <li><a class="px-2 text-xs font-momo text-gray-500" href="/#/">Shoes</a></li>
                        </ul>
                    </div>
                </div>
                <div class="border-t border-gray-300 mt-5">
                    <h3 class="text-lg font-semibold font-momo mt-5 mb-3">Lasted Post</h3>
                    <div>
                        <div class="flex justify-start items-center my-3">
                            <div>
                                <img src="https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/blog-2-150x150.jpg"
                                    alt="">
                            </div>
                            <div class="ml-3">
                                <h6 class="text-xs font-semibold flex flex-wrap"><a href="/#/">Meet the Former Model
                                        Designing Couture-Level Accessories in Paris</a></h6>
                                <p class="text-xs mt-1 text-gray-400">
                                    December 21, 2020
                                </p>
                            </div>
                        </div>
                        <div class="flex justify-start items-center my-3">
                            <div>
                                <img src="https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/blog-2-150x150.jpg"
                                    alt="">
                            </div>
                            <div class="ml-3">
                                <h6 class="text-xs font-semibold flex flex-wrap"><a href="/#/">Meet the Former Model
                                        Designing Couture-Level
                                        Accessories in Paris</a></h6>
                                <p class="text-xs mt-1 text-gray-400">
                                    December 21, 2020
                                </p>
                            </div>
                        </div>
                        <div class="flex justify-start items-center my-3">
                            <div>
                                <img src="https://demo2wpopal.b-cdn.net/woncep/wp-content/uploads/2020/11/blog-2-150x150.jpg"
                                    alt="">
                            </div>
                            <div class="ml-3">
                                <h6 class="text-xs font-semibold flex flex-wrap"><a href="/#/">Meet the Former Model
                                        Designing Couture-Level
                                        Accessories in Paris</a></h6>
                                <p class="text-xs mt-1 text-gray-400">
                                    December 21, 2020
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
        `
    }
}

export default BlogPage;
