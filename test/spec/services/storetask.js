'use strict';

describe('Service: storetask', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var storetask;
  beforeEach(inject(function (_storetask_) {
    storetask = _storetask_;
  }));

  it('should do something', function () {
    expect(!!storetask).toBe(true);
  });

});
