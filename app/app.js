require("./styles/main.scss");

import angular from 'angular';
import TreeFormComponent from './components/tree-form';

angular.module('app', []);
angular.module('app').component('treeForm', TreeFormComponent);
