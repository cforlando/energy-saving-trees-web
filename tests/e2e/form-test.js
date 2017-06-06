const FormPageObject = require('./page-objects/form');

describe('One Person One Tree Multistep Form', ()=> {
  beforeEach(()=> {
    browser.get('http://localhost:8080');
  });

  it('Traverse through the form', ()=> {
    const form = new FormPageObject();

    // STEP ONE
    expect(form.formStepTitle().getText()).toEqual('Pick a Tree');
    expect(form.treeDropdown().$$('option:checked').get(0).getText()).toEqual('Eagleston Holly');
    form.nextButton().click();
    
    // STEP TWO
    expect(form.formStepTitle().getText()).toEqual('Enter Your Contact Information');
    expect(form.nextButton().getAttribute('disabled')).toEqual('true');
    form.firstNameField().sendKeys('Nathan');
    form.lastNameField().sendKeys('Explosion');
    form.emailField().sendKeys('test@test.com');
    form.phoneField().sendKeys('111-111-1111');
    form.nextButton().click();
    
    // STEP THREE
    expect(form.formStepTitle().getText()).toEqual('Enter Your Delivery Information');
    expect(form.nextButton().getAttribute('disabled')).toEqual('true');
    form.addressField().sendKeys('123 Foo Street');
    form.nextButton().click();

    // STEP FOUR
    expect(form.formStepTitle().getText()).toEqual('Confirmation');
    expect(form.treeImageConfirmation().getAttribute('alt')).toEqual('Eagleston Holly');
    expect(form.treeNameConfirmation().getText()).toEqual('Tree Name: Eagleston Holly');
    expect(form.fullNameConfirmation().getText()).toEqual('Name: Nathan Explosion');
    expect(form.phoneNumberConfirmation().getText()).toEqual('Phone Number: 111-111-1111');
    expect(form.emailConfirmation().getText()).toEqual('Email: test@test.com');
    expect(form.streetAddressConfirmation().getText()).toEqual('Street Address: 123 Foo Street');
    expect(form.zipCodeConfirmation().getText()).toEqual('Zip Code: 32801');
    form.submitButton().click();
  });
});