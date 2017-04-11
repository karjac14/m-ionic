'use strict';

describe('module: main, controller: ActivitiesCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ActivitiesCtrl;
  beforeEach(inject(function ($controller) {
    ActivitiesCtrl = $controller('ActivitiesCtrl');
  }));

  it('should do something', function () {
    expect(!!ActivitiesCtrl).toBe(true);
  });

});
