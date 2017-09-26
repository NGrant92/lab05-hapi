'use strict';

exports.home = {

  handler: function (request, reply) {
    reply.view('home', { title: 'Make a Donation' });
  },

};

exports.report = {

  handler: function (request, reply) {
    reply.view('report', {
      title: 'Donations to Date',
      currentUser: this.currentUser,
      donations: this.donations,
    });
  },
};

exports.donate = {

  handler: function (request, reply) {
    let donation = request.payload;
    let donorEmail = request.auth.credentials.loggedInUser;
    donation.donor = this.users[donorEmail];
    this.donations.push(donation);
    reply.redirect('/report');
  },
};
