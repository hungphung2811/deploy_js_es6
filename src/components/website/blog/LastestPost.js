import BlogApi from "../../../api/blogApi"

const LastestPost = {
    async render() {
        const {data:blogs} = await BlogApi.getItemsByOption({_sort:'id',_order:'desc',_limit:5});
        return /*html*/ `
        ${blogs.map(blog =>{
            return /*html*/ `
            <div class="flex justify-start items-center my-3">
                <div>
                    <a href="/#//blog/${blog.id}">
                        <img class="w-36" src="${blog.image}" title="${blog.title}"
                        alt="${blog.title}">
                    </a>
                </div>
                <div class="ml-3">
                    <h6 class="text-xs font-semibold flex flex-wrap" title="${blog.title}"><a href="/#//blog/${blog.id}">${blog.title}</a></h6>
                    <p class="text-xs mt-1 text-gray-400">
                        December 21, 2020
                    </p>
                </div>
            </div>
            `
        }).join('')}
        `
    }
}

export default LastestPost;
