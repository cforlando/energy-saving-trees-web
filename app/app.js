require("./styles/main.scss");

import angular from 'angular';
import YesNoFilter from './filters/yes-no';
import SemiColonToCommaFilter from './filters/semi-colon-to-comma';
import CmToInchesFilter from './filters/cm-to-inches';
import AutoFocusDirective from './directives/autofocus';
import TreeFormComponent from './components/tree-form';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';

angular.module('app', []);
angular.module('app').filter('cfoYesNo', YesNoFilter);
angular.module('app').filter('cfoSemiColonToComma', SemiColonToCommaFilter);
angular.module('app').filter('cfoCmToInches', CmToInchesFilter);
angular.module('app').directive('cfoAutoFocus', AutoFocusDirective);
angular.module('app').component('cfoTreeForm', TreeFormComponent);
angular.module('app').component('cfoNavbar', NavbarComponent);
angular.module('app').component('cfoFooter', FooterComponent);
