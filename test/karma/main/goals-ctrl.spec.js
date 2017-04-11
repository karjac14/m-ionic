'use strict';

describe('module: main, controller: GoalsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var GoalsCtrl;
  beforeEach(inject(function ($controller) {
    GoalsCtrl = $controller('GoalsCtrl');
  }));

  it('should do something', function () {
    expect(!!GoalsCtrl).toBe(true);
  });

});
