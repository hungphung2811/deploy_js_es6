import categoryApi from './api/categoryApi';
import productApi from './api/productApi';
import Cart from './components/website/cart/Cart';
import Header from './components/website/Header';

const parseRequestURL = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    return {
        modules: request[1] ? request[1] : 'frontend',
        resource: request[2],
        id: request[3],
        slug: request[4]
    }
}

const $ = selector => {
    let elements = document.querySelectorAll(selector);
    if (!elements.length) return undefined;
    return elements.length === 1 ? elements[0] : [...elements];
}

const backToTop = () => {
    const rootElement = document.documentElement
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const subNavigation = async (cateId) => {
    const { data: categories } = await categoryApi.getAll();
    return categories.find(category => {
        return category.cateId == cateId;
    });
}

const reRender = async (component, position = '') => {
    if (position) {
        $(position).innerHTML = await component.render();
    } else {
        $('.main-content').innerHTML = await component.render();
        const { modules } = parseRequestURL();
        if (modules == 'frontend') {
            if (Header.afterRender) {
                await Header.afterRender() + await Header.setUpUser() + await Header.HandleLogicFormLogin();
            }
            $('.main-content').appendChild(Cart.render());
            Cart.afterRender();
            if ($('.cart-overlay')) {
                $('.cart').classList.add('showCart');
                $('.cart-overlay').classList.add('transparentBcg');
            }
        }
    }

    if (component.afterRender) await component.afterRender();
}

const increamenView = async (product) => {
    const tempProduct = { ...product };
    const view = parseInt(tempProduct.view) + 1;
    const newProduct = { ...tempProduct, view };

    await productApi.update(tempProduct.id, newProduct);
}
export const PreLoad = {
    render() {
        let divElement = document.createElement('div');
        divElement.innerHTML =/*html*/ `
        <div id="an">
            <div id="overlayLoad" class="fixed z-50 top-0 w-screen h-screen bg-gray-300 bg-opacity-60 visible opacity-100 transition-all duration-300">
                <div class="absolute top-0 w-full h-full">
                    <div class=" flex justify-center items-center w-full h-full">
                        quay tay
                    </div>
                </div>
            </div>
        </div>
    `
        return divElement;
    },
    afterRender() {
        $('#an').classList.remove('hidden');
        setTimeout(() => {
            $('#an').classList.add('hidden');
        }, 1000)
    }
}
export { parseRequestURL, $, backToTop, subNavigation, reRender, increamenView };
