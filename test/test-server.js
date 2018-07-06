"use strict";

const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server.js");

const expect = chai.expect;

chai.use(chaiHttp);

describe("index page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get("/")
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});

describe("create new routine page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get('/createnewroutine')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});

describe("existing workout page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get('/existingworkout')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});

describe("login page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get('/login')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});

describe("new workout page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get('/newworkout')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});

describe("saved workout page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get('/savedworkout')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});

describe("select workout page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get('/selectworkout')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});

describe("workout tracker page", function() {
  it("should exist", function() {
    return chai
      .request(app)
      .get('/workouttracker')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });
});