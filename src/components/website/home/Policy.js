const Policy={
    render(){
        return /*html*/ `
        <section class="grid grid-cols-1 lg:grid-cols-3 text-gray-800 my-5 md:px-8 lg:px-16 xl:px-32">
                <div class="flex justify-around items-center p-3 border">
                    <div class="text-4xl text-red-500 text-opacity-80">
                        <i class="fas fa-truck"></i>
                    </div>
                    <div class="text-sm ml-3">
                        <p class="font-medium">Extra fast delivery</p>
                        <p class="text-xs mt-1">
                            Your order will be delivered 3-5 business days
                            after all of your items are available
                        </p>
                    </div>
                </div>
                <div class="flex justify-around items-center p-3 border">
                    <div class="text-4xl text-red-500 text-opacity-80">
                        <i class="fas fa-money-check-alt"></i>
                    </div>
                    <div class="text-sm ml-3">
                        <p class="font-medium">Extra fast delivery</p>
                        <p class="text-xs mt-1">
                            Your order will be delivered 3-5 business days
                            after all of your items are available
                        </p>
                    </div>
                </div>
                <div class="flex justify-around items-center p-3 border">
                    <div class="text-4xl text-red-500 text-opacity-80">
                        <i class="fas fa-comments"></i>
                    </div>
                    <div class="text-sm ml-3">
                        <p class="font-medium">Extra fast delivery</p>
                        <p class="text-xs mt-1">
                            Your order will be delivered 3-5 business days
                            after all of your items are available
                        </p>
                    </div>
                </div>
            </section>
        `
    }
}

export default Policy;
