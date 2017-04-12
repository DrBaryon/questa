import { RECEIVE_CURRENT_USER, LOGOUT, RECEIVE_ERRORS, RECEIVE }
  from '../actions/session_actions';
import { RECEIVE_ALL_TOPICS, RECEIVE_FOLLOWED_TOPIC, REMOVE_FOLLOWED_TOPIC }
  from '../actions/topic_actions';

import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    case LOGOUT:
      return merge({}, _nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    case RECEIVE_ALL_TOPICS:
      let topics = action.topics;
      newState.currentUser.potentialTopics = topics;
      return newState;
    case RECEIVE_FOLLOWED_TOPIC:
      debugger
      let topic = action.follow.topic;
      newState.currentUser.topics[topic.id] = topic;
      return newState;
    case REMOVE_FOLLOWED_TOPIC:
      let deletedTopic = action.follow.topic
      delete newState.currentUser.topics[deletedTopic.id];
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
