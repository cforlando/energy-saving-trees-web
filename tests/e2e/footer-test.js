const FooterPageObject = require('./page-objects/footer');

describe('Footer', ()=> {
  
  beforeEach(()=> {
    browser.get('http://localhost:8080');
  });

  it('should display a footer with relevant information', ()=> {
    const footer = new FooterPageObject();
    expect(footer.logo().getAttribute('src')).toEqual('http://localhost:8080/img/city-of-orlando-logo.png');
    expect(footer.link().getAttribute('href')).toEqual('http://www2.cityoforlando.net/orlandoinformationlocator/');
    expect(footer.message().getText()).toEqual('Applicants must reside within Orlando City Limits. Find out if you do by clicking here');
  });
});