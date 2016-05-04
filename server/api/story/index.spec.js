/**
 * Created by JonDai on 2016/5/4.
 */
'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var storyCtrlStub = {
  // create: 'storyCtrl.create',
  index: 'storyCtrl.index',
  // show: 'storyCtrl.show',
  // update: 'storyCtrl.update',
  // destroy: 'storyCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var storyIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './story.controller': storyCtrlStub
});

describe("Story API Router" , function () {
  it('should return an express router instance', function() {
    storyIndex.should.equal(routerStub);
  });

  describe('GET /api/story', function() {

    it('should route to story.controller.index', function() {
      routerStub.get
        .withArgs('/', 'storyCtrl.index')
        .should.have.been.calledOnce;
    });

  });
});


describe("Story Task ", function () {
    
  it("Should run story task",function () {
    
  })
    
});
