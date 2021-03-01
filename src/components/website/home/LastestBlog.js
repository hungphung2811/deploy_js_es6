import BlogApi from "../../../api/blogApi";

const LastestBlog = {
    async render() {
        const { data: blogs } = await BlogApi.getItemsByOption({ _sort: 'id', _order: 'desc', _limit: 3 })
        return /*html*/ `
            <section class="mt-14 container mx-auto lg:px-32">
                <div class="mb-10">
                    <h3 class="text-center text-2xl font-semibold">Lastest From Blog</h3>
                </div>
                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    ${blogs.map(blog => {
            return /*html*/ `
                            <div class="p-3 text-center">
                                <div>
                                    <a href="/#//blog/${blog.id}">
                                        <img src="${blog.image}" alt="${blog.title}" title="${blog.title}" />
                                    </a>
                                </div>
                                <h3 class="text-center text-sm mt-2">
                                    <a href="/#//blog/${blog.id}">${blog.title}</a>
                                </h3>
                                <p class="text-xs mt-1.5 flex items-center justify-center">
                                    <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
                                            <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                            </svg>
                                    </span>
                                    <span class="ml-1.5">jun 03,2020</span>
                                </p>
                            </div>
                        `
        }).join('')}
                </div>
            </section>
        `
    }
}

export default LastestBlog;
