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