/**
 * Created by JonDai on 2016/5/4.
 */

'use strict'
import _ from 'lodash';
import Story from './story.model.js';
import StoryDetail from './story.detail.model';

export function index(req, res) {
  return Story.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function show(req, res){
  return StoryDetail.findOne({wiki_id:req.params.id}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function create(req, res) {
  console.log(req);
  return Story.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}


function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          return res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).send(err);
  };
}
