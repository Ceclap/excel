// eslint-disable-next-line require-jsdoc
export default class Excel {
  // eslint-disable-next-line require-jsdoc
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.component = options.components || [];
    // если не задан тип, то вместо undefined будет []
    // $ внчале переменной означает что в ней ДОМ
  }
  // eslint-disable-next-line require-jsdoc
  getRoot() {
    const $root = document.createElement("div");
    this.component.forEach((Component)=>{
      const component = new Component();
      console.log(component);
      console.log(component.toHTML());
    });
    return $root;
  }
  // eslint-disable-next-line require-jsdoc
  render() {
    //   console.log(this.$el);
    //   this.$el.insertAdjacentHTML("afterbegin", "<h1>Eu imi" +
    //     " va demonstra ca pot!!</h1>");
    // }
    this.$el.append(this.getRoot());
  }
  // a.textContent = "eu voi veni "
  // document.body.
}
