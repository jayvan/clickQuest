'use strict';

describe('Service: RandomTask', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var RandomTask;
  beforeEach(inject(function (_RandomTask_) {
    RandomTask = _RandomTask_;
  }));

  it('should do something', function () {
    expect(!!RandomTask).toBe(true);
  });

});
