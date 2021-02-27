import HeaderBackend from './components/admin/HeaderBackend';
import Sidebar from './components/admin/Sidebar';
import Cart from './components/website/cart/Cart';
import Footer from './components/website/Footer';
import Header from './components/website/Header';
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import DashboardPage from './pages/admin/DashboardPage';
import Error404Page from './pages/Error404Page';
import BlogPage from './pages/website/BlogPage';
import CategoryPage from './pages/website/CategoryPage';
import CheckOut from './pages/website/CheckOut';
import ContactPage from './pages/website/ContactPage';
import DetailProductPage from './pages/website/DetailProductPage';
import HomePage from './pages/website/HomePage';
import ProductsPage from './pages/website/ProductsPage';
import { $, backToTop, parseRequestURL, PreLoad } from './utils';

const routes = {
    '/frontend': HomePage,
    '/frontend/product/:id': DetailProductPage,
    '/frontend/products': ProductsPage,
    '/frontend/category/:id': CategoryPage,
    '/frontend/contact': ContactPage,
    '/frontend/blog': BlogPage,
    '/frontend/checkout': CheckOut,
    '/backend': DashboardPage,
    '/backend/products': AdminProductsPage,
    '/backend/categories': AdminCategoriesPage,
};

const router = async () => {
    // PreLoad.afterRender();
    const { modules, resource, id } = parseRequestURL();
    const request =
        (modules ? `/${modules}` : '/') + (resource ? `/${resource}` : '') + (id ? `/:id` : '');
    const page = routes[request] ? routes[request] : Error404Page;
    if (modules == 'backend') {
        $('.app').innerHTML = /*html*/
            `<div class="grid grid-cols-12 container mx-auto">
                ${Sidebar.render()}
                <main class="col-span-10">
                    ${HeaderBackend.render()}
                    <div id="main-content">${await page.render()}</div>
                </main>
            </div>`;
    } else {
        $('.app').innerHTML =
            `${await Header.render()}
            <main class="main-content">${await page.render()}</main>
            ${Footer.render()}`;
    }
    if (modules == 'frontend') {
        if (Header.afterRender) {
            await Header.afterRender() + await Header.setUpUser() + await Header.HandleLogicFormLogin();
        }
        $('.main-content').appendChild(Cart.render());
        Cart.afterRender();
    }
    if (page.afterRender) await page.afterRender();
    // $('.main-content').appendChild(PreLoad.render());
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', () => {
    if (document.documentElement.scrollTop > 200) backToTop();
    router();
});