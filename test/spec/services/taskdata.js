'use strict';

describe('Service: taskData', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var taskData;
  beforeEach(inject(function (_taskData_) {
    taskData = _taskData_;
  }));

  it('should do something', function () {
    expect(!!taskData).toBe(true);
  });

});
