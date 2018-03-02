import template from './echoItem.html';
import controller from './echoItem.controller';
import './echoItem.scss';

let echoItemComponent = {
  bindings: {
    message: '=',
  },
  template,
  controller,
};

export default echoItemComponent;
