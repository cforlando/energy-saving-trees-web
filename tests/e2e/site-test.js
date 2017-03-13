describe('One Person One Tree Web Application', ()=> {
  it('should load the correct web application', ()=> {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('City of Orlando; One Person One Tree');
  });
});