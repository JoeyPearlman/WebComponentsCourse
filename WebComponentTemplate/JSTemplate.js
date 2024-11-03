//class NameTag is the string used to reference the JS portion

class NameTag extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>Hello, my name is John.</h1>`;
  }
}

//name-tag is the string used to reference the HTML portion
// Does this mean custom elements need to be one class?
customElements.define("name-tag", NameTag);
