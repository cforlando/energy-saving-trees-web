import TREES from '../constants/trees';

/**
 * @module
 * @description Component responsible for filling out the tree selection form
 */
export default {

  /** @type { String } */
  templateUrl: 'app/components/tree-form.html',

  /**
   * @function
   * @description Component controller responsible for comminication with the the template file
   * @returns { Void }
   */
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
