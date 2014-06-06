'use strict';

describe('Service: UnorderedTask', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var UnorderedTask;
  beforeEach(inject(function (_UnorderedTask_) {
    UnorderedTask = _UnorderedTask_;
  }));

  it('should do something', function () {
    expect(!!UnorderedTask).toBe(true);
  });

});
