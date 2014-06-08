'use strict';

describe('Service: GloveData', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var GloveData;
  beforeEach(inject(function (_GloveData_) {
    GloveData = _GloveData_;
  }));

  it('should do something', function () {
    expect(!!GloveData).toBe(true);
  });

});
