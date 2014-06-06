'use strict';

describe('Service: Taskmanager', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var Taskmanager;
  beforeEach(inject(function (_Taskmanager_) {
    Taskmanager = _Taskmanager_;
  }));

  it('should do something', function () {
    expect(!!Taskmanager).toBe(true);
  });

});
