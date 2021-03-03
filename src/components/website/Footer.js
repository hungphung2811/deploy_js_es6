const Footer = {
    render() {
        return /*html*/ `
        <footer class="mt-8">
            <section class="bg-gray-50 py-16">
                <div class="text-center">
                    <h2 class="font-semibold font-mono text-2xl">Sign up now & get 10% off</h2>
                    <p class="text-lg text-gray-800 mt-2 font-momo">Be the first to know about our new arrivals and exclusive offers.</p>
                </div>
                <div class="text-center">
                    <form action="">
                    <input type="text" placeholder="Email*">
                    <button class="py-2 px-5 mt-3 text-center bg-black text-white hover:bg-yellow-600 transition-all duration-300">Send</button>
                    </form>
                </div>
                <div class="text-center mt-7">
                    <ul>
                        <li class="font-momo text-sm mx-2 font-semibold inline-block uppercase hover:text-yellow-600"><a href="/#//blog">What's new</a></li>
                        <li class="font-momo text-sm mx-2 font-semibold inline-block uppercase hover:text-yellow-600"><a href="/#//category/1">Men</a></li>
                        <li class="font-momo text-sm mx-2 font-semibold inline-block uppercase hover:text-yellow-600"><a href="/#//category/2">Women</a></li>
                        <li class="font-momo text-sm mx-2 font-semibold inline-block uppercase hover:text-yellow-600"><a href="/#//category/3">Accessories</a></li>
                        <li class="font-momo text-sm mx-2 font-semibold inline-block uppercase hover:text-yellow-600"><a href="/#//">Trend</a></li>
                    </ul>
                </div>
            </section>

            <section class="flex justify-center items-center py-7 text-white font-semibold text-sm bg-gray-900">
                <p>Copyright © 2020 w.concep. All Rights Reserved.</p>
            </section>
        </footer>
        `
    }
}

export default Footer;
