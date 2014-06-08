'use strict';

describe('Service: ChestData', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var ChestData;
  beforeEach(inject(function (_ChestData_) {
    ChestData = _ChestData_;
  }));

  it('should do something', function () {
    expect(!!ChestData).toBe(true);
  });

});
