import Store from "/services/Store.js";
import API from "/services/API.js";
import { loadData } from "./services/Menu";
import Router from "./services/Router";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
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
