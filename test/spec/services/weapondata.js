'use strict';

describe('Service: WeaponData', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var WeaponData;
  beforeEach(inject(function (_WeaponData_) {
    WeaponData = _WeaponData_;
  }));

  it('should do something', function () {
    expect(!!WeaponData).toBe(true);
  });

});
