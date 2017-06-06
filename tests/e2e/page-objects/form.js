module.exports = class Form {
  constructor() {
    this.element = element(by.css('.tree-form'));
  }

  formStepTitle() {
    return this.element.$('h2');
  }

  activeInput() {
    browser.driver.switchTo().activeElement();
  }

  treeDropdown() {
    return this.element.$('select[name="tree"]');
  }

  firstNameField() { 
    return this.element.$('input[name="firstName"]');
  }

  lastNameField() { 
    return this.element.$('input[name="lastName"]');
  }

  emailField() { 
    return this.element.$('input[name="email"]');
  }

  phoneField() { 
    return this.element.$('input[name="phoneNumber"]');
  }

  addressField() {
    return this.element.$('input[name="address"]');
  }

  treeImageConfirmation() {
    return this.element.$('.center img');
  }

  treeNameConfirmation() {
    return this.element.all(by.css('ul li')).get(0);
  }

  fullNameConfirmation() {
    return this.element.all(by.css('ul li')).get(1);
  }

  phoneNumberConfirmation() {
    return this.element.all(by.css('ul li')).get(2);
  }

  emailConfirmation() {
    return this.element.all(by.css('ul li')).get(3);
  }

  streetAddressConfirmation() {
    return this.element.all(by.css('ul li')).get(4);
  }

  zipCodeConfirmation() {
    return this.element.all(by.css('ul li')).get(5);
  }

  nextButton() {
    return this.element.$('button[name="nextButton"]');
  }

  backButton() {
    return this.element.$('button[name="backButton"]');
  }

  submitButton() {
    return this.element.$('button[name="submitButton"]');
  }
}