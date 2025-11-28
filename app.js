window.addEventListener("DOMContentLoaded", () => {
  let nav = document.querySelector("nav");
  console.log(nav);
  nav.innerHTML = `
  <h2>Hello DOM <h2>
  <p>This content is loaded dynamically.</p>
`;
});

window.addEventListener("DOMContentLoaded", () => {});

const $ = function (args) {
  return document.querySelector(args);
};
const $$ = function (args) {
  return document.querySelectorAll(args);
};

HTMLElement.prototype.on = function (a, b, c) {
  return this.addEventListener(a, b, c);
};
HTMLElement.prototype.off = function (a, b) {
  return this.removeEventListener(a, b);
};
HTMLElement.prototype.$ = function (s) {
  return this.querySelector(s);
};
HTMLElement.prototype.$$ = function (s) {
  return this.querySelectorAll(s);
};
