'use strict';

const assert = require('chai').assert;
const DonationService = require('./donation-service');
const fixtures = require('./fixtures.json');
const _ = require('lodash');

suite('User API tests', function () {

  let users = fixtures.users;
  let newUser = fixtures.newUser;

  const donationService = new DonationService('http://localhost:4000');

  test('create a user', function () {
    const returnedUser = donationService.createUser(newUser);
    assert(_.some([returnedUser], newUser),  'returned User must be a superset of newUser');
    assert.isDefined(returnedUser._id);
  });

  test('delete a user', function () {
    const u = donationService.createUser(newUser);
    assert(donationService.getUser(u._id) != null);
    donationService.deleteOneUser(u._id);
    assert(donationService.getUser(u._id) == null);
  });
});