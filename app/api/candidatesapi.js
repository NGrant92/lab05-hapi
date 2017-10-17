"use strict";

const Candidate = require("../models/candidate");
const Boom = require("boom");

exports.find = {
  auth: false,

  handler: function(request, reply) {
    Candidate.find({})
      .exec()
      .then(candiates => {
        reply(candiates);
      })
      .catch(err => {
        reply(Boom.badImplementation("error accessing db"));
      });
  }
};