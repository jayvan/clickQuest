'use strict';

describe('Service: HelmetData', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var HelmetData;
  beforeEach(inject(function (_HelmetData_) {
    HelmetData = _HelmetData_;
  }));

  it('should do something', function () {
    expect(!!HelmetData).toBe(true);
  });

});
