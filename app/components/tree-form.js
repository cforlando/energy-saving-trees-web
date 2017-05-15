import TREES from '../constants/trees';
import ZIP_CODES from '../constants/zips';

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

    // Form Data
    this.trees = TREES;
    this.zips = ZIP_CODES;
    this.tree = '0';
    this.firstName = '';
    this.lastName = '';
    this.address = '';
    this.city = '';
    this.state = '';
    this.zip = '32801';
    this.email = '';
    this.phone = '';

    this.currentStep = 1;

    this.numSteps = 4;

    this.back = ()=> {
      if(this.currentStep <= 1) {
        return;
      }

      this.currentStep--;
    };

    this.next = ()=> {
      if(this.currentStep >= this.numSteps) {
        return;
      }

      this.currentStep++;
    };

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
      this.currentStep++;
    }
  }

}
