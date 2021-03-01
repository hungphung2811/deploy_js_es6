import BlogApi from "../../api/blogApi";
import SideBarBlog from "../../components/website/blog/SidebarBlog";

const BlogPage={
    async render(){
        const {data:blogs} = await BlogApi.getItemsByOption({_sort:'id',_order:'desc'});
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
                ${blogs.map(blog=>{
                    return /*html*/ `
                        <div class="mb-5 pb-14 border-b border-gray-200">
                    <div>
                        <a href="/#//blog/${blog.id}">
                            <img src="${blog.image}" alt="${blog.title}" title="${blog.title}" />
                        </a>
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
                            <h2 class="text-xl font-semibold mb-2" title="${blog.title}">
                                <a href="/#//blog/${blog.id}">${blog.title}</a>
                            </h2>
                            <p class="text-gray-400 text-xs">
                                ${blog.short_desc}
                            </p>
                        </div>
                    </div>
                    <div class="mt-5">
                        <a href="/#//blog/${blog.id}" class="bg-black py-2 px-5 text-white text-sm font-semibold uppercase">read more</a>
                    </div>
                </div>
                    `
                })}
            </div>

            <div class="col-span-2">
                ${await SideBarBlog.render()}
            </div>

        </div>

    </div>
        `
    }
}

export default BlogPage;
