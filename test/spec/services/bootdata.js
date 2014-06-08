'use strict';

describe('Service: BootData', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var BootData;
  beforeEach(inject(function (_BootData_) {
    BootData = _BootData_;
  }));

  it('should do something', function () {
    expect(!!BootData).toBe(true);
  });

});
