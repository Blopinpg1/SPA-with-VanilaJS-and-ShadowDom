import Store from "/services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

//link my web components
import { MenuPage } from "./components/Menupage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";
import ProductItem from "./components/ProductItem.js";
import CartItem from "./components/CardItem.js";

window.app = {}; // Global app object
app.store = Store; // Global store
app.router = Router; // Global router

window.addEventListener("DOMContentLoaded", async () => {
  loadData(); // Load menu data when DOM is fully loaded
  app.router.init(); // Initialize the router after DOM is loaded
});

window.addEventListener("appcartchange", (event) => {
  const badge = document.getElementById("badge");
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
  badge.textContent = qty;
  badge.hidden = qty == 0;
});

// const $ = function (args) {
//   return document.querySelector(args);
// };
// const $$ = function (args) {
//   return document.querySelectorAll(args);
// }; // shorthand for querySelector and querySelectorAll

// HTMLElement.prototype.on = function (a, b, c) {
//   return this.addEventListener(a, b, c);
// };
// HTMLElement.prototype.off = function (a, b) {
//   return this.removeEventListener(a, b);
// };
// HTMLElement.prototype.$ = function (s) {
//   return this.querySelector(s);
// };
// HTMLElement.prototype.$$ = function (s) {
//   return this.querySelectorAll(s);
// };
// // shorthand for adding methods to HTMLElement prototype
