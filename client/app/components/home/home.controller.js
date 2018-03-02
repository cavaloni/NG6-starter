import { Observable as O } from 'rxjs';

class HomeController {
  constructor($scope) {
    this.name = 'home';
    this.$scope = $scope;
    this.$scope.value = '';
    this.$scope.messages = [];
    this.setupSocket();
  }

  send() {
    this.socketSubject.next(JSON.stringify(this.$scope.value));
    this.$scope.value = '';
  }

  setupSocket() {
    this.socketSubject = O.webSocket('wss://echo.websocket.org');
    this.socketSubject.subscribe((x) => {
      this.$scope.messages.push(x);
      this.$scope.$apply();
    });
  }
}

HomeController.$inject = ['$scope'];

export default HomeController;
