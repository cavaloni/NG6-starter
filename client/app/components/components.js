import angular from 'angular';
import Home from './home/home';
// import About from './about/about';
import echoItem from './echoItem/echoItem';

let componentModule = angular.module('app.components', [
  Home,
  // About,
  echoItem,
])

.name;

export default componentModule;
