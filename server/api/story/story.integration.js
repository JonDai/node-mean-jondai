/**
 * Created by JonDai on 2016/5/4.
 */
'use strict';

var app = require('../..');
import request from 'supertest';

var newStory;

describe("Story API:", function () {

  describe('GET /api/story', function() {
    var storys;

    beforeEach(function(done) {
      request(app)
        .get('/api/story')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          storys = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      storys.should.be.instanceOf(Array);
    });

  });


});
