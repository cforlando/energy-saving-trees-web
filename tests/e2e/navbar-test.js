const NavbarPageObject = require('./page-objects/navbar');

describe('Navbar', ()=> {
  
  beforeEach(()=> {
    browser.get('http://localhost:8080');
  });

  it('should display a navbar with relevant information', ()=> {
    const navbar = new NavbarPageObject();
    expect(navbar.logo().getAttribute('src')).toEqual('http://localhost:8080/img/OPOT_Logo.jpg');
    expect(navbar.supportLink().getAttribute('href')).toEqual('http://www.cityoforlando.net/trees/');
  });
});