'use strict';

describe('module: main, controller: TasksCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var TasksCtrl;
  beforeEach(inject(function ($controller) {
    TasksCtrl = $controller('TasksCtrl');
  }));

  it('should do something', function () {
    expect(!!TasksCtrl).toBe(true);
  });

});
