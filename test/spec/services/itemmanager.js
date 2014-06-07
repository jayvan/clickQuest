'use strict';

describe('Service: ItemManager', function () {

  // load the service's module
  beforeEach(module('clickQuestApp'));

  // instantiate service
  var ItemManager;
  beforeEach(inject(function (_ItemManager_) {
    ItemManager = _ItemManager_;
  }));

  it('should do something', function () {
    expect(!!ItemManager).toBe(true);
  });

});
