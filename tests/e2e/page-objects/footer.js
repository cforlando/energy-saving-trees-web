module.exports = class Footer {
  constructor() {
    this.element = element(by.css('.footer'));
  }

  logo() {
    return this.element.$('img');
  }

  message() {
    return this.element.$('p');
  }

  link() {
    return this.element.$('a');
  }
}