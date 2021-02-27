const FilterProducts ={
    render(){
        return  /*html*/ `
            <div class="col-span-3 border border-gray-50 bg-gray-50 py-3 px-5 shadow max-h-80">
                    <div>
                        <p class="text-lg font-semibold mb-1.5">Price</p>
                        <input class="w-3/4" type="range" name="" min="0" max="1000.00" id="">
                    </div>
                    <div>
                        <p class="text-lg font-semibold mb-1.5">Categories</p>
                        <ul class="ml-3">
                            <li><input type="checkbox" name=""><a class="ml-2" href="#">Men</a></li>
                            <li><input type="checkbox" name=""><a class="ml-2" href="#">Women</a></li>
                            <li><input type="checkbox" name=""><a class="ml-2" href="#">Accessories</a></li>
                        </ul>
                    </div>
                </div>
        `
    }
}

export default FilterProducts;
