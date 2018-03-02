import HomeModule from './home';
import sinon from 'sinon';
import * as rx from 'rxjs';

rx.Observable = {
  webSocket: () => ({
    subscribe: x => x(),
    next: x => x,
  }),
};

describe('Home', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(HomeModule));

  beforeEach(
    inject($injector => {
      $rootScope = $injector.get('$rootScope');
      $componentController = $injector.get('$componentController');
      $state = $injector.get('$state');
      $location = $injector.get('$location');
      $compile = $injector.get('$compile');
    }),
  );

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
    it('default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).to.eq('home');
    });
  });

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('home', {
        $scope: $rootScope.$new(),
      });
    });

    it('has a name property', () => {
      // erase if removing this.name from the controller
      expect(controller).to.have.property('name');
    });

    it('has a $scope property, and $scope has right properties', () => {
      // erase if removing this.name from the controller
      expect(controller).to.have.property('$scope');

      const { messages, value } = controller.$scope;

      expect(messages).to.be.an('array');
      expect(value).to.be.a('string');
    });

    it('should clear the value with send()', () => {
      controller.$scope.value = 'stuff';
      controller.send();
      expect(controller.$scope.value).to.eq('');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<home></home>')(scope);
      scope.$apply();
    });

    it('has name in template', () => {
      expect(template.find('h1').html()).to.eq('Give me something to echo:');
    });
  });
});
