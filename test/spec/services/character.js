'use strict';

describe('Service: Character', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var Character;
  beforeEach(inject(function (_Character_) {
    Character = _Character_;
  }));

  it('should do something', function () {
    expect(!!Character).toBe(true);
  });

});
