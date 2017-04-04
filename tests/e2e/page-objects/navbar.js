module.exports = class Navbar {
  constructor() {
    this.element = element(by.css('.navbar'));
  }

  logo() {
    return this.element.$('img');
  }

  supportLink() {
    return this.element.$('a');
  }
}