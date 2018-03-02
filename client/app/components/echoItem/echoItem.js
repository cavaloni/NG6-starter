import angular from 'angular';
import uiRouter from 'angular-ui-router';
import echoItemComponent from './echoItem.component';

let echoItemModule = angular.module('echoItem', [
  uiRouter
])

.component('echoItem', echoItemComponent)

.name;

export default echoItemModule;
