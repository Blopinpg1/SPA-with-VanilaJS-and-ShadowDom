export class OrderPage extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: "open" });
  }
}
customElements.define("order-page", OrderPage);
