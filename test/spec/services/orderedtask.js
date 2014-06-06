'use strict';

describe('Service: OrderedTask', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var OrderedTask;
  beforeEach(inject(function (_OrderedTask_) {
    OrderedTask = _OrderedTask_;
  }));

  it('should do something', function () {
    expect(!!OrderedTask).toBe(true);
  });

});
