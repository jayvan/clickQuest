'use strict';

describe('Service: CombatTask', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var CombatTask;
  beforeEach(inject(function (_CombatTask_) {
    CombatTask = _CombatTask_;
  }));

  it('should do something', function () {
    expect(!!CombatTask).toBe(true);
  });

});
