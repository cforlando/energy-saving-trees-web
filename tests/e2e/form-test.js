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
    expect(form.submitButton().getAttribute('disabled')).toEqual('true');
    form.addressField().sendKeys('123 Foo Street');
    form.submitButton().click();

    // STEP FOUR
    expect(form.formStepTitle().getText()).toEqual('Confirmation');
  });
});