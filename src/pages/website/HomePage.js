import CategoryApi from '../../api/categoryApi';
import LastestBlog from '../../components/website/home/LastestBlog';
import Policy from '../../components/website/home/Policy';
import Top4Product from '../../components/website/home/Top4Product';

const HomePage = {
    async render() {
        const { data: categories } = await CategoryApi.getItemsByOption({ _sort: 'cateId', _order: 'desc', _limit: 2 })
        console.log(categories);
        return /*html*/`
            <section class="p-1 xl:p-0 relative">
                <div class="">
                    <a href="#">
                        <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/slider/slide-fashion-02.webp" alt="banner">
                    </a>
                </div>

                <div class="absolute top-1/3 left-2/4 text-center">
                    <h3 class="text-3xl font-semibold text-black font-momo">
                        <a href="#">Best Price This Year</a>
                    </h3>
                    <p class="text-xl mt-3">Lorem ipsum dolor sit amet</p>
                    <button class="py-2 px-6 bg-black hover:bg-yellow-600 transition-all duration-500 rounded-sm text-white mt-5">Buy Now</button>
                </div>
            </section>

            <section class="container mx-auto xl:px-32 mt-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                    ${categories.map(category => {
                        return /*html*/ `
                            <div class="relative bg-gray-300">
                                <div>
                                    <a href="/#//category/${category.cateId}"><img title="${category.cateName}" src="${category.image}" alt="${category.cateName}"></a>
                                </div>
                                <div class="absolute top-1/2 left-1/4 -ml-8 shadow-sm rounded-sm bg-white p-3 opacity-90">
                                    <a href="/#//category/${category.cateId}">
                                        <p class="font-bold">${category.cateName}</p>
                                    </a>
                                    <span class="mt-3 text-xs text-opacity-90">${category.short_desc}</span>
                                </div>
                            </div>
                        `
                    }).join('')}
                </div>
            </section>

            ${await Top4Product.render()}

            <section class="mt-10 p-1 xl:p-0 relative md:px-8 lg:px-16 xl:px-32">
                <div class="">
                    <a href="#">
                        <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion2-full.webp" alt="banner">
                    </a>
                </div>

                <div class="absolute top-1/3 left-2/4 text-center">
                    <h3 class="text-4xl font-bold text-black">
                        <a href="#">Best Price This Year</a>
                    </h3>
                    <p class="text-xl mt-3">Lorem ipsum dolor sit amet</p>
                    <button class="py-2 px-6 bg-green-500 rounded text-white mt-5">Buy Now</button>
                </div>
            </section>

            ${await LastestBlog.render()}
            ${await Policy.render()}
        `;
    },
    async afterRender() {
        return `${await Top4Product.afterRender()}`
    }
}

export default HomePage;
