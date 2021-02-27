const Error404Page = {
    render(){
        return /*html*/ `
        <div class="container mx-auto md:px-8 lg:px-16 xl:px-32 mt-10 py-16 bg-white">
        <div class="flex items-center">
            <div>
                <img src="https://demo2wpopal.b-cdn.net/woncep/wp-content/themes/woncep/assets/images/404/404.png" alt="">
            </div>

            <div class="ml-10">
                <div>
                    <span class="text-9xl font-bold">404</span>
                    <p class="font-semibold text-lg my-2">Oops! That page can't be found.</p>
                    <p class="text-xs text-gray-500">
                        Sorry, but the page you are looking for is not found. Please, make sure you have typed the current URL.
                    </p>
                </div>
                <div class="mt-5">
                    <a class="font-semibold text-sm bg-black text-white py-2 px-5 hover:bg-yellow-600" href="/#/">Back to home</a>
                </div>
            </div>
        </div>
    </div>
        `;
    }
}

export default Error404Page;