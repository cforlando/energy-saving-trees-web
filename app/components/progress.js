/**
 * @module
 * @description Component responsible for displaying the progress on a multistep form
 */
export default {

  /** @type { String } */
  templateUrl: 'app/components/progress.html',
  
  /** @type { Object } */
  bindings: {
    step: '<',
    total: '<'
  },

  /**
   * @function
   * @description Component controller responsible for comminication with the the template file
   * @returns { Void }
   */
  controller() {

    /**
     * @function
     * @description Return the total progress though the multistep form
     * @returns { String }
     */
    this.progress = function() {
      const percent = this.step / this.total * 100;
      return percent + '%';
    };
  }    
}
