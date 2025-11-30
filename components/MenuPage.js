export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    const styles = document.createElement("style");
    this.root.appendChild(styles);
    async function loadCSS() {
      const result = await fetch("/components/menuPage.css");
      const css = await result.text();
      styles.textContent = css;
    }
    loadCSS();
  }
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true); //deep clone
    this.root.appendChild(content); //append to shadow DOM
  }
}
customElements.define("menu-page", MenuPage); //define custom element
