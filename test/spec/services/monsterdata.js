'use strict';

describe('Service: MonsterData', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var MonsterData;
  beforeEach(inject(function (_MonsterData_) {
    MonsterData = _MonsterData_;
  }));

  it('should do something', function () {
    expect(!!MonsterData).toBe(true);
  });

});
