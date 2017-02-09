import TREES from '../constants/trees';

export default {
  templateUrl: 'app/components/tree-form.html',

  controller() {
    this.trees = TREES;
    this.tree = '';
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = '';
    this.email = '';
    this.phone = '';

    this.submit = ()=> {
      console.log('Make call with...', {
        tree: this.tree,
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        email: this.email,
        phone: this.phone
      });
    }
  }
}
